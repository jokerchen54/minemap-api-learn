---
title: Minemap的初始化封装工具
date: 2022-01-18
tags:
  - Minemap
---
## 前言
- 这里提供一个用js封装好的minemap初始化小工具，平时大家在vue、react框架下开发都可以用到。由于minemap实例对象属性方法都很多，所以推荐大家将实例对象挂载到全局静态内存里，不要对该对象进行响应式处理，会影响到地图性能。

- 这个初始化小工具会返回一个minemap实例，把这个实例挂载到全局后，后面可以直接用这个实例进行地图操作

## 初始化小工具代码
```js
import env from '@/env/env'; //env.ts为存放全局变量文件

const mapInit = (mapId:string = 'map', token:string = MYCONF.MAP.TOKEN, solution:number = MYCONF.MAP.SOLUTION) => {
  const style = `${MYCONF.MAP.SERVICE_URL}/service/solu/style/id/${solution}`;
  const extraSpriteUrl = process.env.NODE_ENV === 'development' ? '/' : import.meta.env.VITE_APP_BASE_PATH;
  // 多个雪碧图的配置
  const spriteUrl = [MYCONF.MAP.SPRITE_URL, `${extraSpriteUrl}sprite/sprite`];
  // const spriteUrl = MYCONF.MAP.SPRITE_URL;
  // 低版本minemap引擎使用accessToken字段，其他都是使用key字段
  minemap.accessToken = token;
  // minemap.key = token;
  minemap.solution = solution;
  minemap.domainUrl = MYCONF.MAP.DOMAIN;
  minemap.dataDomainUrl = MYCONF.MAP.DATA_DOMAIN_URL;
  minemap.serverDomainUrl = MYCONF.MAP.SERVICE_DOMAIN_URL;
  minemap.serviceUrl = `${MYCONF.MAP.SERVICE_URL}/service`;
  minemap.spriteUrl = spriteUrl;
  minemap.fontsUrl = MYCONF.MAP.FONT_URL;
  env.map = new minemap.Map({
    container: mapId,
    style, // MYCONF.MAP.STYLE
    center: MYCONF.MAP.CENTER,
    zoom: MYCONF.MAP.ZOOM,
    boxZoom: false,
    pitch: 0,
    maxZoom: 21, // 地图最大缩放级别限制
    minZoom: 1,
    // 经纬度投影设置
    // projection: minemap.ProjectionType.LATLON,
    projection: MYCONF.MAP_PROJECTION_TYPE, // 经纬度投影：LATLON，墨卡托投影：MERCATOR
    preserveDrawingBuffer: false, // 截取canvas图片功能
  });
  // 若地图涉及到动态效果，需要把这个配置开启
  env.map.repaint = true;
  env.map.timer.state = true;

  env.map.scrollZoom.setWheelZoomRate(1 / 1000); // 速率值越小，地图的缩放越细腻
  env.map.on('load', () => {
    env.map.resize();
  });

  return env.map;
};

export default mapInit;

```

```js
// 地图配置文件
/* eslint-disable no-unused-vars */
const MAP_BASE_URL = 'https://minedata.cn'; // minedata(以下涉及此地址均需要更改)
const MAP_SERVICE_URL = 'https://minedata.cn'; // minedata(以下涉及此地址均需要更改)
const MYCONF = {
  BASE_URL: '//113.108.157.29:7102/service/lbs', // 自己的后台服务
  LBS_KEY: '30e5f586da944c9a903e420102344841',
  MAP: {
    DOMAIN: MAP_SERVICE_URL,
    DATA_DOMAIN_URL: MAP_SERVICE_URL,
    SERVICE_DOMAIN_URL: MAP_SERVICE_URL,
    SERVICE_URL: MAP_SERVICE_URL,
    SPRITE_URL: `${MAP_BASE_URL}/minemapapi/v3.3.0/sprite/sprite`,
    FONT_URL: `${MAP_BASE_URL}/minemapapi/v3.3.0/fonts`,
    SOLUTION: 12877, // 默认地图solution 16768 12688
    TOKEN: 'ca78282dfff148e3be5390ce027068f5', // 默认地图appKey
    // TOKEN: 'ca78282dfff148e3be5390ce027068f5', // 默认地图appKey
    CENTER: [119.3050991, 26.113629], // 地图初始中心点
    ZOOM: 13, // 地图初始zoom级别
  },
  TIME_INTERVAL: 1000 * 60, // 实时刷新频率
  MAP_PROJECTION_TYPE: 'MERCATOR', // 经纬度投影：LATLON，墨卡托投影：MERCATOR
  MAP_TEMPLATE_APP_KEY: 'ca78282dfff148e3be5390ce027068f5', // 工作台模块地图模板固定appKey
};

```

## 地图初始注意事项
- token权限字段，在低版本引擎中是使用minemap.accessToken设置token，后面使用minemap.key替换，若出现地图资源请求一大堆500错误，可以考虑是不是由于这个问题导致的
- 地图出现部分poi、地名无法显示，可以考虑fontsUrl、spriteUrl所请求的文件是否正常请求
- 在我们开发一些之后可能需要部署到内网的项目，我们可以将外网平时用的minemap.js、minemap.css下载后本地引用；这样做的好处是，我们不用考虑内网旧版本minemap.js引擎的版本中一些不兼容的api
- 如果地图平时能加载出来，突然加载不出来，可以先到minedata平台查看该配图方案是否能正常加载，然后排查token是否过了有效期
- 在使用一些mvvm框架时，如vue、react的时候，切记不要将minemap实例响应式化，会大大影响地图加载效率，这里可以参考[vue3集成minemap模板](https://gitee.com/jokerchen54/vue3-best-practices)