import { LIST_PROFILE_MODE_TYPES } from "../utils/consts"
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  roleList: state => state.permission.roleList,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  productList: state => state.product.productList,

  isListMode: state => state.app.listAndProfile.currentMode === LIST_PROFILE_MODE_TYPES.LIST,
  profileMode: state => state.app.listAndProfile.currentMode,
  profileInParam: state => state.app.listAndProfile.profileInParam,
  profileOutParam: state => state.app.listAndProfile.profileOutParam,
  listTotal: state => state.app.listAndProfile.total
}
export default getters
