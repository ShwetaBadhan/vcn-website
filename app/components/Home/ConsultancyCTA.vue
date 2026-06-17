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
            <NuxtLink :to="ctaLink" class="view-more-btn" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
              {{ ctaText }}
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.mid-consultation-cta {
  background-color: #fff;
  padding: 80px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mid-cta-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.mid-cta-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.mid-cta-image-wrapper:hover .mid-cta-image {
  transform: scale(1.02);
}

.mid-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(25, 135, 84, 0.1) 100%);
  pointer-events: none;
}

.mid-cta-content {
  padding: 40px 0;
}

.mid-cta-heading {
  font-size: 46px;
  font-weight: 700;
  color: var(--vcn-primary);
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.mid-cta-text {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.view-more-btn {
  display: inline-block;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 991px) {
  .mid-consultation-cta {
    padding: 60px 0;
  }

  .mid-cta-heading {
    font-size: 42px;
  }

  .mid-cta-text {
    font-size: 16px;
  }

  .mid-cta-content {
    padding: 30px 0;
    text-align: left !important;
  }

  .mid-cta-image-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .mid-consultation-cta {
    padding: 50px 0;
  }

  .mid-cta-heading {
    font-size: 38px;
  }

  .mid-cta-text {
    font-size: 15px;
  }

  .view-more-btn {
    padding: 10px 24px !important;
    font-size: 14px !important;
  }
}

@media (max-width: 576px) {
  .mid-consultation-cta {
    padding: 40px 0;
  }

  .mid-cta-heading {
    font-size: 1.5rem !important;
  }

  .mid-cta-text {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  .view-more-btn {
    padding: 10px 20px !important;
    font-size: 14px !important;
    width: auto !important;
    max-width: none !important;
  }
}
</style>
