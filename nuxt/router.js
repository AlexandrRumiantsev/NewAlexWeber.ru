import Vue from 'vue'
import Router from 'vue-router'
 
import Main from './components/Main.vue'
 
Vue.use(Router)
 
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/ttt',
        component: Main
      }
    ]
  })
}