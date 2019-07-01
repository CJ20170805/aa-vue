// 列表store模板
import service from '../../api/index'
import * as types from './mutation-types'
const companyAudit = {
  state: {
    list: [],
    profile: {}
  },

  mutations: {
    [types.SET_COMPANYAUDIT_LIST](state, list) {
      state.list = list
    }
  },

  actions: {
    // 获取列表信息
    async getCompanyAudits({ commit }, params) {
      let { data } = await service.getCompanyAudits(params)
      // 设置列表数据Array.isArray(a)
      commit(types.SET_COMPANYAUDIT_LIST, Array.isArray(data) ? data : [])
    }
  }
}

export default companyAudit
