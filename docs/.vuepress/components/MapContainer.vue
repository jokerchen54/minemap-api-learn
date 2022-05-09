<template>
    <div>
        <div class="map-box" id="map">
        </div>
    </div>

</template>
<script>
import mapInit from './common/map/mapInit.js'
let map = null
export default {
    methods: {
        getMineMap() {
            return map
        }
    },
    mounted() {
        map = mapInit('map')
        map.on('load', ()=> {
            // 执行来自不同demo初始化处理
            this.$emit('onload',map)
        });
    }
}
</script>
<style lang="less" scoped>
.map-box {
    width: 100%;
    height: 500px;
}
</style>