

const SettingsNavigation = {
  id: 'settings',
  title: 'Settings',
  type: 'group',
  icon: 'settings',
  children: [
    {
      id: 'changelog',
      title: 'Changelog',
      type: 'item',
      icon: 'history',
      url: '/settings/changelog',
      badge: {
        // title: fuseReactLatestVersion,
        bg: 'rgb(236, 12, 142)',
        fg: '#FFFFFF',
      },
    },
    {
      id: 'account',
      title: 'Account',
      type: 'collapse',
      icon: 'account_circle',
      children: [
        {
          id: 'profile',
          title: 'Profile',
          type: 'item',
          url: '/settings/account/profile',
        },
        {
          id: 'notifications',
          title: 'Notifications',
          type: 'item',
          url: '/settings/account/notifications',
        },
        {
          id: 'security',
          title: 'Security',
          type: 'item',
          url: '/settings/account/security',
        },
        {
          id: 'billing',
          title: 'Billing',
          type: 'item',
          url: '/settings/account/billing',
        },
      ],
    },
    {
      id: 'members',
      title: 'Members',
      type: 'item',
      icon: 'group',
      url: '/settings/members'
    },
    {
      id: 'boards',
      title: 'Boards',
      type: 'item',
      icon: 'group',
      url: '/settings/boards'
    },

    {
      id: 'templates',
      title: 'Templates',
      type: 'collapse',
      icon: 'account_circle',
      children: [
        {
          id: 'emails',
          title: 'Emails',
          type: 'item',
          url: '/settings/templates/emails',
        },
        {
          id: 'evaluations',
          title: 'Evaluations',
          type: 'item',
          url: '/settings/templates/evaluations',
        },
        {
          id: 'questions',
          title: 'Questions',
          type: 'item',
          url: '/settings/templates/questions',
        }
      ],
    },
  ],
};

export default SettingsNavigation;
