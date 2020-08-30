/**
 * Sass loader
 */

const path = require('path');

export default {
  loader: 'sass-loader',
  options: {
    includePaths: [path.resolve(__dirname, '../../../src')],
  },
};
