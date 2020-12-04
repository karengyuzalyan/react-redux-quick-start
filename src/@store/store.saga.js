// /*
// * Store root saga
// * */

import { all, fork } from 'redux-saga/effects';
import map from 'lodash/fp/map';

export function* rootSaga() {
  const sagas = [];

  yield all(map(fork, sagas));
}
