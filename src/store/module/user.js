import { getUserInfo } from '@/api/user.js'
const state = {
  userName: '李明'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, parmas) {
    state.userName = parmas.userName
  }
}

const actions = {
  updateUserName ({ commit }, userID) {
    getUserInfo(userID).then((res) => {
      // es6 解构赋值
      console.log(res)
      const { data } = res
      commit('SET_USER_NAME', data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default {
  // 开启命名空间  需要在引入的地方 使用 vuex的 createNamespacedHelpers  进行指定的module加载
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    // 可以再写一个模块
  }
}

// 注意  如果是在  ...mapActions里面指定打开了命名空间的模块  则需要写 ...mapActions('user/此位置是user里面的modelus',[])
