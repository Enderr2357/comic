import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './index.css'
import axios from 'axios';
createApp(App).use(ElementPlus).use(router).mount('#app')
