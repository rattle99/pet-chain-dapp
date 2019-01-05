// import plugins.
import productionPlugin from './production'
import vuexPlugin from './vuex'
import routerPlugin from './router'

// default export.
export default (Vue) => {
  // enable vuex plugin.
  Vue.use(vuexPlugin)
  // enable production plugin.
  Vue.use(productionPlugin)
  // enable vue router.
  Vue.use(routerPlugin)
}
