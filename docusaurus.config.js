const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const AG_PARTNER_WEBSITE_URL = 'https://adguardpartner.com';

// Allow to parameterise the website URL and the base path during the build.
// By default, the website is published to Cloudflare Pages.
const url = process.env.URL || 'https://kb-partner.pages.dev';
const baseUrl = process.env.BASE_URL || '/';

const typesenseCollectionName = process.env.SEARCH_COLLECTION || 'docusaurus-2';
const typesenseHost = process.env.SEARCH_HOST || 'xxx-1.a1.typesense.net';
const typesenseApiKey = process.env.SEARCH_API_KEY || 'test';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
  title: 'AdGuard Partner program',
  tagline: 'Knowledge Base for AdGuard Partner program',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.svg',
  trailingSlash: true,
  organizationName: 'AdGuard',
  projectName: 'adguard-partner-kb',
  themes: ['docusaurus-theme-search-typesense'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AdGuard',
        url: 'https://adguardpartner.com/',
        logo: 'https://adguardpartner.com/kb/img/logo.svg',
      }),
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'AdGuard Partner',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          to: AG_PARTNER_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/miscellaneous/update-kb',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBasePartner',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'AdGuard Partner program',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          title: 'adguard_partner_program',
          items: [
            {
              label: 'official_website',
              href: AG_PARTNER_WEBSITE_URL,
            },
          ],
        },
      ],
      copyright: `© 2009–${new Date().getFullYear()} Adguard Software Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    typesense: {
      typesenseCollectionName: typesenseCollectionName,
      typesenseServerConfig: {
        nodes: [
          {
            host: typesenseHost,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: typesenseApiKey,
      },
      contextualSearch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/AdguardTeam/KnowledgeBasePartner/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
