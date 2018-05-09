<template>
  <div class="contact-us-wrapper">
    <div class="locate-wrapper">
      <div class="title-wrapper">

        <div class="title-item">
          <div class="num">200<span class="pls">+</span></div>
          <div class="unit">国家/地区</div>
        </div>

        <div class="title-item">
          <div class="num" style="border:none">10,000<span class="pls">+</span></div>
          <div class="unit">服务客户数</div>
        </div>

        <div class="title-item">
          <div class="num">10&nbsp;&nbsp;<span class=yi>亿</span><span class="pls">+</span></div>
          <div class="unit">月下行量</div>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="./map.png" class="img">
        <div class="ripple" :style="item.locatePosition" v-for="(item, index) in dataList">
            <div class="locate" :style="item.locateNamePosition">{{item.locateName}}</div>
            <div class="core"></div>
            <div class="dot1 dot"></div>
            <div class="dot2 dot"></div>
            <div class="dot3 dot"></div>
        </div>
      </div>
    </div>
    <div class="container contact-way">
      <div class="way-item" v-for="(item, index) in contactList">
         <h3 class="title">{{item.title}}</h3>
         <p class="content" v-for="(i) in item.content">{{i}}</p>
         <span class="icon iconfont" :class="item.icon"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          locateName: '华北公司',
          locatePosition: {
            top: '267px',
            left: '641px'
          },
          locateNamePosition: {
            top: '10px',
            left:'34px'
          }
        },
        {
          locateName: '华西公司',
          locatePosition: {
            top: '490px',
            left: '450px'
          },
          locateNamePosition: {
            top: '10px',
            left:'34px'
          }
        },
        {
          locateName: '华中公司',
          locatePosition: {
            top: '490px',
            left: '700px'
          },
          locateNamePosition: {
            top: '10px',
            left:'34px'
          }
        },
        {
          locateName: '华西公司',
          locatePosition: {
            top: '530px',
            left: '650px'
          },
          locateNamePosition: {
            top: '70px',
            left:'34px'
          }
        },
        {
          locateName: '华东公司',
          locatePosition: {
            top: '485px',
            left: '780px'
          },
          locateNamePosition: {
            top: '70px',
            left:'34px'
          }
        }
      ],
      contactList: [
        {
          icon: 'icon-dianhua',
          title: 'CONTACT',
          content: [
            '随时随地：',
            '400 666 5168'
          ]
        },
        {
          icon: 'icon-tousujianyi',
          title: '投诉热线',
          content: [
            '185-021-58777',
            'ser@wotall.com'
          ]
        },
        {
          icon: 'icon-duanxinyidu',
          title: '邮件',
          content: [
            'con@wotall.com',
          ]
        },
        {
          icon: 'icon-ecurityCode',
          title: '伙伴验真',
          content: [
            '选择"伙伴验真"，',
            '输入识别号了解',
            '为您服务的伙伴。'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .contact-us-wrapper
    .locate-wrapper
      width 100%
      height 1200px
      background-image url('bg2.jpg')
      .title-wrapper
        text-align center
        width 100%
        height 140px
        padding-top 160px
        color $ffffff
        font-size 0       
        .title-item
          display inline-block
          height 100%
          .num
            position relative
            font-size $contact-us-num-size
            height 50px
            line-height 50px
            text-align center
            border-left 2px solid #fff
            border-right 2px solid #fff
            margin-bottom 20px
            padding-left 35px
            padding-right 75px
            .pls
              position absolute
              top -10px
              right 40px
            .yi
              position absolute
              right 70px
              bottom -8px
              font-size $contact-us-yi-size
          .unit
            font-size $contact-us-unit-size
            text-align center
            letter-spacing 2px
      .img-wrapper
        position relative
        width 983px
        margin 0 auto
      .img 
        width 100%
      .ripple
        position absolute
        width 100px
        height 100px
        border-radius 50%
        .locate
          position absolute
          color $color-advantage-four-active-color
        .core
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          width 10px
          height 10px
          margin auto
          background-color $color-advantage-four-active-color
          border-radius 50%
        .dot:after
          content: ''
          display: block
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          border-radius: 50%
          border: 2px solid $color-advantage-four-active-color
          opacity: 0
        .dot1:after
          animation ripple 4500ms ease-out 225ms infinite
        .dot2:after
          animation ripple 4500ms ease-out 900ms infinite
        .dot3:after
          animation ripple 4500ms ease-out 1800ms infinite
  .contact-way
    height 246px
    color $color-advantage-four-active-color
    .way-item
      position relative
      float left
      width 25%
      height 100%
      padding 67px 40px 80px 100px
      box-sizing border-box
      .title
        font-size $contact-us-way-title-size
        margin-bottom 15px
        font-weight 700
      .content
        font-size $contact-us-way-content-size
        margin-bottom 5px
      .icon
        position absolute
        top 57px
        left 40px
        width 50px
        height 50px
        margin-top 5px
        font-size $contact-us-way-icon-size
        color $color-common-theme-sub-color



    @keyframes ripple {
    0% {
        opacity: 0;
        -webkit-transform: scale(0.1, 0.1);
        -moz-transform: scale(0.1, 0.1);
        -ms-transform: scale(0.1, 0.1);
        transform: scale(0.1, 0.1);
    }
    5% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
  } 
</style>
