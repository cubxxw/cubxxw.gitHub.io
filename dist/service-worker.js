/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "87207bacd1a33e213a4f621c331c8eef"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2da2af16.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6b98eb08.js",
    "revision": "8e0eee022a448151912136003c905799"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.0c928fa0.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.f442ed80.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.981d851a.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.b834afba.js",
    "revision": "001d61621d89f79cda19570c959c0891"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "945d876319d20705920d06f76f1a022c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1028aa8c555b45b36cfa84afa9f0a317"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f26011dda6c3e4d397b2f2d707e02f9e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "426b6954dbc330c667e77f70676e6af8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4253258e3f5d1bf31ffe9dde646c1c7c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c310fa5ee891e5bef9850c61ef220180"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8d993b9196810f3170cbaa50d7590a54"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b4915861dc519e3c14fb4ff49878fab5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ef710abf641bec1094c4d0f1b67dd9c7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1c2f438b7a1f6fdf1d98acb29d7141e8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f6d8d5260f20dd96969f8f44a9dd2d9e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "07a9b82a3d658211d166e553cc81a448"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5426d85e319539e6840a29f0048ad761"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8996dfa362a94931e140a67e8f6b30b1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f2392d25d8b7ad327d323a71b7f3e00a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fed28c78581649ef47d6d5d69d169aa8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7d48b066ba4725511c99bc6093cbce2b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fd5621b10c6881139f3d717fd6d98586"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac1fec8ec1956511641877ae653de45a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8376d6c00b4d6011d1569879761fd3e0"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0710a1292f416e2a8a6d68c6055f3f3f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f6f6c04017588e11f33edc4c2051dbd5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5d14eb505c748acd5786497dd7b37605"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3f299cf23683108608e9f6489be7cd6e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
