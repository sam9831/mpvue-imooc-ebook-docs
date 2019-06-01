module.exports = {
    title: '「慕课网」小慕读书官网',
    description: 'mpvue多端小程序快速入门',
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2, 3] },
        lineNumbers: true
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [
                    {
                        title: 'Group 1',   // 必要的
                        path: '/',      // 可选的, 应该是一个绝对路径
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            '/'
                        ]
                    },
                    {
                        title: 'Group 1',   // 必要的
                        path: '/',      // 可选的, 应该是一个绝对路径
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            '/'
                        ]
                    },
                ]
            }
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/api' },
            { text: '习题', link: '/question' },
            { text: 'QA', link: '/qa' },
            { text: '精彩活动', link: '/activity' },
            { text: '购买课程', link: 'https://coding.imooc.com/class/285.html' },
        ],
        navbar: true,
    }
}