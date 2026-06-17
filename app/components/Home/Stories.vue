<script setup>
import { onMounted, onUnmounted, computed, watch, nextTick } from 'vue'
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

const getGalleryImage = (index) => {
  const images = galleryImages.value
  if (!images || images.length === 0) return ''
  return images[index % images.length]
}

onMounted(() => {
  const parallaxWrapper = document.querySelector('.vcn-stories-media-gallery-parallax')
  const sectionEl = document.querySelector('.vcn-stories-section')
  const galleryEl = document.querySelector('.vcn-stories-media-gallery')
  const trackEl = document.querySelector('.vcn-stories-media-gallery-track')

  if (!parallaxWrapper || !sectionEl) return

  let rafId = null
  let ticking = false

  const updateGallery = () => {
    const sectionRect = sectionEl.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
      const sectionProgress = (windowHeight - sectionRect.top) / (windowHeight + sectionRect.height)
      const maxMove = window.innerWidth < 768 ? 650 : window.innerWidth < 992 ? 1000 : 1600
      const moveAmount = sectionProgress * maxMove
      parallaxWrapper.style.transform = `translateX(-${moveAmount}px)`
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

  // Infinite scroll loop for horizontal swiping on mobile
  if (galleryEl && trackEl) {
    galleryEl.addEventListener('scroll', () => {
      const halfWidth = trackEl.scrollWidth / 2
      if (galleryEl.scrollLeft >= halfWidth) {
        galleryEl.scrollLeft -= halfWidth
      } else if (galleryEl.scrollLeft <= 0) {
        galleryEl.scrollLeft += halfWidth
      }
    }, { passive: true })
  }

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (rafId) cancelAnimationFrame(rafId)
  })

  // Refresh AOS when component mounts to make sure animations work
  nextTick(() => {
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
  })
})

watch(storyCards, () => {
  nextTick(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        easing: "ease-out",
        mirror: true,
      })
      window.AOS.refresh()
    }
  })
}, { deep: true })
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
        <div class="vcn-stories-media-gallery-parallax">
          <div class="vcn-stories-media-gallery-track">
            <template v-for="loop in 2" :key="loop">
              <!-- Col 1 -->
              <div class="vcn-stories-media-column col-tall">
                <div class="vcn-stories-media-item item-circle">
                  <img :src="cleanImageUrl(getGalleryImage(0))" alt="Story 1" loading="lazy" />
                </div>
              </div>

              <!-- Col 2 -->
              <div class="vcn-stories-media-column col-tall">
                <div class="vcn-stories-media-item item-tall-capsule">
                  <img :src="cleanImageUrl(getGalleryImage(1))" alt="Story 2" loading="lazy" />
                </div>
              </div>
              <!-- Col 4 -->
              <div class="vcn-stories-media-column col-stacked">
                <div class="vcn-stories-media-item item-oval">
                  <img :src="cleanImageUrl(getGalleryImage(3))" alt="Story 4" loading="lazy" />
                </div>
                <div class="vcn-stories-text-card card-light">
                  <div class="card-header">
                  </div>
                  <div class="card-body">
                    <p class="card-quote">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate
                      distinctio beatae illum quas odit."</p>
                  </div>
                  <div class="card-footer">
                    <span class="card-logo fast-company">FAST COMPANY</span>
                  </div>
                </div>
              </div>

              <!-- Col 5 -->
              <div class="vcn-stories-media-column col-tall">
                <div class="vcn-stories-media-item item-tall-capsule">
                  <img :src="cleanImageUrl(getGalleryImage(4))" alt="Story 5" loading="lazy" />
                </div>
              </div>

              <!-- Col 6 -->
              <div class="vcn-stories-media-column col-stacked">
                <div class="vcn-stories-text-card card-dark">
                  <div class="card-header">
                  </div>
                  <div class="card-body">
                    <p class="card-quote">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta
                      architecto dolores aut fuga magnam nobis sunt officiis rerum sequi."</p>
                  </div>
                  <div class="card-footer">
                    <span class="card-logo forbes">Forbes</span>
                  </div>
                </div>
                <div class="vcn-stories-media-item item-oval item-oval-lg">
                  <img :src="cleanImageUrl(getGalleryImage(5))" alt="Story 6" loading="lazy" />
                </div>
              </div>

              <!-- Col 7 -->
              <div class="vcn-stories-media-column col-stacked">
                <div class="vcn-stories-media-item item-oval">
                  <img :src="cleanImageUrl(getGalleryImage(6))" alt="Story 7" loading="lazy" />
                </div>
                <div class="vcn-stories-text-card card-light">
                  <div class="card-header">
                  </div>
                  <div class="card-body">
                    <p class="card-quote">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate distinctio
                      beatae illum quas odit."</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Content Cards -->
      <div class="vcn-stories-cards-grid">
        <div v-for="(card, i) in storyCards" :key="i" data-aos="fade-up"
          data-aos-duration="400" :data-aos-delay="i * 100" style="display: flex; flex-direction: column;">
          <div class="vcn-stories-card" style="width: 100%; height: 100%;">
            <div class="vcn-stories-card-content">
              <h3 class="vcn-stories-card-title">{{ card.title }}</h3>
              <p class="vcn-stories-card-description">
                {{ card.description }}
              </p>
              <NuxtLink :to="card.buttonLink" class="vcn-stories-card-btn">{{ card.buttonText }}</NuxtLink>
            </div>
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
  font-size: 3.2rem !important;
  font-weight: 600;
  color: var(--vcn-primary);
  line-height: 1.3;
  margin-bottom: 50px;
  max-width: 800px;
}

