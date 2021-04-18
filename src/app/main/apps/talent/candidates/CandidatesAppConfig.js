import React from 'react';
import { Redirect } from 'react-router-dom';

const CandidatesAppConfig = {
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
			path: '/talent/candidates/candidate-compare/compare',
			exact: true,
			component: React.lazy(() => import('./candidates-compare/CandidatesCompare'))
		},

		{
			path: '/talent/candidates',
			exact: true,

			component: React.lazy(() => import('./CandidatesApp'))
		},
		{
			path: '/talent/candidates/:id',
			component: React.lazy(() => import('./candidate/CandidateDetailApp'))
		},
	]
};

export default CandidatesAppConfig;
