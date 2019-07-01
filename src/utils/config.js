
export const DEBUG = false //是否为调试模式
export const BASE_MOCK_URL = 'http://192.168.1.56:7300/mock/5c10674ecd552d5acdc2b3b6/api/admin'
// export const BASE_URL = DEBUG ? BASE_MOCK_URL : 'http://192.168.1.242:8001/api/v1'
export const BASE_URL = DEBUG ? BASE_MOCK_URL : 'http://localhost:7002/api/v1'

export const DEBUG_ROLE = DEBUG ?"god":""

// export const BASE_URL = ''
// export const PROXY = 'http://192.168.1.103:7001'
export const TOKEN_KEY = 'Authorization'
export const ADMIN_KEY = 'god'

