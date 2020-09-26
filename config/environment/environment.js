import path from 'path';

export const DEV = process.env.NODE_ENV !== 'production';
export const WEBPACK_MODE_DEV = 'development';
export const WEBPACK_MODE_PROD = 'production';
export const WEBPACK_MODE = DEV ? WEBPACK_MODE_DEV : WEBPACK_MODE_PROD;

export const ROOT_DIR = process.cwd();
export const CONFIG_DIR = path.resolve(ROOT_DIR, './config');
export const PUBLIC_DIR = path.resolve(ROOT_DIR, './public');
export const ENV_CONFIG_DIR = path.resolve(ROOT_DIR, './env_config');
export const DIST_DIR = path.resolve(ROOT_DIR, './dist');
export const DIST_SRC_DIR = path.resolve(DIST_DIR, './src');
export const DIST_STATIC_SUBPATH = 'app';

export const BABEL_POLYFILL_ENTRY = path.resolve(ROOT_DIR, './config/environment/runtime-polyfill');
export const APP_SRC_DIR = path.resolve(ROOT_DIR, './src');
export const APP_COMMON_SRC_DIR = path.resolve(APP_SRC_DIR, './@common');
export const APP_COMMON_SRC_TEMPLATE = path.resolve(APP_SRC_DIR, './index.html');
export const APP_COMMON_SRC_ENTRY = path.resolve(APP_SRC_DIR, './index.js');
