<template>
  <div class="team-structure-wrapper clearfix">
    <div class="team-structure-slide clearfix">

      <div class="slide-left">
        <img src="./te-st-bg-l.png" width="100%" @load="imgIsLoad">
        <img src="./te-st-l.png" class="te-st-l">
      </div>

      <div class="slide-mid" ref="mid">
        <div class="slide-mid-top-wrapper" ref="midTopWrapper">
          <img src="./te-st-bg-mid-top.png" alt="" width="80%" class="img-top" >
        </div>
        <img src="./te-st-bg-mid-bottom.png" alt="" width="100%" class="img-bottom" ref="midBottomImg"> 
      </div>

      <div class="slide-right" ref="right"></div>

    </div>

    <div class="container core-team">
      <div class="clearfix">
        <div class="core-ceo">

          <img src="./ts-st-ceo.png" alt="" class="img" height="420px">
          <div class="title-en">OUR TEAM</div>
          <div class="title-zh">核心团队</div>
          <h3 class="name">CEO 石汝林</h3>
          <p class="motto">努力我们的努力，</p>
          <p class="motto">热爱我们的热爱！</p>
          <p class="content" style="margin-top: 10px">因为热爱而创造事业，</p>
          <p class="content">因为同梦而聚合团队。</p>
          <p class="content">沃淘的最高目标清晰而唯一：</p>
          <p class="content">为细分市场创造不可替代的价值服务；</p>
          <p class="content">让伙伴一起激情畅想我们的事业成就。</p>
          <!-- <p class="right-quo">"</p> -->
        </div>

        <div class="core-cmo">
          <img src="./ts-st-cmo.png" alt="" class="img" height="120px">
          <h3 class="name">CMO 洪哥</h3>
          <p class="motto">别人为你省钱，我们为你赚钱</p>
          <p class="content">15年软件和互联网行销经验；</p>
          <p class="content">所谓行销就是一场愉快的解决方案修行。</p>
          <p class="content">一直追求和享受"一场场满意的行销过程"。</p>
        </div>

        <div class="core-cmo">
          <img src="./ts-st-cto.png" alt="" class="img" height="120px">
          <h3 class="name">CTO 卿光明</h3>
          <p class="motto">热爱生活与哲思，却对技术近似骗纸的狂热。踽踽独行，不忘初心</p>
          <p class="content">负责沃淘信科技术架构、应用产品线、运维以及全部软件研发工作。将"大数据"和"云计算"技术真正植入沃淘。</p>
        </div>

        <div class="core-cmo">
          <img src="./ts-st-kcm.png" alt="" class="img" height="120px">
          <h3 class="name">KCM 夏磊</h3>
          <p class="motto">6年的行业钻研到市场沉淀，用开放的心态与一切美好的书屋产生链接。</p>
          <p class="content">曾筹建团队在行业领头企业的全国市场，取得让友商敬重的销售业绩，是真正懂得"技术和商业"如何契合的专家级销售顾问。</p>
        </div>
      </div>
    </div>

    <div class="container company-tree">
      <img src="./team-struct.png" alt="" width="90%">
    </div>
  </div>
</template>

<script>
export default {
  methods: {

    //initialize height of the layer
    //the mid height equal to the layer height
    _initMidHeight(e) {
      this.height = e.target.offsetHeight
      let midRef = this.$refs.mid
      let rightRef = this.$refs.right
      midRef.style.height = this.height + 'px'
      rightRef.style.height = this.height + 'px'
      this.$refs.midBottomImg.onload = this._initMidTopHeight(this.$refs.midBottomImg)
    },

    //initialize the top-wrapper of mid height 
    //the value is depends on the offsetHeight of the mid-bottom-img
    _initMidTopHeight(e) {
      let midTopWrapper = this.$refs.midTopWrapper
      midTopWrapper.style.height = this.height - e.offsetHeight + 'px'
    },
    imgIsLoad(e) {
      this._initMidHeight(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .team-structure-wrapper
    width 100%
    .team-structure-slide
      width 100%
      height 100%
      margin-bottom 50px
      .slide-left
        position relative
        float left
        width 55%
        .te-st-l
          position absolute
          top 80px
          width 220px
          right 30px
      .slide-mid
        position relative
        float left
        width 15%
        .slide-mid-top-wrapper
          position relative
          .img-top
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            width 80%     
        .img-bottom
          position absolute
          bottom 0
      .slide-right
        float right
        width 30%
        background-color lightblue
        background-image linear-gradient(90deg, #fff 0%, lightblue 100%)
    .core-team
      margin-bottom 30px
      .core-ceo
        position relative
        float left
        width 689px
        height 420px
        padding-left 327px
        box-sizing border-box
        .img
          position absolute
          top 0
          left 70px
        .title-en
          font-size $ceo-title-en-size
          color $color-advantage-four-active-color
          font-weight 700
          margin-top 30px
          margin-bottom 10px
        .title-zh
          font-size $ceo-title-zh-size
          margin-bottom 45px
        .name
          display inline-block
          color $ffffff
          padding 2px 5px
          font-size $ceo-name-size
          background linear-gradient(to right, #91c31d, #229cd5)
          margin-bottom 68px
          letter-spacing 2px
        .motto
          font-size $ceo-motto-size
          line-height 1.4
        .content
          font-size $ceo-content-size
          line-height 1.8
          color $666666
      .core-cmo
        position relative
        float left
        width 300px
        height 120px
        margin-bottom 30px
        background-color $color-desc-background
        padding-left 145px
        padding-right 20px
        border-top-right-radius 77px
        border-bottom-right-radius 77px
        .img
          position absolute
          top 0
          left 0
        .name
          display inline-block
          font-size $cxo-name-size
          font-weight 700
          height 18px
          background-color blue
          line-height 18px
          padding 2px 4px
          background linear-gradient(to right, #91c31d, #229cd5)
          color $ffffff
          margin-bottom 10px
          letter-spacing 1px
        .motto
          margin-bottom 10px
          font-size $cxo-motto-size
          line-height 1.3
        .content
          line-height 1.3
          font-size $cxo-content-size
          color $666666
          letter-spacing 1px
    .company-tree
      margin-bottom 60px
      img
        display block
        margin 0 auto
</style>

