importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2aeca9bc714a872a7f40.js",
    "revision": "e7138697ebc63d5e45e53cef46c926c1"
  },
  {
    "url": "/_nuxt/416650f48591697c65ee.js",
    "revision": "bd07107499f620f8b6696fa1de7c1edb"
  },
  {
    "url": "/_nuxt/7a53a432e098e82585e7.js",
    "revision": "404b06e82e2e51285b3233ff9f93613f"
  },
  {
    "url": "/_nuxt/7df39023ed5f26c7f809.js",
    "revision": "e64e406da62d3e4e900a71c89b2f68a3"
  },
  {
    "url": "/_nuxt/83905444d66592bc18b5.js",
    "revision": "06bc8d878f35261e86f914ff09b9da7b"
  }
], {
  "cacheId": "ahd",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
