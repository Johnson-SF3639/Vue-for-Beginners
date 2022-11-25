import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import gettersstate from './gettersstate'
import mutationsstate from './mutationsstate'
import actionsstate from './actionsstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters: gettersstate,
  mutations: mutationsstate,
  action: actionsstate
})
