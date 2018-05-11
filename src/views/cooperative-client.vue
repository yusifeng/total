<template>
  <div class="inc-precess-wrapper">
    <single-slide class="single-slide" :bannerMsg="bannerMsg"></single-slide>

    <certificate class="certificate"></certificate>

    <model-client class="model-client"></model-client>

    <div class="client-bar"> 
      <ul class="client-bar-wrapper container">

        <li v-for="(item, index) in clientList" :class="{active: currentIndex === index}" @click="selectItem(index)" :key="item">
          <span class="icon iconfont" :class="item.icon"></span>
          <span class="title" >{{item.title}}</span>
        </li>

        <span class="shadow1" ref="shadow"></span>
      </ul>
    </div>

      <!-- <component :is="currentComponent"></component> -->
    <div class="can-see">
      <div class="client-wrapper" ref="clientwrapper"> 
        <client-fin class="client-item"></client-fin>
        <client-sale class="client-item"></client-sale>
        <client-internet class="client-item"></client-internet>
      </div>
    </div>
    

  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import ModelClient from 'components/model-client/model-client'
import ClientFin from 'components/client-fin/client-fin'
import ClientSale from 'components/client-sale/client-sale'
import ClientInternet from 'components/client-internet/client-internet'
import Certificate from 'components/certificate/certificate'
import { cooperativeClient } from 'common/js/slide-position'

export default {
  data() {
    return {
      clientList: [
        {
          title: '金融业',
          icon: 'icon-jinrongfuwu'
        },
        {
          title: '零售业',
          icon: 'icon-retail'
        },
        {
          title: '互联网业',
          icon: 'icon-hulianwanginternet35'
        }
      ],
      bannerMsg: cooperativeClient,
      currentIndex: 0
    }
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index
      this.$refs.shadow.style.left = (index * 33.3) + '%'
      this.$refs.clientwrapper.style.marginLeft = `-${100 * index}vw`
    }
  },
  computed: {
    currentComponent() {
      return this.clientORM[this.currentIndex]
    }
  },
  created() {
    this.clientORM = {
      '0': 'ClientFin',
      '1': 'ClientSale',
      '2': 'ClientInternet',
    }
  },
  components: {
    SingleSlide,
    ClientFin,
    ClientSale,
    ClientInternet,
    Certificate,
    ModelClient
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .inc-precess-wrapper
    .client-bar
      height 50px
      background-color $color-advantage-four-active-color
      .client-bar-wrapper
        li
          float left
          width 33.3%
          text-align center
          line-height 50px
          cursor pointer
          .icon
            display inline-block
            font-size $cooperative-client-icon-size
            width 60px
            height 45px
            vertical-align middle
            line-height 45px
            cursor pointer
            color $ffffff
          .title
            display inline-block
            height 45px
            line-height 45px
            font-size $cooperative-client-title-size
            color $ffffff
            vertical-align middle
            letter-spacing 3px
            cursor pointer
        .shadow1
          position absolute
          top 0
          left 0
          width 33.3%
          height 100%
          background-color rgba(0, 0, 0,  .1)
          transition left 400ms linear
    .model-client
      margin-bottom 30px
    .can-see
      width 100vw
      height 410px
      overflow hidden
      .client-wrapper
        // position absolute
        height 410px
        width 300vw
        font-size 0
        margin-left -0vw
        transition margin-left 400ms linear
        .client-item
          display inline-block
</style>

