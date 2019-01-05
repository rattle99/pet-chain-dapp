// module mutations.
export default {

  // web3 mutation.
  setWeb3: (state, web3) => {
    state.web3 = web3
  },

  // ethereum provider mutation.
  setEthereumProvider: (state, provider) => {
    state.ethereumProvider = provider
  },

  // set current selected address.
  setSelectedAddress: (state, account) => {
    state.selectedAddress = account
  }

}
