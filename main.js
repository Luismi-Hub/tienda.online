import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import router from './router'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.use(Notifications)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


