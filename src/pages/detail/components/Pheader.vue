<template>
  <div class="header">
    <h1 class="title">咨询</h1>
    <router-link to="/" tag="a" class="back">
      <img src="../../../assets/img/back.png" style="width:.4rem;height:.4rem">
    </router-link>
  </div>
</template>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    position: relative
    height: .88rem
    line-height: .88rem
    background-color: $bgColor
    .title
      text-align: center
      color: #fff
      font-size: .4rem
    .back
      position: absolute
      top: 0
      width: .6rem
      height: .88rem
      cursor: pointer
      color: #75ffff
      padding-left: .1rem
</style>
