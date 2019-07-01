import { getToken } from '@/utils/auth'
import service from '../../api'
import * as types from './mutation-types'
import { Message } from 'element-ui'
const user = {
  state: {
    token: getToken(),
    list: [],
  },

  mutations: {
    [types.SET_ADMINUSER_LIST]: (state, list) => {
      state.list = list
    }
  },

  actions: {
    // 获取所有用户信息
    async getUsers({ commit }, params) {
      let { data } = await service.getAdminUsers(params)
      // 设置列表数据
      commit(types.SET_ADMINUSER_LIST, Array.isArray(data) ? data : [])
    },

    // 添加系统用户
    async addAdminUser({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        service.adminRegister(userInfo).then(res => {
          Message({
            message: '添加用户成功',
            type: 'success'
          })
          // 成功后返回列表页
          commit(types.BACK_TO_LIST)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 编辑后台用户
    async adminEdit({commit},params){
      await service.adminEdit(params)
      commit(types.BACK_TO_LIST)
    }
  }
}

export default user
