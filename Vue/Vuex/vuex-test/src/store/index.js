import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state) {
      state.count++
    },
    idecrement(state) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
