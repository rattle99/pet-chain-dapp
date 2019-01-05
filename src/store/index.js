// import Vue and Vuex.
import Vue from 'vue'
import Vuex from 'vuex'

// import web3 module.
import web3 from './web3'

// enable vuex.
Vue.use(Vuex)

// default store export.
export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    web3
  }
})
