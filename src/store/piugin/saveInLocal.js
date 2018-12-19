export default store => {
  console.log('store初始化了')
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation, state) => {
    // 只要有mudtation提交 就会触发
    // console.log('提交mutations')
    // 持久化的存储
    // localStorage.state = JSON.stringify(state)
  })
}
