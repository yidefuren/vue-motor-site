<template>
  <div class="header">
    <router-link tag="a" to="/" class="header-back">
      <img src="../../../assets/img/back.png" alt="" style="margin-top: 5px;">
    </router-link>
    <div class="header-user">
      <img src="../../../assets/img/user.png" alt="">
      <div class="user-info"><router-link  tag="a" to="/login" class="title">登录</router-link> / <router-link to="/reg" class="title" tag="a">注册</router-link></div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    height: 3.2rem
    background-color: $bgColor
    .header-back
      height: 32px
      width: 32px
      display: block
    .header-user
      text-align: center
      .user-info
        padding: .2rem .2rem
        font-size: .28rem
        color: #fff
        letter-spacing: .02rem
        .title
          font-size: .28rem
          color: #fff
</style>
