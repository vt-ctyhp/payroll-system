const CONFIG = {
  attendanceSpreadsheetName: 'Payroll System - Attendance',
  payrollSpreadsheetName: 'Payroll System - Payroll',
  attendanceSpreadsheetIdProp: 'ATTENDANCE_SPREADSHEET_ID',
  payrollSpreadsheetIdProp: 'PAYROLL_SPREADSHEET_ID',
  portalAdminAccessKeyHashProp: 'PORTAL_ADMIN_ACCESS_KEY_HASH',
  portalAdminAccessKeySaltProp: 'PORTAL_ADMIN_ACCESS_KEY_SALT',
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
  departments: ['Operations', 'HR', 'Marketing', 'Advertising'],
  portalRoles: ['Employee', 'Attendance Admin', 'Payroll Admin'],
  defaultPortalRole: 'Employee',
  sheetTimeFormat: 'hh:mmam/pm',
  sheetDateTimeFormat: 'yyyy-mm-dd hh:mmam/pm',
  legacyDayHours: 8,
  standardFullDayLunchHours: 1,
  realTimesheetImportMarker: 'REAL_TIMESHEET_IMPORT',
  realTimesheetEventIdPrefix: 'REAL-TS-',
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
    timestampRevisions: 'Timestamp Revision Requests',
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

let PORTAL_AUTH_IDENTITY_CONTEXT_ = null;

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

const TIMESHEET_IMPORT_INTERVAL_SPECS = [
  { role: 'lunch', label: 'Lunch', durationIndex: 32, startIndex: 33, endIndex: 34 },
  { role: 'lunch', label: 'Lunch', durationIndex: 35, startIndex: 36, endIndex: 37 },
  { role: 'break', label: 'Break 1', durationIndex: 38, startIndex: 39, endIndex: 40 },
  { role: 'break', label: 'Break 2', durationIndex: 41, startIndex: 42, endIndex: 43 },
  { role: 'lunch', label: 'Lunch', durationIndex: 44, startIndex: 45, endIndex: 46 },
  { role: 'break', label: 'Break 1', durationIndex: 47, startIndex: 48, endIndex: 49 },
  { role: 'break', label: 'Break 2', durationIndex: 50, startIndex: 51, endIndex: 52 },
  { role: 'break', label: 'Break 1', durationIndex: 53, startIndex: 54, endIndex: 55 },
  { role: 'break', label: 'Break 2', durationIndex: 56, startIndex: 57, endIndex: 58 },
  { role: 'lunch', label: '1-hour Lunch Break', durationIndex: 59, startIndex: 60, endIndex: 61 },
  { role: 'break', label: '1st 15-minute Break', durationIndex: 62, startIndex: 63, endIndex: 64 }
];

function claspRunSmokeTest() {
  return 'clasp run works';
}

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
    'Notes',
    'Department',
    'Portal Role'
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
  events: [
    'Event ID',
    'Timestamp',
    'Employee Code',
    'Event Type',
    'Source',
    'IP / Device',
    'Notes',
    'Revision Request ID',
    'Corrects Event ID'
  ],
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
    'Requested Hours',
    'Reason',
    'Status (Pending/Approved/Denied)',
    'Approved By',
    'Approved At',
    'Notes',
    'Start Time',
    'End Time',
    'Full Day?'
  ],
  ptoBalances: [
    'Employee Code',
    'Year',
    'PTO Plan Type',
    'Annual PTO Hours',
    'Monthly PTO Accrual Hours',
    'Earned PTO Hours',
    'Used PTO Hours',
    'Remaining PTO Hours',
    'Payout Eligible PTO Hours',
    'Annual Non-PTO Hours',
    'Used Non-PTO Hours',
    'Remaining Non-PTO Hours'
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
  timestampRevisions: [
    'Request ID',
    'Employee Code',
    'Work Date',
    'Event Type',
    'Original Event ID',
    'Original Timestamp',
    'Requested Timestamp',
    'Reason',
    'Status (Pending/Approved/Denied)',
    'Requested At',
    'Reviewed By',
    'Reviewed At',
    'Review Notes',
    'Correction Event ID'
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
    'Annual PTO Hours',
    'Annual Non-PTO Hours',
    'Notes',
    'PTO Plan Type',
    'Monthly PTO Accrual Hours'
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
    comp: { tier: 'Officialized', base: 1100, benefits: 75, attendance: 100, kpi: 150, quarterly: 150, pto: 32, nonPto: 32 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'PAUL',
    fullName: 'Paul',
    displayName: 'Paul',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 600, benefits: 75, attendance: 100, kpi: 100, quarterly: 150, pto: 32, nonPto: 32 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'ANDREA',
    fullName: 'Andrea',
    displayName: 'Andrea',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 770, benefits: 120, attendance: 50, kpi: 80, quarterly: 150, pto: 32, nonPto: 32 },
    notes: 'Seeded from PRD §12; verify active tier before go-live.'
  },
  {
    code: 'CHARISSE',
    fullName: 'Charisse',
    displayName: 'Charisse',
    schedule: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], start: 10, end: 19, lunchStart: 13, lunchEnd: 14 },
    comp: { tier: 'Officialized', base: 750, benefits: 100, attendance: 50, kpi: 150, quarterly: 150, pto: 32, nonPto: 32 },
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
  throw new Error('Phase 1 synthetic test data injection has been retired. Use Attendance > Import Real Timesheet CSV instead.');
}

function importTimesheetCsvFromDialog(payload) {
  payload = payload || {};
  const options = {
    calculatePayroll: payload.calculatePayroll !== false,
    removePhase1TestData: payload.removePhase1TestData !== false
  };
  if (payload.fileBase64) return importRealTimesheetWorkbook(payload, options);
  return importRealTimesheetCsv(payload.csvText || '', options);
}

function importRealTimesheetCsv(csvText, options) {
  return withScriptLock_('Import Real Timesheet CSV', function() {
    return importRealTimesheetCsv_(csvText, options || {});
  });
}

function importRealTimesheetWorkbook(payload, options) {
  return withScriptLock_('Import Real Timesheet Workbook', function() {
    const values = parseRealTimesheetXlsxBase64_(payload.fileBase64, payload.fileName || 'timesheet.xlsx');
    return importRealTimesheetValues_(values, options || {});
  });
}

function importRealTimesheetCsv_(csvText, options) {
  const text = String(csvText || '').trim();
  if (!text) throw new Error('Paste the raw timesheet CSV before importing.');
  return importRealTimesheetValues_(Utilities.parseCsv(text), options || {});
}

function importRealTimesheetValues_(values, options) {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });

  const importData = parseRealTimesheetValues_(values);
  const startDate = importData.periodStart;
  const endDate = importData.periodEnd;
  const startKey = formatDateKey_(startDate);
  const endKey = formatDateKey_(endDate);

  const employeeSheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const scheduleSheet = getSheet_(attendance, CONFIG.attendanceTabs.schedules);
  const eventSheet = getSheet_(attendance, CONFIG.attendanceTabs.events);

  const existingEmployees = readObjects_(employeeSheet);
  const codeMap = buildRealTimesheetEmployeeCodeMap_(importData.employees, existingEmployees);
  const importedCodes = importData.employees.map(employee => codeMap[employee.key].code);
  const employeeResult = ensureRealTimesheetEmployees_(attendance, payroll, importData.employees, codeMap, startDate);

  const scheduleRowsRemoved = removeRealTimesheetScheduleRows_(scheduleSheet, importedCodes, startDate, endDate);
  const scheduleRows = buildRealTimesheetScheduleRows_(importData.employees, codeMap, startDate, endDate);
  const scheduleRange = appendRows_(scheduleSheet, scheduleRows);

  const fakeEventsRemoved = options.removePhase1TestData === false ? 0 : removePhase1TestClockEvents_(eventSheet);
  const priorImportEventsRemoved = removeRealTimesheetClockEvents_(eventSheet);
  const eventRows = buildRealTimesheetClockEventRows_(importData.entries, codeMap);
  const eventRange = appendRows_(eventSheet, eventRows);

  let payrollCleanup = { periodsRemoved: 0, calculationRowsRemoved: 0, outputRowsRemoved: 0 };
  if (options.removePhase1TestData !== false) {
    payrollCleanup = removePhase1TestPayrollData_(payroll);
  }

  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.employees, employeeResult.employeeRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.schedules, scheduleRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.events, eventRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.comp, employeeResult.compRange);

  const attendanceResult = rebuildAttendanceLog({ startDate: startKey, endDate: endKey });

  let payrollResult = null;
  let payrollError = '';
  if (options.calculatePayroll !== false) {
    try {
      const periodId = ensureRealTimesheetPayPeriod_(payroll, startDate, endDate);
      payrollResult = calculatePayPeriod_({
        periodId,
        employeeCodes: importedCodes
      });
    } catch (error) {
      payrollError = error && error.message ? error.message : String(error);
    }
  }

  const result = {
    dateRange: `${startKey} through ${endKey}`,
    sourceRowsRead: importData.entries.length,
    employeesImported: importData.employees.length,
    employeesAdded: employeeResult.employeesAdded,
    compRowsAdded: employeeResult.compRowsAdded,
    scheduleRowsRemoved,
    scheduleRowsAdded: scheduleRows.length,
    fakeEventsRemoved,
    priorImportEventsRemoved,
    eventsAdded: eventRows.length,
    attendanceRowsWritten: attendanceResult.rowsWritten,
    payrollCleanup,
    payrollMessage: payrollResult ? payrollResult.message : '',
    payrollWarnings: payrollResult ? payrollResult.warnings : [],
    payrollError,
    attendanceSpreadsheetUrl: attendance.getUrl(),
    payrollSpreadsheetUrl: payroll.getUrl(),
    message: `Imported ${eventRows.length} real timesheet clock events for ${startKey} through ${endKey}.`
  };
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function parseRealTimesheetXlsxBase64_(base64, fileName) {
  const bytes = Utilities.base64Decode(String(base64 || ''));
  const blob = Utilities.newBlob(bytes, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName || 'timesheet.xlsx');
  let files;
  try {
    files = Utilities.unzip(blob);
  } catch (error) {
    throw new Error('The selected file could not be read as an .xlsx workbook. Export it as CSV and try again.');
  }

  const sheetBlob = findZipBlob_(files, 'xl/worksheets/sheet1.xml');
  if (!sheetBlob) throw new Error('The .xlsx workbook does not contain a readable first worksheet.');
  const sharedStrings = parseXlsxSharedStrings_(findZipBlob_(files, 'xl/sharedStrings.xml'));
  const rows = parseXlsxWorksheetRows_(sheetBlob.getDataAsString(), sharedStrings);
  if (!rows.length) throw new Error('The .xlsx workbook did not contain any worksheet rows.');
  return rows;
}

function findZipBlob_(files, name) {
  return (files || []).filter(file => file.getName() === name)[0] || null;
}

function parseXlsxSharedStrings_(blob) {
  if (!blob) return [];
  const ns = XmlService.getNamespace('http://schemas.openxmlformats.org/spreadsheetml/2006/main');
  const root = XmlService.parse(blob.getDataAsString()).getRootElement();
  return root.getChildren('si', ns).map(si => getXmlElementText_(si));
}

function parseXlsxWorksheetRows_(xmlText, sharedStrings) {
  const ns = XmlService.getNamespace('http://schemas.openxmlformats.org/spreadsheetml/2006/main');
  const root = XmlService.parse(xmlText).getRootElement();
  const sheetData = root.getChild('sheetData', ns);
  if (!sheetData) return [];

  return sheetData.getChildren('row', ns).map(rowElement => {
    const row = [];
    rowElement.getChildren('c', ns).forEach(cell => {
      const reference = cell.getAttribute('r') ? cell.getAttribute('r').getValue() : '';
      const columnIndex = getXlsxColumnIndex_(reference);
      row[columnIndex] = formatXlsxTimesheetCell_(readXlsxCellValue_(cell, ns, sharedStrings), columnIndex);
    });
    for (let index = 0; index < row.length; index += 1) {
      if (row[index] === undefined) row[index] = '';
    }
    return row;
  });
}

function readXlsxCellValue_(cell, ns, sharedStrings) {
  const type = cell.getAttribute('t') ? cell.getAttribute('t').getValue() : '';
  if (type === 'inlineStr') return getXmlElementText_(cell.getChild('is', ns));
  const valueNode = cell.getChild('v', ns);
  const raw = valueNode ? valueNode.getText() : '';
  if (type === 's') return sharedStrings[Number(raw)] || '';
  return raw;
}

function getXmlElementText_(element) {
  if (!element) return '';
  let text = element.getText() || '';
  element.getChildren().forEach(child => {
    text += getXmlElementText_(child);
  });
  return text;
}

function getXlsxColumnIndex_(reference) {
  const letters = String(reference || '').replace(/[^A-Za-z]/g, '').toUpperCase();
  let index = 0;
  for (let i = 0; i < letters.length; i += 1) {
    index = (index * 26) + letters.charCodeAt(i) - 64;
  }
  return Math.max(index - 1, 0);
}

function formatXlsxTimesheetCell_(value, columnIndex) {
  const text = String(value === null || value === undefined ? '' : value).trim();
  if (!text) return '';
  const numeric = Number(text);
  if (Number.isFinite(numeric)) {
    if (columnIndex === 1) return formatExcelSerialDateForImport_(numeric);
    if (isTimesheetTimeColumn_(columnIndex)) return formatExcelSerialTimeForImport_(numeric);
  }
  return text;
}

function isTimesheetTimeColumn_(columnIndex) {
  if (columnIndex === 30 || columnIndex === 31) return true;
  return TIMESHEET_IMPORT_INTERVAL_SPECS.some(spec => columnIndex === spec.startIndex || columnIndex === spec.endIndex);
}

function formatExcelSerialDateForImport_(serial) {
  const date = new Date(1899, 11, 30 + Math.floor(Number(serial)));
  return Utilities.formatDate(date, CONFIG.timezone, 'M/d/yyyy');
}

function formatExcelSerialTimeForImport_(serial) {
  const totalMinutes = Math.round((Number(serial) % 1) * 24 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return displayTime_(new Date(2000, 0, 1, hours, minutes));
}

function parseRealTimesheetCsv_(csvText) {
  const values = Utilities.parseCsv(csvText);
  return parseRealTimesheetValues_(values);
}

function parseRealTimesheetValues_(values) {
  if (!values || values.length < 2) throw new Error('The timesheet file did not contain any data rows.');

  const headers = values[0].map(value => String(value || '').trim());
  validateRealTimesheetHeaders_(headers);
  const intervalSpecs = getRealTimesheetIntervalSpecs_(headers);

  const entries = [];
  const employeesByKey = {};
  let periodStart = null;
  let periodEnd = null;

  for (let index = 1; index < values.length; index += 1) {
    const row = values[index];
    if (!row || !row.some(cell => String(cell || '').trim() !== '')) continue;

    const rowNumber = index + 1;
    const date = parseRealTimesheetDate_(row[1], rowNumber);
    const fullName = cleanImportCell_(row[2]);
    if (!fullName) throw new Error(`Row ${rowNumber} is missing Full Name.`);
    const memberCode = cleanImportCell_(row[3]);
    const position = cleanImportCell_(row[4]);
    const group = cleanImportCell_(row[6]);
    const manager = cleanImportCell_(row[7]);
    const workSchedule = cleanImportCell_(row[8]);
    if (!workSchedule) throw new Error(`Row ${rowNumber} is missing Work Schedule.`);

    const key = getRealTimesheetEmployeeKey_(fullName, memberCode);
    if (!employeesByKey[key]) {
      employeesByKey[key] = {
        key,
        fullName,
        memberCode,
        position,
        group,
        manager,
        scheduleCounts: {},
        scheduleOrder: []
      };
    }
    countRealTimesheetSchedule_(employeesByKey[key], workSchedule);

    const entry = {
      rowNumber,
      date,
      employeeKey: key,
      fullName,
      memberCode,
      workSchedule,
      firstIn: parseRealTimesheetTimeOrBlank_(row[30], rowNumber, 'First In'),
      lastOut: parseRealTimesheetTimeOrBlank_(row[31], rowNumber, 'Last Out'),
      intervals: collectRealTimesheetIntervals_(row, rowNumber, intervalSpecs)
    };
    entries.push(entry);

    if (!periodStart || dateOnly_(date).getTime() < dateOnly_(periodStart).getTime()) periodStart = dateOnly_(date);
    if (!periodEnd || dateOnly_(date).getTime() > dateOnly_(periodEnd).getTime()) periodEnd = dateOnly_(date);
  }

  if (!entries.length) throw new Error('The CSV did not contain importable timesheet rows.');

  const employees = Object.keys(employeesByKey)
    .map(key => {
      const employee = employeesByKey[key];
      employee.workSchedule = getMostCommonRealTimesheetSchedule_(employee);
      return employee;
    })
    .sort((a, b) => a.fullName.localeCompare(b.fullName));

  return {
    periodStart,
    periodEnd,
    entries,
    employees
  };
}

function validateRealTimesheetHeaders_(headers) {
  const expected = {
    1: 'Date',
    2: 'Full Name',
    3: 'Member Code',
    8: 'Work Schedule',
    30: 'First In',
    31: 'Last Out'
  };
  Object.keys(expected).forEach(indexText => {
    const index = Number(indexText);
    if (headers[index] !== expected[index]) {
      throw new Error(`This does not look like the expected raw timesheet export. Column ${index + 1} should be "${expected[index]}".`);
    }
  });
  if (headers.length < 41) {
    throw new Error('This CSV is missing the First In / Last Out / lunch-break columns expected from the raw timesheet export.');
  }
}

function getRealTimesheetIntervalSpecs_(headers) {
  const specs = [];
  for (let index = 32; index < headers.length - 2; index += 1) {
    const label = String(headers[index] || '').trim();
    const startHeader = String(headers[index + 1] || '').trim();
    const endHeader = String(headers[index + 2] || '').trim();
    if (!label) continue;
    const isLunch = /lunch/i.test(label);
    const isBreak = /break/i.test(label);
    if (!isLunch && !isBreak) continue;
    if (startHeader !== `${label} Start` || endHeader !== `${label} End`) continue;
    specs.push({
      role: isLunch ? 'lunch' : 'break',
      label,
      durationIndex: index,
      startIndex: index + 1,
      endIndex: index + 2
    });
    index += 2;
  }
  if (!specs.length) {
    throw new Error('This CSV is missing lunch/break interval columns from the raw timesheet export.');
  }
  return specs;
}

function countRealTimesheetSchedule_(employee, workSchedule) {
  if (!employee.scheduleCounts[workSchedule]) {
    employee.scheduleCounts[workSchedule] = 0;
    employee.scheduleOrder.push(workSchedule);
  }
  employee.scheduleCounts[workSchedule] += 1;
}

function getMostCommonRealTimesheetSchedule_(employee) {
  return employee.scheduleOrder
    .slice()
    .sort((a, b) => employee.scheduleCounts[b] - employee.scheduleCounts[a])[0] || '';
}

function buildRealTimesheetEmployeeCodeMap_(importEmployees, existingEmployees) {
  const existingByCode = {};
  const existingByName = {};
  existingEmployees.forEach(employee => {
    const code = normalizeCode_(employee['Employee Code']);
    if (!code) return;
    existingByCode[code] = employee;
    const fullNameKey = normalizeImportedName_(employee['Full Name']);
    const displayNameKey = normalizeImportedName_(employee['Display Name']);
    if (fullNameKey) existingByName[fullNameKey] = code;
    if (displayNameKey) existingByName[displayNameKey] = code;
  });

  const usedCodes = {};
  const map = {};
  importEmployees.forEach(employee => {
    const nameKey = normalizeImportedName_(employee.fullName);
    let code = existingByName[nameKey] || '';
    if (!code) {
      const baseCode = normalizeCode_(employee.memberCode) || suggestEmployeeCode_(employee.fullName);
      code = getAvailableImportedEmployeeCode_(baseCode, existingByCode, usedCodes);
    }
    usedCodes[code] = true;
    map[employee.key] = {
      code,
      existing: Boolean(existingByCode[code]),
      employee
    };
  });
  return map;
}

function getAvailableImportedEmployeeCode_(baseCode, existingByCode, usedCodes) {
  let code = normalizeCode_(baseCode) || 'EMPLOYEE';
  let suffix = 2;
  while ((existingByCode[code] && !usedCodes[code]) || usedCodes[code]) {
    code = `${normalizeCode_(baseCode) || 'EMPLOYEE'}-${suffix}`;
    suffix += 1;
  }
  return code;
}

function ensureRealTimesheetEmployees_(attendance, payroll, importEmployees, codeMap, startDate) {
  const employeeSheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const compSheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const existingEmployeeCodes = {};
  readObjects_(employeeSheet).forEach(row => {
    const code = normalizeCode_(row['Employee Code']);
    if (code) existingEmployeeCodes[code] = true;
  });
  const existingCompCodes = {};
  readObjects_(compSheet).forEach(row => {
    const code = normalizeCode_(row['Employee Code']);
    if (code) existingCompCodes[code] = true;
  });

  const employeeRows = [];
  const compRows = [];
  importEmployees.forEach(employee => {
    const mapped = codeMap[employee.key];
    const code = mapped.code;
    const notes = `${CONFIG.realTimesheetImportMarker}: imported from member code ${employee.memberCode || 'blank'} for historical timesheet testing.`;
    if (!existingEmployeeCodes[code]) {
      employeeRows.push([
        code,
        employee.fullName,
        String(employee.fullName || '').split(/\s+/)[0] || code,
        'Active',
        dateOnly_(startDate),
        '',
        employee.position || '',
        employee.manager || '',
        '',
        '',
        notes,
        '',
        CONFIG.defaultPortalRole
      ]);
      existingEmployeeCodes[code] = true;
    }
    if (!existingCompCodes[code]) {
      compRows.push([
        code,
        dateOnly_(startDate),
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        `${CONFIG.realTimesheetImportMarker}: compensation pending; row added so payroll tests can surface missing values explicitly.`,
        CONFIG.defaultPtoPlanType,
        ''
      ]);
      existingCompCodes[code] = true;
    }
  });

  return {
    employeesAdded: employeeRows.length,
    compRowsAdded: compRows.length,
    employeeRange: appendRows_(employeeSheet, employeeRows),
    compRange: appendRows_(compSheet, compRows)
  };
}

function buildRealTimesheetScheduleRows_(importEmployees, codeMap, startDate, endDate) {
  return importEmployees.map(employee => {
    const schedule = parseRealTimesheetWorkSchedule_(employee.workSchedule);
    const row = buildScheduleRow_(codeMap[employee.key].code, dateOnly_(startDate), schedule);
    row[2] = dateOnly_(endDate);
    return row;
  });
}

function parseRealTimesheetWorkSchedule_(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(.+?)\s+(\d{1,2}(?::\d{2})?\s*[aApP][mM])\s*-\s*(\d{1,2}(?::\d{2})?\s*[aApP][mM])$/);
  if (!match) throw new Error(`Unsupported work schedule format: ${text}`);
  return {
    days: parseRealTimesheetScheduleDays_(match[1]),
    start: formatScheduleTimeValue_(match[2]),
    end: formatScheduleTimeValue_(match[3]),
    lunchStart: '',
    lunchEnd: ''
  };
}

function parseRealTimesheetScheduleDays_(value) {
  const days = [];
  String(value || '').split(',').forEach(token => {
    const part = token.trim();
    if (!part) return;
    const range = part.split('-').map(item => item.trim()).filter(Boolean);
    if (range.length === 1) {
      addImportedScheduleDay_(days, range[0]);
    } else if (range.length === 2) {
      addImportedScheduleDayRange_(days, range[0], range[1]);
    } else {
      throw new Error(`Unsupported schedule day segment: ${part}`);
    }
  });
  return days;
}

