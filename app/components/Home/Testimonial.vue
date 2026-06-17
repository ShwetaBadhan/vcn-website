<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

const section = computed(() => cmsStore.getSectionByKey('testimonials'))

const title = computed(() => section.value?.title || 'Over 1 million health transformations (and counting).')
const subtitle = computed(() => section.value?.subtitle || 'See how real people are changing their health with VCN.')

// Testimonial slides from CMS items, fallback to hardcoded
const slides = computed(() => {
  const items = section.value?.items || []
  const mapped = items.map((item, idx) => {
    const fallbackNames = ['Zam', 'Sarah', 'Michael', 'David']
    const fallbackFullNames = ['Zam T.', 'Sarah K.', 'Michael B.', 'David L.']
    const fallbackRoles = [
      'DS-01® Member for 5 Years',
      'VCN Member for 3 Years',
      'Daily User for 2 Years',
      'Customer for 1 Year'
    ]
    const fallbackAvatars = [
      '/img/image/testimonial.png',
      '/img/testimonial/testimonial.png',
    ]
    return {
      name: item.extraData?.name || item.config?.name || fallbackNames[idx % fallbackNames.length],
      fullName: item.title || fallbackFullNames[idx % fallbackFullNames.length],
      role: item.extraData?.role || item.config?.role || fallbackRoles[idx % fallbackRoles.length],
      image: getCmsImageUrl(item.image, ''),
      avatar: getCmsImageUrl(item.extraData?.avatar || item.config?.avatar, fallbackAvatars[idx % fallbackAvatars.length]),
      alt: item.title || 'Customer Testimonial'
    }
  }).filter(s => s.image)

  if (mapped.length > 0) {
    return mapped
  }

  // Hardcoded fallback list matching the screenshot
  return [
    {
      name: 'Sarah',
      fullName: 'Sarah K.',
      role: 'VCN Member for 3 Years',
      image: '/img/image/testimonial.png',
      avatar: '/img/image/testimonial.png',
      alt: 'Sarah K.'
    },
    {
      name: 'Michael',
      fullName: 'Michael B.',
      role: 'Daily User for 2 Years',
      image: '/img/testimonial/testimonial.png',
      avatar: '/img/testimonial/testimonial.png',
      alt: 'Michael B.'
    },
    {
      name: 'Sarah',
      fullName: 'Sarah K.',
      role: 'VCN Member for 3 Years',
      image: '/img/image/testimonial.png',
      avatar: '/img/image/testimonial.png',
      alt: 'Sarah K.'
    },
    {
      name: 'Michael',
      fullName: 'Michael B.',
      role: 'Daily User for 2 Years',
      image: '/img/testimonial/testimonial.png',
      avatar: '/img/testimonial/testimonial.png',
      alt: 'Michael B.'
    }
  ]
})

const activeIndex = ref(0)
const isMuted = ref(false)
const isPlaying = ref(false)

const activeSlideName = computed(() => {
  return slides.value[activeIndex.value]?.name || 'Play'
})

const activeSlideAvatar = computed(() => {
  return slides.value[activeIndex.value]?.avatar || slides.value[0]?.avatar
})

const toggleMute = () => {
  isMuted.value = !isMuted.value
}

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  console.log('Play state toggled:', isPlaying.value)
}

onMounted(() => {
  const initSwiper = () => {
    const SwiperLib = window.Swiper
    if (SwiperLib) {
      // Safely destroy any existing Swiper instance on this container first
      const swiperEl = document.querySelector('.vcn-swiper-container')
      if (swiperEl && swiperEl.swiper) {
        try {
          swiperEl.swiper.destroy(true, true)
        } catch (e) {
          console.warn('Error destroying old Swiper:', e)
        }
      }

      // Initialize the Swiper
      new SwiperLib('.vcn-swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.vcn-custom-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.4,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 1.6,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 35,
          },
        },
        on: {
          slideChange() {
            activeIndex.value = this.realIndex !== undefined ? this.realIndex : this.activeIndex
          }
        }
      })
    } else {
      setTimeout(initSwiper, 100)
    }
  }
  initSwiper()
})
</script>

