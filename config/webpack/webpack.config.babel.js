import path from 'path';

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
  WEBPACK_MODE_DEV,
  DIST_STATIC_SUBPATH,
  APP_SRC_DIR,
  PUBLIC_DIR,
} from '../environment';

const CHUNKS_NAME_DELIMITER = '-';

module.exports = {
  context: __dirname,
  mode: WEBPACK_MODE_DEV,
  watch: true,
  entry: ['@babel/polyfill', APP_COMMON_SRC_ENTRY],
  target: 'web',
  externals: ['jsdom'],
  output: {
    path: DIST_SRC_DIR,
    publicPath: '/',
    filename: `${DIST_STATIC_SUBPATH}/js/[name].[hash].js`,
    chunkFilename: `${DIST_STATIC_SUBPATH}/js/chunks/[name].[contenthash].js`,
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './dist',
  // },
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true, //Hot module replacement
    port: 8080,
    writeToDisk: true,
    open: 'chrome', //open in chrome
  },
  resolve: {
    alias: {
      '@common': path.resolve(APP_SRC_DIR, './@common'),
      '@application': path.resolve(APP_SRC_DIR, './@application'),
      '@store': path.resolve(APP_SRC_DIR, './@store'),
      '@routes': path.resolve(APP_SRC_DIR, './@routes'),
      '@utils': path.resolve(APP_SRC_DIR, './@utils'),
      '@pages': path.resolve(APP_SRC_DIR, './@pages'),
      public: path.resolve(__dirname, PUBLIC_DIR),
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
    ],
  },
  plugins: [
    getCircularDependenciesPlugin(),
    extractCssPlugin(),
    cssoWebpackPlugin(),
    htmlPlugin(),
    statsWriterPlugin(),
  ],
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
};
