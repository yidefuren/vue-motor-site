<template>
  <div class="suggest">
    <div class="suggest-list">
      <div class="history-head">
        <span class="history-title">搜索历史</span>
        <span class="history-deloption">
          <span class="mp-history-deltext">清除</span>
        </span>
      </div>
      <div class="history-conouter">
        <div class="history-coninner">
          <div class="history-item">春风150</div>
        </div>
      </div>
    </div>
    <div class="hotlist">
      <div class="hotsearch-head">
        <span class="hotsearch-title">热门搜索</span>
        <span class="hotsearch-refreshoption">
        <span class="hotsearch-refreshicon"></span>
          <span class="hotsearch-refreshtext">换一批</span>
        </span>
      </div>
      <div class="hotsearch-con">
        <div class="hotsearch-group">
          <div class="hotsearch-iteminner">
            <a href="" class="hotsearch-item">春风150</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .suggest
    position: absolute
    z-index: 10
    width: 100%
    margin-top: .2rem
    box-shadow: 0 1px 3px 1px #c7ced4
    .history-conouter
      height: 1.24rem
      width: 100%
      overflow-y: hidden
      background-color: #fff
      border-top: 1px solid #dce5e7
      border-bottom: 1px solid #dce5e7
      .history-coninner
        width: 162px;
        margin-top: .3rem;
        .history-item
          max-width: 2.89rem
          height: .6rem
          font-size: .26rem
          color: #333
          background-color: #fff
          line-height: .6rem
          padding: 0 .15rem
          text-align: center
          float: left
          margin-left: .2rem
          border: 1px solid #c9cccd
          border-radius: 3px
          white-space: nowrap
          text-overflow: ellipsis
          overflow: hidden
  .history-head
      height: .64rem
      line-height: .64rem
      padding: 0 .2rem
      background-color: #f0f5f6
  .history-title
    font-size: .26rem
    color: #888
  .history-deloption
    float: right
    font-size: .26rem
    color: #00afc7
  .history-title
    font-size: .26rem
    color: #888
  .hotsearch-head
    height: .64rem
    line-height: .64rem
    padding: 0 .2rem
    background-color: #f0f5f6
    .hotsearch-title
      font-size: .26rem
      color: #888
    .hotsearch-refreshoption
      float: right
      font-size: .26rem
      color: #00afc7
  .hotsearch-group
    position: relative
    padding-left: .74rem
    background-color: #fff
    border-top: 1px solid #dce5e7
    .hotsearch-iteminner
      zoom: 1
      overflow: hidden
      position: relative
      left: 0
      top: 0
      .hotsearch-item
        display: block
        float: left
        height: .36rem
        max-width: 2.89rem
        line-height: .36rem
        text-align: center
        display: block
        padding-left: .3rem
        padding-right: .3rem
        border-right: 1px dashed #c9cccd
        color: #333
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        margin-top: .25rem
        margin-bottom: .25rem
</style>
