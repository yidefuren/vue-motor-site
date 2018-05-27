<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'banner-img',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      bottom: 0
      right: 0
      display: flex
      line-height: .6rem
      .banner-title
        flex: 1
        color: #fff
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        color: #fff
        font-size: .24rem
</style>
