<template>
  <router-link tag="div" to="/gallery" class="mp-headerfigure">
    <div class="mp-headerfigure-wrap">
      <img class="mp-headerfigure-im" src="//img1.qunarzz.com/sight/p0/1505/a9/a9cd8c8550398407.water.jpg_600x330_7f2be242.jpg">
    </div>
    <div class="mp-headerfigure-info">
      <div class="mp-headerfigure-title">湖南大围山（AAAA景区）</div>
    </div>
    <div class="mp-img">
      <span class="mp-inconfont iconfont">&#xe605;</span>
      <em class="mp-img-number">22</em>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
.mp-headerfigure
  position: relative;
  .mp-headerfigure-wrap
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    .mp-headerfigure-im
      width: 100%;
  .mp-headerfigure-info
    position: absolute;
    right: .2rem;
    bottom: .36rem;
    left: .2rem;
    min-height: .4rem;
    .mp-headerfigure-title
      position: relative;
      z-index: 1;
      line-height: .4rem;
      color: white;
      font-size: .36rem;
  .mp-img
    position: absolute;
    left: .2rem;
    bottom: .86rem;
    width: 1.2rem;
    height: .4rem;
    background: rgba(0,0,0,.5);
    border-radius: .2rem;
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
    text-align: center;
    .mp-inconfont
      position: relative;
      top: .02rem;
    .mp-img-number
      margin-left: .1rem;
</style>
