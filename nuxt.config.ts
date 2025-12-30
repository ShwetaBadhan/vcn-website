// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Home',
      link: [
        // 🔸 Favicon
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/logo/favicon.png' },

        // 🔸 Google Fonts
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap' },
        { rel: 'stylesheet',  href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'},
        // 🔸 CSS Files (from /public/css)
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
      ],

      script: [
       
        // ✅ Other JS (in same order as HTML theme)
        { src: '/js/jquery.min.js', tagPosition: 'bodyClose' },
        { src: '/js/swiper-bundle.min.js', tagPosition: 'bodyClose' },
        { src: '/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/popper.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/main.js', tagPosition: 'bodyClose', defer: true },
      ],
    },
  },
})
