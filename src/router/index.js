import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/', redirect: '/home', hidden: true },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/analysis',
    name: 'Home',
    meta: { title: '首页', icon: 'example' },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/home/analysis/index'),
        meta: { title: '分析页' }
      },
      {
        path: 'monitor',
        component: () => import('@/views/home/monitor/index'),
        meta: { title: '监控页' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    name: 'Setting',
    meta: { title: '设置', icon: 'setting', roles: ['god', 'superAdmin'] },
    children: [{
      path: 'module',
      name: 'module',
      component: () => import('@/views/module/index'),
      meta: { title: '模块', icon: '', roles: ['superAdmin'] }
    }]
  },
  {
    path: '/product',
    component: Layout,
    name: 'Product',
    meta:{ title: '产品管理', icon: 'setting', roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: 'product',
        component: () => import('@/views/product/index'),
        meta: { title: '产品管理', icon: '', roles: ['admin'] }
      },
      {
        path:'info/:id',
        name:'info',
        hidden:true,
        component: () => import('@/views/product/info/index'),
        meta: {roles: ['admin']} 
      }
    ]
  },
  {
    path: '/test1',
    component: () => import('@/views/test1/index'),
    name: 'test1',
    meta: { title: 'testtesttest', icon: 'setting'}
  }
  // {
  //   path: '/product',
  //   component: Layout,
  //   name: 'Info',
  //   children:[
  //     {
  //       path:'info/:id',
  //       name:'info',
  //       component: () => import('@/views/product/info/index'),
  //       meta: {roles: ['admin']} 
  //     }
  //   ]
  // }
]

export const asyncRouterMap = [
  {
    path: '/user',
    component: Layout,
    meta: { title: '用户', icon: 'user', roles: ['superAdmin'] },
    children: [{
      path: 'admin',
      name: 'admin_user',
      component: () => import('@/views/user/admin/index'),
      meta: { title: '平台用户', icon: 'user', roles: ['superAdmin'] }
    },
    {
      path: 'custom',
      name: 'custom_user',
      component: () => import('@/views/user/custom/index'),
      meta: { title: '网站用户', icon: 'user', roles: ['admin'] }
    }]
  },
  {
    path: '/roles',
    component: Layout,
    meta: { title: '用户', icon: 'user', roles: ['god','admin'] },
    children: [{
      path: 'index',
      name: 'roles',
      component: () => import('@/views/roles/index'),
      meta: { title: '角色', icon: 'roles', roles: ['admin'] }
    }]
  },
  {
    path: '/tmp',
    component: Layout,
    meta: { title: '模板', icon: 'user', roles: ['god'] },
    children: [{
      path: 'index',
      name: 'tmp',
      component: () => import('@/views/tmp/index'),
      meta: { title: '模板', icon: 'roles', roles: ['god'] }
    }]
  },
  {
    path: '/companyAudit',
    component: Layout,
    children: [{
      path: 'index',
      name: 'companyAudit',
      component: () => import('@/views/companyAudit/index'),
      meta: { title: '制造商审核', icon: 'company', roles: ['god'] }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
