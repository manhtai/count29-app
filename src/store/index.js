import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Count to 9 state
const state = {
  pins: [
    {id: 'D0', val: 1},
    {id: 'D1', val: 0},
    {id: 'D2', val: 0},
    {id: 'D3', val: 0},
    {id: 'D4', val: 1},
    {id: 'D5', val: 0},
    {id: 'D6', val: 0},
    {id: 'D7', val: 0},
    {id: 'D8', val: 0},
    {id: 'D9', val: 0},
  ]
}

const mutations = {
  write (state, payload) {
    state.pins = [
      ...state.pins.filter(pin => pin.id != payload.id),
      payload,
    ]
  }
}

const actions = {
  write: (context, data) => {
    context.commit('write', data)
  }
}


const getters = {
  pins: state => {
    return state.pins.sort()
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
