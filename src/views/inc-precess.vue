<template>
  <div class="inc-precess-wrapper">
    <single-slide class="single-slide" :bannerMsg="bannerMsg"></single-slide>

    <series-row-item :list="fiveDescriptionList" @click="selectItem" :color="1"></series-row-item>

    <div class="desc-background" v-for="(item, index) in fiveDescriptionList" :class="{active: index === currentIndex}">
      <div class="container">
        <h3 class="title">{{item.title}}</h3>
        <span class="line">/</span>
        <span class="title-en">{{item.titleEn}}</span>
        <p class="content">{{item.content}}</p>
        <div class="down-icon"></div>
      </div>
    </div>

    <team-structure></team-structure>
  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import SeriesRowItem from 'base/series-row-item/series-row-item'
import TeamStructure from 'components/team-structure/team-structure'
import { incPrecess } from 'common/js/slide-position'

export default {
  data() {
    return {
      fiveDescriptionList: [
        {
          icon: 'icon-shijian',
          title: '沃淘概况',
          titleEn: 'company established',
          content: '上海沃淘信息科技有限公司，成立于2013年，注册资金1亿元。沃淘信科Wotall立足于上海、辐射全国，总员工数超过150人，年销售额逾亿元。在全国设有华东、华南、华西、华北、华中五大服务中心。“用品质赢得信赖、用真心赢得信任”，沃淘信科Wotall正在为超过10000家的客户提供优质产品、良好服务。'

        },
        {
          icon: 'icon-tuozhan',
          title: '业务扩展',
          titleEn: 'business development ',
          content: '上海沃淘信息科技有限公司，自成立以来，一直注重于“行业资源”的深度扩展，现有国内1069通道50条以上、国际通道10条以上，月均发送量超过10亿条，可全面向全球超过200个国家和地区的手机终端提供短信服务'

        },    
        {
          icon: 'icon-web-icon-',
          title: '企业实力',
          titleEn: 'major customer partner',
          content: '除生产类短信外，上海沃淘信息科技有限公司的数据营销通道一直是行业翘楚，是全国数十家短信公司的通道供应商，其中包括行业内知名度较高的上市公司。'
        },
        {
          icon: 'icon-kehu',
          title: '合作客户',
          titleEn: 'the strength of enterprises',
          content: '上海沃淘信息科技有限公司主要侧重于金融行业和互联行业的营销短信通道支持。直接和间接服务的客户包括但不限于万达金融、百度金融、小米金融、借贷宝、支付宝、淘宝、省呗、借呗、还呗、借了么、借钱花、2345金融等。在互联网金融最火热的2016年和2017年，沃淘信科Wotall直接服务的互联网金融公司超过500家。'

        },
        {
          icon: 'icon-msnui-plan-time',
          title: '五年计划',
          titleEn: 'five-year plan',
          content: '上海沃淘信息科技有限公司，在第一个五年计划的尾页，将大力夯实惟一主业，专注于“精耕细作”，努力在一公尺宽的客户需求边界里，为客户挖掘一公里深的市场价值。上海沃淘信息科技有限公司一直信奉“帮客户赚钱才是为客户省钱”的伙伴价值，与客户共同相伴成长。'
        },
        {
          icon: 'icon-jiangzhang',
          title: '核心优势',
          titleEn: 'core advantage',
          content: '上海沃淘信息科技有限公司一直以“通道资源”优势见长，特别是数据营销通道，一直居于行业前列，还与全球知名的电信服务商建有联合合作关系，可为客户提供国内、国际短信整体解决方案。'
        },
      ],
      currentIndex: 0,
      bannerMsg: incPrecess
    }
  },
  methods: {
    selectItem(item, index) {
      this.currentIndex = index
    }
  },
  components: {
    SingleSlide,
    SeriesRowItem,
    TeamStructure
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .inc-precess-wrapper
    .five-desc
      height 194px
      box-sizing border-box    
      padding 40px 60px 0 60px  
    .desc-background
      width 100%
      height 195px
      background-color $color-desc-background
      display none
      .container
        box-sizing border-box
        padding-top 30px
        padding-left 115px
        padding-right 115px
        color $color-common-theme-sub-color
        .title
          font-size $mode-title-size
          margin-bottom 30px
        .title-en
          position absolute
          left 240px
          top 45px
          font-size $mode-subtitle-en-size
          color $color-common-theme-sub-color
        .line
          position absolute
          left 230px
          top 24px
          font-size $mode-skewline-size
          height 32px
        .down-icon
          position absolute
          left 118px
          top 70px
          width 0px
          height 0px
          border-top 10px solid $color-common-theme-sub-color
          border-left 10px solid transparent
          border-right 10px solid transparent
        .content
          line-height 1.8
          color $000000
    .active
      display block
</style>

