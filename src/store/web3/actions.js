// module actions.

// import web3.
import Web3 from 'web3'

// main store actions.
export default {

  /**
   * Detect the Ethereum provider to use.
   *
   * @param getters
   * @param commit
   *
   * @return {*}
   */
  detectEthereumProvider: ({ getters, commit }) => {
    // if already prepared, return the provider on state.
    if (getters.ethereumProvider !== null) {
      return getters.ethereumProvider
    }

    // try window.ethereum, then Web3 current provider (legacy DApp browsers)
    const provider = window['ethereum'] || Web3.currentProvider
    console.log(provider)
    // return null case no provider was found.
    if (!provider) {
      return null
    }

    // set provider on state.
    commit('setEthereumProvider', provider)
    // complete by returning the provider.
    return provider
  },

  /**
   * Prepare the Web3 instance on the app.
   *
   * @param getters
   * @param commit
   *
   * @return {*}
   */
  prepareWeb3: async ({ getters, commit, dispatch }) => {
    // return web3 from getters if already prepared.
    if (getters.web3 !== null) {
      return getters.web3
    }

    // try detecting MetaMask on the browser
    const ethereumProvider = await dispatch('detectEthereumProvider')

    // return null case no provider was found.
    if (!ethereumProvider) {
      return null
    }

    // create a new web3 instance.
    const web3 = new Web3(ethereumProvider)
    // set web3 account on state.
    commit('setWeb3', web3)

    // complete by returning the web3 instance.
    return web3
  },

  /**
   * Enable Web3 account (Ethereum account access / "login").
   * @param getters
   * @param commit
   * @param dispatch
   *
   * @return {Promise<*>}
   */
  enableWeb3Account: async ({ getters, commit, dispatch }) => {
    // get web3 instance.
    const web3 = await dispatch('prepareWeb3')

    // return null case no web3 instance was found.
    if (!web3) {
      return null
    }

    // alias current ethereum provider from web3 provider.
    const provider = web3.currentProvider

    // listen for updates on the provider, to set the current address.
    // this allows auto detection when the account or network changes on MetaMask.
    provider.publicConfigStore.on('update', ({ selectedAddress }) => {
      commit('setSelectedAddress', selectedAddress)
    })

    // enable the web3 provider to get access to the account.
    return provider.enable()
  }

}
