// 登录
export function login({ username, password, code, uuid }) {
  return api({
    url: `/auth/login`,
    headers: {
      isToken: false,
    },
    method: "post",
    data: {
      username,
      password,
      code,
      uuid
    },
  });
}

// 获取用户详细信息
export function getInfo() {
  return api({
    url: `/system/user/getInfo`,
    method: 'get'
  })
}

// 退出
export function logout() {
  return api({
    url: `/auth/logout`,
    method: 'delete'
  })
}

// 获取验证码
export function getCodeImg() {
  return api({
    url: `/code`,
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}