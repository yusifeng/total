<template>
  <div class="index-view-wrapper">
    <!-- 轮播图 -->
    <slide></slide>

    <!-- 主题词 -->
    <slogen2></slogen2>

    <!-- 4个优势 -->
    <four-advantages></four-advantages>
  </div>
</template>

<script>
import Slide from 'base/slide/slide'
import Slogen2 from 'components/slogen2/slogen2'
import FourAdvantages from 'components/four-advantages/four-advantages'
export default {
  components: {
    Slide,
    Slogen2,
    FourAdvantages
  }
}
</script>
