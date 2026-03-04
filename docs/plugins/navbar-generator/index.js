const path = require('path');

/**
 * Docusaurus Navbar Generator Plugin
 * docs/docs 폴더의 변경 사항을 감지하여 자동으로 재빌드를 트리거합니다.
 *
 * @param {Object} context - Docusaurus context
 * @param {Object} options - Plugin options
 */
module.exports = function navbarGeneratorPlugin(context, options = {}) {
  const { siteDir } = context;

  // 옵션 기본값 설정
  const pluginOptions = {
    docsPath: path.join(siteDir, 'docs'),
    ...options
  };

  return {
    name: 'docusaurus-plugin-navbar-generator',

    /**
     * 개발 서버에서 파일 변경 감지 시 실행됩니다.
     * _category_.json 파일이나 docs 폴더 구조 변경 시 재빌드를 트리거합니다.
     */
    getPathsToWatch() {
      return [
        path.join(pluginOptions.docsPath, '*/_category_.json'),
      ];
    },
  };
};
