import CircularDependenciesPlugin from 'circular-dependency-plugin';

export const getCircularDependenciesPlugin = () =>
  new CircularDependenciesPlugin({
    exclude: /node_modules/,
    // include specific files based on a RegExp
    // include: 'XXX',
    // add errors to webpack instead of warnings
    failOnError: false,
    // allow import cycles that include an asyncronous import,
    // e.g. via import(/* webpackMode: "weak" */ './file.js')
    allowAsyncCycles: false,
    // set the current working directory for displaying module paths
    cwd: process.cwd(),
  });
