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
  attendanceTabs: {
    employees: 'Employees',
    schedules: 'Work Schedules',
    holidays: 'Holidays',
    events: 'Clock Events',
    log: 'Attendance Log'
  },
  payrollTabs: {
    comp: 'Compensation Master',
    periods: 'Pay Periods',
    calculations: 'Payroll Calculations',
    output: 'Payroll Output',
    lifecycle: 'Employee Lifecycle Log'
  }
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
    'Notes'
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
    'Calculated Total',
    'Status',
    'Notes'
  ],
  output: ['Employee', 'Period', 'Base', 'Deductions', 'Benefits', 'Att. Bonus', 'KPI Bonus', 'Other Bonus', 'Adjustments', 'TOTAL', 'Status', 'Notes'],
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
    .addSeparator()
    .addItem('Add Clock Event Manually...', 'showAddClockEventDialog')
    .addItem('Edit Attendance Log Entry...', 'showEditAttendanceLogDialog')
    .addItem('Rebuild Attendance Log', 'rebuildAttendanceLogFromMenu')
    .addSeparator()
    .addItem('Add New Employee...', 'showAddEmployeeDialog')
    .addSeparator()
    .addItem('About / Help', 'showAboutHelp')
    .addToUi();
}

function addPayrollMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('Payroll')
    .addItem('Calculate Pay Period...', 'showCalculatePayPeriodDialog')
    .addItem('Refresh Attendance Data', 'refreshAttendanceDataFromMenu')
    .addItem('Finalize & Mark as Paid', 'markSelectedPayPeriodPaidFromMenu')
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
    'Payroll & Attendance Phase 1',
    'Phase 1 includes self-service clock events, attendance log rebuilding, basic employee onboarding, and base payroll calculations with late/absence deductions. Compensation values left blank in the PRD remain blank in Compensation Master.',
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

function showCalculatePayPeriodDialog() {
  const html = HtmlService.createHtmlOutputFromFile('CalculatePayPeriodDialog').setWidth(700).setHeight(640);
  SpreadsheetApp.getUi().showModalDialog(html, 'Calculate Pay Period');
}

function rebuildAttendanceLogFromMenu() {
  const result = rebuildAttendanceLog();
  SpreadsheetApp.getUi().alert('Attendance Log rebuilt', `${result.rowsWritten} rows written for ${result.startDate} through ${result.endDate}.`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function refreshAttendanceDataFromMenu() {
  const result = rebuildAttendanceLog();
  SpreadsheetApp.getUi().alert('Attendance data refreshed', `${result.rowsWritten} attendance rows are ready for payroll calculations.`, SpreadsheetApp.getUi().ButtonSet.OK);
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

  return {
    authenticated: true,
    employee: {
      employeeCode: employee['Employee Code'],
      displayName: employee['Display Name'] || employee['Full Name'] || employee['Employee Code']
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
    identity: {
      employeeCode: employee['Employee Code'],
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
    statuses: ['Active', 'Inactive', 'Resigned', 'Terminated']
  };
}

function addEmployee(payload) {
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
    comp.notes || (payload.includeComp ? '' : 'Compensation pending payroll processor setup.')
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

function getCalculatePayPeriodDialogData() {
  const payroll = requirePayrollSpreadsheet_();
  const periods = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods)).map(row => ({
    periodId: row['Period ID'],
    payDate: displayDate_(row['Pay Date']),
    periodStart: displayDate_(row['Period Start']),
    periodEnd: displayDate_(row['Period End']),
    type: row['Period Type (Mid / EOM)'],
    status: row['Status (Open / Calculated / Paid)']
  }));
  return {
    periods,
    defaultPeriodId: getDefaultOpenPeriodId_(periods),
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active')
  };
}

function calculatePayPeriod(payload) {
  payload = payload || {};
  const periodId = payload.periodId;
  if (!periodId) throw new Error('Select a pay period.');

  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  const periodSheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  const periodRows = readObjects_(periodSheet);
  const period = periodRows.filter(row => row['Period ID'] === periodId)[0];
  if (!period) throw new Error(`Pay period ${periodId} was not found.`);

  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  if (!periodStart || !periodEnd) throw new Error(`Pay period ${periodId} is missing start or end dates.`);

  rebuildAttendanceLog({ startDate: formatDateKey_(periodStart), endDate: formatDateKey_(periodEnd) });

  const requestedCodes = (payload.employeeCodes || []).map(normalizeCode_).filter(Boolean);
  const activeEmployees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => row['Status'] === 'Active');
  const employeeCodes = requestedCodes.length ? requestedCodes : activeEmployees.map(row => normalizeCode_(row['Employee Code']));

  const context = buildPayrollContext_(attendance, payroll, periodStart, periodEnd);
  const calculations = [];
  const outputRows = [];
  const warnings = [];

  employeeCodes.forEach(code => {
    const result = calculateEmployeePay_(code, period, context);
    calculations.push(result.calculationRow);
    outputRows.push(result.outputRow);
    if (result.warning) warnings.push(result.warning);
  });

  writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.calculations), HEADERS.calculations, calculations);
  writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.output), HEADERS.output, outputRows);
  setPayPeriodStatus_(periodSheet, periodId, 'Calculated');
  applyPayrollFormatting_(payroll);

  return {
    message: `Calculated ${outputRows.length} employees for ${periodId}.`,
    warnings
  };
}

