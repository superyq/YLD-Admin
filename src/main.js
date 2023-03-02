import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from "./router"
// 组件
import SvgIcon from "@/components/SvgIcon.vue"

createApp(App).use(router).component("svg-icon", SvgIcon).mount('#app')
