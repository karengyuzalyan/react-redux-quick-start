import CleanPlugin from 'clean-webpack-plugin';
import {
  DIST_SRC_DIR,
} from '../../environment';

export const cleanPlugin = () => (
  new CleanPlugin([
    '*',
  ], {
    root: DIST_SRC_DIR,
    verbose: true,
    watch: false,
  })
);

