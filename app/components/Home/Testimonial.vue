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

<style scoped>
.vcn-testimonial-section {
  background: linear-gradient(180deg, #e8f5e0 0%, #f0f8ec 100%);
  padding: 80px 20px;
  position: relative;
}

.vcn-testimonial-container {
  margin: 0 auto;
  max-width: 1200px;
}

.vcn-testimonial-header {
  text-align: center;
  margin-bottom: 50px;
}

.vcn-testimonial-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vcn-primary);
  line-height: 1.3;
  margin-bottom: 16px;
}

.vcn-testimonial-subtitle {
  font-size: 1rem;
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
}

.vcn-testimonial-card {
  background: #4a5d4a;
  border-radius: 24px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  position: relative;
  aspect-ratio: 16/9;
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
  margin: 30px auto 20px auto;
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
  margin-top: 30px;
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
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .vcn-testimonial-title {
    font-size: 1.85rem;
  }
  .vcn-testimonial-card {
    max-width: 100%;
    border-radius: 16px;
  }
  .vcn-testimonial-header {
    margin-bottom: 35px;
  }
}

@media (max-width: 576px) {
  .vcn-testimonial-section {
    padding: 40px 15px;
  }
  .vcn-testimonial-title {
    font-size: 1.45rem;
  }
  .vcn-testimonial-subtitle {
    font-size: 0.88rem;
  }
  .vcn-custom-pagination {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .vcn-testimonial-title {
    font-size: 1.35rem;
  }
  .vcn-audio-controls-global {
    margin-top: 20px;
  }
}
</style>