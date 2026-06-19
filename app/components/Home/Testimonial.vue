<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

const section = computed(() => cmsStore.getSectionByKey('testimonials'))

const title = computed(() => section.value?.title || 'Thousands Are Redefining Their Health with VCN.')
const subtitle = computed(() => section.value?.subtitle || 'Discover how VCN is helping people take control of their wellness journey.')

// Testimonial slides from CMS items, fallback to section.image, then hardcoded
const slides = computed(() => {
  const items = section.value?.items || []
  // console.log('Testimonial raw CMS items:', items)
  
  const mapped = items.map(item => ({
    image: getCmsImageUrl(item.image, ''),
    alt: item.title || 'Customer testimonial'
  })).filter(s => s.image)

  // console.log('Testimonial mapped CMS slides:', mapped)

  if (mapped.length > 0) {
    return mapped
  }

  const sectionImage = getCmsImageUrl(section.value?.image, '')
  // console.log('Testimonial section image fallback:', sectionImage)
  if (sectionImage) {
    return [{ image: sectionImage, alt: section.value?.title || 'Customer testimonial' }]
  }

  const hardcoded = [
    { image: '/img/testimonial/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/image/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/testimonial/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/image/testimonial.png', alt: 'Customer testimonial' }
  ]
  // console.log('Testimonial returning hardcoded fallback:', hardcoded)
  return hardcoded
})

const activeIndex = ref(0)
let swiperInstance = null

const initSwiper = () => {
  if (typeof window === 'undefined' || !window.Swiper) return

  // Destroy existing instance if any
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }

  const container = document.querySelector('.vcn-swiper-container')
  if (!container) return

  const slideCount = slides.value.length
  if (slideCount === 0) return

  swiperInstance = new window.Swiper('.vcn-swiper-container', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30
      }
    },
    loop: slideCount >= 2,
    autoplay: slideCount >= 2 ? {
      delay: 4000,
      disableOnInteraction: false,
    } : false,
    pagination: {
      el: '.vcn-custom-pagination',
      clickable: true,
    },
    on: {
      slideChange() {
        activeIndex.value = this.realIndex
      }
    }
  })
}

onMounted(() => {
  // Wait a small timeout to make sure DOM is fully settled
  setTimeout(() => {
    if (window.Swiper) {
      initSwiper()
    } else {
      // Fallback polling if script not loaded yet
      const poll = setInterval(() => {
        if (window.Swiper) {
          clearInterval(poll)
          initSwiper()
        }
      }, 100)
    }
  }, 100)
})

// Reinitialize Swiper if slides change dynamically (e.g. after CMS API loads)
watch(slides, () => {
  nextTick(() => {
    initSwiper()
  })
}, { deep: true })

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
  }
})
</script>

<template>
  <section class="vcn-testimonial-section">
    <div class="vcn-testimonial-container">
      <!-- Header -->
      <div class="vcn-testimonial-header">
        <h2 class="vcn-testimonial-title" v-html="title.replace('\\n', '<br>').replace('Their', '<br>Their')"></h2>
        <p class="vcn-testimonial-subtitle">
          {{ subtitle }}
        </p>
      </div>

      <!-- Swiper -->
      <div class="swiper vcn-swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(slide, i) in slides" :key="i" class="swiper-slide">
            <div class="vcn-testimonial-card">
              <img :src="slide.image" :alt="slide.alt" class="vcn-testimonial-image" />
            </div>
          </div>
        </div>
        <!-- Audio Control (only once) -->
        <div class="vcn-audio-controls-global">
          <button class="vcn-audio-button" aria-label="Play audio">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <img :src="slides[activeIndex]?.image || '/img/testimonial/testimonial.png'" alt="User avatar" class="vcn-user-avatar"
            id="vcn-avatar" />
        </div>

        <!-- Pagination -->
        <div class="vcn-custom-pagination"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vcn-testimonial-section {
  background: linear-gradient(180deg, #e8f5e0 0%, #f0f8ec 100%);
  padding: 40px 15px; /* Mobile first padding */
  position: relative;
  overflow: hidden;
}

.vcn-testimonial-container {
  margin: 0 auto;
  width: 100%;
}

.vcn-testimonial-header {
  text-align: center;
  margin-bottom: 35px;
  padding: 0 15px;
}

.vcn-testimonial-title {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--vcn-primary);
  line-height: 1.3;
  margin-bottom: 16px;
}

.vcn-testimonial-subtitle {
  font-size: 0.88rem;
  color: var(--vcn-dark);
  font-weight: 400;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

/* Swiper Styles */
.vcn-swiper-container {
  width: 100%;
  padding-bottom: 60px;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important; /* Full width on mobile/tablet */
}

.vcn-testimonial-card {
  background: #4a5d4a;
  border-radius: 16px;
  overflow: hidden;
  width: 100% !important;
  max-width: 500px !important; /* Original constraints on mobile */
  position: relative;
  aspect-ratio: 16/9.3;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.vcn-testimonial-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Audio Control */
.vcn-audio-controls-global {
  position: relative;
  margin: 20px auto 20px auto;
  background: #c9f5a6;
  border-radius: 40px;
  padding: 6px 10px 6px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vcn-audio-controls-global .vcn-audio-button {
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}

.vcn-audio-controls-global .vcn-audio-button svg {
  width: 24px;
  height: 24px;
  fill: var(--vcn-footer);
}

.vcn-audio-controls-global .vcn-user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #fff;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.vcn-user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Custom Pagination */
.vcn-custom-pagination {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* Default bullets */
.vcn-custom-pagination :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  border: 2px solid var(--vcn-footer);
  background: var(--vcn-footer);
  border-radius: 50%;
  opacity: 1;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Active bullet */
.vcn-custom-pagination :deep(.swiper-pagination-bullet-active) {
  background: transparent;
  border: 2px solid var(--vcn-footer);
  transform: scale(1.1);
}

/* Big Screen Override (min-width: 768px) */
@media (min-width: 768px) {
  .vcn-testimonial-section {
    padding: 80px 0;
  }

  .vcn-testimonial-header {
    margin-bottom: 50px;
    padding: 0 20px;
  }

  .vcn-testimonial-title {
    font-size: 2.5rem;
  }

  .vcn-testimonial-subtitle {
    font-size: 1rem;
  }

  .vcn-swiper-container {
    overflow: visible !important;
  }

  :deep(.swiper-slide) {
    width: 78vw !important;
    max-width: 1050px !important;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease;
  }

  :deep(.swiper-slide:not(.swiper-slide-active)) {
    opacity: 0.55;
    transform: scale(0.93);
  }

  .vcn-testimonial-card {
    max-width: none !important;
    aspect-ratio: 16/9;
    border-radius: 24px;
  }

  .vcn-custom-pagination {
    margin-top: 30px;
  }

  .vcn-audio-controls-global {
    margin-top: 30px;
  }
}

/* Extra small devices styling */
@media (max-width: 480px) {
  .vcn-testimonial-title {
    font-size: 1.35rem;
  }
}
</style>