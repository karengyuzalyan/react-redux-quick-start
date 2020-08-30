import { nodeModulesExclude } from '../exclude';
import { babelLoader } from '../loaders';

export default {
  test: /\.js$/,
  exclude: nodeModulesExclude,
  use: [
    babelLoader,
  ],
};
