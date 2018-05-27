<template>
  <div class="suggest" style="display: none">
    <div class="suggest-header">
      <div class="suggest-title">搜索建议</div>
      <a class="suggest-close">关闭</a>
    </div>
    <div class="suggest-list">
      <div class="suggest-item">
        <div class="suggest-item-content">
          <img class="suggest-item-imgcon">搜索国产级摩托车
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .suggest
    position: relative
    z-index: 10
    width: 100%
    margin-top: .2rem
    box-shadow: 0 1px 3px 1px #c7ced4
    .suggest-header
      position: relative
      height: .5rem
      border-bottom: 1px solid #cacaca
      background: #f3f3f3
      color: #555
      font-size: .24rem
      line-height: .5rem
      .suggest-title
        margin-left: .3rem
      .suggest-close
        position: absolute
        top: 0
        right: 10px
        color: #555
  .suggest-item
    height: .8rem
    padding: 0 .3rem
    border-bottom: 1px solid #ccc
    background: #fff
    color: #666
    font-size: .28rem
    line-height: .8rem
    text-align: left
    .suggest-item-imgcon
      position: relative
      top: -.05rem
      margin-right: .2rem
      width: .3rem
      height: .3rem
</style>
