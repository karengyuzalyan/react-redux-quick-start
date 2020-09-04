import React from 'react';

import Root from './components/pages/root';
import BasePage from './components/app';

export const routesConfig = [
  {
    key: 'home-page',
    path: '/home-page',
    isStatic: false,
    component: BasePage,
  },
];

export const Routes = React.createElement(Root, { routes: routesConfig });
