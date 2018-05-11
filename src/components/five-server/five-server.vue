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
          content: '我淘可针对用户的安全性需求, 进行短信平台的一对一专案部署。并可针对客户现有环境,进行快速对接'
        },
        {
          icon: 'icon-youjian',
          title: '短信群发',
          subTitle: '',
          titleEn: 'SMS bulk',
          imgSrc: require('./server3.png'),
          content: '沃淘现提供国内验证码,国际验证码,会员营销,市场推广短信等各项sms短信业务.'
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
          content: '针对重点客户,沃淘可提供专属号码申请,专属通道落地业务.让短信码号成为身份标识,让信赖加倍.'

        },
        {
          icon: 'icon-iconfontpaixingbang',
          title: '数据报告',
          subTitle: '【基于效果】',
          titleEn: 'Data report',
          imgSrc: require('./server5.png'),
          content: '沃淘可依据客户需求,协同客户进行短信发送效果预判,统计,评估,让短信有的放矢并借于云计算分析,给出投放建议报告.'
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
          left 365px
          top 29px
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


