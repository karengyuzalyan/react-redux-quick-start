/**
 * PostCSS loader
 */

import path from 'path';

const POSTCSS_CONFIG_PATH = path.resolve(__dirname, '../../postcss/postcss.config.js');

export default {
  loader: 'postcss-loader',
  options: {
    config: {
      path: POSTCSS_CONFIG_PATH,
    },
  },
};
