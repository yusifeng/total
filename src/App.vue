<template>
  <div id="app" name="app">
    <div class="bar-wrapper">
      <!-- <h1 class="logo"><router-link :to="{name: 'index'}"><img src="./common/imgs/logo.png" class="img"></router-link></h1> -->
      <h1 class="logo"><router-link :to="{name: 'index'}" class="logo-icon">沃淘科技</router-link></h1>
        <ul class="bar-nav-left">
          <li><router-link :to="{name: 'prod-server'}">产品与服务</router-link><span></span></li>
          <li><router-link :to="{name: 'performance-results'}">业绩成果</router-link><span></span></li>
          <li><router-link :to="{name: 'cooperative-client'}">公司资质</router-link><span></span></li>
          <li><router-link :to="{name: 'business-philosophy'}">经营理念</router-link><span></span></li>
          <li><router-link :to="{name: 'inc-precess'}">公司历程</router-link><span></span></li>
          <li><router-link :to="{name: 'cooperative-client', params: {needScroll: true}}">样板客户</router-link><span></span></li>
          <li><router-link :to="{name: 'future-prospects'}">未来展望</router-link><span></span></li>
          <li><router-link :to="{name: 'contact-us'}">联系我们</router-link><span></span></li>

        </ul>
        <!-- <ul class="bar-nav-right">
          <li><a href="/#/">新用户注册</a></li>
          <li><a href="/#/">登 录</a></li>
        </ul> -->
    </div>

    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->


    <!-- 版权相关 -->
    <common-footer></common-footer>

    <!-- 跳至顶部 -->
    <!-- <to-top class="to-top"></to-top> -->

    <!-- 提供建议 -->
    <provide-advice class="provide-advice"></provide-advice>
  </div>
</template>

<script>
  import ToTop from 'base/to-top/to-top'
  import CommonFooter from 'components/common-footer/common-footer'
  import ProvideAdvice from 'components/provide-advice/provide-advice'
  export default {
    head: {
      title: {
        inner: '沃淘信科 - 移动互联网短信平台',
        
      },
      link: [
        { rel: 'icon', href: require('../wotall.png'), sizes: '16x16', type: 'image/png' }
      ],
      meta: [
        { name: 'keywords',content: '短信群发,群发短信,短信接口,SDK短信接口,短信验证码,验证码短信,短信验证码平台,验证码短信平台,企业短信平台,接码平台,手机短信验证码,手机短信验证码平台,106短信平台,语音验证码,短信营销,流量加油包,流量营销' },
        { name: 'description', content: '沃淘信科是中国领先的移动互联网短信平台服务商：短信验证码平台拥有独立的短信验证码通道,三网合一端口号,致力于为客户提供短信群发,群发短信,短信接口,短信验证码,短信平台,语音验证码等服务沃淘信科短信平台提供国家增值电信业务的高新技术,拥有优质的短信通道,是中国领先的短信平台服务商,销售和服务网络覆盖全国多个城市.全国免费咨询电话400-6665168' },
        { name: 'author', content: '沃淘软件' },
      ]
    },
    components: {
      CommonFooter,
      ToTop,
      ProvideAdvice,
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  #app
    .bar-wrapper
      position absolute
      top 0
      left 0
      z-index 10
      width 100%
      height 60px
      background-color $color-bar-hover-background
      .logo
        float left
        height 60px
        margin-left 37px
        a
          display inline-block
          width 100%
          height 100%
          width 123px
          background-image url(./common/imgs/logo.png)
          background-repeat no-repeat
          text-indent -5000px
          background-position 0 10px
          background-size 123px 41px
          .img
            margin-top 10px
      .bar-nav-left
        height 100%
        float left
        margin-left 20px
        li
          position relative
          float left
          padding 0 13px
          span
            position absolute
            left 0
            bottom 0
            width 0%
            height 2px
            background-color $color-common-theme-hover-color
          &:hover > span
            transition width 150ms linear 
            width 100%
          a
            display inline-block
            height 60px
            line-height 60px
            color $ffffff
            font-size $bar-item-color
            &:hover
              color $color-common-theme-hover-color
      .bar-nav-right
        height 100%
        float right
        margin-right 37px
        li
          position relative
          float left
          padding 0 16px
          &:hover 
            transition all 150ms linear 
            background-color $color-common-theme-sub-color
          a
            display inline-block
            height 60px
            line-height 60px
            color $ffffff
            font-size $bar-item-color
    .provide-advice
      position fixed
      right 10px
      bottom 170px
      z-index 100
</style>

