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
    locales: ['ko', 'en', 'zh-Hans'],
    localeConfigs: {
      ko: { label: '한국어' },
      en: { label: 'English' },
      'zh-Hans': { label: '简体中文' },
    },
  },
  scripts: [],
  themeConfig: {
    image: 'img/meta-image.png',
    // announcementBar: {
    //   id: '...',
    //   content:
    //     '👉 ... ✨',
    // },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mozart',
      style: 'primary',
      hideOnScroll: true,
      logo: {
        alt: 'Mozart Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'APS',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'DP',
          position: 'left'
        },
        {
          to: 'docs/platform',
          label: 'Platform',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    }
  },
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
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
              label: 'Next',
            },
            '1.0': {
              label: 'v1.0',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/bong2jjang/mozart-docs/edit/main/docs',
        },
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
