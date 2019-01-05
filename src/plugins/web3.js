// import web3.
import Web3 from 'web3'

// init web3 function.
export default (Vue) => {
  // start web3 instance with the given provider.
  const web3 = new Web3(Web3.givenProvider)

  // assign web3 on vue prototype.
  Vue.prototype.web3 = web3
  // assign provider on vue prototype.
  Vue.prototype.currentProvider = web3.currentProvider

  // let web3 on window when not production mode (easier deb debug).
  if (process.env.NODE_ENV !== 'production') {
    window.web3 = web3
  }
}
