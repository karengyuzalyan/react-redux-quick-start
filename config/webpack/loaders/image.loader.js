/*
* Webpack file loader
* */

const imageLoader = (clientStaticSubpath) => ({
  loader: 'file-loader',
  options: {
    outputPath: `/${clientStaticSubpath}/images/`,
    publicPath: `/${clientStaticSubpath}/images/`,
    filename: '[hash].[ext]',
  },
});

export default imageLoader;
