import storage from 'good-storage'

const TOKEN = '__TOKEN__'
const CURRENT_TIME_STAMP = '__CURRENT_TIME_STAMP__'
export function getToken() {
  return storage.get(TOKEN, '')
}
export function setToken(flag) {
  return storage.set(TOKEN, flag)
}
export function removeToken() {
  return storage.remove(TOKEN)
}

export function getPageOpenedCurrentTimestamp() {
  return storage.get(CURRENT_TIME_STAMP, new Date())
}
export function setPageOpenedCurrentTimestamp(flag) {
  storage.set(CURRENT_TIME_STAMP, flag)
  return flag
}
