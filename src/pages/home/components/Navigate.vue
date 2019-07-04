<template>
<div class="container">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(page, index) of navPages" :key="index">
      <a class="nav-item" v-for="item of page" :key="item.id" href="https://touch.piao.qunar.com/touch/list_长沙_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E9%2595%25BF%25E6%25B2%2599">
        <div class="nav-img">
          <img :src="item.img">
        </div>
        <p class="nav-text">{{item.text}}</p>
      </a>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeNav',
  computed: {
    navPages () {
      let pages = []
      this.list.forEach(function (value, index) {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      list: [{
        id: 1,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      }, {
        id: 2,
        img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        text: '一日游'
      }, {
        id: 3,
        img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        text: '长沙必游'
      }, {
        id: 4,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        text: '踏青赏花'
      }, {
        id: 5,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        text: '游乐场'
      }, {
        id: 6,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        text: '动植物园'
      }, {
        id: 7,
        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        text: '自然风光'
      }, {
        id: 8,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        text: '湘西凤凰'
      }, {
        id: 9,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '橘子洲'
      }, {
        id: 10,
        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '玻璃桥'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.container >>> .swiper-pagination-bullets
  bottom: -.12rem
.container >>> .swiper-pagination-bullet
  width: .12rem
  height: .12rem
.container >>> .swiper-pagination-bullet-active
  background: $bgColor
.container >>> .swiper-container
  height: 0
  padding-bottom: 50%
.container
  width : 100%
  height: 0
  overflow: hidden
  padding-bottom: 50%
  background: #ffffff
  .nav-item
    margin-top: .12rem
    width: 25%
    height: 0
    overflow: hidden
    padding-bottom: 23%
    float: left
    position: relative
    .nav-img
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: .44rem
      img
        display: block
        width: 1.1rem
        height: 1.1rem
        margin: 0 auto
    .nav-text
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      line-height: .44rem
      text-align: center
      overflow: hidden
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
  bottom: 0
</style>