<template>
  <section class="vcn-testimonial-section">
    <div class="vcn-testimonial-container">
      <!-- Header -->
      <div class="vcn-testimonial-header">
        <h2 class="vcn-testimonial-title" v-html="title"></h2>
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
        
        <!-- Audio & Play Control Pill -->
        <div class="vcn-audio-controls-global">
          <!-- Sound Button -->
          <button class="vcn-audio-button" :class="{ muted: isMuted }" @click="toggleMute" aria-label="Toggle sound">
            <!-- Speaker Icon -->
            <svg v-if="!isMuted" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="white" />
            </svg>
            <svg v-else viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="white" />
            </svg>
          </button>

          <!-- Avatar -->
          <img :src="activeSlideAvatar" alt="User avatar" class="vcn-user-avatar-badge" />
        </div>

        <!-- Pagination -->
        <div class="vcn-custom-pagination"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vcn-testimonial-section {
  background: #fafbf8;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  transition: background 0.3s ease;
}

.vcn-testimonial-container {
  margin: 0 auto;
  max-width: 1200px;
}

.vcn-testimonial-header {
  text-align: left;
  margin-bottom: 50px;
  max-width: 800px;
}

.vcn-testimonial-title {
  font-size: 2.6rem;
  font-weight: 600;
  color: #1a321a;
  line-height: 1.25;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.vcn-testimonial-subtitle {
  font-size: 1.1rem;
  color: #4a5d4a;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
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
}

.vcn-testimonial-card {
  background: #2b3d2c;
  border-radius: 24px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  position: relative;
  aspect-ratio: 16/9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.vcn-testimonial-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
}

/* Audio Control Pill */
.vcn-audio-controls-global {
  position: relative;
  margin: 30px auto 20px auto;
  background: #eef1ea !important;
  border-radius: 100px !important;
  padding: 6px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: fit-content !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04) !important;
  border: 1px solid rgba(0, 0, 0, 0.61) !important;
}

.vcn-audio-button {
  width: 36px !important;
  height: 36px !important;
  background: #1c351c !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 50% !important;
  cursor: pointer !important;
  padding: 0 !important;
  transition: background 0.2s ease !important;
}

.vcn-audio-button:hover {
  background: #284c28 !important;
}

.vcn-audio-button svg {
  width: 18px !important;
  height: 18px !important;
}

.vcn-play-slide-button {
  background: #ffffff !important;
  color: #1c351c !important;
  border: none !important;
  border-radius: 100px !important;
  padding: 8px 18px !important;
  font-weight: 600 !important;
  font-size: 0.88rem !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.2s ease !important;
}

.vcn-play-slide-button:hover {
  background: #f7f9f5 !important;
  transform: translateY(-1px) !important;
}

.vcn-play-icon {
  font-size: 0.75rem !important;
}

.vcn-user-avatar-badge {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  border: 2px solid #ffffff !important;
  object-fit: cover !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
}

/* Custom Pagination */
.vcn-custom-pagination {
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* Default bullets */
.vcn-custom-pagination :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  border: 2px solid #1c351c;
  background: #1c351c;
  border-radius: 50%;
  opacity: 0.3;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Active bullet */
.vcn-custom-pagination :deep(.swiper-pagination-bullet-active) {
  background: transparent;
  border: 2px solid #1c351c;
  opacity: 1;
  transform: scale(1.1);
}

/* Responsive breakpoint overrides */
@media (min-width: 1400px) {
  .vcn-testimonial-section {
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 1399px) {
  .vcn-testimonial-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 991px) {
  .vcn-testimonial-section {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }
  
  .vcn-testimonial-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 768px) {
  .vcn-testimonial-section {
    background: #fafbf7 !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
  
  .vcn-testimonial-title {
    font-size: 1.9rem !important;
    line-height: 1.25 !important;
    margin-bottom: 12px !important;
  }
  
  .vcn-testimonial-subtitle {
    font-size: 1rem !important;
    color: #4a5d4a !important;
  }
  
  .vcn-testimonial-card {
    aspect-ratio: 1.5 !important; /* Horizontal rectangle: height shorter, width is larger */
    border-radius: 20px !important;
  }
  
  /* Hide Swiper dots on small screen to match screenshot design */
  .vcn-custom-pagination {
    display: none !important;
  }
  
  .vcn-audio-controls-global {
    margin-top: 24px !important;
  }
}

@media (max-width: 576px) {
  .vcn-testimonial-section {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  
  .vcn-testimonial-title {
    font-size: 1.7rem !important;
  }
}
</style>