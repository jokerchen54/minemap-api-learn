module.exports = {
    // 网站 Title
    title: 'Minemap-api-文档对照',
    base: '/minemap-api-learn/',
    // 网站描述
    description: '在这里你将看到比官网还要全的api配置说明',

    // 网站 favicon 图标设置等
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],

    // 使用的主题
    theme: 'reco',

    // 主题配置
    themeConfig: {
        title: 'Minemap-api-文档对照',
        // 个人信息（没有或不想设置的，删掉对应字段即可）
        subSidebar: 'auto',
        // 顶部导航栏内容
        nav: [{
                text: 'HOME',
                link: '/'
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
          ],
        // 首页头部标题背景图设置，图片直接放在 public 文件夹下
        header: {
            home: {
                title: 'Minemap-api-文档对照',
                subtitle: '好好生活，慢慢相遇',
                headerImage: '/home-bg.jpeg'
            },
        },

        // 底部 footer 的相关设置 
        footer: {
            // gitbutton  配置
            gitbtn: {
                // 仓库地址
                repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true",
                frameborder: 0,
                scrolling: 0,
                width: "80px",
                height: "20px"
            },

            // 添加自定义 footer
            custom: `Copyright &copy; Lao Chen <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        |`
        },

        // 分页配置
        // pagination: {
        //     // 每页文章数量
        //     perPage: 5,
        // },

        // vssue 评论配置, 如果不需要，可以设置 comments: false
        comments: {
            owner: 'youdeliang',
            repo: 'vuepress-theme-melodydl',
            clientId: 'dfba8ecad544784fec1f',
            clientSecret: '1358ac11bc8face24f598601991083e27372988d',
            autoCreateIssue: false,
        },
    }
}