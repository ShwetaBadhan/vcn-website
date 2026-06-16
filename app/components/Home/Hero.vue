<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()
const hero = computed(() =>
  cmsStore.getPageSection('home', 'hero')
)
</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section">
    <!-- CMS Video (if CMS provides videoUrl) -->
    <video v-if="hero.videoUrl" :src="hero.videoUrl" type="video/mp4" autoplay muted loop playsinline class="video-bg"
      preload="metadata"></video>

    <!-- CMS Background Image (if CMS has background image, no video) -->
    <div v-else-if="hero.backgroundImage" class="hero-bg-image"
      :style="{ backgroundImage: `url(${hero.backgroundImage})` }"></div>

    <!-- CMS Desktop Image (if CMS has image, no video/bg) -->
    <img v-else-if="hero.image" :src="hero.image" :alt="hero.image?.altText || 'Hero'" class="hero-cms-image" />

    <!-- Default fallback video -->
    <video v-else src="/video/vcnCoverVideo.mp4" type="video/mp4" autoplay muted loop playsinline class="video-bg"
      preload="metadata"></video>

    <!-- Overlay -->
    <div class="overlay"></div>

    <!-- Hero Content - Left Aligned -->
    <div class="hero-content">
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.description }}</p>
      <a :href="hero.buttonLink" class="hero-btn">{{ hero.buttonText }}</a>
    </div>
  </section>
</template>

<style scoped>
/* ========== HERO SECTION ========== */
.hero-section {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-cms-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 100%);
  z-index: 2;
}

/* ========== HERO CONTENT ========== */
.hero-content {
  position: absolute;
  top: 60%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  max-width: 650px;
  padding: 0 5%;
}

.hero-content h1 {
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  color: white;
}

.hero-content p {
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  text-align: justify;
}

.hero-btn {
  display: inline-block;
  padding: 16px 40px;
  background: white;
  color: var(--vcn-primary, #5E6C1F);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 3;
}

.hero-btn:hover {
  background: var(--vcn-primary, #5E6C1F);
  color: white;
  transform: translateY(-2px);
}

/* ==========================================
   RESPONSIVE LAYOUT BREAKPOINTS
   ========================================== */

/* Large screens: 1200px and up */
@media (min-width: 1200px) {
  .hero-content {
    max-width: 650px;
  }
}

/* Laptop / Desktop: 992px - 1199px */
@media (max-width: 1199px) and (min-width: 992px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }
  .hero-content p {
    font-size: 1.2rem;
  }
}

/* Tablets / iPads: 768px - 991px */
@media (max-width: 991px) and (min-width: 768px) {
  .hero-section {
    height: 80vh;
    min-height: 550px;
  }
  .hero-content {
    top: 55%;
    max-width: 85%;
    padding: 0 30px;
  }
  .hero-content h1 {
    font-size: 2.4rem;
  }
  .hero-content p {
    font-size: 1.1rem;
    line-height: 1.5;
  }
}

/* Mobile Large: 481px - 576px / Small mobile: 577px - 767px */
@media (max-width: 767px) and (min-width: 481px) {
  .hero-section {
    height: 75vh;
    min-height: 500px;
  }
  .hero-content {
    top: 50%;
    max-width: 90%;
    padding: 0 20px;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 1rem;
    line-height: 1.45;
  }
  .hero-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

/* Extra Small Mobile: 320px - 480px */
@media (max-width: 480px) {
  .hero-section {
    height: 70vh;
    min-height: 480px;
  }
  .hero-content {
    top: 50%;
    max-width: 95%;
    padding: 0 15px;
  }
  .hero-content h1 {
    font-size: 1.6rem;
    line-height: 1.25;
    margin-bottom: 1rem;
  }
  .hero-content p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1.2rem;
  }
  .hero-btn {
    padding: 10px 24px;
    font-size: 0.85rem;
  }
}
</style>