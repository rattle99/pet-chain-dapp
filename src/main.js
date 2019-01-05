import Vue from 'vue'
import AppLayout from './layouts/AppLayout'
import router from './router'
import store from './store'
import plugins from './plugins'

// enable plugins.
Vue.use(plugins)

new Vue({
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
