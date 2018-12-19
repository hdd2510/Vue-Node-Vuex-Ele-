// get提取key 值 value
const getSession = (key) => {
  if (!window.sessionStorage) {
    return
  }
  return window.sessionStorage.getItem(key)
}
// set存储key：value键值对
const setSession = (key, value) => {
  if (!window.sessionStorage) {
    return
  }
  return window.sessionStorage.setItem(key, value)
}
// remove删除key 和值 value
const remSession = (key) => {
  if (!window.sessionStorage) {
    return
  }
  return window.sessionStorage.removeItem(key)
}

export default {
  getSession,
  setSession,
  remSession
}
