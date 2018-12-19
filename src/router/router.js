export default [
  {
    path: '/',
    alias: '/alarmCenter',
    name: 'home',
    component: () => import('@/views/alarmCenter.vue')
  },
  {
    path: '/scienceShow',
    name: 'about',
    component: () => import('@/views/scienceShow.vue')

  },
  // 404页面
  {
    path: '*',
    component: () => import('@/views/error404.vue')
  }
]
