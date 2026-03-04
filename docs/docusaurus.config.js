const path = require('path');
const generateNavbarItems = require('./plugins/navbar-generator/generate-navbar');

// navbar 아이템 동적 생성
const dynamicNavbarItems = generateNavbarItems(__dirname);

module.exports = {
  title: 'Mozart',
  tagline: 'Full-featured Node.js framework, with no complexity',
  url: 'https://mozart.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Mozart', // Usually your GitHub org/user name.
  projectName: 'mozart', // Usually your repo name.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  scripts: [
    {
      src: '/js/custom.js',
      async: false,
    },
  ],
  themeConfig: {
    image: 'img/meta-image.png',
    // announcementBar: {
    //   id: '...',
    //   content:
    //     '👉 ... ✨',
    // },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Mozart Logo',
        src: 'img/logo.png',
      },
      items: [
        // 동적으로 생성된 navbar 아이템
        ...dynamicNavbarItems,
        // 버전 드롭다운
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    }
  },
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: false,
        ignoreFiles: [],
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    // Navbar Generator Plugin - docs 폴더 변경 감지
    path.resolve(__dirname, './plugins/navbar-generator'),
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bong2jjang/mozart-docs/edit/main/docs/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
            },
            '1.0': {
              label: 'v1.0',
            },
          },
        },
        blog: false,
        googleAnalytics: {
          trackingID: 'UA-112613053-1',
          anonymizeIP: true,
        },
        theme: {
          customCss: [
            './node_modules/remixicon/fonts/remixicon.css',
            './src/css/custom.scss',
          ]
        },
      },
    ],
  ],
};
