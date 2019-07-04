<template>
<div>
  <city-header  :cities="cities"></city-header>
  <city-list :hotCities="hotCities"
    :cities="cities" :letter="letter" :position="position"></city-list>
  <city-letter :cities="cities" @select="selectLetter($event)"></city-letter>
  <city-flag :letter="letter"></city-flag>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityLetter from './components/Letter'
import CityFlag from './components/Flag'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityLetter,
    CityFlag
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: '',
      position: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('http://www.lane.mobi/static/mock/city.html').then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      res = res.data
      if (!res.error_code && res.data) {
        let data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    selectLetter (obj) {
      if (obj.type === 1) {
        this.position = obj.content
      } else {
        this.letter = obj.content
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus">
</style>
