import { login, logout } from '@/api/login'
import { getUser, register } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { SET_TOKEN, SET_NAME, SET_AVATAR, SET_ROLES } from './mutation-types'
import { DEBUG_ROLE } from '../../utils/config'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    [SET_TOKEN]: (state, token) => {
      state.token = token
    },
    [SET_NAME]: (state, name) => {
      state.name = name
    },
    [SET_AVATAR]: (state, avatar) => {
      state.avatar = avatar
    },
    [SET_ROLES]: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit(SET_TOKEN, data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUser({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUser(state.token).then(response => {
          const data = response.data
          let roles = []
          if (DEBUG_ROLE) {
            roles.push(DEBUG_ROLE)
          }
          if (data.isgod == 1) {
            roles.push('god')
          }
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            data.roles.forEach(v => {
              roles.push(v.title)
            })
          } else {
            reject('getUser: roles must be a non-null array !')
          }
          commit(SET_ROLES, roles)
          commit(SET_NAME, data.username)
          commit(SET_AVATAR, data.avatar)
          resolve({ response, roles })
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 添加用户
    async addUser(ctx, userInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo).then(res => {
          
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit(SET_TOKEN, '')
          commit(SET_ROLES, [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit(SET_TOKEN, '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
