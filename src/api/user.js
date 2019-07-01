import request from '../utils/request'

// 获取个人当前信息
export function getUser() {
  return request.get('/currentUser')
}

/* 后台用户方法*/

// 获取平台用户列表
export function getAdminUsers(params) {
  return request.get('/users',{params})
}

// 平台用户注册
export function adminRegister(data) {
  return request.post('/register',data)
}

// 编辑后台用户
export function adminEdit(params) {
  return request.put('/users/:'+params.id,params.data)
}


/* 前台用户方法*/

// 获取网站用户列表
export function getCustomUsers(params) {
  return request.get('/customs',{params})
}

