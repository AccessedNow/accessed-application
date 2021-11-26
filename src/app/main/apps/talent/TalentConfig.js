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
      path: [ '/talent/jobs'],
      component: lazy(() => import('./jobs/JobsApp')),
    },
    {
      path: [ '/talent/jobs/:jobId'],
      component: lazy(() => import('./jobdetail/JobDetail')),
    },
    {
      path: [ '/talent/company/:companyId/jobs/addUpdate/:jobId', '/talent/company/:companyId/jobs/addUpdate'],
      component: lazy(() => import('./job-create/JobCreate')),
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
