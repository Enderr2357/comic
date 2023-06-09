import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './index.css'
import axios from 'axios';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import tools from './utils/tool.js'
import './style/common.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale })
app.use(tools)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
