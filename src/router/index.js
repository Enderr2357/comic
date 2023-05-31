import { ref, watch } from "vue";
import { useRoute } from "vue-router";
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
      name: 'Main',
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
      path: '/Search',
      component: () => { return import('../components/Search.vue') }
    },
    {
      path: '/Category/:id*',
      component: () => { return import('../components/Category.vue') }
    },
    {
      path: '/Reading/:id*',
      component: () => import('../components/Reading.vue')
    },
    {
      name: 'Detail',
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
          path: 'Settings',
          component: () => import('../components/Settings.vue'),
          children: [
            {
              path: '',
              component: () => import('../components/Info.vue')
            },
            {
              path: 'Info',
              component: () => import('../components/Info.vue')
            },
            {
              path: 'Update',
              component: () => import('../components/Update.vue')
            },
          ]
        },
      ]
    },
    {
      path: '/Admin',
      component: () => import('../components/Admin.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/UserManage.vue')
        },
        {
          path: 'UserManage',
          component: () => import('../components/UserManage.vue')
        },
        {
          path: 'ComicManage',
          component: () => import('../components/ComicManage.vue')
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  const i=localStorage.getItem('login')
  console.log(localStorage.getItem("login"))
  next()
})
export const requestUrlParam1 = () => {
  console.log("进来")
  var url = location.href
  var arrStr = url.split("/")
  var len = arrStr.length
  if (len == 5) {
    return arrStr[4]
  }
  else if (len == 6) {
    var list = [arrStr[4], arrStr[5]]
    return list
  }
  else {
    return ""
  }
}
export default router
