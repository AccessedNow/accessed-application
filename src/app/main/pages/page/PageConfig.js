import React from 'react';

const PageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/page/:id',
			component: React.lazy(() => import('./PageDetail'))
		}
	]
};

export default PageConfig;
