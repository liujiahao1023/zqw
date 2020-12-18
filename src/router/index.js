import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由模块
import centerRouter from'@/router/routes/centers'
import cinemaRouter from "@/router/routes/cinemas";
import filmRouter from "@/router/routes/film";

Vue.use(VueRouter)

const routes = [
  //注册路由模块
  centerRouter,
  cinemaRouter,
  filmRouter,
  {
    path: '/',
    redirect:"/films",
  }
];

const router = new VueRouter({
  mode: 'history',
  //前缀暂时可以不使用
  // base: process.env.BASE_URL,
  routes
});

export default router
