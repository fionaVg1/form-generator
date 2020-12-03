export default [
  {
    path: '/',
    component: () =>
      import(/*webpackChunkName:'home'*/ '@/views/home/index.vue')
  },
  {
    path: '*',
    component: () => import(/*webpackChunkName:'404'*/ '@/views/404.vue')
  }
];
