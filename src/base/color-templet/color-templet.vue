<template>
  <div class="color-templet-wrapper clearfix">
    <Map></Map>
  </div>
</template>

<script>
import Map from 'components/map/map'
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
  },
  components: {
    Map
  },
  mounted() {
    // console.log(Map)
  }
}
</script>

<style lang="stylus" scoped>

</style>
