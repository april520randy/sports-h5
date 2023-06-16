export function resolvePath(relativePath, currentPath) {
  if (relativePath) {
    return new URL(relativePath, currentPath).href
  }
  return ''
}

export function jumpExternalLink({ url, type, title, router }) {
  const types = {
    webview: 1, // router 模拟 webview
    h5: 2, // h5重定向跳转外链
    vestBag: 3 // 马甲包内跳转外链
  }
  switch (type) {
    case types.webview:
      router.push(`/webview?url=${btoa(url)}&title=${title}`)
      return
    case types.h5:
      window.location.href = url
      return
    case types.vestBag:
      return
    default:
      window.location.href = url
  }
}

// 获取:root下的css变量值
export function getCssVariableValue(variable){
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable);
}