
// const sidebarConfig =  require("./sidebar")
module.exports = {
  title: "minemap-api",
  base: '/minemap-api-learn/',
  description: '在这里你可以看到比minemap官网文档更接地气的api说明.',
  dest: 'public',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'stylesheet',
      href: '/lib/minemap.css'
    }],
    ['link', {
      rel: 'stylesheet',
      href: '/lib/minemap-edit.css'
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['script', {
      src: '/lib/minemap.js'
    }],
    ['script', {
      src: '/lib/minemap-edit.js'
    }],
  ],
  theme: 'vdoing',
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
    sidebar: 'structuring',
    sidebarDepth: 3,
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
  },
  plugins: [['vuepress-plugin-code-copy', {
    successText: "复制成功"
    }],'demo-container']
}