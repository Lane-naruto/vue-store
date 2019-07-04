<template>
<div class="header">
<div><span class="iconfont header-back">&#xe605;</span></div>
<div class="search"><span class="iconfont">&#xe7de;</span><input placeholder="输入城市/景点/游玩主题"></div>
<router-link tag="div" to="/city" class="city">{{city}}<span class="iconfont">&#xe642;</span></router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: mapState({
    ...mapState(['city'])
  })
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.header
  width: 100%
  height: .88rem
  background: $bgColor
  display: flex
  color: #ffffff
  .header-back
    width: .88rem
    line-height: .88rem
    font-size: .4rem
    text-align: center
  .search
    flex: 1
    width: 100%
    height: .64rem
    line-height:.64rem
    background: #ffffff
    margin-top: .12rem
    border-radius: .06rem
    color: #999
    padding: 0 .1rem
    box-sizing: border-box
    span
      margin-right: .1rem
  .city
    min-width: .9rem
    line-height: .88rem
    font-size: .26rem
    text-align: center
    padding:0 .1rem
</style>
