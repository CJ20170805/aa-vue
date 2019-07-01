import request from '@/utils/request'

export function getProduct() {
  return request({
    url: '/product',
    method: 'get',
    // params: { token }
  })
}
export function getProductInfo(id){
  return request({
    url:'/productinfo',
    method:'post',
    data: id
  })  
}
