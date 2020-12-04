/*
 * Store reducer
 * */

import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import template from '@store/reducers/template.reducer';
// import core reducers
const reducers = {
  template,
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
