<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

const section = computed(() => cmsStore.getSectionByKey('stories'))

const title = computed(() => section.value?.title || 'Stories from scientists, innovators, and members like you.')
const bgImage = computed(() => getCmsImageUrl(section.value?.backgroundImage, ''))

// Gallery images from CMS items (first 7), fallback to hardcoded
const galleryImages = computed(() => {
  const items = section.value?.items || []
  const cmsImages = items
    .filter(item => item.image)
    .map(item => getCmsImageUrl(item.image, ''))
    .filter(Boolean)
  if (cmsImages.length >= 4) return cmsImages.slice(0, 7)
  return [
    '/img/image/Stories from scientists  806.png',
    '/img/image/Stories from scientists  552by 864.png',
    '/img/image/Stories from scientists  806.png',
    '/img/image/Stories from scientists  644.png',
    '/img/image/Stories from scientists  552by 864.png',
    '/img/image/Stories from scientists  806.png',
    '/img/image/Stories from scientists  644.png'
  ]
})

// Content cards from CMS items with card data, fallback to hardcoded
const storyCards = computed(() => {
  const items = section.value?.items || []
  const cards = items
    .filter(item => item.title || item.description)
    .map(item => ({
      title: item.title || '',
      description: item.description || '',
      buttonText: item.extraData?.buttonText || item.config?.buttonText || 'Read More',
      buttonLink: item.extraData?.buttonLink || item.config?.buttonLink || '/vcn-R-D'
    }))
  if (cards.length >= 2) return cards.slice(0, 2)
  return [
    { title: 'VCN R&D', description: 'Because health is not just human.', buttonText: 'Read More', buttonLink: '/vcn-R-D' },
    { title: 'BUSINESS OPPORTUNITY', description: 'Feel lasting relief in one week with VCN-01', buttonText: 'Shop Now', buttonLink: '/product-details' }
  ]
})

// Clean image URLs by removing & characters and fixing backslashes
const cleanImageUrl = (url) => {
  if (!url) return ''
  return url.replace(/&/g, '').replace(/\\/g, '/')
}

onMounted(() => {
  const gallery = document.querySelector('.vcn-stories-media-gallery-track')
  const sectionEl = document.querySelector('.vcn-stories-section')

  if (!gallery || !sectionEl) return

  let rafId = null
  let ticking = false

  const updateGallery = () => {
    const sectionRect = sectionEl.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
      const sectionProgress = (windowHeight - sectionRect.top) / (windowHeight + sectionRect.height)
      const moveAmount = sectionProgress * 800
      gallery.style.transform = `translateX(-${moveAmount}px)`
    }
    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(updateGallery)
      ticking = true
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  updateGallery()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (rafId) cancelAnimationFrame(rafId)
  })
})
</script>

<template>
  <!-- Stories Section -->
  <section class="vcn-stories-section" :style="bgImage ? { backgroundImage: `url(${bgImage})` } : {}">
    <div class="vcn-stories-container">
      <!-- Section Title -->
      <h2 class="vcn-stories-title" data-aos="fade-up" data-aos-duration="400">
        {{ title }}
      </h2>

      <!-- Media Gallery (Images/Videos) -->
      <div class="vcn-stories-media-gallery">
        <div class="vcn-stories-media-gallery-track">
          <div v-for="(img, i) in galleryImages" :key="i" class="vcn-stories-media-item">
            <img :src="cleanImageUrl(img)" :alt="`Story ${i + 1}`" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Content Cards -->
      <div class="vcn-stories-cards-grid">
        <div v-for="(card, i) in storyCards" :key="i" class="vcn-stories-card" data-aos="fade-up"
          data-aos-duration="400" :data-aos-delay="i * 100">
          <div class="vcn-stories-card-content">
            <h3 class="vcn-stories-card-title">{{ card.title }}</h3>
            <p class="vcn-stories-card-description">
              {{ card.description }}
            </p>
            <a :href="card.buttonLink" class="vcn-stories-card-btn">{{ card.buttonText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vcn-stories-4 {
  border-radius: 100px;
}
</style>