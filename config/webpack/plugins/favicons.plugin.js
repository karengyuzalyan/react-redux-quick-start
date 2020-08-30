import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

import {
  APP_COMMON_SRC_FAVICON,
  DIST_STATIC_SUBPATH
} from '../../environment';

export default ({ backgroundColor, mobileAppTitle } = {}) => (
  new FaviconsWebpackPlugin({
    logo: APP_COMMON_SRC_FAVICON,
    prefix: `${DIST_STATIC_SUBPATH}/favicons.[hash]/`,
    persistentCache: true,
    inject: true,
    background: backgroundColor,
    title: mobileAppTitle,
    icons: {
      favicons: true,
      appleIcon: true,
      android: false,
      firefox: false,
      coast: false,
      yandex: false,
      windows: false,
      appleStartup: false,
      opengraph: false,
      twitter: false
    }
  })
);
