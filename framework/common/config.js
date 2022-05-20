const fs = require('fs');
const deepmerge = require('deepmerge');

const ALLOWED_FW = ['shopify', 'bigcommerce', 'shopify_local'];

const withFrameworkConfig = (defaultConfig = {}) => {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error("The 'framework.name' property is required in the config file.");
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(`The 'framework.name' property must be one of the following: ${ALLOWED_FW.join(', ')}.`);
  }

  if (framework === 'shopify_local') {
    framework = 'shopify';
  }

  // Paths to framework config and tsconfig
  const frameworkConfigPath = `../${framework}/next.config.js`;
  const tsConfigPath = `${process.cwd()}/tsconfig.json`;

  // Load the config files
  const frameworkNextConfig = require(frameworkConfigPath);
  const tsConfig = require(tsConfigPath);

  // update the tsconfig to use the framework's typescript config
  tsConfig.compilerOptions.paths[`@framework/*`] = [`./framework/${framework}/*`];

  // Write the new tsconfig.json
  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));

  const config = deepmerge(defaultConfig, frameworkNextConfig);
  return config;
};

module.exports = { withFrameworkConfig };
