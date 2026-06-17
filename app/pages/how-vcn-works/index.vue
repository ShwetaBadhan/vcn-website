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
            :src="howvcnworks.heroImage"
            :alt="howvcnworks.heading"
            class="hero-banner"
          />

          <!-- Welcome Banner -->
          <div class="welcome-box">
            <h2>{{ howvcnworks.welcome?.title }}</h2>
            <p>{{ howvcnworks.welcome?.subtitle }}</p>
          </div>

          <!-- Main Heading -->
          <h1 class="main-heading">
            {{ howvcnworks.heading }}
          </h1>

          <div class="content-section">

            <!-- Intro Content -->
            <p
              v-for="(paragraph, index) in howvcnworks.description"
              :key="`intro-${index}`"
            >
              {{ paragraph }}
            </p>

            <!-- Dynamic Sections -->
            <template
              v-for="(section, sectionIndex) in howvcnworks.sections"
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
                  {{ howvcnworks.moreAbout?.[0]?.heading }}
                </h2>

                <div class="row g-3">

                  <div
                    v-for="(item, index) in howvcnworks.moreAbout?.[0]?.items"
                    :key="index"
                    class="col-6 col-md-3"
                  >
                    <div class="info-card">
                      <div class="d-flex justify-content-between align-items-start">

                        <div>
                          <div class="icon-wrapper" :class="item.iconClass">
                            <i class="bi" :class="item.icon"></i>
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
                    v-for="(card, index) in howvcnworks.moreAbout?.[0]?.ctaCards"
                    :key="index"
                    class="col-6 col-md-5"
                  >
                    <div class="bottom-card">

                      <div class="bottom-icon" :class="card.iconClass">
                        <i class="bi" :class="card.icon"></i>
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

<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('how-vcn-works-cms', () =>
  cmsStore.fetchSectionsBySlug('how-vcn-works')
)

const howvcnworks = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find section by name or sectionKey
  const section = sections.find(
    s =>
      s.name === 'howVcnWorks' ||
      s.sectionKey === 'how-vcn-works'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection(
      'howVcnWorks',
      'howvcnworks'
    ) || {}

  if (!section) {
    return fallback
  }

  const heroItem = section.items?.find(
    item => item.name === 'hero'
  )

  const welcomeItem = section.items?.find(
    item => item.name === 'welcome-banner'
  )

  const introItem = section.items?.find(
    item => item.name === 'intro-content'
  )

  const contentSectionsItem = section.items?.find(
    item => item.name === 'content-sections'
  )

  const moreAboutItem = section.items?.find(
    item => item.name === 'more-about-us'
  )

  const bottomCtaItem = section.items?.find(
    item => item.name === 'bottom-cta'
  )

  return {
    heroImage:
      heroItem?.image ||
      fallback.heroImage,

    welcome: {
      title:
        welcomeItem?.title ||
        fallback.welcome?.title,

      subtitle:
        welcomeItem?.description ||
        fallback.welcome?.subtitle
    },

    heading:
      introItem?.title ||
      fallback.heading,

    description:
      introItem?.extraData?.paragraphs ||
      fallback.description ||
      [],

    sections:
      contentSectionsItem?.extraData?.sections?.map(
        item => ({
          title: item.title,
          content: item.paragraphs || []
        })
      ) ||
      fallback.sections ||
      [],

    moreAbout: [
      {
        heading:
          moreAboutItem?.title ||
          fallback.moreAbout?.[0]?.heading,

        items:
          moreAboutItem?.extraData?.cards ||
          fallback.moreAbout?.[0]?.items ||
          [],

        ctaCards:
          bottomCtaItem?.extraData?.cards ||
          fallback.moreAbout?.[0]?.ctaCards ||
          []
      }
    ]
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>
