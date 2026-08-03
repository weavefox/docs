import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WeaveFox',
  tagline: '零门槛做应用，让创意看得见',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Canonical URL for SEO
  url: 'https://docs.weavefox.ai',
  baseUrl: '/',

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
          // editUrl: 'https://github.com/weavefox/docs/tree/main/docs/',
          breadcrumbs: false,
          showLastUpdateTime: false,
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'WeaveFox 博客',
          blogDescription: 'WeaveFox 官方博客，分享产品更新、技术文章和最佳实践',
          blogSidebarTitle: '所有发布',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'WeaveFox 博客',
            description: 'WeaveFox 官方博客最新文章',
          },
          showReadingTime: true,
          showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: ['./src/clientModules/navbar-scroll-shadow'],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/',
        indexBlog: false,
        docsDir: './docs',
        ignoreFiles: [],
      },
    ],
  ],

  themeConfig: {
    // SEO social card - 在社交媒体分享时显示的卡片图片
    image:
      'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/AW2fQKp5vEIAAAAAQMAAAAgAeocTAQFr/original',

    // SEO: 全局 meta 标签
    metadata: [
      { name: 'baidu-site-verification', content: 'codeva-os2v9vP2vB' },
      { name: 'google-site-verification', content: '3hJOAEBePt4f5-ERzrzp1oe7e0aC2oEQ8aE8Hmy2cME' },
      { name: 'keywords', content: 'WeaveFox, AI 编程，创意开发，Vibe Coding，应用开发，人工智能' },
      { name: 'author', content: 'WeaveFox' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'WeaveFox Docs' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@weavefox' },
    ],

    // 结构化数据 (JSON-LD) - 帮助搜索引擎理解网站内容
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WeaveFox',
      url: 'https://www.weavefox.cn',
      logo: 'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/AW2fQKp5vEIAAAAAQMAAAAgAeocTAQFr/original',
      sameAs: ['https://x.com/weavefox', 'https://github.com/weavefox/weavefox'],
    },

    // Announcement bar for SEO announcements (optional)
    // announcementBar: {
    //   id: 'seo_announcement',
    //   content: 'WeaveFox 官方文档全面升级！',
    //   backgroundColor: '#1890ff',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },

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
          type: 'doc',
          docId: 'intro/getting-started/welcome',
          label: '介绍',
        },
        {
          type: 'doc',
          docId: 'features/build/vibe-coding',
          label: '产品功能',
        },
        {
          type: 'doc',
          docId: 'integrations/overview',
          label: '集成服务',
        },
        {
          type: 'doc',
          docId: 'best-practices/overview',
          label: '最佳实践',
        },
        {
          to: '/blog',
          label: '博客',
        },
        {
          href: 'https://changelog.app.weavefox.cn/',
          label: '产品更新动态',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/weavefox/weavefox',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'WeaveFox',
          items: [
            {
              html: '<a href="https://www.weavefox.cn" target="_blank"><b>你的创意，值得让全世界看到</b></a>',
            },
          ],
        },
        {
          title: '文档',
          items: [
            {
              label: '入门指南',
              to: '/',
            },
            {
              label: '产品更新动态',
              href: 'https://changelog.app.weavefox.cn/',
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
          ],
        },
        {
          title: '关注我们',
          items: [
            {
              label: '微信公众号',
              href: 'https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/HF8gRKOGD3oAAAAAQIAAAAgAeocTAQFr/original',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/weavefox/weavefox',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/weavefox',
            },
          ],
        },
      ],
      copyright: '沪 ICP 备 2022025902 号-15',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
