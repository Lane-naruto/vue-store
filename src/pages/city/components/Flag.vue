<template>
<div class="flag" v-show="letter" ref="flag">
  {{letter}}
</div>
</template>

<script>
export default {
  name: 'CityFlag',
  props: {
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        this.$refs.flag.style.display = 'block'
        setTimeout(() => {
          this.$refs.flag.style.display = 'none'
        }, 400)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl'
.flag
  position: fixed
  width: 1.2rem
  height: 1.2rem
  border-radius: 50%
  background: $bgColor
  z-index: 99
  color: #fff
  left: 50%
  right: 50%
  margin-left: -.8rem
  margin-top: .8rem
  text-align: center
  line-height: 1.2rem
  font-size: .6rem
</style>
