import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import * as types from '../store/modules/mutation-types'
import { getToken } from '@/utils/auth'
import { BASE_URL, TOKEN_KEY } from './config'
// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers[TOKEN_KEY] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// service.interceptors.request.use(
//   config => {
//     console.log('request config',config)
//   }
// )
// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    const status = response.status
    if (status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (status === 500 || status === 502 || status === 504) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else {
      if (res.data && res.data.count && res.data.rows) {
        store.commit(types.SET_LIST_TOTAL, res.data.count)
        return {
          data:res.data.rows
        }
      } else {
        return response.data
      }
    }
  },
  error => {
    let errStatus = error.response.status
    Message({
      message: error.response.data.msg,
      type: 'error',
      duration: 5 * 1000
    })
    if (errStatus === '401') {
      store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
    return Promise.reject(error)
  }
)

export default service
