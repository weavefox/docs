import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WeaveFox',
  tagline: '你的创意，值得让全世界看到',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://weavefox.github.io',
  baseUrl: '/docs/',

  // https://docusaurus.io/docs/deployment#deploying-to-github-pages
  organizationName: 'weavefox',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/weavefox/docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/AW2fQKp5vEIAAAAAQMAAAAgAeocTAQFr/original',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WeaveFox',
      logo: {
        alt: 'WeaveFox Logo',
        src: 'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/AW2fQKp5vEIAAAAAQMAAAAgAeocTAQFr/original',
      },
      items: [
        {
          href: 'https://github.com/weavefox/weavefox',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门指南',
              to: '/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '隐私政策',
              href: 'https://render.alipay.com/p/c/180021120000001078/index.html?agreementId=AG01001502',
            },
            {
              label: '服务条款',
              href: 'https://render.alipay.com/p/c/180021120000001078/index.html?agreementId=AG01001502',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/weavefox/weavefox',
            },
          ],
        },
        {
          title: '关注我们',
          items: [
            {
              label: 'X (Twitter)',
              href: 'https://x.com/weavefox',
            },
            {
              label: '微信公众号',
              href: 'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/HF8gRKOGD3oAAAAAQIAAAAgAeocTAQFr/original',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SENSE CREATIVE PLATFORM. POWERED BY NEXT-GEN AIGC. 沪ICP备2022025902号-15`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
