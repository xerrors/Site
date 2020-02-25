module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
  ],
  title: 'Xerrors',
  description: 'Xerrors playground',
  permalink: "/:year/:month-:day-:slug",
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
          { text: '🔗 友链', link: '/tools/links.html' },
          { text: '👩‍🚀 Notion', link: 'https://www.notion.so/krance/7af4256cdc35438d919833f4c6192128?v=5219488bae934ab3a621e7c8b123d08b' }
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