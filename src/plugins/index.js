import Vue from 'vue'
import './element-ui'
import './echarts'
import Authorized from '../components/Authorized' // svg组件
import AppContainer from '../components/AppContainer' // svg组件
import BackList from '../components/BackList' // svg组件
import Pagination from '../components/Pagination' // svg组件

import '../icons' // icon
// register globally
Vue.component('Authorized', Authorized)
Vue.component('AppContainer', AppContainer)
Vue.component('BackList', BackList)
Vue.component('Pagination', Pagination)

