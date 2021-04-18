import React from 'react';

const JobsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
    {
      path: '/jobs/search',
      exact: true,
      component: React.lazy(() => import('./JobSearchPage'))
    },
    {
      path: '/jobs/:id',
      exact: true,
      component: React.lazy(() => import('./JobDetailPage'))
    },
		{
			path: '/jobs',
      exact: true,
			component: React.lazy(() => import('./JobsLandingPage'))
		}
	]
};

export default JobsConfig;
