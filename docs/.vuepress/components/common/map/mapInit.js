import MYCONF from './mapConfig.js'
const mapInit = (mapId = 'map', token = MYCONF.MAP.TOKEN, solution = MYCONF.MAP.SOLUTION) => {
    const style = `${MYCONF.MAP.SERVICE_URL}/service/solu/style/id/${solution}`;
    const spriteUrl = [MYCONF.MAP.SPRITE_URL];
    let map = null
    // const spriteUrl = MYCONF.MAP.SPRITE_URL;
    //   minemap.accessToken = token;
    minemap.key = token;
    minemap.solution = solution;
    minemap.domainUrl = MYCONF.MAP.DOMAIN;
    minemap.dataDomainUrl = MYCONF.MAP.DATA_DOMAIN_URL;
    minemap.serverDomainUrl = MYCONF.MAP.SERVICE_DOMAIN_URL;
    minemap.serviceUrl = `${MYCONF.MAP.SERVICE_URL}/service`;
    minemap.spriteUrl = spriteUrl;
    minemap.fontsUrl = MYCONF.MAP.FONT_URL;
    map = new minemap.Map({
        container: mapId,
        style, // MYCONF.MAP.STYLE
        center: MYCONF.MAP.CENTER,
        zoom: MYCONF.MAP.ZOOM,
        boxZoom: false,
        pitch: 0,
        maxZoom: 18, // 地图最大缩放级别限制
        minZoom: 1,
        // 经纬度投影设置
        // projection: minemap.ProjectionType.LATLON,
        projection: MYCONF.MAP_PROJECTION_TYPE, // 经纬度投影：LATLON，墨卡托投影：MERCATOR
        preserveDrawingBuffer: false, // 截取canvas图片功能
    });
    //   map.repaint = true;
    //   map.timer.state = true;
    //   map.scrollZoom.setWheelZoomRate(1 / 1000); // 速率值越小，地图的缩放越细腻
    map.on('load', () => {
        map.resize();
    });
    return map;
};

export default mapInit;