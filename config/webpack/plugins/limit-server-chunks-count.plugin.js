/*
* Limit server side build with one chunk only to disable dynamic imports
* */

import webpack from 'webpack';

export default () => (
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  })
);