function markPayPeriodPaid(periodId) {
  const payroll = requirePayrollSpreadsheet_();
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
    .filter(row => row['Status'] === 'Active' || row['Status'] === '');
  const schedules = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.schedules));
  const events = getClockEvents_(ss, startDate, endOfDay_(endDate));
  const holidays = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.holidays));
  const overrides = readAttendanceStatusOverrides_(ss, startDate, endDate);
  const eventsByKey = groupEventsByDateEmployee_(events);
  const rows = [];

  for (let cursor = dateOnly_(startDate); cursor.getTime() <= dateOnly_(endDate).getTime(); cursor = addDays_(cursor, 1)) {
    employees.forEach(employee => {
      if (!employeeActiveOnDate_(employee, cursor)) return;
      const code = normalizeCode_(employee['Employee Code']);
      const schedule = getScheduleForDate_(schedules, code, cursor);
      const key = `${formatDateKey_(cursor)}|${code}`;
      const rowEvents = eventsByKey[key] || [];
      const overrideStatus = overrides[key];
      rows.push(buildAttendanceLogRow_(cursor, employee, schedule, rowEvents, holidays, overrideStatus));
    });
  }

  writeRowsReplacingData_(getSheet_(ss, CONFIG.attendanceTabs.log), HEADERS.log, rows);
  applyAttendanceFormatting_(ss);
  return {
    rowsWritten: rows.length,
    startDate: formatDateKey_(startDate),
    endDate: formatDateKey_(endDate)
  };
}

function setupAttendanceSpreadsheet_(ss) {
  ensureSheet_(ss, CONFIG.attendanceTabs.employees, HEADERS.employees);
  ensureSheet_(ss, CONFIG.attendanceTabs.schedules, HEADERS.schedules);
  ensureSheet_(ss, CONFIG.attendanceTabs.holidays, HEADERS.holidays);
  ensureSheet_(ss, CONFIG.attendanceTabs.events, HEADERS.events);
  ensureSheet_(ss, CONFIG.attendanceTabs.log, HEADERS.log);
  removeDefaultBlankSheet_(ss);
  applyAttendanceFormatting_(ss);
}

function setupPayrollSpreadsheet_(ss) {
  ensureSheet_(ss, CONFIG.payrollTabs.comp, HEADERS.comp);
  ensureSheet_(ss, CONFIG.payrollTabs.periods, HEADERS.periods);
  ensureSheet_(ss, CONFIG.payrollTabs.calculations, HEADERS.calculations);
  ensureSheet_(ss, CONFIG.payrollTabs.output, HEADERS.output);
  ensureSheet_(ss, CONFIG.payrollTabs.lifecycle, HEADERS.lifecycle);
  seedPayPeriods_(ss, new Date().getFullYear());
  removeDefaultBlankSheet_(ss);
  applyPayrollFormatting_(ss);
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
      employee.notes
    ]);
  });

  appendRows_(employeeSheet, employeeRows);
  appendRows_(scheduleSheet, scheduleRows);
  appendRows_(compSheet, compRows);
  applyAttendanceFormatting_(attendance);
  applyPayrollFormatting_(payroll);
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
    employees: mapByCode_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))),
    schedules: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules)),
    attendanceRows: readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log)),
    compRows: readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp)),
    periodStart,
    periodEnd
  };
}

function calculateEmployeePay_(employeeCode, period, context) {
  const code = normalizeCode_(employeeCode);
  const employee = context.employees[code];
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  const periodLabel = `${period['Period ID']} (${displayDate_(periodStart)} - ${displayDate_(periodEnd)})`;
  const employeeName = employee ? (employee['Display Name'] || employee['Full Name'] || code) : code;

  if (!employee) {
    return blankPayrollResult_(period, code, employeeName, 'Needs review', 'Employee was not found in Attendance Employees.');
  }

  const comp = getCompForDate_(context.compRows, code, periodEnd);
  const monthlyBase = comp ? toNumberOrBlank_(comp['Monthly Base Salary']) : '';
  if (monthlyBase === '') {
    return blankPayrollResult_(period, code, employeeName, 'Needs comp', 'Monthly Base Salary is blank in Compensation Master.');
  }

  const scheduledDaysInMonth = countScheduledDaysInMonth_(context.schedules, code, periodStart);
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
      workedHours += worked;
      if (worked < 8) shortHours += 8 - worked;
    }
  });

  const scheduledBase = scheduledDays * 8 * hourlyBaseRate;
  const lateDeduction = (lateMinutes / 60) * hourlyBaseRate;
  const absenceDeduction = absentDays * 8 * hourlyBaseRate;
  const shortHoursDeduction = shortHours * hourlyBaseRate;
  const totalDeductions = lateDeduction + absenceDeduction + shortHoursDeduction;
  const canPay = incompleteDays === 0;
  const total = canPay ? scheduledBase - totalDeductions : '';
  const notes = [];
  if (absentDays) notes.push(`${absentDays} absent day(s).`);
  if (incompleteDays) notes.push(`${incompleteDays} incomplete day(s); verify clock events before payment.`);
  if (!scheduledDays) notes.push('No scheduled days in this pay period.');

  const calculationRow = [
    period['Period ID'],
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
    total === '' ? '' : round2_(total),
    canPay ? 'Calculated' : 'Needs review',
    notes.join(' ')
  ];

  const outputRow = [
    employeeName,
    periodLabel,
    round2_(scheduledBase),
    round2_(totalDeductions),
    '',
    '',
    '',
    '',
    '',
    total === '' ? '' : round2_(total),
    canPay ? 'Calculated' : 'Needs review',
    notes.join(' ')
  ];

  return {
    calculationRow,
    outputRow,
    warning: notes.length ? `${employeeName}: ${notes.join(' ')}` : ''
  };
}

