<template>
<div class="wrapper" ref="wrapper">
  <div>
    <div class="area" >
      <div class="title">定位城市</div>
      <div class="city">
        <div class="item-wrapper">
          <div class="item">{{city}}</div>
        </div>
      </div>
    </div>
    <div class="area" ref="position">
      <div class="title">热门城市</div>
      <div class="city">
        <div class="item-wrapper" v-for="item of hotCities" :key="item.id"
          @click="selectCity(item.name)">
          <div class="item">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
      <div class="title">{{key}}</div>
      <ul class="list">
        <li class="list-item border-bottom" v-for="value of item" :key="value.id" @click="selectCity(value.name)">{{value.name}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
    position: String
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    position () {
      if (this.position) {
        let element = this.$refs[this.position]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    selectCity (city) {
      this.$store.dispatch('changeCity', city)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.wrapper
  position: absolute
  left: 0
  right: 0
  top: 2.195rem
  bottom: 0
  overflow: hidden
  .title
    line-height: .6rem
    background: #f5f5f5
    padding-left: .2rem
  .city
    padding: .2rem .6rem .2rem .2rem
    overflow: hidden
    .item-wrapper
      width: 25%
      float: left
      margin-bottom: .2rem
      .item
        margin-right: .2rem
        border: 1px solid #ccc
        padding: .1rem
        text-align: center
        border-radius: .06rem
  .list
    padding-left: .2rem
    padding-right: .6rem
    .list-item
      line-height: .64rem
</style>
