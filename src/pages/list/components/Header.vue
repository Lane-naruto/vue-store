<template>
  <div class="mp-page">
    <div class="mp-header">
      <a @click="goBack" class="mp-header-left iconfont">&#xe605;</a>
      <h1 class="mp-header-title">
        <input type="text" name="keyword" placeholder="输入城市或景点"
          class="mp-search-input"
          v-model="keyword"
          @keyup.enter = "searchList"
        >
        <span class="mp-search-delete" v-show="keyword" @click="clearKeyword"></span>
      </h1>
      <span class="mp-header-right">
        <a class="mp-search-submit" @click="searchList">搜索</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    clearKeyword () {
      this.keyword = ''
      this.searchList()
    },
    goBack () {
      if (window.history.length > 0) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
    searchList () {
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style lang="stylus" scoped>
.mp-page
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
  .mp-header
    z-index: 98;
    background: #fff;
    position: relative;
    display: -webkit-box;
    width: 100%;
    height: .88rem;
    text-align: center;
    color: #fff;
    .mp-header-left
      display: inline-block;
      width: .4rem;
      line-height: .88rem;
      padding: 0 .2rem;
      color: #616161;
      font-size: .36rem;
      text-align: left;
    .mp-header-title
      padding: 0 .6rem 0 .2rem;
      background: #f2f2f2;
      color: #212121;
      box-sizing: border-box;
      -webkit-box-flex: 1;
      border-radius: .3rem;
      position: relative;
      height: .6rem;
      margin: .14rem 0;
      ine-height: .6rem;
      .mp-search-input
        position: relative;
        display: block;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        padding: .1rem 0;
        background: #f2f2f2;
        border: 0;
        font-family: "Microsoft Yahei",Arial;
        font-size: .28rem;
        border-radius: .06rem;
        text-align: center;
      .mp-search-delete
        position: absolute;
        top: 0;
        right: 0;
        width: .58rem;
        height: .58rem
        background: url(//img1.qunarzz.com/piao/fusion/1803/53/d259068b610c1d02.png) 0 .1rem no-repeat;
        background-size: .4rem .4rem;
    .mp-header-right
      display: inline-block;
      height: .88rem;
      line-height: .88rem;
      padding: 0 .1rem;
      .mp-search-submit
        display: inline-block;
        width: .74rem;
        margin-right: .04rem;
        color: #212121;
        font-size: .28rem;
</style>
