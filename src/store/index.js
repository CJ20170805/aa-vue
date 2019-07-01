import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import adminUser from './modules/adminUser'
import customUser from './modules/customUser'
import permission from './modules/permission'
import product from './modules/product'
import getters from './getters'
import role from './modules/role'
import companyAudit from './modules/companyAudit'
import tmp from './modules/tmp'//模板
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tmp,
    app,
    user,
    adminUser,
    customUser,
    permission,
    role,
    product,
    companyAudit,
  },
  getters
})

export default store
