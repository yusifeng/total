<template>
  <div class="footer">
    <div class="footer-website">
      <div class="container">
        <div class="inner clearfix">
          <div class="footer-website-item">
            <h3>公司历程</h3>
            <ul>
              <li><a href="http://www.wotall.com/inc-precess/" target="_blank">沃淘概况</a></li>
              <li><a href="http://www.wotall.com/inc-precess/" target="_blank">未来展望</a></li>
              <li><a href="http://www.wotall.com/inc-precess/" target="_blank">经营理念</a></li>
              <li><a href="http://www.wotall.com/inc-precess/" target="_blank">团队架构</a></li>
            </ul>
          </div>
          <div class="footer-website-item">
            <h3>产品与服务</h3>
            <ul>
              <li><a href="http://www.wotall.com/prod-server/" target="_blank">短信平台</a></li>
              <li><a href="http://www.wotall.com/prod-server/" target="_blank">投放建议</a></li>
              <li><a href="http://www.wotall.com/prod-server/" target="_blank">短信群发</a></li>
              <li><a href="http://www.wotall.com/prod-server/" target="_blank">专号服务</a></li>
              <li><a href="http://www.wotall.com/prod-server/" target="_blank">数据报告</a></li>
            </ul>
          </div>
          <div class="footer-website-item">
            <h3>业绩成果</h3>
            <ul>
              <li><a href="http://www.wotall.com/performance-results/" target="_blank">销售额增长</a></li>
              <li><a href="http://www.wotall.com/performance-results/" target="_blank">团队规模</a></li>
              <li><a href="http://www.wotall.com/performance-results/" target="_blank">技术客服团队占比 </a></li>
            </ul>
          </div>
          <div class="footer-website-item special">
            <h3>联系我们</h3>
            <ul>
              <li>随时随地：400-666-5168</li>
              <li>邮件：con@wotall.com</li>
              <li>投诉专线：185-021-58777</li>
              <li>投诉邮箱：ser@wotall.com</li>
            </ul>
          </div>
          <div class="footer-website-item" style="margin-right: 0">
            <h3>关注沃淘</h3>
            <ul>
              <li>
                <img src="./qrcode_wotall_1.jpg" width="100px" height="100px">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p><span>Copyright ©2013 - 2016  上海沃淘信息科技有限公司 </span><span>咨询热线：4006665168  </span></p>
      <p><img src="./police.png" alt=""><a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202007449" class="hwba"> 沪公网安备 31011202007449号</a>  <a target="_blank" href="http://www.miitbeian.gov.cn">沪ICP备 16006747</a></p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .footer
    width 100%
    background-color $color-footer-background
    color $color-footer-dt-color
    .footer-website
      padding-top 30px
      padding-bottom 20px
      width 100%
      .inner
        font-size 0
        margin-right -120px
        .footer-website-item
          float left
          margin-left 30px
          margin-right 140px
          box-sizing border-box
          h3
            font-size $common-footer-title-size
          ul
            margin-top 15px
            margin-bottom 15px
            li
              font-size $common-footer-item-size
              line-height 1.8
              color $color-footer-dd-color
              a
                color $color-footer-dd-color
                &:hover
                  color $color-common-theme-hover-color
    .footer-copyright
      width 1200px
      margin 0 auto
      padding-top 30px
      text-align left
      line-height 1.8
      font-size $common-footer-copyright-size
      border-top 1px solid $color-footer-line-color
      color $color-footer-dd-color
      p
        span
        img
          vertical-align middle
      a
        color $color-footer-dd-color
        font-size $common-footer-copyright-size
        vertical-align bottom
        &:hover
          color $color-common-theme-hover-color
</style>

