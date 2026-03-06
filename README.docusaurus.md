# Docusaurus 개발자 가이드

Docusaurus를 사용하는 개발자가 알아두면 좋은 핵심 개념과 팁을 정리한 문서입니다.

## 📁 파일 및 폴더 자동 변환 규칙

### README.md → index.html
- **각 폴더의 `README.md` 파일은 자동으로 `index.html`로 변환됩니다.**
- 예: `docs/guide/README.md` → `https://yoursite.com/guide/`
- 폴더의 메인 페이지를 만들 때는 `README.md` 또는 `index.md`를 사용하세요.

### 파일명 기반 라우팅
```
docs/
  ├── intro.md              → /intro
  ├── guide/
  │   ├── README.md         → /guide/
  │   ├── getting-started.md → /guide/getting-started
  │   └── advanced.md       → /guide/advanced
  └── api/
      └── index.md          → /api/
```

## 🎯 메타데이터 설정

### 페이지 메타데이터 (Front Matter)
각 마크다운 파일 상단에 설정할 수 있는 메타데이터:

```markdown
---
id: my-doc-id              # 문서 ID (선택사항, 기본값은 파일명)
title: 문서 제목            # 페이지 제목
sidebar_label: 짧은 제목    # 사이드바에 표시될 이름
sidebar_position: 1        # 사이드바 정렬 순서
description: SEO 설명      # 메타 description
keywords: [키워드1, 키워드2] # SEO 키워드
slug: /custom-url          # 커스텀 URL 경로
tags: [tutorial, beginner] # 태그
---

# 문서 내용 시작
```

### 카테고리 메타데이터 (_category_.json)
폴더별로 사이드바 설정을 커스터마이징:

```json
{
  "label": "가이드",          // 사이드바에 표시될 카테고리 이름
  "position": 2,            // 정렬 순서
  "link": {
    "type": "generated-index", // 자동 인덱스 페이지 생성
    "description": "가이드 카테고리입니다.",
    "slug": "/category/guide"
  },
  "collapsed": false,       // 기본 펼침 상태
  "collapsible": true       // 접기/펼치기 가능 여부
}
```

## 🔧 주요 설정 (docusaurus.config.js)

### routeBasePath
```javascript
docs: {
  routeBasePath: '/',  // docs를 사이트 루트로 설정
  // 기본값은 '/docs'이며, URL에서 /docs를 제거하려면 '/'로 설정
}
```

### onBrokenLinks & onBrokenMarkdownLinks
```javascript
onBrokenLinks: 'throw',    // 'throw' | 'warn' | 'ignore'
onBrokenMarkdownLinks: 'warn',
// 빌드 시 깨진 링크 처리 방법 설정
// 프로덕션에서는 'throw' 권장, 개발 중에는 'warn' 사용
```

### hideOnScroll
```javascript
navbar: {
  hideOnScroll: true,  // 스크롤 시 navbar 자동 숨김
}
```

## 📝 마크다운 특수 기능

### Admonitions (알림 상자)
```markdown
:::note
참고 사항입니다.
:::

:::tip
유용한 팁입니다.
:::

:::info
정보성 내용입니다.
:::

:::warning
주의사항입니다.
:::

:::danger
위험 경고입니다.
:::

:::caution
조심하세요!
:::
```

### 코드 블록 강조
````markdown
```javascript title="example.js" showLineNumbers {1,3-5}
function hello() {
  console.log('Hello World');
  const x = 1;
  const y = 2;
  return x + y;
}
```
````

### 탭 기능
```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```javascript
    console.log('Hello');
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```python
    print('Hello')
    ```
  </TabItem>
