module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
  ],
  title: 'Xerrors',
  description: 'Xerrors playground',
  permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: false,
    github: "https://github.com/Xerrors/Site",
    logo: '/avatar.jpg',
    lastUpdated: '修改于',
    search: false,
    nav: [
      { text: '📃 文章', link: '/blog/' },
      { text: '📰 专栏', link: '/zhuanlan/' },
      { text: '🤪 动态', link: '/zone/' },  
      {
        text: '🔨 工具',
        items: [    
          { text: '🚥 导航', link: '/guide/' },
          { text: '🔐 寻密', link: '/tools/findpwd.html' },
          { text: '🔗 友链', link: '/tools/links.html' }
        ]
      }
    ]
  },
  // plugins: ['@vuepress/pwa'],
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.need-zoom :not(a) > img',
      options: {
        margin: 16
      }
    },
    'vuepress-plugin-smooth-scroll':{}
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'src/'
      }
    }
  }
}