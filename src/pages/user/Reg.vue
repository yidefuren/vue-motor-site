<template>
  <div class="wrap">
    <div class="header">
      <h1 class="title">注册</h1>
      <router-link to="/" tag="a" class="back">
        <img src="../../assets/img/back.png" style="width:.4rem;height:.4rem">
      </router-link>
    </div>
    <div class="form-style">
      <form action="">
        <div class="form-control">
          <label class="control-label">手机号</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="请输入手机号" autocomplete="off">
          </div>
        </div>
        <div class="form-control">
          <label class="control-label">图形码</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="请输入图形码" >
            <img src="" alt="">
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
    <div class="operate">
      <a href="" class="btn">注册</a>
    </div>
  </div>
</template>
<script>

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
</style>
