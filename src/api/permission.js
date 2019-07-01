import request from '@/utils/request'

// 获取角色列表
export function getRoles() {
  return request({
    url: '/roles',
    method: 'get',
  })
}

// 获取权限列表
export function getPermission(data) {
  return request({
    url: '/permission',
    method: 'get',
    data
  })
}

// 授予用户角色
export function setRoles(data){
  return request({
    url: '/userRole',
    method: 'post',
    data
  })
}

// 授予角色权限
export function setPermission(data){
  return request({
    url: '/rolePermission',
    method: 'post',
    data
  })
}