function addImportedScheduleDayRange_(days, startToken, endToken) {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const startDay = parseImportedScheduleDay_(startToken);
  const endDay = parseImportedScheduleDay_(endToken);
  const startIndex = week.indexOf(startDay);
  const endIndex = week.indexOf(endDay);
  if (startIndex === -1 || endIndex === -1) throw new Error(`Unsupported schedule day range: ${startToken}-${endToken}`);
  let cursor = startIndex;
  while (true) {
    if (days.indexOf(week[cursor]) === -1) days.push(week[cursor]);
    if (cursor === endIndex) break;
    cursor = (cursor + 1) % week.length;
  }
}

function addImportedScheduleDay_(days, token) {
  const day = parseImportedScheduleDay_(token);
  if (days.indexOf(day) === -1) days.push(day);
}

function parseImportedScheduleDay_(token) {
  const key = String(token || '').trim().toLowerCase();
  const mapping = {
    m: 'Mon',
    mon: 'Mon',
    monday: 'Mon',
    t: 'Tue',
    tu: 'Tue',
    tue: 'Tue',
    tues: 'Tue',
    tuesday: 'Tue',
    w: 'Wed',
    wed: 'Wed',
    wednesday: 'Wed',
    th: 'Thu',
    thu: 'Thu',
    thur: 'Thu',
    thurs: 'Thu',
    thursday: 'Thu',
    f: 'Fri',
    fri: 'Fri',
    friday: 'Fri',
    sat: 'Sat',
    saturday: 'Sat',
    sun: 'Sun',
    sunday: 'Sun'
  };
  if (!mapping[key]) throw new Error(`Unsupported schedule day token: ${token}`);
  return mapping[key];
}

function buildRealTimesheetClockEventRows_(entries, codeMap) {
  const rows = [];
  entries.forEach(entry => {
    const mapped = codeMap[entry.employeeKey];
    if (!mapped) return;
    const code = mapped.code;
    const events = [];
    if (entry.firstIn) {
      events.push({
        timestamp: makeDateAtImportedTime_(entry.date, entry.firstIn),
        type: 'CLOCK_IN'
      });
    }
    addRealTimesheetIntervalEvents_(events, entry.date, entry.intervals);
    if (entry.lastOut) {
      events.push({
        timestamp: makeDateAtImportedTime_(entry.date, entry.lastOut),
        type: 'CLOCK_OUT'
      });
    }
    events.sort(compareClockImportEvents_);
    events.forEach((event, index) => {
      rows.push([
        `${CONFIG.realTimesheetEventIdPrefix}${formatCompactDate_(entry.date)}-${code}-${pad2_(index + 1)}-${event.type}`,
        event.timestamp,
        code,
        event.type,
        'IMPORTED',
        'Raw timesheet CSV',
        `${CONFIG.realTimesheetImportMarker}: ${entry.fullName}${entry.memberCode ? ` (${entry.memberCode})` : ''}, CSV row ${entry.rowNumber}.`,
        '',
        ''
      ]);
    });
  });
  return rows.sort((a, b) => {
    const aDate = parseDateOrBlank_(a[1]);
    const bDate = parseDateOrBlank_(b[1]);
    return (aDate ? aDate.getTime() : 0) - (bDate ? bDate.getTime() : 0);
  });
}

function addRealTimesheetIntervalEvents_(events, date, intervals) {
  const lunchIntervals = intervals.filter(interval => interval.role === 'lunch');
  const primaryLunch = lunchIntervals.length
    ? lunchIntervals.slice().sort((a, b) => b.durationMinutes - a.durationMinutes)[0]
    : null;
  intervals.forEach(interval => {
    const isLunch = primaryLunch && interval === primaryLunch;
    events.push({
      timestamp: makeDateAtImportedTime_(date, interval.start),
      type: isLunch ? 'LUNCH_START' : 'BREAK_START'
    });
    events.push({
      timestamp: makeDateAtImportedTime_(date, interval.end),
      type: isLunch ? 'LUNCH_END' : 'BREAK_END'
    });
  });
}

function compareClockImportEvents_(a, b) {
  const diff = a.timestamp.getTime() - b.timestamp.getTime();
  if (diff !== 0) return diff;
  const order = {
    CLOCK_IN: 1,
    LUNCH_START: 2,
    BREAK_START: 2,
    LUNCH_END: 3,
    BREAK_END: 3,
    CLOCK_OUT: 4
  };
  return (order[a.type] || 9) - (order[b.type] || 9);
}

function collectRealTimesheetIntervals_(row, rowNumber) {
  const intervals = [];
  TIMESHEET_IMPORT_INTERVAL_SPECS.forEach(spec => {
    const startValue = cleanImportCell_(row[spec.startIndex]);
    const endValue = cleanImportCell_(row[spec.endIndex]);
    if (!startValue && !endValue) return;
    if (!startValue || !endValue) {
      throw new Error(`Row ${rowNumber} has an incomplete ${spec.label} interval.`);
    }
    const start = parseRealTimesheetTime_(startValue, rowNumber, `${spec.label} Start`);
    const end = parseRealTimesheetTime_(endValue, rowNumber, `${spec.label} End`);
    intervals.push({
      role: spec.role,
      label: spec.label,
      start,
      end,
      durationMinutes: getImportedTimeDurationMinutes_(start, end)
    });
  });
  return intervals;
}

function removeRealTimesheetClockEvents_(sheet) {
  return deleteRowsMatching_(sheet, function(row) {
    const eventId = String(row['Event ID'] || '');
    const notes = String(row.Notes || '');
    return eventId.indexOf(CONFIG.realTimesheetEventIdPrefix) === 0
      || notes.indexOf(CONFIG.realTimesheetImportMarker) !== -1;
  });
}

function removeRealTimesheetScheduleRows_(sheet, employeeCodes, startDate, endDate) {
  const codeSet = {};
  employeeCodes.forEach(code => {
    codeSet[normalizeCode_(code)] = true;
  });
  const startKey = formatDateKey_(startDate);
  const endKey = formatDateKey_(endDate);
  return deleteRowsMatching_(sheet, function(row) {
    const code = normalizeCode_(row['Employee Code']);
    return codeSet[code]
      && formatDateKey_(row['Effective From']) === startKey
      && formatDateKey_(row['Effective To']) === endKey;
  });
}

function removePhase1TestPayrollData_(payroll) {
  const periodId = PHASE1_TEST.periodId;
  const periodsRemoved = deleteRowsMatching_(getSheet_(payroll, CONFIG.payrollTabs.periods), function(row) {
    return normalizePeriodId_(row['Period ID']) === periodId;
  });
  const calculationRowsRemoved = deleteRowsMatching_(getSheet_(payroll, CONFIG.payrollTabs.calculations), function(row) {
    return normalizePeriodId_(row['Period ID']) === periodId;
  });
  const outputRowsRemoved = deleteRowsMatching_(getSheet_(payroll, CONFIG.payrollTabs.output), function(row) {
    return String(row.Period || '').indexOf(periodId) !== -1;
  });
  return {
    periodsRemoved,
    calculationRowsRemoved,
    outputRowsRemoved
  };
}

function ensureRealTimesheetPayPeriod_(payroll, startDate, endDate) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  repairPayPeriodIds_(payroll);
  const period = getRealTimesheetPayPeriodDefinition_(startDate, endDate);
  if (!period) {
    throw new Error('Payroll calculation skipped because the import spans multiple or partial pay periods. Attendance was rebuilt; calculate each pay period from the Payroll menu.');
  }
  const existing = readObjects_(sheet)
    .filter(row => normalizePeriodId_(row['Period ID']) === period.periodId)[0];
  if (!existing) {
    appendRows_(sheet, [[
      period.periodId,
      period.payDate,
      dateOnly_(startDate),
      dateOnly_(endDate),
      period.periodType,
      'Open'
    ]]);
  }
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.periods);
  return period.periodId;
}

function getRealTimesheetPayPeriodDefinition_(startDate, endDate) {
  const start = dateOnly_(startDate);
  const end = dateOnly_(endDate);
  if (start.getDate() === 1 && end.getDate() === 15 && start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
    return {
      periodId: `${start.getFullYear()}-${pad2_(start.getMonth() + 1)}-EOM`,
      payDate: new Date(start.getFullYear(), start.getMonth() + 1, 0),
      periodType: 'EOM'
    };
  }
  const monthEnd = new Date(start.getFullYear(), start.getMonth() + 1, 0);
  if (start.getDate() === 16 && end.getTime() === monthEnd.getTime()) {
    const payDate = new Date(start.getFullYear(), start.getMonth() + 1, 15);
    return {
      periodId: `${payDate.getFullYear()}-${pad2_(payDate.getMonth() + 1)}-15`,
      payDate,
      periodType: 'Mid'
    };
  }
  return null;
}

function deleteRowsMatching_(sheet, predicate) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  let removed = 0;
  for (let rowIndex = values.length - 1; rowIndex >= 1; rowIndex -= 1) {
    const rowObject = {};
    headers.forEach((header, columnIndex) => {
      rowObject[header] = values[rowIndex][columnIndex];
    });
    if (predicate(rowObject, values[rowIndex], rowIndex + 1)) {
      sheet.deleteRow(rowIndex + 1);
      removed += 1;
    }
  }
  return removed;
}

function parseRealTimesheetDate_(value, rowNumber) {
  const text = cleanImportCell_(value);
  const match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) throw new Error(`Row ${rowNumber} has an invalid Date value: ${text || '(blank)'}.`);
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    throw new Error(`Row ${rowNumber} has an invalid Date value: ${text}.`);
  }
  return date;
}

function parseRealTimesheetTimeOrBlank_(value, rowNumber, fieldName) {
  const text = cleanImportCell_(value);
  return text ? parseRealTimesheetTime_(text, rowNumber, fieldName) : null;
}

function parseRealTimesheetTime_(value, rowNumber, fieldName) {
  const text = cleanImportCell_(value);
  const match = text.match(/^(\d{1,2}):(\d{2})\s*([aApP][mM])$/);
  if (!match) throw new Error(`Row ${rowNumber} has an invalid ${fieldName} time: ${text || '(blank)'}.`);
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const suffix = match[3].toLowerCase();
  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
    throw new Error(`Row ${rowNumber} has an invalid ${fieldName} time: ${text}.`);
  }
  if (suffix === 'pm' && hours !== 12) hours += 12;
  if (suffix === 'am' && hours === 12) hours = 0;
  return { hours, minutes };
}

function makeDateAtImportedTime_(date, time) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.hours, time.minutes, 0, 0);
}

function getImportedTimeDurationMinutes_(start, end) {
  let startMinutes = start.hours * 60 + start.minutes;
  let endMinutes = end.hours * 60 + end.minutes;
  if (endMinutes < startMinutes) endMinutes += 24 * 60;
  return endMinutes - startMinutes;
}

function cleanImportCell_(value) {
  const text = String(value === null || value === undefined ? '' : value).trim();
  if (!text || text === "'-" || text === '-') return '';
  return text;
}

function getRealTimesheetEmployeeKey_(fullName, memberCode) {
  return `${normalizeImportedName_(fullName)}|${normalizeCode_(memberCode)}`;
}

function normalizeImportedName_(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
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
    .addItem('Set Portal Admin Access Key...', 'setPortalAdminAccessKeyFromMenu')
    .addItem('Create Workflow Instructions Tabs', 'createWorkflowInstructionsTabsFromMenu')
    .addItem('Import Real Timesheet CSV...', 'showTimesheetImportDialog')
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
    .addItem('Set Portal Admin Access Key...', 'setPortalAdminAccessKeyFromMenu')
    .addSeparator()
    .addItem('Create Workflow Instructions Tabs', 'createWorkflowInstructionsTabsFromMenu')
    .addItem('Import Real Timesheet CSV...', 'showTimesheetImportDialog')
    .addSeparator()
    .addItem('Calculate Pay Period...', 'showCalculatePayPeriodDialog')
    .addItem('Refresh Attendance Data', 'refreshAttendanceDataFromMenu')
    .addItem('Refresh Quarterly PA Tracker', 'refreshQuarterlyPaTrackerFromMenu')
    .addItem('Approve Timestamp Revisions...', 'showTimestampRevisionApprovalDialog')
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

function setPortalAdminAccessKeyFromMenu() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    'Set Portal Admin Access Key',
    'Enter the admin access key payroll/admin users will use with their email on the web dashboard. This does not replace Portal Role checks.',
    ui.ButtonSet.OK_CANCEL
  );
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const result = setPortalAdminAccessKey(response.getResponseText());
  ui.alert('Portal Admin Access Key', result.message, ui.ButtonSet.OK);
}

function setPortalAdminAccessKey(accessKey) {
  const key = String(accessKey || '').trim();
  if (key.length < 8) throw new Error('Admin access key must be at least 8 characters.');
  const salt = Utilities.getUuid();
  const props = PropertiesService.getScriptProperties();
  props.setProperties({
    [CONFIG.portalAdminAccessKeySaltProp]: salt,
    [CONFIG.portalAdminAccessKeyHashProp]: hashPortalAdminAccessKey_(key, salt)
  });
  return { message: 'Portal admin access key saved. Admin users can now log in with email + access key.' };
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
  SpreadsheetApp.getUi().alert(
    'Phase 1 Test Data Retired',
    'Use Attendance > Import Real Timesheet CSV to load the real migration sample.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function showTimesheetImportDialog() {
  const html = HtmlService.createHtmlOutputFromFile('TimesheetImportDialog').setWidth(760).setHeight(680);
  SpreadsheetApp.getUi().showModalDialog(html, 'Import Real Timesheet CSV');
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

function showTimestampRevisionApprovalDialog() {
  const html = HtmlService.createHtmlOutputFromFile('TimestampRevisionApprovalDialog').setWidth(1040).setHeight(760);
  SpreadsheetApp.getUi().showModalDialog(html, 'Approve Timestamp Revisions');
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
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  payroll.setActiveSheet(getSheet_(payroll, CONFIG.payrollTabs.compChanges));
}

function showEmployeeLifecycleLog() {
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  payroll.setActiveSheet(getSheet_(payroll, CONFIG.payrollTabs.lifecycle));
}

function rebuildAttendanceLogFromMenu() {
  const result = rebuildAttendanceLog({ formatMode: 'full' });
  SpreadsheetApp.getUi().alert('Attendance Log rebuilt', `${result.rowsWritten} rows written for ${result.startDate} through ${result.endDate}.`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function refreshAttendanceDataFromMenu() {
  const result = rebuildAttendanceLog({ formatMode: 'full' });
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
  requirePortalRole_('Payroll Admin');
  const result = exportPayrollOutputCsvForPortal();
  SpreadsheetApp.getUi().alert('Export Complete', `CSV file created:\n${result.fileUrl}`, SpreadsheetApp.getUi().ButtonSet.OK);
}

function exportPayrollOutputCsvForPortal() {
  const ss = requirePayrollSpreadsheet_();
  const sheet = getSheet_(ss, CONFIG.payrollTabs.output);
  const values = sheet.getDataRange().getDisplayValues();
  const csv = values.map(row => row.map(csvEscape_).join(',')).join('\n');
  const file = DriveApp.createFile(`Payroll Output ${formatDateKey_(new Date())}.csv`, csv, MimeType.CSV);
  return {
    message: 'Payroll Output CSV exported.',
    fileUrl: file.getUrl()
  };
}

function getClockAppInitialState(identity) {
  return getPortalInitialState(identity);
}

function getPortalInitialState(identity) {
  const portalUser = resolvePortalUser_(identity);
  if (!portalUser.authenticated) {
    return {
      authenticated: false,
      mode: 'login',
      activeUserEmail: portalUser.activeUserEmail || getActiveUserEmail_(),
      message: portalUser.message || 'Enter your employee code and PIN to clock in.'
    };
  }
  if (portalUser.role === 'Payroll Admin' || portalUser.role === 'Attendance Admin') {
    const dashboard = portalUser.role === 'Payroll Admin'
      ? buildPayrollAdminDashboardData_(portalUser)
      : buildAttendanceAdminDashboardData_(portalUser);
    return {
      authenticated: true,
      mode: 'admin',
      portalUser,
      dashboard
    };
  }
  return Object.assign(getClockState(identity), {
    mode: 'employee',
    portalUser
  });
}

function getClockState(identity) {
  const ss = requireAttendanceSpreadsheet_();
  const employee = resolveWebAppEmployee_(identity, ss);
  if (!employee) {
    return {
      authenticated: false,
      activeUserEmail: getActiveUserEmail_(),
      message: 'Enter your employee code and PIN to clock in.'
    };
  }

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
    timeLabel: displayTime_(now),
    buttons: CONFIG.eventTypes.map(type => ({
      type,
      label: CONFIG.eventLabels[type],
      enabled: allowed.indexOf(type) !== -1
    })),
    currentState: getCurrentStateLabel_(lastEvent ? lastEvent['Event Type'] : ''),
    lastEventType: lastEvent ? lastEvent['Event Type'] : '',
    todaySummary: buildTodaySummary_(events),
    timeOffTypes: CONFIG.timeOffTypes,
    ptoBalance: getPtoBalanceSummaryForEmployee_(employeeCode, now.getFullYear(), ss),
    timesheetSummary: getEmployeeTimesheetSummaryForPortal_(employeeCode, ss),
    identity: {
      employeeCode,
      hasPinFallback: Boolean(employee['Web App PIN'])
    }
  };
}

function refreshPortalDashboard(identity) {
  return withPortalAuthContext_(identity, function() {
    const portalUser = requirePortalRole_('Attendance Admin');
    return portalUser.role === 'Payroll Admin'
      ? buildPayrollAdminDashboardData_(portalUser)
      : buildAttendanceAdminDashboardData_(portalUser);
  });
}

function getAttendanceAdminDashboardData(identity) {
  return withPortalAuthContext_(identity, function() {
    return buildAttendanceAdminDashboardData_(requirePortalRole_('Attendance Admin'));
  });
}

function getPayrollAdminDashboardData(identity) {
  return withPortalAuthContext_(identity, function() {
    return buildPayrollAdminDashboardData_(requirePortalRole_('Payroll Admin'));
  });
}

function getPortalTableData(tabKey, filters, identity) {
  return withPortalAuthContext_(identity, function() {
    const definition = getPortalTableDefinition_(tabKey);
    if (!definition) throw new Error(`Unknown data view: ${tabKey}`);
    requirePortalRole_(definition.role);
    const ss = definition.source === 'payroll' ? requirePayrollSpreadsheet_() : requireAttendanceSpreadsheet_();
    const sheet = getSheet_(ss, definition.tabName);
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const headers = lastColumn ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0] : [];
    const query = String((filters && filters.query) || '').trim().toLowerCase();
    const limit = Math.min(Math.max(Number((filters && filters.limit) || 100), 1), 250);
    const offset = Math.max(Number((filters && filters.offset) || 0), 0);
    const totalDataRows = Math.max(lastRow - 1, 0);
    let rows = [];
    let totalRows = totalDataRows;

    if (query) {
      const values = totalDataRows && lastColumn
        ? sheet.getRange(2, 1, totalDataRows, lastColumn).getDisplayValues()
        : [];
      const matched = values
        .filter(row => row.some(cell => String(cell || '').trim() !== ''))
        .filter(row => row.some(cell => String(cell || '').toLowerCase().indexOf(query) !== -1));
      totalRows = matched.length;
      rows = matched.slice(offset, offset + limit);
    } else if (totalDataRows && lastColumn && offset < totalDataRows) {
      const rowCount = Math.min(limit, totalDataRows - offset);
      rows = sheet.getRange(2 + offset, 1, rowCount, lastColumn).getDisplayValues()
        .filter(row => row.some(cell => String(cell || '').trim() !== ''));
    }

    return {
      tabKey,
      title: definition.title,
      source: definition.source,
      spreadsheetUrl: ss.getUrl(),
      headers,
      rows,
      offset,
      limit,
      totalRows,
      displayedRows: rows.length,
      hasPrevious: offset > 0,
      hasNext: offset + rows.length < totalRows,
      query: query
    };
  });
}

function getPortalActionData(action, payload, identity) {
  return withPortalAuthContext_(identity, function() {
  action = String(action || '').trim();
  const requiredRole = getPortalActionRole_(action);
  if (!requiredRole) throw new Error(`Unknown dashboard action: ${action}`);
  requirePortalRole_(requiredRole);
  payload = payload || {};
  if (action === 'manualClock') return getManualClockEventDialogData();
  if (action === 'editAttendance') return getEditAttendanceLogDialogData();
  if (action === 'timeOffRequest') return getTimeOffRequestDialogData();
  if (action === 'timeOffPreview') return previewTimeOffRequest(payload);
  if (action === 'makeupRequest') return getMakeupRequestDialogData();
  if (action === 'pendingRequests') return getPendingRequestsDialogData();
  if (action === 'scorecard') return getScorecardDialogData();
  if (action === 'employeeScorecard') return getEmployeeScorecard(payload);
  if (action === 'timestampRevisions') return getTimestampRevisionApprovalData();
  if (action === 'calculatePayPeriod') return getCalculatePayPeriodDialogData();
  if (action === 'calculatePayPeriodEmployees') return getCalculatePayPeriodEmployees(payload.periodId);
  if (action === 'kpiDialog') return getKpiBonusDialogData();
  if (action === 'kpiPeriod') return getKpiBonusPeriodData(payload.periodId);
  if (action === 'bonusAdjustment') return getBonusAdjustmentDialogData(payload.entryMode);
  if (action === 'compensationChange') return getCompensationChangeDialogData();
  if (action === 'compensationChangeEmployee') return getCompensationChangeEmployeeData(payload.employeeCode, payload.effectiveDate);
  if (action === 'offboard') return getOffboardDialogData();
  if (action === 'offboardPreview') return getOffboardPreview(payload);
  if (action === 'reactivate') return getReactivateDialogData();
  if (action === 'reactivateEmployee') return getReactivateEmployeeData(payload.employeeCode);
  if (action === 'addEmployeeDefaults') return getAddEmployeeDefaults();
  throw new Error(`No loader is configured for dashboard action: ${action}`);
  });
}

function runPortalAction(action, payload, identity) {
  return withPortalAuthContext_(identity, function() {
  action = String(action || '').trim();
  const requiredRole = getPortalActionRole_(action);
  if (!requiredRole) throw new Error(`Unknown dashboard action: ${action}`);
  requirePortalRole_(requiredRole);
  payload = payload || {};
  let result;
  if (action === 'addManualClockEvent') result = addManualClockEvent(payload);
  else if (action === 'editAttendanceLogEntry') result = editAttendanceLogEntry(payload);
  else if (action === 'rebuildAttendanceLog') result = rebuildAttendanceLog(Object.assign({}, payload, { formatMode: 'targeted' }));
  else if (action === 'refreshPtoBalances') result = refreshPtoBalances();
  else if (action === 'submitTimeOffRequest') result = submitTimeOffRequest(payload);
  else if (action === 'submitMakeupHourRequest') result = submitMakeupHourRequest(payload);
  else if (action === 'processPendingRequests') result = processPendingRequests(payload);
  else if (action === 'saveScorecard') result = saveScorecardToSheet(payload);
  else if (action === 'addEmployee') result = addEmployee(payload);
  else if (action === 'processTimestampRevisions') result = processTimestampRevisionRequests(payload);
  else if (action === 'calculatePayPeriod') result = calculatePayPeriod(payload);
  else if (action === 'markPayPeriodPaid') result = markPayPeriodPaid(payload.periodId);
  else if (action === 'refreshQuarterlyPaTracker') result = refreshQuarterlyPaTracker();
  else if (action === 'saveKpiBonuses') result = saveKpiBonuses(payload);
  else if (action === 'addBonusAdjustment') result = addBonusAdjustment(payload);
  else if (action === 'saveCompensationChange') result = saveCompensationChange(payload);
  else if (action === 'offboardEmployee') result = offboardEmployee(payload);
  else if (action === 'reactivateEmployee') result = reactivateEmployee(payload);
  else if (action === 'exportPayrollOutputCsv') result = exportPayrollOutputCsvForPortal();
  else throw new Error(`No runner is configured for dashboard action: ${action}`);
  return Object.assign({ ok: true, refreshDashboard: true }, result || {});
  });
}

function buildAttendanceAdminDashboardData_(portalUser) {
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  const today = dateOnly_(new Date());
  const period = getCurrentTimesheetPayPeriod_(payroll, today);
  const employees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees));
  const activeEmployees = employees.filter(row => (row.Status || 'Active') === 'Active' || row.Status === '');
  const pendingTimeOff = getPendingTimeOffRequestsForDashboard_(attendance);
  const pendingMakeup = getPendingMakeupRequestsForDashboard_(attendance);
  const pendingRevisions = getPendingTimestampRevisionsForDashboard_(attendance);
  const attentionRows = getAttendanceAttentionRowsForDashboard_(attendance, addDays_(today, -14), today);
  return {
    role: portalUser.role,
    generatedAt: displayDateTime_(new Date()),
    currentPeriod: clientWindow_(period),
    sourceUrls: {
      attendance: attendance.getUrl()
    },
    metrics: [
      { key: 'activeEmployees', label: 'Active Employees', value: activeEmployees.length },
      { key: 'pendingRequests', label: 'Time Off / Makeup', value: pendingTimeOff.length + pendingMakeup.length },
      { key: 'timestampRevisions', label: 'Timestamp Revisions', value: pendingRevisions.length },
      { key: 'timesheetFlags', label: 'Timesheet Flags', value: attentionRows.length }
    ],
    queues: {
      timeOff: pendingTimeOff.slice(0, 12),
      makeup: pendingMakeup.slice(0, 12),
      timestampRevisions: pendingRevisions.slice(0, 12),
      timesheetFlags: attentionRows.slice(0, 20)
    },
    dataTabs: getAllowedPortalTableDefinitions_(portalUser.role),
    actions: getAllowedPortalActionDefinitions_(portalUser.role)
  };
}

