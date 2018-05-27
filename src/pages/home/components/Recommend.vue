<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item in list" :key="item.id" :to="'/motor/' + item.id" >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
    <a href="" class="more">查看所有商品</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '热销推荐',
      recommendList: [
      ]
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background-color: #eee
  .item
    overflow: hidden
    display:flex
    height: 1.9rem
    .item-img
      width: 3rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex:1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0.1rem
        border-radius: .06rem
        color: #fff
  .more
    display: block
    padding: .2rem 0
    font-size: .28rem
    line-height: .4rem
    text-align: center
</style>
