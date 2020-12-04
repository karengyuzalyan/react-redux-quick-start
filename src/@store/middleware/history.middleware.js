/*
 * History middleware
 * */

import { routerMiddleware } from 'react-router-redux';

export const createReactRouterHistoryMiddleware = history =>
  routerMiddleware(history);
