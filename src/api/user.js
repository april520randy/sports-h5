export function login({ username, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'admin123' && password === 'zzzz1111') {
        res({ code: 0, data: { token: 'abcdefg' }, msg: '登录成功' })
      } else {
        rej({ code: 2, data: null, msg: '账号密码错误' })
      }
    }, 10)
  })
}

export function getUserInfo() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ code: 0, data: { username: 'ryder888', balance: 888, level: 9 }, msg: '成功' })
    }, 10)
  })
}

export function phoneLogin({ phone, code, countryCode }) {
  return new Promise((res) => {
    setTimeout(() => {
      res({ code: 0, data: { token: 'abcdefg' }, msg: '登录成功' })
    }, 10)
  })
}

export function register({ username, password, country }) {
  return new Promise((res) => {
    setTimeout(() => {
      res({ code: 0, data: { token: 'abcdefg' }, msg: '注册成功' })
    }, 10)
  })
}
