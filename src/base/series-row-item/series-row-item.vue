<template>
  <div class="series-row-item-wrapper">
    <div class="five-desc container">
      <div class="item" v-for="(item,index) in list" :style="{width: width}">
        <div class="click-area" @click="selectAdvItem(item, index)" :class="iconClass(index)">
          <div class="icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="title" 
                ref="title" 
                v-html="item.title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    color: {
      type: Number,
      default: 0
    }
  },
  created() {
  },
  computed: {
    width() {
      return `${100 / this.list.length}%`
    }
  },
  data() {
    return {
      style: {
        width: this.width
      },
      currentIndex: 0
    }
  },
  methods: {
    selectAdvItem(item, index) {
      this.currentIndex = index
      this.$emit('click', item, index)
    },
    iconClass(index) {
      if (this.color === 0) {
        if (this.currentIndex === index) {
          return 'bgcolor0 active0'
        } else {
          return 'bgcolor0'
        }
      } else if (this.color === 1) {
        if (this.currentIndex === index) {
          return 'bgcolor1 active1'
        } else {
          return 'bgcolor1'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .series-row-item-wrapper
    width 100%
    .five-desc
      box-sizing border-box    
      padding 35px 100px 0 100px  
      .item
        display inline-block
        font-size $series-title-size
        text-align center
        color $color-advantage-four-color
        margin-top 20px
        margin-bottom 20px
        .click-area
          margin 0 auto
          width 120px
          height 100px  
          cursor pointer
          transition color 300ms
          color $666666
          .icon
            width 40px
            height 40px
            margin 0 auto
            margin-bottom 10px
            i 
              display inline-block
              font-size $series-icon-size
              width 100%
              height 100%
              line-height $series-icon-size
          .title
            width 200px
            margin-left -40px
        //base-color
        .bgcolor0:hover
          color: $color-advantage-four-active-color !important
        .bgcolor1:hover
          color: $color-common-theme-sub-color !important
        //actived-color
        .active0
          color $color-advantage-four-active-color
        .active1
          color $color-common-theme-sub-color
</style>
