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
    },
    {
      path: '/Factory',
      component: () => { return import('../components/Factory.vue') }
    },
    {
      path: '/Detail/:id*',
      component: () => import('../components/Detail.vue')
    },
    {
      path: '/User',
      component: () => import('../components/User.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/Subscribe.vue')
        },
        {
          path: 'Subscribe',
          component: () => import('../components/Subscribe.vue')
        },
        {
          path: 'History',
          component: () => import('../components/History.vue')
        },
        {
          path: 'Settings',
          component: () => import('../components/Settings.vue')
        },
      ]
    }
  ]
})
export const requestUrlParam1 = () => {
  var url = location.href
  var arrStr = url.split("/")
  var len = arrStr.length
  if (len > 1) {
    return arrStr[4]
  } else {
    return ""
  }
}
export default router
