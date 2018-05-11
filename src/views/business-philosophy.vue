<template>
  <div class="inc-precess-wrapper">

    <single-slide class="single-slide" :bannerMsg="bannerMsg"></single-slide>

    <div class="container">
      <div class="item" v-for="(item, index) in dataList">

        <div class="title-wrapper">
          <h3 class="title">{{item.title}}</h3>
          <span class="pxsbx"></span>
          <span class="pxsbx"></span>
          <span class="pxsbx"></span>
        </div>

        <div class="content">{{item.content}}</div>
        
      </div>
    </div>

  </div>
</template>

<script>
import SingleSlide from 'base/single-slide/single-slide'
import SeriesRowItem from 'base/series-row-item/series-row-item'
import { businessPhilosophy } from 'common/js/slide-position'
export default {
  data() {
    return {
      dataList: [
        {
          title: '从态度出发',
          content: '沃淘信科Wotall倡导“赏心悦目、舒心愉快”的工作状态，只有快乐工作，才能更好工作。合理的要求是锻炼，不合理的要求是磨练，我们坚持在客户的各种诉求下，成长自己、成就客户。'
        },
        {
          title: '以成果说话',
          content: '沃淘信科Wotall倡导“基于能力的企业文化”，我们认为对客户最好的态度就是使命达成！既做老好人，更做成功事。'
        },
        {
          title: '为客户赚钱',
          content: '沃淘信科Wotall用每年销售收入的10%投入技术研究和数据分析，寄希望于排除人为干扰，利用大数据、云计算等前沿技术，实现价值最大化，去芜存精，消除沉没成本，帮客户赚钱，帮客户赚更多的钱。'
        },
        {
          title: '专注短信运营',
          content: '沃淘信科Wotall准确把握自身优势，拒绝过度横向扩展。一直以来，有且只有一项主营业务：短信群发业务。正因为近乎于苛刻的专一，才赢得过去5年满意的答卷。我们十分坚定，下一个五年，我们仍然会专注于短信群发业务及由此衍生的数据深度分析，不会轻易横向扩展。'
        }
      ],
      bannerMsg: businessPhilosophy
    }
  },
  components: {
    SingleSlide
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .inc-precess-wrapper
    .container
      height 547px
      padding-top 100px
      .item
        margin-left 95px
        margin-bottom 45px
        float left
        width 458px
        height 195px
        .title-wrapper
          height 27px
          margin-bottom 18px
          .title
            float left
            position relative
            width 188px
            font-size $philosophy-title-size
            line-height 27px
            text-indent 30px
            letter-spacing 2px
            color $ffffff
            background -webkit-linear-gradient(left, $color-common-theme-sub-color 0%, $color-advantage-four-active-color 100%)
            &:before 
              content ''
              position absolute
              left 0
              top 0
              width 0
              height 0
              border-top 27px solid #fff 
              border-right 16px solid transparent
            &:after
              content ''
              position absolute
              width 0
              height 0
              bottom 0
              right 0
              border-bottom 27px solid #fff
              border-left 16px solid transparent 
          .pxsbx
            float left
            display inline-block
            width 12px
            height 27px
            background-color $color-advantage-four-active-color
            transform skewX(-30deg) translateX(-4px)
            margin-right 4px
        .content
          width 100%
          height 150px
          background-color $color-desc-background
          padding-left 25px
          padding-right 25px
          padding-top 12px
          box-sizing border-box
          line-height 1.8
          border-radius 5px
          font-size $philosophy-content-size
</style>

