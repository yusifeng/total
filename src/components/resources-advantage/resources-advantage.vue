<template>
  <div class="wrapper">
    <div class="container">

      <div class="left">
        <h3 class="title">50条同时运行的国内短信通道</h3>
        <ul>
          <li>沃淘与中国移动、中国联通、中国电信的很多省级公司具有紧密的商务合作伙伴关系。</li>
          <li>迄今为止，沃淘同时运行的号码超过<span>50</span>个， 落地全国诸多省级运营商。</li>
          <li>搭建了可承载年发量过<span>1000</span>亿，单日最大发送量><span>5</span>亿条的SMS网络。</li>
          <li>并可针对客户需求，定向区域落地的精准投放，</li>
          <li>沃淘通道均为三网合一，任一平台至少提供双通道备份。</li>
          <li>沃淘通道完美支持虚拟运营商号段。</li>
        </ul>
      </div>

      <div class="right">
        <h3 class="title">10余条同时运行的国际短信通道</h3>
        <ul>
          <li>沃淘现运营的国际短信通道超过<span>10</span>条以上。</li>
          <li>覆盖全球<span>200</span>个以上国家和地区。</li>
          <li>与全球超过<span>1000</span>个运营商建立有商业合作关系， 支持全球语言。</li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .wrapper
    width 100%
    background-color $color-advantage-background
    .container
      font-size 0
      box-sizing border-box
      padding 40px 0 40px 0
      .left
        display inline-block
        padding 0px 55px 0 79px
        border-right 1px solid $ffffff
        box-sizing border-box
        padding
        .title
          font-size $advantage-title-size
          font-weight 700
          margin-bottom 15px
          color $color-advantage-four-active-color
        ul
          li
            font-size $advantage-title-content
            line-height 25px
            span
              color $color-advantage-four-active-color
              font-weight 700
              font-size $advantage-emphasize-size
      .right
        display inline-block
        vertical-align top
        padding-left 55px
        box-sizing border-box
        .title
          font-size $advantage-title-size
          font-weight 700
          margin-bottom 10px
          color $color-advantage-four-active-color
        ul
          li
            font-size $advantage-title-content
            line-height 23px
            span
              color $color-advantage-four-active-color
              font-weight 700
              font-size $advantage-emphasize-size
</style>


