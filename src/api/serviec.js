import request from '@/utils/request'

export default class Servie {
  // 获取个人当前信息
  static getUser() {
    return request.get({ url: '/currentUser' })
  }

  // 获取用户列表 
  static getUsers() {
    return request.get({ url: '/users' })
  }

  // 用户注册
  static register(data) {
    return request.post({ url: '/register', data })
  }
}