<template>
  <div @click="jumpMap" class="address">
    <p class="mp-address">
      <span class="mp-iconfont iconfont">&#xe643;</span>
      湖南省长沙浏阳市东北部大围山国家森林公园
      <span class="mp-place iconfont">&#xe605;</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DetailAddress',
  data () {
    return {
      lng: 114.084196,
      lat: 28.429366
    }
  },
  methods: {
    jumpMap () {
      this.$router.push('/map/' + this.lat + '/' + this.lng)
    }
  }
}
</script>

<style lang="stylus" scoped>
.address
  display: block;
  position: relative;
  padding: .2rem .2rem;
  line-height: .36rem;
  color: #212121;
  background-color: #fff
  .mp-address
    padding-right: .56rem;
    position: relative;
    padding-left: .56rem;
    .mp-iconfont
      display: block;
      height: 100%;
      line-height: 100%;
      position: absolute;
      left: 0;
      top: .16rem;
      margin-top: -.16rem;
      margin-right: .2rem;
      color: #9e9e9e;
      font-size: .36rem;
    .mp-place
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -.14rem;
      color: #9e9e9e;
      font-size: .24rem;
</style>
