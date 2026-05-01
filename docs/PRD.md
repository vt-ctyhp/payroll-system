# Payroll & Attendance System — Product Requirements Document

**Project:** Internal payroll & attendance system, built in Google Sheets + Apps Script
**Owner:** [Your name]
**Status:** Draft v2
**Last updated:** 2026-04-30

> **Changes from v1:**
> - Phase 1 attendance tracking is now an employee-facing self-service **web app** (Apps Script HtmlService) with real auto-timestamps. Assistants do NOT log attendance.
> - Added §10 Employee Lifecycle (Add / Offboard / Reactivate) with full history preservation.
> - Phase 1 now includes a basic Add Employee dialog. Phase 5 now includes the full Offboard + Reactivate flow with auto-Final-Payroll.

---

## 1. Background & Goals

We currently process payroll twice per month using attendance data exported from Jibble plus manual reading of compensation plans (one tab per employee). This is fragile, slow, and risks mixing confidential pay data with the assistants who help process payroll.

We are moving **off Jibble entirely** and building a self-contained Google Sheets + Apps Script system that:

1. Lets employees self-clock in/out (and lunch/break in/out) via a web app with real timestamps.
2. Calculates payroll per the rules in `Payroll_Calculation_Compensation_Structure_Baseline.pdf` (the "Baseline doc").
3. Manages PTO/UTO balances, makeup hours, attendance bonus eligibility, and KPI bonus approval.
4. Produces a clean per-employee **scorecard** for attendance & performance reviews.
5. Enforces **confidentiality** between assistants (who never see pay) and the payroll processor (who sees pay).
6. Supports compensation changes (raises), employee onboarding/offboarding, and annual performance reviews via menu-driven dialogs.

### Success criteria

- Employees can clock in/out from any device in under 3 seconds.
- Payroll for one full pay period can be calculated in under 5 minutes once the period is closed.
- No assistant can ever see pay, bonus, or compensation data for any employee.
- Every payroll calculation is auditable: line item by line item.
- Attendance bonus eligibility is shown with a clear yes/no plus the reason.
- All compensation changes, employee additions, and offboardings are recorded with effective dates and never silently overwrite history.

---

## 2. Glossary

| Term | Definition |
|---|---|
| **Pay period** | The work period covered by one payroll. Either 1st–15th or 16th–end-of-month. |
| **Payroll date** | The date the employee is actually paid: the 15th or end-of-month. |
| **15th payroll** | Pays for the previous month's 16th through end-of-month. Includes attendance bonus + KPI bonus for the previous full month. |
| **End-of-month payroll** | Pays for the current month's 1st–15th. |
| **Scheduled day** | A day the employee is expected to work per their work schedule. |
| **Scheduled hours** | The 8 hours expected on a scheduled day (the "8-hour daily cap"). |
| **Payable hours** | Hours that count toward base salary, capped at 8/day unless makeup hours are approved. |
| **Late minutes** | `actual_clock_in − scheduled_start_time`, plus `actual_lunch_return − scheduled_lunch_end` if applicable. Aggregated per pay period (for base salary deduction) and per month (for attendance bonus). |
| **Makeup hours** | Hours worked beyond the 8-hour cap that are explicitly approved by management. Required to lift the cap. |
| **PTO** | Paid Time Off. Drawn from the employee's annual PTO balance. Does NOT count against attendance bonus. |
| **UTO** | Unpaid Time Off. Counts against attendance bonus. Reduces base salary. |
| **Non-PTO** | Approved time off not charged against PTO balance and not paid. Counts against attendance bonus. |
| **Attendance bonus (PA)** | "Perfect Attendance" bonus paid on the 15th payroll, for the previous full month. Requires no disqualifying absences AND ≤ 90 total late minutes. |
| **KPI bonus** | Monthly performance bonus. Requires explicit approval each payroll. |
| **Quarterly PA bonus** | Additional $150 bonus when an employee earns the monthly attendance bonus 3 months in a row. Paid at end of quarter. *(Confirmation needed — see §13.)* |
| **Clock event** | A single timestamped action by an employee: Clock In, Lunch Start, Lunch End, Break Start, Break End, Clock Out. |

---

## 3. System Architecture

### 3.1 Three components

```
┌─────────────────────────────┐
│   ATTENDANCE WEB APP        │  ◄── Employees clock in/out from phone/desktop
│   (Apps Script HtmlService) │      Writes to Attendance Sheet via script auth
└──────────────┬──────────────┘
               │
               ▼
┌──────────────────────────────────┐         ┌──────────────────────────────────┐
│   ATTENDANCE SHEET (shared)      │         │   PAYROLL SHEET (private)        │
│   Edit access: assistants +      │         │   Edit access: payroll processor │
│   payroll processor              │  ────▶  │   ONLY                           │
│                                  │  pull   │                                  │
│  - Employee directory (no $)     │         │  - Compensation Master           │
│  - Work schedules                │         │  - Pay Period Calculations       │
│  - Holidays                      │         │  - Payroll Outputs               │
│  - Clock Events (raw log)        │         │  - Adjustments / Bonuses         │
│  - Attendance Log (derived)      │         │  - Compensation Change Log       │
│  - PTO/UTO requests & balances   │         │  - Employee Lifecycle Log        │
│  - Makeup hour requests          │         │  - Performance Reviews           │
│  - Scorecard (attendance only)   │         │                                  │
└──────────────────────────────────┘         └──────────────────────────────────┘
```

