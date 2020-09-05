import HomePage from '@pages/home';
import NotFound from '@pages/not-found';

export const routes = [
  {
    key: 'home',
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: 'not-found',
    path: '*',
    component: NotFound,
  },
];
