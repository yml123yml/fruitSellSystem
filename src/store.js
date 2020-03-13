import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2,
    orderPros: []
  },
  getters: {
    getStateCount: function (state) {
      return state.count + 100
    }
  },
  mutations: {
    mutAddCount (state, n = 1) {
      state.count = state.count + n
    },
    mutReduceCount (state, n) {
      state.count = state.count - n
    },
    mutSetOrderPros (state, orderPros) {
      state.orderPros = orderPros
    }
  },
  actions: {
    actAddCount (context, n = 1) {
      setTimeout(() => {
        return context.commit('mutAddCount', n)
      }, 2000)
    },
    actReduceCount ({ commit }, n) {
      setTimeout(() => {
        return commit('mutReduceCount', n)
      }, 2000)
    }
  }
})

export default store
