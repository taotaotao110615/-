import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Reset from './reset.css'
import axios from 'axios'



Vue.prototype.axios = axios

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */);

document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth * 100 / 750 + "px";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Reset,
  render: h => h(App),
}).$mount('#app')
