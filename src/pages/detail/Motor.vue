<template>
  <div>
    <banner :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
    ></banner>
    <detail-header></detail-header>
    <info :modeloVerview="modeloVerview" :otherConf="otherConf" :engineConf="engineConf" :dongli="dongli" :carBody="carBody" :wheelBrake="wheelBrake"></info>
  </div>
</template>
<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import Info from './components/Info'
import axios from 'axios'
export default {
  name: 'motor',
  components: {
    Banner,
    DetailHeader,
    Info
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      modeloVerview: {},
      engineConf: {},
      dongli: {},
      carBody: {},
      wheelBrake: {},
      otherConf: {}
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/motor.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.modeloVerview = data.motorConf.modeloVerview
        this.engineConf = data.motorConf.engineConf
        this.dongli = data.motorConf.dongli
        this.carBody = data.motorConf.carBody
        this.wheelBrake = data.motorConf.wheelBrake
        this.otherConf = data.motorConf.otherConf
        this.componentBrand = data.motorConf.componentBrand
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
