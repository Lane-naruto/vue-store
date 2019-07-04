<template>
  <div class="mp-ticket-container">
    <div class="mp-ticket-group" v-for="item of ticket" :key="item.id">
      <h3 class="mp-ticket-type"><span class="mp-ticketype-ticket iconfont">&#xe62d;</span>{{item.title}}</h3>
      <div v-if="item.children" class="mp-ticket-list mp-border-top   mp-ticket-list-multi mp-ticket-list-expand">
        <div class="mp-ticket-type-info" v-for="value of item.children"
          :key="value.id"
          @click="toggleChildren"
          >
          <h5 class="mp-ticket-type-name">{{value.title}}</h5>
          <div class="mp-ticket-type-price mp-price">
            ￥
            <em class="mp-price-num">{{value.price}}</em>
            <span class="mp-ticket-numword">起</span>
            <span class="mp-ticket-type-extend iconfont">&#xe605;</span>
          </div>
          <div v-if="value.children" class="item">
            <div class="mp-ticket-item" v-for="val of value.children" :key="val.id"
             @click="showRemark"
            >
              <div class="mp-ticket-main">
                <h6 class="mp-ticket-title">{{val.title}}</h6>
              </div>
              <div class="mp-ticket-side">
                <a class="mp-ticket-link">
                  <strong class="mp-ticket-sale">
                    ￥
                    <em class="mp-price-num">{{val.price}}</em>
                    <span class="mp-ticket-numword">起</span>
                  </strong>
                  <em class="mp-ticket-btn">预定</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailTicket',
  props: {
    ticket: Array
  },
  methods: {
    toggleChildren (e) {
      let item = e.currentTarget.querySelector('.item')
      if (item.style.display === '' || item.style.display === 'none') {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    },
    showRemark () {
      this.$emit('show')
    }
  }
}
</script>

<style lang="stylus" scoped>
.mp-ticket-container
  margin-top: .2rem
  .mp-ticket-group
    height: auto
    overflow: hidden
    margin-bottom: .06rem
    .mp-ticket-type
      overflow: hidden;
      position: relative;
      z-index: 4;
      margin-bottom: .02rem;
      padding: 0 .2rem;
      height: .88rem;
      background: #fff;
      color: #333;
      font-size: .32rem;
      line-height: .88rem;
      text-indent: .08rem;
      .mp-ticketype-ticket
        margin-right: .1rem
    .mp-ticket-type-info
      width: 100%
      position: relative;
      z-index: 2;
      margin-bottom: -.02rem;
      padding: .2rem 0;
      background: #fff;
      .mp-ticket-type-name
        margin-right: 1.8rem;
        margin-left: .2rem
        color: #333;
        font-size: .3rem;
        line-height: .5rem;
      .mp-ticket-type-price
        position: absolute
        right: .2rem;
        margin-top: -.5rem;
        color: #ff9800;
        font-size: .24rem;
        .mp-price-num
          font-size: .4rem;
        .mp-ticket-numword
          display: inline-block;
          color: #9e9e9e;
          font-size: .24rem;
        .mp-ticket-type-extend
          right: .2rem;
          margin-top: -.22rem;
          color: #bbb;
          font-size: .24rem;
      .mp-ticket-item
        background: #f5f5f5;
        overflow: hidden
        margin-top: .1rem
        margin-bottom: .1rem
        padding: .2rem .2rem
        .mp-ticket-main
          float:left
          width: 5rem
          .mp-ticket-title
            color: #616161;
            font-size: .28rem
        .mp-ticket-side
          height: 100%
          float: right
          .mp-ticket-link
            box-sizing: border-box;
            display: block;
            width: 100%;
            padding-left: .2rem;
          .mp-ticket-sale
            color: #ff9800;
            display: block;
            height: .4rem;
            font-size: .24rem;
            line-height: .28rem;
            text-align: center;
            .mp-price-num
              font-size: .4rem;
              line-height: .4rem
            .mp-ticket-numword
              display: inline-block;
              color: #9e9e9e;
              font-size: .24rem;
          .mp-ticket-btn
            display: block
            width: 1.6rem
            height: .6rem;
            color: #fff;
            font-size: .24rem;
            line-height: .6rem;
            border-radius: .08rem;
            text-align: center;
            background-color: #ff9800;
.item
  display: none
</style>
