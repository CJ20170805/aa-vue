// 列表store模板
import service from '../../api/index'
import * as types from './mutation-types'
import { Message } from 'element-ui'
const role = {
  state: {
    list: [],
    profile: {}
  },

  mutations: {
    [types.SET_ROLE_LIST](state, list) {
      state.list = list
    }
  },

  actions: {
    // 授予用户角色
    setRoles({ commit }, data) {
      service.setRoles(data).then(res => {
        if (res.msg === 'success') {
          Message({
            message: '修改用户角色成功',
            type: 'success'
          })
          // 成功后返回列表页
          commit(types.BACK_TO_LIST)
        }
      })
    },
    // 获取角色列表
    async getRoles({ commit }, params) {
      let { data } = await service.getRoles(params)
      let roleList = []
      if (Array.isArray(data)&&data.length > 0) {
        data.forEach(v => {
          roleList.push({
            key: v.id,
            label: v.name,
            ...v
          })
        })
      }
      // 设置列表数据
      commit(types.SET_ROLE_LIST, roleList)
    }
  }
}

export default role