The Payroll Sheet pulls attendance data from the Attendance Sheet using Apps Script (preferred over `IMPORTRANGE` for auth control and error handling). The Attendance Sheet has no knowledge of pay; even if an assistant exports the entire sheet, no compensation data is exposed.

### 3.2 Why not one sheet with tab protection?

Google Sheets tab/range protections are bypassable by anyone with copy access or API access. For genuinely confidential data, file-level access control (separate spreadsheet) is the only safe approach.

### 3.3 Why a web app instead of Google Forms for clock-in?

- Forms can't easily express "you're already clocked in" state, leading to double-clocks
- Forms can't enforce a sensible event sequence (e.g., can't clock out before you clock in)
- A web app gives one bookmarkable URL with four big buttons that change state in real time
- Apps Script web apps are free, hosted by Google, no servers to manage, and write directly to the Attendance Sheet
- Works on phone, tablet, and desktop browsers

### 3.4 Permissions matrix

| Role | Web App | Attendance Sheet | Payroll Sheet |
|---|---|---|---|
| Employee | Use (their own clock events only) | No direct access | No access |
| Assistant | View only (for monitoring, optional) | Edit | No access |
| Payroll processor | View | Edit | Edit |
| Manager / owner | View | Edit | Edit |

---

## 4. Phasing

Each phase is independently deployable. Do not start the next phase until the current is in production and stable for at least one full pay cycle.

### Phase 1 — MVP: self-service attendance + basic payroll (target: ~3 weeks)
**Attendance**
- Attendance Sheet structure: Employees, Work Schedules, Holidays, Clock Events, Attendance Log
- **Employee Clock-In Web App** (HtmlService): Clock In / Lunch Start / Lunch End / Break Start / Break End / Clock Out
- Auto-timestamping with employee identification
- Attendance Log auto-built from Clock Events (one row per employee per day)
- Manual edit/correction by manager when needed (forgot to clock out, etc.)
- Basic **Add Employee** dialog (Attendance Sheet + Payroll Sheet in one action)

**Payroll**
- Payroll Sheet structure: Compensation Master, Pay Periods, Payroll Calculations, Payroll Output
- Compensation seeded with 8 active employees
- Apps Script: cross-sheet read + pay-period calculator
- Calculations: base salary, late-minute deductions, absence deductions
- "Calculate Pay Period" menu + dialog
- Output: per-employee summary for the selected period

### Phase 2 — Attendance bonus + scorecard
- Monthly attendance bonus eligibility logic (no disqualifying absences + ≤ 90 late minutes)
- "Why didn't they qualify?" reasoning displayed clearly
- Per-employee **scorecard**: shareable page showing attendance stats only — safe to screenshot and send to the employee
- Quarterly PA bonus tracking (3 consecutive months of perfect attendance → $150)

### Phase 3 — Benefits + KPI bonus + adjustments
- Benefits split across the two payrolls in a month, with proration for mid-month start/leave/unpaid leave
- KPI bonus approval dialog (per employee per period: full, partial %, or denied)
- Additional management bonuses input
- Positive/negative adjustments input
- Final payroll output with all components

### Phase 4 — PTO/UTO/makeup workflow
- PTO/UTO/Non-PTO request submissions (employees submit via web app or sheet menu)
- PTO balance tracking per employee (annual allowance from comp plan, deducted as used)
- Makeup-hour request submissions
- Approval workflow (manager approves before it counts in payroll calculations)
- Approved time off automatically reflected in Attendance Log + payroll
- Holidays tab integration (paid holidays count as present for attendance bonus)

### Phase 5 — Compensation changes + full employee lifecycle
- Compensation Change dialog (Payroll Sheet menu only)
- Effective dates default to the 1st of the next month
- Retroactive raises automatically generate adjustment line items
- **Offboard Employee dialog**: marks resignation/termination, sets end dates everywhere, triggers auto-Final-Payroll with Baseline-doc resignation rules (attendance bonus forfeited, KPI prorated if approved, benefits prorated)
- **Reactivate Employee dialog**: for rehires; creates new effective-dated rows rather than reopening old ones
- Compensation Change Log + Employee Lifecycle Log (full audit trails, append-only)

