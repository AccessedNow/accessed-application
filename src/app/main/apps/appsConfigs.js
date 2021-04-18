import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
// import ProjectDashboardAppConfig from './dashboards/project/DashboardAppConfig';
import AcademyAppConfig from './academy/AcademyAppConfig';
// import CalendarAppConfig from './calendar/CalendarAppConfig';
// import ChatAppConfig from './chat/ChatAppConfig';
// import ContactsAppConfig from './contacts/ContactsAppConfig';
import ProfileConfig from '../pages/profile/ProfilePageConfig';

// import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
// import MailAppConfig from './mail/MailAppConfig';
// import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
// import TodoAppConfig from './todo/TodoAppConfig';

import FeedPageConfig from '../pages/feed/FeedPageConfig';
import DashboardAppConfig from './talent/dashboard/DashboardAppConfig';
import CandidatesAppConfig from './talent/candidates/CandidatesAppConfig';
import JobAppConfig from './talent/jobs/JobAppConfig';
import ChatAppConfig from './talent/chat/ChatAppConfig';
import CalendarAppConfig from './talent/calendar/CalendarAppConfig';
import MailAppConfig from './talent/mail/MailAppConfig';
import DepartmentAppConfig from './talent/department/DeparmentAppConfig';
import EmailTemplateAppConfig from './talent/email-template/EmailTemplateAppConfig';
import SettingsConfig from './talent/settings/SettingsConfig';


const appsConfigs = [
	ProfileConfig,
	FeedPageConfig,
	AnalyticsDashboardAppConfig,
  // ProjectDashboardAppConfig,
  // ChatAppConfig,
  // CalendarAppConfig,
	FileManagerAppConfig,
	ScrumboardAppConfig,

  AcademyAppConfig,
  // TodoAppConfig,
  //
  // ContactsAppConfig,
  // CalendarAppConfig,
  // ChatAppConfig,
  // ECommerceAppConfig,
  // ScrumboardAppConfig,
  // AcademyAppConfig,
  // NotesAppConfig
  DashboardAppConfig,
  CandidatesAppConfig,
  JobAppConfig,
  ChatAppConfig,
  CalendarAppConfig,
  MailAppConfig,
  DepartmentAppConfig,
  EmailTemplateAppConfig,
  SettingsConfig


];

export default appsConfigs;
