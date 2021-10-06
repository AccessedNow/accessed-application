import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const JobConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/jobs/view/:id',
      component: lazy(() => import('./jobdetail/JobDetail')),
    },
    {
      path: [
        '/jobs/category/:folderHandle',
        '/jobs/search'
      ],
      component: lazy(() => import('./jobsearch/JobSearch')),
    },
    {
      path: '/jobs',
      component: lazy(() => import('./joblanding/JobLandingPage')),
    },
    {
      path: 'jobs',
      component: () => <Redirect to="/jobs" />,
    }
  ],
};

export default JobConfig;
