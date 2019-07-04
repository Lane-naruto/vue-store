<template>
  <div>
    <list-header @search="searchList"></list-header>
    <list-category @sort="sortList"></list-category>
    <list-content :goodsList="goodsList"></list-content>
  </div>
</template>

<script>
import ListHeader from './components/Header'
import ListCategory from './components/Category'
import ListContent from './components/Content'
export default {
  name: 'List',
  components: {
    ListHeader,
    ListCategory,
    ListContent
  },
  created () {
    this.list = this.goodsList
  },
  data () {
    return {
      list: [],
      goodsList: [{
        id: '1',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201407/14/e948e22c69c5ef745a005865ef127597.jpg_110x110_324047fd.jpg',
        scenic: '浏阳石牛寨',
        comment: '126条评论',
        price: '49',
        place: '浏阳市'
      }, {
        id: '2',
        tag: '随时随买',
        img: '//img1.qunarzz.com/sight/p0/1508/ba/f30f404fdf3002e2d022d4825ad2e06b.water.jpg_110x110_4ca43908.jpg',
        scenic: '周洛大峡谷',
        comment: '602条评论',
        price: '50.6',
        place: '湖南大围山'
      }, {
        id: '3',
        tag: '可订今日',
        img: 'http://img1.qunarzz.com/sight/p0/1412/68/42da26a54c27a3c237b4d10a61583c36.water.jpg_200x200_a38c904d.jpg',
        scenic: '华谊兄弟（长沙）电影小镇',
        comment: '1053条评论',
        price: '70.7',
        place: '岳麓区'
      }, {
        id: '4',
        tag: '随时随买',
        img: '//img1.qunarzz.com/sight/p0/1901/1e/1ec2ff19c75525eda3.img.jpg_110x110_aa08ee7c.jpg',
        scenic: '长沙生态动物园',
        comment: '9465条评论',
        price: '115',
        place: '长沙县'
      }, {
        id: '6',
        tag: '可订明日',
        img: 'http://img1.qunarzz.com/sight/p0/1611/20/205db6ee32a4a29ba3.water.jpg_110x110_e61c919f.jpg',
        scenic: '海立方海洋公园',
        comment: '848条评论',
        price: '50',
        place: '雨花区'
      }, {
        id: '7',
        tag: '随时随买',
        img: 'http://img1.qunarzz.com/sight/p0/1905/d6/d63cf9b73e4a39aba3.img.jpg_110x110_6df6c577.jpg',
        scenic: '石燕湖',
        comment: '1138条评论',
        price: '132',
        place: '长沙县'
      }, {
        id: '8',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201401/26/4c0b0ebca6b8066cdad222c1a28a8c39.jpg_110x110_1c1f99da.jpg',
        scenic: '新华联铜官窑古镇',
        comment: '848条评论',
        price: '190',
        place: '望城县'
      }, {
        id: '9',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201401/26/4c0b0ebca6b8066cdad222c1a28a8c39.jpg_110x110_1c1f99da.jpg',
        scenic: '花504条评论',
        price: '0.1',
        place: '宁乡县'
      }, {
        id: '10',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201403/10/363d91c2f2b1a0a7e75ad3005ab34d03.jpg_110x110_a86b19c2.jpg',
        scenic: '黑麋峰国家森林公园',
        comment: '53条评论',
        price: '80',
        place: '文城县'
      }, {
        id: '11',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201301/14/c6b64cc6ec60b39e93835fbb.jpg_110x110_2cf80df2.jpg',
        scenic: '杜甫江阁',
        comment: '461条评论',
        price: '9.9',
        place: '天心区'
      }, {
        id: '12',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201303/04/1ad9f7e93228c5f0c8d65eac.jpg_110x110_d1fa6b51.jpg',
        scenic: '爱晚亭',
        comment: '145条评论',
        price: '68',
        place: '岳麓区'
      }, {
        id: '13',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/1809/cb/cb907375862ab94ca3.img.png_110x110_bf2ebe53.png',
        scenic: '兔小狐动物主题公园',
        comment: '19条评论',
        price: '88',
        place: '芙蓉区'
      }, {
        id: '14',
        tag: '可订明日',
        img: '//img1.qunarzz.com/sight/p0/201403/07/121fa500c65e619844a875ca6fe757bc.jpg_110x110_4db1581f.jpg',
        scenic: '灰汤华天城温泉',
        comment: '1296条评论',
        price: '155',
        place: '宁乡县'
      }]
    }
  },
  methods: {
    sortList (sortType) {
      switch (sortType) {
        case 'default':
          this.goodsList.sort((x, y) => {
            return x.id - y.id
          })
          break
        case 'price':
          this.goodsList.sort((x, y) => {
            return x.price - y.price
          })
          break
        case 'comment':
          this.goodsList.sort((x, y) => {
            return x.comment - y.comment
          })
          break
      }
    },
    searchList (keyword) {
      let result = []
      if (keyword) {
        this.list.forEach((value) => {
          if (value.scenic.indexOf(keyword) > -1) {
            result.push(value)
          }
        })
      } else {
        result = this.list
      }
      this.goodsList = result
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
