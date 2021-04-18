import React from 'react';

const ConfigurationDocRoutes = [
  {
    path: '/talent/settings/company/:id',
    component: React.lazy(() => import('./CompanyEdit'))
  },
  {
    path: '/talent/settings/company',
    component: React.lazy(() => import('./Company'))
  }

];

export default ConfigurationDocRoutes;