function buildPayrollAdminDashboardData_(portalUser) {
  const data = buildAttendanceAdminDashboardData_(portalUser);
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  const periods = listPayPeriodsForUi_();
  const outputSheet = getSheet_(payroll, CONFIG.payrollTabs.output);
  const calculationSheet = getSheet_(payroll, CONFIG.payrollTabs.calculations);
  const outputRows = readTailObjects_(outputSheet, 12);
  const calculationRows = readTailObjects_(calculationSheet, 12);
  const outputRowCount = getSheetDataRowCount_(outputSheet);
  const needReviewCount = countRowsContainingTextInColumn_(outputSheet, 'Notes / Flags', 'needs review');
  const openPeriods = periods.filter(period => period.status === 'Open');
  const calculatedPeriods = periods.filter(period => period.status === 'Calculated');
  data.sourceUrls.payroll = payroll.getUrl();
  data.payroll = {
    periods,
    defaultPeriodId: getDefaultOpenPeriodId_(periods),
    metrics: [
      { key: 'openPeriods', label: 'Open Periods', value: openPeriods.length },
      { key: 'calculatedPeriods', label: 'Calculated Periods', value: calculatedPeriods.length },
      { key: 'outputRows', label: 'Payroll Output Rows', value: outputRowCount },
      { key: 'needsReview', label: 'Needs Review', value: needReviewCount }
    ],
    recentOutput: outputRows.slice().reverse().map(row => ({
      periodId: normalizePeriodId_(row['Period ID']),
      employeeCode: normalizeCode_(row['Employee Code']),
      netPay: row['Net Pay'],
      status: row['Status'],
      notes: row['Notes / Flags'] || ''
    })),
    recentCalculations: calculationRows.slice().reverse().map(row => ({
      periodId: normalizePeriodId_(row['Period ID']),
      employeeCode: normalizeCode_(row['Employee Code']),
      grossPay: row['Gross Pay'],
      notes: row['Notes / Flags'] || ''
    }))
  };
  return data;
}

function getPendingTimeOffRequestsForDashboard_(attendance) {
  const employees = getEmployeeDisplayMap_(attendance);
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        type: row['Type (PTO/UTO/Non-PTO)'] || '',
        dateRange: `${displayDate_(row['Start Date'])} - ${displayDate_(row['End Date'])}`,
        hours: toNumberOrBlank_(row['Requested Hours']),
        reason: row.Reason || ''
      };
    });
}

function getPendingMakeupRequestsForDashboard_(attendance) {
  const employees = getEmployeeDisplayMap_(attendance);
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        workDate: displayDate_(row.Date),
        hours: toNumberOrBlank_(row['Hours Requested']),
        reason: row.Reason || ''
      };
    });
}

function getPendingTimestampRevisionsForDashboard_(attendance) {
  const employees = getEmployeeDisplayMap_(attendance);
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        workDate: displayDate_(row['Work Date']),
        eventType: row['Event Type'],
        eventLabel: CONFIG.eventLabels[row['Event Type']] || row['Event Type'] || '',
        requestedTimestamp: displayDateTime_(row['Requested Timestamp']),
        reason: row.Reason || ''
      };
    });
}

function getAttendanceAttentionRowsForDashboard_(attendance, startDate, endDate) {
  const start = dateOnly_(startDate).getTime();
  const end = dateOnly_(endDate).getTime();
  return readObjectsForDateWindow_(getSheet_(attendance, CONFIG.attendanceTabs.log), 'Date', startDate, endDate)
    .filter(row => {
      const date = parseDateOrBlank_(row.Date);
      if (!date) return false;
      const time = dateOnly_(date).getTime();
      if (time < start || time > end) return false;
      const status = String(row.Status || '');
      const late = toNumberOrZero_(row['Total Late Minutes']);
      const worked = toNumberOrBlank_(row['Worked Hours']);
      const scheduledStart = parseDateOrBlank_(row['Scheduled Start']);
      const scheduledEnd = parseDateOrBlank_(row['Scheduled End']);
      const isScheduled = Boolean(scheduledStart && scheduledEnd);
      return ['Absent', 'Incomplete (no clock-out)'].indexOf(status) !== -1
        || late > 0
        || (isScheduled && worked !== '' && worked < 8 && ['PTO', 'UTO', 'Non-PTO', 'Holiday'].indexOf(status) === -1);
    })
    .sort((a, b) => parseDateOrBlank_(b.Date).getTime() - parseDateOrBlank_(a.Date).getTime())
    .map(row => ({
      date: displayDate_(row.Date),
      employeeCode: normalizeCode_(row['Employee Code']),
      employee: row['Display Name'] || row['Employee Code'],
      status: row.Status || '',
      workedHours: toNumberOrBlank_(row['Worked Hours']),
      lateMinutes: toNumberOrZero_(row['Total Late Minutes'])
    }));
}

function getPortalTableDefinition_(tabKey) {
  return getPortalTableDefinitions_().filter(definition => definition.key === tabKey)[0] || null;
}

function getPortalTableDefinitions_() {
  return [
    { key: 'employees', title: 'Employees', source: 'attendance', tabName: CONFIG.attendanceTabs.employees, role: 'Attendance Admin' },
    { key: 'workSchedules', title: 'Work Schedules', source: 'attendance', tabName: CONFIG.attendanceTabs.schedules, role: 'Attendance Admin' },
    { key: 'holidays', title: 'Holidays', source: 'attendance', tabName: CONFIG.attendanceTabs.holidays, role: 'Attendance Admin' },
    { key: 'clockEvents', title: 'Clock Events', source: 'attendance', tabName: CONFIG.attendanceTabs.events, role: 'Attendance Admin' },
    { key: 'attendanceLog', title: 'Attendance Log', source: 'attendance', tabName: CONFIG.attendanceTabs.log, role: 'Attendance Admin' },
    { key: 'timeOffRequests', title: 'Time Off Requests', source: 'attendance', tabName: CONFIG.attendanceTabs.timeOffRequests, role: 'Attendance Admin' },
    { key: 'ptoBalances', title: 'PTO Balances', source: 'attendance', tabName: CONFIG.attendanceTabs.ptoBalances, role: 'Attendance Admin' },
    { key: 'makeupRequests', title: 'Makeup Hour Requests', source: 'attendance', tabName: CONFIG.attendanceTabs.makeupRequests, role: 'Attendance Admin' },
    { key: 'timestampRevisions', title: 'Timestamp Revision Requests', source: 'attendance', tabName: CONFIG.attendanceTabs.timestampRevisions, role: 'Attendance Admin' },
    { key: 'compensation', title: 'Compensation Master', source: 'payroll', tabName: CONFIG.payrollTabs.comp, role: 'Payroll Admin' },
    { key: 'payPeriods', title: 'Pay Periods', source: 'payroll', tabName: CONFIG.payrollTabs.periods, role: 'Payroll Admin' },
    { key: 'payrollCalculations', title: 'Payroll Calculations', source: 'payroll', tabName: CONFIG.payrollTabs.calculations, role: 'Payroll Admin' },
    { key: 'payrollOutput', title: 'Payroll Output', source: 'payroll', tabName: CONFIG.payrollTabs.output, role: 'Payroll Admin' },
    { key: 'lifecycleLog', title: 'Employee Lifecycle Log', source: 'payroll', tabName: CONFIG.payrollTabs.lifecycle, role: 'Payroll Admin' },
    { key: 'compChangeLog', title: 'Compensation Change Log', source: 'payroll', tabName: CONFIG.payrollTabs.compChanges, role: 'Payroll Admin' },
    { key: 'paTracker', title: 'Quarterly PA Tracker', source: 'payroll', tabName: CONFIG.payrollTabs.paTracker, role: 'Payroll Admin' },
    { key: 'bonuses', title: 'Bonuses & Adjustments', source: 'payroll', tabName: CONFIG.payrollTabs.bonuses, role: 'Payroll Admin' }
  ];
}

function getAllowedPortalTableDefinitions_(role) {
  return getPortalTableDefinitions_()
    .filter(definition => hasPortalPermission_(role, definition.role))
    .map(definition => ({
      key: definition.key,
      title: definition.title,
      source: definition.source,
      role: definition.role
    }));
}

function getPortalActionRole_(action) {
  const definition = getPortalActionDefinitions_().filter(item => item.key === action)[0];
  return definition ? definition.role : '';
}

function getPortalActionDefinitions_() {
  return [
    { key: 'manualClock', label: 'Manual Clock Entry', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'addManualClockEvent', label: 'Save Manual Clock Entry', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'editAttendance', label: 'Edit Attendance Status', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'editAttendanceLogEntry', label: 'Save Attendance Status', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'rebuildAttendanceLog', label: 'Rebuild Attendance Log', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'refreshPtoBalances', label: 'Refresh PTO Balances', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'timeOffRequest', label: 'Submit Time Off', role: 'Attendance Admin', section: 'Requests' },
    { key: 'timeOffPreview', label: 'Preview Time Off', role: 'Attendance Admin', section: 'Requests' },
    { key: 'submitTimeOffRequest', label: 'Save Time Off Request', role: 'Attendance Admin', section: 'Requests' },
    { key: 'makeupRequest', label: 'Submit Makeup Hours', role: 'Attendance Admin', section: 'Requests' },
    { key: 'submitMakeupHourRequest', label: 'Save Makeup Request', role: 'Attendance Admin', section: 'Requests' },
    { key: 'pendingRequests', label: 'Approve Time Off / Makeup', role: 'Attendance Admin', section: 'Requests' },
    { key: 'processPendingRequests', label: 'Save Request Decisions', role: 'Attendance Admin', section: 'Requests' },
    { key: 'scorecard', label: 'Scorecards', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'employeeScorecard', label: 'Load Scorecard', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'saveScorecard', label: 'Save Scorecard', role: 'Attendance Admin', section: 'Attendance' },
    { key: 'addEmployeeDefaults', label: 'Add Employee Defaults', role: 'Attendance Admin', section: 'Employees' },
    { key: 'addEmployee', label: 'Add Employee', role: 'Attendance Admin', section: 'Employees' },
    { key: 'timestampRevisions', label: 'Approve Timestamp Revisions', role: 'Payroll Admin', section: 'Requests' },
    { key: 'processTimestampRevisions', label: 'Save Timestamp Decisions', role: 'Payroll Admin', section: 'Requests' },
    { key: 'calculatePayPeriod', label: 'Calculate Pay Period', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'calculatePayPeriodEmployees', label: 'Load Period Employees', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'markPayPeriodPaid', label: 'Mark Paid', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'refreshQuarterlyPaTracker', label: 'Refresh PA Tracker', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'kpiDialog', label: 'KPI Bonuses', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'kpiPeriod', label: 'Load KPI Period', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'saveKpiBonuses', label: 'Save KPI Bonuses', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'bonusAdjustment', label: 'Bonuses / Adjustments', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'addBonusAdjustment', label: 'Save Bonus / Adjustment', role: 'Payroll Admin', section: 'Payroll' },
    { key: 'compensationChange', label: 'Compensation Change', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'compensationChangeEmployee', label: 'Load Compensation', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'saveCompensationChange', label: 'Save Compensation Change', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'offboard', label: 'Offboard Employee', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'offboardPreview', label: 'Preview Final Payroll', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'offboardEmployee', label: 'Save Offboarding', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'reactivate', label: 'Reactivate Employee', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'reactivateEmployee', label: 'Load Reactivation', role: 'Payroll Admin', section: 'Lifecycle' },
    { key: 'exportPayrollOutputCsv', label: 'Export Payroll CSV', role: 'Payroll Admin', section: 'Payroll' }
  ];
}

function getAllowedPortalActionDefinitions_(role) {
  return getPortalActionDefinitions_()
    .filter(definition => hasPortalPermission_(role, definition.role))
    .map(definition => ({
      key: definition.key,
      label: definition.label,
      section: definition.section,
      role: definition.role
    }));
}

function recordClockEvent(payload) {
  payload = payload || {};
  if (CONFIG.eventTypes.indexOf(payload.eventType) === -1) {
    throw new Error('Invalid event type.');
  }

  const state = getClockState(payload.identity);
  if (!state.authenticated) {
    throw new Error('Could not identify an active employee. Use your company Google account or enter your employee code and PIN.');
  }
  const button = state.buttons.filter(item => item.type === payload.eventType)[0];
  if (!button || !button.enabled) {
    throw new Error(`${CONFIG.eventLabels[payload.eventType]} is not allowed from the current state.`);
  }

  appendClockEvent_({
    employeeCode: state.employee.employeeCode,
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
    departments: CONFIG.departments,
    portalRoles: CONFIG.portalRoles,
    defaultPortalRole: CONFIG.defaultPortalRole,
    ptoPlanTypes: CONFIG.ptoPlanTypes,
    defaultPtoPlanType: CONFIG.defaultPtoPlanType,
    compFields: getCompFieldConfig_(),
    defaultSchedule: getDefaultPortalSchedule_()
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
  const requester = requirePortalRole_(payload.includeComp ? 'Payroll Admin' : 'Attendance Admin');
  const department = normalizeDepartment_(payload.department);
  if (!department) throw new Error('Department is required.');
  const portalRole = normalizePortalRole_(payload.portalRole);
  if (hasPortalPermission_(portalRole, 'Payroll Admin') && !hasPortalPermission_(requester.role, 'Payroll Admin')) {
    throw new Error('Payroll Admin access is required to assign the Payroll Admin portal role.');
  }

  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });

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
    payload.notes || '',
    department,
    portalRole
  ];
  const employeeRange = appendRows_(employeeSheet, [employeeRow]);

  const scheduleSheet = getSheet_(attendance, CONFIG.attendanceTabs.schedules);
  const scheduleRange = appendRows_(scheduleSheet, [buildScheduleRowFromPayload_(code, startDate, payload.schedule || {})]);

  const compSheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const comp = payload.comp || {};
  const compRange = appendRows_(compSheet, [[
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
  ]]);

  const lifecycleSheet = getSheet_(payroll, CONFIG.payrollTabs.lifecycle);
  const lifecycleRange = appendRows_(lifecycleSheet, [[
    makeId_('LIFE'),
    code,
    'Hired',
    new Date(),
    startDate || '',
    payload.reason || 'New employee added',
    getActiveUserEmail_(),
    '',
    payload.notes || ''
  ]]);

  refreshPtoBalances_(attendance);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.employees, employeeRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.schedules, scheduleRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.comp, compRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.lifecycle, lifecycleRange);
  return { message: `${payload.fullName} (${code}) added.` };
}

function getManualClockEventDialogData() {
  requirePortalRole_('Attendance Admin');
  return {
    employees: listEmployeesForUi_(),
    eventTypes: CONFIG.eventTypes.map(type => ({ type, label: CONFIG.eventLabels[type] })),
    nowLocal: formatDateTimeLocal_(new Date())
  };
}

function addManualClockEvent(payload) {
  requirePortalRole_('Attendance Admin');
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
  requirePortalRole_('Attendance Admin');
  return {
    employees: listEmployeesForUi_(),
    statuses: CONFIG.statuses,
    today: formatDateKey_(new Date())
  };
}

function editAttendanceLogEntry(payload) {
  requirePortalRole_('Attendance Admin');
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
      applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.log, { startRow: i + 1, rowCount: 1 });
      return { message: `Attendance status updated for ${employeeCode} on ${key}.` };
    }
  }
  throw new Error('Attendance Log row was not found after rebuild.');
}

function getTimeOffRequestDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return {
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active' || employee.status === ''),
    types: CONFIG.timeOffTypes,
    today: formatDateKey_(new Date()),
    balances: getPtoBalanceSummariesByEmployee_(attendance, new Date().getFullYear())
  };
}

function submitTimeOffRequest(payload) {
  requirePortalRole_('Attendance Admin');
  const result = createTimeOffRequest_(payload, 'SHEET_MENU');
  return {
    message: `${result.type} request ${result.requestId} submitted for ${result.employeeCode}. Manager approval is required before payroll uses it.`
  };
}

function previewTimeOffRequest(payload) {
  payload = payload || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const employeeCode = normalizeCode_(payload.employeeCode);
  if (!employeeCode) throw new Error('Employee is required.');
  const calculation = calculateTimeOffRequestFromPayload_(attendance, employeeCode, payload);
  return {
    requestedHours: round2_(calculation.requestedHours),
    label: `${round2_(calculation.requestedHours)} hour(s)`,
    note: calculation.note || ''
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

function previewWebTimeOffRequest(payload) {
  payload = payload || {};
  const employee = resolveWebAppEmployee_(payload.identity);
  if (!employee) throw new Error('Could not identify an active employee. Sign in again and retry.');
  return previewTimeOffRequest(Object.assign({}, payload, {
    employeeCode: employee['Employee Code']
  }));
}

function getMakeupRequestDialogData() {
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return {
    employees: listEmployeesForUi_().filter(employee => employee.status === 'Active' || employee.status === ''),
    today: formatDateKey_(new Date())
  };
}

function submitMakeupHourRequest(payload) {
  requirePortalRole_('Attendance Admin');
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

function getEmployeeTimesheetReview(identity, viewMode) {
  const employee = resolveWebAppEmployee_(identity);
  if (!employee) throw new Error('Could not identify an active employee. Sign in again and retry.');

  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });

  const today = dateOnly_(new Date());
  const windows = getTimesheetReviewWindows_(payroll, today);
  const mode = viewMode === 'recent' ? 'recent' : 'currentPeriod';
  const countStart = minDate_(windows.currentPeriod.start, windows.recent.start);
  const countEnd = maxDate_(windows.currentPeriod.end, windows.recent.end);

  const selectedWindow = windows[mode];
  return buildEmployeeTimesheetReviewResponse_(attendance, employee, selectedWindow, windows, mode, countStart, countEnd);
}

function submitTimestampRevisionRequest(payload) {
  return withScriptLock_('Submit Timestamp Revision Request', function() {
    return submitTimestampRevisionRequest_(payload);
  });
}

function submitTimestampRevisionRequest_(payload) {
  payload = payload || {};
  const employee = resolveWebAppEmployee_(payload.identity);
  if (!employee) throw new Error('Could not identify an active employee. Sign in again and retry.');

  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });

  const employeeCode = normalizeCode_(employee['Employee Code']);
  const workDate = parseDateOrBlank_(payload.workDate);
  if (!workDate) throw new Error('Work date is required.');
  const eventType = String(payload.eventType || '').trim();
  if (CONFIG.eventTypes.indexOf(eventType) === -1) throw new Error('Select a valid event type.');
  const requestedHour = parseTimesheetTimeInput_(payload.requestedTime || payload.requestedTimestamp);
  if (requestedHour === '') throw new Error('Enter the requested timestamp as HH:MMam/pm.');
  const requestedTimestamp = makeDateAtHour_(dateOnly_(workDate), requestedHour);
  const reason = String(payload.reason || '').trim();
  if (!reason) throw new Error('Reason is required.');

  const originalEventId = String(payload.originalEventId || '').trim();
  let originalTimestamp = '';
  if (originalEventId) {
    const originalEvent = getRawClockEventById_(attendance, originalEventId);
    if (!originalEvent) throw new Error(`Original event ${originalEventId} was not found.`);
    if (normalizeCode_(originalEvent['Employee Code']) !== employeeCode) {
      throw new Error('Original event does not belong to this employee.');
    }
    if (String(originalEvent['Event Type'] || '') !== eventType) {
      throw new Error('Original event type does not match the requested correction type.');
    }
    const originalDate = parseDateOrBlank_(originalEvent.Timestamp);
    if (!originalDate || formatDateKey_(originalDate) !== formatDateKey_(workDate)) {
      throw new Error('Original event must be on the same work date.');
    }
    originalTimestamp = originalDate;
  }

  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions);
  const existingPending = readObjects_(sheet).some(row => {
    return row['Status (Pending/Approved/Denied)'] === 'Pending'
      && normalizeCode_(row['Employee Code']) === employeeCode
      && formatDateKey_(row['Work Date']) === formatDateKey_(workDate)
      && String(row['Event Type'] || '') === eventType
      && String(row['Original Event ID'] || '').trim() === originalEventId;
  });
  if (existingPending) {
    throw new Error('A pending revision already exists for this timestamp.');
  }

  const requestId = makeId_('TSR');
  const requestRange = appendRows_(sheet, [[
    requestId,
    employeeCode,
    dateOnly_(workDate),
    eventType,
    originalEventId,
    originalTimestamp,
    requestedTimestamp,
    reason,
    'Pending',
    new Date(),
    '',
    '',
    '',
    ''
  ]]);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.timestampRevisions, requestRange);

  return {
    requestId,
    message: `Timestamp revision ${requestId} submitted. Payroll approval is required before attendance changes.`
  };
}

