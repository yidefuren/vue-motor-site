<template>
  <div class="wrap">
    <div class="header">
      <h1 class="title">找回密码</h1>
      <router-link to="/" tag="a" class="back">
        <img src="../../assets/img/back.png" style="width:.4rem;height:.4rem">
      </router-link>
    </div>
    <div class="form-style">
      <form action="">
        <div class="form-control">
          <label class="control-label">账号</label>
          <div class="control-container">
            <input type="text" class="control-text" placeholder="手机号/邮箱/用户名" autocomplete="off">
          </div>
        </div>
      </form>
    </div>
    <div class="operate">
      <a href="" class="btn">找回密码</a>
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
