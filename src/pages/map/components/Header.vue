<template>
  <div class="container">
    <div class="header">
      <div>
       <div @click="goBack" class="iconfont header-back">&#xe605;</div>
       <h1 class="text">景点图片</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapHeader',
  methods: {
    goBack () {
      if (window.history.length > 0) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width: 100%;
  background-color: #00bcd4;
  height: .88rem;
  border-bottom: 1px solid #d4d4d4;
  z-index: 199;
  .header-back
    position: absolute
    display: inline-block
    font-size: 25px;
    color: #fff;
    line-height: .88rem;
    padding: 0 .266667rem;
   .text
    display: inline-block
    text-align: center;
    font-size: 16px
    width: 100%
    line-height: .88rem;
    color: #fff
</style>
