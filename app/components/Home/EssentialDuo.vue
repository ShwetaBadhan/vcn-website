<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()
const offers = computed(() =>
  cmsStore.getPageSection('home', 'offers')
)
</script>

<template>
  <!-- Co-Biotics Section -->
    <section class="vcn-cobiotics-section" :style=" { backgroundImage: `url(${offers.backgroundImage})` } ">
      <div class="vcn-cobiotics-container">
        <!-- Left Content -->
        <div class="vcn-cobiotics-content" data-aos="fade-up" data-aos-duration="400">
          <span class="vcn-cobiotics-badge" data-aos="fade-up" data-aos-duration="400">{{ offers.leftContent.badge
            }}</span>
          <h2 class="vcn-cobiotics-title" data-aos="fade-up" data-aos-duration="400">
            {{ offers.leftContent.title }}
          </h2>
          <p class="vcn-cobiotics-description" data-aos="fade-up" data-aos-duration="400">
            {{ offers.leftContent.description }}
          </p>
          <NuxtLink :to="offers.leftContent.buttonLink" class="vcn-cobiotics-cta-btn" data-aos="fade-up"
            data-aos-duration="400">{{ offers.leftContent.buttonText }}
          </NuxtLink>
        </div>

        <!-- Right Images -->
        <div class="vcn-cobiotics-images-wrapper" data-aos="fade-up" data-aos-duration="400">
          <!-- Main Products Display -->
          <div class="vcn-cobiotics-main-image">
            <img :src="offers.rightContent.mainImage" alt="Co-Biotics Products" loading="eager" />
          </div>

          <!-- Bottom Thumbnails -->
          <div class="vcn-cobiotics-thumbnails-grid">
            <div v-for="(thumb, i) in offers.rightContent.thumbnails" :key="i" class="vcn-cobiotics-thumbnail-box"
              data-aos="zoom-in" data-aos-duration="400">
              <img :src="thumb" :alt="`Product ${i + 2}`" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
@media (max-width: 991px) {
  /* Reduce gap from hero section */
  .vcn-cobiotics-section {
    padding-top: 25px !important;
  }

  /* Increase font size of heading */
  .vcn-cobiotics-title {
    font-size: 3.2rem !important;
  }

  /* Increase size of main image */
  .vcn-cobiotics-main-image img {
    width: 100% !important;
    max-width: 500px !important;
    margin: 0 auto !important;
    display: block !important;
  }

  /* Show other thumbnail images in 3 columns */
  .vcn-cobiotics-thumbnails-grid {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 15px !important;
    max-width: 500px !important;
    margin: 0 auto !important;
  }
  
  .vcn-cobiotics-thumbnail-box {
    aspect-ratio: 1 / 1 !important;
    width: 100% !important;
    height: auto !important;
  }
}

@media (max-width: 768px) {
  .vcn-cobiotics-title {
    font-size: 2.8rem !important;
  }
}

@media (max-width: 576px) {
  .vcn-cobiotics-title {
    font-size: 2.4rem !important;
  }
}
</style>