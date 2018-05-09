<template>
  <div class="color-templet-wrapper clearfix">
    <div class="one-color" v-for="(val,key, index) in colors" :style="{'background-color':val}">
      {{key}}
      <!-- <input type="text" :value="val"> -->
      <input type="text" :value="key">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        '$$color-footer-background': '#333',
        '$color-footer-dt-color' : '#d7d8d9',
        '$color-footer-dd-color' : '#9b9ea0',
        '$color-footer-line-color' : '#4b5054',
        '$color-bar-hover-background' : '#373d41',
        '$color-common-theme-hover-color' : '#c2ff35',
        '$color-common-theme-sub-color' : '#91C31D ',
        '$color-advantage-background' : '#CCE8FF'  ,
        '$color-advantage-four-active-color' : '#2EA7E0',
        '$color-desc-background' : '#F9FFE6',
        '$chart1' : '#3AAB66',
        '$chart2' : '#35B6AC',
        '$ffffff' : '#ffffff',
        '$000000' : '#000000',
        '$666666' : '#666666',

      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .color-templet-wrapper
    padding-top 100px
  .one-color
    position relative
    float left
    margin-top 50px
    width 200px
    height 200px
    border-radius 20px
    // border 1px solid #000
    font-size 22px
    text-align center
    line-height 30px
    border 1px solid #000
    color purple
    overflow hidden
    margin-right 20px
    input
      display block
      position absolute
      bottom 0
      left 0
      text-indent 10px
      font-size 12px
      width 100%
</style>
