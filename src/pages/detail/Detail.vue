<template>
  <div class="container">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-address></detail-address>
    <detail-ticket :ticket="ticket" @show="showRemark"></detail-ticket>
    <detail-remark :isShowRemark="isShowRemark" @hide="hideRemark"></detail-remark>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailAddress from './components/Address'
import DetailTicket from './components/Ticket'
import DetailRemark from './components/Remark'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailAddress,
    DetailTicket,
    DetailRemark
  },
  data () {
    return {
      isShowRemark: false,
      ticket: [{
        id: 1,
        title: '门票',
        level: 1,
        children: [{
          id: 1,
          title: '大围山国家森林成人票',
          price: 90,
          level: 2,
          children: [{
            id: 1,
            title: '大围山国家森林成人票',
            price: 90,
            level: 3
          }]
        }]
      }, {
        id: 2,
        title: '一日游',
        level: 1,
        children: [{
          id: 2,
          title: '【长沙出发】湖南大围山1日游',
          price: 190,
          level: 2,
          children: [{
            id: 2,
            title: '【万亩俏杜鹃|映红大围山】刘阳.大围山赏野生杜鹃花一日游',
            price: 218,
            level: 3
          }, {
            id: 3,
            title: '刘阳.大围山赏野生杜鹃花一日游刘阳.大围山赏野生杜鹃花一日游',
            price: 190,
            level: 3
          }]
        }, {
          id: 3,
          title: '【长沙出发】湖南大围山+大围山拓展基地+大围山香蕉花海一日游',
          price: 190,
          level: 1,
          children: [{
            id: 4,
            title: '【长沙出发】湖南大围山1日游',
            price: 190,
            level: 3
          }]
        }]
      }]
    }
  },
  methods: {
    showRemark () {
      this.isShowRemark = true
    },
    hideRemark () {
      this.isShowRemark = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
</style>
