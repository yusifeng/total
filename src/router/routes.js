import IndexView from 'views/index'
import IncPrecess from 'views/inc-precess'
import ProductServer from 'views/product-server'
import PerformanceResults from 'views/performance-results'
import BusinessPhilosophy from 'views/business-philosophy'
import CooperativeClient from 'views/cooperative-client'
import FutuPeprospects from 'views/future-prospects'
import ContactUs from 'views/contact-us'
import Colors from 'base/color-templet/color-templet'




export default [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/inc-precess',
    name: 'inc-precess',
    component: IncPrecess
  },
  {
    path: '/prod-server',
    name: 'prod-server',
    component: ProductServer
  },
  {
    path: '/performance-results',
    name: 'performance-results',
    component: PerformanceResults
  },
  {
    path: '/business-philosophy',
    name: 'business-philosophy',
    component: BusinessPhilosophy
  },
  {
    path: '/cooperative-client',
    name: 'cooperative-client',
    component: CooperativeClient
  },
  {
    path: '/future-prospects',
    name: 'future-prospects',
    component: FutuPeprospects
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/colors',
    name: 'colors',
    component: Colors
  },
  {
    path: '/*',
    redirect: '/'
  },
]