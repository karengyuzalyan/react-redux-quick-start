import { jsonLoader } from '../loaders';

export default {
  test: /\.json$/,
  use: [
    jsonLoader,
  ],
};
