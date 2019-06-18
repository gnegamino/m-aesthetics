import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../src/assets/scss/app.scss'
import 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueParallaxJs from 'vue-parallax-js'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueParallaxJs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
