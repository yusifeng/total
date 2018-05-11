<template>
  <!-- <input type="button" class="customer-btn" :width="width" :height="height" :value="value"> -->
  <input type="button" class="customer-btn" :style="style" :value="value" @click="click">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '默认按钮'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      style: {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  input
    display block
    background-color $ffffff
    font-size $button-size
    margin 0 auto
    color $color-common-theme-sub-color
    transition all .3s ease-in-out
    font-size 20px
    &:hover
      border 1px solid $color-common-theme-sub-color
      color $color-common-theme-sub-color

</style>
