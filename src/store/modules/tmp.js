// 列表store模板
import service from '../../api/index'
import * as types from './mutation-types'
const tmp = {
  state: {
    list: [],
    profile: {}
  },

  mutations: {
    [types.SET_TMP_LIST](state, list) {
      state.list = list
    }
  },

  actions: {
    // 获取列表信息
    async getTmps({ commit }, params) {
      let { data } = await service.getTmps(params)
      // 设置列表数据Array.isArray(a)
      commit(types.SET_TMP_LIST, Array.isArray(data) ? data : [])
    }
  }
}

export default tmp
