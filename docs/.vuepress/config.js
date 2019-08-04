module.exports = {
  title: '慕课网「小慕读书」官网',
  base: '/mpvue-docs/',
  description: 'mpvue多端小程序快速入门',
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.gif` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '补充阅读', link: '/column/' },
      // { text: '习题', link: '/exercise/' },
      { text: '答疑汇总', link: '/qa/' },
      // { text: '精彩活动', link: '/activities/' },
      { text: '点赞支持', link: 'https://github.com/sam9831/mpvue-imooc-ebook-docs' }
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/column/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/guide/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '基础知识',
          collapsable: false,
          children: [
            'base',
            'base_vue',
            'base_mpvue',
            'base_vuex'
          ]
        },
        {
          title: '项目规划',
          collapsable: false,
          children: [
            'dev'
          ]
        },
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'dev/prepare',
            'dev/home',
            'dev/auth',
            'dev/search',
            'dev/book-list',
            'dev/book-detail',
            'dev/read',
            'dev/category-list',
            'dev/shelf',
            'dev/crash'
          ]
        },
        {
          title: '部署指南',
          collapsable: false,
          children: [
            'release/git',
            'release/server',
            'release/https',
            'release/auto',
          ]
        }
      ]
    }
  }
}
