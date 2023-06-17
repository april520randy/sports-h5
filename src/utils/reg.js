export default {
  usernameReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/, // 用户名
  passwordReg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,//密码
  oldUsernameReg: /^[A-Za-z0-9]+$/,
  phoneReg: /^\d{11}$/,
  codeReg: /^\d{4}$/,
  phoneCodeReg: /^\d{6}$/,
  withdrawPwdReg: /^\d{6}$/,
  chineseReg: /^[\u4e00-\u9fa5]+$/,//中文姓名
  agentAccountReg: /^a_[\da-zA-Z]{3,15}$/,//代理帐号
  qqReg: /\d{4,13}/,//qq
  emailReg: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,//邮箱
  bankReg: /^(\d{6,19})$/, //银行卡号
  intNumReg: /^[0-9]*$/, //正整数
}