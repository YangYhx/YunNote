import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

const coms = {
  index : () => import('@/views/index/index'),
  register: () => import('@/views/register/register'),
  writenote: () => import('@/views/writeNote/writeNote')


};
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: coms.index
    },
    {
      path:'/register',
      name:'register',
      component:coms.register
    },
    {
      path:'/writenote',
      name:'writenote',
      component:coms.writenote
    }
  ]
});
router.beforeEach((to,from,next) => {
  Nprogress.start();
  next();
});
router.afterEach((to,from) => {
  Nprogress.done();

});

export default router
