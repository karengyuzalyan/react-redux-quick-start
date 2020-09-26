import HtmlWebpackPlugin from 'html-webpack-plugin';

import { APP_COMMON_SRC_TEMPLATE } from '../../environment';

export default () =>
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: APP_COMMON_SRC_TEMPLATE,
    hash: false,
    minify: {
      minifyJS: true,
    },
});
