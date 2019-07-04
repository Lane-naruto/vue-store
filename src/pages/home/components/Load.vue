<template>
  <div>
    <div class="lazy-load">
      <h2 class="mp-modtitle">周末去哪儿</h2>
      <div>
        <div class="mp-product-item" v-for="item of placeList" :key="item.id">
          <a class="mp-fulllink">
            <div class="product-imgcontainer image-ready">
              <img :src="item.img">
            </div>
            <div class="mp-product-info">
              <p class="product-name">{{item.title}}</p>
              <p class="product-desc">{{item.content}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="mp-price-desc">
      <span class="iconfont mp-price-desc-icon">&#xe642;</span>
      <div class="mp-price-desc-info">
        <span class="mp-price-desc-highlight">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLoad',
  props: {
    placeList: Array
  }
}
</script>

<style lang="stylus" scoped>
.lazy-load
  display: block
  .mp-modtitle
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  .mp-product-item
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
    .mp-fulllink
      display: block;
      width: 100%;
      height: 100%;
      .product-imgcontainer
        overflow: hidden;
        height: 0;
        padding-bottom: 37.4375%;
      .mp-product-info
        position: relative;
        padding: .14rem .2rem .2rem .2rem;
        .product-name
          overflow: hidden;
          padding-right: 1.4rem;
          color: #212121;
          font-size: .28rem;
          line-height: .48rem;
          white-space: nowrap;
          text-overflow: ellipsis;
        .product-desc
          overflow: hidden;
          padding-right: 1.4rem;
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
          white-space: nowrap;
          text-overflow: ellipsis;
.mp-price-desc
  margin-top: .1rem;
  padding: .14rem .1rem;
  font-size: .24rem;
  line-height: .32rem;
  background: #fff;
  color: #616161;
  .mp-price-desc-icon
    width: .24rem;
    display: block;
    float: left;
    line-height: .32rem;
  .mp-price-desc-info
    margin-left: .3rem;
    .mp-price-desc-highlight
      font-size: .24rem;
      line-height: .32rem;
      color: #616161;
      font-weight: bold;
</style>
