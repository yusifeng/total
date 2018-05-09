<template>
  <div class="product-server-wrapper">
    <single-slide class="single-slide" :bannerMsg="bannerMsg">
    </single-slide>
    <five-server></five-server>
  </div>
</template>

<script>
import FiveServer from 'components/five-server/five-server'
import SingleSlide from 'base/single-slide/single-slide'
import { productServer } from 'common/js/slide-position'
export default {
  components: {
    FiveServer,
    SingleSlide
  },
  data() {
    return {
      bannerMsg: productServer
    }
  }
}
</script>



