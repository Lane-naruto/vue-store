<template>
<div class="container">
  <gallery-header></gallery-header>
  <gallery-list @show="showPhoto"></gallery-list>
  <gallery-photo v-show="isShowPhoto" @hide="hidePhoto" :photoIndex="photoIndex"></gallery-photo>
</div>
</template>

<script>
import GalleryHeader from './components/Header'
import GalleryList from './components/List'
import GalleryPhoto from './components/Photo'
export default {
  name: 'Gallery',
  components: {
    GalleryHeader,
    GalleryList,
    GalleryPhoto
  },
  data () {
    return {
      isShowPhoto: false,
      photoIndex: 0
    }
  },
  methods: {
    showPhoto (index) {
      this.isShowPhoto = true
      this.photoIndex = index
    },
    hidePhoto () {
      this.isShowPhoto = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color: #f5f5f5
</style>