/* ========== MEDIA GALLERY ========== */
.vcn-stories-media-gallery {
  display: flex;
  margin-bottom: 50px;
  overflow-x: auto;
  padding: 10px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: auto;
}


.vcn-stories-media-gallery::-webkit-scrollbar {
  display: none;
}

.vcn-stories-media-gallery-track {
  display: flex;
  gap: 36px;
  align-items: center;
  will-change: transform;
}

.vcn-stories-media-gallery-parallax {
  will-change: transform;
}

.vcn-stories-media-column {
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-shrink: 0;
  justify-content: center;
}

.col-tall {
  width: 290px !important;
}

.col-stacked {
  width: 320px !important;
}

.vcn-stories-media-item {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
}

.vcn-stories-media-item:hover {
  transform: scale(1.03);
}

.vcn-stories-media-item img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
}

.item-tall-capsule {
  height: 460px;
  border-radius: 32px;
}

.item-circle {
  height: 290px;
  border-radius: 50%;
}

.item-oval {
  height: 290px;
  border-radius: 50%;
}

.item-oval-lg {
  height: 240px;
}

.vcn-stories-media-item .card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(18, 36, 16, 0.95) 0%, rgba(18, 36, 16, 0.5) 80%, transparent 100%);
  padding: 40px 20px 20px 20px;
  color: #ffffff;
  z-index: 2;
  box-sizing: border-box;
}

.vcn-stories-media-item .card-quote {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
}

