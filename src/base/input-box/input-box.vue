<template>
  <input class="input-box" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
    }
  },
  methods: {
    updateValue(n) {
      this.$emit('input', n)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input-box
    display block
    width 100%
    height 30px
    text-indent 5px
</style>

