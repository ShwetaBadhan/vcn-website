// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  css: [
    '~/assets/css/main.css',
    'swiper/css'
  ],

  app: {
    head: {
      title: 'Home',

      link: [
        // 🔸 Favicon
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/images/logo/favicon.png'
        },

        // 🔸 Bootstrap Icons
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css'
        },

        // 🔸 Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap'
        },

        // 🔸 Swiper CSS (CDN – optional if already using module css)
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
        },

        // 🔸 Public CSS files
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' }
      ],

      script: [
        // 🔸 JS files (body end)
        { src: '/js/jquery.min.js', tagPosition: 'bodyClose' },
        { src: '/js/swiper-bundle.min.js', tagPosition: 'bodyClose' },
        { src: '/js/popper.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/main.js', tagPosition: 'bodyClose', defer: true }
      ]
    }
  }
})
