import Vue from 'vue'
import App from './App.vue'
import store from './store/Store.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
