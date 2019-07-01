import * as tmp from './tmp'
import * as user from './user'
import * as permission from './permission'
import * as product from './product'
import * as login from './login'
import * as companyAudit from './companyAudit'

const service = {
  ...tmp,
  ...login,
  ...user,
  ...permission,
  ...product,
  ...companyAudit,
}
export default service


// const service = Object.assign({},
//   tmp,
//   user,
//   permission,
//   product,
// )
// bug!
// assign里面超过三个service vscode就没有提示了！！