### Phase 6 — Annual performance review
- Performance review dialog with structured rubric
- Pulls attendance + KPI history automatically
- Generates a printable review document
- Optional: ties into a recommended raise/ramp-up that flows into Phase 5

---

## 5. Data Model (tab-by-tab)

### 5.1 ATTENDANCE SHEET

#### Tab: `Employees` (no pay info)

| Column | Type | Notes |
|---|---|---|
| Employee Code | string | Primary key, e.g., `Mark-1` |
| Full Name | string | |
| Display Name | string | First name or nickname for scorecards/web app |
| Status | enum | `Active`, `Inactive`, `Resigned`, `Terminated` |
| Start Date | date | First day of current employment period |
| End Date | date | Last working day; blank if still active |
| Position | string | |
| Manager | string | |
| Email | string | Used to identify them in the web app |
| Web App PIN | string | Optional simple PIN for clock-in identification (see §6) |
| Notes | string | |

#### Tab: `Work Schedules` (structured, effective-dated)

One row per employee per schedule period. When a schedule changes, append a new row with a new `Effective From` and set the previous row's `Effective To`.

| Employee Code | Effective From | Effective To | Mon Start | Mon End | Tue Start | Tue End | Wed Start | Wed End | Thu Start | Thu End | Fri Start | Fri End | Sat Start | Sat End | Sun Start | Sun End | Scheduled Lunch Start | Scheduled Lunch End |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

- Blank start/end = not scheduled that day
- Times stored as 24-hour decimals (10:00 AM = `10.00`, 7:00 PM = `19.00`)
- `Effective To` blank = currently active

#### Tab: `Holidays`

| Date | Holiday Name | Paid? (Y/N) | Applies To (All / Employee Code list) |
|---|---|---|---|

Paid holidays count as "present" for attendance bonus eligibility.

#### Tab: `Clock Events` (raw log — append-only)

The web app writes one row here per button press. This is the source of truth for everything attendance-related.

| Event ID | Timestamp | Employee Code | Event Type | Source | IP / Device | Notes |
|---|---|---|---|---|---|---|

- **Event Type** is one of: `CLOCK_IN`, `LUNCH_START`, `LUNCH_END`, `BREAK_START`, `BREAK_END`, `CLOCK_OUT`
- **Source** is `WEB_APP` (default), `MANUAL` (admin entered/corrected), or `IMPORTED` (one-time backfill)
- Manager can append manual rows for forgotten clock-outs; the Source flag makes corrections obvious in audit
- Append-only by policy; corrections are made by adding a `MANUAL` event with a Notes explanation, never by editing original rows

#### Tab: `Attendance Log` (derived view, one row per employee per day)

Auto-rebuilt by the script from Clock Events whenever the Payroll Sheet runs a calculation, or on a daily trigger.

| Date | Employee Code | Display Name | Scheduled Start | Scheduled End | Clock In | Lunch Start | Lunch End | Break 1 Start | Break 1 End | Break 2 Start | Break 2 End | Clock Out | Worked Hours | Total Late Minutes | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

- **Status** is one of: `Present`, `Absent`, `PTO`, `UTO`, `Non-PTO`, `Holiday`, `Off (not scheduled)`, `Incomplete (no clock-out)`
- All time-in/time-out columns come from Clock Events
- **Worked Hours** = (Clock Out − Clock In) − unpaid breaks (lunch always unpaid)
- **Total Late Minutes** = late clock-in + late lunch return
- Manager can override Status by entering a value directly (e.g., to mark a forgotten-clock-in day as Holiday)

#### Tab: `Time Off Requests` (Phase 4)

| Request ID | Employee Code | Type (PTO/UTO/Non-PTO) | Start Date | End Date | Hours/Days | Reason | Status (Pending/Approved/Denied) | Approved By | Approved At | Notes |
|---|---|---|---|---|---|---|---|---|---|---|

#### Tab: `PTO Balances` (Phase 4)

| Employee Code | Year | Annual PTO Allowance | Used PTO | Remaining PTO | Annual Non-PTO Allowance | Used Non-PTO | Remaining Non-PTO |
|---|---|---|---|---|---|---|---|

Allowance values mirror the Compensation Master but never include dollar values.

#### Tab: `Makeup Hour Requests` (Phase 4)

| Request ID | Employee Code | Date | Hours Requested | Reason | Status | Approved By | Approved At |
|---|---|---|---|---|---|---|---|

#### Tab: `Scorecard` (Phase 2)

A formatted view (one employee at a time, dropdown selector). See §9.

---

### 5.2 PAYROLL SHEET (confidential)

#### Tab: `Compensation Master`

One row per employee per ramp-up tier per effective period. Effective-dated so we never lose history.

| Employee Code | Effective From | Effective To | Ramp Tier | Monthly Base Salary | Monthly Benefits | Monthly Attendance Bonus | Monthly KPI Bonus (Max) | Quarterly PA Bonus | Annual PTO Days | Annual Non-PTO Days | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|

