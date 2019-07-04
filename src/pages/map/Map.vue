<template>
  <div class="container">
    <map-header></map-header>
    <map-show></map-show>
  </div>
</template>

<script>
import MapHeader from './components/Header'
import MapShow from './components/Show'
export default {
  name: 'Map',
  components: {
    MapHeader,
    MapShow
  }
}
</script>

<style lang="stylus" scoped>
</style>
