<template>
  <section class="product-detail-section  mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="news-content">
            <!-- HERO -->
            <section class="news-hero">
              <img :src="newsData.hero.image" :alt="newsData.hero.title" class="news-banner" />

              <div class="hero-title">
                <h1>{{ newsData.hero.title }}</h1>
              </div>
            </section>

            <!-- MEDIA TITLE -->

            <div class="media-heading">
              <h2>{{ newsData.mediaCoverage.title }}</h2>
            </div>

            <!-- YEAR FILTER -->

            <div class="year-tabs">
              <button v-for="year in newsData.years" :key="year" @click="activeYear = year"
                :class="{ active: activeYear === year }">
                {{ year }}
              </button>
            </div>

            <!-- NEWS GRID -->

            <div class="news-grid">
              <div v-for="item in filteredNews" :key="item.title" class="news-card">
                <div class="news-logo">
                  {{ item.logo }}
                </div>

                <div class="news-info">
                  <span class="news-date">
                    {{ item.date }}
                  </span>

                  <h3 class="news-title">
                    {{ item.title }}
                  </h3>

                  <p class="news-source">
                    {{ item.source }}
                  </p>
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
import { ref, computed, watch } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('news-cms', () => cmsStore.fetchSectionsBySlug('news'))

const newsData = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'news-hero')
  const mediaSec = sections.find(s => s.name === 'mediaCoverage' || s.sectionKey === 'news-media-coverage')
  
  // Fallbacks
  const fallback = cmsStore.getPageSection('about', 'news')
  
  // Resolve hero image
  const rawHeroImage = heroSec?.image || heroSec?.extraData?.image
  let heroImage = ''
  if (rawHeroImage) {
    if (typeof rawHeroImage === 'string') {
      heroImage = rawHeroImage
    } else {
      heroImage = getCmsImageUrl(rawHeroImage)
    }
  }

  // Parse years and articles
  const apiExtra = mediaSec?.extraData?._extraData || mediaSec?.extraData || {}
  const years = apiExtra.years || fallback?.years || [2026, 2025, 2024, 2023]
  const articles = apiExtra.articles || fallback?.articles || []

  return {
    hero: {
      title: heroSec?.title || fallback?.hero?.title || 'VCN In News',
      image: heroImage || fallback?.hero?.image || '/img/news/news.png'
    },
    mediaCoverage: {
      title: mediaSec?.title || fallback?.mediaCoverage?.title || 'Media Coverage'
    },
    years,
    articles
  }
})

const activeYear = ref(2026)

const yearsList = computed(() => newsData.value.years || [])

// Watch for years loading and select the first active year
watch(yearsList, (newYears) => {
  if (newYears.length > 0 && (!activeYear.value || !newYears.includes(activeYear.value))) {
    activeYear.value = newYears[0]
  }
}, { immediate: true })

const filteredNews = computed(() =>
  newsData.value.articles?.filter(
    item => Number(item.year) === Number(activeYear.value)
  ) 
)

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>

<style scoped>
.news-content {
  padding: 30px;
  background: #f6f6f6;
}

/* HERO */

.news-hero {
  position: relative;
  margin-bottom: 30px;
}

.news-banner {
  width: 100%;
  border-radius: 10px;
}

.hero-title {
  position: absolute;
  bottom: 20px;
  left: 30px;
  background: #c9e1b4;
  padding: 10px 25px;
  border-radius: 6px;
}

.hero-title h1 {
  margin: 0;
  font-size: 28px;
}

/* HEADING */

.media-heading {
  text-align: center;
  margin-bottom: 20px;
}

.media-heading h2 {
  font-size: 32px;
  font-weight: 600;
}

/* YEAR TABS */

.year-tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
}

.year-tabs button {
  background: none;
  border: none;
  padding-bottom: 8px;
  font-size: 16px;
  cursor: pointer;
}

.year-tabs .active {
  border-bottom: 3px solid #e30613;
  font-weight: 600;
}

/* NEWS GRID */

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* CARD */

.news-card {
  display: flex;
  gap: 15px;
  background: #fff;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  align-items: center;
}

.news-logo {
  width: 60px;
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.news-date {
  font-size: 13px;
  color: #777;
}

.news-title {
  font-size: 16px;
  margin: 6px 0;
}

.news-source {
  font-size: 14px;
  color: #666;
}

/* MOBILE */

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
