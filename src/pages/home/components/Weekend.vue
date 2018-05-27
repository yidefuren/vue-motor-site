<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <router-link  :to="'/detail/' + item.id">
          <div class="item-img-wrap">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '文章推荐',
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
    line-height: .8rem
    text-indent: .2rem
    background-color: #eee
  .item-img-wrap
    overflow:hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
