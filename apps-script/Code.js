const CONFIG = {
  attendanceSpreadsheetName: 'Payroll System - Attendance',
  payrollSpreadsheetName: 'Payroll System - Payroll',
  attendanceSpreadsheetIdProp: 'ATTENDANCE_SPREADSHEET_ID',
  payrollSpreadsheetIdProp: 'PAYROLL_SPREADSHEET_ID',
  timezone: 'America/Los_Angeles',
  eventTypes: ['CLOCK_IN', 'LUNCH_START', 'LUNCH_END', 'BREAK_START', 'BREAK_END', 'CLOCK_OUT'],
  eventLabels: {
    CLOCK_IN: 'Clock In',
    LUNCH_START: 'Start Lunch',
    LUNCH_END: 'End Lunch',
    BREAK_START: 'Start Break',
    BREAK_END: 'End Break',
    CLOCK_OUT: 'Clock Out'
  },
  statuses: [
    'Present',
    'Absent',
    'PTO',
    'UTO',
    'Non-PTO',
    'Holiday',
    'Off (not scheduled)',
    'Incomplete (no clock-out)'
  ],
  timeOffTypes: ['PTO', 'UTO', 'Non-PTO'],
  ptoPlanTypes: ['Fixed Annual', 'Accrued Monthly'],
  defaultPtoPlanType: 'Fixed Annual',
  requestStatuses: ['Pending', 'Approved', 'Denied'],
  attendanceTabs: {
    employees: 'Employees',
    schedules: 'Work Schedules',
    holidays: 'Holidays',
    events: 'Clock Events',
    log: 'Attendance Log',
    timeOffRequests: 'Time Off Requests',
    ptoBalances: 'PTO Balances',
    makeupRequests: 'Makeup Hour Requests',
    scorecard: 'Scorecard'
  },
  payrollTabs: {
    comp: 'Compensation Master',
    periods: 'Pay Periods',
    calculations: 'Payroll Calculations',
    output: 'Payroll Output',
    lifecycle: 'Employee Lifecycle Log',
    compChanges: 'Compensation Change Log',
    paTracker: 'Quarterly PA Tracker',
    bonuses: 'Bonuses & Adjustments'
  },
  workflowInstructionsTab: '0. Workflow Instructions',
  monthlyAttendanceBonusLateMinuteLimit: 90
};

const UI_THEME = {
  foundation: '#F7F1EB',
  card: '#FBF7F1',
  inset: '#EFE8DD',
  ink: '#2A2725',
  body: '#4A4540',
  muted: '#8A8178',
  rule: '#D4CFC4',
  accent: '#E91D79',
  serif: 'Cormorant Garamond',
  sans: 'Inter'
};

const PHASE1_TEST = {
  marker: 'PHASE1_TEST_DATA',
  periodId: 'TEST-2026-04-EOM',
  payDate: new Date(2026, 3, 30),
  periodStart: new Date(2026, 3, 1),
  periodEnd: new Date(2026, 3, 15),
  employeeCodes: ['MARK', 'PAUL', 'ANDREA', 'CHARISSE'],
  pins: {
    MARK: '1001',
    PAUL: '1002',
    ANDREA: '1003',
    CHARISSE: '1004'
  }
};

const HEADERS = {
  employees: [
    'Employee Code',
    'Full Name',
    'Display Name',
    'Status',
    'Start Date',
    'End Date',
    'Position',
    'Manager',
    'Email',
    'Web App PIN',
    'Notes'
  ],
  schedules: [
    'Employee Code',
    'Effective From',
    'Effective To',
    'Mon Start',
    'Mon End',
    'Tue Start',
    'Tue End',
    'Wed Start',
    'Wed End',
    'Thu Start',
    'Thu End',
    'Fri Start',
    'Fri End',
    'Sat Start',
    'Sat End',
    'Sun Start',
    'Sun End',
    'Scheduled Lunch Start',
    'Scheduled Lunch End'
  ],
  holidays: ['Date', 'Holiday Name', 'Paid? (Y/N)', 'Applies To (All / Employee Code list)'],
  events: ['Event ID', 'Timestamp', 'Employee Code', 'Event Type', 'Source', 'IP / Device', 'Notes'],
  log: [
    'Date',
    'Employee Code',
    'Display Name',
    'Scheduled Start',
    'Scheduled End',
    'Clock In',
    'Lunch Start',
    'Lunch End',
    'Break 1 Start',
    'Break 1 End',
    'Break 2 Start',
    'Break 2 End',
    'Clock Out',
    'Worked Hours',
    'Total Late Minutes',
    'Status'
  ],
  timeOffRequests: [
    'Request ID',
    'Employee Code',
    'Type (PTO/UTO/Non-PTO)',
    'Start Date',
    'End Date',
    'Hours/Days',
    'Reason',
    'Status (Pending/Approved/Denied)',
    'Approved By',
    'Approved At',
    'Notes'
  ],
  ptoBalances: [
    'Employee Code',
    'Year',
    'PTO Plan Type',
    'Annual PTO Allowance',
    'Monthly PTO Accrual Days',
    'Earned PTO',
    'Used PTO',
    'Remaining PTO',
    'Payout Eligible PTO',
    'Annual Non-PTO Allowance',
    'Used Non-PTO',
    'Remaining Non-PTO'
  ],
  makeupRequests: [
    'Request ID',
    'Employee Code',
    'Date',
    'Hours Requested',
    'Reason',
    'Status (Pending/Approved/Denied)',
    'Approved By',
    'Approved At'
  ],
  comp: [
    'Employee Code',
    'Effective From',
    'Effective To',
    'Ramp Tier',
    'Monthly Base Salary',
    'Monthly Benefits',
    'Monthly Attendance Bonus',
    'Monthly KPI Bonus (Max)',
    'Quarterly PA Bonus',
    'Annual PTO Days',
    'Annual Non-PTO Days',
    'Notes',
    'PTO Plan Type',
    'Monthly PTO Accrual Days'
  ],
  periods: ['Period ID', 'Pay Date', 'Period Start', 'Period End', 'Period Type (Mid / EOM)', 'Status (Open / Calculated / Paid)'],
  calculations: [
    'Period ID',
    'Employee Code',
    'Employee',
    'Period Start',
    'Period End',
    'Scheduled Days in Month',
    'Scheduled Days in Period',
    'Monthly Base Salary',
    'Daily Base Rate',
    'Hourly Base Rate',
    'Worked Hours',
    'Late Minutes',
    'Late Deduction',
    'Absent Days',
    'Absence Deduction',
    'Short Hours',
    'Short Hours Deduction',
    'Scheduled Base',
    'Total Deductions',
    'Monthly Benefits',
    'Benefit Eligible Days',
    'Benefit Period Days',
    'Benefits',
    'Monthly Attendance Bonus',
    'Attendance Bonus Status',
    'Attendance Bonus Notes',
    'Quarterly PA Bonus',
    'Quarterly PA Status',
    'Quarterly PA Notes',
    'KPI Bonus',
    'Additional Bonus',
    'Positive Adjustments',
    'Negative Adjustments',
    'Calculated Total',
    'Status',
    'Notes'
  ],
  output: ['Employee', 'Period', 'Base', 'Deductions', 'Benefits', 'Att. Bonus', 'KPI Bonus', 'Other Bonus', 'Adjustments', 'TOTAL', 'Status', 'Notes'],
  bonuses: ['Pay Period ID', 'Employee Code', 'Type (KPI / Additional / Positive Adj / Negative Adj)', 'Description', 'Amount', 'Approved By', 'Approved At'],
  compChanges: [
    'Change ID',
    'Employee Code',
    'Change Date',
    'Effective From',
    'Field Changed',
    'Old Value',
    'New Value',
    'Reason',
    'Approved By',
    'Retroactive?',
    'Retroactive Adjustment Amount'
  ],
  lifecycle: [
    'Event ID',
    'Employee Code',
    'Event Type (Hired / Resigned / Terminated / Reactivated)',
    'Event Date',
    'Effective Date',
    'Reason',
    'Approved By',
    'Final Payroll ID (if applicable)',
    'Notes'
  ],
  paTracker: [
    'Employee Code',
    'Employee',
    'Quarter',
    'Month 1',
    'Month 1 Perfect?',
    'Month 2',
    'Month 2 Perfect?',
    'Month 3',
    'Month 3 Perfect?',
    'Consecutive Perfect Months',
    'Eligible?',
    'Quarterly PA Bonus',
    'Reason',
    'Updated At'
  ]
};

const INITIAL_EMPLOYEES = [
  {
    code: 'MARK',
    fullName: 'Mark',
    displayName: 'Mark',
    schedule: { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 1100, benefits: 75, attendance: 100, kpi: 150, quarterly: 150, pto: 4, nonPto: 4 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'PAUL',
    fullName: 'Paul',
    displayName: 'Paul',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 600, benefits: 75, attendance: 100, kpi: 100, quarterly: 150, pto: 4, nonPto: 4 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'ANDREA',
    fullName: 'Andrea',
    displayName: 'Andrea',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 770, benefits: 120, attendance: 50, kpi: 80, quarterly: 150, pto: 4, nonPto: 4 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'CHARISSE',
    fullName: 'Charisse',
    displayName: 'Charisse',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 750, benefits: 100, attendance: 50, kpi: 150, quarterly: 150, pto: 4, nonPto: 4 },
    notes: 'Seeded from PRD §12. KPI max is PRD estimate; verify active tier before go-live.'
  },
  {
    code: 'ALLI',
    fullName: 'Alli Mae',
    displayName: 'Alli',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 11, end: 20, lunchStart: 14, lunchEnd: 15 },
    comp: {},
    notes: 'Compensation left blank per PRD §12 action item.'
  },
  {
    code: 'ADRIAN',
    fullName: 'Adrian',
    displayName: 'Adrian',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: {},
    notes: 'Compensation left blank per PRD §12 action item.'
  },
  {
    code: 'CAMILLE',
    fullName: 'Camille',
    displayName: 'Camille',
    schedule: { days: ['Mon', 'Tue', 'Fri', 'Sat', 'Sun'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: {},
    notes: 'Compensation left blank per PRD §12 action item. Schedule interpreted as Mon-Tue and Fri-Sun.'
  },
  {
    code: 'ALEXIS',
    fullName: 'Alexis',
    displayName: 'Alexis',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: {},
    notes: 'Compensation left blank per PRD §12 action item.'
  }
];

function setupPhase1() {
  const existing = getConfiguredIds_();
  const attendance = existing.attendanceId
    ? SpreadsheetApp.openById(existing.attendanceId)
    : SpreadsheetApp.create(CONFIG.attendanceSpreadsheetName);
  const payroll = existing.payrollId
    ? SpreadsheetApp.openById(existing.payrollId)
    : SpreadsheetApp.create(CONFIG.payrollSpreadsheetName);
  PropertiesService.getScriptProperties().setProperties({
    [CONFIG.attendanceSpreadsheetIdProp]: attendance.getId(),
    [CONFIG.payrollSpreadsheetIdProp]: payroll.getId()
  });

  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);
  seedInitialEmployees_();
  installOpenTriggers_([attendance, payroll]);

  const result = {
    attendanceSpreadsheetUrl: attendance.getUrl(),
    payrollSpreadsheetUrl: payroll.getUrl(),
    message: existing.attendanceId && existing.payrollId
      ? 'Phase 1 spreadsheets already existed and were updated.'
      : 'Phase 1 spreadsheets created. Deploy this script as a web app, then use the sheet menus for attendance and payroll workflows.'
  };
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function configurePhase1SpreadsheetIds(attendanceSpreadsheetId, payrollSpreadsheetId) {
  if (!attendanceSpreadsheetId || !payrollSpreadsheetId) {
    throw new Error('Both attendanceSpreadsheetId and payrollSpreadsheetId are required.');
  }
  const attendance = SpreadsheetApp.openById(attendanceSpreadsheetId);
  const payroll = SpreadsheetApp.openById(payrollSpreadsheetId);

  PropertiesService.getScriptProperties().setProperties({
    [CONFIG.attendanceSpreadsheetIdProp]: attendance.getId(),
    [CONFIG.payrollSpreadsheetIdProp]: payroll.getId()
  });

  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);
  seedInitialEmployees_();
  installOpenTriggers_([attendance, payroll]);

  const result = {
    attendanceSpreadsheetUrl: attendance.getUrl(),
    payrollSpreadsheetUrl: payroll.getUrl(),
    message: 'Phase 1 configuration applied to the supplied spreadsheets.'
  };
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function createWorkflowInstructionsTabs() {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();

  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);
  buildWorkflowInstructionsSheet_(attendance, 'attendance');
  buildWorkflowInstructionsSheet_(payroll, 'payroll');

  const result = {
    attendanceSpreadsheetUrl: attendance.getUrl(),
    payrollSpreadsheetUrl: payroll.getUrl(),
    message: 'Workflow Instructions tabs created in both Phase 1 workbooks.'
  };
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function injectPhase1TestData() {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();

  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);
  seedInitialEmployees_();
  ensurePhase1TestPins_(attendance);
  ensurePhase1TestPayPeriod_(payroll);

  const eventSheet = getSheet_(attendance, CONFIG.attendanceTabs.events);
  const rowsRemoved = removePhase1TestClockEvents_(eventSheet);
  const eventRows = buildPhase1TestClockEventRows_(attendance);
  appendRows_(eventSheet, eventRows);
  eventSheet.getRange('B:B').setNumberFormat('yyyy-mm-dd h:mm AM/PM');

  const attendanceResult = rebuildAttendanceLog({
    startDate: formatDateKey_(PHASE1_TEST.periodStart),
    endDate: formatDateKey_(PHASE1_TEST.periodEnd)
  });
  const payrollResult = calculatePayPeriod({
    periodId: PHASE1_TEST.periodId,
    employeeCodes: PHASE1_TEST.employeeCodes
  });

  const result = {
    periodId: PHASE1_TEST.periodId,
    dateRange: `${formatDateKey_(PHASE1_TEST.periodStart)} through ${formatDateKey_(PHASE1_TEST.periodEnd)}`,
    employees: PHASE1_TEST.employeeCodes,
    rowsRemoved,
    eventsAdded: eventRows.length,
    attendanceRowsWritten: attendanceResult.rowsWritten,
    payrollMessage: payrollResult.message,
    payrollWarnings: payrollResult.warnings,
    attendanceSpreadsheetUrl: attendance.getUrl(),
    payrollSpreadsheetUrl: payroll.getUrl(),
    message: `Injected Phase 1 test data for ${PHASE1_TEST.periodId}.`
  };
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function onOpen(e) {
  handleSpreadsheetOpen(e);
}

function handleSpreadsheetOpen(e) {
  const ss = e && e.source ? e.source : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;

  const config = getConfiguredIds_();
  const isAttendance = ss.getId() === config.attendanceId || hasSheet_(ss, CONFIG.attendanceTabs.events);
  const isPayroll = ss.getId() === config.payrollId || hasSheet_(ss, CONFIG.payrollTabs.comp);

  if (isAttendance) addAttendanceMenu_();
  if (isPayroll) addPayrollMenu_();
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('ClockApp')
    .setTitle('Employee Clock-In')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function addAttendanceMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('Attendance')
    .addItem('Open Clock-In Web App URL', 'showClockAppUrl')
    .addItem('Create Workflow Instructions Tabs', 'createWorkflowInstructionsTabsFromMenu')
    .addItem('Inject Phase 1 Test Data', 'injectPhase1TestDataFromMenu')
    .addSeparator()
    .addItem('Add Clock Event Manually...', 'showAddClockEventDialog')
    .addItem('Edit Attendance Log Entry...', 'showEditAttendanceLogDialog')
    .addItem('Rebuild Attendance Log', 'rebuildAttendanceLogFromMenu')
    .addSeparator()
    .addItem('Submit Time Off Request...', 'showTimeOffRequestDialog')
    .addItem('Submit Makeup Hour Request...', 'showMakeupRequestDialog')
    .addItem('Approve Time Off / Makeup Requests...', 'showPendingRequestsDialog')
    .addItem('Refresh PTO Balances', 'refreshPtoBalancesFromMenu')
    .addSeparator()
    .addItem('View Scorecard...', 'showScorecardDialog')
    .addSeparator()
    .addItem('Add New Employee...', 'showAddEmployeeDialog')
    .addSeparator()
    .addItem('About / Help', 'showAboutHelp')
    .addToUi();
}

function addPayrollMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('Payroll')
    .addItem('Create Workflow Instructions Tabs', 'createWorkflowInstructionsTabsFromMenu')
    .addItem('Inject Phase 1 Test Data', 'injectPhase1TestDataFromMenu')
    .addSeparator()
    .addItem('Calculate Pay Period...', 'showCalculatePayPeriodDialog')
    .addItem('Refresh Attendance Data', 'refreshAttendanceDataFromMenu')
    .addItem('Refresh Quarterly PA Tracker', 'refreshQuarterlyPaTrackerFromMenu')
    .addItem('Enter KPI Bonuses for Period...', 'showKpiBonusDialog')
    .addItem('Enter Additional Bonus...', 'showAdditionalBonusDialog')
    .addItem('Enter Adjustment...', 'showAdjustmentDialog')
    .addItem('Finalize & Mark as Paid', 'markSelectedPayPeriodPaidFromMenu')
    .addSeparator()
    .addItem('Compensation Change...', 'showCompensationChangeDialog')
    .addItem('View Compensation Change Log', 'showCompensationChangeLog')
    .addSeparator()
    .addItem('Offboard Employee...', 'showOffboardEmployeeDialog')
    .addItem('Reactivate Employee...', 'showReactivateEmployeeDialog')
    .addItem('View Employee Lifecycle Log', 'showEmployeeLifecycleLog')
    .addSeparator()
    .addItem('Add New Employee...', 'showAddEmployeeDialog')
    .addSeparator()
    .addItem('Export Payroll Output (CSV)', 'exportPayrollOutputCsv')
    .addToUi();
}