#### Tab: `Pay Periods`

| Period ID | Pay Date | Period Start | Period End | Period Type (Mid / EOM) | Status (Open / Calculated / Paid) |
|---|---|---|---|---|---|

#### Tab: `Payroll Calculations`

Detailed per-employee calculation worksheet. One block per employee per period, with all intermediate math visible (see v1 sample for layout).

#### Tab: `Payroll Output`

Summary one-line-per-employee table for the selected pay period.

| Employee | Period | Base | Deductions | Benefits | Att. Bonus | KPI Bonus | Other Bonus | Adjustments | TOTAL | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|

#### Tab: `Bonuses & Adjustments`

| Pay Period ID | Employee Code | Type (KPI / Additional / Positive Adj / Negative Adj) | Description | Amount | Approved By | Approved At |
|---|---|---|---|---|---|---|

#### Tab: `Compensation Change Log` (Phase 5)

Append-only. One row per change.

| Change ID | Employee Code | Change Date | Effective From | Field Changed | Old Value | New Value | Reason | Approved By | Retroactive? | Retroactive Adjustment Amount |
|---|---|---|---|---|---|---|---|---|---|---|

#### Tab: `Employee Lifecycle Log` (Phase 5)

Append-only audit of every onboarding, offboarding, and reactivation.

| Event ID | Employee Code | Event Type (Hired / Resigned / Terminated / Reactivated) | Event Date | Effective Date | Reason | Approved By | Final Payroll ID (if applicable) | Notes |
|---|---|---|---|---|---|---|---|---|

#### Tab: `Performance Reviews` (Phase 6)

| Review ID | Employee Code | Review Date | Reviewer | Period Reviewed | Attendance Score | KPI Score | Strengths | Areas for Growth | Recommended Action | New Comp (if any) |
|---|---|---|---|---|---|---|---|---|---|---|

---

## 6. Employee Clock-In Web App (Phase 1)

### 6.1 What it looks like

A single web page, mobile-friendly, accessible at one URL the employees bookmark. The page has:

```
┌────────────────────────────────────────┐
│                                         │
│   Hi, Mark 👋                           │
│   Thursday, April 30, 2026              │
│   12:14 PM                              │
│                                         │
│   ┌──────────────────────────────────┐ │
│   │  ▶  CLOCK IN                     │ │  ◄── Greyed if already clocked in
│   └──────────────────────────────────┘ │
│   ┌──────────────────────────────────┐ │
│   │  🍱 START LUNCH                  │ │  ◄── Active only when clocked in
│   └──────────────────────────────────┘ │
│   ┌──────────────────────────────────┐ │
│   │  🍱 END LUNCH                    │ │  ◄── Active only when on lunch
│   └──────────────────────────────────┘ │
│   ┌──────────────────────────────────┐ │
│   │  ☕ START BREAK                  │ │  ◄── Active only when clocked in
│   └──────────────────────────────────┘ │
│   ┌──────────────────────────────────┐ │
│   │  ☕ END BREAK                    │ │  ◄── Active only when on break
│   └──────────────────────────────────┘ │
│   ┌──────────────────────────────────┐ │
│   │  🔚 CLOCK OUT                    │ │  ◄── Active only when clocked in
│   └──────────────────────────────────┘ │
│                                         │
│   Today so far:                         │
│     ✓ Clocked in: 9:58 AM               │
│     ✓ Lunch: 12:00 PM – 1:00 PM         │
│     ⏱ Currently working                  │
│                                         │
│   [Sign out]                            │
└────────────────────────────────────────┘
```

### 6.2 Identification

The recommended approach: each employee logs into the web app with their company Google account. Apps Script's `Session.getActiveUser().getEmail()` then reliably identifies them, and their `Email` in the Employees tab matches them to their `Employee Code`. No PINs, no passwords to manage.

If an employee doesn't have a Google account, fall back to a simple PIN (set in the Employees tab) entered once per browser session.

### 6.3 Button logic

The script tracks each employee's current state by reading their last Clock Event for today:

| Last event | Allowed next events |
|---|---|
| (no events today) | CLOCK_IN |
| CLOCK_IN | LUNCH_START, BREAK_START, CLOCK_OUT |
| LUNCH_START | LUNCH_END |
| LUNCH_END | LUNCH_START (rare 2nd lunch), BREAK_START, CLOCK_OUT |
| BREAK_START | BREAK_END |
| BREAK_END | LUNCH_START, BREAK_START, CLOCK_OUT |
| CLOCK_OUT | CLOCK_IN (in case of error/return) |

Disallowed buttons are greyed out. This prevents accidental double-clocks and out-of-order events.

### 6.4 Edge cases

