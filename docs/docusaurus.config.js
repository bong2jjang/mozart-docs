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
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'id'],
    localeConfigs: {
      en: {
        label: 'EN',
      },
      fr: {
        label: 'FR',
      },
      es: {
        label: 'ES',
      },
      id: {
        label: 'Bahasa Indonesia',
      },
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
            'https://github.com/Mozart/mozart/edit/master/docs/',
          lastVersion: "current",
          versions: {
            current: {
              "label": `v${require('../lerna.json').version[0]}`,
            },
            '4.x': {
              'label': 'v4',
              banner: 'none',
              noIndex: true
            },
            '3.x': {
              'label': 'v3',
              noIndex: true
            },
            '2.x': {
              'label': 'v2',
              noIndex: true
            },
            '1.x': {
              'label': 'v1',
              noIndex: true
            }
          }
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Mozart/mozart/edit/master/docs',
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