function getTimestampRevisionApprovalData() {
  requirePortalRole_('Payroll Admin');
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const employees = getEmployeeDisplayMap_(attendance);
  const rows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions))
    .filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending')
    .map(row => {
      const code = normalizeCode_(row['Employee Code']);
      return {
        requestId: row['Request ID'],
        employeeCode: code,
        employee: employees[code] || code,
        workDate: displayDate_(row['Work Date']),
        eventType: row['Event Type'],
        eventLabel: CONFIG.eventLabels[row['Event Type']] || row['Event Type'],
        originalEventId: row['Original Event ID'] || '',
        originalTimestamp: displayDateTime_(row['Original Timestamp']),
        requestedTimestamp: displayDateTime_(row['Requested Timestamp']),
        reason: row.Reason || '',
        requestedAt: displayDateTime_(row['Requested At']),
        issueContext: getTimestampRevisionIssueContext_(attendance, row)
      };
    });

  return {
    requests: rows,
    requestedAt: displayDateTime_(new Date())
  };
}

function processTimestampRevisionRequests(payload) {
  requirePortalRole_('Payroll Admin');
  return withScriptLock_('Process Timestamp Revision Requests', function() {
    return processTimestampRevisionRequests_(payload);
  });
}

function processTimestampRevisionRequests_(payload) {
  payload = payload || {};
  const decisions = (payload.decisions || [])
    .map(decision => ({
      requestId: String(decision.requestId || '').trim(),
      decision: String(decision.decision || '').trim(),
      notes: String(decision.notes || '').trim()
    }))
    .filter(decision => decision.requestId && decision.decision && decision.decision !== 'Keep');
  if (!decisions.length) throw new Error('Choose at least one timestamp revision to approve or deny.');

  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions);
  const rows = readObjects_(sheet);
  const reviewedBy = getActiveUserEmail_();
  const reviewedAt = new Date();
  const changedRows = [];
  const rebuildDates = [];
  let approved = 0;
  let denied = 0;

  decisions.forEach(decision => {
    if (decision.decision !== 'Approved' && decision.decision !== 'Denied') {
      throw new Error(`Invalid decision for ${decision.requestId}.`);
    }
    const row = rows.filter(item => String(item['Request ID']) === decision.requestId)[0];
    if (!row) throw new Error(`Timestamp revision ${decision.requestId} was not found.`);
    if (row['Status (Pending/Approved/Denied)'] !== 'Pending') {
      throw new Error(`Timestamp revision ${decision.requestId} is no longer pending.`);
    }

    let correctionEventId = '';
    if (decision.decision === 'Approved') {
      const requestedTimestamp = parseDateOrBlank_(row['Requested Timestamp']);
      if (!requestedTimestamp) throw new Error(`Timestamp revision ${decision.requestId} is missing a requested timestamp.`);
      const correction = appendClockEvent_({
        employeeCode: row['Employee Code'],
        eventType: row['Event Type'],
        source: 'MANUAL',
        timestamp: requestedTimestamp,
        device: 'Timestamp revision approval',
        notes: [
          `Approved timestamp revision ${decision.requestId}`,
          row.Reason || '',
          decision.notes || ''
        ].filter(Boolean).join(' | '),
        revisionRequestId: decision.requestId,
        correctsEventId: row['Original Event ID'] || ''
      });
      correctionEventId = correction.eventId;
      const workDate = parseDateOrBlank_(row['Work Date']) || requestedTimestamp;
      rebuildDates.push(dateOnly_(workDate));
      approved += 1;
    } else {
      denied += 1;
    }

    sheet.getRange(row._rowNumber, 9).setValue(decision.decision);
    sheet.getRange(row._rowNumber, 11, 1, 4).setValues([[
      reviewedBy,
      reviewedAt,
      decision.notes || '',
      correctionEventId
    ]]);
    changedRows.push(row._rowNumber);
  });

  applyChangedAttendanceRowsByRowNumbers_(attendance, CONFIG.attendanceTabs.timestampRevisions, changedRows);
  if (rebuildDates.length) {
    const start = new Date(Math.min.apply(null, rebuildDates.map(date => date.getTime())));
    const end = new Date(Math.max.apply(null, rebuildDates.map(date => date.getTime())));
    rebuildAttendanceLog({
      startDate: formatDateKey_(start),
      endDate: formatDateKey_(end)
    });
  }

  return {
    message: `${approved} timestamp revision(s) approved and ${denied} denied. Recalculate payroll for affected periods.`
  };
}

function getPendingRequestsDialogData() {
  requirePortalRole_('Attendance Admin');
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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
        units: toNumberOrBlank_(row['Requested Hours']),
        startTime: row['Start Time'] || '',
        endTime: row['End Time'] || '',
        fullDay: row['Full Day?'] || '',
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
    requestedAt: displayDateTime_(new Date())
  };
}

function processPendingRequests(payload) {
  requirePortalRole_('Attendance Admin');
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
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const approvedBy = getActiveUserEmail_();
  const approvedAt = new Date();
  let timeOffUpdated = 0;
  let makeupUpdated = 0;
  const rebuildWindows = [];
  const timeOffChangedRows = [];
  const makeupChangedRows = [];

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
      timeOffChangedRows.push(row._rowNumber);
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
      makeupChangedRows.push(row._rowNumber);
      return;
    }

    throw new Error(`Unknown request kind for ${decision.requestId}.`);
  });

  refreshPtoBalances_(attendance);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  applyChangedAttendanceRowsByRowNumbers_(attendance, CONFIG.attendanceTabs.timeOffRequests, timeOffChangedRows);
  applyChangedAttendanceRowsByRowNumbers_(attendance, CONFIG.attendanceTabs.makeupRequests, makeupChangedRows);
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
  requirePortalRole_('Attendance Admin');
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const rows = refreshPtoBalances_(attendance);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  return {
    rowsWritten: rows.length,
    message: `${rows.length} PTO balance row(s) refreshed.`
  };
}

function getCalculatePayPeriodDialogData() {
  requirePortalRole_('Payroll Admin');
  const payroll = requirePayrollSpreadsheet_();
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
  requirePortalRole_('Payroll Admin');
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
  requirePortalRole_('Attendance Admin');
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return {
    employees: listEmployeesForUi_(),
    months: getAvailableScorecardMonths_(attendance),
    defaultMonth: getDefaultScorecardMonth_(attendance)
  };
}

function getKpiBonusDialogData() {
  requirePortalRole_('Payroll Admin');
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
  requirePortalRole_('Payroll Admin');
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
  requirePortalRole_('Payroll Admin');
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

  const changedRange = replaceBonusAdjustmentRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), periodId, ['KPI'], employeeCodes, replacements);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.bonuses, changedRange);
  return {
    message: `${replacements.length} KPI bonus record(s) saved for ${periodId}. Recalculate the pay period to update Payroll Output.`
  };
}

function getBonusAdjustmentDialogData(entryMode) {
  requirePortalRole_('Payroll Admin');
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
  requirePortalRole_('Payroll Admin');
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

  const changedRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), [[
    periodId,
    employeeCode,
    type,
    description,
    round2_(amount),
    getActiveUserEmail_(),
    new Date()
  ]]);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.bonuses, changedRange);
  return {
    message: `${type} saved for ${employeeCode}. Recalculate ${periodId} to update Payroll Output.`
  };
}

function getCompensationChangeDialogData() {
  requirePortalRole_('Payroll Admin');
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const periods = listPayPeriodsForUi_();
  return {
    employees: listEmployeesForLifecycleUi_(['Active', '']),
    periods,
    defaultEffectiveFrom: formatDateKey_(getFirstDayOfNextMonth_()),
    defaultAdjustmentPeriodId: getDefaultOpenPeriodId_(periods),
    compFields: getCompFieldConfig_()
  };
}

function getCompensationChangeEmployeeData(employeeCode, effectiveFrom) {
  requirePortalRole_('Payroll Admin');
  const payroll = requirePayrollSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
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
  requirePortalRole_('Payroll Admin');
  return withScriptLock_('Save Compensation Change', function() {
    return saveCompensationChange_(payload);
  });
}

function saveCompensationChange_(payload) {
  payload = payload || {};
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });

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
  const compRange = appendRows_(compSheet, [[
    code,
    dateOnly_(effectiveFrom),
    '',
    nextValues['Ramp Tier'],
    toNumberOrBlank_(nextValues['Monthly Base Salary']),
    toNumberOrBlank_(nextValues['Monthly Benefits']),
    toNumberOrBlank_(nextValues['Monthly Attendance Bonus']),
    toNumberOrBlank_(nextValues['Monthly KPI Bonus (Max)']),
    toNumberOrBlank_(nextValues['Quarterly PA Bonus']),
    toNumberOrBlank_(nextValues['Annual PTO Hours']),
    toNumberOrBlank_(nextValues['Annual Non-PTO Hours']),
    String(payload.notes || '').trim() || reason,
    normalizePtoPlanType_(nextValues['PTO Plan Type']),
    toNumberOrBlank_(nextValues['Monthly PTO Accrual Hours'])
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
  const compChangeRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.compChanges), logRows);
  let retroBonusRange = null;
  if (retroAdjustment.row) {
    retroBonusRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.bonuses), [retroAdjustment.row]);
  }

  if (changes.some(change => ['Annual PTO Hours', 'Annual Non-PTO Hours', 'PTO Plan Type', 'Monthly PTO Accrual Hours'].indexOf(change.field.header) !== -1)) {
    refreshPtoBalances_(attendance);
    applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  }
  applyChangedPayrollRowsByRowNumbers_(payroll, CONFIG.payrollTabs.comp, [current._rowNumber, compRange.startRow]);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.compChanges, compChangeRange);
  if (retroBonusRange) applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.bonuses, retroBonusRange);
  return {
    message: `${changes.length} compensation field(s) changed for ${code}.${retroAdjustment.periodId ? ` Retroactive adjustment added to ${retroAdjustment.periodId}.` : ''}`
  };
}

function getOffboardDialogData() {
  requirePortalRole_('Payroll Admin');
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return {
    employees: listEmployeesForLifecycleUi_(['Active', '']),
    today: formatDateKey_(new Date()),
    eventTypes: ['Resigned', 'Terminated']
  };
}

function getOffboardPreview(payload) {
  requirePortalRole_('Payroll Admin');
  payload = payload || {};
  const code = normalizeCode_(payload.employeeCode);
  const lastWorkingDay = parseDateOrBlank_(payload.lastWorkingDay);
  if (!code) throw new Error('Select an employee.');
  if (!lastWorkingDay) throw new Error('Last Working Day is required.');
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return buildFinalPayrollPreview_(attendance, payroll, code, lastWorkingDay);
}

function offboardEmployee(payload) {
  requirePortalRole_('Payroll Admin');
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
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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

  const employeeStatusRow = setEmployeeStatus_(attendance, code, eventType, lastWorkingDay);
  closeEffectiveRowsThroughDate_(getSheet_(attendance, CONFIG.attendanceTabs.schedules), code, lastWorkingDay);
  closeEffectiveRowsThroughDate_(getSheet_(payroll, CONFIG.payrollTabs.comp), code, lastWorkingDay);
  const lifecycleRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.lifecycle), [[
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
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.employees, { startRow: employeeStatusRow, rowCount: 1 });
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.schedules);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.lifecycle, lifecycleRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.periods);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.comp);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.bonuses);
  return {
    message: `${code} marked ${eventType}. Final payroll ${finalPeriod.periodId} calculated.`
  };
}

function getReactivateDialogData() {
  requirePortalRole_('Payroll Admin');
  const payroll = requirePayrollSpreadsheet_();
  const attendance = requireAttendanceSpreadsheet_();
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  return {
    employees: listEmployeesForLifecycleUi_(['Inactive', 'Resigned', 'Terminated']),
    today: formatDateKey_(new Date()),
    ptoPlanTypes: CONFIG.ptoPlanTypes,
    defaultPtoPlanType: CONFIG.defaultPtoPlanType,
    compFields: getCompFieldConfig_(),
    defaultSchedule: getDefaultPortalSchedule_()
  };
}

function getReactivateEmployeeData(employeeCode) {
  requirePortalRole_('Payroll Admin');
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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
  requirePortalRole_('Payroll Admin');
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
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const employee = getEmployeeRowByCodeAnyStatus_(attendance, code);
  if (!employee) throw new Error(`${code} was not found.`);
  if (employee.Status === 'Active' || employee.Status === '') throw new Error(`${code} is already active.`);

  const employeeRange = { startRow: updateEmployeeForReactivation_(attendance, code, startDate, payload), rowCount: 1 };
  const scheduleRange = appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.schedules), [
    buildScheduleRowFromPayload_(code, dateOnly_(startDate), payload.schedule || {})
  ]);
  const comp = payload.comp || {};
  const compRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.comp), [[
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
  const lifecycleRange = appendRows_(getSheet_(payroll, CONFIG.payrollTabs.lifecycle), [[
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
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.employees, employeeRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.schedules, scheduleRange);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.ptoBalances);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.comp, compRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.lifecycle, lifecycleRange);
  return {
    message: `${code} reactivated with new schedule and compensation rows effective ${formatDateKey_(startDate)}.`
  };
}

function getEmployeeScorecard(payload) {
  requirePortalRole_('Attendance Admin');
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
  requirePortalRole_('Attendance Admin');
  const scorecard = getEmployeeScorecard(payload);
  const attendance = requireAttendanceSpreadsheet_();
  writeScorecardSheet_(attendance, scorecard);
  return {
    message: `Scorecard tab updated for ${scorecard.employee.displayName} - ${scorecard.monthLabel}.`,
    scorecard
  };
}

function refreshQuarterlyPaTracker() {
  requirePortalRole_('Payroll Admin');
  const attendance = requireAttendanceSpreadsheet_();
  const payroll = requirePayrollSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });

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
      const comp = getCompForDate_(getEmployeeScopedRows_(context.compRowsByEmployee, context.compRows, code), code, quarterWindow.end);
      return buildQuarterlyPaResult_(code, quarterWindow.end, context, comp).trackerRow;
    })
    .filter(Boolean);

  upsertQuarterlyPaTrackerRows_(getSheet_(payroll, CONFIG.payrollTabs.paTracker), rows);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.paTracker);
  return {
    rowsWritten: rows.length,
    message: `${rows.length} employee quarter record(s) refreshed for ${getQuarterLabel_(quarterWindow.end)}.`
  };
}

function calculatePayPeriod(payload) {
  requirePortalRole_('Payroll Admin');
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
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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

  const calculationRange = writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.calculations), HEADERS.calculations, calculations);
  const outputRange = writeRowsReplacingData_(getSheet_(payroll, CONFIG.payrollTabs.output), HEADERS.output, outputRows);
  upsertQuarterlyPaTrackerRows_(getSheet_(payroll, CONFIG.payrollTabs.paTracker), paTrackerRows);
  setPayPeriodStatus_(periodSheet, periodId, 'Calculated');
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.calculations, calculationRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.output, outputRange);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.paTracker);
  applyPayrollSheetFormatting_(payroll, CONFIG.payrollTabs.periods);

  return {
    message: `Calculated ${outputRows.length} employees for ${periodId}.`,
    warnings
  };
}

function markPayPeriodPaid(periodId) {
  requirePortalRole_('Payroll Admin');
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
  const formatMode = options.formatMode || 'targeted';
  setupAttendanceSpreadsheet_(ss, { formatMode: 'none', migrations: false });

  const startDate = options.startDate ? parseDateOrBlank_(options.startDate) : getDefaultAttendanceLogStartDate_(ss);
  const endDate = options.endDate ? parseDateOrBlank_(options.endDate) : dateOnly_(new Date());
  if (!startDate || !endDate) throw new Error('Valid start and end dates are required.');

  const employees = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.employees))
    .filter(row => employeeEmployedInRange_(row, startDate, endDate));
  const schedules = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.schedules));
  const events = getClockEvents_(ss, startDate, endOfDay_(endDate));
  const holidays = readObjects_(getSheet_(ss, CONFIG.attendanceTabs.holidays));
  const overrides = readAttendanceStatusOverrides_(ss, startDate, endDate);
  const approvedTimeOffByKey = buildApprovedTimeOffHoursByDate_(
    readObjects_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests)),
    schedules,
    '',
    startDate,
    endDate
  );
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
      rows.push(buildAttendanceLogRow_(cursor, employee, schedule, rowEvents, holidays, overrideStatus, approvedTimeOffByKey[key]));
    });
  }

  const changedRange = upsertAttendanceLogRowsForWindow_(getSheet_(ss, CONFIG.attendanceTabs.log), startDate, endDate, rows);
  if (formatMode === 'full') {
    applyAttendanceFormatting_(ss);
  } else {
    applyAttendanceSheetFormatting_(ss, CONFIG.attendanceTabs.log, changedRange);
  }
  return {
    rowsWritten: rows.length,
    startDate: formatDateKey_(startDate),
    endDate: formatDateKey_(endDate)
  };
}

function upsertAttendanceLogRowsForWindow_(sheet, startDate, endDate, generatedRows) {
  const startTime = dateOnly_(startDate).getTime();
  const endTime = dateOnly_(endDate).getTime();
  const dateIdx = HEADERS.log.indexOf('Date');
  const codeIdx = HEADERS.log.indexOf('Employee Code');
  const values = sheet.getDataRange().getValues();
  const rowsToDelete = [];
  let insertAfterRow = 1;
  for (let row = 1; row < values.length; row += 1) {
    const rowDate = parseDateOrBlank_(values[row][dateIdx]);
    if (!rowDate) continue;
    const rowTime = dateOnly_(rowDate).getTime();
    if (rowTime >= startTime && rowTime <= endTime) rowsToDelete.push(row + 1);
    if (rowTime < startTime) insertAfterRow = row + 1;
  }
  const deleteGroups = [];
  rowsToDelete.forEach(rowNumber => {
    const lastGroup = deleteGroups[deleteGroups.length - 1];
    if (lastGroup && rowNumber === lastGroup.end + 1) {
      lastGroup.end = rowNumber;
    } else {
      deleteGroups.push({ start: rowNumber, end: rowNumber });
    }
  });
  for (let index = deleteGroups.length - 1; index >= 0; index -= 1) {
    const group = deleteGroups[index];
    sheet.deleteRows(group.start, group.end - group.start + 1);
  }

  const rows = generatedRows.slice().sort((a, b) => {
    const aDate = parseDateOrBlank_(a[dateIdx]);
    const bDate = parseDateOrBlank_(b[dateIdx]);
    const aTime = aDate ? dateOnly_(aDate).getTime() : 0;
    const bTime = bDate ? dateOnly_(bDate).getTime() : 0;
    if (aTime !== bTime) return aTime - bTime;
    return String(a[codeIdx] || '').localeCompare(String(b[codeIdx] || ''));
  });
  if (!rows.length) return { startRow: 0, rowCount: 0 };

  let startRow;
  if (insertAfterRow >= sheet.getLastRow()) {
    startRow = sheet.getLastRow() + 1;
  } else {
    sheet.insertRowsAfter(insertAfterRow, rows.length);
    startRow = insertAfterRow + 1;
  }
  sheet.getRange(startRow, 1, rows.length, HEADERS.log.length).setValues(rows);
  return { startRow, rowCount: rows.length };
}

function setupAttendanceSpreadsheet_(ss, options) {
  options = options || {};
  const runMigrations = options.migrations !== false;
  ensureSheet_(ss, CONFIG.attendanceTabs.employees, HEADERS.employees);
  ensureSheet_(ss, CONFIG.attendanceTabs.schedules, HEADERS.schedules);
  ensureSheet_(ss, CONFIG.attendanceTabs.holidays, HEADERS.holidays);
  ensureSheet_(ss, CONFIG.attendanceTabs.events, HEADERS.events);
  ensureSheet_(ss, CONFIG.attendanceTabs.log, HEADERS.log);
  ensureSheet_(ss, CONFIG.attendanceTabs.timeOffRequests, HEADERS.timeOffRequests);
  ensureSheet_(ss, CONFIG.attendanceTabs.ptoBalances, HEADERS.ptoBalances);
  ensureSheet_(ss, CONFIG.attendanceTabs.makeupRequests, HEADERS.makeupRequests);
  ensureSheet_(ss, CONFIG.attendanceTabs.timestampRevisions, HEADERS.timestampRevisions);
  ensureScorecardSheet_(ss);
  if (runMigrations) {
    migrateScheduleTimeDisplays_(ss);
    migratePortalRoleDefaults_(ss);
  }
  migrateHourlyTimeOffRequests_(ss);
  removeDefaultBlankSheet_(ss);
  if (options.formatMode !== 'none') applyAttendanceFormatting_(ss);
}

function migratePortalRoleDefaults_(attendance) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const roleIdx = headers.indexOf('Portal Role');
  if (roleIdx === -1) return 0;

  let updated = 0;
  for (let row = 1; row < values.length; row += 1) {
    if (!values[row].some(cell => cell !== '' && cell !== null)) continue;
    const normalized = normalizePortalRole_(values[row][roleIdx]);
    if (values[row][roleIdx] !== normalized) {
      sheet.getRange(row + 1, roleIdx + 1).setValue(normalized);
      updated += 1;
    }
  }
  return updated;
}

function setupPayrollSpreadsheet_(ss, options) {
  options = options || {};
  const runMigrations = options.migrations !== false;
  ensureSheet_(ss, CONFIG.payrollTabs.comp, HEADERS.comp);
  ensureSheet_(ss, CONFIG.payrollTabs.periods, HEADERS.periods);
  ensureSheet_(ss, CONFIG.payrollTabs.calculations, HEADERS.calculations);
  ensureSheet_(ss, CONFIG.payrollTabs.output, HEADERS.output);
  ensureSheet_(ss, CONFIG.payrollTabs.lifecycle, HEADERS.lifecycle);
  ensureSheet_(ss, CONFIG.payrollTabs.compChanges, HEADERS.compChanges);
  ensureSheet_(ss, CONFIG.payrollTabs.paTracker, HEADERS.paTracker);
  ensureSheet_(ss, CONFIG.payrollTabs.bonuses, HEADERS.bonuses);
  if (runMigrations) {
    seedPayPeriods_(ss, new Date().getFullYear());
    migratePtoPlanDefaults_(ss);
  }
  migrateHourlyPtoComp_(ss);
  removeDefaultBlankSheet_(ss);
  if (options.formatMode !== 'none') applyPayrollFormatting_(ss);
}

function migratePtoPlanDefaults_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const planIdx = headers.indexOf('PTO Plan Type');
  const accrualIdx = headers.indexOf('Monthly PTO Accrual Hours');
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

function migrateHourlyPtoComp_(payroll) {
  const propertyKey = `HOURLY_PTO_COMP_MIGRATED_${payroll.getId()}`;
  const properties = PropertiesService.getScriptProperties();
  if (properties.getProperty(propertyKey) === 'true') return 0;

  const sheet = getSheet_(payroll, CONFIG.payrollTabs.comp);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    properties.setProperty(propertyKey, 'true');
    return 0;
  }
  const headers = values[0];
  const hourHeaders = ['Annual PTO Hours', 'Annual Non-PTO Hours', 'Monthly PTO Accrual Hours'];
  const indexes = hourHeaders.map(header => headers.indexOf(header)).filter(index => index !== -1);
  let updated = 0;
  for (let row = 1; row < values.length; row += 1) {
    indexes.forEach(index => {
      const value = toNumberOrBlank_(values[row][index]);
      if (value === '') return;
      sheet.getRange(row + 1, index + 1).setValue(round2_(value * CONFIG.legacyDayHours));
      updated += 1;
    });
  }
  properties.setProperty(propertyKey, 'true');
  return updated;
}

