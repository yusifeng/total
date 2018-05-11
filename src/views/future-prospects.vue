<template>
  <div class="inc-precess-wrapper">
    
    <single-slide class="single-slide" :bannerMsg="bannerMsg">
      <div class="single-slide-content" slot="word">

        <span class="quo-left">“</span>
        <p class="content">好风凭借力,送我上青云。借力中国经济高速发展趋势,我们坚定的以"价值,共生,共荣"为使命,做值得客户信赖的电信业务服务商。</p>
        <span class="quo-right">”</span>

      </div>
    </single-slide>

    <series-row-item :list="fiveDescriptionList" @click="selectItem" :color="0"></series-row-item>

    <div class="desc-background" v-for="(item, index) in fiveDescriptionList" :class="{active: index === currentIndex}" :key="item">  
      <div class="container">
        
        <h3 class="title">{{item.title}}</h3>
        <p class="content">{{item.content}}</p>
        <div class="icon-wrapper">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import SeriesRowItem from 'base/series-row-item/series-row-item'
import { furtureProspects } from 'common/js/slide-position'

export default {
  data() {
    return {
      fiveDescriptionList: [
        {
          icon: 'icon-mubiao',
          title: '沃淘未来目标',
          mainTitle: '做中国优质的A++级电信增值业务运营商和服务商',
          content: '沃淘信科Wotall是一间有使命的公司。我们的目标是做好中国数千家电信增值运营商中级具实力和竞争力的优越者。不求最大，但求最好。'
        },
        {
          icon: 'icon-tubiao207',
          title: '数据就是价值',
          mainTitle: 'business development ',
          content: '科学技术是第一生产力，沃淘信科Wotall一直积极拥抱新技术，糅合大数据和云计算的价值基因，在纷繁复杂的数据中，构建合理的数据结构，利用实时标签和科学的数据清洗，抽取价值标签，呈现"数据就是价值"。利用"电信网"+"互联网"+"数据网"+"云计算"的数据整合能力，产生靶向效能，实现精准投放。'

        },    
        {
          icon: 'icon-dingwei',
          title: '沃淘在身边',
          mainTitle: '华东、华南、华西、华北、华中的本地化销售服务团队，沃淘在身边',
          content: '沃淘信科Wotall一直秉承"技术落地化、服务本地化"的商业实现策略，预计在截止2021年末，基本实现全国省级城市和部分地级城市的本地化销售、服务团队。"快速响应"、"在您身边"、"随叫随到"，是沃淘信科Wotall的销售和服务使命。'
        },
        {
          icon: 'icon-guanlikehu',
          title: '顾问式运营团队',
          mainTitle: '顾问式运营团队参与市场拓展计划',
          content: '沃淘信科Wotall认为，作为一个电信增值运营商，我们能做的不只是发送短信。我们将整合"运营经验"和"数据分析"，为客户提供"策略+达成+分析+建议+报告"的一体化解决策略，视客户的需求为自己工作的最高目标，做客户的外延式"顾问式运营团队"，赢取客户信赖。' 
        }
      ],
      bannerMsg: furtureProspects,
      currentIndex: 0
    }
  },
  methods: {
    selectItem(item, index) {
      this.currentIndex = index
    }
  },
  components: {
    SingleSlide,
    SeriesRowItem
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .inc-precess-wrapper
    .single-slide-content
      position absolute
      width 17vw
      height 95px
      left 10px
      .quo-left
        position absolute
        left 0
        top 0
        color $color-common-theme-sub-color
        font-size $single-furture-prospects-quo-size
      .quo-right
        position absolute
        bottom 0
        right 0
        margin-left 280px
        color $color-common-theme-sub-color
        font-size $single-furture-prospects-quo-size
      .content
        position absolute
        left 30px
        top 5px
        font-size $single-furture-prospects-size
        width 14vw
        line-height 1.8
        color $color-advantage-four-active-color
    .desc-background
      width 100%
      height 195px
      background-color $color-advantage-background
      display none
      .container
        position relative
        box-sizing border-box
        padding-top 30px
        padding-left 219px
        padding-right 150px
        .title
          font-size $mode-title-size
          margin-bottom 15px
          padding-left 10px
          padding-right 20px
          border-left 2px solid $000000
          color $color-advantage-four-active-color
        .content
          padding-left 10px
          padding-right 20px
          line-height 1.8
          color $000000
        .icon-wrapper
          position absolute
          top 21px
          left 167px
          width 46px
          height 46px
          .iconfont
            display inline-block
            color $color-advantage-four-active-color
            height 100%
            width 100%
            font-size $mode-icon-size
            text-align center
            line-height 46px
    .active
      display block
</style>