function showClockAppUrl() {
  const url = ScriptApp.getService().getUrl();
  const message = url
    ? `Clock-In Web App URL:\n\n${url}\n\nDeploy as "Execute as: Me" and "Anyone with Google account" before sharing.`
    : 'No web app deployment URL is available yet. Deploy this script as a web app first.';
  SpreadsheetApp.getUi().alert('Clock-In Web App', message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function showAboutHelp() {
  SpreadsheetApp.getUi().alert(
    'Payroll & Attendance',
    'The current build includes self-service clock events, attendance log rebuilding, employee onboarding, payroll calculations, bonuses, adjustments, PTO/Non-PTO balance tracking, time off approvals, makeup-hour approvals, compensation changes, offboarding, reactivation, and lifecycle audit logs. Compensation values left blank in the PRD remain blank in Compensation Master.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function createWorkflowInstructionsTabsFromMenu() {
  const result = createWorkflowInstructionsTabs();
  SpreadsheetApp.getUi().alert('Workflow Instructions', result.message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function injectPhase1TestDataFromMenu() {
  const result = injectPhase1TestData();
  const warningText = result.payrollWarnings.length
    ? `\n\nWarnings:\n${result.payrollWarnings.join('\n')}`
    : '';
  SpreadsheetApp.getUi().alert(
    'Phase 1 Test Data',
    `${result.eventsAdded} clock events added for ${result.periodId}. ${result.attendanceRowsWritten} attendance rows rebuilt.${warningText}`,
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function showAddEmployeeDialog() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  const config = getConfiguredIds_();
  const template = HtmlService.createTemplateFromFile('AddEmployeeDialog');
  template.includeComp = Boolean(active && active.getId() === config.payrollId);
  const html = template.evaluate().setWidth(820).setHeight(740);
  SpreadsheetApp.getUi().showModalDialog(html, 'Add New Employee');
}

function showAddClockEventDialog() {
  const html = HtmlService.createHtmlOutputFromFile('AddClockEventDialog').setWidth(540).setHeight(560);
  SpreadsheetApp.getUi().showModalDialog(html, 'Add Clock Event Manually');
}

function showEditAttendanceLogDialog() {
  const html = HtmlService.createHtmlOutputFromFile('EditAttendanceLogDialog').setWidth(540).setHeight(500);
  SpreadsheetApp.getUi().showModalDialog(html, 'Edit Attendance Log Entry');
}

function showTimeOffRequestDialog() {
  const html = HtmlService.createHtmlOutputFromFile('TimeOffRequestDialog').setWidth(620).setHeight(650);
  SpreadsheetApp.getUi().showModalDialog(html, 'Submit Time Off Request');
}

function showMakeupRequestDialog() {
  const html = HtmlService.createHtmlOutputFromFile('MakeupRequestDialog').setWidth(560).setHeight(540);
  SpreadsheetApp.getUi().showModalDialog(html, 'Submit Makeup Hour Request');
}

function showPendingRequestsDialog() {
  const html = HtmlService.createHtmlOutputFromFile('PendingRequestsDialog').setWidth(940).setHeight(720);
  SpreadsheetApp.getUi().showModalDialog(html, 'Approve Requests');
}

function showCalculatePayPeriodDialog() {
  const html = HtmlService.createHtmlOutputFromFile('CalculatePayPeriodDialog').setWidth(700).setHeight(640);
  SpreadsheetApp.getUi().showModalDialog(html, 'Calculate Pay Period');
}

function showScorecardDialog() {
  const html = HtmlService.createHtmlOutputFromFile('ScorecardDialog').setWidth(920).setHeight(760);
  SpreadsheetApp.getUi().showModalDialog(html, 'Attendance Scorecard');
}

function showKpiBonusDialog() {
  const html = HtmlService.createHtmlOutputFromFile('KpiBonusDialog').setWidth(940).setHeight(720);
  SpreadsheetApp.getUi().showModalDialog(html, 'Enter KPI Bonuses');
}

function showAdditionalBonusDialog() {
  const template = HtmlService.createTemplateFromFile('BonusAdjustmentDialog');
  template.entryMode = 'additional';
  const html = template.evaluate().setWidth(620).setHeight(560);
  SpreadsheetApp.getUi().showModalDialog(html, 'Enter Additional Bonus');
}

function showAdjustmentDialog() {
  const template = HtmlService.createTemplateFromFile('BonusAdjustmentDialog');
  template.entryMode = 'adjustment';
  const html = template.evaluate().setWidth(620).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Enter Adjustment');
}

function showCompensationChangeDialog() {
  const html = HtmlService.createHtmlOutputFromFile('CompensationChangeDialog').setWidth(860).setHeight(760);
  SpreadsheetApp.getUi().showModalDialog(html, 'Compensation Change');
}

function showOffboardEmployeeDialog() {
  const html = HtmlService.createHtmlOutputFromFile('OffboardEmployeeDialog').setWidth(760).setHeight(720);
  SpreadsheetApp.getUi().showModalDialog(html, 'Offboard Employee');
}

function showReactivateEmployeeDialog() {
  const html = HtmlService.createHtmlOutputFromFile('ReactivateEmployeeDialog').setWidth(860).setHeight(760);
  SpreadsheetApp.getUi().showModalDialog(html, 'Reactivate Employee');
}

function showCompensationChangeLog() {
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  payroll.setActiveSheet(getSheet_(payroll, CONFIG.payrollTabs.compChanges));
}

function showEmployeeLifecycleLog() {
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  payroll.setActiveSheet(getSheet_(payroll, CONFIG.payrollTabs.lifecycle));
}

function rebuildAttendanceLogFromMenu() {
  const result = rebuildAttendanceLog();
  SpreadsheetApp.getUi().alert('Attendance Log rebuilt', `${result.rowsWritten} rows written for ${result.startDate} through ${result.endDate}.`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function refreshAttendanceDataFromMenu() {
  const result = rebuildAttendanceLog();
  SpreadsheetApp.getUi().alert('Attendance data refreshed', `${result.rowsWritten} attendance rows are ready for payroll calculations.`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function refreshQuarterlyPaTrackerFromMenu() {
  const result = refreshQuarterlyPaTracker();
  SpreadsheetApp.getUi().alert('Quarterly PA Tracker refreshed', result.message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function refreshPtoBalancesFromMenu() {
  const result = refreshPtoBalances();
  SpreadsheetApp.getUi().alert('PTO Balances refreshed', result.message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function markSelectedPayPeriodPaidFromMenu() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Mark Pay Period Paid', 'Enter the Period ID to mark as Paid.', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const periodId = response.getResponseText().trim();
  if (!periodId) return;
  const result = markPayPeriodPaid(periodId);
  ui.alert('Pay Period Updated', result.message, ui.ButtonSet.OK);
}

function exportPayrollOutputCsv() {
  const ss = requirePayrollSpreadsheet_();
  const sheet = getSheet_(ss, CONFIG.payrollTabs.output);
  const values = sheet.getDataRange().getDisplayValues();
  const csv = values.map(row => row.map(csvEscape_).join(',')).join('\n');
  const file = DriveApp.createFile(`Payroll Output ${formatDateKey_(new Date())}.csv`, csv, MimeType.CSV);
  SpreadsheetApp.getUi().alert('Export Complete', `CSV file created:\n${file.getUrl()}`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function getClockAppInitialState(identity) {
  return getClockState(identity);
}

function getClockState(identity) {
  const employee = resolveWebAppEmployee_(identity);
  if (!employee) {
    return {
      authenticated: false,
      activeUserEmail: getActiveUserEmail_(),
      message: 'Enter your employee code and PIN to clock in.'
    };
  }

  const ss = requireAttendanceSpreadsheet_();
  const todayWindow = getTodayWindow_();
  const events = getClockEvents_(ss, todayWindow.start, todayWindow.end, employee['Employee Code']);
  const lastEvent = events.length ? events[events.length - 1] : null;
  const allowed = getAllowedEvents_(lastEvent ? lastEvent['Event Type'] : '');
  const now = new Date();
  const employeeCode = normalizeCode_(employee['Employee Code']);

  return {
    authenticated: true,
    employee: {
      employeeCode,
      displayName: employee['Display Name'] || employee['Full Name'] || employeeCode
    },
    activeUserEmail: getActiveUserEmail_(),
    dateLabel: Utilities.formatDate(now, CONFIG.timezone, 'EEEE, MMMM d, yyyy'),
    timeLabel: Utilities.formatDate(now, CONFIG.timezone, 'h:mm a'),
    buttons: CONFIG.eventTypes.map(type => ({
      type,
      label: CONFIG.eventLabels[type],
      enabled: allowed.indexOf(type) !== -1
    })),
    currentState: getCurrentStateLabel_(lastEvent ? lastEvent['Event Type'] : ''),
    todaySummary: buildTodaySummary_(events),
    timeOffTypes: CONFIG.timeOffTypes,
    ptoBalance: getPtoBalanceSummaryForEmployee_(employeeCode, now.getFullYear()),
    identity: {
      employeeCode,
      hasPinFallback: Boolean(employee['Web App PIN'])
    }
  };
}

function recordClockEvent(payload) {
  payload = payload || {};
  if (CONFIG.eventTypes.indexOf(payload.eventType) === -1) {
    throw new Error('Invalid event type.');
  }

  const employee = resolveWebAppEmployee_(payload.identity);
  if (!employee) {
    throw new Error('Could not identify an active employee. Use your company Google account or enter your employee code and PIN.');
  }

  const state = getClockState(payload.identity);
  const button = state.buttons.filter(item => item.type === payload.eventType)[0];
  if (!button || !button.enabled) {
    throw new Error(`${CONFIG.eventLabels[payload.eventType]} is not allowed from the current state.`);
  }

  appendClockEvent_({
    employeeCode: employee['Employee Code'],
    eventType: payload.eventType,
    source: 'WEB_APP',
    timestamp: new Date(),
    device: payload.device || '',
    notes: ''
  });

  return getClockState(payload.identity);
}

function getAddEmployeeDefaults() {
  return {
    today: formatDateKey_(new Date()),
    statuses: ['Active', 'Inactive', 'Resigned', 'Terminated'],
    ptoPlanTypes: CONFIG.ptoPlanTypes,
    defaultPtoPlanType: CONFIG.defaultPtoPlanType
  };
}

function addEmployee(payload) {
  return withScriptLock_('Add Employee', function() {
    return addEmployee_(payload);
  });
}

function addEmployee_(payload) {
  payload = payload || {};
  const code = normalizeCode_(payload.employeeCode || suggestEmployeeCode_(payload.fullName));
  if (!code) throw new Error('Employee Code is required.');
  if (!payload.fullName) throw new Error('Full Name is required.');

  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);

  const employeeSheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const employees = readObjects_(employeeSheet);
  if (employees.some(row => normalizeCode_(row['Employee Code']) === code)) {
    throw new Error(`Employee Code ${code} already exists.`);
  }

  const startDate = parseDateOrBlank_(payload.startDate);
  const employeeRow = [
    code,
    payload.fullName || '',
    payload.displayName || payload.fullName || code,
    payload.status || 'Active',
    startDate || '',
    '',
    payload.position || '',
    payload.manager || '',
    payload.email || '',
    payload.pin || '',
    payload.notes || ''
  ];
  employeeSheet.appendRow(employeeRow);

  const scheduleSheet = getSheet_(attendance, CONFIG.attendanceTabs.schedules);
  scheduleSheet.appendRow(buildScheduleRowFromPayload_(code, startDate, payload.schedule || {}));

  const compSheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const comp = payload.comp || {};
  compSheet.appendRow([
    code,
    startDate || '',
    '',
    comp.rampTier || '',
    toNumberOrBlank_(comp.monthlyBaseSalary),
    toNumberOrBlank_(comp.monthlyBenefits),
    toNumberOrBlank_(comp.monthlyAttendanceBonus),
    toNumberOrBlank_(comp.monthlyKpiBonusMax),
    toNumberOrBlank_(comp.quarterlyPaBonus),
    toNumberOrBlank_(comp.annualPtoDays),
    toNumberOrBlank_(comp.annualNonPtoDays),
    comp.notes || (payload.includeComp ? '' : 'Compensation pending payroll processor setup.'),
    normalizePtoPlanType_(comp.ptoPlanType),
    toNumberOrBlank_(comp.monthlyPtoAccrualDays)
  ]);

  const lifecycleSheet = getSheet_(payroll, CONFIG.payrollTabs.lifecycle);
  lifecycleSheet.appendRow([
    makeId_('LIFE'),
    code,
    'Hired',
    new Date(),
    startDate || '',
    payload.reason || 'New employee added',
    getActiveUserEmail_(),
    '',
    payload.notes || ''
  ]);

  refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  applyPayrollFormatting_(payroll);
  return { message: `${payload.fullName} (${code}) added.` };
}

function getManualClockEventDialogData() {
  return {
    employees: listEmployeesForUi_(),
    eventTypes: CONFIG.eventTypes.map(type => ({ type, label: CONFIG.eventLabels[type] })),
    nowLocal: formatDateTimeLocal_(new Date())
  };
}

function addManualClockEvent(payload) {
  payload = payload || {};
  const employeeCode = normalizeCode_(payload.employeeCode);
  if (!employeeCode) throw new Error('Employee is required.');
  if (CONFIG.eventTypes.indexOf(payload.eventType) === -1) throw new Error('Invalid event type.');
  const timestamp = parseLocalDateTime_(payload.timestamp);
  if (!timestamp) throw new Error('Timestamp is required.');

  appendClockEvent_({
    employeeCode,
    eventType: payload.eventType,
    source: 'MANUAL',
    timestamp,
    device: 'Manual entry',
    notes: payload.notes || ''
  });

  rebuildAttendanceLog({ startDate: formatDateKey_(timestamp), endDate: formatDateKey_(timestamp) });
  return { message: `Manual ${CONFIG.eventLabels[payload.eventType]} saved for ${employeeCode}.` };
}

function getEditAttendanceLogDialogData() {
  return {
    employees: listEmployeesForUi_(),
    statuses: CONFIG.statuses,
    today: formatDateKey_(new Date())
  };
}

function editAttendanceLogEntry(payload) {
  payload = payload || {};
  const employeeCode = normalizeCode_(payload.employeeCode);
  const date = parseDateOrBlank_(payload.date);
  const status = payload.status;
  if (!employeeCode) throw new Error('Employee is required.');
  if (!date) throw new Error('Date is required.');
  if (CONFIG.statuses.indexOf(status) === -1) throw new Error('Invalid status.');

  rebuildAttendanceLog({ startDate: formatDateKey_(date), endDate: formatDateKey_(date) });
  const attendance = requireAttendanceSpreadsheet_();
  const logSheet = getSheet_(attendance, CONFIG.attendanceTabs.log);
  const data = logSheet.getDataRange().getValues();
  const headers = data[0];
  const dateIdx = headers.indexOf('Date');
  const codeIdx = headers.indexOf('Employee Code');
  const statusIdx = headers.indexOf('Status');
  const key = formatDateKey_(date);

  for (let i = 1; i < data.length; i += 1) {
    if (formatDateKey_(data[i][dateIdx]) === key && normalizeCode_(data[i][codeIdx]) === employeeCode) {
      logSheet.getRange(i + 1, statusIdx + 1).setValue(status);
      return { message: `Attendance status updated for ${employeeCode} on ${key}.` };
    }
  }
  throw new Error('Attendance Log row was not found after rebuild.');
}

function getTimeOffRequestDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  refreshPtoBalances_(attendance);
  return {
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active' || employee.status === ''),
    types: CONFIG.timeOffTypes,
    today: formatDateKey_(new Date()),
    balances: getPtoBalanceSummariesByEmployee_(attendance, new Date().getFullYear())
  };
}

function submitTimeOffRequest(payload) {
  const result = createTimeOffRequest_(payload, 'SHEET_MENU');
  return {
    message: `${result.type} request ${result.requestId} submitted for ${result.employeeCode}. Manager approval is required before payroll uses it.`
  };
}

function submitWebTimeOffRequest(payload) {
  payload = payload || {};
  const employee = resolveWebAppEmployee_(payload.identity);
  if (!employee) throw new Error('Could not identify an active employee. Sign in again and retry.');
  const result = createTimeOffRequest_(Object.assign({}, payload, {
    employeeCode: employee['Employee Code']
  }), 'WEB_APP');
  return {
    message: `${result.type} request submitted. Manager approval is required before payroll uses it.`
  };
}

function getMakeupRequestDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  return {
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active' || employee.status === ''),
    today: formatDateKey_(new Date())
  };
}

function submitMakeupHourRequest(payload) {
  const result = createMakeupHourRequest_(payload, 'SHEET_MENU');
  return {
    message: `Makeup request ${result.requestId} submitted for ${result.employeeCode}. Manager approval is required before payroll uses it.`
  };
}

function submitWebMakeupHourRequest(payload) {
  payload = payload || {};
  const employee = resolveWebAppEmployee_(payload.identity);
  if (!employee) throw new Error('Could not identify an active employee. Sign in again and retry.');
  const result = createMakeupHourRequest_(Object.assign({}, payload, {
    employeeCode: employee['Employee Code']
  }), 'WEB_APP');
  return {
    message: `Makeup request submitted. Manager approval is required before payroll uses it.`
  };
}

function getPendingRequestsDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  refreshPtoBalances_(attendance);
  const employees = getEmployeeDisplayMap_(attendance);
  const balances = getPtoBalanceSummariesByEmployee_(attendance, new Date().getFullYear());

  const timeOffRequests = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        kind: 'timeOff',
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        type: row['Type (PTO/UTO/Non-PTO)'],
        startDate: displayDate_(row['Start Date']),
        endDate: displayDate_(row['End Date']),
        units: toNumberOrBlank_(row['Hours/Days']),
        reason: row.Reason || '',
        balance: balances[code] || null
      };
    });

  const makeupRequests = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        kind: 'makeup',
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        date: displayDate_(row.Date),
        hours: toNumberOrBlank_(row['Hours Requested']),
        reason: row.Reason || ''
      };
    });

  return {
    timeOffRequests,
    makeupRequests,
    requestedAt: Utilities.formatDate(new Date(), CONFIG.timezone, 'yyyy-MM-dd h:mm a')
  };
}

function processPendingRequests(payload) {
  return withScriptLock_('Process Pending Requests', function() {
    return processPendingRequests_(payload);
  });
}

function processPendingRequests_(payload) {
  payload = payload || {};
  const decisions = (payload.decisions || [])
    .map(decision => ({
      kind: String(decision.kind || ''),
      requestId: String(decision.requestId || '').trim(),
      decision: String(decision.decision || '').trim(),
      notes: String(decision.notes || '').trim()
    }))
    .filter(decision => decision.requestId && decision.decision && decision.decision !== 'Keep');
  if (!decisions.length) throw new Error('Choose at least one request to approve or deny.');

  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  const approvedBy = getActiveUserEmail_();
  const approvedAt = new Date();
  let timeOffUpdated = 0;
  let makeupUpdated = 0;
  const rebuildWindows = [];

  const timeOffSheet = getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests);
  const timeOffRows = readObjects_(timeOffSheet);
  const makeupSheet = getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests);
  const makeupRows = readObjects_(makeupSheet);

  decisions.forEach(decision => {
    if (CONFIG.requestStatuses.indexOf(decision.decision) === -1 || decision.decision === 'Pending') {
      throw new Error(`Invalid decision for ${decision.requestId}.`);
    }

    if (decision.kind === 'timeOff') {
      const row = timeOffRows.filter(item => String(item['Request ID']) === decision.requestId)[0];
      if (!row) throw new Error(`Time off request ${decision.requestId} was not found.`);
      const notes = [String(row.Notes || '').trim(), decision.notes].filter(Boolean).join(' | ');
      timeOffSheet.getRange(row._rowNumber, 8, 1, 4).setValues([[
        decision.decision,
        approvedBy,
        approvedAt,
        notes
      ]]);
      timeOffUpdated += 1;
      const startDate = parseDateOrBlank_(row['Start Date']);
      const endDate = parseDateOrBlank_(row['End Date']);
      if (startDate && endDate) rebuildWindows.push({ start: startDate, end: endDate });
      return;
    }

    if (decision.kind === 'makeup') {
      const row = makeupRows.filter(item => String(item['Request ID']) === decision.requestId)[0];
      if (!row) throw new Error(`Makeup request ${decision.requestId} was not found.`);
      makeupSheet.getRange(row._rowNumber, 6, 1, 3).setValues([[
        decision.decision,
        approvedBy,
        approvedAt
      ]]);
      makeupUpdated += 1;
      return;
    }

    throw new Error(`Unknown request kind for ${decision.requestId}.`);
  });

  refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  if (rebuildWindows.length) {
    const start = new Date(Math.min.apply(null, rebuildWindows.map(window => dateOnly_(window.start).getTime())));
    const end = new Date(Math.max.apply(null, rebuildWindows.map(window => dateOnly_(window.end).getTime())));
    rebuildAttendanceLog({
      startDate: formatDateKey_(start),
      endDate: formatDateKey_(end)
    });
  }

  return {
    message: `${timeOffUpdated} time off request(s) and ${makeupUpdated} makeup request(s) updated. Recalculate payroll for affected periods.`
  };
}

function refreshPtoBalances() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  const rows = refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  return {
    rowsWritten: rows.length,
    message: `${rows.length} PTO balance row(s) refreshed.`
  };
}

function getCalculatePayPeriodDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  repairPayPeriodIds_(payroll);
  const periods = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods)).map(row => ({
    periodId: normalizePeriodId_(row['Period ID']),
    payDate: displayDate_(row['Pay Date']),
    periodStart: displayDate_(row['Period Start']),
    periodEnd: displayDate_(row['Period End']),
    type: row['Period Type (Mid / EOM)'],
    status: row['Status (Open / Calculated / Paid)']
  }));
  const defaultPeriodId = getDefaultOpenPeriodId_(periods);
  return {
    periods,
    defaultPeriodId,
    employees: defaultPeriodId ? getCalculatePayPeriodEmployees(defaultPeriodId) : []
  };
}

function getCalculatePayPeriodEmployees(periodId) {
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  const period = getPayPeriodById_(payroll, periodId);
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  if (!periodStart || !periodEnd) throw new Error(`Pay period ${periodId} is missing start or end dates.`);
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(employee => employeeEmployedInRange_(employee, periodStart, periodEnd))
    .map(mapEmployeeRowForUi_);
}

function getScorecardDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  return {
    employees: listEmployeesForUi_(),
    months: getAvailableScorecardMonths_(attendance),
    defaultMonth: getDefaultScorecardMonth_(attendance)
  };
}

function getKpiBonusDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  ensurePhase3PayrollSheets_(payroll);
  ensurePayPeriodsForDialog_(payroll);
  const periods = listPayPeriodsForUi_();
  return {
    periods,
    defaultPeriodId: getDefaultOpenPeriodIdByType_(periods, 'Mid') || getDefaultOpenPeriodId_(periods)
  };
}

function getKpiBonusPeriodData(periodId) {
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  ensurePhase3PayrollSheets_(payroll);
  const period = getPayPeriodById_(payroll, periodId);
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  if (!periodStart || !periodEnd) throw new Error(`Pay period ${periodId} is missing start or end dates.`);
  const compRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
  const bonusRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.bonuses));
  const existing = groupBonusRowsByEmployee_(bonusRows, periodId, 'KPI');

  const employees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(employee => employeeEmployedInRange_(employee, periodStart, periodEnd))
    .map(employee => mapEmployeeRowForUi_(employee))
    .map(employee => {
      const comp = getCompForDate_(compRows, employee.employeeCode, periodEnd);
      const kpiMax = comp ? toNumberOrBlank_(comp['Monthly KPI Bonus (Max)']) : '';
      const current = existing[employee.employeeCode] || { amount: 0, descriptions: [] };
      const approvedPercent = kpiMax === '' || !current.amount ? '' : round2_((current.amount / kpiMax) * 100);
      return {
        employeeCode: employee.employeeCode,
        displayName: employee.displayName,
        kpiMax,
        approvedPercent,
        approvedAmount: current.amount ? round2_(current.amount) : '',
        notes: current.descriptions.join(' | ')
      };
    });

  return {
    periodId,
    periodType: period['Period Type (Mid / EOM)'],
    employees
  };
}

function saveKpiBonuses(payload) {
  return withScriptLock_('Save KPI Bonuses', function() {
    return saveKpiBonuses_(payload);
  });
}

function saveKpiBonuses_(payload) {
  payload = payload || {};
  const periodId = payload.periodId;
  if (!periodId) throw new Error('Select a pay period.');
  const payroll = requirePayrollSpreadsheet_();
  const period = getPayPeriodById_(payroll, periodId);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  const compRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
  const rows = payload.rows || [];
  const approvedBy = getActiveUserEmail_();
  const approvedAt = new Date();
  const replacements = [];
  const employeeCodes = [];

  rows.forEach(row => {
    const code = normalizeCode_(row.employeeCode);
    if (!code) return;
    employeeCodes.push(code);
    const approvedPercent = toNumberOrBlank_(row.approvedPercent);
    if (approvedPercent === '') return;
    if (approvedPercent < 0 || approvedPercent > 100) throw new Error(`KPI percentage for ${code} must be between 0 and 100.`);
    const comp = getCompForDate_(compRows, code, periodEnd);
    const kpiMax = comp ? toNumberOrBlank_(comp['Monthly KPI Bonus (Max)']) : '';
    if (kpiMax === '' && approvedPercent > 0) throw new Error(`${code} has no Monthly KPI Bonus (Max) in Compensation Master.`);
    const amount = kpiMax === '' ? 0 : round2_(kpiMax * approvedPercent / 100);
    const note = String(row.notes || '').trim();
    replacements.push([
      periodId,
      code,
      'KPI',
      note ? `KPI approved ${approvedPercent}%. ${note}` : `KPI approved ${approvedPercent}%.`,
      amount,
      approvedBy,
      approvedAt
    ]);
  });

  replaceBonusAdjustmentRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), periodId, ['KPI'], employeeCodes, replacements);
  applyPayrollFormatting_(payroll);
  return {
    message: `${replacements.length} KPI bonus record(s) saved for ${periodId}. Recalculate the pay period to update Payroll Output.`
  };
}

function getBonusAdjustmentDialogData(entryMode) {
  const payroll = requirePayrollSpreadsheet_();
  ensurePhase3PayrollSheets_(payroll);
  const periods = listPayPeriodsForUi_();
  return {
    entryMode,
    periods,
    defaultPeriodId: getDefaultOpenPeriodId_(periods),
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active')
  };
}

function addBonusAdjustment(payload) {
  return withScriptLock_('Add Bonus Adjustment', function() {
    return addBonusAdjustment_(payload);
  });
}

function addBonusAdjustment_(payload) {
  payload = payload || {};
  const periodId = payload.periodId;
  const employeeCode = normalizeCode_(payload.employeeCode);
  const mode = payload.entryMode;
  const amount = toNumberOrBlank_(payload.amount);
  if (!periodId) throw new Error('Select a pay period.');
  if (!employeeCode) throw new Error('Select an employee.');
  if (amount === '' || amount <= 0) throw new Error('Enter an amount greater than zero.');

  const payroll = requirePayrollSpreadsheet_();
  getPayPeriodById_(payroll, periodId);
  const type = mode === 'additional' ? 'Additional' : payload.adjustmentType;
  if (['Additional', 'Positive Adj', 'Negative Adj'].indexOf(type) === -1) {
    throw new Error('Select a valid bonus or adjustment type.');
  }
  const description = String(payload.description || '').trim();
  if (!description) throw new Error('Description is required.');

  appendRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), [[
    periodId,
    employeeCode,
    type,
    description,
    round2_(amount),
    getActiveUserEmail_(),
    new Date()
  ]]);
  applyPayrollFormatting_(payroll);
  return {
    message: `${type} saved for ${employeeCode}. Recalculate ${periodId} to update Payroll Output.`
  };
}

function getCompensationChangeDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  const periods = listPayPeriodsForUi_();
  return {
    employees: listEmployeesForLifecycleUi_(['Active', '']),
    periods,
    defaultEffectiveFrom: formatDateKey_(getFirstDayOfNextMonth_()),
    defaultAdjustmentPeriodId: getDefaultOpenPeriodId_(periods)
  };
}

function getCompensationChangeEmployeeData(employeeCode, effectiveFrom) {
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  const code = normalizeCode_(employeeCode);
  const effectiveDate = parseDateOrBlank_(effectiveFrom) || new Date();
  const current = getCurrentCompRow_(payroll, code, effectiveDate);
  if (!current) throw new Error(`${code} has no current compensation row.`);
  return {
    employeeCode: code,
    effectiveFrom: displayDate_(current['Effective From']),
    effectiveTo: displayDate_(current['Effective To']),
    fields: getCompFieldConfig_().map(field => ({
      key: field.key,
      header: field.header,
      label: field.label,
      type: field.type,
      options: field.options || [],
      value: blankable_(current[field.header])
    }))
  };
}

function saveCompensationChange(payload) {
  return withScriptLock_('Save Compensation Change', function() {
    return saveCompensationChange_(payload);
  });
}

function saveCompensationChange_(payload) {
  payload = payload || {};
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);

  const code = normalizeCode_(payload.employeeCode);
  const effectiveFrom = parseDateOrBlank_(payload.effectiveFrom);
  const reason = String(payload.reason || '').trim();
  if (!code) throw new Error('Select an employee.');
  if (!effectiveFrom) throw new Error('Effective From is required.');
  if (!reason) throw new Error('Reason is required.');

  const compSheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const current = getCurrentCompRow_(payroll, code, effectiveFrom);
  if (!current) throw new Error(`${code} has no compensation row active on ${formatDateKey_(effectiveFrom)}.`);
  const currentFrom = parseDateOrBlank_(current['Effective From']);
  if (currentFrom && dateOnly_(effectiveFrom).getTime() <= dateOnly_(currentFrom).getTime()) {
    throw new Error(`Effective From must be after the current row start date (${displayDate_(currentFrom)}).`);
  }

  const fields = getCompFieldConfig_();
  const newComp = payload.newComp || {};
  const changes = [];
  const nextValues = {};
  fields.forEach(field => {
    const oldValue = blankable_(current[field.header]);
    const rawValue = newComp[field.key];
    const hasNewValue = rawValue !== undefined && rawValue !== null && String(rawValue).trim() !== '';
    let newValue = oldValue;
    if (hasNewValue) {
      if (field.type === 'number') {
        newValue = toNumberOrBlank_(rawValue);
      } else if (field.type === 'select' && field.header === 'PTO Plan Type') {
        newValue = normalizePtoPlanType_(rawValue);
      } else {
        newValue = String(rawValue).trim();
      }
      if (field.type === 'number' && newValue === '') throw new Error(`${field.label} must be numeric.`);
      if (normalizeCompComparable_(oldValue) !== normalizeCompComparable_(newValue)) {
        changes.push({ field, oldValue, newValue });
      }
    }
    nextValues[field.header] = newValue;
  });
  if (!changes.length) throw new Error('Enter at least one changed compensation value.');

  const retroactive = Boolean(payload.retroactive);
  const retroAdjustment = retroactive
    ? prepareRetroactiveCompAdjustment_(attendance, payroll, code, current, nextValues, payload)
    : { amount: '', periodId: '', row: null };

  compSheet.getRange(current._rowNumber, 3).setValue(addDays_(dateOnly_(effectiveFrom), -1));
  appendRows_(compSheet, [[
    code,
    dateOnly_(effectiveFrom),
    '',
    nextValues['Ramp Tier'],
    toNumberOrBlank_(nextValues['Monthly Base Salary']),
    toNumberOrBlank_(nextValues['Monthly Benefits']),
    toNumberOrBlank_(nextValues['Monthly Attendance Bonus']),
    toNumberOrBlank_(nextValues['Monthly KPI Bonus (Max)']),
    toNumberOrBlank_(nextValues['Quarterly PA Bonus']),
    toNumberOrBlank_(nextValues['Annual PTO Days']),
    toNumberOrBlank_(nextValues['Annual Non-PTO Days']),
    String(payload.notes || '').trim() || reason,
    normalizePtoPlanType_(nextValues['PTO Plan Type']),
    toNumberOrBlank_(nextValues['Monthly PTO Accrual Days'])
  ]]);

  const approvedBy = getActiveUserEmail_();
  const changeDate = new Date();
  const logRows = changes.map(change => [
    makeId_('COMP'),
    code,
    changeDate,
    dateOnly_(effectiveFrom),
    change.field.header,
    change.oldValue,
    change.newValue,
    reason,
    approvedBy,
    retroactive ? 'Yes' : 'No',
    change.field.header === 'Monthly Base Salary' ? retroAdjustment.amount : ''
  ]);
  appendRows_(getSheet_(payroll, CONFIG.payrollTabs.compChanges), logRows);
  if (retroAdjustment.row) {
    appendRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), [retroAdjustment.row]);
  }

  if (changes.some(change => ['Annual PTO Days', 'Annual Non-PTO Days', 'PTO Plan Type', 'Monthly PTO Accrual Days'].indexOf(change.field.header) !== -1)) {
    refreshPtoBalances_(attendance);
  }
  applyPayrollFormatting_(payroll);
  applyAttendanceFormatting_(attendance);
  return {
    message: `${changes.length} compensation field(s) changed for ${code}.${retroAdjustment.periodId ? ` Retroactive adjustment added to ${retroAdjustment.periodId}.` : ''}`
  };
}

function getOffboardDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  return {
    employees: listEmployeesForLifecycleUi_(['Active', '']),
    today: formatDateKey_(new Date()),
    eventTypes: ['Resigned', 'Terminated']
  };
}

function getOffboardPreview(payload) {
  payload = payload || {};
  const code = normalizeCode_(payload.employeeCode);
  const lastWorkingDay = parseDateOrBlank_(payload.lastWorkingDay);
  if (!code) throw new Error('Select an employee.');
  if (!lastWorkingDay) throw new Error('Last Working Day is required.');
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  return buildFinalPayrollPreview_(attendance, payroll, code, lastWorkingDay);
}

function offboardEmployee(payload) {
  return withScriptLock_('Offboard Employee', function() {
    return offboardEmployee_(payload);
  });
}

