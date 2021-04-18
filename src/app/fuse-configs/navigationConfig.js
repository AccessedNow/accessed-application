import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'talent-management',
    title: 'Talent Management',
    type: 'group',
    translate: 'talent-management',
    icon: 'apps',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'DASHBOARDS',
        type: 'item',
        icon: 'dashboard',
        url: '/talent/dashboard'
      },
      {
        id: 'candidates',
        title: 'Candidates',
        translate: 'CANDIDATES',
        type: 'item',
        icon: 'group',
        url: '/talent/candidates'
      },
      {
        id: 'jobs',
        title: 'Jobs',
        translate: 'JOBS',
        type: 'item',
        icon: 'work',
        url: '/talent/jobs'
      },
       {
        id: 'departments',
        title: 'Departments',
        translate: 'DEPARTMENTS',
        type: 'item',
        icon: 'work',
        url: '/talent/departments'
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'CHAT',
        type: 'item',
        icon: 'chat',
        url: '/talent/chat',
        badge: {
          title: 13,
          bg: 'rgb(9, 210, 97)',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'mail',
        title: 'Mail',
        translate: 'MAIL',
        type: 'item',
        icon: 'email',
        url: '/talent/mail',
        badge: {
          title: 25,
          bg: '#F44336',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/talent/calendar'
      },
      {
        id: 'emailtemplate',
        title: 'Email Template',
        translate: 'EMAILTEMPLATE',
        type: 'item',
        icon: 'today',
        url: '/talent/template'
      },
      {
        id: 'settings',
        title: 'Settings',
        translate: 'SETTINGS',
        type: 'item',
        icon: 'setting',
        url: '/talent/settings'
      },
    ]
  }
];

export default navigationConfig;
