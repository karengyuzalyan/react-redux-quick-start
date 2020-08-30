import {
  sassLoader,
  cssLoader,
  extractCssLoader,
  postCssLoader,
} from '../loaders';

const PATTERN = '\\.s?css$';

export const cssClientRules = {
  test: new RegExp(PATTERN),
  use: [
    extractCssLoader,
    cssLoader,
    postCssLoader,
    sassLoader,
  ],
};

export const cssServerRules = {
  test: new RegExp(PATTERN),
  use: [
    cssLoader,
    postCssLoader,
    sassLoader,
  ],
};
