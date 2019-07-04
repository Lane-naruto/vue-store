<template>
  <div>
    <a class="mp-header-back" @click="goBack" v-show="showicon">
      <span class="mp-headerback-bg"></span>
      <span class="mp-headerback-icon iconfont">&#xe605;</span>
    </a>
    <div class="mp-header" v-show="!showicon" :style="opacity">
      <span class="iconfont header-back" @click="goBack">&#xe605;</span>
      <h1 class="text">湖南大围山</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showicon: true,
      opacity: 0
    }
  },
  methods: {
    goBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
    headerScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 50) {
        let opacity = scrollTop / 206.25
        opacity = opacity > 1 ? 1 : opacity
        this.showicon = false
        this.opacity = { opacity }
      } else {
        this.showicon = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.headerScroll)
  }
}
</script>

<style lang="stylus" scoped>
.mp-header-back
  z-index: 9
  position: fixed
  left: .1rem;
  top: .1rem;
  width: .72rem;
  height: .72rem;
  line-height: .72rem;
  font-size: .36rem;
  color: #fff;
  text-align: center;
  .mp-headerback-bg
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    -webkit-border-radius: .36rem;
    -moz-border-radius: .36rem;
    border-radius: .36rem;
  .mp-headerback-icon
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .15rem;
    font-size: .40rem
.mp-header
  position: fixed
  width: 100%;
  background-color: #00bcd4;
  height: .88rem;
  z-index: 199;
  .header-back
    position: absolute
    display: inline-block
    font-size: 20px;
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
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
</style>
