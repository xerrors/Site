module.exports = {
  title: 'Angor',
  description: 'Angor playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    github: "https://github.com/Xerrors/Xerrors.github.io",
    logo: '/avatar.jpg',
    lastUpdated: '上次更新',
    nav: [
      { text: '文章', link: '/blog/' },
      { text: '占位', link: '/about/eggs' },
      {
        text: '工具',
        items: [
          { text: '寻密', link: '/tools/findpwd' },
          { text: '寻密', link: '/tools/findpwd' }
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