function migrateHourlyTimeOffRequests_(attendance) {
  const propertyKey = `HOURLY_TIME_OFF_REQUESTS_MIGRATED_${attendance.getId()}`;
  const properties = PropertiesService.getScriptProperties();
  if (properties.getProperty(propertyKey) === 'true') return 0;

  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    properties.setProperty(propertyKey, 'true');
    return 0;
  }
  const headers = values[0];
  const requestedHoursIdx = headers.indexOf('Requested Hours');
  const notesIdx = headers.indexOf('Notes');
  const startTimeIdx = headers.indexOf('Start Time');
  const endTimeIdx = headers.indexOf('End Time');
  const fullDayIdx = headers.indexOf('Full Day?');
  if ([requestedHoursIdx, notesIdx, startTimeIdx, endTimeIdx, fullDayIdx].some(index => index === -1)) return 0;

  let updated = 0;
  for (let row = 1; row < values.length; row += 1) {
    const hasData = values[row].some(cell => cell !== '' && cell !== null);
    if (!hasData) continue;
    if (values[row][startTimeIdx] || values[row][endTimeIdx] || values[row][fullDayIdx]) continue;
    const legacyUnits = toNumberOrBlank_(values[row][requestedHoursIdx]);
    if (legacyUnits === '') continue;
    const convertedHours = round2_(legacyUnits * CONFIG.legacyDayHours);
    const existingNotes = String(values[row][notesIdx] || '').trim();
    const migrationNote = `Legacy Hours/Days ${legacyUnits} converted to ${convertedHours} requested hours.`;
    sheet.getRange(row + 1, requestedHoursIdx + 1).setValue(convertedHours);
    sheet.getRange(row + 1, fullDayIdx + 1).setValue('Yes');
    sheet.getRange(row + 1, notesIdx + 1).setValue([existingNotes, migrationNote].filter(Boolean).join(' | '));
    updated += 1;
  }
  properties.setProperty(propertyKey, 'true');
  return updated;
}

function migrateScheduleTimeDisplays_(attendance) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.schedules);
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return 0;
  const headers = values[0];
  const timeHeaders = [
    'Mon Start', 'Mon End',
    'Tue Start', 'Tue End',
    'Wed Start', 'Wed End',
    'Thu Start', 'Thu End',
    'Fri Start', 'Fri End',
    'Sat Start', 'Sat End',
    'Sun Start', 'Sun End',
    'Scheduled Lunch Start',
    'Scheduled Lunch End'
  ];
  const indexes = timeHeaders
    .map(header => headers.indexOf(header))
    .filter(index => index !== -1);
  if (!indexes.length) return 0;

  let updated = 0;
  const output = values.slice(1).map(row => {
    const next = row.slice();
    indexes.forEach(index => {
      const formatted = formatScheduleTimeValue_(next[index]);
      if (formatted !== next[index]) {
        next[index] = formatted;
        updated += 1;
      }
    });
    return next;
  });
  if (updated) {
    sheet.getRange(2, 1, output.length, headers.length).setValues(output.map(row => row.slice(0, headers.length)));
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
      employee.notes,
      employee.department || ''
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
  const employeeRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees));
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const attendanceRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log));
  const timeOffRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests));
  return {
    attendance,
    employees: mapByCode_(employeeRows),
    schedules,
    schedulesByEmployee: groupRowsByEmployee_(schedules),
    attendanceRows,
    attendanceRowsByEmployee: groupRowsByEmployee_(attendanceRows),
    timeOffRows,
    timeOffRowsByEmployee: groupRowsByEmployee_(timeOffRows)
  };
}

function buildMonthlyAttendanceSummary_(context, employeeCode, monthStart) {
  const code = normalizeCode_(employeeCode);
  const month = getMonthWindow_(formatMonthKey_(monthStart));
  const employee = context.employees[code];
  if (!employee) throw new Error(`Employee ${code} was not found.`);
  const employeeAttendanceRows = getEmployeeScopedRows_(context.attendanceRowsByEmployee, context.attendanceRows, code);
  const employeeSchedules = getEmployeeScopedRows_(context.schedulesByEmployee, context.schedules, code);
  const employeeTimeOffRows = getEmployeeScopedRows_(context.timeOffRowsByEmployee, context.timeOffRows, code);
  const approvedTimeOffByKey = buildApprovedTimeOffHoursByDate_(employeeTimeOffRows, employeeSchedules, code, month.start, month.end);

  const rows = employeeAttendanceRows.filter(row => {
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
    const leave = approvedTimeOffByKey[`${formatDateKey_(date)}|${code}`] || { uto: 0, nonPto: 0 };
    const clockIn = parseDateOrBlank_(row['Clock In']);
    const clockOut = parseDateOrBlank_(row['Clock Out']);
    const scheduledStart = parseDateOrBlank_(row['Scheduled Start']);
    const schedule = getScheduleForDate_(employeeSchedules, code, date);
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
    if (status !== 'UTO' && status !== 'Non-PTO') {
      if (leave.uto) stats.utoDays += 1;
      if (leave.nonPto) stats.nonPtoDays += 1;
    }

    const notes = [];
    if (lateClockIn) notes.push(`${lateClockIn} min late start`);
    if (lateLunch) notes.push(`${lateLunch} min late lunch`);
    if (missingLunch) notes.push('Missing lunch log');
    if (isDisqualifyingAttendanceStatus_(status)) notes.push('Disqualifying status');
    if (leave.uto || leave.nonPto) notes.push('Approved unpaid time off');
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
    scheduleSummary: buildScheduleSummary_(employeeSchedules, code, month.start),
    bonus,
    stats,
    perfectAttendance,
    focusAreas: buildScorecardFocusAreas_(stats, bonus),
    exceptionRows,
    generatedAt: displayDateTime_(new Date())
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
    sheet.getRange('G:G').setNumberFormat(CONFIG.sheetDateTimeFormat);
  }
}

function ensurePayPeriodsForDialog_(payroll) {
  const sheet = getSheet_(payroll, CONFIG.payrollTabs.periods);
  if (!readObjects_(sheet).length) {
    seedPayPeriods_(payroll, new Date().getFullYear());
  }
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
  return appendRows_(sheet, replacements);
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

function summarizeBonusAdjustmentsForContext_(context, periodId, employeeCode) {
  const key = `${normalizePeriodId_(periodId)}|${normalizeCode_(employeeCode)}`;
  if (context.bonusSummaryIndex && context.bonusSummaryIndex[key]) {
    const summary = context.bonusSummaryIndex[key];
    return {
      kpi: summary.kpi,
      additional: summary.additional,
      positive: summary.positive,
      negative: summary.negative,
      notes: summary.notes.slice()
    };
  }
  return summarizeBonusAdjustments_(context.bonusRows || [], periodId, employeeCode);
}

function calculateBenefitsForPeriod_(employeeCode, employee, period, context, comp) {
  const monthlyBenefit = comp ? toNumberOrBlank_(comp['Monthly Benefits']) : '';
  const periodStart = dateOnly_(parseDateOrBlank_(period['Period Start']));
  const periodEnd = dateOnly_(parseDateOrBlank_(period['Period End']));
  const monthStart = new Date(periodStart.getFullYear(), periodStart.getMonth(), 1);
  const monthEnd = new Date(periodStart.getFullYear(), periodStart.getMonth() + 1, 0);
  const finalPayroll = isFinalPayroll_(period);
  const employeeSchedules = getEmployeeScopedRows_(context.schedulesByEmployee, context.schedules, employeeCode);
  const employeeAttendanceRows = getEmployeeScopedRows_(context.attendanceRowsByEmployee, context.attendanceRows, employeeCode);
  const totalScheduledDays = finalPayroll
    ? countScheduledDaysInRateMonth_(employeeSchedules, employeeCode, periodEnd)
    : countScheduledDaysInMonth_(employeeSchedules, employeeCode, monthStart);
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
  employeeAttendanceRows.forEach(row => {
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
    const schedule = getScheduleForDate_(employeeSchedules, employeeCode, cursor);
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
    entryPoint: 'Single web app dashboard; Attendance menu is fallback only',
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
          ['2', 'Operations manager', 'Review active employees, Portal Role, admin access key, and schedules before sharing the dashboard.', 'Employees, Work Schedules, Attendance menu', 'Before launch', 'Every active employee has a department, role, schedule, and, if needed, a Web App PIN; admins have the access key.'],
          ['3', 'Employee', 'Clock in, start lunch, end lunch, and clock out in sequence.', 'Employee dashboard', 'Each workday', 'Clock Events receives an append-only record for each action.'],
          ['4', 'Operations manager', 'Add missed or corrected punches without editing the audit trail directly.', 'Attendance dashboard', 'Same day when possible', 'Manual corrections show Source = MANUAL with useful notes.'],
          ['5', 'Employee or manager', 'Submit PTO, UTO, Non-PTO, or makeup hour requests before closeout.', 'Employee dashboard', 'As needed', 'The request appears as Pending in the request tabs.'],
          ['6', 'Employee', 'Review current-period or recent timesheet rows and request timestamp revisions immediately when needed.', 'Clock app > Review Timesheet', 'Daily or as soon as an issue is noticed', 'Timestamp Revision Requests shows Pending rows; Attendance Log is unchanged until payroll approval.'],
          ['7', 'Operations manager', 'Approve or deny pending time off and makeup requests.', 'Attendance menu', 'Before payroll closeout', 'Approved time off can rebuild into Attendance Log; approved makeup can offset short hours.'],
          ['8', 'Operations manager', 'Rebuild the Attendance Log after corrections or approvals.', 'Attendance menu', 'Daily and at closeout', 'Attendance Log shows status, hours, late minutes, and exceptions.'],
          ['9', 'Operations manager', 'Generate employee scorecards for the selected month.', 'Attendance menu', 'Monthly review', 'Scorecard shows only attendance data and is safe to share.'],
          ['10', 'Payroll processor', 'Use the reviewed log as the source for pay-period calculation.', 'Payroll workbook', 'After closeout', 'Payroll Output is generated from the latest attendance data.']
        ]
      },
      {
        eyebrow: 'SECTION 02',
        title: 'Attendance Sheet Map',
        description: 'Only edit source tabs intentionally. Treat derived tabs as review surfaces.',
        headers: ['Tab', 'Purpose', 'Primary User', 'Editable?', 'Key Fields', 'UX Rule'],
        rows: [
          ['Employees', 'Roster and access control.', 'Operations manager', 'Yes', 'Employee Code, Department, Status, Email, Web App PIN, Portal Role', 'Set Department and Portal Role during onboarding; admin login also requires the shared admin access key.'],
          ['Work Schedules', 'Effective-dated schedules by employee.', 'Operations manager', 'Yes', 'Effective From/To, day start/end, lunch window', 'Use HH:MMam/pm times and add a new row for schedule changes instead of overwriting history.'],
          ['Holidays', 'Paid holiday exceptions.', 'Operations manager', 'Yes', 'Date, Paid?, Applies To', 'Use All unless the holiday is employee-specific.'],
          ['Clock Events', 'Append-only clock event ledger.', 'Employees and managers', 'Append only', 'Timestamp, Employee Code, Event Type, Source', 'Do not delete production events; add a corrective manual event instead.'],
          ['Attendance Log', 'Calculated daily status and payroll source.', 'Operations and payroll', 'Limited review', 'Status, Worked Hours, Late Minutes', 'Rebuild after source changes; override only PTO/UTO/Non-PTO/Holiday status.'],
          ['Time Off Requests', 'Pending and approved PTO, UTO, and Non-PTO requests.', 'Employees and managers', 'Via dialog preferred', 'Type, dates, requested hours, full-day flag, status', 'Approve requests before payroll; approved rows rebuild into Attendance Log.'],
          ['PTO Balances', 'Fixed Annual or Accrued Monthly PTO hours, used hours, remaining hours, and payout-eligible hours.', 'Operations manager', 'Script-updated', 'PTO plan, earned PTO hours, used PTO hours, remaining PTO hours, Non-PTO usage', 'Shows hours only, never payout dollars; refresh after comp or request changes.'],
          ['Makeup Hour Requests', 'Pending and approved makeup hours.', 'Employees and managers', 'Via dialog preferred', 'Date, hours, status', 'Approved rows can offset short-hour deductions during payroll calculation.'],
          ['Timestamp Revision Requests', 'Employee-requested timestamp corrections awaiting payroll approval.', 'Employees and payroll', 'Via portal and Payroll menu', 'Original event, requested timestamp, status, correction event', 'Pending rows do not affect attendance; approved rows append a manual correction event.'],
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
          ['Daily', 'Employee', 'Current-period and recent timesheets are reviewed for missing or wrong timestamps.', 'Clock app > Review Timesheet', 'Submit timestamp revisions with HH:MMam/pm requested time.', 'Payroll approves revision requests before closeout.'],
          ['Weekly', 'Operations manager', 'Pending leave and makeup requests are cleared before they affect pay.', 'Time Off Requests and Makeup Hour Requests', 'Approve or deny from the Attendance menu.', 'Rebuild attendance after time off approvals.'],
          ['Weekly', 'Operations manager', 'New hires and resignations are reflected in roster dates.', 'Employees', 'Set Department, Start Date, End Date, and Status.', 'Coordinate lifecycle notes in Payroll workbook.'],
          ['Monthly', 'Operations manager', 'Scorecards explain bonus eligibility without showing pay data.', 'Attendance menu', 'Run View Scorecard.', 'Send only the scorecard, not payroll tabs.'],
          ['Pay close', 'Operations manager', 'Log is rebuilt for the full pay period.', 'Attendance menu', 'Run Rebuild Attendance Log.', 'Do not calculate payroll from a stale log.']
        ]
      },
      {
        eyebrow: 'SECTION 04',
        title: 'Real Timesheet Import',
        description: 'Use Attendance > Import Real Timesheet CSV for the one-time migration sample instead of synthetic clock data.',
        headers: ['Source', 'Target', 'Action', 'Expected Review', 'Workbook Impact', 'Notes'],
        rows: [
          ['Raw CSV export', 'Clock Events', 'Import appends deterministic REAL-TS event IDs and removes prior imported rows first.', 'Clock events sort by timestamp and retain CSV row provenance.', 'Clock Events and Attendance Log', 'Production clock events are not deleted.'],
          ['Work Schedule column', 'Work Schedules', 'Import adds effective-dated schedule rows only for the imported date window.', 'Schedules match the historical export while current schedules remain untouched.', 'Work Schedules', 'Scheduled lunch is left blank because the source schedule does not define a fixed lunch window.'],
          ['Employee names', 'Employees', 'Existing employee rows are reused by name; missing employees are added with source member code notes.', 'New rows are visible before payroll calculation warnings are reviewed.', 'Employees and Compensation Master', 'New compensation rows are blank by design until payroll confirms real values.'],
          ['Phase 1 fake data', 'Payroll and attendance tabs', 'Import can remove the old PHASE1_TEST_DATA rows and test pay period.', 'Real April 2026 rows replace the synthetic scenario.', 'Clock Events, Pay Periods, Payroll Output', 'Use the importer rather than injectPhase1TestData() for migration testing.']
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
    entryPoint: 'Single web app dashboard; Payroll menu is fallback only',
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
          ['2', 'Payroll processor', 'Review Compensation Master for blanks, effective dates, PTO Plan Type, and Monthly PTO Accrual Hours.', 'Compensation Master', 'Before calculation', 'Every paid employee has an active compensation row and PTO plan terms are intentional.'],
          ['3', 'Payroll processor', 'Confirm or create the target pay period.', 'Pay Periods', 'Each run', 'Period ID, dates, type, and status are correct.'],
          ['4', 'Payroll processor', 'Approve or deny pending timestamp revisions before closeout.', 'Payroll dashboard > Requests', 'Before calculation', 'Approved rows append manual correction events and rebuild affected Attendance Log dates.'],
          ['5', 'Payroll processor', 'Enter KPI approvals, additional bonuses, and adjustments.', 'Payroll dashboard', 'Before calculation', 'Bonuses & Adjustments has approved entries with descriptions.'],
          ['6', 'Payroll processor', 'Calculate the pay period.', 'Payroll dashboard', 'Each run', 'Payroll Calculations and Payroll Output are refreshed.'],
          ['7', 'Payroll approver', 'Review warnings, benefits, bonus statuses, deductions, and Needs review rows.', 'Payroll Calculations', 'Before payment', 'Exceptions have notes or correction actions.'],
          ['8', 'Payroll processor', 'Refresh quarterly PA tracking after quarter-end payrolls.', 'Payroll menu', 'Quarter close', 'Quarterly PA Tracker shows eligible employees and reasons.'],
          ['9', 'Payroll processor', 'Use Compensation Change for raises, changed allowances, or PTO plan/accrual changes.', 'Payroll menu', 'When approved', 'A new effective-dated comp row is created and the old row is closed.'],
          ['10', 'Payroll processor', 'Use Offboard Employee or Reactivate Employee for lifecycle changes.', 'Payroll menu', 'As needed', 'Lifecycle log is appended and historical rows are retained.'],
          ['11', 'Payroll processor', 'Finalize after approval.', 'Payroll menu', 'After approval', 'Pay Period status is Paid and output is ready for export.']
        ]
      },
      {
        eyebrow: 'SECTION 02',
        title: 'Payroll Sheet Map',
        description: 'The private workbook separates compensation inputs from calculated pay output.',
        headers: ['Tab', 'Purpose', 'Primary User', 'Editable?', 'Key Fields', 'UX Rule'],
        rows: [
          ['Compensation Master', 'Private compensation, benefit, and PTO plan setup.', 'Payroll processor', 'Yes', 'Effective dates, salary, benefits, bonuses, PTO Plan Type, Monthly PTO Accrual Hours', 'Existing rows default to Fixed Annual; leave unknown dollar values blank until confirmed.'],
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
          ['Pending timestamp revision', 'Payroll Output', 'Status = Needs review', 'Employee has an unresolved timestamp revision in the period.', 'Approve or deny from Payroll > Approve Timestamp Revisions, then recalculate.', 'Payroll processor'],
          ['Absent deduction', 'Payroll Calculations', 'Absent Days > 0', 'Scheduled day has no clock-in.', 'Confirm absence classification before approval.', 'Payroll approver'],
          ['Late minutes', 'Payroll Calculations', 'Late Minutes > 0 and Late Deduction = 0', 'Late start or late lunch return.', 'Review for attendance bonus eligibility and correct source events if needed.', 'Payroll approver'],
          ['Short hours deduction', 'Payroll Calculations', 'Short Hours > 0', 'Worked hours are below eight for a scheduled day.', 'Confirm early leave, correction, or override path.', 'Payroll approver'],
          ['Benefits', 'Payroll Calculations', 'Benefits and Benefit Eligible Days', 'Mid-month starts, exits, UTO, or Non-PTO can prorate benefits.', 'Review proration notes before approval.', 'Payroll approver'],
          ['Approved leave', 'Attendance Log', 'Status = PTO, UTO, or Non-PTO', 'A manager approved a time off request.', 'Confirm the approval and dates before paying.', 'Operations manager'],
          ['PTO plan setup', 'Compensation Master', 'PTO Plan Type and Monthly PTO Accrual Hours', 'Accrued Monthly earns hours only for full calendar months worked; Fixed Annual uses Annual PTO Hours.', 'Confirm plan type before refresh or offboarding.', 'Payroll processor'],
          ['PTO payout', 'Bonuses & Adjustments', 'Positive Adj description starts Accrued PTO payout', 'Only Accrued Monthly unused earned PTO hours are payout-eligible on offboarding at 1.5x hourly base rate.', 'Fixed Annual mid-year unused PTO should not create an adjustment.', 'Payroll approver'],
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
          ['Offboard Employee', 'Payroll menu', 'Sets employee end date, closes schedule and comp rows, then marks status Resigned or Terminated.', 'Employee Lifecycle Log', 'Creates and calculates a FINAL pay period; Accrued Monthly unused PTO can be added as a Positive Adj at 1.5x hourly base rate.', 'Payroll processor'],
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
        title: 'Migration Test Data',
        description: 'Use real imported timesheet rows for payroll testing once the CSV migration has been loaded from the Attendance menu.',
        headers: ['Period ID', 'Employee Set', 'Expected Warning', 'Review Tab', 'Status', 'Notes'],
        rows: [
          ['2026-04-EOM', 'Imported April 1-15 employees', 'Missing compensation for newly imported employees until real terms are entered.', 'Payroll Calculations', 'Needs review where comp is blank', 'Expected during migration testing.'],
          ['2026-04-EOM', 'Imported April 1-15 employees', 'Incomplete days where the source CSV has no last-out timestamp.', 'Payroll Output', 'Needs review', 'Resolve only after the source record is confirmed.'],
          ['2026-04-EOM', 'Imported April 1-15 employees', 'Short hours and absent days come from the imported clock sequence and historical schedules.', 'Payroll Calculations', 'Calculated or Needs review', 'Use this to validate payroll math against real behavior.'],
          ['2026-04-EOM', 'Imported April 1-15 employees', 'Prior PHASE1_TEST_DATA rows are removed by the importer when the cleanup checkbox is selected.', 'Clock Events and Pay Periods', 'Real-data baseline', 'Synthetic test menus are no longer exposed.']
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
  const employeeRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees));
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const attendanceRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log));
  const timeOffRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests));
  const makeupRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests));
  const timestampRevisionRows = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions));
  const compRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.comp));
  const bonusRows = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.bonuses));
  return {
    attendance,
    payroll,
    employees: mapByCode_(employeeRows),
    schedules,
    schedulesByEmployee: groupRowsByEmployee_(schedules),
    attendanceRows,
    attendanceRowsByEmployee: groupRowsByEmployee_(attendanceRows),
    timeOffRows,
    timeOffRowsByEmployee: groupRowsByEmployee_(timeOffRows),
    makeupRows,
    makeupRowsByEmployee: groupRowsByEmployee_(makeupRows),
    timestampRevisionRows,
    timestampRevisionRowsByEmployee: groupRowsByEmployee_(timestampRevisionRows),
    compRows,
    compRowsByEmployee: groupRowsByEmployee_(compRows),
    bonusRows,
    bonusSummaryIndex: buildBonusSummaryIndex_(bonusRows),
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

  const employeeCompRows = getEmployeeScopedRows_(context.compRowsByEmployee, context.compRows, code);
  const employeeSchedules = getEmployeeScopedRows_(context.schedulesByEmployee, context.schedules, code);
  const employeeAttendanceRows = getEmployeeScopedRows_(context.attendanceRowsByEmployee, context.attendanceRows, code);
  const comp = getCompForDate_(employeeCompRows, code, periodEnd);
  const monthlyBase = comp ? toNumberOrBlank_(comp['Monthly Base Salary']) : '';
  if (monthlyBase === '') {
    return blankPayrollResult_(period, code, employeeName, 'Needs comp', 'Monthly Base Salary is blank in Compensation Master.');
  }

  const finalPayroll = isFinalPayroll_(period);
  const scheduledDaysInMonth = finalPayroll
    ? countScheduledDaysInRateMonth_(employeeSchedules, code, periodEnd)
    : countScheduledDaysInMonth_(employeeSchedules, code, periodStart);
  if (!scheduledDaysInMonth) {
    return blankPayrollResult_(period, code, employeeName, 'Needs schedule', 'No scheduled days found for this calendar month.');
  }

  const dailyBaseRate = monthlyBase / scheduledDaysInMonth;
  const hourlyBaseRate = dailyBaseRate / CONFIG.legacyDayHours;
  const periodLogRows = employeeAttendanceRows.filter(row => {
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
  let absenceHours = 0;
  let paidTimeOffHours = 0;
  let unpaidTimeOffHours = 0;
  let shortHours = 0;
  let incompleteDays = 0;
  const employeeMakeupRows = getEmployeeScopedRows_(context.makeupRowsByEmployee, context.makeupRows, code);
  const employeeTimeOffRows = getEmployeeScopedRows_(context.timeOffRowsByEmployee, context.timeOffRows, code);
  const approvedTimeOffByKey = buildApprovedTimeOffHoursByDate_(employeeTimeOffRows, employeeSchedules, code, periodStart, periodEnd);
  const approvedMakeupHours = sumApprovedMakeupHoursForPeriod_(employeeMakeupRows, code, periodStart, periodEnd);
  let remainingMakeupHours = approvedMakeupHours;
  let makeupHoursApplied = 0;

  periodLogRows.forEach(row => {
    const status = row.Status || '';
    const date = parseDateOrBlank_(row.Date);
    const leave = date ? (approvedTimeOffByKey[`${formatDateKey_(date)}|${code}`] || { pto: 0, unpaid: 0 }) : { pto: 0, unpaid: 0 };
    const paidLeave = Math.min(CONFIG.legacyDayHours, toNumberOrZero_(leave.pto));
    const unpaidLeave = Math.min(Math.max(0, CONFIG.legacyDayHours - paidLeave), toNumberOrZero_(leave.unpaid));
    const coveredLeave = paidLeave + unpaidLeave;
    scheduledDays += 1;
    const worked = toNumberOrBlank_(row['Worked Hours']);
    const late = toNumberOrBlank_(row['Total Late Minutes']);
    lateMinutes += late === '' ? 0 : late;
    paidTimeOffHours += paidLeave;

    if (status === 'Incomplete (no clock-out)') {
      incompleteDays += 1;
      return;
    }
    if (status === 'Holiday' || status === 'PTO') {
      return;
    }
    if ((status === 'UTO' || status === 'Non-PTO') && worked === '') {
      const unpaidHours = unpaidLeave || CONFIG.legacyDayHours;
      unpaidTimeOffHours += unpaidHours;
      if (unpaidHours >= CONFIG.legacyDayHours) absentDays += 1;
      return;
    }

    unpaidTimeOffHours += unpaidLeave;
    const workedValue = worked === '' ? 0 : worked;
    if (status === 'Absent' && worked === '') {
      const uncoveredAbsentHours = Math.max(0, CONFIG.legacyDayHours - coveredLeave);
      absenceHours += uncoveredAbsentHours;
      if (uncoveredAbsentHours >= CONFIG.legacyDayHours) absentDays += 1;
      return;
    }

    const shortfall = Math.max(0, CONFIG.legacyDayHours - workedValue - coveredLeave);
    const appliedMakeup = Math.min(shortfall, remainingMakeupHours);
    remainingMakeupHours -= appliedMakeup;
    makeupHoursApplied += appliedMakeup;
    workedHours += workedValue + appliedMakeup;
    if (shortfall > appliedMakeup) shortHours += shortfall - appliedMakeup;
  });

  const scheduledBase = scheduledDays * CONFIG.legacyDayHours * hourlyBaseRate;
  // Late minutes affect attendance bonus eligibility only; they do not directly reduce base pay.
  const lateDeduction = 0;
  const absenceDeduction = (absenceHours + unpaidTimeOffHours) * hourlyBaseRate;
  const shortHoursDeduction = shortHours * hourlyBaseRate;
  const totalDeductions = absenceDeduction + shortHoursDeduction;
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
  const bonusAdjustments = summarizeBonusAdjustmentsForContext_(context, normalizePeriodId_(period['Period ID']), code);
  const employeeTimestampRevisionRows = getEmployeeScopedRows_(context.timestampRevisionRowsByEmployee, context.timestampRevisionRows, code);
  const pendingTimestampRevisions = countPendingTimestampRevisionRequests_(employeeTimestampRevisionRows, code, periodStart, periodEnd);
  const isMidPayroll = isMidPayroll_(period);
  const attendanceBonusAmount = toNumberOrZero_(attendanceBonus.amount);
  const quarterlyPaAmount = toNumberOrZero_(quarterlyPaBonus.amount);
  const kpiBonusAmount = (isMidPayroll || finalPayroll) ? bonusAdjustments.kpi : 0;
  const additionalBonusAmount = bonusAdjustments.additional;
  const positiveAdjustmentAmount = bonusAdjustments.positive;
  const negativeAdjustmentAmount = bonusAdjustments.negative;
  const otherBonusAmount = quarterlyPaAmount + additionalBonusAmount;
  const adjustmentAmount = positiveAdjustmentAmount - negativeAdjustmentAmount;
  const canPay = incompleteDays === 0 && pendingTimestampRevisions === 0;
  const total = canPay
    ? scheduledBase - totalDeductions + toNumberOrZero_(benefits.amount) + attendanceBonusAmount + quarterlyPaAmount + kpiBonusAmount + additionalBonusAmount + positiveAdjustmentAmount - negativeAdjustmentAmount
    : '';
  const notes = [];
  if (absentDays) notes.push(`${absentDays} absent day(s).`);
  if (absenceHours) notes.push(`${round2_(absenceHours)} uncovered absent hour(s).`);
  if (paidTimeOffHours) notes.push(`${round2_(paidTimeOffHours)} approved paid time-off hour(s).`);
  if (unpaidTimeOffHours) notes.push(`${round2_(unpaidTimeOffHours)} approved unpaid time-off hour(s).`);
  if (incompleteDays) notes.push(`${incompleteDays} incomplete day(s); verify clock events before payment.`);
  if (pendingTimestampRevisions) notes.push(`${pendingTimestampRevisions} pending timestamp revision request(s); resolve before payment.`);
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

function countPendingTimestampRevisionRequests_(rows, employeeCode, startDate, endDate) {
  const code = normalizeCode_(employeeCode);
  const start = dateOnly_(startDate).getTime();
  const end = dateOnly_(endDate).getTime();
  return (rows || []).filter(row => {
    const workDate = parseDateOrBlank_(row['Work Date']);
    return row['Status (Pending/Approved/Denied)'] === 'Pending'
      && normalizeCode_(row['Employee Code']) === code
      && workDate
      && dateOnly_(workDate).getTime() >= start
      && dateOnly_(workDate).getTime() <= end;
  }).length;
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

function applySheetHeaderFormatting_(sheet, headerCount) {
  sheet.setFrozenRows(1);
  try {
    sheet.setHiddenGridlines(true);
  } catch (error) {
    // Bound spreadsheet UI may omit this surface in some Apps Script contexts.
  }
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
  sheet.setRowHeight(1, 42);
}

function applyChangedRowsFormatting_(sheet, startRow, rowCount, headerCount) {
  if (!startRow || !rowCount || rowCount < 1) return;
  sheet.getRange(startRow, 1, rowCount, headerCount)
    .setBackground(UI_THEME.card)
    .setFontFamily(UI_THEME.sans)
    .setFontColor(UI_THEME.body)
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, true, UI_THEME.rule, SpreadsheetApp.BorderStyle.SOLID);
}

function applyAttendanceChangedRowsFormatting_(sheet, startRow, rowCount, headerCount) {
  applyChangedRowsFormatting_(sheet, startRow, rowCount, headerCount);
}

function applyAttendanceSheetFormatting_(ss, tabName, changedRange) {
  if (tabName === CONFIG.attendanceTabs.scorecard) {
    formatScorecardSheet_(getSheet_(ss, CONFIG.attendanceTabs.scorecard));
    return;
  }
  const headers = getAttendanceHeadersForTab_(tabName);
  if (!headers) return;
  const sheet = getSheet_(ss, tabName);
  applySheetHeaderFormatting_(sheet, headers.length);
  applyAttendanceNumberFormatsForTab_(ss, tabName, changedRange);
  if (changedRange && changedRange.startRow && changedRange.rowCount) {
    applyAttendanceChangedRowsFormatting_(sheet, changedRange.startRow, changedRange.rowCount, headers.length);
  } else if (!changedRange && sheet.getLastRow() > 1) {
    applyAttendanceChangedRowsFormatting_(sheet, 2, sheet.getLastRow() - 1, headers.length);
  }
}

function applyChangedAttendanceRowsByRowNumbers_(ss, tabName, rowNumbers) {
  const rows = (rowNumbers || []).filter(Boolean);
  if (!rows.length) return;
  const startRow = Math.min.apply(null, rows);
  const endRow = Math.max.apply(null, rows);
  applyAttendanceSheetFormatting_(ss, tabName, {
    startRow,
    rowCount: endRow - startRow + 1
  });
}

function getAttendanceHeadersForTab_(tabName) {
  const mapping = {};
  mapping[CONFIG.attendanceTabs.employees] = HEADERS.employees;
  mapping[CONFIG.attendanceTabs.schedules] = HEADERS.schedules;
  mapping[CONFIG.attendanceTabs.holidays] = HEADERS.holidays;
  mapping[CONFIG.attendanceTabs.events] = HEADERS.events;
  mapping[CONFIG.attendanceTabs.log] = HEADERS.log;
  mapping[CONFIG.attendanceTabs.timeOffRequests] = HEADERS.timeOffRequests;
  mapping[CONFIG.attendanceTabs.ptoBalances] = HEADERS.ptoBalances;
  mapping[CONFIG.attendanceTabs.makeupRequests] = HEADERS.makeupRequests;
  mapping[CONFIG.attendanceTabs.timestampRevisions] = HEADERS.timestampRevisions;
  return mapping[tabName] || null;
}

function applyNumberFormatColumns_(sheet, startColumn, columnCount, format, changedRange) {
  if (changedRange && changedRange.startRow && changedRange.rowCount) {
    sheet.getRange(changedRange.startRow, startColumn, changedRange.rowCount, columnCount).setNumberFormat(format);
    return;
  }
  sheet.getRange(1, startColumn, sheet.getMaxRows(), columnCount).setNumberFormat(format);
}

function applyPayrollSheetFormatting_(ss, tabName, changedRange) {
  const headers = getPayrollHeadersForTab_(tabName);
  if (!headers) return;
  const sheet = getSheet_(ss, tabName);
  applySheetHeaderFormatting_(sheet, headers.length);
  applyPayrollNumberFormatsForTab_(ss, tabName, changedRange);
  if (changedRange && changedRange.startRow && changedRange.rowCount) {
    applyChangedRowsFormatting_(sheet, changedRange.startRow, changedRange.rowCount, headers.length);
  } else if (!changedRange && sheet.getLastRow() > 1) {
    applyChangedRowsFormatting_(sheet, 2, sheet.getLastRow() - 1, headers.length);
  }
}

function applyChangedPayrollRowsByRowNumbers_(ss, tabName, rowNumbers) {
  const rows = (rowNumbers || []).filter(Boolean);
  if (!rows.length) return;
  const startRow = Math.min.apply(null, rows);
  const endRow = Math.max.apply(null, rows);
  applyPayrollSheetFormatting_(ss, tabName, {
    startRow,
    rowCount: endRow - startRow + 1
  });
}

function getPayrollHeadersForTab_(tabName) {
  const mapping = {};
  mapping[CONFIG.payrollTabs.comp] = HEADERS.comp;
  mapping[CONFIG.payrollTabs.periods] = HEADERS.periods;
  mapping[CONFIG.payrollTabs.calculations] = HEADERS.calculations;
  mapping[CONFIG.payrollTabs.output] = HEADERS.output;
  mapping[CONFIG.payrollTabs.lifecycle] = HEADERS.lifecycle;
  mapping[CONFIG.payrollTabs.compChanges] = HEADERS.compChanges;
  mapping[CONFIG.payrollTabs.paTracker] = HEADERS.paTracker;
  mapping[CONFIG.payrollTabs.bonuses] = HEADERS.bonuses;
  return mapping[tabName] || null;
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
  setupSheetFormatting_(getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions), HEADERS.timestampRevisions.length);
  formatScorecardSheet_(getSheet_(ss, CONFIG.attendanceTabs.scorecard));

  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.employees), 4, ['Active', 'Inactive', 'Resigned', 'Terminated']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.employees), HEADERS.employees.indexOf('Department') + 1, CONFIG.departments);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.employees), HEADERS.employees.indexOf('Portal Role') + 1, CONFIG.portalRoles);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 4, CONFIG.eventTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.events), 5, ['WEB_APP', 'MANUAL', 'IMPORTED']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.log), 16, CONFIG.statuses);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), 3, CONFIG.timeOffTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), 8, CONFIG.requestStatuses);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests), 14, ['Yes', 'No']);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.makeupRequests), 6, CONFIG.requestStatuses);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions), 4, CONFIG.eventTypes);
  setValidation_(getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions), 9, CONFIG.requestStatuses);

  getSheet_(ss, CONFIG.attendanceTabs.employees).getRange('E:F').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.schedules).getRange('D:S').setNumberFormat('@');
  getSheet_(ss, CONFIG.attendanceTabs.holidays).getRange('A:A').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.events).getRange('B:B').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('A:A').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('D:M').setNumberFormat(CONFIG.sheetTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.log).getRange('N:O').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('D:E').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('F:F').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('J:J').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.timeOffRequests).getRange('L:M').setNumberFormat('@');
  getSheet_(ss, CONFIG.attendanceTabs.ptoBalances).getRange('B:B').setNumberFormat('0');
  getSheet_(ss, CONFIG.attendanceTabs.ptoBalances).getRange('D:L').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('C:C').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('D:D').setNumberFormat('0.00');
  getSheet_(ss, CONFIG.attendanceTabs.makeupRequests).getRange('H:H').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions).getRange('C:C').setNumberFormat('yyyy-mm-dd');
  getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions).getRange('F:G').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions).getRange('J:J').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.attendanceTabs.timestampRevisions).getRange('L:L').setNumberFormat(CONFIG.sheetDateTimeFormat);
  applySpreadsheetChrome_(ss, 'attendance');
}

