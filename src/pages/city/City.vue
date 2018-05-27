<template>
  <div>
    <city-header></city-header>
    <city-search :citys="citys"></city-search>
    <city-list :citys="citys" :hotCitys="hotCitys" :letter="letter"></city-list>
    <alphabet :cities="citys" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      citys: {},
      hotCitys: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.citys = data.cities
        this.hotCitys = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
