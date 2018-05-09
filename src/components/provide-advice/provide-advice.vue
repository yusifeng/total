<template>
  <div class="advice shadow" @mouseleave="closeDetail" > 
    <div class="advice-item" @mousemove="showDetail1">
      <i class="iconfont icon-dianhua"></i> 
    </div>
    <div class="advice-item">
      <i class="iconfont icon-shangwufuwu"></i>
    </div>
    <div class="advice-item" @mousemove="showDetail3">
      <i class="iconfont icon-tousujianyi"></i>
    </div>
    <!-- on-touch-phone-detail -->
    <div class="detail-phone shadow" ref="detailPhone" @mouseover="showDetail1">
      <wt-input placeholder="请输入号码(座机请加分区)" 
                v-model="chatPhoneNum"
                type="text"
                class="detail-phone-tel"
                maxlength="11"></wt-input>
      <wt-button value="免费咨询" @click="counseling"></wt-button>
      <p class="detail-phone-desc">输入号码后点击免费通话, 稍后您将接到我们的电话, 该通话对您完全免费, 请放心接听！</p>
    </div>
    <!-- on-touch-messageBoader-detail --> 
    <div class="detail-message shadow" ref="detailAdvice" @mouseover="showDetail3">
      <textarea class="message-content" placeholder="请在此输入留言, 我们将尽快与您联系"></textarea >
      <wt-input placeholder="姓名" 
                v-model="name"
                type="text"
                class="detail-advice-tel"></wt-input>
      <wt-input placeholder="电话(必填)" 
                v-model="messagePhoneNum"
                type="text"
                class="detail-advice-tel"></wt-input>
      <wt-input placeholder="邮箱" 
                v-model="mail"
                type="text"
                class="detail-advice-tel"></wt-input>
      <wt-input placeholder="地址" 
                v-model="address"
                type="text"
                class="detail-advice-tel"></wt-input>
      <wt-button value="发送留言" @click="sendMessage"></wt-button>
    </div>

  </div>
</template>

<script>
import {addClass, removeClass} from 'common/js/dom'
import {isPhoneNum, isNum} from 'common/js/util'
import WtButton from 'base/button/button'
import WtInput from 'base/input-box/input-box'
export default {
  data() {
    return {
      isShow: true,
      //detail-phone-form
      chatPhoneNum: '',
      //detail-advice-form
      name: '',
      messagePhoneNum: '',
      mail: '',
      address: '',
    }
  },
  mounted() {
    this.timer = null
  },
  methods: {
    showDetail1(e) {
      addClass(this.$refs.detailPhone, 'active')
    },
    showDetail3(e) {
      addClass(this.$refs.detailAdvice, 'active')
    },

    closeDetail() {
        removeClass(this.$refs.detailPhone, 'active')
        removeClass(this.$refs.detailAdvice, 'active')
    },
    insureNum() {
      this.value=this.value.replace(/[^\d]/g,'')
    },
    counseling() {  //咨询
      //发送ajax验证
      //...
      alert('')
    },
    sendMessage() {
      //发送ajax验证
      //...
      alert('')
    }
  },
  components: {
    WtButton,
    WtInput
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  
  .advice
    display inline-block
    position relative
    width 44px
    height 129px
    background-color $color-common-theme-sub-color
    .advice-item
      position relative
      width 100%
      height 43px
      border-radius 5px
      box-sizing border-box
      cursor pointer
      .iconfont
        height 100%
        line-height 43px
        font-size $provide-advice-icon-size
        margin-left 10px
        color $ffffff
    .detail-phone
      position absolute
      right 50px
      bottom 0
      width 300px
      height 200px
      padding 20px
      background-color $color-common-theme-sub-color
      display none
      box-sizing border-box
      .detail-phone-tel
        margin-bottom 10px
      .detail-phone-desc
        margin-top 20px
        color $ffffff
        font-size $provide-advice-phone-desc-size
        line-height 1.8
    .detail-message
      position absolute
      right 50px
      bottom 0
      width 300px
      padding 20px
      background-color $color-common-theme-sub-color
      display none
      box-sizing border-box
      .message-content
        display block
        padding 10px
        resize none
        width 100%
        height 100px
        box-sizing border-box
        margin-bottom 10px
      .detail-advice-tel
        margin-bottom 10px
    .active
      display none
      display block
</style>

