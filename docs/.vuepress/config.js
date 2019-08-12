module.exports = {
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '主页', link: '/' },
      { text: '内容', link: '/blog/' },
      { text: '占位', link: '/placeholder/' },
      { text: '日志', link: '/changelogs/' },
      {
        text: '工具',
        items: [
          { text: '寻密', link: '/findpwd' },
          { text: '寻密', link: '/findpwd' }
        ]
      },
      { text: '博客', link: 'https://blog.xerrors.fun' },
      { text: 'Github', link: 'https://github.com/Xerrors' },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'src/'
      }
    }
  }
}