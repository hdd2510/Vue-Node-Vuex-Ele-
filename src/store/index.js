import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './module/user'
import saveInLocal from './piugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 开启严格模式
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
    user
  },
  plugins: [ saveInLocal ]
})
