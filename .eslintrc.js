const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {},
  rules: {
    'linebreak-style': 'off', // disable linebreak diff for windows/unix
    'no-var': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'warn',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
    'class-methods-use-this': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-duplicates': 'warn',
    'import/prefer-default-export': 'off',

    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'react/require-default-props': 'off',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: ['label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/sort-comp': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/valid-describe': 'off', // NOTE: Disabled for now, rule doesnt understand describe.each which is valid
    'jest/valid-expect': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'prefer-object-spread': 'off',
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    // TEMPORARY DISABLE
    'import/no-cycle': 'warn',
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [path.resolve(__dirname, './src')],
      },
      webpack: {
        config: path.resolve(
          __dirname,
          'config/webpack/webpack.config.babel.js',
        ),
      },
    },
  },
};
