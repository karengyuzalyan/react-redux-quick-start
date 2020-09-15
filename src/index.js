import ReactDOM from 'react-dom';

import React from 'react';
import get from 'lodash/get';

import { createAppStore } from '@store/store';
import { createClientHistory } from './history';

import Root from './root.component';

export const createApp = ({ store }) => {
  const app = <Root store={store} />;

  return app;
};

export const startApp = async () => {
  const preloadedState = get(window, '__PRELOADED_STATE__', {});
  const history = createClientHistory();

  const appStore = await createAppStore({
    history,
    initialState: preloadedState,
  });

  const app = createApp({
    store: appStore,
    options: {
      path: window.location.pathname,
    },
  });

  ReactDOM.render(app, document.getElementById('root'));
};

if (typeof window !== 'undefined') {
  startApp();
}
