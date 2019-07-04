<template>
  <div class="remark" ref="remark">
    <div class="iconfont close-icon" @click="hideRemark">&#xe605;</div>
    <div class="msg-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailRemark',
  props: {
    isShowRemark: Boolean
  },
  watch: {
    isShowRemark (e) {
      if (this.isShowRemark) {
        this.$refs.remark.classList.add('movein')
      } else {
        this.$refs.remark.classList.remove('movein')
      }
    }
  },
  methods: {
    hideRemark (e) {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="stylus" scoped>
.remark
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 100
  background: #fff
  transform: translateY(100%)
  transition: transform .3s ease-out;
  .close-icon
    position: absolute
    top: .2rem
    right: .4rem
    width: .4rem
    height: .4rem
    line-height: .4rem
    text-align: center
    font-size: .4rem
  .msg-mask
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    z-index: 100;
    background: rgba(0,0,0,.5);
.movein
  transform: translateY(.66rem)
</style>