- **Forgot to clock out:** Manager edits the day in Attendance Log, OR adds a `MANUAL` Clock Event with a Notes explanation. The Attendance Log rebuilds from Clock Events on every payroll calculation, so the correction flows through.
- **Clocked into wrong day (timezone):** All timestamps stored in employee local time per the Work Schedule. Apps Script default timezone is set on the Spreadsheet at setup.
- **Web app down / outage:** Employees can submit times to the manager who manually adds `MANUAL` Clock Events.
- **Multiple devices:** Same Google account works across devices. State is read fresh from Clock Events on every page load, so the buttons reflect reality regardless of device.

### 6.5 Web app deployment

- Deploy as "Execute as: Me (the script owner)" so the script can write to the Attendance Sheet regardless of which employee is using it
- Access set to "Anyone with Google account" — employee identification is via their authenticated email
- URL is shared with employees once; they bookmark it

---

## 7. Calculation rules (canonical)

These formulas are the source of truth. Apps Script implements them; the Payroll Calculations tab makes every step visible.

### 7.1 Daily & hourly base rate

```
scheduled_days_in_month  = count of days in the calendar month matching employee's work schedule
daily_base_rate          = monthly_base_salary / scheduled_days_in_month
hourly_base_rate         = daily_base_rate / 8
```

Internal calculations carry full precision; rates are rounded to 2 decimals only at display. The final payroll total is rounded to 2 decimals.

### 7.2 Late minutes

For each scheduled day:
```
late_clock_in     = max(0, actual_clock_in - scheduled_start)         // in minutes
late_lunch_return = max(0, actual_lunch_end - scheduled_lunch_end)    // in minutes, if scheduled
day_late_minutes  = late_clock_in + late_lunch_return
```

Aggregated:
- **Per pay period** → late-minute deduction
- **Per calendar month** → attendance bonus eligibility (90-min cap)

### 7.3 Payable hours

For each scheduled day:
```
worked_hours          = (clock_out - clock_in) - unpaid_break_time
approved_makeup_hours = sum of approved makeup hours for that day
payable_hours_today   = min(worked_hours, 8 + approved_makeup_hours)
```

If `payable_hours_today < 8` and the shortfall is not covered by approved PTO/UTO/Non-PTO, the missing hours are deducted at hourly base rate.

### 7.4 Base salary before deductions

```
base_salary_pre = sum across all scheduled days in pay period of:
                    payable_hours_today × hourly_base_rate
```

### 7.5 Deductions

```
late_deduction      = (total_late_minutes_in_period / 60) × hourly_base_rate
short_hours_ded     = unpaid_short_hours_in_period × hourly_base_rate
absence_deduction   = unpaid_absent_days × 8 × hourly_base_rate
uto_deduction       = uto_hours_in_period × hourly_base_rate
total_deductions    = late_deduction + short_hours_ded + absence_deduction + uto_deduction
```

### 7.6 Benefits (split + prorate)

Default: split monthly benefit 50/50 across the month's two pay periods.

If employee starts/ends mid-month or has unpaid leave:
```
eligible_scheduled_days = scheduled days actively employed AND not on UTO/Non-PTO
prorated_monthly_benefit = monthly_benefit × (eligible_scheduled_days / total_scheduled_days_in_month)
this_period_benefit      = prorated_monthly_benefit × (eligible_scheduled_days_in_this_period / eligible_scheduled_days)
```

### 7.7 Attendance bonus (15th payroll only)

For the previous full calendar month, employee qualifies if **all** of:
1. No unpaid absences (UTO, Non-PTO, unpaid leave do not qualify; PTO and paid holidays do)
2. Present on every required scheduled working day (PTO/holiday counts as present)
3. Total late minutes for the month ≤ 90
4. Not resigned before the payroll date

If any condition fails, store the **specific reason(s)** for the scorecard.

### 7.8 Quarterly PA bonus

If the employee earned the monthly attendance bonus for 3 consecutive months in a calendar quarter, add `quarterly_pa_bonus` to the 15th payroll following the end of that quarter.

### 7.9 KPI bonus

Never auto-paid. Requires explicit per-period entry in the `Bonuses & Adjustments` tab. Can be 0%–100% of the KPI Max in the comp plan.

### 7.10 Final payroll total

```
total = base_salary_pre
      - total_deductions
      + this_period_benefit
      + attendance_bonus       (15th payroll only, if eligible)
      + quarterly_pa_bonus     (only on the payroll after a qualifying quarter ends)
      + kpi_bonus_approved     (15th payroll only, after manager approval)
      + additional_bonuses
      + positive_adjustments
      - negative_adjustments

→ ROUND(total, 2)
```

### 7.11 Currency & rounding

USD throughout. Internal calculations carry full precision. Display values round to 2 decimals. Final payroll total uses standard rounding (`ROUND`, not `FLOOR`/`CEIL`).

---

## 8. Apps Script — menus & dialogs

### 8.1 Attendance Sheet menu

