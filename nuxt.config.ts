// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  experimental: {
    appManifest: false
  },

  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-toast'],

  toast: {
    settings: {
      position: 'bottomRight',
      timeout: 5000,
      closeOnEscape: true,
      closeOnClick: true,
      pauseOnHover: true,
      transitionIn: 'fadeInDown',
      transitionOut: 'fadeOutUp',
      backgroundColor: '#ffffff',
      titleColor: '#000000',
      messageColor: '#333333',
      iconColor: '#000000',
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'marquee'
    }
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    // public keys (exposed to client-side)
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  // Performance optimizations
  nitro: {
    routeRules: {
      // Static assets - cache for 1 year
      '/css/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/js/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/video/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      // Product pages - cache for 5 minutes
      '/all-products': { isr: 300 },
      '/product-details': { isr: 300 },
      // Static pages - cache for 1 hour
      '/': { isr: 3600 },
      // Disable broken route
      '/approach': { redirect: { to: '/404', statusCode: 404 } },
      '/entire-world': { redirect: { to: '/404', statusCode: 404 } },
      '/vcn-university': { redirect: { to: '/404', statusCode: 404 } },
      '/microbiome': { redirect: { to: '/404', statusCode: 404 } },
      '/practitioners': { redirect: { to: '/404', statusCode: 404 } },
      '/sustainability': { redirect: { to: '/404', statusCode: 404 } },
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/scrollbar.css',
    'swiper/css'
  ],

  app: {
    head: {
      title: 'Home',

      link: [
        // 🔸 Favicon
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: '/img/logo/logo.png'
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

        // 🔸 AOS CSS
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css'
        },

        // 🔸 Public CSS files
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/dynamic-images.css' }
      ],

      script: [
        // 🔸 JS files (body end)
        { src: '/js/jquery.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/swiper-bundle.min.js', tagPosition: 'bodyClose', crossorigin: 'anonymous' },
        { src: '/js/popper.min.js', tagPosition: 'bodyClose', defer: true, crossorigin: 'anonymous' },
        { src: '/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose', defer: true, crossorigin: 'anonymous' },
        { src: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/main.js', tagPosition: 'bodyClose', defer: true }
      ]
    }
  }
})
