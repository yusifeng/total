<template>
  <div class="slogen2">

    <div class="special">
      [<span class="text">专业</span>]
      <span class="dot">·</span>
      [<span class="text">敬业</span>]
      <span class="dot">·</span>
      [<span class="text">事业</span>]
    </div>

    <div class="logo"></div>

    <div class="slogen-en">FOR THE DREAM, ALL THE GLORY.</div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .slogen2 > div
      text-align center
  .slogen2
      margin-top 66px
      .special
        color $color-common-theme-sub-color
        font-size $slogen2-title-size
        margin-bottom 38px
        span
          display inline-block
          color $color-advantage-four-active-color
          transform translateY(3px)
        .text
          text-indent  12px
          letter-spacing 12px
        .dot
          display inline-block
          transform translateY(3px)
      .logo
        height 39px
        background url(logo.gif) no-repeat top center
        margin-bottom 22px
      .slogen-en
        color $color-common-theme-sub-color
        font-size $slogen2-subtitle-en-size

</style>


