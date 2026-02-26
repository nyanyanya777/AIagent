/**
 * i18n - Internationalization and localization strings
 * All user-facing text strings should be defined here for easy maintenance and translation
 * Generated from pen-parsed.json analysis
 */

export const i18n = {
  // Dashboard & UI Core
  dashboard: 'Dashboard',
  chat: 'Chat',
  tasks: 'Tasks',
  settings: 'Settings',
  agent: 'Agent',
  
  // Chat interface
  chatPlaceholder: 'Type a message...',
  send: 'Send',
  
  // Sidebar navigation
  sidebarHeader: 'Agent',
  
  // Common buttons & actions
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
  cancel: 'Cancel',
  save: 'Save',
  submit: 'Submit',
  confirm: 'Confirm',
  go: 'Go — 実行に移す',
  noGo: 'No-Go — 見送る',
  
  // Navigation items
  home: 'Home',
  inbox: 'Inbox',
  projects: 'Projects',
  calendar: 'Calendar',
  
  // Status labels
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  completed: 'Completed',
  inProgress: 'In Progress',
  archived: 'Archived',
  
  // Messages
  loadingMessage: 'Loading...',
  errorMessage: 'An error occurred',
  successMessage: 'Success',
  noDataMessage: 'No data available',
  emptyStateMessage: 'Nothing here yet',
  
  // Authentication
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signUp: 'Sign Up',
  login: 'Login',
  logout: 'Logout',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot Password?',
  rememberMe: 'Remember Me',
  
  // Form labels & placeholders
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  download: 'Download',
  export: 'Export',
  import: 'Import',
  upload: 'Upload',
  
  // Table headers & pagination
  selectAll: 'Select All',
  selectRow: 'Select Row',
  rowsPerPage: 'Rows per page',
  pageOf: 'Page of',
  
  // Date & time
  today: 'Today',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  thisWeek: 'This Week',
  thisMonth: 'This Month',
  lastMonth: 'Last Month',
  
  // Japanese UI Elements
  // HR & Recruitment specific
  agentAnalysisComplete: '3つのエージェントが分析を完了しました。データに基づいて採用チャネル戦略を決定してください。',
  recruitmentChannelAnalysis: '3つの採用チャネル（Indeed, Wantedly, エージェント）のROIを比較分析しました。コスト対効果ではWantedlyが最も高く、1採用あたりコストが平均の62%です。エージェント経由は定着率が最も高い（92%）一方、コストは3倍です。',
  jdReviewRequest: 'JDをレビューして',
  jdModificationNotice: 'JD改定案を更新しました（年収500-700万）。Indeedへの公開には許可が必要です。',
  publishJdToIndeed: 'JDをIndeedに公開していいですか？',
  
  // Recruitment channels & tools
  indeed: 'Indeed',
  wantedly: 'Wantedly',
  agentChannel: 'エージェント',
  
  // Recruitment metrics
  roiScore: 'ROIスコア',
  adoptionRate: '定着率',
  costPerHire: '採用あたりコスト',
  
  // Meeting room labels
  meetingRoomA: '6F 会議室A',
  meetingRoomATeam: '6F 会議室A · 採用G全員',
  
  // Time labels
  twoHoursAgo: '2時間前',
  fiveHoursAgo: '5時間前',
  hourly: '1時間ごと',
  
  // Department mentions
  hrDepartment: '#人事部全体 でメンション',
  recruitmentChannel: '#採用チャネル でメンション',
  recruitmentChannelAnnouncement: '#採用チャンネル — 「JDの年収レンジ…」',
  
  // Task descriptions
  laborStandardsLegalResearch: '36協定の法的要件調査',
  laborAgreementRelated: '36協定・届出関連',
  oneOnOneRegularMeeting: '1on1・メンバーとの定期面談',
  
  // Time duration labels
  oneAndHalfHoursPerWeek: '1.5h/週 · 労務管理',
  oneHourPerWeek: '1h/週 · 個別対応',
  twoHoursPerWeek: '2h/週 · 労務管理',
  threeAndHalfHoursPerWeek: '3.5h/週 · 組織開発',
  threeHoursPerWeek: '3h/週 · 会議体',
  fiveHoursPerWeek: '5h/週 · 採用',
  
  // Agent status labels
  agentOneOfTwo: 'エージェント1/2進行中',
  agentTwoOfTwo: 'エージェント2/2完了',
  agentThreeOfThree: 'エージェント3/3完了',
  threeOfThreeCompleted: '3/3 完了',
  
  // Decision labels
  undecided: '未判断',
  goApproved: 'Go済み',
  
  // Date labels
  twoFifteenth: '2/15',
  twoEighteenth: '2/18',
  twoTwentieth: '2/20',
  twoTwentiethCreated: '2/20作成',
  threeMonths: '3ヶ月',
  
  // Integration & calendar
  googleCalendar: 'Google カレンダー',
  googleMeet: 'Google Meet',
  gmailIntegration: '● Gmail 連携中',
  calendarSync: '「中途採用面接」にカレンダーの面接予定5件を紐づけました。この分類で合っていますか？',
  
  // Plan labels
  freePlan: 'Free プラン',
  
  // Documents & files
  jdReviewDraft: 'JD改定案_v2.docx',
  jdModificationDraft: 'JD改定案ドラフト',
  
  // Tagline & mission
  missionStatement: 'あなたの仕事を、あなたの代わりに理解して、動かす',
  
  // Notification types & messages
  applicationNotification: '[エージェント] Indeed — 応募通知 (3件)',
  interviewScheduleConfirmation: '[候補者] 鈴木太郎 — 面接日程の確認',
  
  // Action prompts
  linkLater: 'あとで連携する',
  signInWithGoogle: 'Googleで始める',
  
  // Analysis labels
  jdVsRealityDifference: 'JD vs 実態の差分分析',
  jdAndInterviewDataDifference: 'JDと面接データの差分分析',
  jdAndRealityGap: 'JDと実態の乖離',
  
  // Common English UI texts (from pen data)
  oneAgent: '1 agent',
  twoAgents: '2 agents',
  threeAgents: '3 agents',
  
  // Account & profile
  accountMain: 'Account Main',
  profileSettings: 'Profile Settings',
  
  // Alert messages
  alertDescription: 'Alert Description',
  
  // Months
  january: 'January',
  february: 'February',
  march: 'March',
  april: 'April',
  may: 'May',
  june: 'June',
  july: 'July',
  august: 'August',
  september: 'September',
  october: 'October',
  november: 'November',
  december: 'December',
  
  // Days of week
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export const jp = {
  // HR & Recruitment
  agentAnalysisComplete: '3つのエージェントが分析を完了しました。データに基づいて採用チャネル戦略を決定してください。',
  recruitmentChannelAnalysis: '3つの採用チャネル（Indeed, Wantedly, エージェント）のROIを比較分析しました。コスト対効果ではWantedlyが最も高く、1採用あたりコストが平均の62%です。エージェント経由は定着率が最も高い（92%）一方、コストは3倍です。',
  jdReviewRequest: 'JDをレビューして',
  jdModificationNotice: 'JD改定案を更新しました（年収500-700万）。Indeedへの公開には許可が必要です。',
  publishJdToIndeed: 'JDをIndeedに公開していいですか？',
  budgetApprovalRequest: '@Naito 新卒採用の予算承認お願いします',
  roiReportDeadline: '@Naito 来週のROIレポートの締切確認です',
  
  // Channels & mentions
  hrDepartmentMention: '#人事部全体 でメンション',
  recruitmentChannelMention: '#採用チャネル でメンション',
  recruitmentChannelAnnouncement: '#採用チャンネル — 「JDの年収レンジ…」',
  
  // Tasks & responsibilities
  laborStandardsResearch: '36協定の法的要件調査',
  laborAgreementHandling: '36協定・届出関連',
  oneOnOneRegularMeeting: '1on1・メンバーとの定期面談',
  oneOnOneGroup: '1on1（5名）',
  
  // Time allocations
  oneAndHalfHours: '1.5h/週 · 労務管理',
  oneHour: '1h/週 · 個別対応',
  twoHours: '2h/週 · 労務管理',
  threeAndHalfHours: '3.5h/週 · 組織開発',
  threeHours: '3h/週 · 会議体',
  fiveHours: '5h/週 · 採用',
  
  // Agent status
  agentStatus1of2: 'エージェント1/2進行中',
  agentStatus2of2: 'エージェント2/2完了',
  agentStatus3of3: 'エージェント3/3完了',
  completeStatus3of3: '3/3 完了',
  
  // Decision status
  undecided: '未判断',
  approved: 'Go済み',
  goDecision: 'Go — 実行に移す',
  noGoDecision: 'No-Go — 見送る',
  
  // Dates
  february15: '2/15',
  february18: '2/18',
  february20: '2/20',
  february20Created: '2/20作成',
  threeMonths: '3ヶ月',
  
  // Time references
  twoHoursAgo: '2時間前',
  fiveHoursAgo: '5時間前',
  everyHour: '1時間ごと',
  
  // Locations
  meetingRoomA: '6F 会議室A',
  meetingRoomATeam: '6F 会議室A · 採用G全員',
  
  // Integrations
  googleCalendar: 'Google カレンダー',
  googleMeet: 'Google Meet',
  gmailLinked: '● Gmail 連携中',
  interviewCalendarSync: '「中途採用面接」にカレンダーの面接予定5件を紐づけました。この分類で合っていますか？',
  
  // Documents
  jdReviewDraft: 'JD改定案_v2.docx',
  jdDraftOutline: 'JD改定案ドラフト',
  
  // Notifications
  applicationNotification: '[エージェント] Indeed — 応募通知 (3件)',
  candidateInterviewConfirm: '[候補者] 鈴木太郎 — 面接日程の確認',
  
  // Actions
  linkLater: 'あとで連携する',
  signInGoogle: 'Googleで始める',
  
  // Analysis
  jdVsRealityAnalysis: 'JD vs 実態の差分分析',
  jdAndInterviewAnalysis: 'JDと面接データの差分分析',
  jdRealityGap: 'JDと実態の乖離',
  
  // Plan
  freePlan: 'Free プラン',
  
  // Core mission
  mission: 'あなたの仕事を、あなたの代わりに理解して、動かす',
};

export const en = {
  // Core navigation
  dashboard: 'Dashboard',
  chat: 'Chat',
  tasks: 'Tasks',
  settings: 'Settings',
  agent: 'Agent',
  
  // Chat
  chatPlaceholder: 'Type a message...',
  send: 'Send',
  
  // Sidebar
  sidebarHeader: 'Agent',
  
  // Actions
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
  cancel: 'Cancel',
  save: 'Save',
  submit: 'Submit',
  confirm: 'Confirm',
  
  // Status
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  completed: 'Completed',
  inProgress: 'In Progress',
  archived: 'Archived',
  
  // Messages
  loadingMessage: 'Loading...',
  errorMessage: 'An error occurred',
  successMessage: 'Success',
  noDataMessage: 'No data available',
  emptyStateMessage: 'Nothing here yet',
  
  // Auth
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signUp: 'Sign Up',
  login: 'Login',
  logout: 'Logout',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot Password?',
  rememberMe: 'Remember Me',
  
  // Forms
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  download: 'Download',
  export: 'Export',
  import: 'Import',
  upload: 'Upload',
  
  // Tables
  selectorAll: 'Select All',
  selectRow: 'Select Row',
  rowsPerPage: 'Rows per page',
  pageOf: 'Page of',
};

// Helper function to get text by locale
export function getText(key: keyof typeof i18n, locale: 'en' | 'ja' = 'en'): string {
  if (locale === 'ja' && key in jp) {
    return jp[key as keyof typeof jp];
  }
  if (key in i18n) {
    return i18n[key as keyof typeof i18n];
  }
  return key; // Fallback to key if not found
}
