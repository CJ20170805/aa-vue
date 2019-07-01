import { asyncRouterMap, constantRouterMap } from '@/router'
import * as config from '../../utils/config'
import * as types from './mutation-types'
import service from '../../api'
import { Message } from 'element-ui'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    list: []
  },
  mutations: {
    [types.SET_ROUTERS]: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    [types.SET_PERMISSION_LIST]: (state, list) => {
      state.list = list
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.includes(config.ADMIN_KEY)) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit(types.SET_ROUTERS, accessedRouters)
        resolve()
      })
    },
    async getPermissions({ commit }, param) {
      let { data } = await service.getPermission(param)
      commit(types.SET_PERMISSION_LIST, data)
    },
    async setPermission({commit}, param) {
      let res = await service.setPermission(param)
      Message({
        message: '设置权限成功',
        type: 'success'
      })
      commit(types.BACK_TO_LIST)
      return res
    }
  }
}

export default permission
