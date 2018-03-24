import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import mainpage from './components/mainpage/MainPage.vue'
import rsvp from './components/rsvp/RSVP.vue'

Vue.config.productionTip = false
Vue.use(Vuetify)

const routes = {
  '/': mainpage,
  '/rsvp': rsvp
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})
