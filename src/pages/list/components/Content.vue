<template>
  <div>
    <paginate
      name="items"
      ref="paginator"
      :list="items"
      :per="6"
    >
    <ul class="mp-like-list" v-for="item in paginated('items')" :key="item.id">
      <li class="mp-like-item">
        <a class="mp-fulllink">
          <div class="mp-like-imgcon">
            <img class="mp-like-img" :src="item.img">
            <div class="mp-like-tag" style="background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);">{{item.tag}}</div>
          </div>
          <div class="mp-like-info">
            <div class="mp-like-title mp-ellipsis">{{item.scenic}}</div>
            <div class="mp-like-comment">
              <span class="mpf-starlevel">
                <strong class="mpg-iconfont iconfont">&#xe60c; &#xe60c; &#xe60c; &#xe60c; &#xe60c;</strong>
              </span>
              <span class="mp-comment-num">{{item.comment}}</span>
            </div>
            <div class="mp-like-price">
              <span class="mpg-price">
                ￥
                <em class="mpg-price-num">{{item.price}}</em>
              </span>
              起
              <span class="mp-like-address">{{item.place}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
    </paginate>
    <div class="mp-moreinfo">
      <div class="pageCon">
        <div class="mp-pagination">
          <a @click="prev" ref="prevPage" :class="prevClass" class="mp-disable-btn">上一页</a>
          <span v-if="$refs.paginator" class="mp-page-num">
            {{$refs.paginator.currentPage + 1}} / {{$refs.paginator.lastPage}}
          </span>
          <a @click="next" ref="nextPage" class="mp-page-text">下一页</a>
        </div>
        <div class="mp-page">去哪儿门票</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    goodsList: Array
  },
  data () {
    return {
      items: this.goodsList,
      paginate: ['items'],
      prevClass: ''
    }
  },
  watch: {
    goodsList (newList) {
      this.items = newList
    }
  },
  methods: {
    prev (e) {
      this.$refs.nextPage.classList.remove('disabled')
      let nowPage = this.$refs.paginator.currentPage + 1
      let prevPage = nowPage
      if (nowPage > 1) {
        prevPage -= 1
        this.$refs.paginator.goToPage(prevPage)
      }
      if (prevPage === 1) {
        e.currentTarget.classList.add('disabled')
      }
    },
    next (e) {
      this.$refs.prevPage.classList.remove('disabled')
      let nowPage = this.$refs.paginator.currentPage + 1
      let totalPage = this.$refs.paginator.lastPage
      let nextPage = nowPage
      if (nowPage < totalPage) {
        nextPage += 1
        this.$refs.paginator.goToPage(nextPage)
      }
      if (nextPage === totalPage) {
        e.currentTarget.classList.add('disabled')
      }
    }
  },
  mouted () {
    let nowPage = this.this.$refs.paginator.currentPage + 1
    if (nowPage === 1) {
      this.prevClass = 'disabled'
    }
  }
}
</script>

<style lang="stylus" scoped>
.mp-like-list
  margin-left: .24rem;
  .mp-like-item
    position: relative;
    overflow: hidden;
    padding: .2rem 0;
    border-bottom: 1px solid #f5f5f5;
    .mp-fulllink
      display: block;
      width: 100%;
      height: 100%;
      .mp-like-imgcon
        float: left;
        overflow: hidden;
        width: 2rem;
        height: 2rem;
        .mp-like-img
          width: 100%;
          vertical-align: middle;
        .mp-like-tag
          position: absolute;
          top: .2rem;
          left: 0;
          width: 1.02rem;
          height: .38rem;
          background-size: 100%;
          color: #fff;
          font-size: .2rem;
          line-height: .38rem;
          text-indent: .04rem;
      .mp-like-info
        overflow: hidden;
        padding-left: .22rem;
        .mp-like-title
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
        .mp-like-comment
          margin-top: .14rem;
          height: .34rem;
          .mpf-starlevel
            display: inline-block;
            position: relative;
            width: 1.5rem;
            height: .28rem;
            line-height: .28rem;
            font-size: .28rem;
            letter-spacing: .02rem;
            .mpg-iconfont
              z-index: 2;
              color: #ffb436;
              overflow: hidden;
              position: absolute;
              top: .04rem;
              left: 0;
              height: .28rem;
          .mp-comment-num
            color: #616161;
            font-size: .24rem;
            line-height: .34rem;
            vertical-align: text-bottom;
        .mp-like-price
          position: relative;
          margin-top: .22rem;
          color: #616161;
          font-size: .24rem;
          line-height: .4rem;
          .mpg-price
            color: #ff8300;
            .mpg-price-num
              font-size: .4rem;
              color: #ff8300;
          .mp-like-address
            position: absolute;
            right: .24rem;
            bottom: 0;
.mp-moreinfo
  padding: .2rem 0
  color: #00afc7;
  line-height: .82rem;
  text-align: center;
  background: #f5f5f5
  .mp-pagination
    height: .7rem;
    line-height: .7rem;
    .mp-disable-btn
      display: inline-block;
      width: 1.4rem;
      border: .02rem solid #00afc7;
      background: #fff;
      color: #00afc7;
      line-height: .6rem;
      border-radius: .06rem;
    .mp-page-num
      color: #212121;
      line-height: .6rem;
      padding: 0 15px;
    .mp-page-text
      display: inline-block;
      width: 1.4rem;
      border: .02rem solid #00afc7;
      background: #fff;
      color: #00afc7;
      line-height: .6rem;
      border-radius: .06rem;
    .disabled
      background: #bdbdbd;
      color: #fff
      border: 0;
      display: inline-block;
      width: 1.4rem;
      line-height: .6rem;
      border-radius: .06rem;
.mp-page
  padding-top: .2rem;
  line-height: .3rem;
  font-size: .3rem;
</style>
