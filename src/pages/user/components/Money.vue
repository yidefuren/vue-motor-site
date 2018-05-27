<template>
    <div class="item-wrap">
      <a href="" class="item">
        <span>0.00</span>
        <span class="my-tip">账户余额</span>
      </a>
      <a href="" class="item">
        <span>0</span>
        <span class="my-tip">优惠券</span>
      </a>
      <a href="" class="item">
        <span>0</span>
        <span class="my-tip">银行卡</span>
      </a>
    </div>
</template>

<style lang="stylus" scoped>
  .item-wrap
    padding: 0 .12rem;
    display: flex
    margin-top: .1rem
    background-color: #fff
    .item
      width: 100%;
      min-width: .7rem;
      color: #333;
      text-align: center;
      overflow: visible;
     span
      display: block
      padding: .1rem 0
      font-size: .4rem
     .my-tip
      margin-top: .05rem
      color: #888
      font-size: .12rem
</style>
