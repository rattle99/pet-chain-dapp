// import vuex store constructor.
import { Store } from 'vuex'

// import state, getters, mutations and actions.
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'

// default store export.
export default new Store({
  state,
  getters,
  actions,
  mutations
})
