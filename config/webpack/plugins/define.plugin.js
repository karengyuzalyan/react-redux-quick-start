import { DefinePlugin } from 'webpack';
import globals from '../../globals';

const defaultConfig = {
  PRODUCTION: true,
};

export default config =>
  new DefinePlugin({ ...globals, ...defaultConfig, ...config });