function applyAttendanceNumberFormatsForTab_(ss, tabName, changedRange) {
  const sheet = getSheet_(ss, tabName);
  if (tabName === CONFIG.attendanceTabs.employees) {
    applyNumberFormatColumns_(sheet, 5, 2, 'yyyy-mm-dd', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.holidays) {
    applyNumberFormatColumns_(sheet, 1, 1, 'yyyy-mm-dd', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.schedules) {
    applyNumberFormatColumns_(sheet, 4, 16, '@', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.events) {
    applyNumberFormatColumns_(sheet, 2, 1, CONFIG.sheetDateTimeFormat, changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.log) {
    applyNumberFormatColumns_(sheet, 1, 1, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 4, 10, CONFIG.sheetTimeFormat, changedRange);
    applyNumberFormatColumns_(sheet, 14, 2, '0.00', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.timeOffRequests) {
    applyNumberFormatColumns_(sheet, 4, 2, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 6, 1, '0.00', changedRange);
    applyNumberFormatColumns_(sheet, 10, 1, CONFIG.sheetDateTimeFormat, changedRange);
    applyNumberFormatColumns_(sheet, 12, 2, '@', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.ptoBalances) {
    applyNumberFormatColumns_(sheet, 2, 1, '0', changedRange);
    applyNumberFormatColumns_(sheet, 4, 9, '0.00', changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.makeupRequests) {
    applyNumberFormatColumns_(sheet, 3, 1, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 4, 1, '0.00', changedRange);
    applyNumberFormatColumns_(sheet, 8, 1, CONFIG.sheetDateTimeFormat, changedRange);
  }
  if (tabName === CONFIG.attendanceTabs.timestampRevisions) {
    applyNumberFormatColumns_(sheet, 3, 1, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 6, 2, CONFIG.sheetDateTimeFormat, changedRange);
    applyNumberFormatColumns_(sheet, 10, 1, CONFIG.sheetDateTimeFormat, changedRange);
    applyNumberFormatColumns_(sheet, 12, 1, CONFIG.sheetDateTimeFormat, changedRange);
  }
}

function applyPayrollNumberFormatsForTab_(ss, tabName, changedRange) {
  const sheet = getSheet_(ss, tabName);
  if (tabName === CONFIG.payrollTabs.comp) {
    applyNumberFormatColumns_(sheet, 2, 2, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 5, 5, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 10, 2, '0.00', changedRange);
    applyNumberFormatColumns_(sheet, 14, 1, '0.00', changedRange);
  }
  if (tabName === CONFIG.payrollTabs.periods) {
    applyNumberFormatColumns_(sheet, 2, 3, 'yyyy-mm-dd', changedRange);
  }
  if (tabName === CONFIG.payrollTabs.calculations) {
    applyNumberFormatColumns_(sheet, 4, 2, 'yyyy-mm-dd', changedRange);
    applyNumberFormatColumns_(sheet, 8, 3, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 13, 1, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 15, 1, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 17, 4, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 23, 2, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 27, 1, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 30, 5, '$#,##0.00', changedRange);
  }
  if (tabName === CONFIG.payrollTabs.output) {
    applyNumberFormatColumns_(sheet, 3, 8, '$#,##0.00', changedRange);
  }
  if (tabName === CONFIG.payrollTabs.lifecycle) {
    applyNumberFormatColumns_(sheet, 4, 2, CONFIG.sheetDateTimeFormat, changedRange);
  }
  if (tabName === CONFIG.payrollTabs.compChanges) {
    applyNumberFormatColumns_(sheet, 3, 2, CONFIG.sheetDateTimeFormat, changedRange);
    applyNumberFormatColumns_(sheet, 11, 1, '$#,##0.00', changedRange);
  }
  if (tabName === CONFIG.payrollTabs.paTracker) {
    applyNumberFormatColumns_(sheet, 12, 1, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 14, 1, CONFIG.sheetDateTimeFormat, changedRange);
  }
  if (tabName === CONFIG.payrollTabs.bonuses) {
    applyNumberFormatColumns_(sheet, 5, 1, '$#,##0.00', changedRange);
    applyNumberFormatColumns_(sheet, 7, 1, CONFIG.sheetDateTimeFormat, changedRange);
  }
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
  getSheet_(ss, CONFIG.payrollTabs.lifecycle).getRange('D:E').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.payrollTabs.compChanges).getRange('C:D').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.payrollTabs.compChanges).getRange('K:K').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.paTracker).getRange('L:L').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.paTracker).getRange('N:N').setNumberFormat(CONFIG.sheetDateTimeFormat);
  getSheet_(ss, CONFIG.payrollTabs.bonuses).getRange('E:E').setNumberFormat('$#,##0.00');
  getSheet_(ss, CONFIG.payrollTabs.bonuses).getRange('G:G').setNumberFormat(CONFIG.sheetDateTimeFormat);
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

function buildAttendanceLogRow_(date, employee, schedule, events, holidays, overrideStatus, approvedTimeOff) {
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
      const adjustedStart = getApprovedLeaveStartCoverageEnd_(approvedTimeOff, daySchedule.start);
      const expectedStart = adjustedStart === '' ? scheduledStart : makeDateAtHour_(date, adjustedStart);
      lateMinutes += Math.max(0, Math.round((parts.clockIn.getTime() - expectedStart.getTime()) / 60000));
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
  return events.map(event => `${CONFIG.eventLabels[event['Event Type']] || event['Event Type']}: ${displayTime_(event.Timestamp)}`);
}

function getEmployeeTimesheetSummaryForPortal_(employeeCode, attendance) {
  try {
    attendance = attendance || requireAttendanceSpreadsheet_();
    const payroll = requirePayrollSpreadsheet_();
    setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
    const windows = getTimesheetReviewWindows_(payroll, dateOnly_(new Date()));
    const countStart = minDate_(windows.currentPeriod.start, windows.recent.start);
    const countEnd = maxDate_(windows.currentPeriod.end, windows.recent.end);
    const employee = getEmployeeRowByCode_(attendance, employeeCode);
    if (!employee) return null;
    const rows = buildTimesheetReviewRows_(attendance, employee, countStart, countEnd, { computeFromSources: true });
    const counts = summarizeTimesheetRows_(rows);
    const recentWorkingRows = getRecentWorkingTimesheetRows_(rows, 2);
    const recentWorkingCounts = summarizeTimesheetRows_(recentWorkingRows);
    const recentFlaggedDays = recentWorkingRows
      .filter(row => timesheetRowHasOpenAttention_(row))
      .map(row => row.dateLabel || displayDate_(row.date));
    return {
      openIssues: counts.openIssues,
      pendingRevisions: counts.pendingRevisions,
      total: counts.openIssues + counts.pendingRevisions,
      recentWorkingOpenIssues: recentWorkingCounts.openIssues,
      recentWorkingPendingRevisions: recentWorkingCounts.pendingRevisions,
      recentWorkingTotal: recentWorkingCounts.openIssues + recentWorkingCounts.pendingRevisions,
      recentWorkingDaysChecked: recentWorkingRows.length,
      recentFlaggedDays,
      recommendedView: recentWorkingCounts.openIssues + recentWorkingCounts.pendingRevisions > 0 ? 'recent' : 'currentPeriod',
      unavailable: false
    };
  } catch (error) {
    return {
      unavailable: true,
      message: 'Timesheet review unavailable.'
    };
  }
}

function getRecentWorkingTimesheetRows_(rows, count) {
  return (rows || [])
    .filter(row => row && row.status !== 'Off (not scheduled)')
    .sort((a, b) => {
      const aDate = parseDateOrBlank_(a.date);
      const bDate = parseDateOrBlank_(b.date);
      return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
    })
    .slice(0, count || 2);
}

function timesheetRowHasOpenAttention_(row) {
  if (!row) return false;
  const issues = row.issues || [];
  return issues.some(issue => !issue.isRevision) || toNumberOrZero_(row.pendingRevisionCount) > 0;
}

function getTimesheetReviewWindows_(payroll, today) {
  const current = getCurrentTimesheetPayPeriod_(payroll, today);
  const todayOnly = dateOnly_(today);
  const currentEnd = minDate_(current.end, todayOnly);
  const currentStart = current.start.getTime() <= currentEnd.getTime() ? current.start : currentEnd;
  current.start = currentStart;
  current.end = currentEnd;
  current.startDate = displayDate_(currentStart);
  current.endDate = displayDate_(currentEnd);
  current.label = current.periodId
    ? `${current.periodId}: ${displayDate_(currentStart)} - ${displayDate_(currentEnd)}`
    : `Current period: ${displayDate_(currentStart)} - ${displayDate_(currentEnd)}`;
  const recentStart = addDays_(dateOnly_(today), -13);
  const recentEnd = todayOnly;
  return {
    currentPeriod: current,
    recent: {
      label: `Recent: ${displayDate_(recentStart)} - ${displayDate_(recentEnd)}`,
      start: recentStart,
      end: recentEnd,
      startDate: displayDate_(recentStart),
      endDate: displayDate_(recentEnd)
    }
  };
}

function getCurrentTimesheetPayPeriod_(payroll, today) {
  const date = dateOnly_(today);
  const periods = readObjects_(getSheet_(payroll, CONFIG.payrollTabs.periods))
    .map(row => ({
      periodId: normalizePeriodId_(row['Period ID']),
      payDate: parseDateOrBlank_(row['Pay Date']),
      start: parseDateOrBlank_(row['Period Start']),
      end: parseDateOrBlank_(row['Period End']),
      status: row['Status (Open / Calculated / Paid)'] || ''
    }))
    .filter(period => period.start && period.end)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const containing = periods.filter(period => {
    return date.getTime() >= dateOnly_(period.start).getTime() && date.getTime() <= dateOnly_(period.end).getTime();
  })[0];
  const nextOpen = periods.filter(period => {
    return period.status === 'Open' && dateOnly_(period.end).getTime() >= date.getTime();
  })[0];
  const fallback = periods.length ? periods[periods.length - 1] : null;
  const period = containing || nextOpen || fallback;

  if (!period) {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {
      periodId: '',
      label: `Current period: ${displayDate_(start)} - ${displayDate_(end)}`,
      start,
      end,
      startDate: displayDate_(start),
      endDate: displayDate_(end)
    };
  }

  return {
    periodId: period.periodId,
    label: `${period.periodId}: ${displayDate_(period.start)} - ${displayDate_(period.end)}`,
    start: dateOnly_(period.start),
    end: dateOnly_(period.end),
    startDate: displayDate_(period.start),
    endDate: displayDate_(period.end)
  };
}

function buildEmployeeTimesheetReviewResponse_(attendance, employee, selectedWindow, windows, mode, countStart, countEnd) {
  const countRows = buildTimesheetReviewRows_(attendance, employee, countStart, countEnd, { computeFromSources: true });
  const selectedStart = dateOnly_(selectedWindow.start).getTime();
  const selectedEnd = dateOnly_(selectedWindow.end).getTime();
  const selectedRows = countRows.filter(row => {
    const rowDate = parseDateOrBlank_(row.date);
    if (!rowDate) return false;
    const rowTime = dateOnly_(rowDate).getTime();
    return rowTime >= selectedStart && rowTime <= selectedEnd;
  });
  const counts = summarizeTimesheetRows_(countRows);
  return {
    authenticated: true,
    viewMode: mode,
    employee: {
      employeeCode: normalizeCode_(employee['Employee Code']),
      displayName: employee['Display Name'] || employee['Full Name'] || employee['Employee Code']
    },
    currentPeriod: clientWindow_(windows.currentPeriod),
    recent: clientWindow_(windows.recent),
    selectedWindow: clientWindow_(selectedWindow),
    counts: {
      openIssues: counts.openIssues,
      pendingRevisions: counts.pendingRevisions,
      total: counts.openIssues + counts.pendingRevisions
    },
    eventTypes: CONFIG.eventTypes.map(type => ({ type, label: CONFIG.eventLabels[type] || type })),
    rows: selectedRows
  };
}

function clientWindow_(window) {
  return {
    periodId: window.periodId || '',
    label: window.label || '',
    startDate: displayDate_(window.start || window.startDate),
    endDate: displayDate_(window.end || window.endDate)
  };
}

function buildTimesheetReviewRows_(attendance, employee, startDate, endDate, options) {
  options = options || {};
  const code = normalizeCode_(employee['Employee Code']);
  const start = dateOnly_(startDate);
  const end = dateOnly_(endDate);
  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const events = getClockEvents_(attendance, start, endOfDay_(end), code);
  const logRows = options.computeFromSources
    ? buildTimesheetLogRowsFromSources_(attendance, employee, start, end, schedules, events)
    : readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log))
      .filter(row => {
        const date = parseDateOrBlank_(row.Date);
        return normalizeCode_(row['Employee Code']) === code
          && date
          && date.getTime() >= start.getTime()
          && date.getTime() <= end.getTime();
      });
  const revisions = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timestampRevisions))
    .filter(row => {
      const date = parseDateOrBlank_(row['Work Date']);
      return normalizeCode_(row['Employee Code']) === code
        && date
        && date.getTime() >= start.getTime()
        && date.getTime() <= end.getTime();
    });
  const approvedTimeOffByKey = buildApprovedTimeOffHoursByDate_(
    readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests)),
    schedules,
    code,
    start,
    end
  );
  const logByDate = {};
  const eventsByDate = {};
  const revisionsByDate = {};

  logRows.forEach(row => {
    logByDate[formatDateKey_(row.Date)] = row;
  });
  events.forEach(event => {
    const key = formatDateKey_(event.Timestamp);
    if (!eventsByDate[key]) eventsByDate[key] = [];
    eventsByDate[key].push(event);
  });
  revisions.forEach(row => {
    const key = formatDateKey_(row['Work Date']);
    if (!revisionsByDate[key]) revisionsByDate[key] = [];
    revisionsByDate[key].push(row);
  });

  const rows = [];
  for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays_(cursor, 1)) {
    if (!employeeEmployedOnDate_(employee, cursor)) continue;
    const key = formatDateKey_(cursor);
    const logRow = logByDate[key] || {};
    const rowEvents = eventsByDate[key] || [];
    const rowRevisions = revisionsByDate[key] || [];
    const schedule = getScheduleForDate_(schedules, code, cursor);
    const daySchedule = getDaySchedule_(schedule, cursor);
    const pending = rowRevisions.filter(row => row['Status (Pending/Approved/Denied)'] === 'Pending');
    const issues = buildTimesheetIssueList_(logRow, daySchedule, pending, approvedTimeOffByKey[`${key}|${code}`]);
    const eventOptions = rowEvents.map(event => ({
      eventId: String(event['Event ID'] || ''),
      eventType: event['Event Type'] || '',
      eventLabel: CONFIG.eventLabels[event['Event Type']] || event['Event Type'] || '',
      timestamp: displayDateTime_(event.Timestamp),
      timeLabel: displayTime_(event.Timestamp)
    }));

    rows.push({
      date: key,
      dateLabel: Utilities.formatDate(cursor, CONFIG.timezone, 'EEE, MMM d'),
      schedule: buildScheduleLabelForTimesheet_(logRow, daySchedule, cursor),
      scheduledStart: displayTime_(logRow['Scheduled Start']),
      scheduledEnd: displayTime_(logRow['Scheduled End']),
      clockIn: displayTime_(logRow['Clock In']),
      lunchStart: displayTime_(logRow['Lunch Start']),
      lunchEnd: displayTime_(logRow['Lunch End']),
      break1Start: displayTime_(logRow['Break 1 Start']),
      break1End: displayTime_(logRow['Break 1 End']),
      break2Start: displayTime_(logRow['Break 2 Start']),
      break2End: displayTime_(logRow['Break 2 End']),
      clockOut: displayTime_(logRow['Clock Out']),
      workedHours: logRow['Worked Hours'] === undefined || logRow['Worked Hours'] === '' ? '' : round2_(logRow['Worked Hours']),
      lateMinutes: logRow['Total Late Minutes'] === undefined || logRow['Total Late Minutes'] === '' ? '' : round2_(logRow['Total Late Minutes']),
      status: logRow.Status || '',
      issues,
      pendingRevisionCount: pending.length,
      revisionStatus: buildRevisionStatusSummary_(rowRevisions),
      suggestedEventType: suggestTimesheetRevisionEventType_(issues, rowEvents),
      events: eventOptions
    });
  }
  return rows;
}

