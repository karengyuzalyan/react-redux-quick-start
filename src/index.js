import React from 'react';
import get from 'lodash/get';

import { createAppStore } from 'src/client/store/store';
import { createClientHistory } from 'src/common/history';

import Root from './root.component';

export const createApp = ({ store }) => {
  const app = (
    <Root store={store} />
  );

  return app;
};

export const startApplication = async () => {
  const preloadedState = get(window, '__PRELOADED_STATE__', {});
  const history = createClientHistory();

  const appStore = await createAppStore({
    history,
    initialState: preloadedState,
  });

  const app = createApp({ store: appStore });
  
  ReactDOM.render(app, document.getElementById('root'));
};

if (typeof window !== 'undefined') {
  startApplication();
}

