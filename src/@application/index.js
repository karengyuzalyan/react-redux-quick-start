/*
* Application structure
* */

import React from 'react';
import App from '@common/components/app';

/**
 * Create root application
 * @param {Object} store - application store
 * @param {Object} options
 * @param {Boolean} [options.isSSR] - If application is being created for SSR
 * @param {String} [options.path] - request path
 */
export const createApp = ({
  store = {},
  history,
  options = {},
}) => {
  const app = (
    <App
      store={store}
      history={history}
      options={options}
    />
  );

  return app;
};
