<template>
<div class="echart-wrapper container">
  <div class="echart-item">
    <img src="./e1.png" alt="" class="e1">
    <p class="e-desc">客服技术团队占比</p>
  </div>
  <div class="echart-item">
    <div class="content bgco1">· 用前沿科学技术，为事业注入活力</div>
    <div class="content bgco2">· 解放重复、繁琐的人力</div>
    <div class="content bgco3">· 放大人之创造性，有效运作，高效工作</div>
  </div>
  <div class="echart-item">
    <img src="./e2.png" alt="">
    <p class="e-desc">销售增长额</p>
  </div>
  <div class="echart-item">
    <img src="./e3.png" alt="">
    <p class="e-desc">团队规模</p>
  </div>
</div>
</template>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .echart-wrapper
    height 700px
    margin-top 50px
    padding 0 100px
    box-sizing border-box
    .echart-item
      position relative 
      float left
      width 50%
      height 270px
      background-color $ffffff
      box-sizing border-box
      margin-bottom 50px
      .e1
        left 60px
      img
        position absolute
        top 0
        right 0
        bottom 0
        left 0px
        margin auto
      .e-desc
        position absolute
        bottom -20px
        left 53%
        transform translateX(-50%)
        background-color $color-advantage-background
        padding 8px 10px
        font-weight bold
        border-radius 6px
        color $color-advantage-four-active-color
      .content
        width 300px
        height 60px
        background-color red
        margin-bottom 10px
        line-height 60px
        text-indent 10px
        border-radius 5px
        color $ffffff
        margin-left 100px
        margin-top 20px
      .bgco1
        background-color $color-common-theme-sub-color
      .bgco2
        background-color $chart1
      .bgco3
        background-color $chart2
</style>

