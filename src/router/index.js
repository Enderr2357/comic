import {
  createRouter, createWebHistory
} from "vue-router";
const router = createRouter({
  history: createWebHistory(),//采用hash网址方式实践路由
  routes: [
    {
      path: '/',
      component: () => { return import('../components/MainBody.vue') }
    },
    {
      path: '/Main',
      component: () => { return import('../components/MainBody.vue') }
    },
    {
      path: '/Login',
      component: () => { return import('../components/LoginBox.vue') }
    },
    {
      path: '/Register',
      component: () => { return import('../components/Register.vue') }
    }
  ]
})
export default router
