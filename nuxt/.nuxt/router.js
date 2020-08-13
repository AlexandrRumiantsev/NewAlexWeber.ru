import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70c3b292 = () => interopDefault(import('../pages/papers/index.js' /* webpackChunkName: "pages/papers/index" */))
const _6c325e9e = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _578c3d62 = () => interopDefault(import('../pages/papers/_id.js' /* webpackChunkName: "pages/papers/_id" */))
const _f1391ef4 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _f55c37d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/papers",
    component: _70c3b292,
    name: "papers"
  }, {
    path: "/project",
    component: _6c325e9e,
    name: "project"
  }, {
    path: "/papers/:id",
    component: _578c3d62,
    name: "papers-id"
  }, {
    path: "/project/:id",
    component: _f1391ef4,
    name: "project-id"
  }, {
    path: "/",
    component: _f55c37d8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
