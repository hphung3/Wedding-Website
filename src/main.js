import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import mainpage from './components/mainpage/MainPage.vue'
import rsvp from './components/rsvp/RSVP.vue'
import App from './App.vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import engagement from './components/engagement/Engagement.vue'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Meta)
Vue.use(VueRouter)


const routes = [
  { path: '/', component: mainpage},
  { path: '/rsvp', component: rsvp},
  { path: '/engagement', component: engagement}
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



