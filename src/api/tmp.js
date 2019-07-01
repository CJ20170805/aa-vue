import request from '../utils/request'

// 获取列表
export function getTmps(params) {
  return request.get('/customs', { params })
}

