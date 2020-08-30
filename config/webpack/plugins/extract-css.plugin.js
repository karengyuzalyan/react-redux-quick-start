import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import {
  DIST_DIR,
  DIST_STATIC_SUBPATH
} from '../../environment';

export default () => (
  new ExtractCssChunks({
    path: DIST_DIR,
    filename: `${DIST_STATIC_SUBPATH}/css/[name].[hash].css`,
    chunkFilename: `${DIST_STATIC_SUBPATH}/css/chunks/[id].[contenthash].css`,
  })
);
