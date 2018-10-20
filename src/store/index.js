import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Count to 9 state
const state = {
  pins: [
    {id: 'D0', val: true},
    {id: 'D1', val: false},
    {id: 'D2', val: false},
    {id: 'D3', val: false},
    {id: 'D4', val: true},
    {id: 'D5', val: false},
    {id: 'D6', val: false},
    {id: 'D7', val: false},
    {id: 'D8', val: false},
    {id: 'D9', val: false},
  ],
  mqttUrl: ''
}

const mutations = {
  writePin (state, payload) {
    state.pins = [
      ...state.pins.filter(pin => pin.id != payload.id),
      payload,
    ]
  },
  saveMqtt (state, payload) {
    state.mqttUrl = payload.mqttUrl
  }
}

const actions = {
  writePin: (context, data) => {
    context.commit('writePin', data)
  },
  saveMqtt: (context, data) => {
    context.commit('saveMqtt', data)
  }
}


const getters = {
  pins: state => {
    return state.pins.sort()
  },
  mqttUrl: state => state.mqttUrl
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
