<script setup>
import { computed } from 'vue'
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
  if (items.length > 0) {
    return items.map(item => ({
      image: getCmsImageUrl(item.image, ''),
      alt: item.title || 'Customer testimonial'
    })).filter(s => s.image)
  }

  const sectionImage = getCmsImageUrl(section.value?.image, '')
  if (sectionImage) {
    return [{ image: sectionImage, alt: section.value?.title || 'Customer testimonial' }]
  }

  return [
    { image: '/img/testimonial/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/image/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/testimonial/testimonial.png', alt: 'Customer testimonial' },
    { image: '/img/image/testimonial.png', alt: 'Customer testimonial' }
  ]
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
          <img :src="slides[0]?.image || '/img/testimonial/testimonial.png'" alt="User avatar" class="vcn-user-avatar"
            id="vcn-avatar" />
        </div>

        <!-- Pagination -->
        <div class="vcn-custom-pagination"></div>
      </div>
    </div>
  </section>
</template>