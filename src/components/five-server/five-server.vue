<template>
  <div class="five-server-wrapper">
    <series-row-item :list="copyList" @click="selectItem" ></series-row-item>
    <div class="shadow-box"></div>
    <transition-group name="david">
      <div class="desc-background" v-for="(item, index) in fiveDescriptionList" :class="{active: index === currentIndex}" :key="item.title">
        <div class="container">
          <h3 class="title">{{item.title}}</h3>
          <span class="title-en">{{item.titleEn}}</span>
          <span class="line">/</span>
          <div class="sub-title">{{item.subTitle}}</div>
          <p class="content">{{item.content}}</p>
          <div class="img-wrapper">
            <img :src="item.imgSrc">
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import SeriesRowItem from 'base/series-row-item/series-row-item'
export default {
  data() {
    return {
      fiveDescriptionList: [
        {
          icon: 'icon-pingtaiguanli',
          title: '短信平台',
          subTitle: '',
          titleEn: 'SMS platform',
          imgSrc: require('./server1.png'),
          content: '上海沃淘信息科技有限公司，成立于2013年，注册资金1亿元。沃淘信科Wotall立足于上海、辐射全国，总员工数超过150人，年销售额逾亿元。在全国设有华东、华南、华西、华北、华中五大服务中心。“用品质赢得信赖、用真心赢得信任”，沃淘信科Wotall正在为超过10000家的客户提供优质产品、良好服务。'
        },
        {
          icon: 'icon-youjian',
          title: '短信群发',
          subTitle: '',
          titleEn: 'SMS bulk',
          imgSrc: require('./server3.png'),
          content: '除生产类短信外，上海沃淘信息科技有限公司的数据营销通道一直是行业翘楚，是全国数十家短信公司的通道供应商，其中包括行业内知名度较高的上市公司。'
        },
        {
          icon: 'icon-tousujianyi',
          title: '投放建议',
          subTitle: '',
          titleEn: 'On the advice',
          imgSrc: require('./server2.png'),
          content: '上海沃淘信息科技有限公司，自成立以来，一直注重于“行业资源”的深度扩展，现有国内1069通道50条以上、国际通道10条以上，月均发送量超过10亿条，可全面向全球超过200个国家和地区的手机终端提供短信服务'
        },    
        {
          icon: 'icon-shouji',
          title: '专号服务',
          subTitle: '【号码+通道】',
          titleEn: 'Number service',
          imgSrc: require('./server4.png'),
          content: '上海沃淘信息科技有限公司主要侧重于金融行业和互联行业的营销短信通道支持。直接和间接服务的客户包括但不限于万达金融、百度金融、小米金融、借贷宝、支付宝、淘宝、省呗、借呗、还呗、借了么、借钱花、2345金融等。在互联网金融最火热的16年和17年，沃淘信科直接服务的互联网金融公司超过500家。'

        },
        {
          icon: 'icon-iconfontpaixingbang',
          title: '数据报告',
          subTitle: '【基于效果】',
          titleEn: 'Data report',
          imgSrc: require('./server5.png'),
          content: '上海沃淘信息科技有限公司，在第一个五年计划的尾页，将大力夯实惟一主业，专注于“精耕细作”，努力在一公尺宽的客户需求边界里，为客户挖掘一公里深的市场价值。上海沃淘信息科技有限公司一直信奉“帮客户赚钱才是为客户省钱”的伙伴价值，与客户共同相伴成长。'
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    selectItem(item, index) {
      this.fiveDescriptionList = this._resort(this.fiveDescriptionList, item)
    },
    _resort(arr, item) {
      arr = arr.filter((i, index) => {
        return item.title !== i.title
      })
      let a = [item]
      let b = a.concat(arr)
      return b

    },
  },
  
  created() {
    this.copyList = this.fiveDescriptionList.slice()
  },
  components: {
    SingleSlide,
    SeriesRowItem
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .five-server-wrapper
    .shadow-box
      position absolute
      width 100%
      height 195px
      background-color $color-advantage-background
    .desc-background
      width 100%
      height 195px
      .container
        box-sizing border-box
        padding-top 32px
        padding-left 250px
        padding-right 70px
        color $color-advantage-four-active-color
        .title
          font-size $mode-title-size
          margin-bottom 15px
        .line
          position absolute
          left 368px
          top 26px
          font-size $mode-skewline-size
          height 32px
        .title-en
          position absolute
          left 380px
          top 47px
          font-size $mode-subtitle-en-size
          color $color-common-theme-sub-color
        .sub-title
          position absolute
          font-size $mode-subtitle-cn-size
          top 33px
          left 380px
        .content
          font-size $mode-content-size
          line-height 1.8
          color $000000
        .img-wrapper
          position absolute
          top 29px
          left 75px
          width 138px
          height 138px
          border-radius 50%
    .active
      display block
    .david-move 
      transition transform .3s
</style>


