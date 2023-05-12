import {
  createRouter,createWebHistory
} from "vue-router";
const router = createRouter({
  history: createWebHistory(),//采用hash网址方式实践路由
  routes: [
    {
      path: '/',
      component: () => { return import('../Main.vue')}
    },
    {
      path: '/Main',
      component: () => { return import ('../Main.vue')}
    }
  ]
})
export default router
