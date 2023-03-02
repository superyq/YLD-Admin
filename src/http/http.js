import axios from "axios";
import { getToken } from "@/utils/auth";
import { useUserStore } from "@/store/user.js";

// 请求和响应的消息主体用什么方式编码
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use((config) => {
  // 是否需要 token
  const isToken = (config.headers || {}).isToken === true;
  // 是否需要防止数据重复提交
  // const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
  if (getToken() && !isToken) {
    // 让请求携带token
    config.headers["Authorization"] = "Bearer " + getToken();
  }
  return config;
});

// 响应拦截器
service.interceptors.response.use((res) => {
  let userStore = useUserStore();
  // 未设置返回码默认200
  let code = res.data.code || 200;
  // 二进制数据直接返回
  if (res.request.responseType === "blob" || res.request.responseType === "arraybuffer") {
    return res.data;
  }
  if (code === 401) {
    window.$msg.info("登录状态已过期,请重新登录")
    userStore.logout().then(() => {
      window.location.href = '/home';
    })
  }
  return res.data;
});

export default service;
