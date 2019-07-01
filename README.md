
# 网制后台前端项目开发规范 wz-admin-fe
<!-- TOC -->

- [网制后台前端项目开发规范 wz-admin-fe](#%E7%BD%91%E5%88%B6%E5%90%8E%E5%8F%B0%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83-wz-admin-fe)
  - [构建](#%E6%9E%84%E5%BB%BA)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Run your tests](#run-your-tests)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [综合规范](#%E7%BB%BC%E5%90%88%E8%A7%84%E8%8C%83)
  - [代码规范](#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)
    - [组件引用](#%E7%BB%84%E4%BB%B6%E5%BC%95%E7%94%A8)
    - [命名规范](#%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
      - [class 约定](#class-%E7%BA%A6%E5%AE%9A)
  - [Git规范](#git%E8%A7%84%E8%8C%83)
    - [主分支](#%E4%B8%BB%E5%88%86%E6%94%AF)
    - [Tag版本](#tag%E7%89%88%E6%9C%AC)
    - [commit message格式说明](#commit-message%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E)
      - [公共type](#%E5%85%AC%E5%85%B1type)
      - [前端type](#%E5%89%8D%E7%AB%AFtype)
      - [书写建议](#%E4%B9%A6%E5%86%99%E5%BB%BA%E8%AE%AE)
    - [提交流程](#%E6%8F%90%E4%BA%A4%E6%B5%81%E7%A8%8B)
  - [开发流程](#%E5%BC%80%E5%8F%91%08%E6%B5%81%E7%A8%8B)
    - [目录结构](#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
    - [基础配置](#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE)
    - [list页面模板使用](#list%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF%E4%BD%BF%E7%94%A8)

<!-- /TOC -->
## 构建
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 综合规范
- npm包不可自己添加，有需求统一申请
- git 提交develop分支，开发人员新建分支，命名： zhangsan-dev(姓名 + -dev)

## 代码规范

### 组件引用
- 组件引用除非Authorized / AppContainer / Pagination等全局组件，其余组件一律不得使用Vue.component引入，在
各自组件单独import

### 命名规范
- boolean类型的变量命名: isXxx ex: isShow
- dom事件处理的函数命名: handleXXX: handleLoginClick

#### class 约定
- 布局class使用 'lyt' 前缀 ex：class="lyt-component",常用于组件wrap布局包装

## Git规范

### 主分支
- master：上线版本主要分支，不可直接修改、提交
- develop：开发版本主要分支，在该分支进行代码合并

### Tag版本
- 三段式命名，v版本 + 里程碑 + 序号（v1.2.8）
- 大规模更新升级，修改版本号
- 架构调整、新功能或模块大调整，修改里程号
- 修复bug、小功能修改，修改序号

### commit message格式说明

#### 公共type
- feat：新增功能
- fix：修复bug
- perf：改善代码、提升性能
- refactor：代码重构、不增加新功能和修复bug
- merge: 合并代码
- style: 仅仅改变代码格式（空格缩进等），不改变代码逻辑
- docs：编辑文档
- test：编辑测试用例
- chore：改变构建流程、新增依赖库、工具等（不涉及到src的变更）

#### 前端type
- comp：新增页面、组件、样式等


#### 书写建议
- 尽可能多的提交，单个commit message内容不要过多
- 标题以 Fix（修复）/Add（新增）/Change（编辑）/Delete（删除） 起头 ( feat：Add user commont )
- 提交尽量用英文（若英文表述不清用中文）

### 提交流程
``` bash
# zhangsan-dev 分支
git add 
git commit -m ""
git pull origin develop
# 处理冲突
git checkout develop
git merge zhangsan-dev
git push origin develop
# 切换回自己分支 再开发
git checkout zhangsan-dev
```

## 开发流程
### 目录结构
```
.

├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   ├── index.js
│   │   ├── tmp.js
│   │   └── user.js
│   ├── assets
│   │   └── 404_images
│   │       ├── 404.png
│   ├── components
│   │   ├── AppContainer
│   │   │   └── index.vue
│   │   └── SvgIcon
│   │       └── index.vue
│   ├── icons
│   │   ├── index.js
│   │   ├── svg
│   │   │   ├── example.svg
│   │   │   └── user.svg
│   │   └── svgo.yml
│   ├── main.js
│   ├── permission.js
│   ├── plugins
│   │   ├── echarts.js
│   │   ├── element-ui.js
│   │   └── index.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── getters.js
│   │   ├── index.js
│   │   └── modules
│   │       ├── adminUser.js
│   │       ├── app.js
│   │       ├── customUser.js
│   │       ├── mutation-types.js
│   │       ├── permission.js
│   │       ├── product.js
│   │       ├── role.js
│   │       ├── tmp.js
│   │       └── user.js
│   ├── styles
│   │   ├── element-ui.styl
│   │   ├── index.styl
│   │   ├── mixin.styl
│   │   ├── sidebar.styl
│   │   ├── transition.styl
│   │   └── variables.styl
│   ├── utils
│   │   ├── auth.js
│   │   ├── config.js
│   │   ├── consts.js
│   │   ├── form.js
│   │   ├── index.js
│   │   ├── localStorage.js
│   │   ├── request.js
│   │   └── validate.js
│   └── views
│       ├── 404.vue
│       ├── home
│       │   ├── analysis
│       │   │   └── index.vue
│       │   ├── index.vue
│       │   └── monitor
│       │       └── index.vue
│       ├── layout
│       │   ├── Layout.vue
│       │   ├── components
│       │   │   ├── AppMain.vue
│       │   │   ├── Navbar.vue
│       │   │   ├── Sidebar
│       │   │   │   ├── Item.vue
│       │   │   │   ├── Link.vue
│       │   │   │   ├── SidebarItem.vue
│       │   │   │   └── index.vue
│       │   │   └── index.js
│       │   └── mixin
│       │       └── ResizeHandler.js
│       ├── login
│       │   └── index.vue
│       ├── module
│       │   └── index.vue
│       ├── product
│       │   ├── index.vue
│       │   └── info
│       │       └── index.vue
│       ├── roles
│       │   ├── index.vue
│       │   ├── list.vue
│       │   └── profile.vue
│       ├── testModule
│       ├── tmp
│       │   ├── index.vue
│       │   ├── list.vue
│       │   └── profile.vue
│       └── user
│           ├── admin
│           │   ├── formItem.js
│           │   ├── index.vue
│           │   ├── list.vue
│           │   └── profile.vue
│           └── custom
│               ├── index.vue
│               ├── list.vue
│               └── profile.vue
├── README.md
├── autoTmp.js
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
└── vue.config.js

```
### 基础配置
> /src/utils/config.js
```js

export const DEBUG = false //是否为调试模式
export const BASE_MOCK_URL = 'http://192.168.1.56:7300/mock/5c10674ecd552d5acdc2b3b6/api/admin' //easy-mock 路径
export const BASE_URL = DEBUG ? BASE_MOCK_URL : 'http://192.168.1.242:8001/api/v1' //基础url调试模式可选用easy-mock
// export const BASE_URL = DEBUG ? BASE_MOCK_URL : 'http://192.168.0.102:7001/api/v1'

export const DEBUG_ROLE = DEBUG ?"god":""

// export const BASE_URL = ''
// export const PROXY = 'http://192.168.1.103:7001'
export const TOKEN_KEY = 'Authorization' //header中的token字段
export const ADMIN_KEY = 'god' //最高权限角色名


```
### list页面模板使用

* 例如 我们要新建 module 的list页面，需要如下步骤：

```javascript
/**
 * moduleName
 * 需要生成的文件及文件夹
 * src/views/moduleName文件夹
 * src/views/moduleName/index.vue
 * src/views/moduleName/list.vue
 * src/views/moduleName/profile.vue
 * src/store/modules/moduleName.js
 * src/api/moduleName.js
 * 需要修改的文件
 * src/store/index.js 
 * src/api/index.js
 */

// 具体方法可以参考tmp模板

```
* 可使用 命令 快速生成模板
```shell
npm run model [modelname]
```

