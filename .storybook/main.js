const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.js"
  ],

  addons:[
    // "@storybook/addon-links",
    '@storybook/addon-essentials',
    // "@storybook/preset-create-react-app",
    '@whitespace/storybook-addon-html',
    'storybook-dark-mode',
    '@storybook/addon-storysource',
    'storybook-addon-code-preview'
  ],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
