
// export default {
//   username:{
//     key: 'username',
//     label: '用户名',
//     placeholder: '请填写用户名',
//     rules: [{ required: true, message: '请填写用户名', trigger: 'blur' }]
//   },
//   realname:{
//     key: 'realname',
//     label: '真实姓名',
//     placeholder: '请填写真实姓名',
//     rules: [{ required: true, message: '请填写真实姓名', trigger: 'blur' }]
//   },
//   password:{
//     key: 'password',
//     label: '密码',
//     type:'password',
//     span: 8,
//     placeholder: '密码',
//     rules: [{ required: true, message: '请填写密码', trigger: 'blur' }]
//   },
//   checkPass:{
//     key: 'checkPass',
//     type:'password',
//     label: '确认密码',
//     span: 8,
//     placeholder: '确认密码',
//     rules: [{ required: true, message: '请填写确认密码', trigger: 'blur' }]
//   },
//   phone:{
//     key: 'phone',
//     label: '手机号',
//     span: 8,
//     placeholder: '手机号',
//     rules: [{ required: true, message: '请填写手机号', trigger: 'blur' }]
//   },
//   email:{
//     key: 'email',
//     label: '邮箱',
//     span: 8,
//     placeholder: '邮箱',
//     rules: [{ required: true, message: '请填写邮箱', trigger: 'blur' }]
//   }
// }

export default function (module) {
  return {
    username: {
      key: 'username',
      label: '用户名',
      placeholder: '请填写用户名',
      rules: [{ required: true, message: '请填写用户名', trigger: 'blur' }]
    },
    realname: {
      key: 'realname',
      label: '真实姓名',
      placeholder: '请填写真实姓名',
      rules: []
    },
    password: {
      key: 'password',
      label: '密码',
      span: 8,
      placeholder: '密码',
      rules: module=='add'?[{ required: true, message: '请填写密码', trigger: 'blur' }]:[]
    },
    // checkPass: {
    //   key: 'checkPass',
    //   type: 'password',
    //   label: '确认密码',
    //   span: 8,
    //   placeholder: '确认密码',
    //   rules: module=='add'?[{ required: true, message: '请填写确认密码', trigger: 'blur' }]:[]
    // },
    phone: {
      key: 'phone',
      label: '手机号',
      span: 8,
      placeholder: '手机号',
      rules: [{ required: true, message: '请填写手机号', trigger: 'blur' }]
    },
    email: {
      key: 'email',
      label: '邮箱',
      span: 8,
      placeholder: '邮箱',
      rules: []
    },
    avatar: {
      key: 'avatar',
      label: '头像',
      span: 8,
      placeholder: '头像',
      rules: []
    },
    sex: {
      key: 'sex',
      label: '性别',
      span: 8,
      placeholder: '性别',
      rules: []
    },
    roles:{
      key: 'roles',
      label: '角色',
      span: 8,
      placeholder: '角色',
      hidden: true,
      rules: []
    }
  }
}