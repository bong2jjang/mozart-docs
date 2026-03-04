const fs = require('fs');
const path = require('path');

/**
 * 폴더의 메타데이터를 읽어옵니다.
 * _category_.json 파일을 우선 탐색하고, 없으면 기본값을 반환합니다.
 *
 * @param {string} folderPath - 폴더 경로
 * @param {string} folderName - 폴더 이름 (기본값 생성용)
 * @returns {Object} 메타데이터 객체
 */
function parseMetadata(folderPath, folderName) {
  const metadataPath = path.join(folderPath, '_category_.json');

  // 기본값 설정
  const defaultMetadata = {
    label: formatLabel(folderName),
    position: 999,
    link: null
  };

  try {
    // _category_.json 파일이 존재하는지 확인
    if (fs.existsSync(metadataPath)) {
      const rawData = fs.readFileSync(metadataPath, 'utf-8');
      const metadata = JSON.parse(rawData);

      // 기본값과 병합
      return {
        ...defaultMetadata,
        ...metadata
      };
    }
  } catch (error) {
    console.warn(`[navbar-generator] Error reading metadata for ${folderName}:`, error.message);
  }

  // 메타데이터 파일이 없거나 읽기 실패 시 기본값 반환
  return defaultMetadata;
}

/**
 * 폴더 이름을 사람이 읽기 좋은 라벨로 변환합니다.
 * 예: 'aps' -> 'APS', 'platform' -> 'Platform'
 *
 * @param {string} folderName - 폴더 이름
 * @returns {string} 포맷된 라벨
 */
function formatLabel(folderName) {
  // 전체 대문자 약어인 경우 (aps, dp 등)
  if (folderName.length <= 3) {
    return folderName.toUpperCase();
  }

  // 일반적인 경우 첫 글자만 대문자
  return folderName.charAt(0).toUpperCase() + folderName.slice(1);
}

/**
 * 여러 폴더의 메타데이터를 읽고 position 순으로 정렬합니다.
 *
 * @param {Array<{name: string, path: string}>} folders - 폴더 정보 배열
 * @returns {Array<Object>} 메타데이터 배열 (position 순 정렬)
 */
function parseMultipleFolders(folders) {
  const metadataList = folders.map(folder => {
    const metadata = parseMetadata(folder.path, folder.name);
    return {
      ...metadata,
      folderName: folder.name,
      folderPath: folder.path
    };
  });

  // position 값으로 정렬
  return metadataList.sort((a, b) => {
    const posA = a.position !== undefined ? a.position : 999;
    const posB = b.position !== undefined ? b.position : 999;
    return posA - posB;
  });
}

/**
 * 메타데이터 검증 (선택사항)
 *
 * @param {Object} metadata - 검증할 메타데이터
 * @returns {boolean} 유효성 여부
 */
function validateMetadata(metadata) {
  // 필수 필드 확인
  if (!metadata.label || typeof metadata.label !== 'string') {
    return false;
  }

  // position이 숫자인지 확인
  if (metadata.position !== undefined && typeof metadata.position !== 'number') {
    return false;
  }

  return true;
}

module.exports = {
  parseMetadata,
  formatLabel,
  parseMultipleFolders,
  validateMetadata
};
