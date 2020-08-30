import rawLoader from '../loaders/raw.loader';

export const htmlScriptsRule = () => ({
  test: /@html-scripts/,
  use: [
    rawLoader()
  ]
});
