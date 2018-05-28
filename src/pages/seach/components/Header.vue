<template>
  <div class="header">
    <a href="" class="left">
      <img src="../../../assets/img/gray-back.png" >
    </a>
    <h1 class="title">
      <input type="text" placeholder="搜搜更精彩" autocomplete="off" class="seach-input">
      <a class="seach-delete">x</a>
    </h1>
    <span class="right">
      <a href="" class="search-submit">搜索</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SeachHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    background-color: #fff
    width: 100%
    height: .88rem
    display: -webkit-box
    display: -moz-box
    display: -ms-flexbox
    display: box
    .left
      display: inline-block
      width: .4rem
      line-height: .88rem
      padding: 0 .2rem
      color: #fff
      font-size: .36rem
      text-align: left
    .title
      position: relative
      height: .6rem
      display: inline-block
      margin: .14rem 0
      line-height: .6rem
      border-radius: .3rem
      padding: 0 .6rem 0 .2rem
      background: #f2f2f2
      color: #212121
      .seach-input
        position: relative
        display: block
        width: 100%
        height: .4rem
        line-height: .4rem
        padding: .1rem 0
        background: #f2f2f2
        border: 0
        font-size: .28rem
        border-radius: .06rem
        text-align: center
      .seach-delete
        position: absolute
        top: 0
        right: 0
        width: .58rem
        height: .58rem
    .right
      display: inline-block
      height: .88rem
      line-height: .88rem
      padding: 0 .1rem
      .search-submit
        display: inline-block
        width: .74rem
        margin-right: .04rem
        color: #212121
        font-size: .28rem
</style>
