<template>
  <div class="performance-result-wrapper">
    
    <single-slide class="single-slide" :bannerMsg="bannerMsg">
      <ul class="single-slide-content">
        <li><span class="tri-angle"></span>上海我淘信息科技有限公司,自2013年成立以来,得益于广大客户和合作伙伴的支持,一直保持的超高速的跨越式发展.</li>
        <li><span class="tri-angle"></span>我们非常庆幸于我们的正确方向,鉴定的目标, 努力的奋斗,赢得了伙伴的热爱和客户的信赖.</li>
      </ul>
    </single-slide>

    <div class="desc-background clearfix">
      <div class="container">
          <ul>
            <li class="item" v-for="(item, index) in dataList">
              <h3 class="title"><span class="title-num">{{item.title}}</span><span class="title-zh">{{item.titleCn}}</span></h3>
              <p class="desc" v-for="(descLine, index) in item.desc">{{descLine}}</p>
            </li>
          </ul>
      </div>
    </div>

    <echarts></echarts>
  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import Echarts from 'components/echarts/echarts'
import { performanceResults } from 'common/js/slide-position'
export default {
  components: {
    SingleSlide,
    Echarts
  },
  data() {
    return {
      dataList: [
        {
          title: '5S',
          desc: [
            '低于5秒的',
            '短信到达时效'
          ]
        },
        {
          title: '20',
          titleCn: '条',
          desc: [
            '超过20条国际',
            '短信通道同时运营'
          ]
        },
        {
          title: '10000',
          titleCn: '家',
          desc: [
            '超过10000',
            '家客户需求'
          ]
        },
        {
          title: '50',
          titleCn: '条',
          desc: [
            '超过50条国内',
            '短信通道同时运营'
          ]
        },
        {
          title: '99.99%',
          desc: [
            '99.99%的有',
            '效成功到达率'
          ]
        },
        {
          title: '100',
          titleCn: '亿',
          desc: [
            '超过100亿的',
            '年发送短信条数'
          ]
        }
      ],
      bannerMsg: performanceResults
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .performance-result-wrapper
    .single-slide
      .single-slide-content
        position absolute
        font-size $single-performance-results-size
        color $ffffff
        line-height 1.8
        top 38%
        left 47%
        width 360px
        letter-spacing 1px
        li
          position relative
          margin-bottom 16px
          .tri-angle
            position absolute
            width 0
            height 0
            top 7px
            left -10px
            border-left 4px solid $ffffff
            border-top 4px solid transparent
            border-bottom 4px solid transparent
    .desc-background
      width 100%
      background-color $color-desc-background
      .container
        font-size 0
        margin-top 70px
        padding 0 35px
        box-sizing border-box
        ul
          .item
            float left
            width 33.2%
            height 170px
            text-align center
            box-sizing border-box
            padding 0 100px
            .title 
              margin-bottom 10px
              width 200px
              span
                font-weight 700
                background linear-gradient(to right, #91C31D, #229CD5)
                display inline-block
                font-size $performance-result-title-size
                -webkit-background-clip text
                color transparent
                vertical-align middle
              .title-zh
                font-size $performance-result-title-zh-size
                vertical-align middle
            .desc
              margin 0 auto
              width 200px
              letter-spacing 1px
              font-size $performance-result-desc-size
              line-height 1.5
</style>
