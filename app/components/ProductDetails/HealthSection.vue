<template>
  <ClientOnly>
    <section class="health-section-bg">
      <div class="health-section" style="position: relative; min-height: 600px;">
        <img v-if="supportBgImage" :src="supportBgImage"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
        <div style="position: relative; z-index: 1;">
          <!-- Desktop Version -->
          <div class="d-none d-md-block">
            <div class="container">
              <h4>{{ supportMainTitle || 'Your body needs natural Ayurvedic support to fight diabetes.' }}</h4>
              <h1 class="mb-5"
                v-html="supportTitle || 'DBT Care Plus is the herbal juice <br />to fuel your body and control blood sugar.'">
              </h1>
            </div>
            <div class="container-fluid">
              <div class="feature-top">
                <div class="feature-bg">
                  <div class="row g-4">
                    <!-- Dynamic Features from API -->
                    <div v-for="(point, index) in supportKeyPoints" :key="index" class="col-lg-4 col-md-6">
                      <div class="feature-card">
                        <div class="icon-wrapper">
                          <img :src="point.icon || `/img/icons/icon-${index + 1}.png`" :alt="point.title" />
                        </div>
                        <h3 class="feature-title">{{ point.title }}</h3>
                        <p class="feature-description">{{ point.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Version: Horizontal Glassmorphic Slider -->
          <div class="d-block d-md-none mobile-health-layout">
            <div class="container text-start p-0">
              <h4 class="mobile-subtitle">{{ supportMainTitle || 'Your body needs natural Ayurvedic support to fight diabetes.' }}</h4>
              <h1 class="mobile-title" v-html="supportTitle || 'DBT Care Plus is the herbal juice <br />to fuel your body and control blood sugar.'"></h1>
            </div>
            
            <div class="mobile-scroll-container">
              <div class="features-scroll-wrapper">
                <div v-for="(point, index) in supportKeyPoints" :key="index" class="feature-card-mobile">
                  <div class="mobile-icon-wrapper">
                    <img :src="point.icon || `/img/icons/icon-${index + 1}.png`" :alt="point.title" class="mobile-icon" />
                  </div>
                  <h3 class="mobile-feature-title">{{ point.title }}</h3>
                  <p class="mobile-feature-description">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
const productStore = useProductStore()

const supportBgImage = computed(() => {
  const image = productStore.selectedProductPage?.supportBackgroundImage
  console.log('HealthSection background image:', image)
  return image
})
const supportTitle = computed(() => productStore.selectedProductPage?.supportTitle)
const supportMainTitle = computed(() => productStore.selectedProductPage?.supportMainTitle)
const supportKeyPoints = computed(() => {
  const apiPoints = productStore.selectedProductPage?.supportKeyPoints || []
  if (apiPoints.length > 0) return apiPoints
  // Fallback defaults
  return [
    {
      title: 'Blood Sugar Control',
      description: 'Karela, Gurmar & Neem actively reduce high blood glucose levels and improve insulin sensitivity from Day 1.*',
      icon: '/img/icons/icon-1.png'
    },
    {
      title: 'Detox & Blood Purification',
      description: 'Vijayasar & Punarnava remove toxins from the body, purify the blood and support liver and kidney health.*',
      icon: '/img/icons/icon-2.png'
    },
    {
      title: 'Diabetic Symptom Relief',
      description: 'Giloy & Jamun relieve excessive thirst, frequent urination, tiredness and weak eyesight caused by diabetes.*',
      icon: '/img/icons/icon-4.png'
    }
  ]
})
</script>

<style scoped>
.mobile-health-layout {
  position: relative;
  z-index: 2;
  padding: 60px 10px 40px 10px;
  color: #ffffff !important;
}

.mobile-subtitle {
  font-size: 12px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  color: rgba(255, 255, 255, 0.75) !important;
  margin-bottom: 10px !important;
  font-weight: 600 !important;
  text-align: left !important;
}

.mobile-title {
  font-size: 26px !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  color: #ffffff !important;
  margin-bottom: 30px !important;
  text-align: left !important;
}

.mobile-scroll-container {
  overflow: hidden;
  margin: 0 -10px; /* Allow cards to slide edge-to-edge */
}

.features-scroll-wrapper {
  display: flex !important;
  overflow-x: auto !important;
  scroll-snap-type: x mandatory !important;
  scroll-behavior: smooth !important;
  -webkit-overflow-scrolling: touch !important;
  gap: 16px !important;
  padding: 10px 15px 30px 15px !important;
}

.features-scroll-wrapper::-webkit-scrollbar {
  display: none !important; /* Hide scrollbar for native app feel */
}

.feature-card-mobile {
  flex: 0 0 82% !important; /* Allow the next card to peek */
  scroll-snap-align: start !important;
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 24px !important;
  padding: 28px 24px !important;
  color: #ffffff !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  text-align: left !important;
}

.mobile-icon-wrapper {
  width: 50px !important;
  height: 50px !important;
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-bottom: 20px !important;
}

.mobile-icon {
  width: 26px !important;
  height: 26px !important;
  object-fit: contain !important;
  filter: brightness(0) invert(1) !important; /* Turn the icon white to match image.png */
}

.mobile-feature-title {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  margin-bottom: 8px !important;
}

.mobile-feature-description {
  font-size: 13px !important;
  line-height: 1.45 !important;
  color: rgba(255, 255, 255, 0.85) !important;
  margin: 0 !important;
}
</style>