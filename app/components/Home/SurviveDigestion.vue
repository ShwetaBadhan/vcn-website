<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const probiotics = computed(() =>
  cmsStore.getPageSection('home', 'probiotics')
)

// const section = computed(() => cmsStore.getSectionByKey('probiotics'))

// const brandTag = computed(() => section.value?.title || 'ViaCapsi Technology')
// const heading = computed(() => section.value?.subtitle || 'Natural Solutions for Better Living')
// const productImage = computed(() => getCmsImageUrl(section.value?.image, '/gif/Capsule-GIF-2.gif'))
// const bgImage = computed(() => getCmsImageUrl(section.value?.backgroundImage, ''))

// Callout texts from config or extraData, fallback to hardcoded
// const callouts = computed(() => {
//   const cfg = section.value?.config || {}
//   const extra = section.value?.extraData || {}
//   return {
//     topTitle: cfg.topCalloutTitle || extra.topCalloutTitle || 'Outer Capsule',
//     topText: cfg.topCalloutText || extra.topCalloutText || 'Prepared with natural ingredients to support overall wellness and body balance',
//     bottomTitle: cfg.bottomCalloutTitle || extra.bottomCalloutTitle || 'Inner Capsule',
//     bottomText: cfg.bottomCalloutText || extra.bottomCalloutText || 'Formulated using natural sources to promote everyday digestive comfort and internal balance'
//   }
// })
</script>

<template>
  <!-- Probiotic Info Section -->
  <section class="vcn-probiotic-info-section" :style=" { backgroundImage: `url(${probiotics.backgroundImage})`}">
    <div class="vcn-probiotic-container">
      <div class="vcn-probiotic-content-wrapper">
        <!-- Left Content -->
        <div class="vcn-probiotic-left-content" data-aos="fade-up" data-aos-duration="400">
          <div class="vcn-probiotic-heading-group">
            <div class="vcn-probiotic-brand-tag" data-aos="fade-up" data-aos-duration="400">
              {{ probiotics.leftContent.brandTag }}
            </div>

            <h2 class="vcn-probiotic-main-heading" data-aos="fade-up" data-aos-duration="400">
              {{ probiotics.leftContent.heading }}
            </h2>
          </div>

          <div class="vcn-probiotic-stat-box" data-aos="zoom-in" data-aos-duration="400">
            <div class="vcn-probiotic-stat-label-wrapper">
              <span class="vcn-probiotic-stat-badge">{{probiotics.leftContent.statBox.badge}}</span>
              <span class="vcn-probiotic-stat-text">{{probiotics.leftContent.statBox.label}}</span>
            </div>

            <div class="vcn-probiotic-stat-divider"></div>

            <div class="vcn-probiotic-stat-number-wrapper">
              <div class="vcn-probiotic-stat-icon">{{probiotics.leftContent.statBox.icon}}</div>

              <span class="vcn-probiotic-stat-number">{{probiotics.leftContent.statBox.value}}</span>
              <span class="vcn-probiotic-stat-multiplier">{{probiotics.leftContent.statBox.multiplier}}</span>
            </div>
          </div>

          <p class="vcn-probiotic-disclaimer">
            {{probiotics.leftContent.disclaimer}}
          </p>
        </div>

        <div class="vcn-probiotic-right-content" data-aos="fade-up" data-aos-duration="400">
          <div class="vcn-probiotic-product-display">
            <div class="vcn-probiotic-callout vcn-probiotic-callout-top" data-aos="fade-up" data-aos-duration="400">
              <div class="vcn-probiotic-callout-title">{{ probiotics.rightContent.topCallout.title }}</div>
              <div class="vcn-probiotic-callout-text">
                {{ probiotics.rightContent.topCallout.text }}
              </div>
            </div>

            <img :src="probiotics.rightContent.productImage" alt="V-Heldi Curcumin" class="vcn-probiotic-product-image" loading="eager" />

            <div class="vcn-probiotic-callout vcn-probiotic-callout-bottom" data-aos="fade-up" data-aos-duration="400">
              <div class="vcn-probiotic-callout-title">{{ probiotics.rightContent.bottomCallout.title }}</div>
              <div class="vcn-probiotic-callout-text">
                {{ probiotics.rightContent.bottomCallout.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Increase capsule image size by 10px on desktop */
.vcn-probiotic-product-image {
  width: 360px !important;
}

.vcn-probiotic-heading-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Mobile responsive adjustments */
@media (max-width: 991px) {
  .vcn-probiotic-left-content {
    display: contents !important;
  }

  .vcn-probiotic-right-content {
    display: contents !important;
  }

  .vcn-probiotic-heading-group {
    order: 1 !important;
    gap: 20px;
    width: 100% !important;
  }

  .vcn-probiotic-main-heading {
    font-size: 2.5rem !important;
  }

  .vcn-probiotic-product-display {
    order: 2 !important;
    min-height: 290px !important;
    position: relative !important;
    display: block !important;
    width: 100% !important;
    margin: 10px 0 !important;
  }

  .vcn-probiotic-stat-box {
    order: 3 !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 15px !important;
    width: 100% !important;
  }

  .vcn-probiotic-stat-divider {
    width: 1px !important;
    height: 50px !important;
    background-color: rgba(255, 255, 255, 0.2) !important;
  }

  .vcn-probiotic-disclaimer {
    order: 4 !important;
  }

  .vcn-probiotic-product-image {
    position: absolute !important;
    left: auto !important;
    right: -50px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 85% !important;
    max-width: 650px !important;
    height: auto !important;
    object-fit: contain !important;
    z-index: 5 !important;
  }

  .vcn-probiotic-callout {
    position: absolute !important;
    width: 45% !important;
    padding: 0 !important;
    padding-top: 15px !important;
    background: transparent !important;
    border: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    display: flex !important;
    flex-direction: column !important;
    z-index: 10 !important;
  }

  .vcn-probiotic-callout-top {
    top: 10% !important;
    left: 0 !important;
  }

  .vcn-probiotic-callout-bottom {
    top: 68% !important;
    left: 0 !important;
  }

  /* Connecting lines on mobile relative to the callouts themselves */
  .vcn-probiotic-callout-top::before,
  .vcn-probiotic-callout-bottom::before {
    content: "" !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important; /* extends to the end of the callout */
    height: 1px !important;
    background-color: rgba(255, 255, 255, 0.4) !important;
    background-image: none !important;
    rotate: 0deg !important;
    bottom: auto !important;
    right: auto !important;
    z-index: 10 !important;
    display: block !important;
  }

  /* White dots at the end of the lines relative to the callouts */
  .vcn-probiotic-callout-top::after,
  .vcn-probiotic-callout-bottom::after {
    content: "" !important;
    position: absolute !important;
    top: -2.5px !important;
    right: -2px !important; /* places dot exactly at the end of the line */
    left: auto !important;
    width: 6px !important;
    height: 6px !important;
    background-color: #fff !important;
    border-radius: 50% !important;
    z-index: 11 !important;
    display: block !important;
    box-sizing: border-box;
  }
}

@media (max-width: 576px) {
  .vcn-probiotic-product-image {
    max-width: 320px !important;
  }
  .vcn-probiotic-main-heading {
    font-size: 2.0rem !important;
  }
}
</style>