<template>
<div class="wrapper">
<swiper :options="swiperOption" ref="mySwiper">
  <swiper-slide v-for="item of list" :key="item.id">
    <img class="swiper-img" :src="item.img">
  </swiper-slide>
<div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background: #ffffff;
.wrapper
  width: 100%
  overflow: 0
  padding-botton: 26.27%
.swiper-img
  width: 100%
  height: 100%
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
  bottom: 0
</style>
