import React from 'react';
import { Redirect } from 'react-router-dom';

const DepartmentAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [

		{
			path: '/talent/departments',
			exact: true,

			component: React.lazy(() => import('./DepartmentApp'))
		}
	]
};

export default DepartmentAppConfig;
