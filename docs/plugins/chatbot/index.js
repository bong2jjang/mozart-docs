/**
 * Docusaurus Chatbot Plugin
 * Integrates AI-powered documentation chatbot
 */
const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-chatbot',

    getClientModules() {
      return [path.resolve(__dirname, './src/client-module.tsx')];
    },

    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'chatbot-root',
            },
          },
        ],
      };
    },

    getThemePath() {
      return path.resolve(__dirname, './src/theme');
    },
  };
};
