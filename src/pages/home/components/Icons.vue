<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-imgbox" >
            <img class="icon-img" :src="item.imgUrl" alt="item.iconDesc">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {
        atuoPlay: false
      },
      iconList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '02',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '自然风光'
        },
        {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '名胜古迹'
        },
        {
          id: '04',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流'
        },
        {
          id: '05',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '06',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '自然风光'
        },
        {
          id: '07',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '名胜古迹'
        },
        {
          id: '08',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流'
        },
        {
          id: '09',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '你好'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position:relative
      float: left
      width: 25%
      height: 0
      padding-bottom:25%
      .icon-imgbox
        position: absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        bottom:0
        left:0
        right:0
        height: .44rem
        line-height:.44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
