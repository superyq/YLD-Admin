import { defineStore } from "pinia";
import { login, logout, getInfo } from "@/api/login.js";
import { getToken, setToken, removeToken, setExpiresIn } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => {
    return {
      token: getToken() || "",
      name: "",
      avatar: "",
      roles: [],
      permissions: [],
      introduction: "",
      expires_in: -1
    };
  },
  getters: {
    tokenLength(state) {
      return state.token.length;
    },
  },
  actions: {
    async login({ username, password, code, uuid }) {
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password, code, uuid })
          .then((res) => {
            if (res.code !== 200) {
              reject(res);
              return window.$msg.error(res.msg);
            }
            const { data } = res;
            // 保存token
            setToken(data.access_token);
            this.token = data.access_token;
            // 保存到期时间
            setExpiresIn(data.expires_in);
            this.expires_in = data.expires_in;

            resolve(data);
          })
      });
    },
    async getInfo() {
      return new Promise((resolve, reject) => {
        getInfo(this.token)
          .then(({ data }) => {
            if (!data) {
              reject("验证失败，请重新登录!");
            }

            const { roles, name, avatar, introduction, permissions } = data;

            if (!roles || roles.length <= 0) {
              reject("用户未获得导航权限！");
            }

            this.roles = roles;
            this.name = name;
            this.avatar = avatar;
            this.introduction = introduction;
            this.permissions = permissions;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            this.token = "";
            this.roles = [];
            this.permissions = [];
            removeToken();
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async removeToken() {
      return new Promise((resolve) => {
        this.token = "";
        this.roles = [];
        removeToken();
        reject();
      });
    },
    async changeRoles(role) {
      const token = `${role}-token`;
      this.token = token;
      setToken(token);
      const { roles } = this.getInfo();
    },
  },
});
