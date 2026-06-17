<template>
  <section class="product-detail-section mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section">
          <AboutSidebar />
        </div>

        <div class="col-md-9 col-lg-9">
          <div class="careers-content">

            <!-- TOP TABS -->
            <div class="tabs">
              <button
                v-for="tab in careers.tabs"
                :key="tab.key"
                :class="{ active: activeTab === tab.key }"
                @click="activeTab = tab.key"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- OVERVIEW TAB -->
            <div v-if="activeTab === 'overview'">

              <!-- HERO IMAGE -->
              <section class="hero-sectioning">
                <img
                  :src="careers.overview.hero.image"
                  :alt="careers.overview.hero.title"
                  class="hero-img"
                >

                <div class="hero-card">
                  <h2>
                    {{ careers.overview.hero.title }}
                  </h2>

                  <p
                    v-for="(paragraph, index) in careers.overview.hero.description"
                    :key="index"
                  >
                    {{ paragraph }}
                  </p>

                  <button class="primary-btn">
                    {{ careers.overview.hero.buttonText }}
                  </button>
                </div>
              </section>

              <!-- CULTURE SECTION -->
              <section class="culture-section">

                <h2>
                  {{ careers.overview.culture.hashTag }}
                </h2>

                <div class="culture-card">

                  <img
                    :src="careers.overview.culture.image"
                    :alt="careers.overview.culture.title"
                  >

                  <div>
                    <h3>
                      {{ careers.overview.culture.title }}
                    </h3>

                    <p>
                      {{ careers.overview.culture.description }}
                    </p>
                  </div>

                </div>

              </section>

              <!-- VP MESSAGE -->
              <section class="vp-section">

                <h2>
                  {{ careers.overview.vicePresident.heading }}
                </h2>

                <div class="vp-card">

                  <div class="vp-profile">

                    <img
                      :src="careers.overview.vicePresident.image"
                      :alt="careers.overview.vicePresident.name"
                    >

                    <h4>
                      {{ careers.overview.vicePresident.name }}
                    </h4>

                    <span>
                      {{ careers.overview.vicePresident.designation }}
                    </span>

                  </div>

                  <div class="vp-message">

                    <p
                      v-for="(message, index) in careers.overview.vicePresident.messages"
                      :key="index"
                    >
                      {{ message }}
                    </p>

                  </div>

                </div>

              </section>

            </div>

            <!-- CULTURE TAB -->
            <div v-if="activeTab === 'culture'">

              <section class="articles">

                <h2>
                  {{ careers.cultureTab.heading }}
                </h2>

                <div
                  v-for="(article, index) in careers.cultureTab.articles"
                  :key="index"
                  class="article-card"
                >

                  <div class="article-icon">
                    {{ article.icon }}
                  </div>

                  <div>
                    <span>
                      {{ article.date }}
                    </span>

                    <h4>
                      {{ article.title }}
                    </h4>
                  </div>

                </div>

              </section>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('careers-cms', () => cmsStore.fetchSectionsBySlug('careers'))

