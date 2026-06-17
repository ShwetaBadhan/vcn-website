<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('about-us-cms', () => cmsStore.fetchSectionsBySlug('about'))

const about = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections by name/key
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'about-hero')
  const welcomeSec = sections.find(s => s.name === 'welcome' || s.sectionKey === 'about-welcome')
  const contentSec = sections.find(s => s.name === 'content' || s.sectionKey === 'about-content')
  const moreAboutSec = sections.find(s => s.name === 'moreAboutUs' || s.sectionKey === 'about-more')
  
  // Fallbacks
  const fallback = cmsStore.getPageSection('about', 'about')
  
  // Resolve hero banner image
  const rawHeroImage = heroSec?.image || heroSec?.extraData?.image
  let heroBannerImage = ''
  if (rawHeroImage) {
    if (typeof rawHeroImage === 'string') {
      heroBannerImage = rawHeroImage
    } else {
      heroBannerImage = getCmsImageUrl(rawHeroImage)
    }
  }

  // Parse intro description (split string into paragraphs)
  let parsedDescription = fallback?.description || []
  if (contentSec?.description) {
    parsedDescription = contentSec.description.split('\n').filter(p => p.trim())
  }
  
  // Parse dynamic sections (Our Story, Helping Build a Healthier Future, etc.)
  let parsedSections = fallback?.sections || []
  if (contentSec?.items && contentSec.items.length > 0) {
    parsedSections = contentSec.items.map(item => ({
      title: item.extraData?.title || item.title || '',
      content: item.extraData?.content || (item.description ? [item.description] : [])
    }))
  }
  
  // Parse moreAboutUs items and ctaCards
  let parsedMoreAboutItems = fallback?.moreAboutUs?.[0]?.items || []
  let parsedMoreAboutCta = fallback?.moreAboutUs?.[0]?.ctaCards || []
  if (moreAboutSec?.items && moreAboutSec.items.length > 0) {
    const items = moreAboutSec.items.filter(item => item.name?.startsWith('nav-item'))
    if (items.length > 0) {
      parsedMoreAboutItems = items.map(item => ({
        title: item.extraData?.title || item.title || '',
        icon: item.extraData?.icon || item.icon || 'bi-bullseye',
        iconClass: item.extraData?.iconClass || 'icon-journey'
      }))
    }
    
    const ctas = moreAboutSec.items.filter(item => item.name?.startsWith('cta-card'))
    if (ctas.length > 0) {
      parsedMoreAboutCta = ctas.map(item => ({
        title: item.extraData?.title || item.title || '',
        icon: item.extraData?.icon || item.icon || 'bi-bullseye',
        iconClass: item.extraData?.iconClass || 'icon-shopping',
        buttonText: item.extraData?.buttonText || item.buttonText || 'Start Shopping'
      }))
    }
  }

  return {
    heroImage: heroBannerImage || fallback?.heroImage || '/img/about/about-us.png',
    welcome: {
      title: welcomeSec?.title || fallback?.welcome?.title || 'Welcome to the world of VCN!',
      subtitle: welcomeSec?.subtitle || fallback?.welcome?.subtitle || 'Helping people live better lives'
    },
    heading: contentSec?.title || fallback?.heading || 'This is VCN',
    description: parsedDescription,
    sections: parsedSections,
    moreAboutUs: [
      {
        heading: moreAboutSec?.title || fallback?.moreAboutUs?.[0]?.heading || 'More about us',
        items: parsedMoreAboutItems,
        ctaCards: parsedMoreAboutCta
      }
    ]
  }
})

const moreAbout = computed(() =>
  about.value?.moreAboutUs?.[0] 
)

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>

<template>
  <section class="product-detail-section mt-3">
    <div class="container-fluid">
      <div class="row g-0">

        <!-- Sidebar -->
        <div class="col-md-3 col-lg-3 sidebar-section">
          <AboutSidebar />
        </div>

        <!-- Main Content -->
        <div class="col-md-9 col-lg-9">

          <!-- Hero Image -->
          <img
            :src="about.heroImage"
            :alt="about.heading"
            class="hero-banner"
          />

          <!-- Welcome Banner -->
          <div class="welcome-box">
            <h2>{{ about.welcome?.title }}</h2>
            <p>{{ about.welcome?.subtitle }}</p>
          </div>

          <!-- Main Heading -->
          <h1 class="main-heading">
            {{ about.heading }}
          </h1>

          <div class="content-section">

            <!-- Intro Content -->
            <p
              v-for="(paragraph, index) in about.description"
              :key="`intro-${index}`"
            >
              {{ paragraph }}
            </p>

            <!-- Dynamic Sections -->
            <template
              v-for="(section, sectionIndex) in about.sections"
              :key="`section-${sectionIndex}`"
            >
              <h2 class="section-title">
                {{ section.title }}
              </h2>

              <p
                v-for="(paragraph, paragraphIndex) in section.content"
                :key="`paragraph-${sectionIndex}-${paragraphIndex}`"
              >
                {{ paragraph }}
              </p>
            </template>

            <!-- More About Us -->
            <div class="more-about-section">
              <div class="container">

                <h2 class="section-title">
                  {{ moreAbout.heading }}
                </h2>

                <div class="row g-3">

                  <div
                    v-for="(item, index) in moreAbout.items"
                    :key="index"
                    class="col-6 col-md-3"
                  >
                    <div class="info-card">
                      <div class="d-flex justify-content-between align-items-start">

                        <div>
                          <div
                            class="icon-wrapper"
                            :class="item.iconClass"
                          >
                            <i
                              class="bi"
                              :class="item.icon"
                            ></i>
                          </div>

                          <h3 class="card-title">
                            {{ item.title }}
                          </h3>
                        </div>

                        <i class="bi bi-arrow-right arrow-icon"></i>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Bottom CTA Section -->
            <div class="bottom-section">
              <div class="container">

                <div class="row g-3 justify-content-center">

                  <div
                    v-for="(card, index) in moreAbout.ctaCards"
                    :key="index"
                    class="col-6 col-md-5"
                  >
                    <div class="bottom-card">

                      <div
                        class="bottom-icon"
                        :class="card.iconClass"
                      >
                        <i
                          class="bi"
                          :class="card.icon"
                        ></i>
                      </div>

                      <div class="bottom-content">
                        <h3>
                          {{ card.title }}
                        </h3>

                        <a href="#">
                          {{ card.buttonText }}
                        </a>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>
