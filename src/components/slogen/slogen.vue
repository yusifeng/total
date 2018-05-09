<template>
  <div class="slogen-wrapper">
    <h2 class="title">沃淘信科</h2>
    <h2 class="sub-title">专注短信专业为您</h2>
    <p><span>150<sup>+</sup></span>个伙伴全情付出</p>
    <p><span>100<sup>+</sup></span>亿年发送量</p>
    <p><span>10000<sup>+</sup></span>家客户的信任</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .slogen-wrapper
    display inline-block
    .title, .sub-title
      font-size $slogen-title-size
      color $ffffff
      line-height 45px
      letter-spacing 5px
    .sub-title
      margin-bottom 15px
    p
      font-size $slogen-subtitle-hanzi-size
      color $color-advantage-four-color
      font-weight 600
      margin-bottom 13px
      span
        display inline-block
        position relative
        font-size $slogen-subtitle-num-size
        color $color-common-theme-sub-color
        margin-right 20px
        sup
          position absolute
          top -6px
          right -15px
        
</style>