function offboardEmployee_(payload) {
  payload = payload || {};
  const code = normalizeCode_(payload.employeeCode);
  const eventType = String(payload.eventType || '').trim();
  const lastWorkingDay = parseDateOrBlank_(payload.lastWorkingDay);
  const reason = String(payload.reason || '').trim();
  if (!code) throw new Error('Select an employee.');
  if (['Resigned', 'Terminated'].indexOf(eventType) === -1) throw new Error('Select Resigned or Terminated.');
  if (!lastWorkingDay) throw new Error('Last Working Day is required.');
  if (!reason) throw new Error('Reason is required.');

  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  const employee = getEmployeeRowByCode_(attendance, code);
  if (!employee) throw new Error(`${code} is not an active employee.`);
  if (!getCurrentCompRow_(payroll, code, lastWorkingDay)) {
    throw new Error(`${code} has no compensation row active on ${formatDateKey_(lastWorkingDay)}.`);
  }
  const schedule = getScheduleForDate_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules)), code, lastWorkingDay);
  if (!schedule) throw new Error(`${code} has no work schedule active on ${formatDateKey_(lastWorkingDay)}.`);

  const finalPlan = buildFinalPayrollPlan_(payroll, code, lastWorkingDay);
  const finalPeriod = createOrUpdateFinalPayPeriod_(payroll, finalPlan);
  upsertFinalKpiBonus_(attendance, payroll, code, finalPeriod, lastWorkingDay);
  const ptoPayout = upsertFinalPtoPayoutAdjustment_(attendance, payroll, code, finalPeriod, lastWorkingDay);

  const payrollResult = calculatePayPeriod_({
    periodId: finalPeriod.periodId,
    employeeCodes: [code]
  });

  setEmployeeStatus_(attendance, code, eventType, lastWorkingDay);
  closeEffectiveRowsThroughDate_(getSheet_(attendance, CONFIG.attendanceTabs.schedules), code, lastWorkingDay);
  closeEffectiveRowsThroughDate_(getSheet_(payroll, CONFIG.payrollTabs.comp), code, lastWorkingDay);
  appendRows_(getSheet_(payroll, CONFIG.payrollTabs.lifecycle), [[
    makeId_('LIFE'),
    code,
    eventType,
    new Date(),
    dateOnly_(lastWorkingDay),
    reason,
    getActiveUserEmail_(),
    finalPeriod.periodId,
    [String(payload.notes || '').trim(), ptoPayout.note, payrollResult.warnings.join(' ')].filter(Boolean).join(' | ')
  ]]);
  refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  applyPayrollFormatting_(payroll);
  return {
    message: `${code} marked ${eventType}. Final payroll ${finalPeriod.periodId} calculated.`
  };
}

function getReactivateDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  return {
    employees: listEmployeesForLifecycleUi_(['Inactive', 'Resigned', 'Terminated']),
    today: formatDateKey_(new Date()),
    ptoPlanTypes: CONFIG.ptoPlanTypes,
    defaultPtoPlanType: CONFIG.defaultPtoPlanType
  };
}

function getReactivateEmployeeData(employeeCode) {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  const code = normalizeCode_(employeeCode);
  const employee = getEmployeeRowByCodeAnyStatus_(attendance, code);
  if (!employee) throw new Error(`${code} was not found.`);
  return {
    employeeCode: code,
    position: employee.Position || '',
    manager: employee.Manager || '',
    displayName: employee['Display Name'] || employee['Full Name'] || code
  };
}

function reactivateEmployee(payload) {
  return withScriptLock_('Reactivate Employee', function() {
    return reactivateEmployee_(payload);
  });
}

function reactivateEmployee_(payload) {
  payload = payload || {};
  const code = normalizeCode_(payload.employeeCode);
  const startDate = parseDateOrBlank_(payload.startDate);
  const reason = String(payload.reason || '').trim();
  if (!code) throw new Error('Select an employee.');
  if (!startDate) throw new Error('New Start Date is required.');
  if (!reason) throw new Error('Reason is required.');

  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll);
  setupAttendanceSpreadsheet_(attendance);
  const employee = getEmployeeRowByCodeAnyStatus_(attendance, code);
  if (!employee) throw new Error(`${code} was not found.`);
  if (employee.Status === 'Active' || employee.Status === '') throw new Error(`${code} is already active.`);

  updateEmployeeForReactivation_(attendance, code, startDate, payload);
  appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.schedules), [
    buildScheduleRowFromPayload_(code, dateOnly_(startDate), payload.schedule || {})
  ]);
  const comp = payload.comp || {};
  appendRows_(getSheet_(payroll, CONFIG.payrollTabs.comp), [[
    code,
    dateOnly_(startDate),
    '',
    comp.rampTier || '',
    toNumberOrBlank_(comp.monthlyBaseSalary),
    toNumberOrBlank_(comp.monthlyBenefits),
    toNumberOrBlank_(comp.monthlyAttendanceBonus),
    toNumberOrBlank_(comp.monthlyKpiBonusMax),
    toNumberOrBlank_(comp.quarterlyPaBonus),
    toNumberOrBlank_(comp.annualPtoDays),
    toNumberOrBlank_(comp.annualNonPtoDays),
    comp.notes || 'Reactivation compensation terms.',
    normalizePtoPlanType_(comp.ptoPlanType),
    toNumberOrBlank_(comp.monthlyPtoAccrualDays)
  ]]);
  appendRows_(getSheet_(payroll, CONFIG.payrollTabs.lifecycle), [[
    makeId_('LIFE'),
    code,
    'Reactivated',
    new Date(),
    dateOnly_(startDate),
    reason,
    getActiveUserEmail_(),
    '',
    String(payload.notes || '').trim()
  ]]);
  refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  applyPayrollFormatting_(payroll);
  return {
    message: `${code} reactivated with new schedule and compensation rows effective ${formatDateKey_(startDate)}.`
  };
}

function getEmployeeScorecard(payload) {
  payload = payload || {};
  const employeeCode = normalizeCode_(payload.employeeCode);
  const monthKey = payload.month;
  if (!employeeCode) throw new Error('Select an employee.');
  if (!monthKey) throw new Error('Select a month.');

  const attendance = requireAttendanceSpreadsheet_();
  const month = getMonthWindow_(monthKey);
  rebuildAttendanceLog({
    startDate: formatDateKey_(month.start),
    endDate: formatDateKey_(month.end)
  });
  const context = buildAttendanceSummaryContext_(attendance);
  return buildMonthlyAttendanceSummary_(context, employeeCode, month.start);
}

function saveScorecardToSheet(payload) {
  const scorecard = getEmployeeScorecard(payload);
  const attendance = requireAttendanceSpreadsheet_();
  writeScorecardSheet_(attendance, scorecard);
  return {
    message: `Scorecard tab updated for ${scorecard.employee.displayName} - ${scorecard.monthLabel}.`,
    scorecard
  };
}

function refreshQuarterlyPaTracker() {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  setupPayrollSpreadsheet_(payroll);

  const today = dateOnly_(new Date());
  const quarterEndMonth = new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3 - 1, 1);
  const monthStart = quarterEndMonth.getMonth() < 0
    ? new Date(today.getFullYear() - 1, 11, 1)
    : quarterEndMonth;
  const quarterWindow = getQuarterWindowForMonth_(monthStart);
  rebuildAttendanceLog({
    startDate: formatDateKey_(quarterWindow.start),
    endDate: formatDateKey_(quarterWindow.end)
  });

  const context = buildPayrollContext_(attendance, payroll, quarterWindow.start, quarterWindow.end);
  const rows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(employee => employee.Status === 'Active' || employee.Status === '')
    .map(employee => {
      const code = normalizeCode_(employee['Employee Code']);
      const comp = getCompForDate_(context.compRows, code, quarterWindow.end);
      return buildQuarterlyPaResult_(code, quarterWindow.end, context, comp).trackerRow;
    })
    .filter(Boolean);

  upsertQuarterlyPaTrackerRows_(getSheet_(payroll, CONFIG.payrollTabs.paTracker), rows);
  applyPayrollFormatting_(payroll);
  return {
    rowsWritten: rows.length,
    message: `${rows.length} employee quarter record(s) refreshed for ${getQuarterLabel_(quarterWindow.end)}.`
  };
}

function calculatePayPeriod(payload) {
  return withScriptLock_('Calculate Pay Period', function() {
    return calculatePayPeriod_(payload);
  });
}

function calculatePayPeriod_(payload) {
  payload = payload || {};
  const periodId = normalizePeriodId_(payload.periodId);
  if (!periodId) throw new Error('Select a pay period.');

  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  repairPayPeriodIds_(payroll);
  const periodSheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  const periodRows = readObjects_(periodSheet);
  const period = periodRows.filter(row => normalizePeriodId_(row['Period ID']) === periodId)[0];
  if (!period) throw new Error(`Pay period ${periodId} was not found.`);

  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  if (!periodStart || !periodEnd) throw new Error(`Pay period ${periodId} is missing start or end dates.`);

  const attendanceWindow = getPayrollAttendanceWindow_(period);
  rebuildAttendanceLog({
    startDate: formatDateKey_(attendanceWindow.start),
    endDate: formatDateKey_(attendanceWindow.end)
  });

  const requestedCodes = (payload.employeeCodes || []).map(normalizeCode_).filter(Boolean);
  const periodEmployees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => employeeEmployedInRange_(row, periodStart, periodEnd));
  const employeeCodes = requestedCodes.length ? requestedCodes : periodEmployees.map(row => normalizeCode_(row['Employee Code']));

  const context = buildPayrollContext_(attendance, payroll, periodStart, periodEnd);
  const calculations = [];
  const outputRows = [];
  const paTrackerRows = [];
  const warnings = [];

  employeeCodes.forEach(code => {
    const result = calculateEmployeePay_(code, period, context);
    calculations.push(result.calculationRow);
    outputRows.push(result.outputRow);
    if (result.paTrackerRow) paTrackerRows.push(result.paTrackerRow);
    if (result.warning) warnings.push(result.warning);
  });

  writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.calculations), HEADERS.calculations, calculations);
  writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.output), HEADERS.output, outputRows);
  upsertQuarterlyPaTrackerRows_(getSheet_(payroll, CONFIG.payrollTabs.paTracker), paTrackerRows);
  setPayPeriodStatus_(periodSheet, periodId, 'Calculated');
  applyPayrollFormatting_(payroll);

  return {
    message: `Calculated ${outputRows.length} employees for ${periodId}.`,
    warnings
  };
}

function markPayPeriodPaid(periodId) {
  const payroll = requirePayrollSpreadsheet_();
  periodId = normalizePeriodId_(periodId);
  repairPayPeriodIds_(payroll);
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  setPayPeriodStatus_(sheet, periodId, 'Paid');
  return { message: `${periodId} marked as Paid.` };
}

function rebuildAttendanceLog(options) {
  options = options || {};
  const ss = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(ss);

  const startDate = options.startDate ? parseDateOrBlank_(options.startDate) : getDefaultAttendanceLogStartDate_(ss);
  const endDate = options.endDate ? parseDateOrBlank_(options.endDate) : dateOnly_(new Date());
  if (!startDate || !endDate) throw new Error('Valid start and end dates are required.');

  const employees = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.employees))
    .filter(row => employeeEmployedInRange_(row, startDate, endDate));
  const schedules = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.schedules));
  const events = getClockEvents_(ss, startDate, endOfDay_(endDate));
  const holidays = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.holidays));
  const overrides = readAttendanceStatusOverrides_(ss, startDate, endDate);
  const eventsByKey = groupEventsByDateEmployee_(events);
  const rows = [];

  for (let cursor = dateOnly_(startDate); cursor.getTime() <= dateOnly_(endDate).getTime(); cursor = addDays_(cursor, 1)) {
    employees.forEach(employee => {
      if (!employeeEmployedOnDate_(employee, cursor)) return;
      const code = normalizeCode_(employee['Employee Code']);
      const schedule = getScheduleForDate_(schedules, code, cursor);
      const key = `${formatDateKey_(cursor)}|${code}`;
      const rowEvents = eventsByKey[key] || [];
      const overrideStatus = overrides[key];
      rows.push(buildAttendanceLogRow_(cursor, employee, schedule, rowEvents, holidays, overrideStatus));
    });
  }

  upsertAttendanceLogRowsForWindow_(getSheet_(ss, CONFIG.attendanceTabs.log), startDate, endDate, rows);
  applyAttendanceFormatting_(ss);
  return {
    rowsWritten: rows.length,
    startDate: formatDateKey_(startDate),
    endDate: formatDateKey_(endDate)
  };
}

function upsertAttendanceLogRowsForWindow_(sheet, startDate, endDate, generatedRows) {
  const startTime = dateOnly_(startDate).getTime();
  const endTime = dateOnly_(endDate).getTime();
  const preservedRows = readObjects_(sheet)
    .filter(row => {
      const rowDate = parseDateOrBlank_(row.Date);
      if (!rowDate) return true;
      const rowTime = dateOnly_(rowDate).getTime();
      return rowTime < startTime || rowTime > endTime;
    })
    .map(row => HEADERS.log.map(header => row[header] === undefined ? '' : row[header]));
  const outputRows = preservedRows.concat(generatedRows);
  const dateIdx = HEADERS.log.indexOf('Date');
  const codeIdx = HEADERS.log.indexOf('Employee Code');
  outputRows.sort((a, b) => {
    const aDate = parseDateOrBlank_(a[dateIdx]);
    const bDate = parseDateOrBlank_(b[dateIdx]);
    const aTime = aDate ? dateOnly_(aDate).getTime() : 0;
    const bTime = bDate ? dateOnly_(bDate).getTime() : 0;
    if (aTime !== bTime) return aTime - bTime;
    return String(a[codeIdx] || '').localeCompare(String(b[codeIdx] || ''));
  });
  writeRowsReplacingData_(sheet, HEADERS.log, outputRows);
}

function setupAttendanceSpreadsheet_(ss) {
  ensureSheet_(ss, CONFIG.attendanceTabs.employees, HEADERS.employees);
  ensureSheet_(ss, CONFIG.attendanceTabs.schedules, HEADERS.schedules);
  ensureSheet_(ss, CONFIG.attendanceTabs.holidays, HEADERS.holidays);
  ensureSheet_(ss, CONFIG.attendanceTabs.events, HEADERS.events);
  ensureSheet_(ss, CONFIG.attendanceTabs.log, HEADERS.log);
  ensureSheet_(ss, CONFIG.attendanceTabs.timeOffRequests, HEADERS.timeOffRequests);
  ensureSheet_(ss, CONFIG.attendanceTabs.ptoBalances, HEADERS.ptoBalances);
  ensureSheet_(ss, CONFIG.attendanceTabs.makeupRequests, HEADERS.makeupRequests);
  ensureScorecardSheet_(ss);
  removeDefaultBlankSheet_(ss);
  applyAttendanceFormatting_(ss);
}

function setupPayrollSpreadsheet_(ss) {
  ensureSheet_(ss, CONFIG.payrollTabs.comp, HEADERS.comp);
  ensureSheet_(ss, CONFIG.payrollTabs.periods, HEADERS.periods);
  ensureSheet_(ss, CONFIG.payrollTabs.calculations, HEADERS.calculations);
  ensureSheet_(ss, CONFIG.payrollTabs.output, HEADERS.output);
  ensureSheet_(ss, CONFIG.payrollTabs.lifecycle, HEADERS.lifecycle);
  ensureSheet_(ss, CONFIG.payrollTabs.compChanges, HEADERS.compChanges);
  ensureSheet_(ss, CONFIG.payrollTabs.paTracker, HEADERS.paTracker);
  ensureSheet_(ss, CONFIG.payrollTabs.bonuses, HEADERS.bonuses);
  seedPayPeriods_(ss, new Date().getFullYear());
  migratePtoPlanDefaults_(ss);
  removeDefaultBlankSheet_(ss);
  applyPayrollFormatting_(ss);
}

function migratePtoPlanDefaults_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const planIdx = headers.indexOf('PTO Plan Type');
  const accrualIdx = headers.indexOf('Monthly PTO Accrual Days');
  if (planIdx === -1 || accrualIdx === -1) return 0;

  let updated = 0;
  for (let row = 1; row < values.length; row += 1) {
    const hasData = values[row].some(cell => cell !== '' && cell !== null);
    if (!hasData) continue;
    const normalized = normalizePtoPlanType_(values[row][planIdx]);
    if (values[row][planIdx] !== normalized) {
      sheet.getRange(row + 1, planIdx + 1).setValue(normalized);
      updated += 1;
    }
  }
  return updated;
}

function seedInitialEmployees_() {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();

  const employeeSheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const scheduleSheet = getSheet_(attendance, CONFIG.attendanceTabs.schedules);
  const compSheet = getSheet_(payroll, CONFIG.payrollTabs.comp);

  const existingEmployeeCodes = new Set(readObjects_(employeeSheet).map(row => normalizeCode_(row['Employee Code'])));
  const employeeRows = [];
  const scheduleRows = [];
  const compRows = [];

  INITIAL_EMPLOYEES.forEach(employee => {
    if (existingEmployeeCodes.has(employee.code)) return;
    employeeRows.push([
      employee.code,
      employee.fullName,
      employee.displayName,
      'Active',
      '',
      '',
      '',
      '',
      '',
      '',
      employee.notes
    ]);
    scheduleRows.push(buildScheduleRow_(employee.code, '', employee.schedule));
    compRows.push([
      employee.code,
      '',
      '',
      employee.comp.tier || '',
      blankable_(employee.comp.base),
      blankable_(employee.comp.benefits),
      blankable_(employee.comp.attendance),
      blankable_(employee.comp.kpi),
      blankable_(employee.comp.quarterly),
      blankable_(employee.comp.pto),
      blankable_(employee.comp.nonPto),
      employee.notes,
      CONFIG.defaultPtoPlanType,
      ''
    ]);
  });

  appendRows_(employeeSheet, employeeRows);
  appendRows_(scheduleSheet, scheduleRows);
  appendRows_(compSheet, compRows);
  applyAttendanceFormatting_(attendance);
  applyPayrollFormatting_(payroll);
}

function ensureScorecardSheet_(ss) {
  let sheet = ss.getSheetByName(CONFIG.attendanceTabs.scorecard);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.attendanceTabs.scorecard);
  }
  const firstCell = sheet.getRange(1, 1).getValue();
  if (!firstCell) {
    writeScorecardPlaceholder_(sheet);
  }
  return sheet;
}

function writeScorecardPlaceholder_(sheet) {
  prepareScorecardSheet_(sheet);
  sheet.getRange(1, 1, 1, 6).merge().setValue('ATTENDANCE SCORECARD');
  sheet.getRange(2, 1, 1, 6).merge().setValue('Open Attendance > View Scorecard to select an employee and month, then update this tab.');
  sheet.getRange(5, 1, 1, 2).setValues([['Status', 'Waiting for scorecard selection']]);
  formatScorecardSheet_(sheet);
}

function writeScorecardSheet_(attendance, scorecard) {
  const sheet = ensureScorecardSheet_(attendance);
  prepareScorecardSheet_(sheet);

  sheet.getRange(1, 1, 1, 6).merge().setValue(`ATTENDANCE SCORECARD - ${scorecard.monthLabel}`);
  sheet.getRange(2, 1, 1, 6).merge().setValue(`${scorecard.employee.displayName} | ${scorecard.scheduleSummary}`);
  sheet.getRange(4, 1, 1, 2).setValues([['Monthly Attendance Bonus', scorecard.bonus.status]]);
  sheet.getRange(5, 1, 1, 6).merge().setValue(scorecard.bonus.reasons.join(' '));

  const stats = [
    ['Scheduled days', scorecard.stats.scheduledDays, 'Days worked', scorecard.stats.daysWorked, 'PTO used', scorecard.stats.ptoDays],
    ['Disqualifying days', scorecard.stats.disqualifyingDays, 'Total late minutes', scorecard.stats.totalLateMinutes, 'Missing lunch logs', scorecard.stats.missingLunchDays],
    ['Late clock-ins', `${scorecard.stats.lateClockInMinutes} min / ${scorecard.stats.lateClockInOccurrences}x`, 'Late lunch returns', `${scorecard.stats.lateLunchMinutes} min / ${scorecard.stats.lateLunchOccurrences}x`, 'Incomplete days', scorecard.stats.incompleteDays],
    ['Average start', scorecard.stats.avgStartTime || '', 'Average end', scorecard.stats.avgEndTime || '', 'Perfect attendance', scorecard.perfectAttendance ? 'Yes' : 'No']
  ];
  sheet.getRange(8, 1, stats.length, 6).setValues(stats);

  sheet.getRange(14, 1, 1, 6).merge().setValue('Top areas to focus on next month');
  const focusRows = scorecard.focusAreas.map(item => [item, '', '', '', '', '']);
  sheet.getRange(15, 1, focusRows.length, 6).setValues(focusRows);

  sheet.getRange(15 + focusRows.length + 2, 1, 1, 6).merge().setValue('Exception days');
  const start = 15 + focusRows.length + 3;
  sheet.getRange(start, 1, 1, 6).setValues([['Date', 'Status', 'Clock In', 'Clock Out', 'Late Minutes', 'Notes']]);
  const exceptionRows = scorecard.exceptionRows.length
    ? scorecard.exceptionRows.map(row => [row.date, row.status, row.clockIn, row.clockOut, row.lateMinutes, row.notes])
    : [['No exception days for this month.', '', '', '', '', '']];
  sheet.getRange(start + 1, 1, exceptionRows.length, 6).setValues(exceptionRows);

  formatScorecardSheet_(sheet);
}

function prepareScorecardSheet_(sheet) {
  ensureMinimumSheetSize_(sheet, 80, 6);
  try {
    const filter = sheet.getFilter();
    if (filter) filter.remove();
  } catch (error) {
    // Scorecard is a presentation surface, not a filterable table.
  }
  sheet.getDataRange().breakApart();
  sheet.clear();
  sheet.setConditionalFormatRules([]);
  sheet.showColumns(1, sheet.getMaxColumns());
  if (sheet.getMaxColumns() > 6) sheet.hideColumns(7, sheet.getMaxColumns() - 6);
  try {
    sheet.setHiddenGridlines(true);
  } catch (error) {
    // Sheet chrome is best-effort in Apps Script contexts.
  }
  sheet.setTabColor(UI_THEME.accent);
}

function formatScorecardSheet_(sheet) {
  sheet.setTabColor(UI_THEME.accent);
  sheet.setFrozenRows(3);
  sheet.setColumnWidth(1, 170);
  sheet.setColumnWidth(2, 120);
  sheet.setColumnWidth(3, 170);
  sheet.setColumnWidth(4, 120);
  sheet.setColumnWidth(5, 170);
  sheet.setColumnWidth(6, 240);
  sheet.getRange(1, 1, sheet.getMaxRows(), 6)
    .setBackground(UI_THEME.foundation)
    .setFontFamily(UI_THEME.sans)
    .setFontColor(UI_THEME.body)
    .setFontSize(10)
    .setWrap(true)
    .setVerticalAlignment('top');
  sheet.getRange(1, 1, 2, 6)
    .setBackground(UI_THEME.ink)
    .setFontColor(UI_THEME.card);
  sheet.getRange(1, 1, 1, 6)
    .setFontFamily(UI_THEME.serif)
    .setFontSize(24)
    .setFontWeight('bold');
  sheet.getRange(2, 1, 1, 6)
    .setFontColor(UI_THEME.inset)
    .setFontSize(11);
  sheet.getRange(4, 1, 2, 6)
    .setBackground(UI_THEME.inset)
    .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(4, 1, 1, 1)
    .setFontWeight('bold')
    .setFontColor(UI_THEME.muted);
  sheet.getRange(4, 2, 1, 1)
    .setFontFamily(UI_THEME.serif)
    .setFontSize(18)
    .setFontWeight('bold')
    .setFontColor(UI_THEME.ink);
  sheet.getRange(8, 1, 4, 6)
    .setBackground(UI_THEME.card)
    .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(14, 1, 1, 6)
    .setFontFamily(UI_THEME.serif)
    .setFontSize(18)
    .setFontWeight('bold')
    .setFontColor(UI_THEME.ink)
    .setBorder(true, false, false, false, false, false, UI_THEME.accent, SpreadsheetApp.BorderStyle.SOLID);
}

function getAvailableScorecardMonths_(attendance) {
  const monthKeys = new Set();
  readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.events)).forEach(row => {
    const timestamp = parseDateOrBlank_(row.Timestamp);
    if (timestamp) monthKeys.add(formatMonthKey_(timestamp));
  });
  readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log)).forEach(row => {
    const date = parseDateOrBlank_(row.Date);
    if (date) monthKeys.add(formatMonthKey_(date));
  });
  const today = new Date();
  monthKeys.add(formatMonthKey_(today));
  monthKeys.add(formatMonthKey_(new Date(today.getFullYear(), today.getMonth() - 1, 1)));
  return Array.from(monthKeys)
    .sort()
    .reverse()
    .slice(0, 24)
    .map(key => {
      const window = getMonthWindow_(key);
      return { value: key, label: window.label };
    });
}

function getDefaultScorecardMonth_(attendance) {
  const months = getAvailableScorecardMonths_(attendance);
  return months.length ? months[0].value : formatMonthKey_(new Date());
}

function buildAttendanceSummaryContext_(attendance) {
  return {
    attendance,
    employees: mapByCode_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))),
    schedules: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules)),
    attendanceRows: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log))
  };
}

