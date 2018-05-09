// 对于left的情况是不包含一个wrapper
// 对于right的情况是包含一个wrapper, 包含了wrapper就是有对应的文字与之有对应的关系, 如果不用一个wrapper包裹, 无法展示对应关系
// export default {
//产品与服务
export const productServer = {

  bgImg: 'pr-se-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'pr-se-l',
    style: {
      width: '17vw',
      top: '100px',
      left: '100px',
    }
  },
  rightImgPosition: {
    isShow: false
  },
}
export const performanceResults = {

  bgImg: 'ou-ac-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'ou-ac-l',
    style: {
      width: '45vw',
      bottom: '0px',
      left: '80px',
    }
  },
  rightImgPosition: {
    isShow: true,
    textImg: 'ou-ac-r',
    style: {
      width: '400px',
      top: '50px',
      left: '850px',
    }
  }
}
export const cooperativeClient = {

  bgImg: 'co-qu-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'co-qu-l',
    style: {
      width: '17vw',
      top: '95px',
      left: '233px'
    }
  },
  rightImgPosition: {
    isShow: false
  }
}
export const businessPhilosophy = {

  bgImg: 'bs-ph-bg',
  leftImgPosition: {
    isShow: true,
    textImg: 'bs-pg-l',
    style: {
      width: '17vw',
      top: '25%',
      left: '13%'
    }
  },
  rightImgPosition: {
    isShow: false
  }
}
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
      top: '200px',
      left: '470px',
    }
  } 
}

export const incPrecess = {
  bgImg: 'co-ov-bg',
  leftImgPosition: {
    isShow: 'true',
    textImg: 'co-ov-l',
    style: {
      width: '17vw',
      top: '86px',
      left: '276px',
    }
  },
  midImgPosition: {
    isShow: false,
  }
}