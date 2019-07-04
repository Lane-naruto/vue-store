<template>
  <div class="container">
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
    </baidu-map>
  </div>
</template>

<script>

export default {
  name: 'MapShow',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = this.$route.params.lng
      this.center.lat = this.$route.params.lat
      this.zoom = 15
    }
  }
}
</script>

<style lang="stylus" scoped>
.bm-view
  position: fixed
  width: 100%;
  height: 100%;
</style>
