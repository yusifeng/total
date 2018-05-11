// 对于left的情况是不包含一个wrapper
// 对于right的情况是包含一个wrapper, 包含了wrapper就是有对应的文字与之有对应的关系, 如果不用一个wrapper包裹, 无法展示对应关系

//产品与服务
export const productServer = {

  bgImg: 'pr-se-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'pr-se-l',
    style: {
      width: '17vw',
      top: '23%',
      left: '18%',
    }
  },
  rightImgPosition: {
    isShow: false
  },
}
//业绩成果
export const performanceResults = {

  bgImg: 'ou-ac-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'ou-ac-l',
    style: {
      width: '48vw',
      bottom: '0px',
      left: '21%',
    }
  },
  rightImgPosition: {
    isShow: false
  }
}
//样板客户
export const cooperativeClient = {

  bgImg: 'co-qu-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'co-qu-l',
    style: {
      width: '17vw',
      top: '23%',
      left: '29%'
    }
  },
  rightImgPosition: {
    isShow: false
  }
}

//经营理念
export const businessPhilosophy = {

  bgImg: 'bs-ph-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'bs-pg-l',
    style: {
      width: '17vw',
      top: '25%',
      left: '27%'
    }
  },
  rightImgPosition: {
    isShow: false
  }
}

//公司进程
export const incPrecess = {
  bgImg: 'co-ov-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'co-ov-l',
    style: {
      width: '17vw',
      top: '29%',
      left: '30%',
    }
  },
  rightImgPosition: {
    isShow: false,
  }
}

//未来展望
export const furtureProspects = {

  bgImg: 'fu-pr-bg',
  leftImgPosition: {
    isShow: false
  },
  rightImgPosition: {
    withWord: true,
    isShow: true,
    textImg: 'fu-pr-l',
    style: {
      width: '17vw',
      top: '33%',
      left: '43%',
    }
  }
}