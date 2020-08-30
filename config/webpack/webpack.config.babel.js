import path from 'path';
import { WEBPACK_MODE_DEV } from '../environment';

import {
  jsRules,
  cssClientRules,
  imageRules,
  propertiesRules,
  htmlScriptsRule,
} from './rules';
import {
  cleanPlugin,
  extractCssPlugin,
  htmlPlugin,
  statsWriterPlugin,
  cssoWebpackPlugin,
  getCircularDependenciesPlugin,
} from './plugins';

import {
  APP_COMMON_SRC_ENTRY,
  DIST_SRC_DIR,
  APP_SRC_DIR,
  DIST_STATIC_SUBPATH,
  BABEL_POLYFILL_ENTRY,
} from '../environment';

const CHUNKS_NAME_DELIMITER = '-';

const webpackPlugins = [
  cleanPlugin(),
  getCircularDependenciesPlugin(),
  extractCssPlugin(),
  cssoWebpackPlugin(),
  htmlPlugin(),
  statsWriterPlugin(),
];

const webpackConfig = {
  mode: WEBPACK_MODE_DEV,
  watch: true,
  entry: [BABEL_POLYFILL_ENTRY, APP_COMMON_SRC_ENTRY],
  target: 'web',
  externals: ['jsdom'],
  output: {
    path: `${DIST_SRC_DIR}`,
    filename: `${DIST_STATIC_SUBPATH}/js/[name].[hash].js`,
    chunkFilename: `${DIST_STATIC_SUBPATH}/js/chunks/[name].[contenthash].js`,
    publicPath: '/',
    hotUpdateMainFilename: `${DIST_STATIC_SUBPATH}/hot/[hash].hot-update.json`,
    hotUpdateChunkFilename: `${DIST_STATIC_SUBPATH}/hot/[id].[hash].hot-update.js`,
  },
  resolve: {
    alias: {
      '@common': path.resolve(APP_SRC_DIR, './@common'),
      'lodash-es': 'lodash',
    },
  },
  module: {
    rules: [
      jsRules,
      cssClientRules,
      imageRules(DIST_STATIC_SUBPATH),
      propertiesRules,
      htmlScriptsRule(),
      propertiesRules,
    ],
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'initial', // async, initial, all
      minSize: 30000,
      minChunks: 1,
      maxInitialRequests: 5,
      maxAsyncRequests: 3,
      automaticNameDelimiter: CHUNKS_NAME_DELIMITER,
      name: false,
      cacheGroups: {
        common: {
          test: /[\\/]@common[\\/]/,
          name: 'common',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -20,
        },
      },
    },
  },
  plugins: webpackPlugins,
};

export default webpackConfig;