function buildTimesheetLogRowsFromSources_(attendance, employee, startDate, endDate, schedules, events) {
  const code = normalizeCode_(employee['Employee Code']);
  events = events || getClockEvents_(attendance, startDate, endOfDay_(endDate), code);
  const holidays = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.holidays));
  const overrides = readAttendanceStatusOverrides_(attendance, startDate, endDate);
  const approvedTimeOffByKey = buildApprovedTimeOffHoursByDate_(
    readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests)),
    schedules,
    code,
    startDate,
    endDate
  );
  const eventsByKey = groupEventsByDateEmployee_(events);
  const rows = [];

  for (let cursor = dateOnly_(startDate); cursor.getTime() <= dateOnly_(endDate).getTime(); cursor = addDays_(cursor, 1)) {
    if (!employeeEmployedOnDate_(employee, cursor)) continue;
    const schedule = getScheduleForDate_(schedules, code, cursor);
    const key = `${formatDateKey_(cursor)}|${code}`;
    const rowValues = buildAttendanceLogRow_(cursor, employee, schedule, eventsByKey[key] || [], holidays, overrides[key], approvedTimeOffByKey[key]);
    const rowObject = {};
    HEADERS.log.forEach((header, index) => {
      rowObject[header] = rowValues[index];
    });
    rows.push(rowObject);
  }
  return rows;
}

function buildScheduleLabelForTimesheet_(logRow, daySchedule, date) {
  const scheduledStart = parseDateOrBlank_(logRow['Scheduled Start']);
  const scheduledEnd = parseDateOrBlank_(logRow['Scheduled End']);
  if (scheduledStart && scheduledEnd) return `${displayTime_(scheduledStart)} - ${displayTime_(scheduledEnd)}`;
  if (daySchedule && daySchedule.isScheduled) {
    return `${displayTime_(makeDateAtHour_(date, daySchedule.start))} - ${displayTime_(makeDateAtHour_(date, daySchedule.end))}`;
  }
  return 'Not scheduled';
}

function buildTimesheetIssueList_(logRow, daySchedule, pendingRevisions, approvedTimeOff) {
  const issues = [];
  const status = String(logRow.Status || '');
  const isScheduled = Boolean((logRow && logRow['Scheduled Start']) || (daySchedule && daySchedule.isScheduled));
  const nonWorkStatus = ['PTO', 'UTO', 'Non-PTO', 'Holiday', 'Off (not scheduled)'].indexOf(status) !== -1;
  const clockIn = parseDateOrBlank_(logRow['Clock In']);
  const clockOut = parseDateOrBlank_(logRow['Clock Out']);
  const lunchStart = parseDateOrBlank_(logRow['Lunch Start']);
  const lunchEnd = parseDateOrBlank_(logRow['Lunch End']);
  const scheduledLunch = daySchedule && daySchedule.lunchStart !== '' && daySchedule.lunchEnd !== '';
  const workedHours = toNumberOrBlank_(logRow['Worked Hours']);
  const lateMinutes = toNumberOrBlank_(logRow['Total Late Minutes']);
  const approvedHours = approvedTimeOff ? Math.min(CONFIG.legacyDayHours, toNumberOrZero_(approvedTimeOff.total)) : 0;

  if (isScheduled && !nonWorkStatus && !clockIn) {
    issues.push({ code: 'missingClockIn', label: 'Missing clock-in', eventType: 'CLOCK_IN' });
  }
  if (isScheduled && !nonWorkStatus && !clockOut) {
    issues.push({ code: 'missingClockOut', label: 'Missing clock-out', eventType: 'CLOCK_OUT' });
  }
  if (isScheduled && !nonWorkStatus && scheduledLunch && (!lunchStart || !lunchEnd)) {
    issues.push({ code: 'missingLunchPair', label: 'Missing lunch pair', eventType: lunchStart ? 'LUNCH_END' : 'LUNCH_START' });
  }
  if (lateMinutes !== '' && lateMinutes > 0) {
    issues.push({ code: 'lateMinutes', label: `${round2_(lateMinutes)} late minute(s)`, eventType: clockIn ? 'LUNCH_END' : 'CLOCK_IN' });
  }
  if (workedHours !== '' && workedHours + approvedHours < CONFIG.legacyDayHours && status === 'Present') {
    issues.push({ code: 'shortHours', label: `${round2_(CONFIG.legacyDayHours - workedHours - approvedHours)} short hour(s)`, eventType: 'CLOCK_OUT' });
  }
  if (status === 'Absent') {
    issues.push({ code: 'absent', label: 'Absent', eventType: 'CLOCK_IN' });
  }
  if (status === 'Incomplete (no clock-out)') {
    issues.push({ code: 'incomplete', label: 'Incomplete', eventType: 'CLOCK_OUT' });
  }
  (pendingRevisions || []).forEach(row => {
    issues.push({
      code: 'pendingRevision',
      label: `Pending revision: ${CONFIG.eventLabels[row['Event Type']] || row['Event Type']}`,
      eventType: row['Event Type'] || '',
      isRevision: true
    });
  });
  return issues;
}

function summarizeTimesheetRows_(rows) {
  return (rows || []).reduce((summary, row) => {
    const issues = row.issues || [];
    summary.openIssues += issues.filter(issue => !issue.isRevision).length;
    summary.pendingRevisions += row.pendingRevisionCount || 0;
    return summary;
  }, { openIssues: 0, pendingRevisions: 0 });
}

function buildRevisionStatusSummary_(revisions) {
  if (!revisions || !revisions.length) return '';
  const counts = {};
  revisions.forEach(row => {
    const status = row['Status (Pending/Approved/Denied)'] || 'Pending';
    counts[status] = (counts[status] || 0) + 1;
  });
  return Object.keys(counts).sort().map(status => `${counts[status]} ${status.toLowerCase()}`).join(', ');
}

function suggestTimesheetRevisionEventType_(issues, events) {
  const issue = (issues || []).filter(item => item.eventType && !item.isRevision)[0];
  if (issue) return issue.eventType;
  const lastEvent = (events || []).slice().sort((a, b) => {
    const aDate = parseDateOrBlank_(a.Timestamp);
    const bDate = parseDateOrBlank_(b.Timestamp);
    return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
  })[0];
  return lastEvent ? lastEvent['Event Type'] : 'CLOCK_IN';
}

function parseTimesheetTimeInput_(value) {
  const parsed = parseScheduleTimeValueToDecimal_(value);
  if (parsed === '') return '';
  if (parsed < 0 || parsed >= 24) return '';
  return parsed;
}

function getTimestampRevisionIssueContext_(attendance, revisionRow) {
  const code = normalizeCode_(revisionRow['Employee Code']);
  const date = parseDateOrBlank_(revisionRow['Work Date']);
  if (!code || !date) return '';
  const logRow = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.log))
    .filter(row => normalizeCode_(row['Employee Code']) === code && formatDateKey_(row.Date) === formatDateKey_(date))[0] || {};
  const schedule = getScheduleForDate_(readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules)), code, date);
  const issues = buildTimesheetIssueList_(logRow, getDaySchedule_(schedule, date), []);
  return issues.length ? issues.map(issue => issue.label).join(' | ') : 'No current issue flag';
}

function resolveWebAppEmployee_(identity, ss) {
  ss = ss || requireAttendanceSpreadsheet_();
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

function resolvePortalUser_(identity) {
  identity = identity || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
  const employees = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.employees))
    .filter(row => (row.Status || 'Active') === 'Active' || row.Status === '');
  const activeUserEmail = (getActiveUserEmail_() || '').toLowerCase();

  if (identity.loginMode === 'admin') {
    const adminEmail = String(identity.adminEmail || identity.email || '').trim().toLowerCase();
    const adminKey = String(identity.adminKey || '').trim();
    if (!adminEmail || !adminKey) {
      return { authenticated: false, activeUserEmail, message: 'Enter admin email and access key.' };
    }
    let keyValid = false;
    try {
      keyValid = validatePortalAdminAccessKey_(adminKey);
    } catch (error) {
      return { authenticated: false, activeUserEmail, message: error.message || String(error) };
    }
    if (!keyValid) {
      return { authenticated: false, activeUserEmail, message: 'Admin access key is incorrect.' };
    }
    const adminRow = employees.filter(row => String(row.Email || '').toLowerCase() === adminEmail)[0];
    if (!adminRow) {
      return { authenticated: false, activeUserEmail, message: 'No active employee row matches that admin email.' };
    }
    const role = normalizePortalRole_(adminRow['Portal Role']);
    if (!hasPortalPermission_(role, 'Attendance Admin')) {
      return { authenticated: false, activeUserEmail, message: 'That email is not assigned an admin portal role.' };
    }
    return buildPortalUserFromEmployee_(adminRow, role, activeUserEmail || adminEmail, false);
  }

  if (activeUserEmail) {
    const byEmail = employees.filter(row => String(row.Email || '').toLowerCase() === activeUserEmail)[0];
    if (byEmail) return buildPortalUserFromEmployee_(byEmail, normalizePortalRole_(byEmail['Portal Role']), activeUserEmail, false);
  }

  if (identity && identity.employeeCode && identity.pin) {
    const code = normalizeCode_(identity.employeeCode);
    const pin = String(identity.pin);
    const byPin = employees.filter(row => {
      return normalizeCode_(row['Employee Code']) === code && String(row['Web App PIN'] || '') === pin;
    })[0];
    if (byPin) return buildPortalUserFromEmployee_(byPin, CONFIG.defaultPortalRole, activeUserEmail, true);
  }

  return {
    authenticated: false,
    activeUserEmail
  };
}

function buildPortalUserFromEmployee_(employee, role, activeUserEmail, usedPinFallback) {
  const normalizedRole = normalizePortalRole_(role);
  const employeeCode = normalizeCode_(employee['Employee Code']);
  return {
    authenticated: true,
    employeeCode,
    displayName: employee['Display Name'] || employee['Full Name'] || employeeCode,
    fullName: employee['Full Name'] || '',
    email: employee.Email || '',
    activeUserEmail: activeUserEmail || '',
    role: normalizedRole,
    usedPinFallback: Boolean(usedPinFallback),
    permissions: {
      employee: true,
      attendanceAdmin: hasPortalPermission_(normalizedRole, 'Attendance Admin'),
      payrollAdmin: hasPortalPermission_(normalizedRole, 'Payroll Admin')
    }
  };
}

function requirePortalRole_(requiredRole, identity) {
  const portalUser = resolvePortalUser_(identity || PORTAL_AUTH_IDENTITY_CONTEXT_ || {});
  if (!portalUser.authenticated || !hasPortalPermission_(portalUser.role, requiredRole)) {
    throw new Error(`${requiredRole} access is required. Sign in with Admin Login using an authorized email and access key.`);
  }
  return portalUser;
}

function withPortalAuthContext_(identity, callback) {
  const prior = PORTAL_AUTH_IDENTITY_CONTEXT_;
  PORTAL_AUTH_IDENTITY_CONTEXT_ = identity || prior || {};
  try {
    return callback();
  } finally {
    PORTAL_AUTH_IDENTITY_CONTEXT_ = prior;
  }
}

function hasPortalPermission_(actualRole, requiredRole) {
  const hierarchy = {
    Employee: 1,
    'Attendance Admin': 2,
    'Payroll Admin': 3
  };
  const actual = hierarchy[normalizePortalRole_(actualRole)] || 0;
  const required = hierarchy[normalizePortalRole_(requiredRole)] || 1;
  return actual >= required;
}

function validatePortalAdminAccessKey_(accessKey) {
  const props = PropertiesService.getScriptProperties();
  const salt = props.getProperty(CONFIG.portalAdminAccessKeySaltProp);
  const expectedHash = props.getProperty(CONFIG.portalAdminAccessKeyHashProp);
  if (!salt || !expectedHash) {
    throw new Error('Portal admin access key has not been set. Use the Attendance or Payroll menu: Set Portal Admin Access Key.');
  }
  return hashPortalAdminAccessKey_(String(accessKey || '').trim(), salt) === expectedHash;
}

function hashPortalAdminAccessKey_(accessKey, salt) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    `${salt}|${accessKey}`,
    Utilities.Charset.UTF_8
  );
  return digest.map(byte => {
    const value = byte < 0 ? byte + 256 : byte;
    return (`0${value.toString(16)}`).slice(-2);
  }).join('');
}

function appendClockEvent_(entry) {
  const ss = requireAttendanceSpreadsheet_();
  const sheet = getSheet_(ss, CONFIG.attendanceTabs.events);
  const eventId = entry.eventId || makeId_('EVT');
  const eventRange = appendRows_(sheet, [[
    eventId,
    entry.timestamp || new Date(),
    normalizeCode_(entry.employeeCode),
    entry.eventType,
    entry.source || 'WEB_APP',
    entry.device || '',
    entry.notes || '',
    entry.revisionRequestId || '',
    entry.correctsEventId || ''
  ]]);
  applyAttendanceChangedRowsFormatting_(sheet, eventRange.startRow, eventRange.rowCount, HEADERS.events.length);
  applyAttendanceNumberFormatsForTab_(ss, CONFIG.attendanceTabs.events, eventRange);
  return {
    eventId,
    range: eventRange
  };
}

function getClockEvents_(ss, startDate, endDate, employeeCode) {
  const rows = applyClockEventCorrections_(readObjects_(getSheet_(ss, CONFIG.attendanceTabs.events)));
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

function applyClockEventCorrections_(rows) {
  const correctedEventIds = {};
  rows.forEach(row => {
    const correctedId = String(row['Corrects Event ID'] || '').trim();
    if (correctedId) correctedEventIds[correctedId] = true;
  });
  return rows.filter(row => !correctedEventIds[String(row['Event ID'] || '').trim()]);
}

function getRawClockEventById_(attendance, eventId) {
  const target = String(eventId || '').trim();
  if (!target) return null;
  return readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.events))
    .filter(row => String(row['Event ID'] || '').trim() === target)[0] || null;
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
    if (!isFullDayTimeOffRequest_(row)) return;
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

function calculateTimeOffRequestFromPayload_(attendance, employeeCode, payload) {
  payload = payload || {};
  const code = normalizeCode_(employeeCode);
  const startDate = parseDateOrBlank_(payload.startDate);
  const endDate = parseDateOrBlank_(payload.endDate);
  if (!code) throw new Error('Employee is required.');
  if (!startDate || !endDate) throw new Error('Start Date and End Date are required.');
  if (dateOnly_(startDate).getTime() > dateOnly_(endDate).getTime()) {
    throw new Error('End Date must be on or after Start Date.');
  }

  const schedules = readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules));
  const fullDay = normalizeYesNo_(payload.fullDay || payload.fullDayRequest || payload.isFullDay) === 'Yes';
  if (fullDay) {
    let requestedHours = 0;
    for (let cursor = dateOnly_(startDate); cursor.getTime() <= dateOnly_(endDate).getTime(); cursor = addDays_(cursor, 1)) {
      const daySchedule = getDaySchedule_(getScheduleForDate_(schedules, code, cursor), cursor);
      if (!daySchedule.isScheduled) {
        throw new Error(`${formatDateKey_(cursor)} is not a scheduled workday. Full-day time off can only include scheduled days.`);
      }
      const dayHours = calculateFullDayTimeOffHours_(daySchedule);
      if (dayHours <= 0) throw new Error(`${formatDateKey_(cursor)} has no payable scheduled hours.`);
      requestedHours += dayHours;
    }
    return {
      requestedHours: round2_(requestedHours),
      startTime: '',
      endTime: '',
      fullDay: true,
      note: `Full-day request uses scheduled shift length minus ${CONFIG.standardFullDayLunchHours} unpaid lunch hour.`
    };
  }

  if (dateOnly_(startDate).getTime() !== dateOnly_(endDate).getTime()) {
    throw new Error('Partial-day time off must be submitted one date at a time. Use Full Day for multi-day requests.');
  }
  const startTime = parseTimesheetTimeInput_(payload.startTime);
  const endTime = parseTimesheetTimeInput_(payload.endTime);
  if (startTime === '' || endTime === '') throw new Error('Enter Start Time and End Time as HH:MMam/pm.');
  if (endTime <= startTime) throw new Error('End Time must be after Start Time.');
  const daySchedule = getDaySchedule_(getScheduleForDate_(schedules, code, startDate), startDate);
  if (!daySchedule.isScheduled) throw new Error(`${formatDateKey_(startDate)} is not a scheduled workday.`);
  if (startTime < daySchedule.start || endTime > daySchedule.end) {
    throw new Error(`Partial time off must stay inside the scheduled shift (${formatHour_(daySchedule.start)}-${formatHour_(daySchedule.end)}).`);
  }
  return {
    requestedHours: round2_(endTime - startTime),
    startTime: formatHour_(startTime),
    endTime: formatHour_(endTime),
    fullDay: false,
    note: 'Partial-day request counts exact requested time; lunch is not subtracted automatically.'
  };
}

function calculateFullDayTimeOffHours_(daySchedule) {
  if (!daySchedule || !daySchedule.isScheduled) return 0;
  return round2_(Math.max(0, daySchedule.end - daySchedule.start - CONFIG.standardFullDayLunchHours));
}

function normalizeYesNo_(value) {
  const text = String(value || '').trim().toLowerCase();
  if (text === 'yes' || text === 'y' || text === 'true' || text === '1' || text === 'on') return 'Yes';
  return 'No';
}

function isFullDayTimeOffRequest_(row) {
  return normalizeYesNo_(row['Full Day?']) === 'Yes'
    || (!row['Start Time'] && !row['End Time'] && toNumberOrBlank_(row['Requested Hours']) !== '');
}

