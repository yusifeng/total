<template>
  <div class="platform-advantage-wrapper">
    <div class="container">
      <div class="left">
        <h3 class="title">自建立平台</h3>
        <p>和国内大多数短信公司严重依赖第三方短信平台不同，沃淘短信群发平台完全自主研发、自主知识产权，并借助大数据和云短信，实现了一定程度的机器自动化和深度学习功能。沃淘结合了自由机房和阿里云的平台部署，沃淘所有短信平台全部实现了多机房部署、异地容灾备灾机制。在安全性、稳定性、可靠性方面，有更为卓越的表现。</p>
      </div>
      <div class="line"></div>
      <div class="right">
        <h3 class="title">直连运营商</h3>
        <p class="text">沃淘短信平台全部直连运营商网关，链路采用MD5加密，安全性毋庸置疑</p>
        <h3 class="title">安全性</h3>
        <p class="text">沃淘短信平台客户操作可绑定ip和mac进行登录验证；沃淘短信平台后台全部实现了硬密钥登录机制，身份验证和识别高人一等，避免坚守自盗。</p>
        <h3 class="title">扩展性</h3>
        <p class="text">基于完全自主知识产权，沃淘短信平台可以根据客户需求，实现个性化扩展；真正实现“交付的和想象一样完美”。</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .platform-advantage-wrapper
    width 100%
    background-color $color-advantage-background
    .container
      font-size 0
      padding 33px 30px 17px 60px
      .left
        display inline-block
        width 50%
        vertical-align top
        box-sizing border-box
        padding-left 110px
        .title
          display block
          font-size $advantage-title-size
          font-weight 700
          margin-bottom 15px
          color $color-advantage-four-active-color
        p
          font-size $advantage-title-content
          line-height 30px
          margin-right 70px
      .line
        display inline-block
        height 180px
        width 1.5px
        background-color $ffffff
        margin-top 20px
      .right
        display inline-block
        vertical-align top
        width 44%
        box-sizing border-box
        margin-left 65px
        padding-right 60px
        .title
          font-size $advantage-title-size
          font-weight 700
          margin-bottom 5px
          color $color-advantage-four-active-color
        .text
          margin-bottom 10px
          font-size $advantage-title-content
          line-height 22px
</style>

