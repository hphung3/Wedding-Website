import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import mainpage from './components/mainpage/MainPage.vue'
import rsvp from './components/rsvp/RSVP.vue'
import App from './App.vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Meta)
Vue.use(VueRouter)

// const routes = {
//   '/': mainpage,
//   '/rsvp': rsvp
// }

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute]
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })


const routes = [
  // { path: '/rsvp', component: rsvp},
  // { path: '/mainpage', component: mainpage},
  { path: '/', component: mainpage},
  { path: '/rsvp', component: rsvp}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// eslint-disable-next-line
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



