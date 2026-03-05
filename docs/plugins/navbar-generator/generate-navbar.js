const path = require('path');
const { scanDocsFolders } = require('./scanner');
const { parseMultipleFolders } = require('./metadata-parser');

/**
 * navbar 아이템을 동기적으로 생성합니다.
 * docusaurus.config.js에서 직접 호출하여 사용합니다.
 *
 * @param {string} siteDir - Docusaurus 사이트 루트 디렉토리
 * @param {Object} options - 생성 옵션
 * @returns {Array} navbar 아이템 배열
 */
function generateNavbarItems(siteDir, options = {}) {
  const defaultOptions = {
    docsPath: path.join(siteDir, 'docs'),
    position: 'left',
    ...options
  };

  try {
    // docs 폴더 스캔
    const folders = scanDocsFolders(defaultOptions.docsPath);

    if (folders.length === 0) {
      console.warn('[navbar-generator] No folders found in docs directory');
      return [];
    }

    // 메타데이터 파싱 및 정렬
    const navbarData = parseMultipleFolders(folders);

    // navbar 아이템으로 변환
    const navbarItems = navbarData.map(item => ({
      to: `${item.folderName}`,
      activeBasePath: `${item.folderName}`,
      label: item.label,
      position: defaultOptions.position
    }));

    console.log(`[navbar-generator] Generated ${navbarItems.length} navbar items:`, navbarItems.map(i => i.label).join(', '));

    return navbarItems;
  } catch (error) {
    console.error('[navbar-generator] Error generating navbar items:', error);
    return [];
  }
}

module.exports = generateNavbarItems;
