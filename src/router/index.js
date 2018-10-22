import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

const coms = {
  index : () => import('@/views/index/index'),
  register: () => import('@/views/register/register'),
  writenote: () => import('@/views/writeNote/writeNote'),
  articaldetail:() => import('@/views/articaldetail/articaldetail')


};
const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: coms.index
    },
    {
      path: '/',
      redirect:'/index'
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
    },
    {
      path:'/articaldetail/:id',
      name:'articaldetail',
      meta:{
        title:'文章详情'
      },
      component:coms.articaldetail

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
