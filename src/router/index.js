import Vue from 'vue'
import Router from 'vue-router'
import store  from '../store'
import Layout from '../views/layout/Layout'
Vue.use(Router)

//路由引入模块 懒加载
const _import = file => resolve => require(['@/views/'+file+'.vue'], resolve);

const router = new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      redirect: '/demo/table'
    },
    {
      path: '/demo',
      component: Layout,
      children: [
        { path: 'table', name:'Table',component:_import("demo/table")}
      ]
    },
    { path: '/noAuthority', name:'NoAuthority',component: _import('error/NoAuthority'), hidden: true },
    { path: '/404', component: _import('error/404'), hidden: true },
    { path: '*', redirect: '/404', hidden: true }
  ]
})


export default router