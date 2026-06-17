<template>
  <section class="product-detail-section mt-3">
    <div class="refer-earn-page">

      <!-- ========== HERO SECTION ========== -->
      <section class="hero-sections py-5">
        <div class="container">
          <div class="row align-items-center">
            <h1 class="page-titles mb-3 text-center">{{ referEarn.heroSection.title }}</h1>
            <p class=" text-center">
              {{ referEarn.heroSection.subtitle }}
            </p>
            <hr>
            <!-- Left Content -->
            <!-- Left Content -->
            <div class="col-lg-6">
              <div class="content-wrapper">

                <p class="intro-text mb-4">
                  {{ referEarn.heroSection.leftContent.introText }}
                </p>

                <div class="features-container">
                  <div class="feature-box" v-for="(feature, index) in referEarn.heroSection.leftContent.features"
                    :key="index">
                    <div class="feature-content">
                      <p>
                        <b>{{ feature.title }}</b>:
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Right Image -->
            <!-- Right Image -->
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="image-container">

                <div class="image-wrapper">
                  <img :src="referEarn.heroSection.rightContent.image"
                    :alt="referEarn.heroSection.rightContent.imageAlt" class="hero-image img-fluid"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />

                  <div class="image-placeholder">
                    <div class="placeholder-content">

                      <i class="bi display-1 text-primary"
                        :class="referEarn.heroSection.rightContent.placeholder.icon"></i>

                      <h4 class="mt-3">
                        {{ referEarn.heroSection.rightContent.placeholder.title }}
                      </h4>

                      <p class="text-muted">
                        {{ referEarn.heroSection.rightContent.placeholder.subtitle }}
                      </p>

                    </div>
                  </div>
                </div>

                <!-- Decorative Elements -->
                <div class="decorative-circle circle-1"></div>
                <div class="decorative-circle circle-2"></div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== TARGET AUDIENCE SECTION ========== -->
      <section class="audience-section py-5">
        <div class="container">

          <div class="text-center mb-5">
            <h2 class="section-titles mb-3">
              {{ referEarn.audienceSection.title }}
            </h2>

            <p class="section-desc">
              {{ referEarn.audienceSection.description }}
            </p>
          </div>

          <div class="row g-4 align-items-center">

            <!-- Audience List -->
            <div class="col-lg-5">
              <div class="audience-list">

                <div class="audience-item" v-for="(item, index) in referEarn.audienceSection.audiences" :key="index">
                  <div class="audience-number">
                    {{ index + 1 }}
                  </div>

                  <div class="audience-info">
                    <span class="audience-text">
                      {{ item }}
                    </span>
                  </div>

                  <div class="audience-arrow">
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>

              </div>
            </div>

            <!-- Audience Image -->
            <div class="col-lg-7">
              <div class="audience-visual">
                <img :src="referEarn.audienceSection.image" :alt="referEarn.audienceSection.imageAlt" class="w-100" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========== BENEFITS SECTION ========== -->
      <section class="benefits-section py-5">
        <div class="container">

          <div class="text-center mb-5">
            <h2 class="section-titles mb-3">
              {{ referEarn.benefitsSection.title }}
            </h2>

            <p class="section-desc text-center">
              {{ referEarn.benefitsSection.description }}
            </p>
          </div>

          <div class="row g-4">
            <div class="col-md-6 col-lg-4" v-for="(benefit, index) in referEarn.benefitsSection.benefits" :key="index">
              <div class="benefit-card h-100">

                <div class="benefit-icon-wrapper">
                  <div class="benefit-icon">
                    <i v-if="benefit.icon" class="bi" :class="benefit.icon"></i>
                  </div>
                </div>

                <h3 class="benefit-title">
                  {{ benefit.title }}
                </h3>

                <p class="benefit-desc">
                  {{ benefit.description }}
                </p>

                <div class="benefit-footer">
                  <a href="#" class="benefit-link">
                    {{ referEarn.benefitsSection.learnMoreText }}
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ========== CTA SECTION ========== -->
      <section class="cta-section py-5">
        <div class="container">
          <div class="cta-wrapper">
            <div class="cta-content text-center">

              <span class="cta-tag">
                {{ referEarn.ctaSection.tag }}
              </span>

              <h2 class="cta-title">
                {{ referEarn.ctaSection.title }}
                <br />
                <span class="text-highlight">
                  {{ referEarn.ctaSection.highlightedText }}
                </span>
              </h2>

              <div class="cta-actions">
                <button class="btn btn-cta-primary btn-lg" @click="requestCallback">
                  <i class="bi bi-telephone-fill me-2"></i>
                  {{ referEarn.ctaSection.buttonText }}
                </button>
              </div>

              <div class="cta-contact">
                <span>
                  {{ referEarn.ctaSection.contactText }}
                </span>

                <a :href="`tel:${referEarn.ctaSection.phoneNumber.replace(/\s+/g, '')}`" class="contact-number">
                  <i class="bi bi-telephone-inbound"></i>

                  <span>
                    {{ referEarn.ctaSection.phoneNumber }}
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div class="cta-shape shape-1"></div>
        <div class="cta-shape shape-2"></div>
      </section>

    </div>
  </section>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('refer-earn-cms', () =>
  cmsStore.fetchSectionsBySlug('refer-earn')
)