```
📋 Attendance
  ├── Open Clock-In Web App (copy URL)
  ├── ───
  ├── Add Clock Event Manually…           [Phase 1, manager only]
  ├── Edit Attendance Log Entry…          [Phase 1, manager only]
  ├── Rebuild Attendance Log               [Phase 1, manager only]
  ├── ───
  ├── Submit Time Off Request…            [Phase 4]
  ├── Submit Makeup Hour Request…          [Phase 4]
  ├── Approve Pending Requests…           [Phase 4, manager only]
  ├── ───
  ├── View Scorecard…                     [Phase 2]
  ├── ───
  ├── Add New Employee…                   [Phase 1]
  └── About / Help
```

### 8.2 Payroll Sheet menu

```
💰 Payroll
  ├── Calculate Pay Period…               [Phase 1]
  ├── Refresh Attendance Data
  ├── Enter KPI Bonuses for Period…       [Phase 3]
  ├── Enter Additional Bonus…             [Phase 3]
  ├── Enter Adjustment…                   [Phase 3]
  ├── Finalize & Mark as Paid
  ├── ───
  ├── Compensation Change…                [Phase 5]
  ├── View Comp Change Log
  ├── ───
  ├── Offboard Employee…                  [Phase 5]
  ├── Reactivate Employee…                [Phase 5]
  ├── View Employee Lifecycle Log         [Phase 5]
  ├── ───
  ├── Performance Review…                 [Phase 6]
  └── Export Payroll Output (CSV/PDF)
```

### 8.3 Key dialog specs

**Calculate Pay Period dialog (Phase 1):**
- Dropdown: select pay period (defaults to next open period)
- Checkbox list: select employees (defaults to all active)
- Button: "Calculate" → runs script, populates Payroll Calculations + Payroll Output
- Warns if attendance data is incomplete (any scheduled day with no Clock Events and no approved time off)

**Add New Employee dialog (Phase 1):**
- Fields: Full Name, Display Name, Employee Code (auto-suggested from name), Email, Position, Manager, Start Date
- Work schedule grid: checkbox per weekday with start/end time inputs, plus scheduled lunch
- Compensation fields (only visible to payroll processor — assistants get a simpler form): Monthly Base, Benefits, Attendance Bonus, KPI Max, Quarterly PA, Annual PTO Days, Annual Non-PTO Days
- Save → creates rows in Employees + Work Schedules (Attendance Sheet) AND Compensation Master (Payroll Sheet) AND logs to Employee Lifecycle Log
- Two-mode dialog: assistant version creates Employees + Work Schedules only; processor must complete the comp setup separately

**Enter KPI Bonuses dialog (Phase 3):**
- Dropdown: select pay period
- Table: one row per active employee with columns: Name | KPI Max | Approved % | Approved Amount (auto) | Notes
- Save → writes to Bonuses & Adjustments tab