function buildMonthlyAttendanceSummary_(context, employeeCode, monthStart) {
  const code = normalizeCode_(employeeCode);
  const month = getMonthWindow_(formatMonthKey_(monthStart));
  const employee = context.employees[code];
  if (!employee) throw new Error(`Employee ${code} was not found.`);

  const rows = context.attendanceRows.filter(row => {
    const rowDate = parseDateOrBlank_(row.Date);
    return normalizeCode_(row['Employee Code']) === code
      && rowDate
      && rowDate.getTime() >= month.start.getTime()
      && rowDate.getTime() <= month.end.getTime()
      && row['Scheduled Start'];
  });

  const stats = {
    scheduledDays: rows.length,
    daysWorked: 0,
    ptoDays: 0,
    holidayDays: 0,
    absentDays: 0,
    utoDays: 0,
    nonPtoDays: 0,
    incompleteDays: 0,
    disqualifyingDays: 0,
    totalLateMinutes: 0,
    lateClockInMinutes: 0,
    lateClockInOccurrences: 0,
    lateLunchMinutes: 0,
    lateLunchOccurrences: 0,
    lateStartOverFiveOccurrences: 0,
    missingLunchDays: 0,
    avgStartTime: '',
    avgEndTime: ''
  };
  const startMinutes = [];
  const endMinutes = [];
  const exceptionRows = [];

  rows.forEach(row => {
    const date = parseDateOrBlank_(row.Date);
    const status = row.Status || '';
    const clockIn = parseDateOrBlank_(row['Clock In']);
    const clockOut = parseDateOrBlank_(row['Clock Out']);
    const scheduledStart = parseDateOrBlank_(row['Scheduled Start']);
    const schedule = getScheduleForDate_(context.schedules, code, date);
    const daySchedule = getDaySchedule_(schedule, date);
    const lateMinutes = toNumberOrBlank_(row['Total Late Minutes']) === '' ? 0 : Number(row['Total Late Minutes']);
    let lateClockIn = 0;
    let lateLunch = 0;
    let missingLunch = false;

    if (clockIn && scheduledStart) {
      lateClockIn = Math.max(0, Math.round((clockIn.getTime() - scheduledStart.getTime()) / 60000));
      if (lateClockIn > 0) {
        stats.lateClockInMinutes += lateClockIn;
        stats.lateClockInOccurrences += 1;
      }
      if (lateClockIn > 5) stats.lateStartOverFiveOccurrences += 1;
      startMinutes.push(minutesSinceMidnight_(clockIn));
    }

    if (clockOut) {
      endMinutes.push(minutesSinceMidnight_(clockOut));
    }

    if (daySchedule.lunchStart !== '' && daySchedule.lunchEnd !== '') {
      const lunchEnd = parseDateOrBlank_(row['Lunch End']);
      const scheduledLunchEnd = makeDateAtHour_(date, daySchedule.lunchEnd);
      if (status === 'Present' && clockIn && clockOut && (!row['Lunch Start'] || !row['Lunch End'])) {
        missingLunch = true;
        stats.missingLunchDays += 1;
      }
      if (lunchEnd && scheduledLunchEnd) {
        lateLunch = Math.max(0, Math.round((lunchEnd.getTime() - scheduledLunchEnd.getTime()) / 60000));
        if (lateLunch > 0) {
          stats.lateLunchMinutes += lateLunch;
          stats.lateLunchOccurrences += 1;
        }
      }
    }

    stats.totalLateMinutes += lateMinutes;
    if (status === 'Present') stats.daysWorked += 1;
    if (status === 'PTO') stats.ptoDays += 1;
    if (status === 'Holiday') stats.holidayDays += 1;
    if (status === 'Absent') stats.absentDays += 1;
    if (status === 'UTO') stats.utoDays += 1;
    if (status === 'Non-PTO') stats.nonPtoDays += 1;
    if (status === 'Incomplete (no clock-out)') stats.incompleteDays += 1;

    const notes = [];
    if (lateClockIn) notes.push(`${lateClockIn} min late start`);
    if (lateLunch) notes.push(`${lateLunch} min late lunch`);
    if (missingLunch) notes.push('Missing lunch log');
    if (isDisqualifyingAttendanceStatus_(status)) notes.push('Disqualifying status');
    if (notes.length) {
      exceptionRows.push({
        date: formatDateKey_(date),
        status,
        clockIn: clockIn ? displayTime_(clockIn) : '',
        clockOut: clockOut ? displayTime_(clockOut) : '',
        lateMinutes,
        notes: notes.join('; ')
      });
    }
  });

  stats.disqualifyingDays = stats.absentDays + stats.utoDays + stats.nonPtoDays + stats.incompleteDays;
  stats.avgStartTime = startMinutes.length ? displayMinutesAsTime_(average_(startMinutes)) : '';
  stats.avgEndTime = endMinutes.length ? displayMinutesAsTime_(average_(endMinutes)) : '';

  const bonus = buildMonthlyBonusEligibility_(stats);
  const perfectAttendance = stats.scheduledDays > 0
    && stats.disqualifyingDays === 0
    && stats.ptoDays === 0
    && stats.totalLateMinutes === 0;

  return {
    employee: {
      employeeCode: code,
      displayName: employee['Display Name'] || employee['Full Name'] || code,
      fullName: employee['Full Name'] || ''
    },
    month: month.key,
    monthLabel: month.label,
    scheduleSummary: buildScheduleSummary_(context.schedules, code, month.start),
    bonus,
    stats,
    perfectAttendance,
    focusAreas: buildScorecardFocusAreas_(stats, bonus),
    exceptionRows,
    generatedAt: Utilities.formatDate(new Date(), CONFIG.timezone, 'yyyy-MM-dd h:mm a')
  };
}

function buildMonthlyBonusEligibility_(stats) {
  const failures = [];
  const positives = [];
  const limit = CONFIG.monthlyAttendanceBonusLateMinuteLimit;

  if (!stats.scheduledDays) failures.push('No scheduled days were found for this month.');
  if (stats.disqualifyingDays) failures.push(`${stats.disqualifyingDays} disqualifying attendance day(s).`);
  if (stats.totalLateMinutes > limit) failures.push(`${stats.totalLateMinutes} late minutes exceeds the ${limit}-minute limit.`);

  if (!failures.length) {
    positives.push(`${stats.scheduledDays} scheduled day(s) reviewed.`);
    positives.push('No disqualifying absences.');
    positives.push(`${stats.totalLateMinutes} late minutes (limit: ${limit}).`);
  }

  return {
    eligible: failures.length === 0,
    status: failures.length === 0 ? 'EARNED' : 'NOT EARNED',
    reasons: failures.length ? failures : positives,
    failureReasons: failures,
    lateMinuteLimit: limit
  };
}

function buildScorecardFocusAreas_(stats, bonus) {
  const focus = [];
  if (bonus.failureReasons.length) {
    bonus.failureReasons.forEach(reason => focus.push(reason));
  }
  if (stats.missingLunchDays) focus.push(`Log lunch consistently (${stats.missingLunchDays} day(s) missing lunch logs).`);
  if (stats.lateStartOverFiveOccurrences) focus.push(`Aim to clock in by scheduled start (${stats.lateStartOverFiveOccurrences} late start(s) over 5 minutes).`);
  if (stats.lateLunchOccurrences) focus.push(`Return from lunch on schedule (${stats.lateLunchOccurrences} late lunch return(s)).`);
  if (!focus.length) focus.push('Maintain the same attendance pattern next month.');
  return focus;
}

function isDisqualifyingAttendanceStatus_(status) {
  return ['Absent', 'UTO', 'Non-PTO', 'Incomplete (no clock-out)'].indexOf(status) !== -1;
}

function buildScheduleSummary_(schedules, employeeCode, monthStart) {
  const schedule = getScheduleForDate_(schedules, employeeCode, monthStart);
  if (!schedule) return 'No active schedule';
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const active = days.filter(day => schedule[`${day} Start`] !== '' && schedule[`${day} End`] !== '');
  if (!active.length) return 'No scheduled days';
  const firstDay = active[0];
  return `${active.join(', ')} ${formatHour_(schedule[`${firstDay} Start`])}-${formatHour_(schedule[`${firstDay} End`])}`;
}

function getPayrollAttendanceWindow_(period) {
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  let start = dateOnly_(periodStart);
  let end = dateOnly_(periodEnd);
  const bonusMonth = getAttendanceBonusMonthForPeriod_(period);
  if (bonusMonth) {
    const bonusWindow = getMonthWindow_(formatMonthKey_(bonusMonth));
    start = minDate_(start, bonusWindow.start);
    end = maxDate_(end, bonusWindow.end);
    if (isQuarterEndMonth_(bonusMonth)) {
      const quarterWindow = getQuarterWindowForMonth_(bonusMonth);
      start = minDate_(start, quarterWindow.start);
      end = maxDate_(end, quarterWindow.end);
    }
  }
  return { start, end };
}

function getAttendanceBonusMonthForPeriod_(period) {
  const type = String(period['Period Type (Mid / EOM)'] || '').toLowerCase();
  if (type !== 'mid') return null;
  const periodStart = parseDateOrBlank_(period['Period Start']);
  return periodStart ? new Date(periodStart.getFullYear(), periodStart.getMonth(), 1) : null;
}

function calculateMonthlyAttendanceBonus_(employeeCode, period, context, comp) {
  const bonusMonth = getAttendanceBonusMonthForPeriod_(period);
  if (!bonusMonth) {
    return {
      amount: '',
      status: 'Not due',
      notes: 'Monthly attendance bonus is evaluated on the Mid payroll after the month closes.',
      summary: null
    };
  }

  const summary = buildMonthlyAttendanceSummary_(context, employeeCode, bonusMonth);
  const configuredAmount = comp ? toNumberOrBlank_(comp['Monthly Attendance Bonus']) : '';
  if (!summary.bonus.eligible) {
    return {
      amount: 0,
      status: 'Not earned',
      notes: summary.bonus.reasons.join(' '),
      summary
    };
  }
  if (configuredAmount === '') {
    return {
      amount: '',
      status: 'Eligible - amount blank',
      notes: 'Eligible for monthly attendance bonus, but Monthly Attendance Bonus is blank in Compensation Master.',
      summary
    };
  }
  return {
    amount: round2_(configuredAmount),
    status: 'Earned',
    notes: summary.bonus.reasons.join(' '),
    summary
  };
}

function buildQuarterlyPaResult_(employeeCode, quarterEndMonth, context, comp) {
  const code = normalizeCode_(employeeCode);
  const employee = context.employees[code];
  const quarterWindow = getQuarterWindowForMonth_(quarterEndMonth);
  const monthStarts = [
    quarterWindow.start,
    addMonths_(quarterWindow.start, 1),
    addMonths_(quarterWindow.start, 2)
  ];
  const summaries = monthStarts.map(monthStart => buildMonthlyAttendanceSummary_(context, code, monthStart));
  const perfectCount = summaries.filter(summary => summary.perfectAttendance).length;
  const eligible = perfectCount === 3;
  const configuredAmount = comp ? toNumberOrBlank_(comp['Quarterly PA Bonus']) : '';
  const quarterLabel = getQuarterLabel_(quarterWindow.end);
  const reason = eligible
    ? 'Three consecutive months of perfect attendance.'
    : summaries.map(summary => `${summary.monthLabel}: ${summary.perfectAttendance ? 'Perfect' : summary.bonus.reasons.join(' ')}`).join(' | ');

  let amount = eligible ? configuredAmount : 0;
  let status = eligible ? 'Earned' : 'Not earned';
  if (eligible && configuredAmount === '') {
    amount = '';
    status = 'Eligible - amount blank';
  }

  return {
    amount: amount === '' ? '' : round2_(amount),
    status,
    notes: eligible && configuredAmount === ''
      ? 'Eligible for quarterly PA bonus, but Quarterly PA Bonus is blank in Compensation Master.'
      : reason,
    trackerRow: [
      code,
      employee ? (employee['Display Name'] || employee['Full Name'] || code) : code,
      quarterLabel,
      summaries[0].monthLabel,
      summaries[0].perfectAttendance ? 'Yes' : 'No',
      summaries[1].monthLabel,
      summaries[1].perfectAttendance ? 'Yes' : 'No',
      summaries[2].monthLabel,
      summaries[2].perfectAttendance ? 'Yes' : 'No',
      perfectCount,
      eligible ? 'Yes' : 'No',
      amount === '' ? '' : round2_(amount),
      reason,
      new Date()
    ]
  };
}

function calculateQuarterlyPaBonus_(employeeCode, period, context, comp) {
  const bonusMonth = getAttendanceBonusMonthForPeriod_(period);
  if (!bonusMonth) {
    return {
      amount: '',
      status: 'Not due',
      notes: 'Quarterly PA bonus is evaluated after quarter-end months.',
      trackerRow: null
    };
  }
  if (!isQuarterEndMonth_(bonusMonth)) {
    return {
      amount: '',
      status: 'Not due',
      notes: 'Not a quarter-end attendance month.',
      trackerRow: null
    };
  }
  return buildQuarterlyPaResult_(employeeCode, bonusMonth, context, comp);
}

function upsertQuarterlyPaTrackerRows_(sheet, rows) {
  if (!rows.length) return;
  ensureSheet_(sheet.getParent(), sheet.getName(), HEADERS.paTracker);
  const values = sheet.getDataRange().getValues();
  const headers = values[0] || HEADERS.paTracker;
  const codeIdx = headers.indexOf('Employee Code');
  const quarterIdx = headers.indexOf('Quarter');
  const existing = {};
  for (let i = 1; i < values.length; i += 1) {
    const key = `${normalizeCode_(values[i][codeIdx])}|${values[i][quarterIdx]}`;
    existing[key] = i + 1;
  }
  const append = [];
  rows.forEach(row => {
    const key = `${normalizeCode_(row[0])}|${row[2]}`;
    if (existing[key]) {
      sheet.getRange(existing[key], 1, 1, HEADERS.paTracker.length).setValues([row]);
    } else {
      append.push(row);
    }
  });
  appendRows_(sheet, append);
}

function listPayPeriodsForUi_() {
  const payroll = requirePayrollSpreadsheet_();
  repairPayPeriodIds_(payroll);
  return readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods)).map(row => ({
    periodId: normalizePeriodId_(row['Period ID']),
    payDate: displayDate_(row['Pay Date']),
    periodStart: displayDate_(row['Period Start']),
    periodEnd: displayDate_(row['Period End']),
    type: row['Period Type (Mid / EOM)'],
    status: row['Status (Open / Calculated / Paid)']
  }));
}

function getPayPeriodById_(payroll, periodId) {
  periodId = normalizePeriodId_(periodId);
  repairPayPeriodIds_(payroll);
  const period = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods))
    .filter(row => normalizePeriodId_(row['Period ID']) === periodId)[0];
  if (!period) throw new Error(`Pay period ${periodId} was not found.`);
  return period;
}

function getDefaultOpenPeriodIdByType_(periods, type) {
  const today = dateOnly_(new Date());
  const matches = periods
    .filter(period => period.status === 'Open' && period.type === type)
    .map(period => ({ id: period.periodId, payDate: parseDateOrBlank_(period.payDate) }))
    .filter(period => period.payDate)
    .sort((a, b) => Math.abs(a.payDate.getTime() - today.getTime()) - Math.abs(b.payDate.getTime() - today.getTime()));
  return matches.length ? matches[0].id : '';
}

function ensurePhase3PayrollSheets_(payroll) {
  if (!payroll.getSheetByName(CONFIG.payrollTabs.bonuses)) {
    const sheet = ensureSheet_(payroll, CONFIG.payrollTabs.bonuses, HEADERS.bonuses);
    setupSheetFormatting_(sheet, HEADERS.bonuses.length);
    setValidation_(sheet, 3, ['KPI', 'Additional', 'Positive Adj', 'Negative Adj']);
    sheet.getRange('E:E').setNumberFormat('$#,##0.00');
    sheet.getRange('G:G').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  }
}

function ensurePayPeriodsForDialog_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  if (!readObjects_(sheet).length) {
    seedPayPeriods_(payroll, new Date().getFullYear());
  }
  repairPayPeriodIds_(payroll);
}

function groupBonusRowsByEmployee_(bonusRows, periodId, type) {
  periodId = normalizePeriodId_(periodId);
  const grouped = {};
  bonusRows.forEach(row => {
    if (normalizePeriodId_(row['Pay Period ID']) !== periodId) return;
    if (row['Type (KPI / Additional / Positive Adj / Negative Adj)'] !== type) return;
    const code = normalizeCode_(row['Employee Code']);
    if (!grouped[code]) grouped[code] = { amount: 0, descriptions: [] };
    grouped[code].amount += toNumberOrZero_(row.Amount);
    if (row.Description) grouped[code].descriptions.push(String(row.Description));
  });
  return grouped;
}

function replaceBonusAdjustmentRows_(sheet, periodId, types, employeeCodes, replacements) {
  periodId = normalizePeriodId_(periodId);
  const typeSet = new Set(types);
  const codeSet = new Set(employeeCodes.map(normalizeCode_).filter(Boolean));
  const values = sheet.getDataRange().getValues();
  if (values.length > 1) {
    const headers = values[0];
    const periodIdx = headers.indexOf('Pay Period ID');
    const codeIdx = headers.indexOf('Employee Code');
    const typeIdx = headers.indexOf('Type (KPI / Additional / Positive Adj / Negative Adj)');
    for (let row = values.length - 1; row >= 1; row -= 1) {
      const matchesPeriod = normalizePeriodId_(values[row][periodIdx]) === periodId;
      const matchesType = typeSet.has(values[row][typeIdx]);
      const matchesCode = codeSet.has(normalizeCode_(values[row][codeIdx]));
      if (matchesPeriod && matchesType && matchesCode) {
        sheet.deleteRow(row + 1);
      }
    }
  }
  appendRows_(sheet, replacements);
}

function summarizeBonusAdjustments_(bonusRows, periodId, employeeCode) {
  periodId = normalizePeriodId_(periodId);
  const summary = {
    kpi: 0,
    additional: 0,
    positive: 0,
    negative: 0,
    notes: []
  };
  const code = normalizeCode_(employeeCode);
  bonusRows.forEach(row => {
    if (normalizePeriodId_(row['Pay Period ID']) !== periodId || normalizeCode_(row['Employee Code']) !== code) return;
    const type = row['Type (KPI / Additional / Positive Adj / Negative Adj)'];
    const amount = toNumberOrZero_(row.Amount);
    if (type === 'KPI') summary.kpi += amount;
    if (type === 'Additional') summary.additional += amount;
    if (type === 'Positive Adj') summary.positive += amount;
    if (type === 'Negative Adj') summary.negative += amount;
    if (row.Description) summary.notes.push(`${type}: ${row.Description}`);
  });
  return summary;
}

function calculateBenefitsForPeriod_(employeeCode, employee, period, context, comp) {
  const monthlyBenefit = comp ? toNumberOrBlank_(comp['Monthly Benefits']) : '';
  const periodStart = dateOnly_(parseDateOrBlank_(period['Period Start']));
  const periodEnd = dateOnly_(parseDateOrBlank_(period['Period End']));
  const monthStart = new Date(periodStart.getFullYear(), periodStart.getMonth(), 1);
  const monthEnd = new Date(periodStart.getFullYear(), periodStart.getMonth() + 1, 0);
  const finalPayroll = isFinalPayroll_(period);
  const totalScheduledDays = finalPayroll
    ? countScheduledDaysInRateMonth_(context.schedules, employeeCode, periodEnd)
    : countScheduledDaysInMonth_(context.schedules, employeeCode, monthStart);
  if (monthlyBenefit === '') {
    return {
      monthlyBenefit: '',
      eligibleDays: '',
      periodEligibleDays: '',
      amount: '',
      notes: 'Monthly Benefits is blank in Compensation Master.'
    };
  }
  if (!totalScheduledDays) {
    return {
      monthlyBenefit,
      eligibleDays: 0,
      periodEligibleDays: 0,
      amount: 0,
      notes: 'No scheduled days found for benefit proration.'
    };
  }

  const unpaidStatusByDate = {};
  context.attendanceRows.forEach(row => {
    if (normalizeCode_(row['Employee Code']) !== normalizeCode_(employeeCode)) return;
    const date = parseDateOrBlank_(row.Date);
    if (!date) return;
    const status = row.Status || '';
    if (status === 'UTO' || status === 'Non-PTO') {
      unpaidStatusByDate[formatDateKey_(date)] = true;
    }
  });

  let eligibleDays = 0;
  let periodEligibleDays = 0;
  for (let cursor = monthStart; cursor.getTime() <= monthEnd.getTime(); cursor = addDays_(cursor, 1)) {
    const schedule = getScheduleForDate_(context.schedules, employeeCode, cursor);
    const daySchedule = getDaySchedule_(schedule, cursor);
    if (!daySchedule.isScheduled) continue;
    const eligible = employeeEmployedOnDate_(employee, cursor)
      && (!finalPayroll || cursor.getTime() <= periodEnd.getTime())
      && !unpaidStatusByDate[formatDateKey_(cursor)];
    if (!eligible) continue;
    eligibleDays += 1;
    if (cursor.getTime() >= periodStart.getTime() && cursor.getTime() <= periodEnd.getTime()) {
      periodEligibleDays += 1;
    }
  }

  if (!eligibleDays || !periodEligibleDays) {
    return {
      monthlyBenefit,
      eligibleDays,
      periodEligibleDays,
      amount: 0,
      notes: 'No benefit-eligible scheduled days in this pay period.'
    };
  }

  const defaultSplit = !finalPayroll && eligibleDays === totalScheduledDays;
  let amount;
  if (finalPayroll) {
    amount = monthlyBenefit * (eligibleDays / totalScheduledDays);
  } else {
    amount = defaultSplit
      ? monthlyBenefit / 2
      : (monthlyBenefit * (eligibleDays / totalScheduledDays)) * (periodEligibleDays / eligibleDays);
  }
  return {
    monthlyBenefit,
    eligibleDays,
    periodEligibleDays,
    amount: round2_(amount),
    notes: defaultSplit
      ? 'Default 50/50 monthly benefit split applied.'
      : finalPayroll
        ? `${eligibleDays} of ${totalScheduledDays} scheduled days benefit-eligible through final working day.`
        : `${eligibleDays} of ${totalScheduledDays} scheduled days benefit-eligible; ${periodEligibleDays} in this pay period.`
  };
}

function isMidPayroll_(period) {
  return String(period['Period Type (Mid / EOM)'] || '').toLowerCase() === 'mid';
}

function ensurePhase1TestPins_(attendance) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const codeIdx = headers.indexOf('Employee Code');
  const pinIdx = headers.indexOf('Web App PIN');
  if (codeIdx === -1 || pinIdx === -1) return 0;

  let pinsAdded = 0;
  for (let row = 1; row < values.length; row += 1) {
    const code = normalizeCode_(values[row][codeIdx]);
    if (!PHASE1_TEST.pins[code] || values[row][pinIdx]) continue;
    sheet.getRange(row + 1, pinIdx + 1).setValue(PHASE1_TEST.pins[code]);
    pinsAdded += 1;
  }
  return pinsAdded;
}

function ensurePhase1TestPayPeriod_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  const row = [
    PHASE1_TEST.periodId,
    PHASE1_TEST.payDate,
    PHASE1_TEST.periodStart,
    PHASE1_TEST.periodEnd,
    'EOM',
    'Open'
  ];
  const existing = readObjects_(sheet).filter(period => normalizePeriodId_(period['Period ID']) === PHASE1_TEST.periodId)[0];
  if (existing) {
    sheet.getRange(existing._rowNumber, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
  sheet.getRange('B:D').setNumberFormat('yyyy-mm-dd');
}

function removePhase1TestClockEvents_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const eventIdIdx = headers.indexOf('Event ID');
  const notesIdx = headers.indexOf('Notes');
  let removed = 0;

  for (let row = values.length - 1; row >= 1; row -= 1) {
    const eventId = eventIdIdx === -1 ? '' : String(values[row][eventIdIdx] || '');
    const notes = notesIdx === -1 ? '' : String(values[row][notesIdx] || '');
    if (eventId.indexOf('TEST-PHASE1-') === 0 || notes.indexOf(PHASE1_TEST.marker) !== -1) {
      sheet.deleteRow(row + 1);
      removed += 1;
    }
  }
  return removed;
}

function buildPhase1TestClockEventRows_(attendance) {
  const employees = mapByCode_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees)));
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const scenarios = getPhase1TestScenarios_();
  const rows = [];

  for (
    let cursor = dateOnly_(PHASE1_TEST.periodStart);
    cursor.getTime() <= dateOnly_(PHASE1_TEST.periodEnd).getTime();
    cursor = addDays_(cursor, 1)
  ) {
    const dateKey = formatDateKey_(cursor);
    PHASE1_TEST.employeeCodes.forEach(code => {
      if (!employees[code]) return;
      const schedule = getScheduleForDate_(schedules, code, cursor);
      const daySchedule = getDaySchedule_(schedule, cursor);
      if (!daySchedule.isScheduled) return;

      const scenario = scenarios[`${dateKey}|${code}`] || {};
      if (scenario.absent) return;

      const clockInHour = scenario.clockIn === undefined ? daySchedule.start - (2 / 60) : scenario.clockIn;
      rows.push(createPhase1TestEventRow_(cursor, code, 'CLOCK_IN', clockInHour, scenario.note || 'Scheduled workday.'));

      if (daySchedule.lunchStart !== '' && daySchedule.lunchEnd !== '') {
        const lunchEndHour = scenario.lunchEnd === undefined ? daySchedule.lunchEnd : scenario.lunchEnd;
        rows.push(createPhase1TestEventRow_(cursor, code, 'LUNCH_START', daySchedule.lunchStart, scenario.note || 'Scheduled lunch.'));
        rows.push(createPhase1TestEventRow_(cursor, code, 'LUNCH_END', lunchEndHour, scenario.note || 'Scheduled lunch.'));
      }

      if (!scenario.omitClockOut) {
        const clockOutHour = scenario.clockOut === undefined ? daySchedule.end + (2 / 60) : scenario.clockOut;
        rows.push(createPhase1TestEventRow_(cursor, code, 'CLOCK_OUT', clockOutHour, scenario.note || 'Scheduled workday.'));
      }
    });
  }

  return rows.sort((a, b) => a[1].getTime() - b[1].getTime());
}

function getPhase1TestScenarios_() {
  return {
    '2026-04-08|MARK': {
      clockIn: 10.25,
      lunchEnd: 14 + (10 / 60),
      note: 'Late arrival and late lunch return.'
    },
    '2026-04-04|PAUL': {
      absent: true,
      note: 'Scheduled day with no clock events.'
    },
    '2026-04-10|ANDREA': {
      clockOut: 17.5,
      note: 'Short day for payroll deduction review.'
    },
    '2026-04-14|CHARISSE': {
      omitClockOut: true,
      note: 'Missing clock-out for incomplete attendance review.'
    }
  };
}

function createPhase1TestEventRow_(date, employeeCode, eventType, decimalHour, note) {
  const dateToken = formatDateKey_(date).replace(/-/g, '');
  return [
    `TEST-PHASE1-${employeeCode}-${dateToken}-${eventType}`,
    makeDateAtHour_(date, decimalHour),
    employeeCode,
    eventType,
    'IMPORTED',
    'Phase 1 test data',
    `${PHASE1_TEST.marker}: ${note}`
  ];
}

