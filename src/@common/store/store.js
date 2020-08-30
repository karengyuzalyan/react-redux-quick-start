/*
* Application store
* */
import { createStore, applyMiddleware, compose } from 'redux';
import { END } from 'redux-saga';
import rootReducer from './store.reducer';
import { initializeSagaMiddleware } from './middleware/saga.middleware';
import {
  rootSaga,
  runWatchers,
} from './store.saga';

const isBrowser = typeof window === 'object';
const hasDevTools = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const isDevBrowser = !PRODUCTION && isBrowser;
const isDevBrowser = isBrowser;

const composeEnhancers =
  isDevBrowser && hasDevTools
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const dummyTracker = {
  startTrack: () => undefined,
  endTrack: () => undefined,
};

/**
 *
 * @param {Object} options
 * @param {Function[]} preloadTasks
 * @param {Boolean} isSSR
 * @param {Object} services
 * @param {Object} history
 * @param {Object} initialState
 * @return {Promise<any>}
 */
export const createAppStore = async options => {
  const {
    preloadTasks = [],
    isSSR = false,
    services = {},
    history,
    initialState,
  } = options;

  const sagaMiddleware = initializeSagaMiddleware({
    services,
    history,
  });

  const storeMiddlewareEnhancer = applyMiddleware(
    sagaMiddleware,
  );

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(storeMiddlewareEnhancer),
  );

  // temporary debug
  if (isDevBrowser) {
    window.store = store;
  }
  const mainTaskPromise = new Promise((resolve, reject) => {
    sagaMiddleware
      .run(rootSaga)
      .toPromise().then(() => {
        resolve();
      })
      .catch(error => reject(error));
  });
  const preloadTasksPromises = preloadTasks.map(task => task(store.dispatch));
  const allPromises = [mainTaskPromise].concat(preloadTasksPromises);

  // terminate all forked tasks to make promises be resolved
  store.dispatch(END);

  await Promise.all(allPromises);

  // Once all pending promises are resolved - reapply watchers for client side
  if (!isSSR) {
    // sagaMiddleware.run(runStoreDependentSagas, store);
    sagaMiddleware.run(runWatchers);
    // sagaMiddleware.run(runClientInitializingSideEffects);
  }

  return store;
};