const careers = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'careers-hero')
  const cultureSec = sections.find(s => s.name === 'culture' || s.sectionKey === 'careers-culture')
  const vpSec = sections.find(s => s.name === 'vicePresident' || s.sectionKey === 'careers-vp')
  const cultureTabSec = sections.find(s => s.name === 'cultureTab' || s.sectionKey === 'careers-culture-tab')
  
  // Fallbacks
  const fallback = cmsStore.getPageSection('about', 'careers')
  
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

  // Parse hero description
  let heroDescription = fallback?.overview?.hero?.description || []
  if (heroSec?.description) {
    heroDescription = heroSec.description.split('\n').filter(p => p.trim())
  }

  // Parse culture section extraData
  const cultureExtra = cultureSec?.extraData?._extraData || cultureSec?.extraData || {}
  const rawCultureImage = cultureSec?.image || cultureExtra.image
  let cultureImage = ''
  if (rawCultureImage) {
    if (typeof rawCultureImage === 'string') {
      cultureImage = rawCultureImage
    } else {
      cultureImage = getCmsImageUrl(rawCultureImage)
    }
  }

  // Parse VP section extraData
  const vpExtra = vpSec?.extraData?._extraData || vpSec?.extraData || {}
  const rawVpImage = vpSec?.image || vpExtra.image
  let vpImage = ''
  if (rawVpImage) {
    if (typeof rawVpImage === 'string') {
      vpImage = rawVpImage
    } else {
      vpImage = getCmsImageUrl(rawVpImage)
    }
  }

  // Parse cultureTab articles
  let parsedArticles = fallback?.cultureTab?.articles || []
  if (cultureTabSec?.items && cultureTabSec.items.length > 0) {
    parsedArticles = cultureTabSec.items.map(item => ({
      title: item.extraData?.title || item.title || '',
      date: item.extraData?.date || '',
      icon: item.extraData?.icon || 'A'
    }))
  }

  return {
    tabs: fallback?.tabs || [
      { key: "overview", label: "Overview" },
      { key: "culture", label: "Culture at VCN" }
    ],
    overview: {
      hero: {
        title: heroSec?.title || fallback?.overview?.hero?.title || 'Be a part of the VCN Family',
        description: heroDescription,
        image: heroImage || fallback?.overview?.hero?.image || '/img/careers/careers-banner.png',
        buttonText: heroSec?.buttonText || fallback?.overview?.hero?.buttonText || 'FIND OPEN POSITIONS'
      },
      culture: {
        hashTag: cultureExtra.hashTag || fallback?.overview?.culture?.hashTag || '#IVCN',
        title: cultureSec?.title || fallback?.overview?.culture?.title || 'Celebrating Milestones Together',
        description: cultureSec?.description || fallback?.overview?.culture?.description || '',
        image: cultureImage || fallback?.overview?.culture?.image || '/img/careers/culture.png'
      },
      vicePresident: {
        heading: vpSec?.title || fallback?.overview?.vicePresident?.heading || 'Words from our Vice President (HR)',
        name: vpExtra.name || fallback?.overview?.vicePresident?.name || 'Ritika Malik',
        designation: vpExtra.designation || fallback?.overview?.vicePresident?.designation || 'Vice President - Human Resources',
        messages: vpExtra.messages || fallback?.overview?.vicePresident?.messages || [],
        image: vpImage || fallback?.overview?.vicePresident?.image || '/img/careers/vp.png'
      }
    },
    cultureTab: {
      heading: cultureTabSec?.title || fallback?.cultureTab?.heading || 'Related Articles',
      articles: parsedArticles
    }
  }
})

const activeTab = ref("overview")

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>
<style scoped>
.careers-content {
  padding: 30px;
  background: #f7f7f7;
}

/* TABS */

.tabs {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 25px;
}

.tabs button {
  background: none;
  border: none;
  padding-bottom: 8px;
  cursor: pointer;
  font-size: 16px;
}

.tabs .active {
  border-bottom: 3px solid #e30613;
  font-weight: 600;
}


/* HERO */

.hero-sectioning {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.hero-img {
  width: 100%;
  display: block;
}

.hero-card {
  background: #f4eac6;
  padding: 30px;
  text-align: center;
}

.hero-card h2 {
  font-size: 26px;
  margin-bottom: 10px;
}

.hero-card p {
  color: #555;
  margin-bottom: 20px;
}

.primary-btn {
  background: #e5c87b;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
}


/* CULTURE */

.culture-section {
  margin-bottom: 40px;
}

.culture-card {
  display: flex;
  gap: 25px;
  background: #eaf3e5;
  padding: 25px;
  border-radius: 10px;
  align-items: center;
}

.culture-card img {
  width: 260px;
  border-radius: 8px;
}


/* VP */

.vp-section {
  margin-bottom: 40px;
}

.vp-card {
  display: flex;
  gap: 30px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.vp-profile {
  text-align: center;
  width: 220px;
}

.vp-profile img {
  width: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.vp-message {
  flex: 1;
  color: #555;
  line-height: 1.7;
}


/* ARTICLES */

.article-card {
  display: flex;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  align-items: center;
}

.article-icon {
  width: 60px;
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

@media(max-width:768px) {

  .culture-card {
    flex-direction: column;
  }

  .vp-card {
    flex-direction: column;
  }

}
</style>
