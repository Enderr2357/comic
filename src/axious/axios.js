import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 1000000
})

// 添加请求拦截器
// service.interceptors.request.use(
//   config => {
//     if (config.method === 'get') {
//       let url = config.url + '?';
//       for (const propName of Object.keys(config.params)) {
//         const value = config.params[propName];
//         var part = encodeURIComponent(propName) + "=";
//         if (value !== null && typeof (value) !== "undefined") {
//           if (typeof value === 'object') {
//             for (const key of Object.keys(value)) {
//               let params = propName + '[' + key + ']';
//               var subPart = encodeURIComponent(params) + "=";
//               url += subPart + encodeURIComponent(value[key]) + "&";
//             }
//           } else {
//             url += part + encodeURIComponent(value) + "&";
//           }
//         }
//       }
//       url = url.slice(0, -1);
//       config.params = {};
//       config.url = url;
//     }
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

// 添加响应拦截器
service.interceptors.response.use(
  res => {
    if (res.data.code === 0 && res.data.msg === 'NOTLOGIN') {// 返回登录页面
      localStorage.removeItem('userInfo')
      window.top.location.href = '/login'
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    // window.ELEMENT.Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service