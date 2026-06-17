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
      <NuxtLink :to="hero.buttonLink" class="hero-btn">{{ hero.buttonText }}</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* ========== HERO SECTION ========== */
.hero-section {
  height: 100vh;
  height: 100dvh; /* dynamic viewport height — respects mobile browser chrome */
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
  object-position: center center;
  z-index: 1;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

.hero-cms-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  z-index: 2;
}

/* ========== HERO CONTENT ========== */
.hero-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 3;
  max-width: 680px;
  padding: 0 5%;
  /* Push content down to clear the fixed header stack */
  margin-top: calc((var(--top-header-height, 28px) + 70px) / 2);
}

.hero-content h1 {
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: clamp(1.6rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 1.2rem;
  letter-spacing: -0.5px;
  color: white;
}

.hero-content p {
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  text-align: left;
}

.hero-btn {
  display: inline-block;
  padding: 14px 38px;
  background: white;
  color: var(--vcn-primary, #5e6c1f);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 3;
  white-space: nowrap;
}

.hero-btn:hover {
  background: var(--vcn-primary, #5e6c1f);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* ==========================================
   RESPONSIVE BREAKPOINTS — full screen on every device
   ========================================== */

/* Large screens ≥ 1200px */
@media (min-width: 1200px) {
  .hero-content {
    max-width: 700px;
    padding: 0 6%;
  }
}

/* Laptop / Desktop 992px – 1199px */
@media (max-width: 1199px) and (min-width: 992px) {
  .hero-content {
    max-width: 600px;
  }
}

/* Tablets portrait 768px – 991px */
@media (max-width: 991px) and (min-width: 768px) {
  .hero-section {
    height: 100vh !important;
    height: 100dvh !important;
    min-height: 650px !important;
  }
  .hero-content {
    max-width: 82%;
    padding: 0 32px;
    margin-top: calc((var(--top-header-height, 26px) + 60px) / 2);
  }
  .hero-content h1 {
    font-size: 3.2rem;
    margin-bottom: 1.4rem;
  }
  .hero-content p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .hero-btn {
    padding: 16px 44px;
    font-size: 1.15rem;
  }
}

/* Mobile landscape & small tablets (576px – 767px) */
@media (max-width: 767px) and (min-width: 576px) {
  .hero-section {
    height: 100vh !important;
    height: 100dvh !important;
    min-height: 600px !important;
  }
  .hero-content {
    max-width: 92%;
    padding: 0 26px;
    margin-top: calc((var(--top-header-height, 24px) + 55px) / 2);
  }
  .hero-content h1 {
    font-size: 2.8rem;
    margin-bottom: 1.3rem;
  }
  .hero-content p {
    font-size: 1.25rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }
  .hero-btn {
    padding: 15px 40px;
    font-size: 1.1rem;
  }
}

/* Mobile portrait (381px – 575px) */
@media (max-width: 575px) and (min-width: 381px) {
  .hero-section {
    height: 100vh !important;
    height: 100dvh !important;
    min-height: 550px !important;
  }
  .hero-content {
    max-width: 94%;
    padding: 0 20px;
    margin-top: calc((var(--top-header-height, 24px) + 50px) / 2);
  }
  .hero-content h1 {
    font-size: 2.4rem;
    margin-bottom: 1.1rem;
    line-height: 1.15;
  }
  .hero-content p {
    font-size: 1.18rem;
    margin-bottom: 1.6rem;
    line-height: 1.55;
  }
  .hero-btn {
    padding: 14px 36px;
    font-size: 1.05rem;
  }
}

/* Extra-small mobile (≤ 380px — e.g. iPhone SE) */
@media (max-width: 380px) {
  .hero-section {
    height: 100vh !important;
    height: 100dvh !important;
    min-height: 500px !important;
  }
  .hero-content {
    max-width: 96%;
    padding: 0 16px;
    margin-top: calc((var(--top-header-height, 22px) + 48px) / 2);
  }
  .hero-content h1 {
    font-size: 2.1rem;
    margin-bottom: 1rem;
    letter-spacing: 0;
    line-height: 1.18;
  }
  .hero-content p {
    font-size: 1.1rem;
    margin-bottom: 1.4rem;
    line-height: 1.5;
  }
  .hero-btn {
    padding: 13px 32px;
    font-size: 0.98rem;
  }
}

/* Landscape phones — compact layout to avoid overflow */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-section {
    height: 100vh;
    height: 100dvh;
    min-height: 320px;
  }
  .hero-content {
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    padding: 0 5%;
    max-width: 65%;
  }
  .hero-content h1 {
    font-size: clamp(1.2rem, 3.5vw, 1.7rem);
    margin-bottom: 0.5rem;
  }
  .hero-content p {
    font-size: clamp(0.82rem, 1.8vw, 1rem);
    margin-bottom: 0.9rem;
    line-height: 1.4;
  }
  .hero-btn {
    padding: 9px 22px;
    font-size: 0.88rem;
  }
}
</style>