function createTimeOffRequest_(payload, source) {
  payload = payload || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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
  const calculation = calculateTimeOffRequestFromPayload_(attendance, employeeCode, payload);
  if (calculation.requestedHours === '' || calculation.requestedHours <= 0) throw new Error('Requested Hours must be greater than zero.');
  const reason = String(payload.reason || '').trim();
  if (!reason) throw new Error('Reason is required.');
  const requestId = makeId_('TO');
  const notes = [
    `Submitted via ${source === 'WEB_APP' ? 'clock app' : 'sheet menu'} by ${getActiveUserEmail_() || employeeCode}.`,
    calculation.note
  ].filter(Boolean).join(' ');

  const requestRange = appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.timeOffRequests), [[
    requestId,
    employeeCode,
    type,
    dateOnly_(startDate),
    dateOnly_(endDate),
    round2_(calculation.requestedHours),
    reason,
    'Pending',
    '',
    '',
    notes,
    calculation.startTime,
    calculation.endTime,
    calculation.fullDay ? 'Yes' : 'No'
  ]]);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.timeOffRequests, requestRange);
  return { requestId, employeeCode, type };
}

function createMakeupHourRequest_(payload, source) {
  payload = payload || {};
  const attendance = requireAttendanceSpreadsheet_();
  setupAttendanceSpreadsheet_(attendance, { formatMode: 'none', migrations: false });
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

  const requestRange = appendRows_(getSheet_(attendance, CONFIG.attendanceTabs.makeupRequests), [[
    requestId,
    employeeCode,
    dateOnly_(date),
    round2_(hours),
    `${reason} (Submitted via ${sourceNote}.)`,
    'Pending',
    '',
    ''
  ]]);
  applyAttendanceSheetFormatting_(attendance, CONFIG.attendanceTabs.makeupRequests, requestRange);
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

  const usage = summarizeApprovedTimeOffUsage_(requests, null, attendance);
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
      const balance = calculatePtoBalanceForEmployeeYear_(employeesByCode[code], compRows, requests, code, year, null, attendance);
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

function getPtoBalanceSummaryForEmployee_(employeeCode, year, attendance) {
  try {
    attendance = attendance || requireAttendanceSpreadsheet_();
    if (!hasSheet_(attendance, CONFIG.attendanceTabs.ptoBalances)) {
      return buildUnavailablePtoBalanceSummary_('PTO balance unavailable. Attendance setup needs review.');
    }
    let summaries = getPtoBalanceSummariesByEmployee_(attendance, year);
    return summaries[normalizeCode_(employeeCode)]
      || buildUnavailablePtoBalanceSummary_('PTO balance unavailable. Ask an admin to refresh PTO balances.');
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
      annualPto: toNumberOrBlank_(row['Annual PTO Hours']),
      monthlyPtoAccrualDays: toNumberOrBlank_(row['Monthly PTO Accrual Hours']),
      earnedPto: toNumberOrBlank_(row['Earned PTO Hours']),
      usedPto: toNumberOrBlank_(row['Used PTO Hours']),
      remainingPto: toNumberOrBlank_(row['Remaining PTO Hours']),
      payoutEligiblePto: toNumberOrBlank_(row['Payout Eligible PTO Hours']),
      annualNonPto: toNumberOrBlank_(row['Annual Non-PTO Hours']),
      usedNonPto: toNumberOrBlank_(row['Used Non-PTO Hours']),
      remainingNonPto: toNumberOrBlank_(row['Remaining Non-PTO Hours'])
    };
  });
  return summaries;
}

function calculatePtoBalanceForEmployeeYear_(employee, compRows, requests, employeeCode, year, asOfOverride, attendance) {
  const code = normalizeCode_(employeeCode);
  const yearEnd = new Date(year, 11, 31);
  const asOfDate = asOfOverride ? dateOnly_(asOfOverride) : getPtoBalanceAsOfDate_(employee, year);
  const compDate = minDate_(asOfDate, yearEnd);
  const comp = getCompForDate_(compRows, code, compDate) || getCompForYear_(compRows, code, year);
  const planType = normalizePtoPlanType_(comp ? comp['PTO Plan Type'] : '');
  const used = summarizeApprovedTimeOffUsage_(requests, asOfDate, attendance)[`${code}|${year}`] || { pto: 0, nonPto: 0 };
  const annualPto = comp ? toNumberOrBlank_(comp['Annual PTO Hours']) : '';
  const annualNonPto = comp ? toNumberOrBlank_(comp['Annual Non-PTO Hours']) : '';
  const monthlyAccrual = planType === 'Accrued Monthly'
    ? (comp ? toNumberOrBlank_(comp['Monthly PTO Accrual Hours']) : '')
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
    const monthlyRate = toNumberOrBlank_(comp['Monthly PTO Accrual Hours']);
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

function buildApprovedTimeOffHoursByDate_(requests, schedules, employeeCode, startDate, endDate) {
  const map = {};
  const codeFilter = employeeCode ? normalizeCode_(employeeCode) : '';
  const windowStart = dateOnly_(startDate);
  const windowEnd = dateOnly_(endDate);
  (requests || []).forEach(row => {
    if (row['Status (Pending/Approved/Denied)'] !== 'Approved') return;
    const type = row['Type (PTO/UTO/Non-PTO)'];
    if (CONFIG.timeOffTypes.indexOf(type) === -1) return;
    const code = normalizeCode_(row['Employee Code']);
    if (!code || (codeFilter && code !== codeFilter)) return;
    getTimeOffRequestDailySegments_(row, schedules || [], code, windowStart, windowEnd).forEach(segment => {
      const key = `${formatDateKey_(segment.date)}|${code}`;
      if (!map[key]) map[key] = { pto: 0, uto: 0, nonPto: 0, unpaid: 0, total: 0, segments: [] };
      const hours = toNumberOrZero_(segment.hours);
      if (type === 'PTO') map[key].pto += hours;
      if (type === 'UTO') map[key].uto += hours;
      if (type === 'Non-PTO') map[key].nonPto += hours;
      if (type === 'UTO' || type === 'Non-PTO') map[key].unpaid += hours;
      map[key].total += hours;
      map[key].segments.push(Object.assign({}, segment, { type }));
    });
  });
  return map;
}

function getTimeOffRequestDailySegments_(row, schedules, employeeCode, startDate, endDate) {
  const requestStart = parseDateOrBlank_(row['Start Date']);
  const requestEnd = parseDateOrBlank_(row['End Date']);
  if (!requestStart || !requestEnd) return [];
  const start = maxDate_(dateOnly_(requestStart), dateOnly_(startDate));
  const end = minDate_(dateOnly_(requestEnd), dateOnly_(endDate));
  if (start.getTime() > end.getTime()) return [];

  if (isFullDayTimeOffRequest_(row)) {
    const segments = [];
    const requestedHours = toNumberOrBlank_(row['Requested Hours']);
    const requestDayCount = countInclusiveDays_(requestStart, requestEnd) || 1;
    for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays_(cursor, 1)) {
      const daySchedule = getDaySchedule_(getScheduleForDate_(schedules, employeeCode, cursor), cursor);
      let hours = daySchedule.isScheduled ? calculateFullDayTimeOffHours_(daySchedule) : 0;
      if (!hours && requestedHours !== '') hours = requestedHours / requestDayCount;
      if (!hours) continue;
      segments.push({
        date: dateOnly_(cursor),
        hours: round2_(hours),
        start: daySchedule.isScheduled ? daySchedule.start : '',
        end: daySchedule.isScheduled ? daySchedule.end : '',
        fullDay: true
      });
    }
    return segments;
  }

  if (dateOnly_(requestStart).getTime() !== dateOnly_(requestEnd).getTime()) return [];
  const requestDate = dateOnly_(requestStart);
  if (requestDate.getTime() < start.getTime() || requestDate.getTime() > end.getTime()) return [];
  const startTime = parseTimesheetTimeInput_(row['Start Time']);
  const endTime = parseTimesheetTimeInput_(row['End Time']);
  const requestedHours = toNumberOrBlank_(row['Requested Hours']);
  if (startTime === '' || endTime === '' || endTime <= startTime) {
    return requestedHours === '' ? [] : [{
      date: requestDate,
      hours: round2_(requestedHours),
      start: '',
      end: '',
      fullDay: false
    }];
  }
  return [{
    date: requestDate,
    hours: round2_(endTime - startTime),
    start: startTime,
    end: endTime,
    fullDay: false
  }];
}

function getApprovedLeaveStartCoverageEnd_(approvedTimeOff, scheduledStart) {
  if (!approvedTimeOff || scheduledStart === '') return '';
  let coverageEnd = scheduledStart;
  const segments = (approvedTimeOff.segments || [])
    .filter(segment => segment.start !== '' && segment.end !== '')
    .sort((a, b) => a.start - b.start);
  segments.forEach(segment => {
    if (segment.start <= coverageEnd && segment.end > coverageEnd) {
      coverageEnd = segment.end;
    }
  });
  return coverageEnd > scheduledStart ? coverageEnd : '';
}

function summarizeApprovedTimeOffUsage_(requests, cutoffDate, attendance) {
  const usage = {};
  const cutoff = cutoffDate ? dateOnly_(cutoffDate) : null;
  const schedules = attendance && hasSheet_(attendance, CONFIG.attendanceTabs.schedules)
    ? readObjects_(getSheet_(attendance, CONFIG.attendanceTabs.schedules))
    : [];
  requests.forEach(row => {
    if (row['Status (Pending/Approved/Denied)'] !== 'Approved') return;
    const type = row['Type (PTO/UTO/Non-PTO)'];
    if (type !== 'PTO' && type !== 'Non-PTO') return;
    const code = normalizeCode_(row['Employee Code']);
    const start = parseDateOrBlank_(row['Start Date']);
    const end = parseDateOrBlank_(row['End Date']);
    if (!code || !start || !end) return;
    const effectiveEnd = cutoff ? minDate_(dateOnly_(end), cutoff) : dateOnly_(end);
    if (effectiveEnd.getTime() < dateOnly_(start).getTime()) return;
    const segments = getTimeOffRequestDailySegments_(row, schedules, code, dateOnly_(start), effectiveEnd);
    segments.forEach(segment => {
      const year = segment.date.getFullYear();
      const key = `${code}|${year}`;
      if (!usage[key]) usage[key] = { pto: 0, nonPto: 0 };
      if (type === 'PTO') usage[key].pto += toNumberOrZero_(segment.hours);
      if (type === 'Non-PTO') usage[key].nonPto += toNumberOrZero_(segment.hours);
    });
  });
  return usage;
}

function getPayrollCompRows_() {
  const payroll = requirePayrollSpreadsheet_();
  if (!hasSheet_(payroll, CONFIG.payrollTabs.comp)) {
    throw new Error('Payroll Compensation Master is missing. Run setupPhase1() from the Payroll spreadsheet.');
  }
  setupPayrollSpreadsheet_(payroll, { formatMode: 'none', migrations: false });
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
    { key: 'annualPtoDays', header: 'Annual PTO Hours', label: 'Annual PTO Hours', type: 'number' },
    { key: 'annualNonPtoDays', header: 'Annual Non-PTO Hours', label: 'Annual Non-PTO Hours', type: 'number' },
    { key: 'ptoPlanType', header: 'PTO Plan Type', label: 'PTO Plan Type', type: 'select', options: CONFIG.ptoPlanTypes },
    { key: 'monthlyPtoAccrualDays', header: 'Monthly PTO Accrual Hours', label: 'Monthly PTO Accrual Hours', type: 'number' }
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
  const balance = calculatePtoBalanceForEmployeeYear_(employee, compRows, requests, code, year, lastDay, attendance);
  if (balance.ptoPlanType !== 'Accrued Monthly') {
    const yearEnd = new Date(year, 11, 31);
    return {
      amount: 0,
      eligibleDays: 0,
      eligibleHours: 0,
      dailyBaseRate: '',
      hourlyBaseRate: '',
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
      eligibleHours: eligiblePto === '' ? '' : 0,
      dailyBaseRate: '',
      hourlyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: 'PTO payout: no remaining accrued PTO hours are currently eligible for payout.'
    };
  }

  const comp = getCompForDate_(compRows, code, lastDay);
  const monthlyBase = comp ? toNumberOrBlank_(comp['Monthly Base Salary']) : '';
  if (monthlyBase === '') {
    return {
      amount: '',
      eligibleDays: eligiblePto,
      eligibleHours: eligiblePto,
      dailyBaseRate: '',
      hourlyBaseRate: '',
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
      eligibleHours: eligiblePto,
      dailyBaseRate: '',
      hourlyBaseRate: '',
      ptoPlanType: balance.ptoPlanType,
      note: 'PTO payout cannot be calculated because no scheduled days were found for the rate reference month.'
    };
  }

  const dailyBaseRate = monthlyBase / scheduledDaysInMonth;
  const hourlyBaseRate = dailyBaseRate / CONFIG.legacyDayHours;
  const amount = round2_(eligiblePto * hourlyBaseRate * 1.5);
  return {
    amount,
    eligibleDays: round2_(eligiblePto),
    eligibleHours: round2_(eligiblePto),
    dailyBaseRate: round2_(dailyBaseRate),
    hourlyBaseRate: round2_(hourlyBaseRate),
    ptoPlanType: balance.ptoPlanType,
    note: `Accrued Monthly PTO payout included in final payroll: ${round2_(eligiblePto)} remaining accrued PTO hour(s) x ${round2_(hourlyBaseRate)} hourly base rate x 1.5. Benefits excluded.`
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
    `Accrued PTO payout: ${round2_(payout.eligibleHours)} hour(s) x ${round2_(payout.hourlyBaseRate)} hourly base rate x 1.5. Benefits excluded.`,
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
  return row._rowNumber;
}

function setEmployeeStatus_(attendance, employeeCode, status, endDate) {
  const sheet = getSheet_(attendance, CONFIG.attendanceTabs.employees);
  const row = getEmployeeRowByCodeAnyStatus_(attendance, employeeCode);
  if (!row) throw new Error(`${employeeCode} was not found.`);
  sheet.getRange(row._rowNumber, 4).setValue(status);
  sheet.getRange(row._rowNumber, 6).setValue(dateOnly_(endDate));
  return row._rowNumber;
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
  return row._rowNumber;
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
  const start = parseScheduleTimeValueToDecimal_(schedule[`${day} Start`]);
  const end = parseScheduleTimeValueToDecimal_(schedule[`${day} End`]);
  return {
    isScheduled: start !== '' && end !== '',
    start,
    end,
    lunchStart: parseScheduleTimeValueToDecimal_(schedule['Scheduled Lunch Start']),
    lunchEnd: parseScheduleTimeValueToDecimal_(schedule['Scheduled Lunch End'])
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

function readObjectsForDateWindow_(sheet, dateHeader, startDate, endDate) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn < 1) return [];
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const dateIdx = headers.indexOf(dateHeader);
  if (dateIdx === -1) return readObjects_(sheet);
  const startTime = dateOnly_(startDate).getTime();
  const endTime = dateOnly_(endDate).getTime();
  const dateValues = sheet.getRange(2, dateIdx + 1, lastRow - 1, 1).getValues();
  const rowNumbers = [];
  dateValues.forEach((row, index) => {
    const date = parseDateOrBlank_(row[0]);
    if (!date) return;
    const time = dateOnly_(date).getTime();
    if (time >= startTime && time <= endTime) rowNumbers.push(index + 2);
  });
  return readObjectsByRowNumbers_(sheet, headers, rowNumbers);
}

function readObjectsByRowNumbers_(sheet, headers, rowNumbers) {
  if (!rowNumbers.length) return [];
  const objects = [];
  const sorted = rowNumbers.slice().sort((a, b) => a - b);
  let rangeStart = sorted[0];
  let prior = sorted[0];
  function flushRange(startRow, endRow) {
    const values = sheet.getRange(startRow, 1, endRow - startRow + 1, headers.length).getValues();
    values.forEach((row, rowIndex) => {
      if (!row.some(cell => cell !== '' && cell !== null)) return;
      const object = { _rowNumber: startRow + rowIndex };
      headers.forEach((header, index) => {
        object[header] = row[index];
      });
      objects.push(object);
    });
  }
  for (let index = 1; index < sorted.length; index += 1) {
    const rowNumber = sorted[index];
    if (rowNumber === prior + 1) {
      prior = rowNumber;
      continue;
    }
    flushRange(rangeStart, prior);
    rangeStart = rowNumber;
    prior = rowNumber;
  }
  flushRange(rangeStart, prior);
  return objects;
}

function readTailObjects_(sheet, count) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const dataRows = Math.max(lastRow - 1, 0);
  if (!dataRows || !lastColumn) return [];
  const rowCount = Math.min(Math.max(Number(count) || 1, 1), dataRows);
  const startRow = lastRow - rowCount + 1;
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  return sheet.getRange(startRow, 1, rowCount, lastColumn).getValues()
    .filter(row => row.some(cell => cell !== '' && cell !== null))
    .map((row, rowIndex) => {
      const object = { _rowNumber: startRow + rowIndex };
      headers.forEach((header, index) => {
        object[header] = row[index];
      });
      return object;
    });
}

function getSheetDataRowCount_(sheet) {
  return Math.max(sheet.getLastRow() - 1, 0);
}

function countRowsContainingTextInColumn_(sheet, headerName, needle) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn < 1) return 0;
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const columnIndex = headers.indexOf(headerName);
  if (columnIndex === -1) return 0;
  const query = String(needle || '').toLowerCase();
  return sheet.getRange(2, columnIndex + 1, lastRow - 1, 1).getDisplayValues()
    .reduce((count, row) => String(row[0] || '').toLowerCase().indexOf(query) !== -1 ? count + 1 : count, 0);
}

function appendRows_(sheet, rows) {
  if (!rows.length) return { startRow: 0, rowCount: 0 };
  const startRow = sheet.getLastRow() + 1;
  sheet.getRange(startRow, 1, rows.length, rows[0].length).setValues(rows);
  return { startRow, rowCount: rows.length };
}

function writeRowsReplacingData_(sheet, headers, rows) {
  ensureSheet_(sheet.getParent(), sheet.getName(), headers);
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, sheet.getMaxColumns()).clearContent();
  }
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  return { startRow: rows.length ? 2 : 0, rowCount: rows.length };
}

function mapByCode_(rows) {
  const map = {};
  rows.forEach(row => {
    map[normalizeCode_(row['Employee Code'])] = row;
  });
  return map;
}

function groupRowsByEmployee_(rows) {
  const grouped = {};
  (rows || []).forEach(row => {
    const code = normalizeCode_(row['Employee Code']);
    if (!code) return;
    if (!grouped[code]) grouped[code] = [];
    grouped[code].push(row);
  });
  return grouped;
}

function getEmployeeScopedRows_(groupedRows, fallbackRows, employeeCode) {
  const code = normalizeCode_(employeeCode);
  if (groupedRows) return groupedRows[code] || [];
  return (fallbackRows || []).filter(row => normalizeCode_(row['Employee Code']) === code);
}

function buildBonusSummaryIndex_(bonusRows) {
  const index = {};
  (bonusRows || []).forEach(row => {
    const periodId = normalizePeriodId_(row['Pay Period ID']);
    const code = normalizeCode_(row['Employee Code']);
    if (!periodId || !code) return;
    const key = `${periodId}|${code}`;
    if (!index[key]) {
      index[key] = { kpi: 0, additional: 0, positive: 0, negative: 0, notes: [] };
    }
    const type = row['Type (KPI / Additional / Positive Adj / Negative Adj)'];
    const amount = toNumberOrZero_(row.Amount);
    if (type === 'KPI') index[key].kpi += amount;
    if (type === 'Additional') index[key].additional += amount;
    if (type === 'Positive Adj') index[key].positive += amount;
    if (type === 'Negative Adj') index[key].negative += amount;
    if (row.Description) index[key].notes.push(`${type}: ${row.Description}`);
  });
  return index;
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
    status: row.Status || '',
    department: row.Department || '',
    portalRole: normalizePortalRole_(row['Portal Role'])
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
    lunchStart: schedule.lunchStart,
    lunchEnd: schedule.lunchEnd,
    byDay: schedule
  });
}

function getDefaultPortalSchedule_() {
  const schedule = { lunchStart: '', lunchEnd: '' };
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
    schedule[day] = {
      enabled: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].indexOf(day) !== -1,
      start: '10:00am',
      end: '07:00pm'
    };
  });
  return schedule;
}

function buildScheduleRow_(employeeCode, effectiveFrom, schedule) {
  const byDay = schedule.byDay || {};
  const daySet = new Set(schedule.days || []);
  function dayValue(day, field) {
    if (byDay[day] && byDay[day].enabled) return formatScheduleTimeValue_(byDay[day][field]);
    if (daySet.has(day)) return schedule[field] === undefined ? '' : formatScheduleTimeValue_(schedule[field]);
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
    schedule.lunchStart === undefined ? '' : formatScheduleTimeValue_(schedule.lunchStart),
    schedule.lunchEnd === undefined ? '' : formatScheduleTimeValue_(schedule.lunchEnd)
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

function normalizeDepartment_(value) {
  const text = String(value || '').trim();
  return CONFIG.departments.indexOf(text) !== -1 ? text : '';
}

function normalizePortalRole_(value) {
  const text = String(value || '').trim();
  return CONFIG.portalRoles.indexOf(text) !== -1 ? text : CONFIG.defaultPortalRole;
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
  if (typeof value === 'string') {
    const dateOnlyMatch = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnlyMatch) {
      return new Date(Number(dateOnlyMatch[1]), Number(dateOnlyMatch[2]) - 1, Number(dateOnlyMatch[3]));
    }
  }
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
  return Utilities.formatDate(date, CONFIG.timezone, 'hh:mma').toLowerCase();
}

function displayDateTime_(value) {
  const date = parseDateOrBlank_(value);
  if (!date) return '';
  return `${displayDate_(date)} ${displayTime_(date)}`;
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
  return displayTime_(new Date(2000, 0, 1, hours, mins));
}

function formatHour_(decimalHour) {
  const parsed = parseScheduleTimeValueToDecimal_(decimalHour);
  if (parsed === '') return '';
  return displayTime_(makeDateAtHour_(new Date(2000, 0, 1), parsed));
}

function formatScheduleTimeValue_(value) {
  if (value === '' || value === null || value === undefined) return '';
  const parsed = parseScheduleTimeValueToDecimal_(value);
  return parsed === '' ? String(value).trim() : formatHour_(parsed);
}

function parseScheduleTimeValueToDecimal_(value) {
  if (value === '' || value === null || value === undefined) return '';
  if (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value.getTime())) {
    return value.getHours() + (value.getMinutes() / 60);
  }
  if (typeof value === 'number') return Number.isFinite(value) ? value : '';

  const text = String(value).trim().toLowerCase();
  if (!text) return '';
  const numeric = Number(text);
  if (Number.isFinite(numeric)) return numeric;

  const match = text.match(/^(\d{1,2})(?::(\d{2}))?\s*([ap]m)$/);
  if (match) {
    let hours = Number(match[1]);
    const minutes = Number(match[2] || 0);
    if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) return '';
    const suffix = match[3];
    if (suffix === 'pm' && hours !== 12) hours += 12;
    if (suffix === 'am' && hours === 12) hours = 0;
    return hours + (minutes / 60);
  }

  const twentyFourHour = text.match(/^(\d{1,2}):(\d{2})$/);
  if (twentyFourHour) {
    const hours = Number(twentyFourHour[1]);
    const minutes = Number(twentyFourHour[2]);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return '';
    return hours + (minutes / 60);
  }

  return '';
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
