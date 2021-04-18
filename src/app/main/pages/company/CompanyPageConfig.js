import React from 'react';

const CompanyPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/company/:id',
			component: React.lazy(() => import('./CompanyPage'))
		}
	]
};

export default CompanyPageConfig;
