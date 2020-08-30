import { imageLoader } from '../loaders';

const imageRules = (clientStaticSubpath) => ({
  test: /\.(png|jpg|gif)$/,
  use: [
    imageLoader(clientStaticSubpath),
  ],
});

export default imageRules;
