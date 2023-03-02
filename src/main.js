import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from "@/router"
import SvgIcon from "@/components/SvgIcon.vue"
import "virtual:svg-icons-register";

createApp(App).use(router).component("svg-icon", SvgIcon).mount('#app')
