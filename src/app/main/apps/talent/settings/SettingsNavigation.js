const SettingsNavigation = {
	id: 'settings',
	title: 'Settings',
	type: 'group',
	icon: 'star',
	children: [
		{
			id: 'changelog',
			title: 'Changelog',
			type: 'item',
			icon: 'history',
			url: '/settings/changelog',
			badge: {
				title: '5.1.0',
				bg: 'rgb(236, 12, 142)',
				fg: '#FFFFFF'
			}
		},
    {
      id: 'profile',
      title: 'Profile',
      subtitle: 'Detail about your personal information',
      type: 'item',
      icon: 'person',
      url: '/talent/settings/my-account'
    },
    {
      id: 'company',
      title: 'Company',
      subtitle: 'Detail about your company information',
      type: 'item',
      icon: 'work',
      url: '/talent/settings/company'
    },
    {
      id: 'user-management',
      title: 'User Management',
      subtitle: 'Invite members to your company',
      type: 'item',
      icon: 'people',
      url: '/talent/settings/user-management'
    },
    {
      id: 'labels',
      title: 'Labels',
      subtitle: 'Manage labels',
      type: 'item',
      icon: 'people',
      url: '/talent/settings/labels'
    }
	]
};

export default SettingsNavigation;
