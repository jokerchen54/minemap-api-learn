/* eslint-disable no-unused-vars */
const MAP_BASE_URL = 'https://minedata.cn'; // minedata(以下涉及此地址均需要更改)
const MAP_SERVICE_URL = 'https://minedata.cn'; // minedata(以下涉及此地址均需要更改)
const MYCONF = {
  MAP: {
    DOMAIN: MAP_SERVICE_URL,
    DATA_DOMAIN_URL: MAP_SERVICE_URL,
    SERVICE_DOMAIN_URL: MAP_SERVICE_URL,
    SERVICE_URL: MAP_SERVICE_URL,
    SPRITE_URL: `${MAP_BASE_URL}/minemapapi/v2.1.0/sprite/sprite`,
    FONT_URL: `${MAP_BASE_URL}/minemapapi/v2.1.0/fonts`,
    SOLUTION: 12877, // 浅色12653 深色12654  12686
    TOKEN: '16be596e00c44c86bb1569cb53424dc9', // 默认地图appKey
    CENTER: [113,23], // 地图初始中心点
    ZOOM: 10, // 地图初始zoom级别
  },
  MAP_PROJECTION_TYPE: 'MERCATOR', // 经纬度投影：LATLON，墨卡托投影：MERCATOR
};

export default MYCONF