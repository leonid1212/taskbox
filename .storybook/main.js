const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDir: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  // Make whatever fine-grained changes you need

};