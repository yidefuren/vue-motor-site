<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiperLength">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <router-link tag="a" :to="'/detail/' + item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'home-swiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/85/09000ddc9a6df502.png_640x200_4756b7c1.png'
        }
      ]
    }
  },
  props: {
    list: Array
  },
  computed: {
    showSwiperLength () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background-color: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background-color: #eee
    .swiper-img
      width: 100%
</style>
