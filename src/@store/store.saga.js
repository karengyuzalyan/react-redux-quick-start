// /*
// * Store root saga
// * */

import { all, fork, spawn } from 'redux-saga/effects';
import map from 'lodash/fp/map';

// import { initAppInfo } from '@common/store/app-info/app-info.saga';
export const preloadDataSagas = []
//   initAppInfo,

// // import watch sagas
export const watchSagas = [];

export const serverWatchSagas = [];

// // import server sagas
// export const serverSagas = [initDevice, initLanguageSSR];
export const serverSagas = [];

// export function* runClientInitializingSideEffects() {
//   yield all(map(spawn, clientInitSideEffects));
// }

// // call app required sagas
export function* fetchAppData() {
  yield all(map(fork, preloadDataSagas));
}

export function* runWatchers() {
  // use fork (not spawn) effect to block root saga from being completed on server side
  // until END action is explicitly dispatched.
  const watchers = SSR ? serverWatchSagas : watchSagas;
  yield all(map(fork, watchers));
}

export function* runServerSagas() {
  yield all(map(fork, serverSagas));
}

// export const storeDependentSagas = [patchHistorySaga];

export function* runStoreDependentSagas(store) {
  yield map(saga => spawn(saga, store), storeDependentSagas);
}

export function* rootSaga() {
  const sagas = [];

  // if (SSR) {
  //   sagas.push(runServerSagas);
  //   sagas.push(runWatchers);
  //   sagas.push(fetchAppData);
  // } else {
  //   sagas.push(fetchAccountNavigation);
  // }

  // execute all root tasks in parallel.
  // Note: avoid yielding tasks one by one
  yield all(map(fork, sagas));
}
