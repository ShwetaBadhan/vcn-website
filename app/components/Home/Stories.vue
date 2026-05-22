<template>
  <!-- Stories Section -->
  <section class="vcn-stories-section">
    <div class="vcn-stories-container">
      <!-- Section Title -->
      <h2 class="vcn-stories-title" data-aos="fade-up" data-aos-duration="400">
        Stories from scientists, innovators, and members like you.
      </h2>

      <!-- Media Gallery (Images/Videos) -->
      <div class="vcn-stories-media-gallery">
        <div class="vcn-stories-media-gallery-track">
          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  806.png')" alt="Story 1" loading="lazy" />
          </div>

          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  552by 864.png')" alt="Story 2"
              loading="lazy" />
          </div>

          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  806.png')" alt="Story 3" loading="lazy" />
          </div>

          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  644.png')" alt="Story 4" class="vcn-stories-4"
              loading="lazy" />
            <div class="vcn-stories-media-overlay">
              "Pushing the boundaries on what personal probabilities are
              within our reach is going beyond norms and..."
              <span class="vcn-stories-media-overlay-source">FAST COMPANY</span>
            </div>
          </div>

          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  552by 864.png')" alt="Story 5"
              loading="lazy" />
          </div>

          <div class="vcn-stories-media-item">
            <img :src="cleanImageUrl('/img/image/Stories from scientists  806.png')" alt="Story 6" loading="lazy" />
          </div>
          <div class="vcn-stories-media-item">
            <div class="vcn-stories-media-overlay">
              "VCN Health is pioneering new science and microbial innovation
              that power impact for..."
              <span class="vcn-stories-media-overlay-source">FORBES</span>
            </div>
            <img :src="cleanImageUrl('/img/image/Stories from scientists  644.png')" alt="Story 7" class="vcn-stories-4"
              loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Content Cards -->
      <div class="vcn-stories-cards-grid">
        <!-- Card 1 -->
        <div class="vcn-stories-card" data-aos="fade-up" data-aos-duration="400">
          <div class="vcn-stories-card-content">
            <h3 class="vcn-stories-card-title">“VCN R&D</h3>
            <p class="vcn-stories-card-description">
              Because health is not just human.
            </p>
            <a href="/vcn-labs" class="vcn-stories-card-btn">Read More</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="vcn-stories-card" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
          <div class="vcn-stories-card-content">
            <h3 class="vcn-stories-card-title">BUSINESS OPPORTUNITY
            </h3>
            <p class="vcn-stories-card-description text-center">
              Feel lasting relief in one week with VCN-01


            </p>
            <a href="/product-details" class="vcn-stories-card-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// Clean image URLs by removing & characters and fixing backslashes
const cleanImageUrl = (url) => {
  return url.replace(/&/g, '').replace(/\\/g, '/')
}

onMounted(() => {
  const gallery = document.querySelector('.vcn-stories-media-gallery-track')
  const section = document.querySelector('.vcn-stories-section')

  if (!gallery || !section) return

  let rafId = null
  let ticking = false

  const updateGallery = () => {
    const sectionRect = section.getBoundingClientRect()
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

<style scoped>
.vcn-stories-4 {
  border-radius: 100px;
}
</style>