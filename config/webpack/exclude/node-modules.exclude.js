/**
 * node_moduels exclude
 * @param {String} modulePath
 * @return {boolean}
 */

/*  eslint-disable no-bitwise */

export default modulePath => {
  const isNodeModulesDir = !!~modulePath.indexOf('node_modules');
  const exclude = isNodeModulesDir;

  return exclude;
};
