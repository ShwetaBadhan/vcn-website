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