import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import indexContainer from '@/components/navvBar/indexContainer.vue'
import cartContainer from '@/components/navvBar/cartContainer.vue'
import categoryContainer from '@/components/navvBar/categoryContainer.vue'
import myContainer from '@/components/navvBar/myContainer.vue'
import hot from '@/components/categoryContent/Hot'
import imported from '@/components/categoryContent/Imported'
import landmark from '@/components/categoryContent/Landmark'
import seasonal from '@/components/categoryContent/Seasonal'
import onefree from '@/components/categoryContent/onefree'
import PaymentToOrderContainer from '@/components/orderContainer/PaymentToOrderContainer'
import categoryDetail from '@/components/categoryDetail/cateDetail'
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
    },
    {
      path: '/onefree ',
      name: 'onefree ',
      component: onefree,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/seasonal ',
      name: 'seasonal ',
      component: seasonal,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/landmark ',
      name: 'landmark ',
      component: landmark,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/imported ',
      name: 'imported ',
      component: imported,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/hot',
      name: 'hot ',
      component: hot,
      meta: {
        keepAlive: true
      }
      // children: [
      //   {
      //     path: '/hot/:id',
      //     component: indexContainer
      //   }
      // ]
    },
    {
      path: '/categoryDetail',
      name: 'categoryDetail',
      component: categoryDetail,
      meta: {
        keepAlive: true
      }
    }
  ],
  linkActiveClass: 'mui-active'// 高亮选中
})
