<template>
  <div class="qn_footer">
    <div class="main_nav_wrapper">
      <ul class="main_nav">
        <li class="flight first">
          <a href="//touch.qunar.com/h5/flight/">
            <div class="icon"></div>
            <span class="title">机票</span>
          </a>
        </li>
        <li class="hotel first">
          <a href="//touch.qunar.com/h5/hotel/">
            <div class="icon"></div>
            <span class="title">酒店</span>
          </a>
        </li>
        <li class="gongyu first">
          <a href="//touch.qunar.com/h5/hotel/">
            <div class="icon"></div>
            <span class="title">公寓</span>
          </a>
        </li>
        <li class="tag first" ref="hiddenMore">
          <span class="title" @click="showTag">更多</span>
        </li>
        <li class="showTags" ref="showMore">
          <div class="tuan more" >
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">团购</span>
            </a>
          </div>
          <div class="train more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">火车站</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">景点</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">接送机</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">度假</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">攻略</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">旅图</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">车车</span>
            </a>
          </div>
          <div class="scenic more">
            <a href="http://touch.qunar.com/h5/group/grouplist">
              <div class="icon"></div>
              <span class="title">当地人</span>
            </a>
          </div>
          <div class="last">
            <span class="title" @click="hiddenTag">收起</span>
          </div>
        </li>
      </ul>
    </div>
    <ul class="footer_nav clearfix">
      <li>
        <a href="//touch.qunar.com/h5/user/login">登录</a>
      </li>
      <li>
        <a href="//touch.qunar.com/h5/user/usercenter">我的订单</a>
      </li>
      <li>
        <a href="//touch.qunar.com/h5/recent">最近浏览</a>
      </li>
      <li>
        <a href="//touch.qunar.com/h5/about">关于我们</a>
      </li>
    </ul>
    <ul class="mobile_pc clearfix">
      <li class="active">
        <a href="//touch.qunar.com/h5/">触屏版</a>
      </li>
      <li>
        <a href="http://www.qunar.com/index.htm?from=mobile&qn163=1">电脑版</a>
      </li>
    </ul>
    <div class="copyright">
      <span>Qunar 京ICP备05021087</span>
      <a href="//touch.qunar.com/h5/feedback" class="qn_ml25">意见反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  methods: {
    showTag () {
      this.$refs.showMore.style.display = 'block'
      this.$refs.hiddenMore.style.display = 'none'
    },
    hiddenTag () {
      this.$refs.showMore.style.display = 'none'
      this.$refs.hiddenMore.style.display = 'block'
    }
  }
}
</script>

<style lang="stylus" scoped>
.qn_footer
  background: #f3f3f3;
  .main_nav
    position: relative;
    width: 300px;
    margin: 0 auto;
    padding: 10px 10px 0 10px;
    overflow: hidden;
    .first
      margin: 0px;
      padding-left: 10px;
      height: 31px;
      width: 65px;
      float: left;
      position: relative;
      background: none;
      a
        display: block
        height: 0.44rem;
        width: 100%;
        font-size: 12px;
    .showTags
      display: none
      height: 31px
      .more
        display: list-item
        margin: 0px;
        padding-left: 10px;
        height: 31px;
        width: 65px;
        float: left;
        background: none;
        a
          display: block
          height: 0.44rem;
          width: 100%;
          font-size: 12px;
.qn_footer .main_nav .icon
  float: left;
  width: 22px;
  height: 22px;
  background: url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat;
  background-size: 175px 50px;
.title
  float: left;
  display: inline-block;
  color: #9e9e9e;
  margin: 3px 0 0 5px;
  border-bottom: 1px solid #acacac;
  font-size: 12px;
.qn_footer
  background: #f3f3f3;
  .footer_nav
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #cacaca;
    margin-top: .2rem
    li
      float: left;
      padding-left: 20px;
      list-style: none;
      display: list-item;
      text-align: -webkit-match-parent
  .mobile_pc
    padding: 10px 0 0 0;
    text-align: center;
    li
      display: inline-block;
      margin: 0 15px;
    .active a
      color: black;
      font-size: 14px;
  .copyright
    color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
    a
      color: #9e9e9e;
      height: 33px;
.last
  margin: 0px;
  padding-left: 10px;
  height: 31px;
  width: 65px;
  float: right;
  position: relative;
  background: none;
</style>
