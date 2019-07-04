<template>
<div class="container">
<div class="header">
  <div><router-link tag="span" to="/" class="iconfont header-back">&#xe605;</router-link><h1 class="text">选择城市</h1></div>
</div>
<div class="search"><span class="iconfont search-btn">&#xe7de;</span><input class="search-input" v-model="keyword" placeholder="请输入城市名称与拼音"></div>
<div class="result" v-show="keyword" ref="result">
  <ul class="list">
    <li class="list-item border-bottom" v-for="value of result"
      :key="value.id" @click="selectCity(value.name)">{{value.name}}</li>
    <li class="list-item border-bottom" v-show="!result.length">没有找到相关城市</li>
  </ul>
</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  // props: ["cities"],
  data () {
    return {
      result: [],
      keyword: '',
      timer: null
    }
  },
  methods: {
    selectCity (city) {
      this.changeCity(city)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.keyword) {
          let result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.result = result
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.result)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.header
  width: 100%;
  background-color: #f4f4f4;
  height: 1.173333rem;
  border-bottom: 1px solid #d4d4d4;
  z-index: 199;
  .header-back
    position: absolute
    display: inline-block
    font-size: 20px;
    color: #33bd61;
    line-height: 1.173333rem;
    padding: 0 .266667rem;
  .text
    display: inline-block
    text-align: center;
    font-size: 16px
    width: 100%
    line-height: 1.173333rem;
.search
  flex: 1
  width: 100%
  height: 1.06rem
  line-height: 1.06rem
  background-color: #edf0f5;
  border-radius: .06rem
  color: #999
  box-sizing: border-box
  position: relative
  .search-btn
    top: 0;
    left: .65rem;
    bottom: 0;
    margin: auto 0;
    color: #999;
    z-index: 1;
    font-size: 25px;
    position: absolute
  .search-input
    width: 7rem
    height: .66rem;
    box-sizing: border-box;
    padding: 0 .8rem 0 .8rem;
    color: #ccc;
    border-radius: .053333rem;
    display: inline-block;
    position: relative;
    margin-left: .3rem
    font-size: 14px;
.result
  position: fixed
  z-index: 99
  left: 0
  top: 2.21rem
  right: 0
  bottom: 0
  background: #ccc
  overflow: hidden
  .list
    padding-left: .2rem
    padding-right: .6rem
    background: #fff
    .list-item
      line-height: .64rem

</style>