function buildWorkflowInstructionsSheet_(ss, workbookType) {
  let sheet = ss.getSheetByName(CONFIG.workflowInstructionsTab);
  if (!sheet) sheet = ss.insertSheet(CONFIG.workflowInstructionsTab, 0);

  prepareWorkflowInstructionsSheet_(ss, sheet, workbookType);
  const guide = workbookType === 'payroll' ? getPayrollWorkflowGuide_() : getAttendanceWorkflowGuide_();
  let row = 1;

  sheet.getRange(row, 1, 1, 6).merge().setValue(guide.eyebrow);
  row += 1;
  sheet.getRange(row, 1, 1, 6).merge().setValue(guide.title);
  row += 1;
  sheet.getRange(row, 1, 1, 6).merge().setValue(guide.subtitle);
  row += 2;

  const metaRows = [
    ['Workbook', guide.workbook, 'Primary owner', guide.owner, 'Best entry point', guide.entryPoint],
    ['Before you begin', guide.beforeUse, 'Cadence', guide.cadence, 'Current scope', guide.scope]
  ];
  sheet.getRange(row, 1, metaRows.length, 6).setValues(metaRows);
  row += metaRows.length + 2;

  guide.sections.forEach(section => {
    row = writeWorkflowInstructionSection_(sheet, row, section);
  });

  formatWorkflowInstructionsSheet_(sheet, row - 1, workbookType);
  return sheet;
}

function prepareWorkflowInstructionsSheet_(ss, sheet, workbookType) {
  try {
    const filter = sheet.getFilter();
    if (filter) filter.remove();
  } catch (error) {
    // Instruction tabs do not need filters; skip if a transient sheet state blocks removal.
  }

  ensureMinimumSheetSize_(sheet, 140, 6);
  sheet.getDataRange().breakApart();
  sheet.clear();
  sheet.setConditionalFormatRules([]);
  sheet.showColumns(1, sheet.getMaxColumns());
  if (sheet.getMaxColumns() > 6) sheet.hideColumns(7, sheet.getMaxColumns() - 6);
  try {
    sheet.setHiddenGridlines(true);
  } catch (error) {
    // Sheet chrome is best-effort in Apps Script contexts.
  }
  sheet.setTabColor(workbookType === 'payroll' ? UI_THEME.ink : UI_THEME.accent);
  ss.setActiveSheet(sheet);
  ss.moveActiveSheet(1);
}

function writeWorkflowInstructionSection_(sheet, startRow, section) {
  let row = startRow;
  sheet.getRange(row, 1, 1, 6).merge().setValue(section.eyebrow);
  row += 1;
  sheet.getRange(row, 1, 1, 6).merge().setValue(section.title);
  row += 1;
  if (section.description) {
    sheet.getRange(row, 1, 1, 6).merge().setValue(section.description);
    row += 1;
  }

  sheet.getRange(row, 1, 1, 6)
    .setValues([normalizeInstructionRow_(section.headers)])
    .setBorder(true, true, true, true, true, true, UI_THEME.ink, SpreadsheetApp.BorderStyle.SOLID);
  row += 1;

  const rows = section.rows.map(normalizeInstructionRow_);
  sheet.getRange(row, 1, rows.length, 6)
    .setValues(rows)
    .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
  return row + rows.length + 2;
}

function formatWorkflowInstructionsSheet_(sheet, lastRow, workbookType) {
  const tabColor = workbookType === 'payroll' ? UI_THEME.ink : UI_THEME.accent;
  sheet.setFrozenRows(4);
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 170);
  sheet.setColumnWidth(3, 250);
  sheet.setColumnWidth(4, 250);
  sheet.setColumnWidth(5, 170);
  sheet.setColumnWidth(6, 280);

  sheet.getRange(1, 1, sheet.getMaxRows(), 6)
    .setBackground(UI_THEME.foundation)
    .setFontFamily(UI_THEME.sans)
    .setFontColor(UI_THEME.body)
    .setFontSize(10)
    .setVerticalAlignment('top')
    .setWrap(true);

  sheet.getRange(1, 1, 3, 6)
    .setBackground(UI_THEME.ink)
    .setFontColor(UI_THEME.card);
  sheet.getRange(1, 1, 1, 6)
    .setFontSize(10)
    .setFontWeight('bold')
    .setFontColor(UI_THEME.accent)
    .setHorizontalAlignment('left');
  sheet.getRange(2, 1, 1, 6)
    .setFontFamily(UI_THEME.serif)
    .setFontSize(28)
    .setFontWeight('bold')
    .setFontColor(UI_THEME.card);
  sheet.getRange(3, 1, 1, 6)
    .setFontSize(11)
    .setFontColor('#EFE8DD');

  sheet.getRange(5, 1, 2, 6)
    .setBackground(UI_THEME.inset)
    .setFontSize(10)
    .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(5, 1, 2, 6)
    .setFontWeight('normal');
  sheet.getRange(5, 1, 2, 1).setFontWeight('bold').setFontColor(UI_THEME.muted);
  sheet.getRange(5, 3, 2, 1).setFontWeight('bold').setFontColor(UI_THEME.muted);
  sheet.getRange(5, 5, 2, 1).setFontWeight('bold').setFontColor(UI_THEME.muted);

  for (let row = 8; row <= lastRow; row += 1) {
    const value = String(sheet.getRange(row, 1).getValue() || '');
    if (value.indexOf('SECTION ') === 0) {
      sheet.getRange(row, 1, 1, 6)
        .setBackground(UI_THEME.foundation)
        .setFontColor(tabColor)
        .setFontSize(9)
        .setFontWeight('bold')
        .setBorder(true, false, false, false, false, false, tabColor, SpreadsheetApp.BorderStyle.SOLID);
      sheet.getRange(row + 1, 1, 1, 6)
        .setBackground(UI_THEME.foundation)
        .setFontFamily(UI_THEME.serif)
        .setFontSize(18)
        .setFontWeight('bold')
        .setFontColor(UI_THEME.ink);
      const description = String(sheet.getRange(row + 2, 1).getValue() || '');
      const headerRow = description ? row + 3 : row + 2;
      if (description) {
        sheet.getRange(row + 2, 1, 1, 6)
          .setBackground(UI_THEME.foundation)
          .setFontSize(10)
          .setFontColor(UI_THEME.muted);
      }
      sheet.getRange(headerRow, 1, 1, 6)
        .setBackground(UI_THEME.ink)
        .setFontColor(UI_THEME.card)
        .setFontSize(9)
        .setFontWeight('bold')
        .setHorizontalAlignment('left')
        .setBorder(true, true, true, true, true, true, UI_THEME.ink, SpreadsheetApp.BorderStyle.SOLID);
    }
  }

  sheet.getRange(2, 1, 1, 6).setFontSize(28);
  sheet.setRowHeight(1, 26);
  sheet.setRowHeight(2, 52);
  sheet.setRowHeight(3, 42);
  sheet.setRowHeights(5, Math.max(lastRow - 4, 1), 38);
}

function getAttendanceWorkflowGuide_() {
  return {
    eyebrow: 'PHASE 1-4 OPERATING GUIDE',
    title: 'Attendance Workflow Instructions',
    subtitle: 'Use this workbook to collect clock events, manage approved leave, maintain schedules, and produce the reviewed attendance log that payroll consumes.',
    workbook: CONFIG.attendanceSpreadsheetName,
    owner: 'Operations manager',
    entryPoint: 'Attendance menu',
    beforeUse: 'Confirm employees, schedules, and web app access.',
    cadence: 'Daily review, pay-period closeout',
    scope: 'Time capture, corrections, leave approvals, attendance status, scorecards',
    sections: [
      {
        eyebrow: 'SECTION 01',
        title: 'Start Here',
        description: 'The shortest safe path from setup to payroll-ready attendance.',
        headers: ['Step', 'Owner', 'Action', 'Where', 'When', 'Done When'],
        rows: [
          ['1', 'System owner', 'Run setupPhase1() or configurePhase1SpreadsheetIds().', 'Apps Script editor', 'Initial setup', 'Both workbook IDs are stored and menus appear on open.'],
          ['2', 'Operations manager', 'Review active employees and schedules before sharing the clock app.', 'Employees and Work Schedules', 'Before launch', 'Every active employee has a schedule and, if needed, a Web App PIN.'],
          ['3', 'Employee', 'Clock in, start lunch, end lunch, and clock out in sequence.', 'Clock-in web app', 'Each workday', 'Clock Events receives an append-only record for each action.'],
          ['4', 'Operations manager', 'Add missed or corrected punches without editing the audit trail directly.', 'Attendance menu', 'Same day when possible', 'Manual corrections show Source = MANUAL with useful notes.'],
          ['5', 'Employee or manager', 'Submit PTO, UTO, Non-PTO, or makeup hour requests before closeout.', 'Clock app or Attendance menu', 'As needed', 'The request appears as Pending in the request tabs.'],
          ['6', 'Operations manager', 'Approve or deny pending time off and makeup requests.', 'Attendance menu', 'Before payroll closeout', 'Approved time off can rebuild into Attendance Log; approved makeup can offset short hours.'],
          ['7', 'Operations manager', 'Rebuild the Attendance Log after corrections or approvals.', 'Attendance menu', 'Daily and at closeout', 'Attendance Log shows status, hours, late minutes, and exceptions.'],
          ['8', 'Operations manager', 'Generate employee scorecards for the selected month.', 'Attendance menu', 'Monthly review', 'Scorecard shows only attendance data and is safe to share.'],
          ['9', 'Payroll processor', 'Use the reviewed log as the source for pay-period calculation.', 'Payroll workbook', 'After closeout', 'Payroll Output is generated from the latest attendance data.']
        ]
      },
      {
        eyebrow: 'SECTION 02',
        title: 'Attendance Sheet Map',
        description: 'Only edit source tabs intentionally. Treat derived tabs as review surfaces.',
        headers: ['Tab', 'Purpose', 'Primary User', 'Editable?', 'Key Fields', 'UX Rule'],
        rows: [
          ['Employees', 'Roster and access control.', 'Operations manager', 'Yes', 'Employee Code, Status, Email, Web App PIN', 'Keep Employee Code stable; it joins every workbook.'],
          ['Work Schedules', 'Effective-dated schedules by employee.', 'Operations manager', 'Yes', 'Effective From/To, day start/end, lunch window', 'Add a new row for schedule changes instead of overwriting history.'],
          ['Holidays', 'Paid holiday exceptions.', 'Operations manager', 'Yes', 'Date, Paid?, Applies To', 'Use All unless the holiday is employee-specific.'],
          ['Clock Events', 'Append-only clock event ledger.', 'Employees and managers', 'Append only', 'Timestamp, Employee Code, Event Type, Source', 'Do not delete production events; add a corrective manual event instead.'],
          ['Attendance Log', 'Calculated daily status and payroll source.', 'Operations and payroll', 'Limited review', 'Status, Worked Hours, Late Minutes', 'Rebuild after source changes; override only PTO/UTO/Non-PTO/Holiday status.'],
          ['Time Off Requests', 'Pending and approved PTO, UTO, and Non-PTO requests.', 'Employees and managers', 'Via dialog preferred', 'Type, dates, hours/days, status', 'Approve requests before payroll; approved rows rebuild into Attendance Log.'],
          ['PTO Balances', 'Fixed Annual or Accrued Monthly PTO days, used days, remaining days, and payout-eligible days.', 'Operations manager', 'Script-updated', 'PTO plan, earned PTO, used PTO, remaining PTO, Non-PTO usage', 'Shows days only, never payout dollars; refresh after comp or request changes.'],
          ['Makeup Hour Requests', 'Pending and approved makeup hours.', 'Employees and managers', 'Via dialog preferred', 'Date, hours, status', 'Approved rows can offset short-hour deductions during payroll calculation.'],
          ['Scorecard', 'Shareable one-employee attendance scorecard.', 'Operations manager', 'Script-rendered', 'Bonus status, stats, exception days', 'Use Attendance > View Scorecard to refresh this tab.']
        ]
      },
      {
        eyebrow: 'SECTION 03',
        title: 'Daily Controls',
        description: 'Use these checks to keep the pay-period closeout small and predictable.',
        headers: ['Frequency', 'Owner', 'Check', 'Source', 'Action', 'Escalation'],
        rows: [
          ['Daily', 'Operations manager', 'Employees scheduled today have clock-in activity.', 'Clock Events', 'Add missing manual entries with notes.', 'Follow up with employee if the workday cannot be confirmed.'],
          ['Daily', 'Operations manager', 'Incomplete rows have a documented resolution path.', 'Attendance Log', 'Add missing clock-out or leave status unresolved for payroll review.', 'Payroll should not pay incomplete days without review.'],
          ['Weekly', 'Operations manager', 'Pending leave and makeup requests are cleared before they affect pay.', 'Time Off Requests and Makeup Hour Requests', 'Approve or deny from the Attendance menu.', 'Rebuild attendance after time off approvals.'],
          ['Weekly', 'Operations manager', 'New hires and resignations are reflected in roster dates.', 'Employees', 'Set Start Date, End Date, and Status.', 'Coordinate lifecycle notes in Payroll workbook.'],
          ['Monthly', 'Operations manager', 'Scorecards explain bonus eligibility without showing pay data.', 'Attendance menu', 'Run View Scorecard.', 'Send only the scorecard, not payroll tabs.'],
          ['Pay close', 'Operations manager', 'Log is rebuilt for the full pay period.', 'Attendance menu', 'Run Rebuild Attendance Log.', 'Do not calculate payroll from a stale log.']
        ]
      },
      {
        eyebrow: 'SECTION 04',
        title: 'Phase 1 Test Scenario',
        description: 'Run injectPhase1TestData() to populate a compact scenario that exercises the main edge cases.',
        headers: ['Employee', 'PIN', 'Scenario', 'Expected Review', 'Workbook Impact', 'Notes'],
        rows: [
          ['MARK', PHASE1_TEST.pins.MARK, 'Late on 2026-04-08.', 'Late minutes and deduction should appear.', 'Attendance Log and Payroll Calculations', 'Tests late arrival and late lunch return.'],
          ['PAUL', PHASE1_TEST.pins.PAUL, 'Absent on scheduled Saturday 2026-04-04.', 'Absent day and deduction should appear.', 'Attendance Log and Payroll Calculations', 'No clock events are inserted for that day.'],
          ['ANDREA', PHASE1_TEST.pins.ANDREA, 'Short day on 2026-04-10.', 'Short hours deduction should appear.', 'Attendance Log and Payroll Calculations', 'Clock-out is before scheduled end.'],
          ['CHARISSE', PHASE1_TEST.pins.CHARISSE, 'Missing clock-out on 2026-04-14.', 'Payroll row should need review.', 'Attendance Log and Payroll Output', 'Calculated total remains blank until resolved.']
        ]
      }
    ]
  };
}

function getPayrollWorkflowGuide_() {
  return {
    eyebrow: 'PHASE 1-5 OPERATING GUIDE',
    title: 'Payroll Workflow Instructions',
    subtitle: 'Use this workbook to maintain private compensation data, calculate payroll, and manage approved compensation and lifecycle changes without overwriting history.',
    workbook: CONFIG.payrollSpreadsheetName,
    owner: 'Payroll processor',
    entryPoint: 'Payroll menu',
    beforeUse: 'Confirm attendance has been rebuilt and compensation is complete.',
    cadence: 'Mid-month and end-of-month payroll',
    scope: 'Base pay, deductions, benefits, bonuses, adjustments, compensation changes, lifecycle',
    sections: [
      {
        eyebrow: 'SECTION 01',
        title: 'Start Here',
        description: 'A focused payroll run sequence that preserves review points before payment.',
        headers: ['Step', 'Owner', 'Action', 'Where', 'When', 'Done When'],
        rows: [
          ['1', 'Operations manager', 'Approve pending time off and makeup requests, then rebuild Attendance Log for the target period.', 'Attendance workbook', 'Before calculation', 'Attendance statuses, approved leave, makeup hours, and late minutes are current.'],
          ['2', 'Payroll processor', 'Review Compensation Master for blanks, effective dates, PTO Plan Type, and Monthly PTO Accrual Days.', 'Compensation Master', 'Before calculation', 'Every paid employee has an active compensation row and PTO plan terms are intentional.'],
          ['3', 'Payroll processor', 'Confirm or create the target pay period.', 'Pay Periods', 'Each run', 'Period ID, dates, type, and status are correct.'],
          ['4', 'Payroll processor', 'Enter KPI approvals, additional bonuses, and adjustments.', 'Payroll menu', 'Before calculation', 'Bonuses & Adjustments has approved entries with descriptions.'],
          ['5', 'Payroll processor', 'Calculate the pay period.', 'Payroll menu', 'Each run', 'Payroll Calculations and Payroll Output are refreshed.'],
          ['6', 'Payroll approver', 'Review warnings, benefits, bonus statuses, deductions, and Needs review rows.', 'Payroll Calculations', 'Before payment', 'Exceptions have notes or correction actions.'],
          ['7', 'Payroll processor', 'Refresh quarterly PA tracking after quarter-end payrolls.', 'Payroll menu', 'Quarter close', 'Quarterly PA Tracker shows eligible employees and reasons.'],
          ['8', 'Payroll processor', 'Use Compensation Change for raises, changed allowances, or PTO plan/accrual changes.', 'Payroll menu', 'When approved', 'A new effective-dated comp row is created and the old row is closed.'],
          ['9', 'Payroll processor', 'Use Offboard Employee or Reactivate Employee for lifecycle changes.', 'Payroll menu', 'As needed', 'Lifecycle log is appended and historical rows are retained.'],
          ['10', 'Payroll processor', 'Finalize after approval.', 'Payroll menu', 'After approval', 'Pay Period status is Paid and output is ready for export.']
        ]
      },
      {
        eyebrow: 'SECTION 02',
        title: 'Payroll Sheet Map',
        description: 'The private workbook separates compensation inputs from calculated pay output.',
        headers: ['Tab', 'Purpose', 'Primary User', 'Editable?', 'Key Fields', 'UX Rule'],
        rows: [
          ['Compensation Master', 'Private compensation, benefit, and PTO plan setup.', 'Payroll processor', 'Yes', 'Effective dates, salary, benefits, bonuses, PTO Plan Type, Monthly PTO Accrual Days', 'Existing rows default to Fixed Annual; leave unknown dollar values blank until confirmed.'],
          ['Pay Periods', 'Calendar and status control for pay runs.', 'Payroll processor', 'Yes', 'Period ID, Pay Date, Start/End, Status', 'Use one row per pay period and keep IDs stable.'],
          ['Payroll Calculations', 'Detailed calculated pay and deductions.', 'Payroll approver', 'Review only', 'Worked Hours, Deductions, Calculated Total', 'Investigate Needs review before payment.'],
          ['Payroll Output', 'Compact export-facing payroll summary.', 'Payroll processor', 'Review then export', 'Base, Deductions, TOTAL, Status', 'Export only after exceptions are cleared or approved.'],
          ['Employee Lifecycle Log', 'Hire, termination, and reactivation audit.', 'Payroll and operations', 'Yes', 'Event Type, Event Date, Effective Date', 'Capture lifecycle decisions that affect payroll timing.'],
          ['Compensation Change Log', 'Append-only record of compensation changes.', 'Payroll processor', 'Script-updated', 'Field, old value, new value, approver', 'Use Compensation Change so effective dates and retro adjustments are logged.'],
          ['Quarterly PA Tracker', 'Three-month perfect-attendance tracking.', 'Payroll processor', 'Script-updated', 'Quarter, month status, eligibility, bonus', 'Refresh after quarter-end attendance is complete.'],
          ['Bonuses & Adjustments', 'Approved KPI, bonuses, adjustments, and eligible accrued PTO payouts.', 'Payroll processor', 'Append via dialogs', 'Type, description, amount, approver', 'Final offboarding payroll can add an Accrued PTO payout Positive Adj; Attendance never shows payout dollars.']
        ]
      },
      {
        eyebrow: 'SECTION 03',
        title: 'Pay Run QA',
        description: 'These checks catch the Phase 1 failure modes before money leaves the workflow.',
        headers: ['Check', 'Where', 'Signal', 'Likely Cause', 'Action', 'Owner'],
        rows: [
          ['Missing compensation', 'Payroll Calculations', 'Status = Needs comp', 'Base salary is blank or no effective row exists.', 'Fill Compensation Master or remove the employee from this run.', 'Payroll processor'],
          ['Incomplete attendance', 'Payroll Output', 'Status = Needs review', 'Clock-out is missing for a scheduled day.', 'Correct attendance, rebuild log, then recalculate.', 'Operations manager'],
          ['Absent deduction', 'Payroll Calculations', 'Absent Days > 0', 'Scheduled day has no clock-in.', 'Confirm absence classification before approval.', 'Payroll approver'],
          ['Late deduction', 'Payroll Calculations', 'Late Minutes > 0', 'Late start or late lunch return.', 'Review against policy and correct source events if needed.', 'Payroll approver'],
          ['Short hours deduction', 'Payroll Calculations', 'Short Hours > 0', 'Worked hours are below eight for a scheduled day.', 'Confirm early leave, correction, or override path.', 'Payroll approver'],
          ['Benefits', 'Payroll Calculations', 'Benefits and Benefit Eligible Days', 'Mid-month starts, exits, UTO, or Non-PTO can prorate benefits.', 'Review proration notes before approval.', 'Payroll approver'],
          ['Approved leave', 'Attendance Log', 'Status = PTO, UTO, or Non-PTO', 'A manager approved a time off request.', 'Confirm the approval and dates before paying.', 'Operations manager'],
          ['PTO plan setup', 'Compensation Master', 'PTO Plan Type and Monthly PTO Accrual Days', 'Accrued Monthly earns only for full calendar months worked; Fixed Annual uses Annual PTO Days.', 'Confirm plan type before refresh or offboarding.', 'Payroll processor'],
          ['PTO payout', 'Bonuses & Adjustments', 'Positive Adj description starts Accrued PTO payout', 'Only Accrued Monthly unused earned PTO is payout-eligible on offboarding at 1.5x daily base rate.', 'Fixed Annual mid-year unused PTO should not create an adjustment.', 'Payroll approver'],
          ['Makeup hours', 'Payroll Calculations', 'Notes mention approved makeup hours', 'Approved makeup offset short-hour deductions.', 'Confirm unused hours are intentional.', 'Payroll approver'],
          ['Attendance bonus', 'Payroll Calculations', 'Attendance Bonus Status', 'Monthly eligibility is calculated after month close on Mid payrolls.', 'Review the status and notes before approving output.', 'Payroll approver'],
          ['Quarterly PA bonus', 'Quarterly PA Tracker', 'Eligible? = No or amount blank', 'One or more months were not perfect, or bonus amount is blank.', 'Review quarter details and Compensation Master.', 'Payroll processor'],
          ['KPI and adjustments', 'Bonuses & Adjustments', 'Manual entries affect Payroll Output', 'A bonus or adjustment was approved outside attendance logic.', 'Confirm description, amount, and approver.', 'Payroll approver']
        ]
      },
      {
        eyebrow: 'SECTION 04',
        title: 'Compensation And Lifecycle Controls',
        description: 'Phase 5 actions preserve history by appending logs and new effective-dated rows.',
        headers: ['Action', 'Where', 'Primary Effect', 'Audit Trail', 'Payroll Effect', 'Owner'],
        rows: [
          ['Compensation Change', 'Payroll menu', 'Closes current Compensation Master row and appends a new one, including PTO plan fields when changed.', 'Compensation Change Log', 'Optional retroactive adjustment added to Bonuses & Adjustments.', 'Payroll processor'],
          ['Offboard Employee', 'Payroll menu', 'Sets employee end date, closes schedule and comp rows, then marks status Resigned or Terminated.', 'Employee Lifecycle Log', 'Creates and calculates a FINAL pay period; Accrued Monthly unused PTO can be added as a Positive Adj at 1.5x base daily rate.', 'Payroll processor'],
          ['Reactivate Employee', 'Payroll menu', 'Sets employee Active and appends fresh schedule and compensation rows.', 'Employee Lifecycle Log', 'New terms apply from the new start date.', 'Payroll processor'],
          ['View logs', 'Payroll menu', 'Jumps to the audit log tabs.', 'No edit required', 'Use logs during approval review.', 'Payroll approver']
        ]
      },
      {
        eyebrow: 'SECTION 05',
        title: 'Confidential Handoff',
        description: 'Keep compensation work private while making the approval state easy to audit.',
        headers: ['Moment', 'Owner', 'Action', 'Artifact', 'Access', 'Notes'],
        rows: [
          ['Before calculation', 'Payroll processor', 'Confirm only authorized users can access this workbook.', 'Sharing settings', 'Restricted', 'Attendance users do not need payroll workbook access.'],
          ['During review', 'Payroll approver', 'Use Payroll Calculations for details and Payroll Output for totals.', 'Calculated tabs', 'Private', 'Do not edit calculated rows directly.'],
          ['After approval', 'Payroll processor', 'Mark the period Paid and export output if needed.', 'Payroll menu', 'Private', 'The CSV export is a generated artifact outside the sheet.'],
          ['After corrections', 'Payroll processor', 'Recalculate after any attendance or compensation change.', 'Payroll menu', 'Private', 'Previous calculated rows are replaced by the latest run.']
        ]
      },
      {
        eyebrow: 'SECTION 06',
        title: 'Phase 1 Test Scenario',
        description: 'Run injectPhase1TestData() to create a private test pay period without using a production period ID.',
        headers: ['Period ID', 'Employee Set', 'Expected Warning', 'Review Tab', 'Status', 'Notes'],
        rows: [
          [PHASE1_TEST.periodId, PHASE1_TEST.employeeCodes.join(', '), 'MARK late minutes.', 'Payroll Calculations', 'Calculated', 'Tests late deduction math.'],
          [PHASE1_TEST.periodId, PHASE1_TEST.employeeCodes.join(', '), 'PAUL absent day.', 'Payroll Calculations', 'Calculated', 'Tests absence deduction math.'],
          [PHASE1_TEST.periodId, PHASE1_TEST.employeeCodes.join(', '), 'ANDREA short hours.', 'Payroll Calculations', 'Calculated', 'Tests short-hours deduction math.'],
          [PHASE1_TEST.periodId, PHASE1_TEST.employeeCodes.join(', '), 'CHARISSE incomplete day.', 'Payroll Output', 'Needs review', 'Total remains blank until attendance is corrected.']
        ]
      }
    ]
  };
}

