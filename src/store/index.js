import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  D0: {},
  D1: {},
  D2: {},
  D3: {},
  D4: {},
  D5: {},
  D6: {},
  D7: {},
  D8: {},
  D9: {},
}

const mutations = {
  updateD (state, D, data) {
    state[D] = data
  }
}

const actions = {
  updateD: (context, data) => {
    context.commit('updateD', data)
  }
}

const getters = {
  user: state => {
    return state.user
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
