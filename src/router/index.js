import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由模块
import filmRouter from './routes/films'
import cinemaRouter from './routes/cinemas'
import centerRouter from './routes/center'



const routes = [
  //注册路由模块
    filmRouter,
    cinemaRouter,
    centerRouter,
    {
      path:"/",
      redirect:"./films"
    }
];

const router = new VueRouter({
  mode: 'history',
  //前缀暂时可以不使用
  // base: process.env.BASE_URL,
  routes
});

export default router