const referEarn = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  const heroSection = sections.find(
    s => s.name === 'hero' || s.sectionKey === 'hero'
  )

  const audienceSection = sections.find(
    s => s.name === 'audience' || s.sectionKey === 'audience'
  )

  const benefitsSection = sections.find(
    s => s.name === 'benefits' || s.sectionKey === 'benefits'
  )

  const ctaSection = sections.find(
    s => s.name === 'cta' || s.sectionKey === 'cta'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection('referEarn', 'referEarn') || {}

  const heroIntroItem = heroSection?.items?.find(
    item => item.name === 'intro'
  )

  const audienceItem = audienceSection?.items?.find(
    item => item.name === 'audience-list'
  )

  const benefitsItem = benefitsSection?.items?.find(
    item => item.name === 'benefits-list'
  )

  const ctaItem = ctaSection?.items?.find(
    item => item.name === 'cta-content'
  )

  return {
    heroSection: {
      title:
        heroSection?.title ||
        fallback.heroSection?.title,

      subtitle:
        heroSection?.subtitle ||
        fallback.heroSection?.subtitle,

      leftContent: {
        introText:
          heroIntroItem?.description ||
          fallback.heroSection?.leftContent?.introText,

        features:
          heroIntroItem?.extraData?.features ||
          fallback.heroSection?.leftContent?.features ||
          []
      },

      rightContent: {
        image:
          heroSection?.image ||
          fallback.heroSection?.rightContent?.image,

        imageAlt:
          heroSection?.title ||
          fallback.heroSection?.rightContent?.imageAlt,

        placeholder:
          fallback.heroSection?.rightContent?.placeholder || {}
      }
    },

    audienceSection: {
      title:
        audienceSection?.title ||
        fallback.audienceSection?.title,

      description:
        audienceSection?.description ||
        fallback.audienceSection?.description,

      audiences:
        audienceItem?.extraData?.audiences ||
        fallback.audienceSection?.audiences ||
        [],

      image:
        audienceSection?.image ||
        fallback.audienceSection?.image,

      imageAlt:
        audienceSection?.title ||
        fallback.audienceSection?.imageAlt
    },

    benefitsSection: {
      title:
        benefitsSection?.title ||
        fallback.benefitsSection?.title,

      description:
        benefitsSection?.description ||
        fallback.benefitsSection?.description,

      benefits:
        benefitsItem?.extraData?.benefits ||
        fallback.benefitsSection?.benefits ||
        [],

      learnMoreText:
        benefitsItem?.extraData?.learnMoreText ||
        fallback.benefitsSection?.learnMoreText
    },

    ctaSection: {
      tag:
        ctaItem?.subtitle ||
        fallback.ctaSection?.tag,

      title:
        ctaItem?.title ||
        fallback.ctaSection?.title,

      highlightedText:
        fallback.ctaSection?.highlightedText,

      buttonText:
        ctaItem?.extraData?.buttonText ||
        fallback.ctaSection?.buttonText,

      contactText:
        ctaItem?.description ||
        fallback.ctaSection?.contactText,

      phoneNumber:
        ctaItem?.extraData?.phoneNumber ||
        fallback.ctaSection?.phoneNumber
    }
  }
})

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const requestCallback = () => {
  alert('Callback request submitted! We will contact you soon.')
}
</script>


