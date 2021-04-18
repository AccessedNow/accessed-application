import i18next from 'i18next';
import React from 'react';
import { Redirect } from 'react-router-dom';
import ar from './i18n/ar';
import en from './i18n/en';
import tr from './i18n/tr';

i18next.addResourceBundle('en', 'jobApp', en);
i18next.addResourceBundle('tr', 'jobApp', tr);
i18next.addResourceBundle('ar', 'jobApp', ar);

const JobAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/talent/jobs',
			exact: true,
			component: React.lazy(() => import('./JobApp'))
		},
    {
      path: '/talent/jobs/new',
      exact: true,
      component: React.lazy(() => import('./job-create/JobCreateApp'))
    },
		{
			path: '/talent/jobs/:jobId?',
			component: React.lazy(() => import('./job/JobDetailApp'))
		},

	]
};

export default JobAppConfig;
