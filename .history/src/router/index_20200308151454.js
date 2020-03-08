import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import indexContainer from '@/components/navvBar/indexContainer.vue'
import cartContainer from '@/components/navvBar/cartContainer.vue'
import categoryContainer from '@/components/navvBar/categoryContainer.vue'
import myContainer from '@/components/navvBar/myContainer.vue'
import PaymentToOrderContainer from '@/components/orderContainer/PaymentToOrderContainer'
import bannerDetail from '@/components/detail/bannerDetail'
import tuijianDetail from '@/components/detail/tuijianDetail'
import heavyCommendDetail from '@/components/detail/heavyCommendDetail'
import hotDetail from '@/components/detail/hotDetail'
import importedDetail from '@/components/detail/importedDetail'
import seasonalDetail from '@/components/detail/seasonalDetail'
import onefreeDetail from '@/components/detail/onefreeDetail'
import landmarkDetail from '@/components/detail/landmarkDetail'
import shopDetail from '@/components/detail/shopDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/indexContainer',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/bannerDetail',
      name: 'bannerDetail',
      component: bannerDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/tuijianDetail',
      name: 'tuijianDetail',
      component: tuijianDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/heavyCommendDetail',
      name: 'heavyCommendDetail',
      component: heavyCommendDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/hotDetail',
      name: 'hotDetail',
      component: hotDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/importedDetail',
      name: 'importedDetail',
      component: importedDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/seasonalDetail',
      name: 'seasonalDetail',
      component: seasonalDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/onefreeDetail',
      name: 'onefreeDetail',
      component: onefreeDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/landmarkDetail',
      name: 'landmarkDetail',
      component: landmarkDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/indexContainer',
      name: 'indexContainer',
      component: indexContainer,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/cartContainer',
      name: 'cartContainer',
      component: cartContainer,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/categoryContainer',
      name: 'categoryContainer',
      component: categoryContainer,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/myContainer',
      name: 'myContainer',
      component: myContainer,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/PaymentToOrderContainer',
      name: 'PaymentToOrderContainer',
      component: PaymentToOrderContainer,
      meta: {
        keepAlive: true
      }
    }
  ],
  linkActiveClass: 'mui-active'// 高亮选中
})
