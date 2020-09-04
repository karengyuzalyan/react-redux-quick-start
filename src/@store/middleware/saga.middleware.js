/**
 * Saga middleware
 */

import createSagaMiddleWare from 'redux-saga';

export const initializeSagaMiddleware = ({ services, history }) =>
  createSagaMiddleWare({
    context: {
      services,
      history,
    },
  });
