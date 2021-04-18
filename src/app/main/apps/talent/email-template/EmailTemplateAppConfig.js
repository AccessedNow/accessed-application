import React from 'react';
import { Redirect } from 'react-router-dom';

const EmailTemplateAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		// {
		// 	path: '/apps/candidates/:id',
		// 	component: React.lazy(() => import('./CandidatesApp'))
		// },
		{
			path: '/talent/template',
			exact: true,
			component: React.lazy(() => import('./EmailTemplateApp'))
		}
	]
};

export default EmailTemplateAppConfig;
