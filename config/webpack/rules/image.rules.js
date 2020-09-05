import { imageLoader } from '../loaders';

const imageRules = clientStaticSubpath => ({
  test: /\.(png|j?g|svg|gif)?$/,
  use: [imageLoader(clientStaticSubpath)],
});

export default imageRules;
