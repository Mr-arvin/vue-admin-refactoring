import Vue from 'vue';
import Router from 'vue-router';

const _import = require('./_import_' + process.env.NODE_ENV);
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  { path: '/401', component: _import('error/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: _import('home/index'),
        meta: { title: 'home', icon: 'example', noCache: true }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/platformrun',
    component: Layout,
    redirect: 'noredirect',
    name: 'platformrun',
    meta: { title: 'platformrun', icon: 'example' },
    children: [
      {
        path: '/platformrun/index',
        component: _import('platformrun/index'),
        redirect: 'noredirect',
        name: 'dolog',
        meta: { title: 'dolog', icon: 'table', roles: ['admin'] },
        children: [
          { path: 'businessData', component: _import('platformrun/dolog/businessData'), name: 'businessData', meta: { title: 'businessData' }},
          { path: 'doplatform', component: _import('platformrun/dolog/doplatform'), name: 'doplatform', meta: { title: 'doplatform' }}
        ]
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/index',
    name: 'example',
    meta: { title: 'example', icon: 'example' },
    children: [
      {
        path: '/example/table/index',
        component: _import('example/table/index'),
        redirect: 'noredirect',
        name: 'Table',
        meta: { title: 'Table', icon: 'table', roles: ['admin'] },
        children: [
          { path: 'test01', component: _import('example/table/test01'), name: 'test01', meta: { title: 'test01' }},
          { path: 'test02', component: _import('example/table/test02'), name: 'test02', meta: { title: 'test02' }}
        ]
      },
      {
        path: '/example/table/test03',
        component: _import('example/table/index'),
        redirect: 'noredirect',
        meta: { title: 'test03', icon: 'table', roles: ['admin'] },
        children: [
          { path: 'test03', component: _import('example/table/test03'), name: 'test03', meta: { title: 'test03', icon: 'table' }}
        ]
      }
    ]
  },
  {
    path: '/tree',
    name: 'tree',
    component: Layout,
    meta: { roles: ['admin', 'editor'] },
    children: [
      {
        path: 'index',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'treeTable', icon: 'tree' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    meta: { roles: ['editor'] },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: 'form', icon: 'form' }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/line',
    name: 'Chart',
    meta: { title: 'charts', icon: 'chart', roles: ['admin', 'visitor'] },
    children: [
      {
        path: 'line',
        name: 'line',
        component: _import('chart/line'),
        meta: { title: 'lineChart' }
      },
      {
        path: 'keyboard',
        name: 'keyboard',
        component: _import('chart/keyboard'),
        meta: { title: 'keyboardChart' }
      }
    ]
  },
  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'log', component: _import('errorLog/index'), name: 'errorLog', meta: { title: 'errorLog', icon: 'bug' }}]
  },

  { path: '*', redirect: '/404', hidden: true }
];

