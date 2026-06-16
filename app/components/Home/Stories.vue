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
.vcn-stories-section {
  background-color: var(--vcn-base-bg);
  padding: 80px 20px;
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.vcn-stories-container {
  margin: 0 auto;
  max-width: 1400px;
}

/* ========== SECTION TITLE ========== */
.vcn-stories-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--vcn-primary);
  line-height: 1.3;
  margin-bottom: 50px;
  max-width: 600px;
}

/* ========== MEDIA GALLERY ========== */
.vcn-stories-media-gallery {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 5px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: auto;
  max-height: 340px;
}

.vcn-stories-media-gallery::-webkit-scrollbar {
  display: none;
}

.vcn-stories-media-gallery-track {
  display: flex;
  gap: 20px;
}

.vcn-stories-media-item {
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  max-height: 320px;
}

.vcn-stories-media-item:hover {
  transform: scale(1.05);
}

.vcn-stories-media-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Different sizes for gallery items */
.vcn-stories-media-item:nth-child(1) { width: 280px; height: 320px; }
.vcn-stories-media-item:nth-child(1) img { height: 320px; border-radius: 50%; }

.vcn-stories-media-item:nth-child(2) { width: 260px; height: 320px; }
.vcn-stories-media-item:nth-child(2) img { height: 320px; }

.vcn-stories-media-item:nth-child(3) { width: 280px; height: 320px; }
.vcn-stories-media-item:nth-child(3) img { height: 320px; }

.vcn-stories-media-item:nth-child(4) { width: 300px; height: 320px; }
.vcn-stories-media-item:nth-child(4) img { height: 150px; }

.vcn-stories-media-item:nth-child(5) { width: 260px; height: 320px; }
.vcn-stories-media-item:nth-child(5) img { height: 320px; }

.vcn-stories-media-item:nth-child(6) { width: 280px; height: 320px; }
.vcn-stories-media-item:nth-child(6) img { height: 320px; }

.vcn-stories-media-item:nth-child(7) { width: 280px; height: 320px; }
.vcn-stories-media-item:nth-child(7) img { height: 150px; }

/* Content Cards Grid */
.vcn-stories-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.vcn-stories-card {
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 40px;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.vcn-stories-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.vcn-stories-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.vcn-stories-card:hover::before {
  transform: scale(1.08);
}

.vcn-stories-card:nth-child(1)::before {
  background-image: url("/img/image/Section Above footer.png");
}

.vcn-stories-card:nth-child(2)::before {
  background-color: var(--vcn-primary);
  background-image: url("/img/stories/changeyourhealth.png");
}

.vcn-stories-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(69, 102, 60, 0.85) 0%, rgba(58, 95, 48, 0.75) 100%);
  z-index: 2;
}

.vcn-stories-card-content {
  position: relative;
  z-index: 3;
  color: var(--vcn-white);
}

.vcn-stories-card-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--vcn-white);
}

.vcn-stories-card-description {
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
}

.vcn-stories-card-btn {
  display: inline-block;
  padding: 14px 36px;
  background-color: var(--vcn-white);
  color: var(--vcn-primary);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.vcn-stories-card-btn::after {
  content: "→";
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.vcn-stories-card-btn:hover {
  background-color: var(--vcn-primary);
  color: var(--vcn-white);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  padding-right: 55px;
}

.vcn-stories-card-btn:hover::after {
  opacity: 1;
  right: 20px;
}

.vcn-stories-4 {
  border-radius: 100px;
}

/* Responsive Overrides */
@media (min-width: 1400px) {
  .vcn-stories-section {
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 1399px) {
  .vcn-stories-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 1200px) {
  .vcn-stories-title {
    font-size: 2.2rem;
  }
  .vcn-stories-cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 992px) {
  .vcn-stories-section {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .vcn-stories-title {
    font-size: 2rem;
  }
  .vcn-stories-card-title {
    font-size: 2rem;
  }
  .vcn-stories-media-item:nth-child(n) {
    width: 200px !important;
  }
  .vcn-stories-cards-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .vcn-stories-title {
    font-size: 1.8rem;
  }
  .vcn-stories-cards-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 15px;
  }
  .vcn-stories-card {
    min-height: 280px;
    padding: 24px 15px;
  }
  .vcn-stories-card-title {
    font-size: 1.25rem;
  }
  .vcn-stories-card-description {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  .vcn-stories-media-item:nth-child(1),
  .vcn-stories-media-item:nth-child(8) {
    width: 200px;
    height: 200px;
  }
  .vcn-stories-media-item:nth-child(2),
  .vcn-stories-media-item:nth-child(3),
  .vcn-stories-media-item:nth-child(4),
  .vcn-stories-media-item:nth-child(5),
  .vcn-stories-media-item:nth-child(6),
  .vcn-stories-media-item:nth-child(9),
  .vcn-stories-media-item:nth-child(10),
  .vcn-stories-media-item:nth-child(11),
  .vcn-stories-media-item:nth-child(12),
  .vcn-stories-media-item:nth-child(13) {
    width: 180px;
    height: 280px;
  }
  .vcn-stories-media-item:nth-child(7),
  .vcn-stories-media-item:nth-child(14) {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 576px) {
  .vcn-stories-section {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .vcn-stories-title {
    font-size: 1.5rem;
  }
  .vcn-stories-cards-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px;
  }
  .vcn-stories-card {
    min-height: 240px;
    padding: 16px 10px;
    border-radius: 16px;
  }
  .vcn-stories-card-title {
    font-size: 1.05rem;
  }
  .vcn-stories-card-description {
    font-size: 0.8rem;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  .vcn-stories-media-item:nth-child(n) {
    width: 150px !important;
  }
}

@media (max-width: 480px) {
  .vcn-stories-title {
    font-size: 1.4rem;
  }
  .vcn-stories-card-title {
    font-size: 0.95rem;
  }
  .vcn-stories-card {
    padding: 12px 8px;
    border-radius: 12px;
  }
}
</style>