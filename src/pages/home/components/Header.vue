<template>
  <div class="header">
    <div class="header-left">
      <!--<div class="back-icon">me</div>-->
      <router-link class="back-icon" to="/user">
        <img src="../../../assets/img/user.png" alt="" style="width: 32px;height: 32px;">
      </router-link>
    </div>
    <div class="header-input">
      <router-link tag="a" to="/seach" style="color: #e4e7ea;display:block;height: 100%;">
        <img src="../../../assets/img/search.png" style="width: 16px;height: 16px;">
        <span>搜素你感兴趣的机车吧</span>
      </router-link>
    </div>
    <router-link to="/city">
      <div class="header-right">{{ this.$store.state.city }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background-color $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
        display: block
    .header-input
      flex: 1;
      height: .64rem
      line-height: .64rem
      background-color: #fff
      margin-top: .12rem
      margin-left: .10rem
      border-radius: .1rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