</Tabs>
```

### 내부 링크
```markdown
[문서 링크](./intro.md)
[절대 경로](../guide/getting-started.md)
[앵커 링크](./api.md#section)
```

## 🔌 플러그인 시스템

### 커스텀 플러그인 생성
```javascript
// plugins/my-plugin/index.js
module.exports = function (context, options) {
  return {
    name: 'my-plugin',
    async loadContent() {
      // 데이터 로드
    },
    async contentLoaded({content, actions}) {
      // 데이터 처리 및 페이지 생성
    },
  };
};
```

### 플러그인 등록
```javascript
// docusaurus.config.js
plugins: [
  './plugins/my-plugin',
  ['@docusaurus/plugin-content-docs', { /* options */ }],
],
```

## 📦 버전 관리

### 버전 생성
```bash
npm run docusaurus docs:version 1.0.0
```

이렇게 하면:
- `versioned_docs/version-1.0.0/` 폴더 생성
- `versioned_sidebars/version-1.0.0-sidebars.json` 생성
- `versions.json` 업데이트

### 버전별 설정
```javascript
docs: {
  lastVersion: 'current',
  versions: {
    current: {
      label: 'Latest',
      path: 'next',
    },
    '1.0.0': {
      label: 'v1.0.0',
      path: '1.0.0',
    },
  },
}
```

## 🎨 스타일링

### CSS Modules
```javascript
// MyComponent.jsx
import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.container}>...</div>;
}
```

### Global CSS
```javascript
// docusaurus.config.js
theme: {
  customCss: require.resolve('./src/css/custom.css'),
}
```

### Infima CSS Variables
Docusaurus는 Infima 프레임워크를 사용하며, CSS 변수로 테마 커스터마이징:

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-code-font-size: 95%;
  --ifm-navbar-height: 60px;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
}
```

## 🚀 빌드 및 배포

### 개발 서버
```bash
npm start           # 개발 서버 시작 (hot reload)
npm run build       # 프로덕션 빌드
npm run serve       # 빌드된 사이트 로컬 미리보기
```

### 정적 파일
- `static/` 폴더의 파일들은 빌드 시 그대로 복사됩니다.
- `static/img/logo.png` → `https://yoursite.com/img/logo.png`

### 환경 변수
```javascript
// 빌드 시점에 주입되는 환경 변수
const siteUrl = process.env.SITE_URL || 'https://example.com';
```

## ⚡ 성능 최적화

### 이미지 최적화
- WebP, AVIF 포맷 사용
- 이미지 압축 (TinyPNG, ImageOptim 등)
- Lazy loading은 자동으로 적용됨

### 번들 크기 최적화
```javascript
// webpack 플러그인 번들 분석
npm run build -- --bundle-analyzer
```

### Prefetching
Docusaurus는 자동으로 링크를 prefetch하여 페이지 전환 속도를 향상시킵니다.

## 🔍 검색 기능

### Algolia DocSearch (권장)
```javascript
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
  },
}
```

### 로컬 검색 플러그인
```javascript
themes: [
  [
    '@easyops-cn/docusaurus-search-local',
    {
      hashed: true,
      language: ['en', 'ko'],
      indexBlog: false,
    },
  ],
],
```

## 🌐 다국어 (i18n)

### 설정
```javascript
i18n: {
  defaultLocale: 'ko',
  locales: ['ko', 'en'],
  localeConfigs: {
    ko: {
      label: '한국어',
    },
    en: {
      label: 'English',
    },
  },
}
```

### 번역 파일 생성
```bash
npm run write-translations -- --locale en
```

폴더 구조:
```
i18n/
  ├── en/
  │   ├── docusaurus-plugin-content-docs/
  │   │   └── current/
  │   │       └── intro.md
  │   └── code.json
  └── ko/
```

## 🐛 디버깅 팁

### Verbose 로그
```bash
npm start -- --verbose
```

### 캐시 초기화
```bash
npm run clear
```

### 특정 브라우저 타겟
```javascript
// docusaurus.config.js
module.exports = {
  future: {
    experimental_faster: true, // 실험적 빌드 최적화
  },
}
```

## 📚 유용한 명령어 정리

```bash
# 새 문서 생성 (v2.x+)
npm run docusaurus docs:create <name>

# 버전 목록 확인
npm run docusaurus docs:version:list

# 사이드바 자동 생성 테스트
npm run docusaurus docs:version

# 타입 체크 (TypeScript 사용 시)
npm run typecheck

# 링크 체크
npm run build -- --no-minify  # 빠른 빌드로 링크 검증
```

## 🎓 추가 참고 자료

- [Docusaurus 공식 문서](https://docusaurus.io/)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
- [Infima CSS Framework](https://infima.dev/)
- [MDX 문법](https://mdxjs.com/)

---

> **Note**: 이 프로젝트는 현재 다음과 같은 커스터마이징이 적용되어 있습니다:
> - `routeBasePath: '/'` - docs가 사이트 루트에 위치
> - 동적 navbar 생성 플러그인
> - AI 챗봇 플러그인
> - SASS 및 Tailwind CSS 통합
> - 로컬 검색 플러그인
> - 버전 관리 활성화
