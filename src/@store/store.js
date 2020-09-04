/*
 * Application store
 * */
import { createStore, applyMiddleware, compose } from 'redux';
import { END } from 'redux-saga';
import rootReducer from './store.reducer';
import { initializeSagaMiddleware } from './middleware/saga.middleware';
import { rootSaga, runWatchers } from './store.saga';

const isBrowser = typeof window === 'object';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const hasDevTools = isBrowser && devTools;
// const isDevBrowser = !PRODUCTION && isBrowser;
const isDevBrowser = isBrowser;

const preloadedState = window.__PRELOADED_STATE__;
// @todo: add only development mode
const devToolsState =
  typeof window !== 'undefined' &&
  /**
   * @name window
   * @property __REDUX_DEVTOOLS_EXTENSION__
   */
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = preloadedState || devToolsState;

const composeEnhancers =  compose;

/**
 *
 * @param {Object} options
 * @param {Object} history
 * @param {Object} initialState
 * @return {Promise<any>}
 */
export const createAppStore = async options => {
  const { history } = options;

  const sagaMiddleware = initializeSagaMiddleware({
    history,
  });

  const storeMiddlewareEnhancer = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    compose(initialState, composeEnhancers(storeMiddlewareEnhancer)),
  );

  // temporary debug
  if (isDevBrowser) {
    window.store = store;
  }
  const mainTaskPromise = new Promise((resolve, reject) => {
    sagaMiddleware
      .run(rootSaga)
      .toPromise()
      .then(() => {
        resolve();
      })
      .catch(error => reject(error));
  });

  // terminate all forked tasks to make promises be resolved
  store.dispatch(END);

  Promise.resolve(mainTaskPromise);

  return store;
};