function normalizeInstructionRow_(row) {
  const values = row.slice(0, 6);
  while (values.length < 6) values.push('');
  return values;
}

function ensureMinimumSheetSize_(sheet, minRows, minColumns) {
  if (sheet.getMaxRows() < minRows) {
    sheet.insertRowsAfter(sheet.getMaxRows(), minRows - sheet.getMaxRows());
  }
  if (sheet.getMaxColumns() < minColumns) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), minColumns - sheet.getMaxColumns());
  }
}

function installOpenTriggers_(spreadsheets) {
  const existing = ScriptApp.getProjectTriggers();
  existing.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'handleSpreadsheetOpen') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  spreadsheets.forEach(ss => {
    ScriptApp.newTrigger('handleSpreadsheetOpen').forSpreadsheet(ss).onOpen().create();
  });
}

function buildPayrollContext_(attendance, payroll, periodStart, periodEnd) {
  return {
    attendance,
    payroll,
    employees: mapByCode_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))),
    schedules: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules)),
    attendanceRows: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log)),
    makeupRows: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests)),
    compRows: readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp)),
    bonusRows: readObjects_(getSheet_(payroll, CONFIG.payrollTabs.bonuses)),
    periodStart,
    periodEnd
  };
}

function calculateEmployeePay_(employeeCode, period, context) {
  const code = normalizeCode_(employeeCode);
  const employee = context.employees[code];
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  const periodLabel = `${normalizePeriodId_(period['Period ID'])} (${displayDate_(periodStart)} - ${displayDate_(periodEnd)})`;
  const employeeName = employee ? (employee['Display Name'] || employee['Full Name'] || code) : code;

  if (!employee) {
    return blankPayrollResult_(period, code, employeeName, 'Needs review', 'Employee was not found in Attendance Employees.');
  }

  const comp = getCompForDate_(context.compRows, code, periodEnd);
  const monthlyBase = comp ? toNumberOrBlank_(comp['Monthly Base Salary']) : '';
  if (monthlyBase === '') {
    return blankPayrollResult_(period, code, employeeName, 'Needs comp', 'Monthly Base Salary is blank in Compensation Master.');
  }

  const finalPayroll = isFinalPayroll_(period);
  const scheduledDaysInMonth = finalPayroll
    ? countScheduledDaysInRateMonth_(context.schedules, code, periodEnd)
    : countScheduledDaysInMonth_(context.schedules, code, periodStart);
  if (!scheduledDaysInMonth) {
    return blankPayrollResult_(period, code, employeeName, 'Needs schedule', 'No scheduled days found for this calendar month.');
  }

  const dailyBaseRate = monthlyBase / scheduledDaysInMonth;
  const hourlyBaseRate = dailyBaseRate / 8;
  const periodLogRows = context.attendanceRows.filter(row => {
    const rowDate = parseDateOrBlank_(row.Date);
    return normalizeCode_(row['Employee Code']) === code
      && rowDate
      && rowDate.getTime() >= dateOnly_(periodStart).getTime()
      && rowDate.getTime() <= dateOnly_(periodEnd).getTime()
      && row['Scheduled Start'];
  });

  let scheduledDays = 0;
  let workedHours = 0;
  let lateMinutes = 0;
  let absentDays = 0;
  let shortHours = 0;
  let incompleteDays = 0;
  const approvedMakeupHours = sumApprovedMakeupHoursForPeriod_(context.makeupRows || [], code, periodStart, periodEnd);
  let remainingMakeupHours = approvedMakeupHours;
  let makeupHoursApplied = 0;

  periodLogRows.forEach(row => {
    const status = row.Status || '';
    scheduledDays += 1;
    const worked = toNumberOrBlank_(row['Worked Hours']);
    const late = toNumberOrBlank_(row['Total Late Minutes']);
    lateMinutes += late === '' ? 0 : late;

    if (status === 'Absent' || status === 'UTO' || status === 'Non-PTO') {
      absentDays += 1;
      return;
    }
    if (status === 'Incomplete (no clock-out)') {
      incompleteDays += 1;
      return;
    }
    if (status === 'Holiday' || status === 'PTO') {
      return;
    }
    if (worked !== '') {
      const shortfall = Math.max(0, 8 - worked);
      const appliedMakeup = Math.min(shortfall, remainingMakeupHours);
      remainingMakeupHours -= appliedMakeup;
      makeupHoursApplied += appliedMakeup;
      workedHours += worked + appliedMakeup;
      if (shortfall > appliedMakeup) shortHours += shortfall - appliedMakeup;
    }
  });

  const scheduledBase = scheduledDays * 8 * hourlyBaseRate;
  const lateDeduction = (lateMinutes / 60) * hourlyBaseRate;
  const absenceDeduction = absentDays * 8 * hourlyBaseRate;
  const shortHoursDeduction = shortHours * hourlyBaseRate;
  const totalDeductions = lateDeduction + absenceDeduction + shortHoursDeduction;
  const benefits = calculateBenefitsForPeriod_(code, employee, period, context, comp);
  let attendanceBonus = calculateMonthlyAttendanceBonus_(code, period, context, comp);
  if (finalPayroll) {
    attendanceBonus = {
      amount: 0,
      status: 'Forfeited',
      notes: 'Final payroll rule: attendance bonus is forfeited.',
      summary: null
    };
  }
  const quarterlyPaBonus = calculateQuarterlyPaBonus_(code, period, context, comp);
  const bonusAdjustments = summarizeBonusAdjustments_(context.bonusRows, normalizePeriodId_(period['Period ID']), code);
  const isMidPayroll = isMidPayroll_(period);
  const attendanceBonusAmount = toNumberOrZero_(attendanceBonus.amount);
  const quarterlyPaAmount = toNumberOrZero_(quarterlyPaBonus.amount);
  const kpiBonusAmount = (isMidPayroll || finalPayroll) ? bonusAdjustments.kpi : 0;
  const additionalBonusAmount = bonusAdjustments.additional;
  const positiveAdjustmentAmount = bonusAdjustments.positive;
  const negativeAdjustmentAmount = bonusAdjustments.negative;
  const otherBonusAmount = quarterlyPaAmount + additionalBonusAmount;
  const adjustmentAmount = positiveAdjustmentAmount - negativeAdjustmentAmount;
  const canPay = incompleteDays === 0;
  const total = canPay
    ? scheduledBase - totalDeductions + toNumberOrZero_(benefits.amount) + attendanceBonusAmount + quarterlyPaAmount + kpiBonusAmount + additionalBonusAmount + positiveAdjustmentAmount - negativeAdjustmentAmount
    : '';
  const notes = [];
  if (absentDays) notes.push(`${absentDays} absent day(s).`);
  if (incompleteDays) notes.push(`${incompleteDays} incomplete day(s); verify clock events before payment.`);
  if (makeupHoursApplied) notes.push(`${round2_(makeupHoursApplied)} approved makeup hour(s) offset short-hours deductions.`);
  if (remainingMakeupHours) notes.push(`${round2_(remainingMakeupHours)} approved makeup hour(s) unused in this pay period.`);
  if (!scheduledDays) notes.push('No scheduled days in this pay period.');
  if (benefits.notes) notes.push(`Benefits: ${benefits.notes}`);
  if (finalPayroll) notes.push('Final payroll: attendance bonus forfeited; benefits are prorated through the final working day.');
  if (attendanceBonus.status !== 'Not due') notes.push(`Attendance bonus ${attendanceBonus.status}: ${attendanceBonus.notes}`);
  if (quarterlyPaBonus.status !== 'Not due') notes.push(`Quarterly PA ${quarterlyPaBonus.status}: ${quarterlyPaBonus.notes}`);
  if (bonusAdjustments.kpi && !isMidPayroll && !finalPayroll) notes.push('KPI bonus entries exist but are not paid on EOM payrolls.');
  if (bonusAdjustments.notes.length) notes.push(`Bonuses/adjustments: ${bonusAdjustments.notes.join(' | ')}`);

  const calculationRow = [
    normalizePeriodId_(period['Period ID']),
    code,
    employeeName,
    periodStart,
    periodEnd,
    scheduledDaysInMonth,
    scheduledDays,
    round2_(monthlyBase),
    round2_(dailyBaseRate),
    round2_(hourlyBaseRate),
    round2_(workedHours),
    round2_(lateMinutes),
    round2_(lateDeduction),
    absentDays,
    round2_(absenceDeduction),
    round2_(shortHours),
    round2_(shortHoursDeduction),
    round2_(scheduledBase),
    round2_(totalDeductions),
    benefits.monthlyBenefit === '' ? '' : round2_(benefits.monthlyBenefit),
    benefits.eligibleDays,
    benefits.periodEligibleDays,
    benefits.amount === '' ? '' : round2_(benefits.amount),
    attendanceBonus.amount === '' ? '' : round2_(attendanceBonus.amount),
    attendanceBonus.status,
    attendanceBonus.notes,
    quarterlyPaBonus.amount === '' ? '' : round2_(quarterlyPaBonus.amount),
    quarterlyPaBonus.status,
    quarterlyPaBonus.notes,
    round2_(kpiBonusAmount),
    round2_(additionalBonusAmount),
    round2_(positiveAdjustmentAmount),
    round2_(negativeAdjustmentAmount),
    total === '' ? '' : round2_(total),
    canPay ? 'Calculated' : 'Needs review',
    notes.join(' ')
  ];

  const outputRow = [
    employeeName,
    periodLabel,
    round2_(scheduledBase),
    round2_(totalDeductions),
    benefits.amount === '' ? '' : round2_(benefits.amount),
    attendanceBonus.amount === '' ? '' : round2_(attendanceBonus.amount),
    round2_(kpiBonusAmount),
    round2_(otherBonusAmount),
    round2_(adjustmentAmount),
    total === '' ? '' : round2_(total),
    canPay ? 'Calculated' : 'Needs review',
    notes.join(' ')
  ];

  return {
    calculationRow,
    outputRow,
    paTrackerRow: quarterlyPaBonus.trackerRow,
    warning: notes.length ? `${employeeName}: ${notes.join(' ')}` : ''
  };
}

function blankPayrollResult_(period, employeeCode, employeeName, status, note) {
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  const periodLabel = `${normalizePeriodId_(period['Period ID'])} (${displayDate_(periodStart)} - ${displayDate_(periodEnd)})`;
  const calculationRow = [
    normalizePeriodId_(period['Period ID']),
    employeeCode,
    employeeName,
    periodStart || '',
    periodEnd || ''
  ];
  while (calculationRow.length < HEADERS.calculations.length - 2) {
    calculationRow.push('');
  }
  calculationRow.push(status, note);
  return {
    calculationRow,
    outputRow: [employeeName, periodLabel, '', '', '', '', '', '', '', '', status, note],
    warning: `${employeeName}: ${note}`
  };
}

function setupSheetFormatting_(sheet, headerCount) {
  const maxRows = sheet.getMaxRows();
  sheet.setFrozenRows(1);
  try {
    sheet.setHiddenGridlines(true);
  } catch (error) {
    // Bound spreadsheet UI may omit this surface in some Apps Script contexts.
  }

  sheet.getRange(1, 1, maxRows, headerCount)
    .setBackground(UI_THEME.card)
    .setFontFamily(UI_THEME.sans)
    .setFontColor(UI_THEME.body)
    .setVerticalAlignment('middle');

  sheet.getRange(1, 1, 1, headerCount)
    .setFontWeight('bold')
    .setFontFamily(UI_THEME.serif)
    .setFontSize(12)
    .setBackground(UI_THEME.ink)
    .setFontColor(UI_THEME.card)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('middle')
    .setWrap(true)
    .setBorder(true, true, true, true, true, true, UI_THEME.ink, SpreadsheetApp.BorderStyle.SOLID);

  if (maxRows > 1) {
    sheet.getRange(2, 1, maxRows - 1, headerCount)
      .setFontSize(10)
      .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
  }

  sheet.setRowHeight(1, 42);
  applySheetFilter_(sheet, headerCount);
  sheet.autoResizeColumns(1, headerCount);
  capColumnWidths_(sheet, headerCount);
}

function applyAttendanceFormatting_(ss) {
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.employees), HEADERS.employees.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.schedules), HEADERS.schedules.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.holidays), HEADERS.holidays.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.events), HEADERS.events.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.log), HEADERS.log.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), HEADERS.timeOffRequests.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.ptoBalances), HEADERS.ptoBalances.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.makeupRequests), HEADERS.makeupRequests.length);
  formatScorecardSheet_(getSheet_(ss, CONFIG.attendanceTabs.scorecard));

  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.employees), 4, ['Active', 'Inactive', 'Resigned', 'Terminated']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 4, CONFIG.eventTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 5, ['WEB_APP', 'MANUAL', 'IMPORTED']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.log), 16, CONFIG.statuses);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), 3, CONFIG.timeOffTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), 8, CONFIG.requestStatuses);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.makeupRequests), 6, CONFIG.requestStatuses);

  getSheet_(ss, CONFIG.attendanceTabs.employees).getRange('E:F').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.holidays).getRange('A:A').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.events).getRange('B:B').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('A:A').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('D:M').setNumberFormat('h:mm AM/PM');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('N:O').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('D:E').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('F:F').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('J:J').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.attendanceTabs.ptoBalances).getRange('B:B').setNumberFormat('0');
  getSheet_(ss, CONFIG.attendanceTabs.ptoBalances).getRange('D:L').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('C:C').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('D:D').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('H:H').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  applySpreadsheetChrome_(ss, 'attendance');
}

function applyPayrollFormatting_(ss) {
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.comp), HEADERS.comp.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.periods), HEADERS.periods.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.calculations), HEADERS.calculations.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.output), HEADERS.output.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.lifecycle), HEADERS.lifecycle.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.compChanges), HEADERS.compChanges.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.paTracker), HEADERS.paTracker.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.bonuses), HEADERS.bonuses.length);

  setValidation_(getSheet_(ss, CONFIG.payrollTabs.periods), 5, ['Mid', 'EOM']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.periods), 6, ['Open', 'Calculated', 'Paid']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.bonuses), 3, ['KPI', 'Additional', 'Positive Adj', 'Negative Adj']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.lifecycle), 3, ['Hired', 'Resigned', 'Terminated', 'Reactivated']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.compChanges), 10, ['Yes', 'No']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.comp), 13, CONFIG.ptoPlanTypes);
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('B:C').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('E:I').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('J:K').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('N:N').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.payrollTabs.periods).getRange('B:D').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('D:E').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('H:J').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('M:M').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('O:O').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('Q:T').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('W:X').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('AA:AA').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('AD:AH').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.output).getRange('C:J').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.lifecycle).getRange('D:E').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.payrollTabs.compChanges).getRange('C:D').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.payrollTabs.compChanges).getRange('K:K').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.paTracker).getRange('L:L').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.paTracker).getRange('N:N').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.payrollTabs.bonuses).getRange('E:E').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.bonuses).getRange('G:G').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  applySpreadsheetChrome_(ss, 'payroll');
}

function applySpreadsheetChrome_(ss, workbookType) {
  const tabColor = workbookType === 'payroll' ? UI_THEME.ink : UI_THEME.accent;
  ss.getSheets().forEach(sheet => {
    sheet.setTabColor(tabColor);
    if (sheet.getName() === CONFIG.workflowInstructionsTab || sheet.getName() === CONFIG.attendanceTabs.scorecard) return;
    const lastColumn = Math.max(sheet.getLastColumn(), 1);
    const lastRow = Math.max(sheet.getLastRow(), 1);
    sheet.getRange(1, 1, lastRow, lastColumn)
      .setFontFamily(UI_THEME.sans)
      .setFontColor(UI_THEME.body);
    sheet.getRange(1, 1, 1, lastColumn)
      .setFontFamily(UI_THEME.serif)
      .setFontColor(UI_THEME.card)
      .setBackground(UI_THEME.ink);
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, lastColumn)
        .setBackground(UI_THEME.card)
        .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
    }
  });
}

function applySheetFilter_(sheet, headerCount) {
  const range = sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), headerCount);
  try {
    const existing = sheet.getFilter();
    if (existing) existing.remove();
    range.createFilter();
  } catch (error) {
    // Filters are UX-only; skip if the current sheet state blocks creation.
  }
}

function capColumnWidths_(sheet, headerCount) {
  for (let column = 1; column <= headerCount; column += 1) {
    const width = sheet.getColumnWidth(column);
    if (width < 96) sheet.setColumnWidth(column, 96);
    if (width > 240) sheet.setColumnWidth(column, 240);
  }
}

function setValidation_(sheet, column, values) {
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(false).build();
  sheet.getRange(2, column, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(rule);
}

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  ensureMinimumSheetSize_(sheet, 1, headers.length);
  const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const needsHeader = existing.join('') === '' || existing.join('|') !== headers.join('|');
  if (needsHeader) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function removeDefaultBlankSheet_(ss) {
  const sheet = ss.getSheetByName('Sheet1');
  if (sheet && ss.getSheets().length > 1 && sheet.getLastRow() === 0) {
    ss.deleteSheet(sheet);
  }
}

function seedPayPeriods_(ss, year) {
  const sheet = getSheet_(ss, CONFIG.payrollTabs.periods);
  sheet.getRange('A:A').setNumberFormat('@');
  const existing = readObjects_(sheet);
  if (existing.length) {
    repairPayPeriodIds_(ss);
    return;
  }
  const rows = [];
  for (let month = 0; month < 12; month += 1) {
    const payDateMid = new Date(year, month, 15);
    const previousMonth = new Date(year, month - 1, 1);
    const midPeriodStart = new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 16);
    const midPeriodEnd = new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0);
    rows.push([
      `${year}-${pad2_(month + 1)}-15`,
      payDateMid,
      midPeriodStart,
      midPeriodEnd,
      'Mid',
      'Open'
    ]);

    const eomPayDate = new Date(year, month + 1, 0);
    rows.push([
      `${year}-${pad2_(month + 1)}-EOM`,
      eomPayDate,
      new Date(year, month, 1),
      new Date(year, month, 15),
      'EOM',
      'Open'
    ]);
  }
  appendRows_(sheet, rows);
  repairPayPeriodIds_(ss);
}

function buildAttendanceLogRow_(date, employee, schedule, events, holidays, overrideStatus) {
  const code = normalizeCode_(employee['Employee Code']);
  const daySchedule = getDaySchedule_(schedule, date);
  const holiday = getPaidHoliday_(holidays, date, code);
  const parts = extractEventParts_(events);
  const scheduledStart = daySchedule.start === '' ? '' : makeDateAtHour_(date, daySchedule.start);
  const scheduledEnd = daySchedule.end === '' ? '' : makeDateAtHour_(date, daySchedule.end);
  const scheduledLunchEnd = daySchedule.lunchEnd === '' ? '' : makeDateAtHour_(date, daySchedule.lunchEnd);
  let workedHours = '';
  let lateMinutes = '';

  if (parts.clockIn && parts.clockOut) {
    workedHours = round2_((parts.clockOut.getTime() - parts.clockIn.getTime() - parts.unpaidBreakMs) / 3600000);
  }

  if (daySchedule.isScheduled) {
    lateMinutes = 0;
    if (parts.clockIn && scheduledStart) {
      lateMinutes += Math.max(0, Math.round((parts.clockIn.getTime() - scheduledStart.getTime()) / 60000));
    }
    if (parts.lunchEnd && scheduledLunchEnd) {
      lateMinutes += Math.max(0, Math.round((parts.lunchEnd.getTime() - scheduledLunchEnd.getTime()) / 60000));
    }
  }

  const derivedStatus = deriveAttendanceStatus_(daySchedule.isScheduled, holiday, parts);
  const canApplyOverride = overrideStatus === 'Holiday' || (overrideStatus && daySchedule.isScheduled && !holiday);
  const status = canApplyOverride ? overrideStatus : derivedStatus;

  return [
    dateOnly_(date),
    code,
    employee['Display Name'] || employee['Full Name'] || code,
    scheduledStart,
    scheduledEnd,
    parts.clockIn || '',
    parts.lunchStart || '',
    parts.lunchEnd || '',
    parts.breaks[0] ? parts.breaks[0].start : '',
    parts.breaks[0] ? parts.breaks[0].end : '',
    parts.breaks[1] ? parts.breaks[1].start : '',
    parts.breaks[1] ? parts.breaks[1].end : '',
    parts.clockOut || '',
    workedHours,
    lateMinutes,
    status
  ];
}

function deriveAttendanceStatus_(isScheduled, holiday, parts) {
  if (holiday) return 'Holiday';
  if (!isScheduled) return 'Off (not scheduled)';
  if (!parts.clockIn) return 'Absent';
  if (!parts.clockOut) return 'Incomplete (no clock-out)';
  return 'Present';
}

function extractEventParts_(events) {
  const sorted = events.slice().sort((a, b) => {
    const aDate = parseDateOrBlank_(a.Timestamp);
    const bDate = parseDateOrBlank_(b.Timestamp);
    return (aDate ? aDate.getTime() : 0) - (bDate ? bDate.getTime() : 0);
  });
  const parts = {
    clockIn: null,
    lunchStart: null,
    lunchEnd: null,
    clockOut: null,
    breaks: [],
    unpaidBreakMs: 0
  };
  let pendingBreak = null;

  sorted.forEach(event => {
    const timestamp = parseDateOrBlank_(event.Timestamp);
    if (!timestamp) return;
    switch (event['Event Type']) {
      case 'CLOCK_IN':
        if (!parts.clockIn) parts.clockIn = timestamp;
        break;
      case 'LUNCH_START':
        if (!parts.lunchStart) parts.lunchStart = timestamp;
        break;
      case 'LUNCH_END':
        if (!parts.lunchEnd) parts.lunchEnd = timestamp;
        if (parts.lunchStart && parts.lunchEnd && parts.lunchEnd.getTime() > parts.lunchStart.getTime()) {
          parts.unpaidBreakMs += parts.lunchEnd.getTime() - parts.lunchStart.getTime();
        }
        break;
      case 'BREAK_START':
        pendingBreak = { start: timestamp, end: null };
        break;
      case 'BREAK_END':
        if (pendingBreak) {
          pendingBreak.end = timestamp;
          parts.breaks.push(pendingBreak);
          if (pendingBreak.end.getTime() > pendingBreak.start.getTime()) {
            parts.unpaidBreakMs += pendingBreak.end.getTime() - pendingBreak.start.getTime();
          }
          pendingBreak = null;
        }
        break;
      case 'CLOCK_OUT':
        parts.clockOut = timestamp;
        break;
      default:
        break;
    }
  });
  return parts;
}

function getAllowedEvents_(lastEventType) {
  if (!lastEventType) return ['CLOCK_IN'];
  if (lastEventType === 'CLOCK_IN') return ['LUNCH_START', 'BREAK_START', 'CLOCK_OUT'];
  if (lastEventType === 'LUNCH_START') return ['LUNCH_END'];
  if (lastEventType === 'LUNCH_END') return ['LUNCH_START', 'BREAK_START', 'CLOCK_OUT'];
  if (lastEventType === 'BREAK_START') return ['BREAK_END'];
  if (lastEventType === 'BREAK_END') return ['LUNCH_START', 'BREAK_START', 'CLOCK_OUT'];
  if (lastEventType === 'CLOCK_OUT') return ['CLOCK_IN'];
  return ['CLOCK_IN'];
}

function getCurrentStateLabel_(lastEventType) {
  if (!lastEventType) return 'Not clocked in';
  if (lastEventType === 'CLOCK_IN' || lastEventType === 'LUNCH_END' || lastEventType === 'BREAK_END') return 'Currently working';
  if (lastEventType === 'LUNCH_START') return 'On lunch';
  if (lastEventType === 'BREAK_START') return 'On break';
  if (lastEventType === 'CLOCK_OUT') return 'Clocked out';
  return 'Unknown';
}

function buildTodaySummary_(events) {
  if (!events.length) return ['No clock events yet today.'];
  return events.map(event => `${CONFIG.eventLabels[event['Event Type']] || event['Event Type']}: ${Utilities.formatDate(parseDateOrBlank_(event.Timestamp), CONFIG.timezone, 'h:mm a')}`);
}

function resolveWebAppEmployee_(identity) {
  const ss = requireAttendanceSpreadsheet_();
  const employees = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.employees))
    .filter(row => row.Status === 'Active');
  const activeEmail = (getActiveUserEmail_() || '').toLowerCase();
  if (activeEmail) {
    const byEmail = employees.filter(row => String(row.Email || '').toLowerCase() === activeEmail)[0];
    if (byEmail) return byEmail;
  }

  if (!identity || !identity.employeeCode || !identity.pin) return null;
  const code = normalizeCode_(identity.employeeCode);
  const pin = String(identity.pin);
  return employees.filter(row => normalizeCode_(row['Employee Code']) === code && String(row['Web App PIN'] || '') === pin)[0] || null;
}

function appendClockEvent_(entry) {
  const ss = requireAttendanceSpreadsheet_();
  const sheet = getSheet_(ss, CONFIG.attendanceTabs.events);
  sheet.appendRow([
    makeId_('EVT'),
    entry.timestamp || new Date(),
    normalizeCode_(entry.employeeCode),
    entry.eventType,
    entry.source || 'WEB_APP',
    entry.device || '',
    entry.notes || ''
  ]);
  SpreadsheetApp.flush();
}

function getClockEvents_(ss, startDate, endDate, employeeCode) {
  const rows = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.events));
  const start = startDate ? startDate.getTime() : -Infinity;
  const end = endDate ? endDate.getTime() : Infinity;
  const code = employeeCode ? normalizeCode_(employeeCode) : '';
  return rows
    .filter(row => {
      const timestamp = parseDateOrBlank_(row.Timestamp);
      if (!timestamp) return false;
      const matchesCode = !code || normalizeCode_(row['Employee Code']) === code;
      return matchesCode && timestamp.getTime() >= start && timestamp.getTime() <= end;
    })
    .sort((a, b) => {
      const aDate = parseDateOrBlank_(a.Timestamp);
      const bDate = parseDateOrBlank_(b.Timestamp);
      return (aDate ? aDate.getTime() : 0) - (bDate ? bDate.getTime() : 0);
    });
}

