// import vue-router.
import Router from 'vue-router'
// import application routes.
import routes from './routes'

// export a router object.
export default new Router({
  // config history mode.
  mode: 'history',
  // config application base url for routes.
  base: process.env.BASE_URL,
  // enable application routes.
  routes
})
