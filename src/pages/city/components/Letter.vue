<template>
<div class="letter">
  <ul>
    <li class="item" @click="selectLetter('position',1)">
    定位<br/>
    热门<br/>
    </li>
    <li class="item" v-for="item of letters"
      :key="item" :ref="item" @click="selectLetter(item,2)"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      >{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'CityLetter',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    selectLetter (letter, type) {
      this.$emit('select', {content: letter, type: type})
    },
    touchStart () {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY
          let index = Math.floor((touchY - this.startY) / 20)
          this.$emit('select', {content: this.letters[index], type: 2})
        }, 20)
      }
    },
    touchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.letter
  position: absolute
  width: .6rem
  right: 0
  top: 0
  bottom: 0
  display: flex
  padding-top: 1rem
  flex-direction: column
  justify-content: center
  .item
    width: .6rem
    line-height: .4rem
    text-align: center
    color: $bgColor
    font-size: .24rem
</style>
