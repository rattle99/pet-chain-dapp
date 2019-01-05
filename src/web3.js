// import vue.
import Vue from 'vue'
// import web3.
import Web3 from 'web3'

// init web3 function.
const initWeb3 = (Vue) => {
  // get web3 provider.
  const provider = Web3.givenProvider
  // start web3 instance with the provider.
  Vue.prototype.web3 = new Web3(provider)
}

// enable web3 plugin.
Vue.use(initWeb3)
