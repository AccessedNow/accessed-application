import React from 'react';

const JobsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
    {
      path: '/talent',
      exact: true,
      component: React.lazy(() => import('./dashboard/ProjectDashboardApp'))
    },
    {
      path: '/talent/jobs/search',
      exact: true,
      component: React.lazy(() => import('./jobs/job-search/JobSearchPage'))
    },
    {
      path: '/talent/jobs/:id/workflow',
      exact: true,
      component: React.lazy(() => import('./jobs/job-workflow/JobWorkflowPage'))
    }
	]
};

export default JobsConfig;
