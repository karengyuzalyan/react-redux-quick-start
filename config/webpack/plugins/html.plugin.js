import HtmlWebpackPlugin from 'html-webpack-plugin';

import {
  DIST_SRC_DIR,
  APP_COMMON_SRC_TEMPLATE,
} from '../../environment';

export default () => (
  new HtmlWebpackPlugin({
    filename: `${DIST_SRC_DIR}/index.html`,
    template: APP_COMMON_SRC_TEMPLATE,
    hash: false,
    minify: {
      minifyJS: true,
    },
    inject: false,
  })
);
