<template>
  <div class="single-slide-wrapper">
      <img :src="bannerMsg.bgImg && require(`./${bannerMsg.bgImg}.png`)" width="100%" class="bg">
      <!-- <div class="container"> -->
        <!-- 对于不带字的图标, 可只是用一个img标签即可, 因为没有文字或者文字位置与img的大小没有任何关系 -->
        <img 
             v-show="bannerMsg.leftImgPosition.isShow && !bannerMsg.leftImgPosition.withWord"
             :style="bannerMsg.leftImgPosition.style"
             :src="bannerMsg.leftImgPosition.isShow && require(`./${bannerMsg.leftImgPosition.textImg}.png`)"
              class="left">
        <!-- 需要与文字配合的图标, 因为在不同的分辨率情况下, 图标的宽度和大小是不同的, 
        使用绝对定位需要知道在当前显示器下的img宽度, 只使用一个标签则可能出现的情况即为图片与文字之间的间隙时大时小,
        在分辨率及其极端的情况下, 可能出现文字和图片重叠, 所以外层使用一个div包裹, 文字与图片遵循文档流,其间隙自带生成,决定定位元素即为外层包裹元素 -->
        <div class="img-with-word right" 
             v-show="bannerMsg.rightImgPosition.isShow && bannerMsg.rightImgPosition.withWord" 
             :style="bannerMsg.rightImgPosition.style">
          <img :src="bannerMsg.rightImgPosition.isShow && require(`./${bannerMsg.rightImgPosition.textImg}.png`)"
             width="100%"
              >
          <slot name="word" class="word"></slot>
        </div>
        <!-- <img 
             v-show="bannerMsg.rightImgPosition.isShow"
             :src="bannerMsg.rightImgPosition.isShow && require(`./${bannerMsg.rightImgPosition.textImg}.png`)"
             :style="bannerMsg.rightImgPosition.style"
             class="right"> -->
        <!-- <img 
             v-show="bannerMsg.midImgPosition.isShow"
             :src="bannerMsg.midImgPosition.isShow && require(`./${bannerMsg.midImgPosition.textImg}.png`)"
             :style="bannerMsg.midImgPosition.style"
             class="mid">
             {{bannerMsg.midImgPosition}} -->
        <slot name="default"></slot>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    bannerMsg: {
      type: Object,
      default: {}
    }
  }
}
</script>


<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .single-slide-wrapper
    font-size 0
    position relative
    width 100%
    // .container
    //   position absolute
    //   top 0
    //   left 50%
    //   margin-left -600px
    //   background-color red
    //   z-index 100
    .img-with-word
      height 100%
      position relative
      img
        margin-bottom 10px
      .word
        position absolute
        top 0
        left 0
    .left
      position absolute
    .right.img-with-word
      position absolute
</style>
