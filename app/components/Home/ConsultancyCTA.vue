<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

const section = computed(() => cmsStore.getSectionByKey('consultancy-cta'))

const heading = computed(() => section.value?.title || 'Need help achieving your health goals?')
const text = computed(() => section.value?.description || 'Schedule or consult with us today.')
const ctaText = computed(() => section.value?.buttonText || 'Consult now for free')
const ctaLink = computed(() => section.value?.buttonLink || '/book-consultancy')
const image = computed(() => getCmsImageUrl(section.value?.image, '/img/image/consultion.png'))
const bgImage = computed(() => getCmsImageUrl(section.value?.backgroundImage, ''))
</script>

<template>
  <section class="mid-consultation-cta py-5" :style="bgImage ? { backgroundImage: `url(${bgImage})` } : {}">
    <div class="container">
      <div class="row align-items-center g-4">

        <!-- Left Column - Image -->
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="mid-cta-image-wrapper position-relative">
            <img :src="image" alt="Doctor with stethoscope" class="img-fluid rounded mid-cta-image">
            <div class="mid-image-overlay"></div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="mid-cta-content ps-lg-5">
            <h2 class="mid-cta-heading mb-3" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
              {{ heading }}
            </h2>
            <p class="mid-cta-text mb-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              {{ text }}
            </p>
            <a :href="ctaLink" class="view-more-btn" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
              {{ ctaText }}
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
