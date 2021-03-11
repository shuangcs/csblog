module.exports = {
    title: '个人主页',
    description: '我的个人文档管理网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/csblog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: 'Javascript', link: '/' },
            { text: 'CSS', link: '/css/' },
            { text: 'vue', link: '/vue/' }
        ],
        sidebar: {
            '/css/': [
                {
                    title: 'css',
                    collapsable: false,
                    children: [
                        { title: '1', path: '/css/one' },
                        { title: '2', path: '/css/two' }
                    ]
                }
            ],
            '/vue/': [
                {
                    title: 'vue',
                    collapsable: false,
                    children: [
                        { title: '1', path: '/vue/one' },
                        { title: '2', path: '/vue/two' }
                    ]
                }
            ],
        }
    }
}