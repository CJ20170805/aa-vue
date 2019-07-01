import service from '../../api'
import * as types from './mutation-types'
const user = {
  state: {
    list:[],
    profile:{}
  },

  mutations: {
    [types.SET_CUSTOMUSER_LIST]: (state,list) => {
      state.list = list
    }
  },

  actions: {
    // 获取所有用户信息
    getCustomUser({commit},params) {
      service.getCustomUsers(params).then(res => {
        commit(types.SET_CUSTOMUSER_LIST,res.data)
      })
    },

    // 添加用户
    addCustomUser(store, userInfo) {
      return new Promise((resolve, reject) => {
        service.adminRegister(userInfo).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
