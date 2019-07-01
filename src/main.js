import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.styl' // global css
// import iconfont from '@/components/iconfont' // svg组件
import '@/plugins' // 各种插件
import App from './App'
import router from './router'
import store from './store'

import '@/permission' // permission control

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
