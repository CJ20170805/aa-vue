import request from '../utils/request'

// 获取列表
export function getCompanyAudits(params) {
  return request.get('/companyAudits', { params })
}

