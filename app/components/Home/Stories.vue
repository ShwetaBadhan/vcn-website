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
            <img src="/img/stories/story-2.png" alt="Story 1" loading="eager" />
          </div>

          <div class="vcn-stories-media-item">
            <img
              src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1753371915/library/scroller/Frame_1739333315.png"
              alt="Story 2" loading="eager" />
          </div>

          <div class="vcn-stories-media-item">
            <img
              src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1753371915/library/scroller/Frame_1739333315.png"
              alt="Story 3" loading="eager" />
          </div>

          <div class="vcn-stories-media-item">
            <img src="/img/stories/story-4.png" alt="Story 4" loading="eager" />
            <div class="vcn-stories-media-overlay">
              "Pushing the boundaries on what personal probabilities are
              within our reach is going beyond norms and..."
              <span class="vcn-stories-media-overlay-source">FAST COMPANY</span>
            </div>
          </div>

          <div class="vcn-stories-media-item">
            <img src="/img/stories/story-5.png" alt="Story 5" loading="eager" />
          </div>

          <div class="vcn-stories-media-item">
            <img src="/img/stories/story-6.png" alt="Story 6" loading="eager" />
          </div>
          <div class="vcn-stories-media-item">
            <div class="vcn-stories-media-overlay">
              "Seed Health is pioneering new science and microbial innovation
              that power impact for..."
              <span class="vcn-stories-media-overlay-source">FORBES</span>
            </div>
            <img src="/img/stories/story-7.png" alt="Story 7" loading="eager" />
          </div>
        </div>
      </div>

      <!-- Content Cards -->
      <div class="vcn-stories-cards-grid">
        <!-- Card 1 -->
        <div class="vcn-stories-card" data-aos="fade-up" data-aos-duration="400">
          <div class="vcn-stories-card-content">
            <h3 class="vcn-stories-card-title">Seed
              Labs</h3>
            <p class="vcn-stories-card-description">
              Because health is not just human.
            </p>
            <a href="/vcn-labs" class="vcn-stories-card-btn">Read More</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="vcn-stories-card" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
          <div class="vcn-stories-card-content">
            <h3 class="vcn-stories-card-title">Change your gut health.

            </h3>
            <p class="vcn-stories-card-description text-center">
              Feel lasting relief in one week with DS-01®


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