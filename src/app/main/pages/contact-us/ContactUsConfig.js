import { lazy } from 'react';

const ContactUsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/contact-us',
      component: lazy(() => import('./ContactUs')),
    },
  ],
};

export default ContactUsConfig;
