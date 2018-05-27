<template>
  <div class="wrap">
    <div class="header">
      <h1 class="title">登陆</h1>
      <router-link to="/" tag="a" class="back">
        <img src="../../assets/img/back.png" style="width:.4rem;height:.4rem">
      </router-link>
      <router-link to="/reg" class="right">注册</router-link>
    </div>
    <div class="tab_wrap">
      <div class="tab">
        <div class="tab-item cur" @click="toggle()">短信验证码登录</div>
        <div class="tab-item" @click="toggle()">账号登录</div>
      </div>
    </div>
    <div class="form-style" v-show="isShow">
      <form action="">
        <div class="form-control">
          <label class="control-label">手机号</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="请输入手机号" autocomplete="off">
          </div>
        </div>
        <div class="form-control">
          <label class="control-label">验证码</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="请输入验证码" >
            <a>获取验证码</a>
          </div>
        </div>
      </form>
    </div>
    <div class="form-style" v-show="!isShow">
      <form action="">
        <div class="form-control">
          <label class="control-label">账号</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="手机号/邮箱/用户名" autocomplete="off">
          </div>
        </div>
        <div class="form-control">
          <label class="control-label">密码</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="请输入密码" >
          </div>
        </div>
      </form>
    </div>
    <div class="operate">
      <a href="" class="btn">登录</a>
    </div>
    <router-link tag="a" to="/find" style="float: right;">找回密码</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .wrap
    height: 100%
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
      .right
        position: absolute
        top: 0
        right: 0
        width: .6rem
        height: .88rem
        cursor: pointer
        padding-right: .1rem
        color: #fff
    .form-style
      border-top: .01rem solid #ccc
      border-bottom: .01rem solid #ccc
      margin-top: .1rem
      padding-left: .1rem
      background: #fff
      font-size: .32rem
      .form-control
        display: flex
        flex-direction: row
        width: 100%
        border-bottom: .01rem solid #ddd
        line-height: .45rem
        padding: .2rem 0
        .control-label
          display: block
          width: 1.8rem
        .control-container
          display: flex
          flex: 1
          order: 0;
          vertical-align: middle
          width: 100%
          .control-text
            flex: 1
            display: block
            height: .6rem
            border: 0
            color: #000
            line-height: 1.5
    .operate
      padding: 0.1rem
      margin-top: 15px
      .btn
        color: #fff
        text-align: center
        line-height: 1rem
        display: block
        background: $bgColor
        border-radius: .1rem
    .tab_wrap
      height: .9rem
      background-color: $bgColor
      padding: .1rem .2rem 0
      color: #fff
      .tab
        border: .02rem solid #fff
        border-radius: .06rem
        .tab-item
          line-height: .6rem
          width: 1%
          display: table-cell
          text-align: center
        .cur
          background-color: #fff
          color: #25a4bb
</style>
