<template>
  <div class="mp-group">
    <div class="mp-group-title">
      <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <span class="mp-title">猜你喜欢</span>
      <ul class="mp-like-list" v-for="item of likeList" :key="item.id">
        <a href="http://touch.piao.qunar.com/touch/detail.htm?id=508489559&from=as_recommend_sight">
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
        </a>
      </ul>
      <router-link tag="a" to="/list" class="mp-like-more">查看所有产品</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  data () {
    return {
      likeList: [{
        id: '1',
        tag: '随买随用',
        img: 'http://img1.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_200x200_f09770c8.jpg',
        scenic: '橘子洲',
        comment: '2737条评论',
        price: '138',
        place: '岳麓区'
      }, {
        id: '2',
        tag: '随时随买',
        img: 'http://img1.qunarzz.com/sight/p0/1610/8f/8f244e6a0ac12325a3.img.jpg_200x200_a6a1cd22.jpg',
        scenic: '橘子洲湘江游船',
        comment: '204条评论',
        price: '138',
        place: '长沙'
      }, {
        id: '3',
        tag: '可订今日',
        img: 'http://img1.qunarzz.com/sight/p0/1412/68/42da26a54c27a3c237b4d10a61583c36.water.jpg_200x200_a38c904d.jpg',
        scenic: '靖港古镇',
        comment: '1053条评论',
        price: '70.7',
        place: '望城县'
      }, {
        id: '4',
        tag: '随时随买',
        img: 'http://img1.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_200x200_650160bf.jpg',
        scenic: '长沙生态动物园',
        comment: '9465条评论',
        price: '115',
        place: '长沙县'
      }, {
        id: '6',
        tag: '可订明日',
        img: 'http://img1.qunarzz.com/sight/p0/1505/a9/a9cd8c8550398407.water.jpg_200x200_4fb81eb4.jpg',
        scenic: '湖南大围山',
        comment: '848条评论',
        price: '90',
        place: '浏阳市'
      }, {
        id: '7',
        tag: '随时随买',
        img: 'http://img1.qunarzz.com/sight/p0/1412/84/59a55aa2632a3104e3c527301def622f.water.jpg_200x200_d5531e22.jpg',
        scenic: '伯乐园',
        comment: '1138条评论',
        price: '132',
        place: '望城县'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.mp-group
  background: #fff
  margin-top: .2rem
  .mp-group-title
    position: relative;
    padding: .24rem 0 0;
    .mp-title-img
      display: inline-block;
      overflow: hidden;
      width: .3rem;
      height: .3rem;
      margin-left: .2rem;
      vertical-align: top;
    .mp-title
      display: inline-block;
      margin-left: .08rem;
      height: .44rem;
      color: #212121;
      font-size: .32rem;
      line-height: .44rem;
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
.mp-like-more
  display: block;
  padding: .2rem 0;
  color: #00afc7;
  font-size: .28rem;
  line-height: .4rem;
  text-align: center;
</style>
