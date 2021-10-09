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
      path: ['jobs', '/jobs', '/jobs/myjobs/viewed', '/jobs/myjobs/saved', '/jobs/myjobs/applied'],
      component: lazy(() => import('./joblanding/JobLanding')),
    }
  ],
};

export default JobConfig;
