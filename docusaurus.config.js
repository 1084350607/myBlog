module.exports = {
  title: '久染',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Tsy.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'JiuranChannel', // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: '久染',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Tsy.ico',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'blog',
          label: '博客',
          position: 'right',
          items: [
            {
              label: "Javascript",
              to: "/blog/tags/Javascript",
            },
            {
              label: "Typescript",
              to: "/blog/tags/typescript",
            }
          ],
        },
        {
          to: 'docs/algorithm/二叉树/preorder',
          label: '算法',
          position: 'right',
        },
        {
          to: 'docs/resources/resources-intro',
          label: '资源整理',
          position: 'right',
        },
        {
          href: 'https://space.bilibili.com/345132581',
          label: 'B站',
          position: 'right',
        },
        {
          href: 'https://github.com/1084350607',
          label: 'GitHub',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 久染, Built with Docusaurus.
      <a style='text-decoration:none' href='http://beian.miit.gov.cn'><p style='color:white'>冀ICP备2020030963号-1</p></a>`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  //自定义配置
  customFields: {
    //博客首页渲染文章数量
    BlogNumber: 4,
  },
};
