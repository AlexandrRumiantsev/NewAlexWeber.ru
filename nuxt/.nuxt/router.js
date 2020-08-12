import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8df02876 = () => interopDefault(import('../pages/all.vue' /* webpackChunkName: "pages/all" */))
const _006bb1a8 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _27fcf57a = () => interopDefault(import('../pages/men.vue' /* webpackChunkName: "pages/men" */))
const _3a728000 = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _1e7130a2 = () => interopDefault(import('../pages/women.vue' /* webpackChunkName: "pages/women" */))
const _01260e3e = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _3df67b30 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _81727114 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all",
    component: _8df02876,
    name: "all"
  }, {
    path: "/cart",
    component: _006bb1a8,
    name: "cart"
  }, {
    path: "/men",
    component: _27fcf57a,
    name: "men"
  }, {
    path: "/project",
    component: _3a728000,
    name: "project"
  }, {
    path: "/women",
    component: _1e7130a2,
    name: "women"
  }, {
    path: "/product/:id?",
    component: _01260e3e,
    name: "product-id"
  }, {
    path: "/project/:id",
    component: _3df67b30,
    name: "project-id"
  }, {
    path: "/",
    component: _81727114,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
