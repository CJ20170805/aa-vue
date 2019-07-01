import { getData, setData } from '../../utils/localStorage.js'
import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_DEVICE } from './mutation-types'
import * as types from './mutation-types'
import { LIST_PROFILE_MODE_TYPES } from '../../utils/consts'
const app = {
  state: {
    sidebar: {
      opened: !+getData('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',

    listAndProfile: {
      currentMode: LIST_PROFILE_MODE_TYPES.LIST,
      profileInParam: {},
      proflieOutParam: {},
      list: [],
      total: 0
    },
    query: {
      loading: false
    },
    profileInParam: {},
    proflieOutParam: {}
  },
  mutations: {
    [types.TOGGLE_SIDEBAR]: state => {
      if (state.sidebar.opened) {
        setData('sidebarStatus', 1)
      } else {
        setData('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    [types.CLOSE_SIDEBAR]: (state, withoutAnimation) => {
      setData('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    [types.TOGGLE_DEVICE]: (state, device) => {
      state.device = device
    },
    // 离开列表页 打开详情简介页
    [types.GO_TO_PROFILE]: (state, { mode, profileInParam }) => {
      state.listAndProfile.currentMode = mode
      state.listAndProfile.profileInParam = Object.assign({}, profileInParam)
    },
    // 返回列表页
    [types.BACK_TO_LIST]: (state, { mode = 'list', proflieOutParam } = { mode: LIST_PROFILE_MODE_TYPES.LIST }) => {
      state.listAndProfile.currentMode = mode
      state.listAndProfile.proflieOutParam = Object.assign({}, proflieOutParam)
    },
    // 初始化
    [types.INIT_LIST_AND_PROFILE]: (state) => {
      state.listAndProfile.currentMode = LIST_PROFILE_MODE_TYPES.LIST
      state.listAndProfile.total = 0
      state.list = []
    },
    [types.QUERY_LIST]: (state, { loading }) => {
      state.query.loading = loading
    },
    // 设置全局list
    [types.SET_LIST]: (state, { mode, list }) => {
      state.listAndProfile.currentMode = mode
      state.list = list
    },
    // 设置全局list 总数
    [types.SET_LIST_TOTAL]: (state, total) => {
      state.listAndProfile.total = total
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit(TOGGLE_SIDEBAR)
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit(CLOSE_SIDEBAR, withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit(TOGGLE_DEVICE, device)
    }
  }
}

export default app
