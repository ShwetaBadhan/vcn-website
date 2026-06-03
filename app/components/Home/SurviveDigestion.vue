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
          <div class="vcn-probiotic-brand-tag" data-aos="fade-up" data-aos-duration="400">
            {{ probiotics.leftContent.brandTag }}
          </div>

          <h2 class="vcn-probiotic-main-heading" data-aos="fade-up" data-aos-duration="400">
            {{ probiotics.leftContent.heading }}
          </h2>

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