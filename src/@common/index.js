import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

// ReactDOM.hydrate(<App />, document.getElementById('app')); 

import { createAppStore } from './store/store';
import { createApp } from './application';
import { createClientHistory } from './history';

const webappStart = () => {
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

  const history = createClientHistory();
  const initialState = preloadedState || devToolsState;

  createAppStore({
    history,
    initialState,
  }).then(store => {
      ReactDOM.render(
        <Provider store={store}>
          <Routes />
        </Provider>, document.getElementById('app')
      );
  });
};

webappStart();
