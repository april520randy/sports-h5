export default async (to) => {
  sendToAnalytics(to.fullPath)
}

// 统计页面访问信息
const sendToAnalytics = (fullPath) => {
  console.log(fullPath)
}
