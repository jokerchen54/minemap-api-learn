module.exports = {
  title: "minemap-api",
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
        children: [{
            title: '地图初始化配置项',
            path: "/docs/minemap-api/minemap/Minemap"
          },
          {
            title: '地图初始化封装小工具',
            path: "/docs/minemap-api/minemap/MapInit"
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