function blankPayrollResult_(period, employeeCode, employeeName, status, note) {
  const periodStart = parseDateOrBlank_(period['Period Start']);
  const periodEnd = parseDateOrBlank_(period['Period End']);
  const periodLabel = `${period['Period ID']} (${displayDate_(periodStart)} - ${displayDate_(periodEnd)})`;
  return {
    calculationRow: [
      period['Period ID'],
      employeeCode,
      employeeName,
      periodStart || '',
      periodEnd || '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      status,
      note
    ],
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

  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.employees), 4, ['Active', 'Inactive', 'Resigned', 'Terminated']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 4, CONFIG.eventTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 5, ['WEB_APP', 'MANUAL', 'IMPORTED']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.log), 16, CONFIG.statuses);

  getSheet_(ss, CONFIG.attendanceTabs.employees).getRange('E:F').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.events).getRange('B:B').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('A:A').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('D:M').setNumberFormat('h:mm AM/PM');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('N:O').setNumberFormat('0.00');
  applySpreadsheetChrome_(ss, 'attendance');
}

function applyPayrollFormatting_(ss) {
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.comp), HEADERS.comp.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.periods), HEADERS.periods.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.calculations), HEADERS.calculations.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.output), HEADERS.output.length);
  setupSheetFormatting_(getSheet_(ss, CONFIG.payrollTabs.lifecycle), HEADERS.lifecycle.length);

  setValidation_(getSheet_(ss, CONFIG.payrollTabs.periods), 5, ['Mid', 'EOM']);
  setValidation_(getSheet_(ss, CONFIG.payrollTabs.periods), 6, ['Open', 'Calculated', 'Paid']);
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('B:C').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.comp).getRange('E:I').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.periods).getRange('B:D').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('D:E').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('H:J').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('M:M').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('O:O').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.calculations).getRange('Q:T').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.output).getRange('C:J').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.lifecycle).getRange('D:E').setNumberFormat('yyyy-mm-dd h:mm AM/PM');
  applySpreadsheetChrome_(ss, 'payroll');
}

function applySpreadsheetChrome_(ss, workbookType) {
  const tabColor = workbookType === 'payroll' ? UI_THEME.ink : UI_THEME.accent;
  ss.getSheets().forEach(sheet => {
    sheet.setTabColor(tabColor);
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
  const existing = readObjects_(sheet);
  if (existing.length) return;
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
  const status = overrideStatus || derivedStatus;

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
  return overrides;
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
  const start = parseDateOrBlank_(employee['Start Date']);
  const end = parseDateOrBlank_(employee['End Date']);
  return (!start || dateOnly_(start).getTime() <= dateOnly_(date).getTime())
    && (!end || dateOnly_(end).getTime() >= dateOnly_(date).getTime());
}

function getConfiguredIds_() {
  const props = PropertiesService.getScriptProperties();
  return {
    attendanceId: props.getProperty(CONFIG.attendanceSpreadsheetIdProp),
    payrollId: props.getProperty(CONFIG.payrollSpreadsheetIdProp)
  };
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
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees)).map(row => ({
    employeeCode: normalizeCode_(row['Employee Code']),
    displayName: row['Display Name'] || row['Full Name'] || row['Employee Code'],
    fullName: row['Full Name'] || '',
    status: row.Status || ''
  }));
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
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idIdx = headers.indexOf('Period ID');
  const statusIdx = headers.indexOf('Status (Open / Calculated / Paid)');
  for (let i = 1; i < values.length; i += 1) {
    if (values[i][idIdx] === periodId) {
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

function blankable_(value) {
  return value === undefined || value === null ? '' : value;
}

function toNumberOrBlank_(value) {
  if (value === '' || value === null || value === undefined) return '';
  const number = Number(value);
  return Number.isFinite(number) ? number : '';
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

function formatDateTimeLocal_(value) {
  const date = parseDateOrBlank_(value) || new Date();
  return Utilities.formatDate(date, CONFIG.timezone, "yyyy-MM-dd'T'HH:mm");
}

function displayDate_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return Utilities.formatDate(date, CONFIG.timezone, 'yyyy-MM-dd');
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
