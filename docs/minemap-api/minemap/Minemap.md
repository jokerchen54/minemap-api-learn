---
title: Minemap初始化配置项
date: 2022-01-18
tags:
  - Minemap
---
## 前言
平时我们在支撑厂商使用minemap引擎时，遇到最多的问题就是地图出不来。其实90%的原因都是minemap初始化的时候，某些配置项出错了，所以我们十分有必要对minemap初始化配置项有个充分的认识，接下来我会针对每一项初始化配置项做个说明

## 配置项
官网demo[地图初始化](http://minedata.cn/support/api/demo/js-api/zh/map/base/map-show)

```js
    /**
     * 初始化地图实例
     */
    var map = new minemap.Map({
        container: 'map',
        style: 'https://minedata.cn/service/solu/style/id/12877', /*底图样式*/
        center: [116.46,39.92], /*地图中心点*/
        zoom: 10, /*地图默认缩放等级*/
        pitch: 0, /*地图俯仰角度*/
        maxZoom: 17, /*地图最大缩放等级*/
        minZoom: 3,  /*地图最小缩放等级*/
        projection: 'MERCATOR'
    });

```
官网文档[官方配置项文档](http://minedata.cn/support/static/api/doc/js/v2.1.0/api-reference/index.html#map)
>基本的配置信息可以参数官方文档，这处将列出一些特别的配置项

|  配置项   | 描述  |
|  ----  | ----  |
| style   | 用于指定地图配图方案,还可以使用自己定义的配图方案,具体可参考官网的空白配图示例|
| bearingSnap  (默认值 7)   | 地图对齐捕捉阈值，决定地图何时会自动旋转对齐到正北方向，(以度为单位)，例如，当 bearingSnap 为 7 时，如果用户将地图转动到正北方向 7 度以内的范围时，地图将自动恢复对齐到正北方向。  |
| clickTolerance  (默认值 3)   | 地图点击灵敏度,当用户点击地图时能进行鼠标移动的最大像素范围，点击地图后鼠标在此像素范围内移动则被认为是一次有效的点击(而不是拖拽) |
| preserveDrawingBuffer  (默认值 false)   | 如果开启，可以使用const base64png=map.getCanvas().toDataURL() 将地图的canvas导出为PNG的base64格式数据.<UnderlineText>可以用来打印当前地图可视范围</UnderlineText>|
| antialias (默认值 false)  | 如果为 true ，将开启多重采样抗锯齿模式（ MSAA ）, 这对自定义图层的抗锯齿十分有效,但很影响性能|
|maxTileCacheSize | 设置当前数据源存储在瓦片缓存中的最大瓦片数目。如果想地图加载看起来更丝滑,可以把这个值设置大一点,用空间换速度.如果不设置，将基于当前视角动态计算瓦片缓存大小。|
| transformRequest | 地图发送外部 URL 请求前执行的回调函数。回调函数中可<UnderlineText>修改 URL 、设置请求头或设置跨源请求的相关身份凭证</UnderlineText>。回调返回的对象参数包含 url 属性和可选的 headers 以及 credentials 属性。下面附上demo,该配置主要用于配置一些在内网经过第三方服务发布出来的底图服务|
| crossSourceCollisions (默认值 false)  | 如果为 true ，来自不同数据源的符号将共同参与到碰撞检测中。如果为 false ，仅在各自的数据源中相互独立的进行符号的碰撞检测。 |
| defaultCursor | 鼠标样式 [demo](http://minedata.cn/support/api/demo/js-api/zh/map/state/set-mouse-style)|
| projection (默认值MERCATOR)| 设置地图投影方式，默认是墨卡托投影，如果值为'LATLON'，则代表经纬度投影;<UnderlineText>内网部署的服务通常是经纬度投影</UnderlineText> |
