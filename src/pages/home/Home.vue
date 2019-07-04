<template>
<div class="container">
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <div class="nav-position">
    <home-nav></home-nav>
    <home-position></home-position>
  </div>
  <div class="nav-group">
    <home-title></home-title>
  </div>
  <home-like></home-like>
  <home-load></home-load>
  <home-footer></home-footer>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeNav from './components/Navigate'
import HomePosition from './components/Position'
import HomeTitle from './components/Title'
import Axios from 'axios'
import HomeFooter from './components/Footer'
import HomeLoad from './components/Load'
import HomeLike from './components/Like'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomePosition,
    HomeTitle,
    HomeFooter,
    HomeLoad,
    HomeLike
  },
  data () {
    return {
      swiperList: []
    }
  },
  methods: {
    getHomeInfo () {
      Axios.get('http://www.lane.mobi/static/mock/home.html').then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (!res.error_code && res.data) {
        let data = res.data
        this.swiperList = data.swiper
      }
    }
  },
  // beforeCreate () {
  //   alert('组件实例化之前执行的函数')
  // },
  // created () {
  //   alert('组件实例化完毕，但页面还未显示')
  // },
  // beforeMount () {
  //   alert('组件挂载前，页面仍未展示')
  // },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
  background: #ddd
.nav-position
  background: #fff
.nav-group
  margin-top: .3rem
</style>
