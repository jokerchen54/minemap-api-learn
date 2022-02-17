module.exports = {
  title: "minemap-api",
  base: '/minemap-api-learn/',
  description: '在这里你可以看到比minemap官网文档更接地气的api说明.',
  dest: 'public',
  // base: '/minemap-api/',
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
  theme: 'reco',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [{
          text: 'vuepress-reco',
          link: '/docs/minemap-api/'
        }]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [{
          text: 'GitHub',
          link: 'https://github.com/recoluan',
          icon: 'reco-github'
        }]
      }
    ],
    sidebar: [{
        title: '欢迎学习',
        path: '/docs/minemap-api/',
        // collapsable: false, // 不折叠
      },
      {
        title: 'Minemap实例',
        path: '/docs/minemap-api/minemap/',
        collapsable: false,
        children: [{
            title: '地图初始化配置项',
            path: "/docs/minemap-api/minemap/Minemap"
          },
          {
            title: '地图初始化封装小工具',
            path: "/docs/minemap-api/minemap/MapInit"
          }
        ],
      },
      {
        title: 'Sources',
        path: '/docs/minemap-api/sources/sources',
        children: [{
            title: 'Source各类型初始化',
            path: "/docs/minemap-api/sources/sources"
          },
        ],
      },
      {
        title: 'Layers',
        path: '/docs/minemap-api/layers/',
        collapsable: false,
        children: [{
            title: 'Layers各类型初始化',
            path: "/docs/minemap-api/layers/Layers"
          },{
            title: 'Layers相关进阶操作',
            path: "/docs/minemap-api/layers/LayersOptions"
          },{
            title: 'Expressions表达式详解',
            path: "/docs/minemap-api/layers/Expressions"
          },
        ],
      },
      {
        title: '地图事件',
        path: '/docs/minemap-api/events/',
        collapsable: false,
        children: [{
            title: '交互事件配置',
            path: "/docs/minemap-api/events/EventOptions"
          },{
            title: '事件监听回调',
            path: "/docs/minemap-api/events/EventHandler"
          }
        ],
      },{
        title: '地图工具类',
        path: '/docs/minemap-api/tools/',
        collapsable: false,
        children: [{
            title: '提取各种通用工具方法(待定)',
            path: "/docs/minemap-api/tools/"
          }
        ],
      },{
        title: '界面控件',
        path: '/docs/minemap-api/controller/',
        collapsable: false,
        children: [{
            title: '地图界面控件',
            path: "/docs/minemap-api/controller/ViewController"
          },{
            title: 'Popup',
            path: "/docs/minemap-api/controller/Popup"
          },{
            title: 'Marker',
            path: "/docs/minemap-api/controller/Marker"
          }
        ],
      }
    ],
    subSidebar: "auto",
    // type: 'blog',
    friendLink: [{
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'laochen',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}