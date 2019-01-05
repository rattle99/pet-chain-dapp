// import plugins.
import web3Plugin from './web3'
import productionPlugin from './production'
import vuexPlugin from './vuex'
import routerPlugin from './router'

// default export.
export default (Vue) => {
  // enable vuex plugin.
  Vue.use(vuexPlugin)
  // enable web3 plugin.
  Vue.use(web3Plugin)
  // enable production plugin.
  Vue.use(productionPlugin)
  // enable vue router.
  Vue.use(routerPlugin)
}
