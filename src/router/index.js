import Vue from 'vue'
import Router from 'vue-router'


import routes from './routes'
  
Vue.use(Router)



export default new Router({
  // base: '/wt-pc/',
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(this)
    if (to.params.needScroll) {
      console.log()
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 1300 })
        }, 20)
      })
      // return { x: 0, y: 1300 }
    }
    return { x: 0, y: 0 }
  }
})
