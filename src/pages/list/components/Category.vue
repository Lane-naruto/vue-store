<template>
  <div class="mp-main">
    <div class="category border-right">
      <div class="mp-title">
        全部分类
        <span class="mp-select-caption iconfont">
        &#xe600;
        </span>
      </div>
    </div>
    <div class="sort">
      <div class="mp-title" @click="showSort">
        <span ref="sortText">推荐排序</span>
        <span class="mp-select-caption iconfont">
        &#xe600;
        </span>
     </div>
     <ul class="list" ref="sortUl">
       <li :class="sortType === 'default' ? 'active' : ''" @click="sortList('default')">推荐排序</li>
       <li :class="sortType === 'price' ? 'active' : ''" @click="sortList('price')">价格顺序</li>
       <li :class="sortType === 'comment' ? 'active' : ''" @click="sortList('comment')">人气最高</li>
     </ul>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'ListCategory',
  data () {
    return {
      sortType: 'default'
    }
  },
  methods: {
    showSort (e) {
      let element = e.currentTarget.parentElement.querySelector('.list')
      if (element.style.display === '' || element.style.display === 'none') {
        element.style.display = 'block'
        this.$refs.mask.style.display = 'block'
      } else {
        element.style.display = ''
        this.$refs.mask.style.display = 'none'
      }
    },
    sortList (sortType) {
      this.sortType = sortType
      this.$emit('sort', sortType)
      this.$refs.sortUl.style.display = 'none'
      this.$refs.mask.style.display = 'none'
      switch (sortType) {
        case 'default':
          this.$refs.sortText.innerText = '推荐排序'
          break
        case 'price':
          this.$refs.sortText.innerText = '价格高低'
          break
        case 'comment':
          this.$refs.sortText.innerText = '人气最高'
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.mp-main
  display: flex
  position: relative
  border-top: .01rem solid #eaeaea
  border-bottom: .01rem solid #eaeaea
  .category
    width: 50%
  .mp-title
    height: .8rem;
    line-height: .8rem
    text-align: center
    color: #212121
    white-space: nowrap;
    font-size: .28rem;
  .sort
    width: 50%;
    .list
      display: none
      width: 100%
      position: absolute
      left: 0
      top: .8rem
      z-index: 99
      li
        height: .8rem
        line-height: .8rem
        text-align: center
        border-bottom: .01rem solid #eaeaea
        color: #212121
        font-size: .28rem;
        background: #fff
      .active
        background: #f1f1f1;
.mask
  top: 4.11rem;
  display: block;
  background: rgba(0,0,0,0.45);
  position: fixed;
  display: none;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
</style>