/* ========== TEXT CARDS IN GALLERY ========== */
.vcn-stories-text-card {
  height: 220px;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.vcn-stories-text-card:hover {
  transform: scale(1.03);
}

.vcn-stories-text-card.card-light {
  background-color: #f2f2ef;
  color: #1a3417;
}

.vcn-stories-text-card.card-dark {
  background-color: #122410;
  color: #ffffff;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.card-share-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.card-light .card-share-btn {
  background-color: rgba(0, 0, 0, 0.05);
  color: #1a3417;
}

.card-light .card-share-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.card-dark .card-share-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.card-dark .card-share-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.card-body {
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.card-quote {
  font-size: 0.95rem;
  line-height: 1.45;
  font-weight: 500;
  margin: 0;
  text-align: left;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.card-logo {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.card-logo.fast-company {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.card-logo.forbes {
  font-family: 'Georgia', serif;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -0.2px;
}

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
    font-size: 2.8rem !important;
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
    font-size: 2.5rem !important;
  }

  .vcn-stories-card-title {
    font-size: 2.2rem !important;
  }

  .vcn-stories-media-gallery-track {
    gap: 32px;
  }

  .vcn-stories-media-column {
    gap: 24px;
  }

  .col-tall {
    width: 275px !important;
  }

  .col-stacked {
    width: 305px !important;
  }

  .item-tall-capsule {
    height: 450px;
    border-radius: 24px;
  }

  .item-circle {
    height: 330px;
  }

  .item-oval {
    height: 320px;
  }

  .item-oval-lg {
    height: 300px;
  }

  .vcn-stories-text-card {
    height: 180px;
    border-radius: 18px;
    padding: 16px;
  }

  .card-quote {
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .card-logo {
    font-size: 1rem;
  }

  .card-share-btn {
    width: 30px;
    height: 30px;
  }
  .vcn-stories-media-item .card-body {
    padding: 24px 12px 12px 12px;
  }
  .vcn-stories-media-item .card-quote {
    font-size: 0.75rem;
    line-height: 1.35;
  }

  .vcn-stories-cards-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .vcn-stories-card {
    min-height: 480px !important;
  }
}

@media (max-width: 768px) {
  .vcn-stories-title {
    font-size: 2.5rem !important;
  }

  .vcn-stories-cards-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  .vcn-stories-card {
    min-height: 420px !important;
    padding: 40px 24px !important;
  }

  .vcn-stories-card-title {
    font-size: 2.0rem !important;
  }

  .vcn-stories-card-description {
    font-size: 1.1rem !important;
    margin-bottom: 24px !important;
  }

  .vcn-stories-card-btn {
    padding: 12px 30px !important;
  }

  .vcn-stories-media-gallery-track {
    gap: 28px;
  }

  .vcn-stories-media-column {
    gap: 22px;
  }

  .col-tall {
    width: 235px !important;
  }

  .col-stacked {
    width: 265px !important;
  }

  .item-tall-capsule {
    height: 390px;
    border-radius: 18px;
  }

  .item-circle {
    height: 290px;
  }

  .item-oval {
    height: 300px;
  }

  .item-oval-lg {
    height: 280px;
  }

  .vcn-stories-text-card {
    height: 150px;
    border-radius: 14px;
    padding: 12px;
  }

  .card-quote {
    font-size: 0.72rem;
    line-height: 1.3;
  }

  .card-logo {
    font-size: 0.85rem;
  }

  .card-share-btn {
    width: 24px;
    height: 24px;
  }
  .vcn-stories-media-item .card-body {
    padding: 20px 10px 10px 10px;
  }
  .vcn-stories-media-item .card-quote {
    font-size: 0.65rem;
    line-height: 1.3;
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
    font-size: 2.1rem !important;
  }

  .vcn-stories-cards-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }

  .vcn-stories-card {
    min-height: 380px !important;
    padding: 30px 20px !important;
    border-radius: 20px !important;
  }

  .vcn-stories-card-title {
    font-size: 1.8rem !important;
  }

  .vcn-stories-card-description {
    font-size: 1.0rem !important;
    margin-bottom: 20px !important;
    line-height: 1.5 !important;
  }

  .vcn-stories-card-btn {
    padding: 10px 24px !important;
  }

  .vcn-stories-media-gallery-track {
    gap: 24px;
  }

  .vcn-stories-media-column {
    gap: 20px;
  }

  .col-tall {
    width: 275px !important;
  }

  .col-stacked {
    width: 310px !important;
  }

  .item-tall-capsule {
    height: 420px;
    width: 370;
    border-radius: 14px;
  }

  .item-circle {
    height: 250px;
  }

  .item-oval {
    height: 270px;
  }

  .item-oval-lg {
    height: 260px;
  }

  .vcn-stories-text-card {
    height: 125px;
    border-radius: 10px;
    padding: 8px;
  }

  .card-quote {
    font-size: 0.8rem;
    line-height: 1.25;
  }

  .card-logo {
    font-size: 0.7rem;
  }

  .card-share-btn {
    width: 20px;
    height: 20px;
  }
  .vcn-stories-media-item .card-body {
    padding: 16px 8px 8px 8px;
  }
  .vcn-stories-media-item .card-quote {
    font-size: 0.55rem;
    line-height: 1.25;
  }
}

@media (max-width: 480px) {
  .vcn-stories-title {
    font-size: 1.9rem !important;
  }

  .vcn-stories-card-title {
    font-size: 1.6rem !important;
  }

  .vcn-stories-card {
    padding: 24px 16px !important;
    border-radius: 16px !important;
  }
}
</style>