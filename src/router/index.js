import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import indexContainer from '@/components/navvBar/indexContainer.vue'
import cartContainer from '@/components/navvBar/cartContainer.vue'
import categoryContainer from '@/components/navvBar/categoryContainer.vue'
import myContainer from '@/components/navvBar/myContainer.vue'
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
    }
  ],
  linkActiveClass: 'mui-active'// 高亮选中
})
