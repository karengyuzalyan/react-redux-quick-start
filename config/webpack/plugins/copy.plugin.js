import CopyPlugin from 'copy-webpack-plugin';

export default (patterns, options) => (
  new CopyPlugin(patterns, options)
);
