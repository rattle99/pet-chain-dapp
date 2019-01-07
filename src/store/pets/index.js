import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

// export store module.
export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
