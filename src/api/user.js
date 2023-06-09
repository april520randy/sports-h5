export function login({ username, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'admin123' && password === 'zzz111') {
        res({ code: 0, data: { token: 'abcdefg' }, msg: '登录成功' })
      } else {
        rej({ code: 2, data: null, msg: '账号密码错误' })
      }
    }, 1000)
  })
}
