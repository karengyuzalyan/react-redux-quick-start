import { propertiesLoader, jsonLoader } from '../loaders';

export default {
  test: /\.properties$/,
  use: [
    jsonLoader,
    propertiesLoader,
  ],
};
