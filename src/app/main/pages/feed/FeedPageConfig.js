import React from 'react';

const FeedPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/feed',
			component: React.lazy(() => import('./FeedPage'))
		}
	]
};

export default FeedPageConfig;
