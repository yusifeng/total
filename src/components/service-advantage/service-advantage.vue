<template>
  <div class="service-advantage-wrapper">
    <div class="container">
      <div class="left">
        <div class="item" v-for="item in listLeft" :key="item">
          <arrow-icon class="arrow">{{item.title}}</arrow-icon>
          {{item.desc}}
        </div>

      </div>
      <div class="right">
        <div class="item" v-for="item in listRight" :key="item">
          <arrow-icon class="arrow">{{item.title}}</arrow-icon>
          {{item.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from 'base/arrow-icon/arrow-icon'
export default {
  data() {
    return {
      listLeft: [
        {
          title: '自动升级',
          desc: '沃淘短信平台，借助自主知识产权、代码全掌握的便利优势，可实现现时自动、实时升级，并且升级全程为静默化。'
        },
        {
          title: '风险预判',
          desc: '沃淘基于大数据，已经基本实现对源码、平台内容实现一定的风险预判能力。'
        },
        {
          title: '备份容灾',
          desc: '沃淘短信平台已经实现异地容灾备份，并可针对客户需求，进行7日、15日、30日、180日、365日甚至更长时间的备份。'
        },
        {
          title: '现场服务',
          desc: '沃淘承若，如远程无法解决客户问题，沃淘将提供上门服务。'
        }
      ],
      listRight: [
        {
          title: 'Call center',
          desc: '沃淘针对每一客户指定专属客服经理，实现收文负责制。避免互相推诿、客户晕头转向。'
        },
        {
          title: '专属客服',
          desc: '沃淘搭建有400-666-5168的call center客服服务中心，基本实现全天8-11时，全年365日响应客户需求。'
        },
        {
          title: '及时响应',
          desc: '针对客户的任何问题，沃淘均承若实时响应，并在2小时内解决客户问题。'
        }
      ]
    }
  },
  components: {
    ArrowIcon
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .service-advantage-wrapper
    width 100%
    background-color $color-advantage-background
    .container
      font-size 0
      padding 50px 30px 41px 30px
      box-sizing border-box
      .left
        display inline-block
        width 50%
        font-size $advantage-title-content
        padding 0 32px
        vertical-align top
        box-sizing border-box
        border-right 1px solid #fff
        .item
          position relative
          padding-left 118px 
          line-height 20px
          margin-bottom 10px
          .arrow
            position absolute
            top -3px
            left 0
      .right
        display inline-block
        width 50%
        font-size $advantage-title-content
        padding 0 40px
        vertical-align top
        box-sizing border-box
        .item
          position relative
          padding-left 118px 
          line-height 22px
          margin-bottom 10px
          .arrow
            position absolute
            top 4px
            left 0        
</style>

