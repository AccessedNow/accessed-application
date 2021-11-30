import { lazy } from 'react';

const TemplatesRoutes = [
  {
    path: '/settings/templates/emails',
    component: lazy(() => import('../../../apps/talent/templates/emails/EmailTemplates')),
  },
  {
    path: '/settings/templates/evaluations',
    component: lazy(() => import('../../../apps/talent/templates/evaluations/EvaluationTemplates')),
  },
  {
    path: '/settings/templates/questions',
    component: lazy(() => import('../../../apps/talent/templates/questions/QuestionTemplates')),
  }
];

export default TemplatesRoutes;