function groupEventsByDateEmployee_(events) {
  const grouped = {};
  events.forEach(event => {
    const timestamp = parseDateOrBlank_(event.Timestamp);
    if (!timestamp) return;
    const key = `${formatDateKey_(timestamp)}|${normalizeCode_(event['Employee Code'])}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(event);
  });
  return grouped;
}

function readAttendanceStatusOverrides_(ss, startDate, endDate) {
  const overrides = {};
  const sheet = getSheet_(ss, CONFIG.attendanceTabs.log);
  const rows = readObjects_(sheet);
  rows.forEach(row => {
    const rowDate = parseDateOrBlank_(row.Date);
    if (!rowDate) return;
    const status = row.Status;
    if (['PTO', 'UTO', 'Non-PTO', 'Holiday'].indexOf(status) === -1) return;
    if (rowDate.getTime() < dateOnly_(startDate).getTime() || rowDate.getTime() > dateOnly_(endDate).getTime()) return;
    overrides[`${formatDateKey_(rowDate)}|${normalizeCode_(row['Employee Code'])}`] = status;
  });
  const approved = readApprovedTimeOffOverrides_(ss, startDate, endDate);
  Object.keys(approved).forEach(key => {
    overrides[key] = approved[key];
  });
  return overrides;
}

function readApprovedTimeOffOverrides_(ss, startDate, endDate) {
  const overrides = {};
  if (!hasSheet_(ss, CONFIG.attendanceTabs.timeOffRequests)) return overrides;
  const rows = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests));
  rows.forEach(row => {
    if (row['Status (Pending/Approved/Denied)'] !== 'Approved') return;
    const type = row['Type (PTO/UTO/Non-PTO)'];
    if (CONFIG.timeOffTypes.indexOf(type) === -1) return;
    const code = normalizeCode_(row['Employee Code']);
    const requestStart = parseDateOrBlank_(row['Start Date']);
    const requestEnd = parseDateOrBlank_(row['End Date']);
    if (!code || !requestStart || !requestEnd) return;

    const start = maxDate_(dateOnly_(requestStart), dateOnly_(startDate));
    const end = minDate_(dateOnly_(requestEnd), dateOnly_(endDate));
    if (start.getTime() > end.getTime()) return;
    for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays_(cursor, 1)) {
      overrides[`${formatDateKey_(cursor)}|${code}`] = type;
    }
  });
  return overrides;
}

function createTimeOffRequest_(payload, source) {
  payload = payload || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  const employeeCode = normalizeCode_(payload.employeeCode);
  const employee = getEmployeeRowByCode_(attendance, employeeCode);
  if (!employee) throw new Error('Select an active employee.');

  const type = String(payload.type || '').trim();
  if (CONFIG.timeOffTypes.indexOf(type) === -1) throw new Error('Select PTO, UTO, or Non-PTO.');
  const startDate = parseDateOrBlank_(payload.startDate);
  const endDate = parseDateOrBlank_(payload.endDate);
  if (!startDate || !endDate) throw new Error('Start Date and End Date are required.');
  if (dateOnly_(startDate).getTime() > dateOnly_(endDate).getTime()) {
    throw new Error('End Date must be on or after Start Date.');
  }
  const hoursDays = toNumberOrBlank_(payload.hoursDays || payload.units || payload.days);
  if (hoursDays === '' || hoursDays <= 0) throw new Error('Enter Hours/Days greater than zero.');
  const reason = String(payload.reason || '').trim();
  if (!reason) throw new Error('Reason is required.');
  const requestId = makeId_('TO');
  const notes = `Submitted via ${source === 'WEB_APP' ? 'clock app' : 'sheet menu'} by ${getActiveUserEmail_() || employeeCode}.`;

  appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests), [[
    requestId,
    employeeCode,
    type,
    dateOnly_(startDate),
    dateOnly_(endDate),
    round2_(hoursDays),
    reason,
    'Pending',
    '',
    '',
    notes
  ]]);
  refreshPtoBalances_(attendance);
  applyAttendanceFormatting_(attendance);
  return { requestId, employeeCode, type };
}

function createMakeupHourRequest_(payload, source) {
  payload = payload || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance);
  const employeeCode = normalizeCode_(payload.employeeCode);
  const employee = getEmployeeRowByCode_(attendance, employeeCode);
  if (!employee) throw new Error('Select an active employee.');

  const date = parseDateOrBlank_(payload.date);
  if (!date) throw new Error('Date is required.');
  const hours = toNumberOrBlank_(payload.hoursRequested || payload.hours);
  if (hours === '' || hours <= 0) throw new Error('Enter makeup hours greater than zero.');
  const reason = String(payload.reason || '').trim();
  if (!reason) throw new Error('Reason is required.');
  const requestId = makeId_('MU');
  const sourceNote = source === 'WEB_APP' ? 'clock app' : 'sheet menu';

  appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests), [[
    requestId,
    employeeCode,
    dateOnly_(date),
    round2_(hours),
    `${reason} (Submitted via ${sourceNote}.)`,
    'Pending',
    '',
    ''
  ]]);
  applyAttendanceFormatting_(attendance);
  return { requestId, employeeCode };
}

function getEmployeeRowByCode_(attendance, employeeCode) {
  const code = normalizeCode_(employeeCode);
  if (!code) return null;
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => normalizeCode_(row['Employee Code']) === code && (row.Status === 'Active' || row.Status === ''))[0] || null;
}

function getEmployeeDisplayMap_(attendance) {
  const map = {};
  readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees)).forEach(row => {
    const code = normalizeCode_(row['Employee Code']);
    if (!code) return;
    map[code] = row['Display Name'] || row['Full Name'] || code;
  });
  return map;
}

function refreshPtoBalances_(attendance) {
  const employees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees));
  const requests = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests));
  const compRows = getPayrollCompRows_();
  const yearsByEmployee = {};
  const currentYear = new Date().getFullYear();
  const employeesByCode = {};

  employees.forEach(employee => {
    const code = normalizeCode_(employee['Employee Code']);
    if (!code) return;
    employeesByCode[code] = employee;
    if (!yearsByEmployee[code]) yearsByEmployee[code] = {};
    yearsByEmployee[code][currentYear] = true;
    const start = parseDateOrBlank_(employee['Start Date']);
    const end = parseDateOrBlank_(employee['End Date']);
    if (start) yearsByEmployee[code][start.getFullYear()] = true;
    if (end) yearsByEmployee[code][end.getFullYear()] = true;
  });

  const usage = summarizeApprovedTimeOffUsage_(requests);
  Object.keys(usage).forEach(key => {
    const parts = key.split('|');
    const code = parts[0];
    const year = parts[1];
    if (!yearsByEmployee[code]) yearsByEmployee[code] = {};
    yearsByEmployee[code][year] = true;
  });

  const rows = [];
  Object.keys(yearsByEmployee).sort().forEach(code => {
    Object.keys(yearsByEmployee[code]).sort().forEach(yearText => {
      const year = Number(yearText);
      const balance = calculatePtoBalanceForEmployeeYear_(employeesByCode[code], compRows, requests, code, year);
      rows.push([
        code,
        year,
        balance.ptoPlanType,
        balance.annualPto,
        balance.monthlyPtoAccrualDays,
        balance.earnedPto,
        balance.usedPto,
        balance.remainingPto,
        balance.payoutEligiblePto,
        balance.annualNonPto,
        balance.usedNonPto,
        balance.remainingNonPto
      ]);
    });
  });

  writeRowsReplacingData_(getSheet_(attendance, CONFIG.attendanceTabs.ptoBalances), HEADERS.ptoBalances, rows);
  return rows;
}

function getPtoBalanceSummaryForEmployee_(employeeCode, year) {
  try {
    const attendance = requireAttendanceSpreadsheet_();
    if (!hasSheet_(attendance, CONFIG.attendanceTabs.ptoBalances)) {
      return buildUnavailablePtoBalanceSummary_('PTO balance unavailable. Attendance setup needs review.');
    }
    let summaries = getPtoBalanceSummariesByEmployee_(attendance, year);
    if (!summaries[normalizeCode_(employeeCode)]) {
      refreshPtoBalances_(attendance);
      summaries = getPtoBalanceSummariesByEmployee_(attendance, year);
    }
    return summaries[normalizeCode_(employeeCode)] || null;
  } catch (error) {
    return buildUnavailablePtoBalanceSummary_('PTO balance unavailable. Payroll setup needs review.');
  }
}

function buildUnavailablePtoBalanceSummary_(message) {
  return {
    unavailable: true,
    message,
    ptoPlanType: '',
    annualPto: '',
    monthlyPtoAccrualDays: '',
    earnedPto: '',
    usedPto: '',
    remainingPto: '',
    payoutEligiblePto: '',
    annualNonPto: '',
    usedNonPto: '',
    remainingNonPto: ''
  };
}

function getPtoBalanceSummariesByEmployee_(attendance, year) {
  if (!hasSheet_(attendance, CONFIG.attendanceTabs.ptoBalances)) return {};
  const summaries = {};
  readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.ptoBalances)).forEach(row => {
    if (Number(row.Year) !== Number(year)) return;
    const code = normalizeCode_(row['Employee Code']);
    if (!code) return;
    summaries[code] = {
      ptoPlanType: row['PTO Plan Type'] || CONFIG.defaultPtoPlanType,
      annualPto: toNumberOrBlank_(row['Annual PTO Allowance']),
      monthlyPtoAccrualDays: toNumberOrBlank_(row['Monthly PTO Accrual Days']),
      earnedPto: toNumberOrBlank_(row['Earned PTO']),
      usedPto: toNumberOrBlank_(row['Used PTO']),
      remainingPto: toNumberOrBlank_(row['Remaining PTO']),
      payoutEligiblePto: toNumberOrBlank_(row['Payout Eligible PTO']),
      annualNonPto: toNumberOrBlank_(row['Annual Non-PTO Allowance']),
      usedNonPto: toNumberOrBlank_(row['Used Non-PTO']),
      remainingNonPto: toNumberOrBlank_(row['Remaining Non-PTO'])
    };
  });
  return summaries;
}

function calculatePtoBalanceForEmployeeYear_(employee, compRows, requests, employeeCode, year, asOfOverride) {
  const code = normalizeCode_(employeeCode);
  const yearEnd = new Date(year, 11, 31);
  const asOfDate = asOfOverride ? dateOnly_(asOfOverride) : getPtoBalanceAsOfDate_(employee, year);
  const compDate = minDate_(asOfDate, yearEnd);
  const comp = getCompForDate_(compRows, code, compDate) || getCompForYear_(compRows, code, year);
  const planType = normalizePtoPlanType_(comp ? comp['PTO Plan Type'] : '');
  const used = summarizeApprovedTimeOffUsage_(requests, asOfDate)[`${code}|${year}`] || { pto: 0, nonPto: 0 };
  const annualPto = comp ? toNumberOrBlank_(comp['Annual PTO Days']) : '';
  const annualNonPto = comp ? toNumberOrBlank_(comp['Annual Non-PTO Days']) : '';
  const monthlyAccrual = planType === 'Accrued Monthly'
    ? (comp ? toNumberOrBlank_(comp['Monthly PTO Accrual Days']) : '')
    : '';
  const earnedPto = planType === 'Accrued Monthly'
    ? calculateAccruedMonthlyPto_(employee, compRows, code, year, asOfDate)
    : annualPto;
  const remainingPto = earnedPto === '' ? '' : round2_(earnedPto - used.pto);
  const payoutEligiblePto = planType === 'Accrued Monthly' && remainingPto !== ''
    ? round2_(Math.max(0, remainingPto))
    : 0;

  return {
    employeeCode: code,
    year,
    ptoPlanType: planType,
    annualPto,
    monthlyPtoAccrualDays: monthlyAccrual,
    earnedPto: earnedPto === '' ? '' : round2_(earnedPto),
    usedPto: round2_(used.pto),
    remainingPto,
    payoutEligiblePto,
    annualNonPto,
    usedNonPto: round2_(used.nonPto),
    remainingNonPto: annualNonPto === '' ? '' : round2_(annualNonPto - used.nonPto)
  };
}

function getPtoBalanceAsOfDate_(employee, year) {
  const today = dateOnly_(new Date());
  const yearEnd = new Date(year, 11, 31);
  const endDate = employee ? parseDateOrBlank_(employee['End Date']) : null;
  if (endDate && endDate.getFullYear() === Number(year)) return dateOnly_(endDate);
  if (Number(year) === today.getFullYear()) return minDate_(today, yearEnd);
  return yearEnd;
}

function calculateAccruedMonthlyPto_(employee, compRows, employeeCode, year, asOfDate) {
  if (!employee) return '';
  const code = normalizeCode_(employeeCode);
  const cutoff = minDate_(dateOnly_(asOfDate), new Date(year, 11, 31));
  let earned = 0;
  let missingRate = false;

  for (let monthStart = new Date(year, 0, 1); monthStart.getTime() <= cutoff.getTime(); monthStart = addMonths_(monthStart, 1)) {
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
    if (monthEnd.getTime() > cutoff.getTime()) continue;
    if (!employeeEmployedForFullCalendarMonth_(employee, monthStart, monthEnd)) continue;
    const comp = getCompForDate_(compRows, code, monthEnd) || getCompForYear_(compRows, code, year);
    if (!comp || normalizePtoPlanType_(comp['PTO Plan Type']) !== 'Accrued Monthly') continue;
    const monthlyRate = toNumberOrBlank_(comp['Monthly PTO Accrual Days']);
    if (monthlyRate === '') {
      missingRate = true;
      continue;
    }
    earned += monthlyRate;
  }

  return missingRate ? '' : round2_(earned);
}

function employeeEmployedForFullCalendarMonth_(employee, monthStart, monthEnd) {
  const start = parseDateOrBlank_(employee['Start Date']);
  const end = parseDateOrBlank_(employee['End Date']);
  return (!start || dateOnly_(start).getTime() <= dateOnly_(monthStart).getTime())
    && (!end || dateOnly_(end).getTime() >= dateOnly_(monthEnd).getTime());
}

function summarizeApprovedTimeOffUsage_(requests, cutoffDate) {
  const usage = {};
  const cutoff = cutoffDate ? dateOnly_(cutoffDate) : null;
  requests.forEach(row => {
    if (row['Status (Pending/Approved/Denied)'] !== 'Approved') return;
    const type = row['Type (PTO/UTO/Non-PTO)'];
    if (type !== 'PTO' && type !== 'Non-PTO') return;
    const code = normalizeCode_(row['Employee Code']);
    const start = parseDateOrBlank_(row['Start Date']);
    const end = parseDateOrBlank_(row['End Date']);
    const units = toNumberOrBlank_(row['Hours/Days']);
    if (!code || !start || !end || units === '') return;
    const totalDays = countInclusiveDays_(start, end);
    if (!totalDays) return;
    const effectiveEnd = cutoff ? minDate_(dateOnly_(end), cutoff) : dateOnly_(end);
    if (effectiveEnd.getTime() < dateOnly_(start).getTime()) return;

    for (let year = start.getFullYear(); year <= effectiveEnd.getFullYear(); year += 1) {
      const segmentStart = maxDate_(dateOnly_(start), new Date(year, 0, 1));
      const segmentEnd = minDate_(effectiveEnd, new Date(year, 11, 31));
      if (segmentStart.getTime() > segmentEnd.getTime()) continue;
      const segmentUnits = units * (countInclusiveDays_(segmentStart, segmentEnd) / totalDays);
      const key = `${code}|${year}`;
      if (!usage[key]) usage[key] = { pto: 0, nonPto: 0 };
      if (type === 'PTO') usage[key].pto += segmentUnits;
      if (type === 'Non-PTO') usage[key].nonPto += segmentUnits;
    }
  });
  return usage;
}

function getPayrollCompRows_() {
  const payroll = requirePayrollSpreadsheet_();
  if (!hasSheet_(payroll, CONFIG.payrollTabs.comp)) {
    throw new Error('Payroll Compensation Master is missing. Run setupPhase1() from the Payroll spreadsheet.');
  }
  return readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
}

function getCompForYear_(compRows, employeeCode, year) {
  const code = normalizeCode_(employeeCode);
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year, 11, 31);
  const candidates = compRows.filter(row => {
    if (normalizeCode_(row['Employee Code']) !== code) return false;
    const effectiveFrom = parseDateOrBlank_(row['Effective From']);
    const effectiveTo = parseDateOrBlank_(row['Effective To']);
    return (!effectiveFrom || dateOnly_(effectiveFrom).getTime() <= yearEnd.getTime())
      && (!effectiveTo || dateOnly_(effectiveTo).getTime() >= yearStart.getTime());
  });
  candidates.sort((a, b) => {
    const aDate = parseDateOrBlank_(a['Effective From']);
    const bDate = parseDateOrBlank_(b['Effective From']);
    return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
  });
  return candidates[0] || null;
}

function sumApprovedMakeupHoursForPeriod_(makeupRows, employeeCode, periodStart, periodEnd) {
  const code = normalizeCode_(employeeCode);
  const start = dateOnly_(periodStart).getTime();
  const end = dateOnly_(periodEnd).getTime();
  return makeupRows.reduce((sum, row) => {
    if (row['Status (Pending/Approved/Denied)'] !== 'Approved') return sum;
    if (normalizeCode_(row['Employee Code']) !== code) return sum;
    const date = parseDateOrBlank_(row.Date);
    if (!date) return sum;
    const time = dateOnly_(date).getTime();
    if (time < start || time > end) return sum;
    return sum + toNumberOrZero_(row['Hours Requested']);
  }, 0);
}

function countInclusiveDays_(startDate, endDate) {
  const start = dateOnly_(startDate).getTime();
  const end = dateOnly_(endDate).getTime();
  if (end < start) return 0;
  return Math.round((end - start) / 86400000) + 1;
}

function getCompFieldConfig_() {
  return [
    { key: 'rampTier', header: 'Ramp Tier', label: 'Ramp Tier', type: 'text' },
    { key: 'monthlyBaseSalary', header: 'Monthly Base Salary', label: 'Monthly Base Salary', type: 'number' },
    { key: 'monthlyBenefits', header: 'Monthly Benefits', label: 'Monthly Benefits', type: 'number' },
    { key: 'monthlyAttendanceBonus', header: 'Monthly Attendance Bonus', label: 'Monthly Attendance Bonus', type: 'number' },
    { key: 'monthlyKpiBonusMax', header: 'Monthly KPI Bonus (Max)', label: 'Monthly KPI Bonus Max', type: 'number' },
    { key: 'quarterlyPaBonus', header: 'Quarterly PA Bonus', label: 'Quarterly PA Bonus', type: 'number' },
    { key: 'annualPtoDays', header: 'Annual PTO Days', label: 'Annual PTO Days', type: 'number' },
    { key: 'annualNonPtoDays', header: 'Annual Non-PTO Days', label: 'Annual Non-PTO Days', type: 'number' },
    { key: 'ptoPlanType', header: 'PTO Plan Type', label: 'PTO Plan Type', type: 'select', options: CONFIG.ptoPlanTypes },
    { key: 'monthlyPtoAccrualDays', header: 'Monthly PTO Accrual Days', label: 'Monthly PTO Accrual Days', type: 'number' }
  ];
}

function normalizeCompComparable_(value) {
  if (value === '' || value === null || value === undefined) return '';
  const number = toNumberOrBlank_(value);
  return number === '' ? String(value).trim() : String(round2_(number));
}

function getCurrentCompRow_(payroll, employeeCode, date) {
  const rows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
  return getCompForDate_(rows, employeeCode, date);
}

function prepareRetroactiveCompAdjustment_(attendance, payroll, employeeCode, oldComp, nextValues, payload) {
  const retroStart = parseDateOrBlank_(payload.retroStart);
  const retroEnd = parseDateOrBlank_(payload.retroEnd);
  const periodId = normalizePeriodId_(payload.adjustmentPeriodId);
  if (!retroStart || !retroEnd) throw new Error('Retroactive Start and End are required.');
  if (dateOnly_(retroStart).getTime() > dateOnly_(retroEnd).getTime()) {
    throw new Error('Retroactive End must be on or after Retroactive Start.');
  }
  if (!periodId) throw new Error('Select the payroll period that should receive the retroactive adjustment.');
  getPayPeriodById_(payroll, periodId);

  const oldBase = toNumberOrBlank_(oldComp['Monthly Base Salary']);
  const newBase = toNumberOrBlank_(nextValues['Monthly Base Salary']);
  if (oldBase === '' || newBase === '' || oldBase === newBase) {
    return { amount: '', periodId: '' };
  }

  const amount = calculateRetroactiveBaseAdjustment_(attendance, employeeCode, oldBase, newBase, retroStart, retroEnd);
  if (!amount) return { amount: 0, periodId: '' };
  return {
    amount: round2_(amount),
    periodId,
    row: [
      periodId,
      normalizeCode_(employeeCode),
      amount >= 0 ? 'Positive Adj' : 'Negative Adj',
      `Retroactive base salary change for ${displayDate_(retroStart)} to ${displayDate_(retroEnd)}.`,
      round2_(Math.abs(amount)),
      getActiveUserEmail_(),
      new Date()
    ]
  };
}

function calculateRetroactiveBaseAdjustment_(attendance, employeeCode, oldMonthlyBase, newMonthlyBase, startDate, endDate) {
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const start = dateOnly_(startDate);
  const end = dateOnly_(endDate);
  let amount = 0;

  for (let month = new Date(start.getFullYear(), start.getMonth(), 1); month.getTime() <= end.getTime(); month = addMonths_(month, 1)) {
    const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
    const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const segmentStart = maxDate_(start, monthStart);
    const segmentEnd = minDate_(end, monthEnd);
    const scheduledInMonth = countScheduledDaysInMonth_(schedules, employeeCode, monthStart);
    const scheduledInSegment = countScheduledDaysInRange_(schedules, employeeCode, segmentStart, segmentEnd);
    if (!scheduledInMonth || !scheduledInSegment) continue;
    amount += ((newMonthlyBase - oldMonthlyBase) / scheduledInMonth) * scheduledInSegment;
  }
  return round2_(amount);
}

function countScheduledDaysInRange_(schedules, employeeCode, startDate, endDate) {
  let count = 0;
  for (let cursor = dateOnly_(startDate); cursor.getTime() <= dateOnly_(endDate).getTime(); cursor = addDays_(cursor, 1)) {
    const schedule = getScheduleForDate_(schedules, employeeCode, cursor);
    const daySchedule = getDaySchedule_(schedule, cursor);
    if (daySchedule.isScheduled) count += 1;
  }
  return count;
}

function listEmployeesForLifecycleUi_(statuses) {
  const attendance = requireAttendanceSpreadsheet_();
  const statusSet = new Set(statuses || []);
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => statusSet.has(row.Status || ''))
    .map(row => ({
      employeeCode: normalizeCode_(row['Employee Code']),
      displayName: row['Display Name'] || row['Full Name'] || row['Employee Code'],
      fullName: row['Full Name'] || '',
      status: row.Status || '',
      position: row.Position || '',
      manager: row.Manager || '',
      startDate: displayDate_(row['Start Date']),
      endDate: displayDate_(row['End Date'])
    }));
}

function getEmployeeRowByCodeAnyStatus_(attendance, employeeCode) {
  const code = normalizeCode_(employeeCode);
  if (!code) return null;
  const rows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => normalizeCode_(row['Employee Code']) === code);
  return rows.length ? rows[rows.length - 1] : null;
}

function getFirstDayOfNextMonth_() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + 1, 1);
}

function buildFinalPayrollPlan_(payroll, employeeCode, lastWorkingDay) {
  const code = normalizeCode_(employeeCode);
  const lastDay = dateOnly_(lastWorkingDay);
  const periods = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods));
  const matching = periods.filter(period => {
    const start = parseDateOrBlank_(period['Period Start']);
    const end = parseDateOrBlank_(period['Period End']);
    return start && end && dateOnly_(start).getTime() <= lastDay.getTime() && dateOnly_(end).getTime() >= lastDay.getTime();
  })[0];
  return {
    periodId: `FINAL-${code}-${formatCompactDate_(lastDay)}`,
    payDate: lastDay,
    periodStart: matching ? dateOnly_(parseDateOrBlank_(matching['Period Start'])) : new Date(lastDay.getFullYear(), lastDay.getMonth(), 1),
    periodEnd: lastDay,
    type: matching ? matching['Period Type (Mid / EOM)'] : (lastDay.getDate() <= 15 ? 'EOM' : 'Mid'),
    sourcePeriodId: matching ? normalizePeriodId_(matching['Period ID']) : ''
  };
}

function createOrUpdateFinalPayPeriod_(payroll, plan) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  sheet.getRange('A:A').setNumberFormat('@');
  const row = [
    plan.periodId,
    plan.payDate,
    plan.periodStart,
    plan.periodEnd,
    plan.type,
    'Open'
  ];
  const existing = readObjects_(sheet).filter(period => normalizePeriodId_(period['Period ID']) === plan.periodId)[0];
  if (existing) {
    sheet.getRange(existing._rowNumber, 1, 1, row.length).setValues([row]);
  } else {
    appendRows_(sheet, [row]);
  }
  return plan;
}

function buildFinalPayrollPreview_(attendance, payroll, employeeCode, lastWorkingDay) {
  const code = normalizeCode_(employeeCode);
  const employee = getEmployeeRowByCodeAnyStatus_(attendance, code);
  if (!employee) throw new Error(`${code} was not found.`);
  refreshPtoBalances_(attendance);
  const lastDay = dateOnly_(lastWorkingDay);
  const plan = buildFinalPayrollPlan_(payroll, code, lastDay);
  const comp = getCurrentCompRow_(payroll, code, lastDay);
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const monthStart = new Date(lastDay.getFullYear(), lastDay.getMonth(), 1);
  const scheduledInMonth = countScheduledDaysInRateMonth_(schedules, code, lastDay);
  const eligibleDays = countScheduledDaysInRange_(schedules, code, monthStart, lastDay);
  const monthlyBenefit = comp ? toNumberOrBlank_(comp['Monthly Benefits']) : '';
  const benefitPreview = monthlyBenefit === '' || !scheduledInMonth
    ? ''
    : round2_(monthlyBenefit * (eligibleDays / scheduledInMonth));
  const kpi = getFinalKpiPreview_(attendance, payroll, code, lastDay, plan);
  const ptoPayout = calculatePtoPayoutForOffboarding_(attendance, payroll, code, lastDay.getFullYear(), lastDay);
  return {
    employeeCode: code,
    employee: employee['Display Name'] || employee['Full Name'] || code,
    finalPeriodId: plan.periodId,
    periodStart: displayDate_(plan.periodStart),
    periodEnd: displayDate_(plan.periodEnd),
    sourcePeriodId: plan.sourcePeriodId,
    monthlyBenefit,
    benefitPreview,
    scheduledInMonth,
    eligibleDays,
    attendanceBonus: 'Forfeited',
    kpi,
    ptoPayout: ptoPayout.amount,
    ptoPayoutNote: ptoPayout.note
  };
}

function calculatePtoPayoutForOffboarding_(attendance, payroll, employeeCode, year, rateReferenceDate) {
  const code = normalizeCode_(employeeCode);
  const lastDay = dateOnly_(rateReferenceDate);
  const employee = getEmployeeRowByCodeAnyStatus_(attendance, code);
  const compRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
  const requests = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests));
  const balance = calculatePtoBalanceForEmployeeYear_(employee, compRows, requests, code, year, lastDay);
  if (balance.ptoPlanType !== 'Accrued Monthly') {
    const yearEnd = new Date(year, 11, 31);
    return {
      amount: 0,
      eligibleDays: 0,
      dailyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: lastDay.getTime() < yearEnd.getTime()
        ? 'PTO payout: $0.00. Fixed Annual PTO is not eligible for unused PTO cash payout before year-end.'
        : 'PTO payout: $0.00. Fixed Annual PTO does not create an automatic final-payroll payout.'
    };
  }

  const eligiblePto = toNumberOrBlank_(balance.payoutEligiblePto);
  if (eligiblePto === '' || eligiblePto <= 0) {
    return {
      amount: 0,
      eligibleDays: eligiblePto === '' ? '' : 0,
      dailyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: 'PTO payout: no remaining accrued PTO days are currently eligible for payout.'
    };
  }

  const comp = getCompForDate_(compRows, code, lastDay);
  const monthlyBase = comp ? toNumberOrBlank_(comp['Monthly Base Salary']) : '';
  if (monthlyBase === '') {
    return {
      amount: '',
      eligibleDays: eligiblePto,
      dailyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: 'PTO payout cannot be calculated because Monthly Base Salary is blank. Benefits are excluded from this calculation.'
    };
  }

  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const scheduledDaysInMonth = countScheduledDaysInRateMonth_(schedules, code, lastDay);
  if (!scheduledDaysInMonth) {
    return {
      amount: '',
      eligibleDays: eligiblePto,
      dailyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: 'PTO payout cannot be calculated because no scheduled days were found for the rate reference month.'
    };
  }

  const dailyBaseRate = monthlyBase / scheduledDaysInMonth;
  const amount = round2_(eligiblePto * dailyBaseRate * 1.5);
  return {
    amount,
    eligibleDays: round2_(eligiblePto),
    dailyBaseRate: round2_(dailyBaseRate),
    ptoPlanType: balance.ptoPlanType,
    note: `Accrued Monthly PTO payout included in final payroll: ${round2_(eligiblePto)} remaining accrued PTO day(s) x ${round2_(dailyBaseRate)} daily base rate x 1.5. Benefits excluded.`
  };
}

function getFinalKpiPreview_(attendance, payroll, employeeCode, lastWorkingDay, plan) {
  const code = normalizeCode_(employeeCode);
  const bonusRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.bonuses))
    .filter(row => normalizeCode_(row['Employee Code']) === code && row['Type (KPI / Additional / Positive Adj / Negative Adj)'] === 'KPI' && toNumberOrZero_(row.Amount) > 0);
  const source = bonusRows.filter(row => normalizePeriodId_(row['Pay Period ID']) === plan.sourcePeriodId)[0] || null;
  if (!source) {
    return {
      approvedAmount: '',
      proratedAmount: '',
      sourcePeriodId: '',
      note: 'No approved KPI entry was found for the source pay period.'
    };
  }
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const lastDay = dateOnly_(lastWorkingDay);
  const monthStart = new Date(lastDay.getFullYear(), lastDay.getMonth(), 1);
  const scheduledInMonth = countScheduledDaysInRateMonth_(schedules, code, lastDay);
  const eligibleDays = countScheduledDaysInRange_(schedules, code, monthStart, lastDay);
  const approvedAmount = toNumberOrZero_(source.Amount);
  const proratedAmount = scheduledInMonth ? round2_(approvedAmount * (eligibleDays / scheduledInMonth)) : 0;
  return {
    approvedAmount,
    proratedAmount,
    sourcePeriodId: normalizePeriodId_(source['Pay Period ID']),
    eligibleDays,
    scheduledInMonth,
    note: `${eligibleDays} of ${scheduledInMonth} scheduled day(s) eligible.`
  };
}

function upsertFinalKpiBonus_(attendance, payroll, employeeCode, finalPeriod, lastWorkingDay) {
  const preview = getFinalKpiPreview_(attendance, payroll, employeeCode, lastWorkingDay, finalPeriod);
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.bonuses);
  const replacements = preview.proratedAmount ? [[
      finalPeriod.periodId,
      normalizeCode_(employeeCode),
      'KPI',
      `Final payroll KPI proration from ${preview.sourcePeriodId}. ${preview.note}`,
      round2_(preview.proratedAmount),
      getActiveUserEmail_(),
      new Date()
    ]] : [];
  replaceBonusAdjustmentRows_(sheet, finalPeriod.periodId, ['KPI'], [employeeCode], replacements);
}

function upsertFinalPtoPayoutAdjustment_(attendance, payroll, employeeCode, finalPeriod, lastWorkingDay) {
  const payout = calculatePtoPayoutForOffboarding_(attendance, payroll, employeeCode, lastWorkingDay.getFullYear(), lastWorkingDay);
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.bonuses);
  removeFinalPtoPayoutAdjustmentRows_(sheet, finalPeriod.periodId, employeeCode);
  if (payout.amount === '' || !payout.amount) return payout;

  appendRows_(sheet, [[
    finalPeriod.periodId,
    normalizeCode_(employeeCode),
    'Positive Adj',
    `Accrued PTO payout: ${round2_(payout.eligibleDays)} day(s) x ${round2_(payout.dailyBaseRate)} daily base rate x 1.5. Benefits excluded.`,
    round2_(payout.amount),
    getActiveUserEmail_(),
    new Date()
  ]]);
  return payout;
}

function removeFinalPtoPayoutAdjustmentRows_(sheet, periodId, employeeCode) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return;
  const headers = values[0];
  const periodIdx = headers.indexOf('Pay Period ID');
  const codeIdx = headers.indexOf('Employee Code');
  const typeIdx = headers.indexOf('Type (KPI / Additional / Positive Adj / Negative Adj)');
  const descriptionIdx = headers.indexOf('Description');
  for (let row = values.length - 1; row >= 1; row -= 1) {
    const matchesPeriod = normalizePeriodId_(values[row][periodIdx]) === normalizePeriodId_(periodId);
    const matchesCode = normalizeCode_(values[row][codeIdx]) === normalizeCode_(employeeCode);
    const matchesType = values[row][typeIdx] === 'Positive Adj';
    const description = String(values[row][descriptionIdx] || '');
    if (matchesPeriod && matchesCode && matchesType && description.indexOf('Accrued PTO payout:') === 0) {
      sheet.deleteRow(row + 1);
    }
  }
}

function setEmployeeEndDate_(attendance, employeeCode, endDate) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const row = getEmployeeRowByCode_(attendance, employeeCode);
  if (!row) throw new Error(`${employeeCode} is not active.`);
  sheet.getRange(row._rowNumber, 6).setValue(dateOnly_(endDate));
}

function setEmployeeStatus_(attendance, employeeCode, status, endDate) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const row = getEmployeeRowByCodeAnyStatus_(attendance, employeeCode);
  if (!row) throw new Error(`${employeeCode} was not found.`);
  sheet.getRange(row._rowNumber, 4).setValue(status);
  sheet.getRange(row._rowNumber, 6).setValue(dateOnly_(endDate));
}

function updateEmployeeForReactivation_(attendance, employeeCode, startDate, payload) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const row = getEmployeeRowByCodeAnyStatus_(attendance, employeeCode);
  if (!row) throw new Error(`${employeeCode} was not found.`);
  sheet.getRange(row._rowNumber, 4, 1, 5).setValues([[
    'Active',
    dateOnly_(startDate),
    '',
    payload.position || row.Position || '',
    payload.manager || row.Manager || ''
  ]]);
  if (payload.notes) {
    sheet.getRange(row._rowNumber, 11).setValue([String(row.Notes || '').trim(), String(payload.notes || '').trim()].filter(Boolean).join(' | '));
  }
}

function closeEffectiveRowsThroughDate_(sheet, employeeCode, effectiveToDate) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const codeIdx = headers.indexOf('Employee Code');
  const fromIdx = headers.indexOf('Effective From');
  const toIdx = headers.indexOf('Effective To');
  if (codeIdx === -1 || fromIdx === -1 || toIdx === -1) return 0;
  const code = normalizeCode_(employeeCode);
  const closeDate = dateOnly_(effectiveToDate);
  let updated = 0;
  for (let row = 1; row < values.length; row += 1) {
    if (normalizeCode_(values[row][codeIdx]) !== code) continue;
    const from = parseDateOrBlank_(values[row][fromIdx]);
    const to = parseDateOrBlank_(values[row][toIdx]);
    if (from && dateOnly_(from).getTime() > closeDate.getTime()) continue;
    if (to && dateOnly_(to).getTime() <= closeDate.getTime()) continue;
    sheet.getRange(row + 1, toIdx + 1).setValue(closeDate);
    updated += 1;
  }
  return updated;
}

function isFinalPayroll_(period) {
  return normalizePeriodId_(period['Period ID']).indexOf('FINAL-') === 0;
}

function getDefaultAttendanceLogStartDate_(ss) {
  const eventRows = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.events));
  const eventDates = eventRows.map(row => parseDateOrBlank_(row.Timestamp)).filter(Boolean);
  if (eventDates.length) {
    return dateOnly_(new Date(Math.min.apply(null, eventDates.map(date => date.getTime()))));
  }
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1);
}

function getTodayWindow_() {
  const today = dateOnly_(new Date());
  return { start: today, end: endOfDay_(today) };
}

function getDaySchedule_(schedule, date) {
  if (!schedule) return { isScheduled: false, start: '', end: '', lunchStart: '', lunchEnd: '' };
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const start = schedule[`${day} Start`];
  const end = schedule[`${day} End`];
  return {
    isScheduled: start !== '' && start !== null && end !== '' && end !== null,
    start: toNumberOrBlank_(start),
    end: toNumberOrBlank_(end),
    lunchStart: toNumberOrBlank_(schedule['Scheduled Lunch Start']),
    lunchEnd: toNumberOrBlank_(schedule['Scheduled Lunch End'])
  };
}

function getScheduleForDate_(schedules, employeeCode, date) {
  const code = normalizeCode_(employeeCode);
  const candidates = schedules.filter(row => {
    if (normalizeCode_(row['Employee Code']) !== code) return false;
    const effectiveFrom = parseDateOrBlank_(row['Effective From']);
    const effectiveTo = parseDateOrBlank_(row['Effective To']);
    return (!effectiveFrom || dateOnly_(effectiveFrom).getTime() <= dateOnly_(date).getTime())
      && (!effectiveTo || dateOnly_(effectiveTo).getTime() >= dateOnly_(date).getTime());
  });
  candidates.sort((a, b) => {
    const aDate = parseDateOrBlank_(a['Effective From']);
    const bDate = parseDateOrBlank_(b['Effective From']);
    return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
  });
  return candidates[0] || null;
}

function getCompForDate_(compRows, employeeCode, date) {
  const code = normalizeCode_(employeeCode);
  const candidates = compRows.filter(row => {
    if (normalizeCode_(row['Employee Code']) !== code) return false;
    const effectiveFrom = parseDateOrBlank_(row['Effective From']);
    const effectiveTo = parseDateOrBlank_(row['Effective To']);
    return (!effectiveFrom || dateOnly_(effectiveFrom).getTime() <= dateOnly_(date).getTime())
      && (!effectiveTo || dateOnly_(effectiveTo).getTime() >= dateOnly_(date).getTime());
  });
  candidates.sort((a, b) => {
    const aDate = parseDateOrBlank_(a['Effective From']);
    const bDate = parseDateOrBlank_(b['Effective From']);
    return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
  });
  return candidates[0] || null;
}

function countScheduledDaysInMonth_(schedules, employeeCode, dateInMonth) {
  const start = new Date(dateInMonth.getFullYear(), dateInMonth.getMonth(), 1);
  const end = new Date(dateInMonth.getFullYear(), dateInMonth.getMonth() + 1, 0);
  let count = 0;
  for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays_(cursor, 1)) {
    const schedule = getScheduleForDate_(schedules, employeeCode, cursor);
    const daySchedule = getDaySchedule_(schedule, cursor);
    if (daySchedule.isScheduled) count += 1;
  }
  return count;
}

function countScheduledDaysInRateMonth_(schedules, employeeCode, dateInMonth) {
  const monthStart = new Date(dateInMonth.getFullYear(), dateInMonth.getMonth(), 1);
  const monthEnd = new Date(dateInMonth.getFullYear(), dateInMonth.getMonth() + 1, 0);
  const rateSchedule = getScheduleForDate_(schedules, employeeCode, dateInMonth);
  if (!rateSchedule) return 0;

  let count = 0;
  for (let cursor = monthStart; cursor.getTime() <= monthEnd.getTime(); cursor = addDays_(cursor, 1)) {
    if (getDaySchedule_(rateSchedule, cursor).isScheduled) count += 1;
  }
  return count;
}

function getPaidHoliday_(holidays, date, employeeCode) {
  const key = formatDateKey_(date);
  return holidays.filter(row => {
    if (formatDateKey_(row.Date) !== key) return false;
    if (String(row['Paid? (Y/N)'] || '').toUpperCase() !== 'Y') return false;
    const applies = String(row['Applies To (All / Employee Code list)'] || 'All');
    if (applies.toLowerCase() === 'all') return true;
    return applies.split(',').map(normalizeCode_).indexOf(employeeCode) !== -1;
  })[0] || null;
}

function employeeActiveOnDate_(employee, date) {
  const status = employee.Status || 'Active';
  if (status !== 'Active' && status !== '') return false;
  return employeeEmployedOnDate_(employee, date);
}

function employeeEmployedOnDate_(employee, date) {
  const start = parseDateOrBlank_(employee['Start Date']);
  const end = parseDateOrBlank_(employee['End Date']);
  return (!start || dateOnly_(start).getTime() <= dateOnly_(date).getTime())
    && (!end || dateOnly_(end).getTime() >= dateOnly_(date).getTime());
}

function employeeEmployedInRange_(employee, startDate, endDate) {
  const employmentStart = parseDateOrBlank_(employee['Start Date']);
  const employmentEnd = parseDateOrBlank_(employee['End Date']);
  const rangeStart = dateOnly_(startDate);
  const rangeEnd = dateOnly_(endDate);
  return (!employmentStart || dateOnly_(employmentStart).getTime() <= rangeEnd.getTime())
    && (!employmentEnd || dateOnly_(employmentEnd).getTime() >= rangeStart.getTime());
}

function getConfiguredIds_() {
  const props = PropertiesService.getScriptProperties();
  return {
    attendanceId: props.getProperty(CONFIG.attendanceSpreadsheetIdProp),
    payrollId: props.getProperty(CONFIG.payrollSpreadsheetIdProp)
  };
}

function withScriptLock_(operationName, callback) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) {
    throw new Error(`${operationName} is already running. Wait a moment and try again.`);
  }
  try {
    return callback();
  } finally {
    lock.releaseLock();
  }
}

function requireAttendanceSpreadsheet_() {
  const id = getConfiguredIds_().attendanceId;
  if (!id) throw new Error('Attendance spreadsheet is not configured. Run setupPhase1() or configurePhase1SpreadsheetIds().');
  return SpreadsheetApp.openById(id);
}

function requirePayrollSpreadsheet_() {
  const id = getConfiguredIds_().payrollId;
  if (!id) throw new Error('Payroll spreadsheet is not configured. Run setupPhase1() or configurePhase1SpreadsheetIds().');
  return SpreadsheetApp.openById(id);
}

function getSheet_(ss, name) {
  const sheet = ss.getSheetByName(name);
  if (!sheet) throw new Error(`Missing sheet: ${name}`);
  return sheet;
}

function hasSheet_(ss, name) {
  return Boolean(ss.getSheetByName(name));
}

function readObjects_(sheet) {
  const range = sheet.getDataRange();
  const values = range.getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1)
    .filter(row => row.some(cell => cell !== '' && cell !== null))
    .map((row, rowIndex) => {
      const object = { _rowNumber: rowIndex + 2 };
      headers.forEach((header, index) => {
        object[header] = row[index];
      });
      return object;
    });
}

function appendRows_(sheet, rows) {
  if (!rows.length) return;
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

function writeRowsReplacingData_(sheet, headers, rows) {
  ensureSheet_(sheet.getParent(), sheet.getName(), headers);
  const maxRows = sheet.getMaxRows();
  if (maxRows > 1) {
    sheet.getRange(2, 1, maxRows - 1, sheet.getMaxColumns()).clearContent();
  }
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
}

function mapByCode_(rows) {
  const map = {};
  rows.forEach(row => {
    map[normalizeCode_(row['Employee Code'])] = row;
  });
  return map;
}

function listEmployeesForUi_() {
  const attendance = requireAttendanceSpreadsheet_();
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees)).map(mapEmployeeRowForUi_);
}

function mapEmployeeRowForUi_(row) {
  return {
    employeeCode: normalizeCode_(row['Employee Code']),
    displayName: row['Display Name'] || row['Full Name'] || row['Employee Code'],
    fullName: row['Full Name'] || '',
    status: row.Status || ''
  };
}

function getDefaultOpenPeriodId_(periods) {
  const today = dateOnly_(new Date());
  const open = periods
    .filter(period => period.status === 'Open')
    .map(period => ({ id: period.periodId, payDate: parseDateOrBlank_(period.payDate) }))
    .filter(period => period.payDate)
    .sort((a, b) => Math.abs(a.payDate.getTime() - today.getTime()) - Math.abs(b.payDate.getTime() - today.getTime()));
  return open.length ? open[0].id : (periods[0] ? periods[0].periodId : '');
}

function setPayPeriodStatus_(sheet, periodId, status) {
  periodId = normalizePeriodId_(periodId);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idIdx = headers.indexOf('Period ID');
  const statusIdx = headers.indexOf('Status (Open / Calculated / Paid)');
  for (let i = 1; i < values.length; i += 1) {
    if (normalizePeriodId_(values[i][idIdx]) === periodId) {
      if (values[i][idIdx] !== periodId) {
        sheet.getRange(i + 1, idIdx + 1).setNumberFormat('@').setValue(periodId);
      }
      sheet.getRange(i + 1, statusIdx + 1).setValue(status);
      return;
    }
  }
  throw new Error(`Pay period ${periodId} was not found.`);
}

function buildScheduleRowFromPayload_(employeeCode, effectiveFrom, schedule) {
  return buildScheduleRow_(employeeCode, effectiveFrom || '', {
    days: Object.keys(schedule).filter(day => schedule[day] && schedule[day].enabled),
    start: '',
    end: '',
    lunchStart: toNumberOrBlank_(schedule.lunchStart),
    lunchEnd: toNumberOrBlank_(schedule.lunchEnd),
    byDay: schedule
  });
}

function buildScheduleRow_(employeeCode, effectiveFrom, schedule) {
  const byDay = schedule.byDay || {};
  const daySet = new Set(schedule.days || []);
  function dayValue(day, field) {
    if (byDay[day] && byDay[day].enabled) return toNumberOrBlank_(byDay[day][field]);
    if (daySet.has(day)) return schedule[field] === undefined ? '' : schedule[field];
    return '';
  }
  return [
    employeeCode,
    effectiveFrom || '',
    '',
    dayValue('Mon', 'start'),
    dayValue('Mon', 'end'),
    dayValue('Tue', 'start'),
    dayValue('Tue', 'end'),
    dayValue('Wed', 'start'),
    dayValue('Wed', 'end'),
    dayValue('Thu', 'start'),
    dayValue('Thu', 'end'),
    dayValue('Fri', 'start'),
    dayValue('Fri', 'end'),
    dayValue('Sat', 'start'),
    dayValue('Sat', 'end'),
    dayValue('Sun', 'start'),
    dayValue('Sun', 'end'),
    schedule.lunchStart === undefined ? '' : schedule.lunchStart,
    schedule.lunchEnd === undefined ? '' : schedule.lunchEnd
  ];
}

function suggestEmployeeCode_(name) {
  if (!name) return '';
  return normalizeCode_(String(name).split(/\s+/)[0]);
}

function normalizeCode_(value) {
  return String(value || '').trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
}

function normalizePtoPlanType_(value) {
  const text = String(value || '').trim();
  return CONFIG.ptoPlanTypes.indexOf(text) !== -1 ? text : CONFIG.defaultPtoPlanType;
}

function blankable_(value) {
  return value === undefined || value === null ? '' : value;
}

function toNumberOrBlank_(value) {
  if (value === '' || value === null || value === undefined) return '';
  const number = Number(value);
  return Number.isFinite(number) ? number : '';
}

function toNumberOrZero_(value) {
  const number = toNumberOrBlank_(value);
  return number === '' ? 0 : number;
}

function round2_(value) {
  if (value === '' || value === null || value === undefined) return '';
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function parseDateOrBlank_(value) {
  if (!value) return null;
  if (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value.getTime())) return value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function parseLocalDateTime_(value) {
  if (!value) return null;
  return new Date(value);
}

function dateOnly_(value) {
  const date = parseDateOrBlank_(value) || new Date();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function endOfDay_(value) {
  const date = dateOnly_(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

function addDays_(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function makeDateAtHour_(date, decimalHour) {
  if (decimalHour === '' || decimalHour === null || decimalHour === undefined) return '';
  const hours = Math.floor(Number(decimalHour));
  const minutes = Math.round((Number(decimalHour) - hours) * 60);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes, 0, 0);
}

function formatDateKey_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'yyyy-MM-dd');
}

function formatCompactDate_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'yyyyMMdd');
}

function normalizePeriodId_(value) {
  if (value === null || value === undefined || value === '') return '';
  if (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value.getTime())) {
    return formatDateKey_(value);
  }
  const text = String(value).trim();
  const parsed = text.match(/^(\d{4}-\d{2}-\d{2})T/);
  if (parsed) return parsed[1];
  return text;
}

function repairPayPeriodIds_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  sheet.getRange('A:A').setNumberFormat('@');
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const idIdx = headers.indexOf('Period ID');
  if (idIdx === -1) return 0;
  let repaired = 0;
  for (let row = 1; row < values.length; row += 1) {
    const normalized = normalizePeriodId_(values[row][idIdx]);
    if (normalized && values[row][idIdx] !== normalized) {
      sheet.getRange(row + 1, idIdx + 1).setValue(normalized);
      repaired += 1;
    }
  }
  return repaired;
}

function formatDateTimeLocal_(value) {
  const date = parseDateOrBlank_(value) || new Date();
  return Utilities.formatDate(date, CONFIG.timezone, "yyyy-MM-dd'T'HH:mm");
}

function displayDate_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'yyyy-MM-dd');
}

function displayTime_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'h:mm a');
}

function formatMonthKey_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'yyyy-MM');
}

function getMonthWindow_(monthKey) {
  const parts = String(monthKey || '').split('-');
  const year = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 0 || month > 11) {
    throw new Error(`Invalid month: ${monthKey}`);
  }
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  return {
    key: `${year}-${pad2_(month + 1)}`,
    label: Utilities.formatDate(start, CONFIG.timezone, 'MMMM yyyy'),
    start,
    end
  };
}

function addMonths_(date, months) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

function getQuarterWindowForMonth_(dateInQuarter) {
  const date = parseDateOrBlank_(dateInQuarter);
  const quarterStartMonth = Math.floor(date.getMonth() / 3) * 3;
  const start = new Date(date.getFullYear(), quarterStartMonth, 1);
  const end = new Date(date.getFullYear(), quarterStartMonth + 3, 0);
  return { start, end };
}

function getQuarterLabel_(dateInQuarter) {
  const date = parseDateOrBlank_(dateInQuarter);
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  return `${date.getFullYear()} Q${quarter}`;
}

function isQuarterEndMonth_(date) {
  const month = parseDateOrBlank_(date).getMonth();
  return [2, 5, 8, 11].indexOf(month) !== -1;
}

function minDate_(a, b) {
  return a.getTime() <= b.getTime() ? a : b;
}

function maxDate_(a, b) {
  return a.getTime() >= b.getTime() ? a : b;
}

function minutesSinceMidnight_(date) {
  return date.getHours() * 60 + date.getMinutes();
}

function displayMinutesAsTime_(minutes) {
  const rounded = Math.round(minutes);
  const hours = Math.floor(rounded / 60);
  const mins = rounded % 60;
  return Utilities.formatDate(new Date(2000, 0, 1, hours, mins), CONFIG.timezone, 'h:mm a');
}

function formatHour_(decimalHour) {
  if (decimalHour === '' || decimalHour === null || decimalHour === undefined) return '';
  return displayTime_(makeDateAtHour_(new Date(2000, 0, 1), Number(decimalHour)));
}

function average_(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + Number(value), 0) / values.length;
}

function pad2_(value) {
  return String(value).padStart(2, '0');
}

function makeId_(prefix) {
  return `${prefix}-${Utilities.formatDate(new Date(), CONFIG.timezone, 'yyyyMMdd-HHmmss')}-${Utilities.getUuid().slice(0, 8).toUpperCase()}`;
}

function getActiveUserEmail_() {
  try {
    return Session.getActiveUser().getEmail() || '';
  } catch (error) {
    return '';
  }
}

function csvEscape_(value) {
  const text = value === null || value === undefined ? '' : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
