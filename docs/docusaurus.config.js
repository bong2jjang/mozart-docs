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
        {
          to: 'docs/aps',
          activeBasePath: 'docs/aps',
          label: 'APS',
          position: 'left',
        },
        {
          to: 'docs/dp',
          activeBasePath: 'docs/dp',
          label: 'DP',
          position: 'left'
        },
        {
          to: 'docs/platform',
          activeBasePath: 'docs/platform',
          label: 'Platform',
          position: 'left'
        },
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
              label: '최신',
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
