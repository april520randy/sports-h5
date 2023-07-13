export function sendCodeApi() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ code: 0, data: { code: 123456 }, msg: '成功' })
    }, 10)
  })
}
