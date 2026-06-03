<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const about = computed(() =>
  cmsStore.getPageSection('about', 'about')
)

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
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
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
                    class="col-md-3 col-sm-6"
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
                    class="col-md-5 col-sm-10"
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