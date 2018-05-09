<template>
  <div class="four-advantages-wrapper">
    <series-row-item :list="fourAdvantageList" @click="selectItem" ></series-row-item>
    <div class="keep-bgcolor">
      <transition name="choose-advantage" mode="out-in">
        <component :is="currentComponent" :color="1"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import {addClass, removeClass} from 'common/js/dom'
import ResourcesAdv from 'components/resources-advantage/resources-advantage'
import PlatformAdv from 'components/platform-advantage/platform-advantage'
import ConsultantHousekeepersAdv from 'components/consultant-housekeepers/consultant-housekeepers'
import ServiceAdv from 'components/service-advantage/service-advantage'
import SeriesRowItem from 'base/series-row-item/series-row-item'
export default {
  data() {
    return {
      fourAdvantageList: [
        {
          icon: 'icon-ziyuan1',
          title: '资源优势'
        },
        {
          icon: 'icon-drgspingtairuanjianxitong3',
          title: '平台优势'
        },
        {
          icon: 'icon-shangwufuwu',
          title: '顾问式管家'
        },
        {
          icon: 'icon-fuwu2',
          title: '服务优势'
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    selectItem(item, index) {
      this.currentIndex = index 
    }
  },
  computed: {
    currentComponent() {
      return this.advantagesORM[this.currentIndex]
    }
  },
  created() {
    this.advantagesORM = {
      '0': 'ResourcesAdv',
      '1': 'PlatformAdv',
      '2': 'ConsultantHousekeepersAdv',
      '3': 'ServiceAdv'
    }
  },
  components: {
    ResourcesAdv,
    PlatformAdv,
    ConsultantHousekeepersAdv,
    ServiceAdv,
    SeriesRowItem
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .four-advantages-wrapper
    width 100%
    .keep-bgcolor
      width 100%
      background-color $color-advantage-background
      .choose-advantage-enter-active, .choose-advantage-leave-active
        transition all .3s
      .choose-advantage-enter, .choose-advantage-leave-to
        opacity 0
        height 100%
      .choose-advantage-move 
        transition: transform .3s

</style>



