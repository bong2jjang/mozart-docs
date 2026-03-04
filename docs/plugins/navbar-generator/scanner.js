const fs = require('fs');
const path = require('path');

/**
 * docs 폴더를 스캔하여 섹션 폴더 목록을 반환합니다.
 * @param {string} docsPath - 스캔할 docs 폴더 경로
 * @returns {Array<{name: string, path: string}>} 섹션 폴더 정보 배열
 */
function scanDocsFolders(docsPath) {
  try {
    // docs 폴더가 존재하는지 확인
    if (!fs.existsSync(docsPath)) {
      console.warn(`[navbar-generator] Docs path not found: ${docsPath}`);
      return [];
    }

    // 폴더 내 항목 읽기
    const items = fs.readdirSync(docsPath);

    // 디렉토리만 필터링
    const folders = items.filter(item => {
      const fullPath = path.join(docsPath, item);

      // 숨김 폴더 제외 (., _로 시작하는 폴더)
      if (item.startsWith('.') || item.startsWith('_')) {
        return false;
      }

      // 디렉토리인지 확인
      try {
        return fs.statSync(fullPath).isDirectory();
      } catch (err) {
        console.warn(`[navbar-generator] Cannot stat ${fullPath}:`, err.message);
        return false;
      }
    });

    // 폴더 정보 객체로 변환
    return folders.map(folderName => ({
      name: folderName,
      path: path.join(docsPath, folderName)
    }));
  } catch (error) {
    console.error('[navbar-generator] Error scanning docs folders:', error);
    return [];
  }
}

/**
 * 특정 폴더의 하위 폴더를 스캔합니다. (드롭다운 메뉴용)
 * @param {string} folderPath - 스캔할 폴더 경로
 * @returns {Array<{name: string, path: string}>} 하위 폴더 정보 배열
 */
function scanSubFolders(folderPath) {
  try {
    if (!fs.existsSync(folderPath)) {
      return [];
    }

    const items = fs.readdirSync(folderPath);

    return items.filter(item => {
      const fullPath = path.join(folderPath, item);

      // 숨김 폴더 및 파일 제외
      if (item.startsWith('.') || item.startsWith('_')) {
        return false;
      }

      // 디렉토리인지 확인
      try {
        return fs.statSync(fullPath).isDirectory();
      } catch (err) {
        return false;
      }
    }).map(folderName => ({
      name: folderName,
      path: path.join(folderPath, folderName)
    }));
  } catch (error) {
    console.error(`[navbar-generator] Error scanning subfolder ${folderPath}:`, error);
    return [];
  }
}

module.exports = {
  scanDocsFolders,
  scanSubFolders
};
