export default defineNuxtPlugin((nuxtApp) => {

  // Initialize hover effects and refresh animations after page loads
  nuxtApp.hook('page:finish', () => {
    // Re-initialize or refresh AOS animations on page change
    const refreshAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
          easing: "ease-out",
          mirror: true,
        })
        window.AOS.refresh()
      } else {
        setTimeout(refreshAOS, 100)
      }
    }
    refreshAOS()
    // Secondary refresh for layout settling
    setTimeout(refreshAOS, 600)

    /* ===============================
       BOOTSTRAP DROPDOWN HOVER
    ================================ */
    const dropdowns = document.querySelectorAll('.nav-item.dropdown')
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle')
      if (!toggle) return

      const bsDropdown = new bootstrap.Dropdown(toggle)

      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 992) bsDropdown.show()
      })

      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 992) bsDropdown.hide()
      })
    })

    /* ===============================
       SWIPER – PRODUCT DETAIL (5 products, 2-col grid per slide)
    ================================ */
    if (window.Swiper && document.querySelector('.vcn-product-detail-swiper')) {
      const detailSwiperEl = document.querySelector('.vcn-product-detail-swiper')
      const detailSlideCount = detailSwiperEl.querySelectorAll('.swiper-slide').length

      new Swiper('.vcn-product-detail-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: detailSlideCount >= 2, // Only enable loop if enough slides
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: {
          el: '.vcn-product-detail-swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          }
        }
      })
    }

    /* ===============================
       SWIPER – PRODUCT
    ================================ */
    if (window.Swiper && document.querySelector('.vcn-whole-body-swiper')) {
      const swiperEl = document.querySelector('.vcn-whole-body-swiper')
      const slideCount = swiperEl.querySelectorAll('.swiper-slide').length

      new Swiper('.vcn-whole-body-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: slideCount >= 8, // Only enable loop if enough slides
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: {
          el: '.vcn-whole-body-swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.vcn-whole-body-swiper-button-next',
          prevEl: '.vcn-whole-body-swiper-button-prev'
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        },
        autoHeight: true
      })
    }

    /* ===============================
       INTERSECTION OBSERVER
    ================================ */
    const awakenSection = document.getElementById('awakenSection')
    const awakenGif = document.getElementById('awakenGif')
    const awakenCopyright = document.getElementById('awakenCopyright')

    if (awakenSection && awakenGif && awakenCopyright) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          awakenGif.classList.add('vcn-loaded')
          awakenCopyright.classList.add('vcn-show')
          observer.disconnect()
        }
      }, { threshold: 0.3 })

      observer.observe(awakenSection)
    }

    /* ===============================
       NAVBAR SCROLL - REMOVED (handled in Navbar.vue component)
    ================================ */

    /* ===============================
       PRODUCT VIDEO HOVER
    ================================ */
    document.querySelectorAll('.vcn-whole-body-product-card').forEach(card => {
      const video = card.querySelector('.product-video')
      if (!video) return

      video.muted = true
      video.playsInline = true

      card.addEventListener('mouseenter', () => {
        video.currentTime = 0
        video.play().catch(() => { })
        video.style.opacity = '1'
      })

      card.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0
        video.style.opacity = '0'
      })
    })

    /* ===============================
       PROMO MODAL
    ================================ */
    const promoOverlay = document.getElementById('promoModalOverlay')
    if (promoOverlay) {
      setTimeout(() => promoOverlay.classList.add('promo-active-modal'), 10000)

      promoOverlay.addEventListener('click', e => {
        if (e.target === promoOverlay) {
          promoOverlay.classList.remove('promo-active-modal')
        }
      })

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          promoOverlay.classList.remove('promo-active-modal')
        }
      })
    }

    /* ===============================
       FAQ TOGGLE
    ================================ */
    document.querySelectorAll('.faq-question-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item-wrapper')
        document.querySelectorAll('.faq-item-wrapper').forEach(i => i.classList.remove('active'))
        item?.classList.add('active')
      })
    })

    /* ===============================
       BUNDLES OPEN / CLOSE
    ================================ */
    const openBtn = document.getElementById('openBundles')
    const closeBtn = document.getElementById('closeBtn')
    const mainContainer = document.getElementById('mainContainer')
    const videoContainer = document.getElementById('videoContainer')
    const bundlesContainer = document.getElementById('bundlesContainer')

    if (openBtn && closeBtn && mainContainer && videoContainer && bundlesContainer) {
      openBtn.addEventListener('click', () => {
        mainContainer.classList.add('fullscreen')
        videoContainer.classList.add('hidden')
        bundlesContainer.classList.add('active')
        document.body.style.overflow = 'hidden'
      })

      closeBtn.addEventListener('click', () => {
        bundlesContainer.classList.remove('active')
        videoContainer.classList.remove('hidden')
        mainContainer.classList.remove('fullscreen')
        document.body.style.overflow = ''
      })
    }

  })
})

