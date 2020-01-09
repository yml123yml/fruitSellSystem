// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import './lib/mui/css/mui.min.css'
import 'mint-ui/lib/swipe/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(MintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
