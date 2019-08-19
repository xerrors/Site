module.exports = {
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: false,
    github: "https://github.com/Xerrors/Xerrors.github.io",
    logo: '/avatar.jpg',
    lastUpdated: '上次修改',
    nav: [
      { text: '文章', link: '/blog/' },
      { text: '占位', link: '/blog/frontend/sources-guide.html' },
      { text: '更新内容', link: '/about/changelog.html' },
      {
        text: '工具',
        items: [
          { text: '寻密', link: '/tools/findpwd.html' },
          { text: '寻密', link: '/tools/findpwd.html' }
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