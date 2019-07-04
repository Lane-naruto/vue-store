<template>
<div class="photo" @click="hidePhoto">
  <div class="mp-photo-show">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="mp-image" v-for="item of list" :key="item.id"
      :style="{backgroundImage: 'url(' +item.img +')'}"
      >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>

export default {
  name: 'GalleryPhoto',
  props: {
    photoIndex: Number
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      },
      list: [{
        id: 1,
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_350x240_270dd586.jpg'
      }, {
        id: 2,
        img: 'http://img1.qunarzz.com/sight/p0/1412/1b/57758525e53c24b95d1b329718f670b5.water.jpg_350x240_416570b0.jpg'
      }, {
        id: 3,
        img: 'http://img1.qunarzz.com/sight/p0/1411/38/217a6ffc968923cd95404a9b1e9e85e8.water.jpg_350x240_9ff2ff75.jpg'
      }, {
        id: 4,
        img: 'http://img1.qunarzz.com/sight/p0/1411/e2/054836aeec12503879a5a4efa9c0ca75.water.jpg_350x240_9a0bedcc.jpg'
      }, {
        id: 5,
        img: 'http://img1.qunarzz.com/sight/p0/1411/22/1b91e740682c0a7b77e97d889b03ab14.water.jpg_350x240_fc9efb19.jpg'
      }, {
        id: 6,
        img: 'http://img1.qunarzz.com/sight/p0/1411/7e/2e64faecef6ed1a374eb8240eec3f02b.water.jpg_350x240_3464ed2c.jpg'
      }, {
        id: 7,
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/bd773d79a9e162991892f5bf42f03f49.jpg_350x240_6fb35adb.jpg'
      }, {
        id: 8,
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/197472da8d6f5e6a8e6e3fcef4e4fe8a.jpg_350x240_d748337d.jpg'
      }, {
        id: 9,
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/536f97b6b211e03274305f39248f3d1f.jpg_350x240_0053ffa8.jpg'
      }, {
        id: 10,
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/d4171e3d5eab9100501a9a089c4e61e8.jpg_350x240_3fcbb946.jpg'
      }, {
        id: 11,
        img: 'http://img1.qunarzz.com/sight/p0/1412/f4/a586aaa9a694c76177a5cbf598acad09.water.jpg_350x240_0f939672.jpg'
      }, {
        id: 12,
        img: 'http://img1.qunarzz.com/sight/p0/1508/b5/c10fb47ef332be151b081a0ff1f3bf6d.water.jpg_350x240_04139153.jpg'
      }, {
        id: 13,
        img: 'http://img1.qunarzz.com/sight/p0/1508/26/d09fd3afa7f92fedbd4050de12bfd4b7.water.jpg_350x240_c1de1de0.jpg'
      }, {
        id: 14,
        img: 'http://img1.qunarzz.com/sight/p0/1508/ae/c005caf2cd7915057cbde1584866e77c.water.jpg_350x240_01079947.jpg'
      }, {
        id: 15,
        img: 'http://img1.qunarzz.com/sight/p0/1508/b9/d76441d8534e1f11725fe2bbf4532a66.water.jpg_350x240_bfac6d4d.jpg'
      }]
    }
  },
  methods: {
    hidePhoto () {
      this.$emit('hide')
    }
  },
  watch: {
    photoIndex () {
      this.swiper.slideTo(this.photoIndex, 1000, false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.photo
  overflow: hidden;
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  display: flex
  flex-direction: column
  justify-content: center
  .mp-photo-show
    width: 100%
    background-color: #000
    position: relative
    .mp-image
      z-index: 99
      width: 100%
      height: 1.8rem
      overflow: hidden
      padding-top: 50%
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    .swiper-pagination
      position: absolute
      height: .8rem;
      font-size: .24rem;
      line-height: .8rem;
      text-align: center;
      color: #fff;
.photo >>> .swiper-pagination-fraction
  bottom: -3.5rem
.photo >>> .swiper-container
  overflow: visible
</style>