**Compensation Change dialog (Phase 5):**
- Dropdown: select employee
- Shows current comp values
- New value fields (only fill what's changing)
- Effective From (defaults to 1st of next month)
- Reason (required)
- "Retroactive?" checkbox — if checked, asks for the retroactive period and auto-generates an adjustment line for the next payroll
- Save → appends new row to Comp Master, marks old row's Effective To = (new From − 1 day), logs in Comp Change Log

**Offboard Employee dialog (Phase 5):**
- Dropdown: select active employee
- Fields: Resignation/Termination type, Last Working Day, Reason, Notes
- Preview: shows what the Final Payroll will include (prorated benefits, prorated KPI if approved, attendance bonus forfeit notice) plus a year-end PTO payout estimate when remaining PTO exists
- Confirm → sets Status = Resigned/Terminated, sets End Date in Employees, sets Effective To on current Work Schedule and Compensation Master rows, generates Final Payroll calculation, logs in Employee Lifecycle Log
- Past attendance, past payrolls, past comp history — all retained untouched

**Reactivate Employee dialog (Phase 5):**
- Dropdown: select inactive/resigned/terminated employee
- Fields: New Start Date, Position (defaults to last position), Manager
- Work schedule grid + new comp values (does NOT reuse old comp; rehire is treated as a new offer)
- Confirm → sets Status = Active, clears End Date, appends NEW rows in Work Schedules and Compensation Master (with the new Start Date as Effective From), logs in Employee Lifecycle Log
- Old historical rows remain in place; the new rows sit alongside them, clearly distinguished by their effective dates

---

## 9. Scorecard design (Phase 2)

The scorecard is for an individual employee for a selected month. Zero pay information — safe to share with the employee.

### Layout (sketched)

```
┌─────────────────────────────────────────────────────────────┐
│  Attendance Scorecard — March 2026                          │
│  Employee: Mark Anthony       Schedule: Sun–Thu 10AM–7PM    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Monthly Attendance Bonus:    ✅ EARNED                     │
│                                                              │
│  Why:                                                        │
│   ✅  Present all 22 scheduled days                          │
│   ✅  No unpaid absences                                     │
│   ✅  62 late minutes (limit: 90)                            │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Stats                                                       │
│   Scheduled days:         22                                 │
│   Days worked:            22                                 │
│   PTO used:                0                                 │
│   Total late minutes:     62                                 │
│     ↳ Late clock-ins:     45 min  (8 occurrences)           │
│     ↳ Late from lunch:    17 min  (3 occurrences)           │
│   Days with no lunch log:  2                                 │
│   Avg start time:         10:04 AM                           │
│   Avg end time:           7:08 PM                            │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Top areas to focus on next month:                           │
│   • Log lunch consistently (2 days missing)                  │
│   • Aim to clock in by 10:00 (4 late starts >5 min)          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

If NOT earned, the top section flips to red and lists the failure reasons explicitly.

### Generation
- HTML modal from the Attendance Sheet menu, with print-to-PDF and "Export as PNG" buttons
- Built with HtmlService
- Selectable employee + month from dropdowns

---

## 10. Employee Lifecycle Management

### 10.1 Three operations, all preserve history

| Operation | Phase | Purpose | What it changes | What it preserves |
|---|---|---|---|---|
| **Add Employee** | 1 | Onboard a new person | Creates rows in Employees, Work Schedules, Compensation Master | N/A (new) |
| **Offboard Employee** | 5 | Mark resignation or termination | Status → Resigned/Terminated, End Date set, current Work Schedule + Comp Master rows get Effective To, triggers Final Payroll | All past attendance, payroll, comp history untouched |
| **Reactivate Employee** | 5 | Rehire | Status → Active, NEW rows appended to Work Schedules + Comp Master with new Effective From | Old tenure's data remains as historical record alongside the new tenure |

### 10.2 Rules

- **No deletes, ever.** Past Clock Events, Attendance Log entries, Payroll Calculations, and Comp Master rows for terminated employees stay forever.
- **Default views filter to active employees.** The Employees tab has a "Show: Active only" filter view as default. Inactive employees are still in the underlying data, just hidden from default views.
- **Final Payroll on offboarding** automatically applies the Baseline doc's resignation rules:
  - Attendance bonus forfeited
  - KPI bonus prorated if otherwise approved: `approved_KPI × (eligible_days_in_KPI_month / total_scheduled_days_in_KPI_month)`
  - Benefits prorated: `monthly_benefit × (eligible_days / total_scheduled_days)`
  - Final pay period base salary calculated normally up through last working day
- **Rehires get fresh terms.** Reactivation does NOT inherit the previous comp; the comp must be re-entered. This forces an explicit decision and avoids stale data.
- **Audit trail.** Every lifecycle action logs to the Employee Lifecycle Log with timestamp, user, and approval source. Same applies to comp changes (Comp Change Log) and adjustments.

### 10.3 Reporting on past employees

- The Payroll Output tab can be filtered to show any historical period including periods where the employee is now inactive
- Scorecards can be generated for past months for terminated employees (useful for end-of-year reporting)
- The Employee Lifecycle Log gives a chronological view of every hire, departure, and rehire

---

## 11. Confidentiality safeguards (recap)

- **Two separate Google Sheets** with separate share lists
- Apps Script in the Payroll Sheet pulls from the Attendance Sheet using the script's authority, so even if an assistant has Edit access to the Attendance Sheet, they cannot trigger payroll calculations
- The PTO Balance tab in the Attendance Sheet shows day counts, never dollars
- Scorecards show attendance data only, never pay
- The Web App writes only to Clock Events (Attendance Sheet) — it never touches the Payroll Sheet
- All comp changes and lifecycle events are logged with timestamps and user emails
- The Add New Employee dialog has two modes: assistant mode collects only attendance-relevant fields; processor mode is required to set the comp

---

## 12. Initial Compensation Master values

Sourced from `_MASTER__Compensation_Plans.xlsx`. **Best-guess assumption: all employees on their "Officialized" tier.** Please verify before going live.

| Employee | Schedule | Monthly Base (incl. benefits) | Benefits | KPI Max | Att. Bonus | Quarterly PA | Annual PTO | Annual Non-PTO | Source sheet |
|---|---|---|---|---|---|---|---|---|---|
| Mark | Sun–Thu 10AM–7PM | $1,100 | $75 | $150 | $100 | $150 | 4 | 4 | "Rolly (Mark)" |
| Paul | Mon–Thu, Sat 10AM–7PM | $600 | $75 | $100 | $100 | $150 | 4 | 4 | "Paul" |
| Andrea | M–F 10AM–7PM | $770 | $120 | $80 | $50 | $150 | 4 | 4 | "Andrea" |
| Charisse | M–F 10AM–7PM | $750 | $100 | ~$150 (G7×0.20) | $50 | $150 | 4 | 4 | "Charisse" |
| Alli (Mae) | M–F 11AM–8PM | TBD | TBD | TBD | TBD | TBD | TBD | TBD | "ALLI MAE" |
| Adrian | M–F 10AM–7PM | TBD — no sheet found | — | — | — | — | — | — | — |
| Camille | M–T, F–Sun 10AM–7PM | TBD — no sheet found | — | — | — | — | — | — | — |
| Alexis | M–F 10AM–7PM | TBD — no sheet found | — | — | — | — | — | — | — |

> **Action item:** Confirm Mark/Paul/Andrea/Charisse Officialized vs. higher tier, and provide comp for Alli, Adrian, Camille, Alexis.

---

## 13. Open questions / decisions needed before build

1. **Active tier confirmation** for Mark, Paul, Andrea, Charisse — Officialized or higher? *(See §12)*
2. **Comp plans** for Alli, Adrian, Camille, Alexis — please provide values. *(See §12)*
3. **Lunch policy:** Does every employee have a fixed scheduled lunch, or is lunch flexible? Affects how we calculate "late from lunch." *(Default assumption: fixed scheduled lunch per employee.)*
4. **Late grace period:** Is there one (e.g., clock in within 1 min of start = not late)? *(Default: zero grace; 1 minute late = 1 late minute.)*
5. **Quarterly PA bonus:** Confirm we keep it.
6. **Adrian, Camille, Alexis** — new hires? Their start dates and probationary status affect first month's comp.
7. **Probationary attendance bonus** — some plans show a different (often lower) attendance bonus during the probationary tier. Should the system enforce automatic tier-up after 3 months, or require manual approval each time?
8. **Holidays calendar** — who maintains it? Fill in 2026 holidays before going live.
9. **Time zones** — Confirm all logged times are in employee local time, not US PST, and confirm whether all employees are in the same time zone.
10. **Web app authentication** — Do all employees have Google accounts? If not, we'll fall back to the PIN approach for those people.
11. **PTO payout policy** — Resolved: unused PTO payout is calculated at year end, not in final payroll. The payout is `remaining PTO days × daily base rate × 1.5`, using base pay only and excluding benefits.

---

## 14. Out of scope (explicitly)

- Direct integration with Jibble (we are leaving Jibble entirely)
- Payment processing / bank transfers (system produces a payroll output; payment is done externally)
- Tax withholding calculations
- Multi-currency support
- Mobile app (the web app works on mobile browsers, no native app needed)

---

## 15. Build order checklist

**Phase 1 — MVP attendance + basic payroll**
- [ ] Create both Google Sheets, set permissions
- [ ] Build Attendance Sheet tabs: Employees, Work Schedules, Holidays, Clock Events, Attendance Log
- [ ] Build Payroll Sheet tabs: Compensation Master, Pay Periods, Payroll Calculations, Payroll Output
- [ ] Seed Compensation Master with 8 active employees
- [ ] Build Clock-In Web App (HtmlService) with state-aware buttons
- [ ] Deploy web app, get URL, share with employees
- [ ] Apps Script: Clock Events → Attendance Log rebuild function
- [ ] Apps Script: cross-sheet read function (Payroll → Attendance)
- [ ] Apps Script: pay-period calculator (base + late + absence)
- [ ] Apps Script: "Calculate Pay Period" menu + dialog
- [ ] Apps Script: "Add New Employee" menu + dialog (two modes)
- [ ] Apps Script: "Add Clock Event Manually" + "Edit Attendance Log Entry" admin tools
- [ ] Test against a sample period with real clock events

**Phase 2**
- [ ] Add monthly attendance bonus calculation logic
- [ ] Add quarterly PA bonus tracking
- [ ] Build Scorecard HTML template
- [ ] Add "View Scorecard" menu item

**Phase 3**
- [ ] Add benefits split + proration
- [ ] Build Bonuses & Adjustments tab
- [ ] Build KPI bonus entry dialog
- [ ] Build Additional Bonus + Adjustment dialogs
- [ ] Update final payroll formula to include all components

**Phase 4**
- [ ] Build Time Off Requests + PTO Balances tabs
- [ ] Build Makeup Hour Requests tab
- [ ] Build request submission dialogs (sheet menu + web app)
- [ ] Build approval workflow + dialog
- [ ] Wire approved requests into payroll calculation and Attendance Log Status

**Phase 5**
- [ ] Build Compensation Change dialog + Comp Change Log
- [ ] Build Offboard Employee dialog + auto-Final-Payroll
- [ ] Build Reactivate Employee dialog
- [ ] Build Employee Lifecycle Log
- [ ] Add retroactive raise auto-adjustment logic
- [ ] Effective-date logic in Compensation Master + Work Schedules lookups

**Phase 6**
- [ ] Build Performance Reviews tab
- [ ] Build review dialog with rubric
- [ ] Wire attendance + KPI history into review
- [ ] Optional: tie review outcomes into Phase 5 comp changes
