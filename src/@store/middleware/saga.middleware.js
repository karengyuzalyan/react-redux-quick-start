/**
 * Saga middleware
 */

import createSagaMiddleWare from 'redux-saga';

export const initializeSagaMiddleware = ({ history }) =>
  createSagaMiddleWare({
    context: {
      history,
    },
  });
