/**
 * Docusaurus Chatbot Plugin
 * Integrates AI-powered documentation chatbot
 */
const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-chatbot',

    getThemePath() {
      return path.resolve(__dirname, './src/theme');
    },
  };
};
