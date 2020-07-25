import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from './components/Loading'
import Error from './components/Error'
import './assets/styles/index.css'

Vue.config.productionTip = false

Vue.component('PageLoading', Loading)
Vue.component('Error', Error)

Vue.filter('date', date => {
  return new Date(date).toLocaleDateString('pt-BR')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
