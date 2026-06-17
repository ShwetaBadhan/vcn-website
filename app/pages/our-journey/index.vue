<script setup>
import { ref, computed, watch } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('our-journey-cms', () => cmsStore.fetchSectionsBySlug('our-journey'))

const journey = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find hero and timeline sections
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'our-journey-hero')
  const timelineSec = sections.find(s => s.name === 'timeline' || s.sectionKey === 'our-journey-timeline')
  
  // Extract timeline phases
  const timelineItem = timelineSec?.items?.find(item => item.name === 'timeline-phases')
  const apiPhases = timelineItem?.extraData?.phases || []
  
  // Fallbacks
  const fallback = cmsStore.getPageSection('about', 'ourJourney')
  
  // Resolve Hero Image
  const rawImage = heroSec?.image || heroSec?.extraData?.image
  let heroImage = ''
  if (rawImage) {
    if (typeof rawImage === 'string') {
      heroImage = rawImage
    } else {
      heroImage = getCmsImageUrl(rawImage)
    }
  }

  return {
    hero: {
      title: heroSec?.title || fallback?.hero?.title || 'Our Journey',
      description: heroSec?.description || fallback?.hero?.description || '',
      image: heroImage || fallback?.hero?.image || '/img/about/banner.png'
    },
    timeline: apiPhases.length > 0 ? apiPhases : (fallback?.timeline || [])
  }
})

const years = computed(() =>
  journey.value?.timeline?.map(item => item.year) || []
)

const activeYear = ref('')

// Watch for years loading and select the first active year
watch(years, (newYears) => {
  if (newYears.length > 0 && (!activeYear.value || !newYears.includes(activeYear.value))) {
    activeYear.value = newYears[0]
  }
}, { immediate: true })

const activeTimeline = computed(() =>
  journey.value?.timeline?.find(
    item => item.year === activeYear.value
  )
)

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>


<template>
  <section class="product-detail-section  mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="journey-container">
            <!-- HERO SECTION -->
            <section class="journey-hero">
              <img :src="journey.hero.image" class="hero-img" />

              <h1>{{ journey.hero.title }}</h1>

              <p>
                {{ journey.hero.description }}
              </p>
            </section>

            <!-- TIMELINE NAVIGATION -->
            <div class="timeline-nav-container">
              <div class="timeline-nav">
                <button v-for="year in years" :key="year" @click="activeYear = year"
                  :class="{ active: activeYear === year }">
                  {{ year }}
                </button>
              </div>
            </div>

            <!-- TIMELINE CONTENT -->
            <div class="timeline-content">
              <div class="milestone-card">
                <div class="milestone-info">
                  <h2>{{ activeYear }}</h2>
                  <h3>{{ activeTimeline?.title }}</h3>
                  <p>{{ activeTimeline?.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey-container {
  padding: 30px;
  background: #ffffff;
  font-family: var(--vcn-font, "Outfit", sans-serif);
}

/* HERO SECTION */
.journey-hero {
  background: #fbf0fc; /* Light pink/violet background from photo */
  text-align: center;
  padding: 50px 20px;
  border-radius: 12px;
  margin-bottom: 40px;
}

.hero-img {
  max-width: 600px;
  width: 100%;
  margin: 0 auto 30px;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.journey-hero h1 {
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 15px;
  color: #000000; /* heading color set to black */
}

.journey-hero p {
  color: #666; /* original grey color */
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 20px auto 0;
  font-weight: 500;
}

/* TIMELINE NAVIGATION */
.timeline-nav-container {
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding: 15px 0;
  margin-bottom: 40px;
  background: #ffffff;
}

.timeline-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-nav button {
  background: none;
  border: none;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  color: #666; /* original grey color */
  padding: 5px 15px;
  transition: all 0.2s ease;
  position: relative;
  font-family: inherit;
}

.timeline-nav button:hover {
  color: #45663c; /* original green color */
}

.timeline-nav button.active {
  color: #45663c; /* original green color */
  font-weight: 700;
}

/* CARD / CONTENT */
.milestone-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  margin-bottom: 20px;
}

.milestone-info h2 {
  color: #45663c; /* original green color for active year */
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.milestone-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 15px;
}

.milestone-info p {
  color: #555; /* original body text color */
  font-size: 1.05rem;
  line-height: 1.7;
}

/* MOBILE */
@media (max-width: 768px) {
  .journey-container {
    padding: 0;
  }
  .journey-hero {
    padding: 55px 15px;
  }
  .hero-img {
    max-width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  .journey-hero h1 {
    font-size: 1.8rem;
  }
  .timeline-nav-container {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .timeline-nav-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .timeline-nav {
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: max-content;
    padding: 0 20px;
    gap: 20px;
  }
  .timeline-nav button {
    flex-shrink: 0;
    font-size: 1.1rem;
    padding: 5px 10px;
  }
  .milestone-card {
    padding: 20px 15px;
  }
}
</style>
