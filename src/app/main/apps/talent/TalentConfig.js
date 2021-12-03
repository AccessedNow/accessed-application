import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { authRoles } from 'app/auth';

const TalentConfig = {
  // auth: authRoles.admin,
  settings: {
    layout: {
      config: {
        scroll: 'content',
        mode: 'fullwidth'
      }
    },
  },
  routes: [
    {
      path: '/talent/dashboard',
      component: lazy(() => import('./dashboard/TalentDashboardApp')),
    },
    {
      path: [ '/talent/calendar'],
      component: lazy(() => import('./calendar/CalendarApp')),
    },
    {
      path: [ '/talent/mail/inbox'],
      component: lazy(() => import('./mail/MailApp')),
    },
    {
      path: [ '/talent/boards'],
      component: lazy(() => import('./boards/Boards')),
    },
    {
      path: [ '/talent/boards/:boardId'],
      component: lazy(() => import('./boards/board/Board')),
    },
    {
      path: [ '/talent/messages'],
      component: lazy(() => import('./chat/ChatApp')),
    },
    {
      path: [ '/talent/jobs/addUpdate/:jobId', '/talent/jobs/addUpdate'],
      component: lazy(() => import('./job-create/JobCreate')),
    },
    {
      path: [ '/talent/jobs/:jobId'],
      component: lazy(() => import('./jobdetail/JobDetail')),
    },
    {
      path: [ '/talent/jobs'],
      component: lazy(() => import('./jobs/JobsApp')),
    },
    {
      path: [ '/talent/applications/compare'],
      component: lazy(() => import('./applications/applications-compare/ApplicationsCompare')),
    },
    {
      path: [ '/talent/candidates/:candidateId'],
      component: lazy(() => import('./candidate/CandidateApp')),
    },
    {
      path: [ '/talent/candidates'],
      component: lazy(() => import('./candidates/Candidates')),
    },

  ],
};

export default TalentConfig;
