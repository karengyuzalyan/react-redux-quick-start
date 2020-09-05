// /*
// * Store root saga
// * */

import { all, fork, spawn } from 'redux-saga/effects';
import map from 'lodash/fp/map';

export const preloadDataSagas = []

export const watchSagas = [];

export const serverWatchSagas = [];

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

  yield all(map(fork, sagas));
}
