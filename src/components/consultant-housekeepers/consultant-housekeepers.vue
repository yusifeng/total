<template>
  <div class="consultant-housekeepers-wrapper">
    <div class="container">

      <div class="left">
        <div class="img"></div>
        <h3 class="title">定制开发</h3>
        <p>沃淘面向客户提供两种个性化定制开发：</p>
        <ul>
          <li>针对短信平台的个性化定制开发</li>
          <li>针对发送报告的报表定制开发</li>
        </ul>
      </div>

      <div class="mid">
        <div class="img"></div>
        <h3 class="title">数据报表DB</h3>
        <p>沃淘相应客户发送需求，提供多维度，全方位的数据报告。打破黑匣子，让发送全程清晰可见。</p>
      </div>

      <div class="right">
        <div class="img"></div>
        <h3 class="title">项目方案AI</h3>
        <p>针对基于SMS的短信推广方案，沃淘可提供数据精准靶向投放、数据评估报告‘潜在投放预估等各项策略，实现想的比客户周全，想的比客户及时。</p>
      </div>

    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .consultant-housekeepers-wrapper
    width 100%
    background-color $color-advantage-background
    .container
      font-size 0
      padding 36px 30px 25px 30px
      box-sizing border-box
      .left
        display inline-block
        width 33.3%
        padding 0 60px
        vertical-align top
        box-sizing border-box
        .img
          width 100%
          height 90px
          background url('./0-01.jpg') no-repeat
        .title
          font-size $advantage-title-size
          font-weight 700
          color $color-advantage-four-active-color
          margin-bottom 10px
        p
          font-size $advantage-title-content
          line-height 22px
        ul
          li
            font-size $advantage-title-content
            line-height 22px
      .mid
        display inline-block
        width 33.3%
        vertical-align top
        padding 0 60px
        box-sizing border-box
        border-right 1px solid $ffffff
        border-left 1px solid $ffffff
        .img
          width 100%
          height 90px 
          background url('./0-02.jpg') no-repeat
        .title
          font-size $advantage-title-size
          font-weight 700
          color $color-advantage-four-active-color
          margin-bottom 10px
        p
          font-size $advantage-title-content
          line-height 22px
      .right
        display inline-block
        width 33.3%
        padding 0 60px
        vertical-align top
        box-sizing border-box
        .img
          width 100%
          height 90px
          background url('./0-03.jpg') no-repeat
        .title
          font-size $advantage-title-size
          font-weight 700
          color $color-advantage-four-active-color
          margin-bottom 10px
        p
          font-size $advantage-title-content
          line-height 22px

        
</style>

