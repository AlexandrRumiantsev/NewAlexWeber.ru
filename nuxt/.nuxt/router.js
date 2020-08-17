import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c26ddd8 = () => interopDefault(import('../pages/papers/index.vue' /* webpackChunkName: "pages/papers/index" */))
const _264aacab = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _99fb1380 = () => interopDefault(import('../pages/papers/_id.vue' /* webpackChunkName: "pages/papers/_id" */))
const _4761ddd3 = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
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
    component: _2c26ddd8,
    name: "papers"
  }, {
    path: "/projects",
    component: _264aacab,
    name: "projects"
  }, {
    path: "/papers/:id",
    component: _99fb1380,
    name: "papers-id"
  }, {
    path: "/projects/:id",
    component: _4761ddd3,
    name: "projects-id"
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
