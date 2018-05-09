<template>
  <div class="arrow-icon">
    <p><slot></slot></p>
  </div>
</template>


<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .arrow-icon
    position relative
    width 95px
    height 26px
    background-color $color-advantage-four-active-color
    text-indent 20px
    line-height 26px
    color $ffffff
    &:before
      position absolute
      left 0 
      top 0
      content: ''
      width 0
      height 0
      border-left 12px solid $color-advantage-background
      border-top 13px solid transparent
      border-bottom 13px solid transparent
    &:after
      position absolute
      right -12px 
      top 0
      content: ''
      width 0
      height 0
      border-left 12px solid $color-advantage-four-active-color
      border-top 13px solid transparent
      border-bottom 13px solid transparent
    p
      width 200px

</style>
