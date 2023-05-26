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
      path: '/Category/:id*',
      component: () => { return import('../components/Category.vue') }
    },
    {
      path: '/Reading/:id*',
      component: () =>import('../components/Reading.vue') 
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
    },
    {
      path: '/Administrator',
      component: () => import('../components/Administrator.vue'),
      children: [
        {
          path: '',
          components: () => import('../components/ComicManage.vue')
        },
        {
          path: 'ComicManage',
          components: () => import('../components/ComicManage.vue')
        },
        {
          path: 'UserManage',
          components: () => import('../components/UserManage.vue')
        },
      ]
    },
  ]
})
export const requestUrlParam1 = () => {
  console.log("进来")
  var url = location.href
  var arrStr = url.split("/")
  var len = arrStr.length
  if (len ==5) {
    return arrStr[4]
  }
  else if (len == 6) {
    var list=[arrStr[4],arrStr[5]]
    return list
  }
  else {
    return ""
  }
}
export default router
