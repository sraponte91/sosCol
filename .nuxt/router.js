import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2df9a91a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d45ed1f2 = () => interopDefault(import('../pages/become-volunteer.vue' /* webpackChunkName: "pages/become-volunteer" */))
const _37cd80eb = () => interopDefault(import('../pages/cause-details.vue' /* webpackChunkName: "pages/cause-details" */))
const _55d11826 = () => interopDefault(import('../pages/causes.vue' /* webpackChunkName: "pages/causes" */))
const _ce9ec226 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4cba3d9c = () => interopDefault(import('../pages/event-details.vue' /* webpackChunkName: "pages/event-details" */))
const _7a4e2c5c = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _1625091f = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _bc823c7a = () => interopDefault(import('../pages/index-1.vue' /* webpackChunkName: "pages/index-1" */))
const _1511b7d6 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _09bbaccb = () => interopDefault(import('../pages/news-details.vue' /* webpackChunkName: "pages/news-details" */))
const _7b0a2bec = () => interopDefault(import('../pages/volunteers.vue' /* webpackChunkName: "pages/volunteers" */))
const _4db183df = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2df9a91a,
    name: "about"
  }, {
    path: "/become-volunteer",
    component: _d45ed1f2,
    name: "become-volunteer"
  }, {
    path: "/cause-details",
    component: _37cd80eb,
    name: "cause-details"
  }, {
    path: "/causes",
    component: _55d11826,
    name: "causes"
  }, {
    path: "/contact",
    component: _ce9ec226,
    name: "contact"
  }, {
    path: "/event-details",
    component: _4cba3d9c,
    name: "event-details"
  }, {
    path: "/events",
    component: _7a4e2c5c,
    name: "events"
  }, {
    path: "/gallery",
    component: _1625091f,
    name: "gallery"
  }, {
    path: "/index-1",
    component: _bc823c7a,
    name: "index-1"
  }, {
    path: "/news",
    component: _1511b7d6,
    name: "news"
  }, {
    path: "/news-details",
    component: _09bbaccb,
    name: "news-details"
  }, {
    path: "/volunteers",
    component: _7b0a2bec,
    name: "volunteers"
  }, {
    path: "/",
    component: _4db183df,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
