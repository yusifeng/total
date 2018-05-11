/<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide1">
        <img src="./slide1.png" width="100%">
        <div class="container slide-content">
          <slogen class="slogen animated slideInUp"></slogen>
        </div>
      </div>
      <div class="swiper-slide slide2">
        <img src="./slide2.png" width="100%">
        <div class="container slide-content">          
          <img src="./slide2-content.png" class="slogen animated slideInUp slogen-img" style="top:40%">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Slogen from 'components/slogen/slogen'
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        isShow: 'none'
      }
    },
    mounted() {
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        effect: 'fade',
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable :true,
        },
        
      })
    },
    components: {
      Slogen,
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-container
    width 100%
    .swiper-wrapper
      width 100%
      font-size 0
      .swiper-slide
        position relative
        .slogen
          display none
          position absolute
          top 32%
          left 14%
        .animated 
          -webkit-animation-duration: .1s;
          animation-duration .7s
          -webkit-animation-fill-mode both
          animation-fill-mode both
        .slideInUp
          -webkit-animation-name re-banner-slide-20
          animation-name re-banner-slide-20
        .slide-content
          position absolute
          top 0
          left 50%
          margin-left -600px
          height 100%
        .slogen-img
          width 17vw
      .swiper-slide-active > .container > .slogen
        display inline-block

@keyframes slideInUppp {
  from {
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes re-banner-slide-20 {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0,20px,0);
		transform: translate3d(0,20px,0)
	}

	to {
		opacity: 1;
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}
</style>

