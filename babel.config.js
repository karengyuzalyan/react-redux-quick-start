const path = require('path');

/**
 * Where babel can scan for .babelrc files. Babel ignores other locations.
 * Not used in test env because of errors in jest-enzyme: only current root config is used
 */
const BABELRC_ROOTS = [
  // Keep current root
  '.',
  // Also consider monorepo packages "root" and load their .babelrc files.
  './src/*',
];

/**
 * https://babeljs.io/docs/en/config-files
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // still entry with import core-js/stable for ie11
        useBuiltIns: 'entry',
        corejs: 3,
        // TODO: use modules: false, targets.esmodules: true for es2015+ bundles
        // modules: false,
        // targets: {
        //   esmodules: true,
        // },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    // This handsome stuff is not yet in preset-env...
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    /**
     * https://babeljs.io/docs/en/babel-plugin-transform-runtime
     * Injects regenerator automatically, thus it may not be separate included.
     */
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false, // Default: true, but breaks tests modules containing generators
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    /**
     * https://github.com/faceyspacey/babel-plugin-universal-import
     * Is required to provide instant dynamic import module load on server side
     */
    'universal-import',
    // Considering agreement of separate import it's always nice to have safety pillar
    'lodash',
    /**
     * https://www.npmjs.com/package/babel-plugin-transform-imports
     * Import directly components to avoid pulling in unused modules
     */
    [
      'transform-imports',
      {
        'redux-form': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: 'redux-form/es/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
  // Include env specific stuff
  // https://babeljs.io/docs/en/options#merging
  env: {
    // Prod merges config
    production: {
      plugins: ['transform-react-remove-prop-types'],
      babelrcRoots: BABELRC_ROOTS,
    },
    // Dev merges config
    development: {
      babelrcRoots: BABELRC_ROOTS,
    },
    // Test merges config
    test: {
      plugins: ['babel-plugin-dynamic-import-node'],
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3,
          },
        ],
      ],
    },
  },
  overrides: [
    {
      // do not apply transformation to configuration directory.
      // compatibility with modules: false
      test: path.resolve(__dirname, './config'),
      presets: ['@babel/preset-env'],
    },
  ],
};
