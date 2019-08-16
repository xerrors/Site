module.exports = {
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: false,
    github: "https://github.com/Xerrors/Xerrors.github.io",
    logo: '/avatar.jpg',
    lastUpdated: '上次更新',
    nav: [
      { text: '文章', link: '/blog/' },
      { text: '占位', link: '/blog/frontend/sources-guide.md' },
      {
        text: '工具',
        items: [
          { text: '寻密', link: '/tools/findpwd.md' },
          { text: '寻密', link: '/tools/findpwd.md' }
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145620374-1' // UA-00000000-0
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'src/'
      }
    }
  }
}