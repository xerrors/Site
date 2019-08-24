module.exports = {
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
      {
        text: '🔨工具',
        items: [
          { text: '🔐寻密', link: '/tools/findpwd.html' }
        ]
      },
      { text: '🏆稳定版', link: 'https://xerrors.coding.me' }
    ]
  },
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