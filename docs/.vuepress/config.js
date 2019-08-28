module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
  ],
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: false,
    github: "https://github.com/Xerrors/Xerrors.github.io",
    logo: '/avatar.jpg',
    lastUpdated: '修改于',
    nav: [
      { text: '📃文章', link: '/blog/' },
      { text: '🔗友链', link: '/about/links.html' },
      { text: '🤪动态', link: '/cool/zone.html' },
      {
        text: '🔨工具',
        items: [
          { text: '🔐寻密', link: '/tools/findpwd.html' },
          { text: '🚥导航', link: '/tools/guide.html' }
        ]
      },
      { 
        text: '🏆稳定版',
        items: [
          { text: '🔮静态版（Coding）', link: 'https://xerrors.coding.me' },
          { text: '🎨静态版（GitHub）', link: 'https://xerrors.github.io' },
          { text: '🎉完整版（备案中）', link: 'https://www.xerrors.fun'}
        ]
      }
    ]
  },
  // plugins: ['@vuepress/pwa'],
  // plugins: [
  //   [
  //     '@vuepress/google-analytics',
  //     {
  //       'ga': 'UA-145620374-1' // UA-00000000-0
  //     }
  //   ]
  // ],
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'src/'
      }
    }
  }
}