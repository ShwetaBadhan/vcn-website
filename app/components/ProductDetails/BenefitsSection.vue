<template>
  <ClientOnly>
    <div class="container-fluid py-5 health-section-bg">
      <!-- Section Header -->
      <div class="text-center mb-4">
        <h1 class="section-title-timeline">{{ journeyTitle || '11 Herbs. One Journey. Complete Diabetic Wellness.' }}
        </h1>
        <p class="section-subtitle">{{ journeySubTitle || 'Designed for daily use, DBT Care Plus replenishes your body with 11 powerful Ayurvedic herbs to build complete diabetic wellness over time.*' }}</p>
      </div>

      <div class="row g-4">
        <!-- Left Column: Timeline -->
        <div class="col-lg-5">
          <div class="timeline">
            <!-- Dynamic Timeline Items from API -->
            <div v-for="(point, index) in journeyKeyPoints" :key="index" class="timeline-item">
              <span class="timeline-header">{{ point.timeLabel }}</span>
              <span class="timeline-title">{{ point.title }}</span>
              <div class="timeline-body">
                <ul class="list-unstyled">
                  <li v-for="(item, i) in point.points" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- How to Use -->
          <div class="how-to-use-card">
            <div class="capsule-icon">
              <img src="/img/productsdetails/capsule (1).png" alt="" />
            </div>
            <div>
              <h6 class="how-to-use-title">How to Use:</h6>
              <ul class="mb-0">
                <li v-for="(step, i) in journeyHowToUse" :key="i">{{ step }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Column: Images -->
        <div class="col-lg-7">
          <div class="image-grid">
            <!-- Large Image -->
            <div class="image-large">
              <img :src="journeyMainImage || '/img/dbt/1.png'" alt="Person drinking water" class="img-fluid" />
            </div>

            <!-- Small Images Container -->
            <div class="image-small-container">
              <!-- Dynamic Side Images from API -->
              <div v-for="(img, index) in journeySideImages.slice(0, 2)" :key="index"
                :class="index === 0 ? 'image-circle' : 'image-small'">
                <img :src="img" :alt="'Product image ' + (index + 1)" class="img-fluid"
                  :class="{ 'center-img': index === 0 }" />
              </div>
              <!-- Fallback if no API images -->
              <template v-if="!journeySideImages || journeySideImages.length === 0">
                <div class="image-circle">
                  <img src="/img/dbt/2.png" alt="Capsules in bottle" class="img-fluid center-img" />
                </div>
                <div class="image-small">
                  <img src="/img/dbt/3.png" alt="Man holding product" class="img-fluid" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const productStore = useProductStore()

const journeyTitle = computed(() => productStore.selectedProductPage?.journeyTitle)
const journeySubTitle = computed(() => productStore.selectedProductPage?.journeySubTitle)
const journeyMainImage = computed(() => productStore.selectedProductPage?.journeyMainImage)
const journeySideImages = computed(() => productStore.selectedProductPage?.journeySideImages || [])
const journeyKeyPoints = computed(() => {
  const apiPoints = productStore.selectedProductPage?.journeyKeyPoints || []
  if (apiPoints.length > 0) return apiPoints
  // Fallback defaults
  return [
    {
      timeLabel: 'Day 1',
      title: 'Begins Blood Sugar Regulation*',
      points: [
        'Karela & Neem start reducing high blood glucose levels',
        'Helps improve insulin sensitivity from day one',
        'Supports glucose metabolism throughout the body'
      ]
    },
    {
      timeLabel: 'Week 2',
      title: 'Reduces Diabetic Symptoms*',
      points: [
        'Reduces excessive thirst and frequent urination',
        'Giloy & Jamun help improve body strength and energy',
        'Begins relieving tiredness and fatigue'
      ]
    },
    {
      timeLabel: 'Week 4',
      title: 'Detox & Blood Purification*',
      points: [
        'Vijayasar & Punarnava remove toxins from the body',
        'Kidney and liver function visibly improves',
        'Blood purification supports overall diabetic health'
      ]
    }
  ]
})
const journeyHowToUse = computed(() => {
  const apiSteps = productStore.selectedProductPage?.journeyHowToUse || []
  if (apiSteps.length > 0) return apiSteps
  // Fallback defaults
  return [
    '1. Take 20ml to 30ml diluted in a glass of lukewarm water.',
    '2. Consume in the morning and evening, 30 minutes before meals.',
    '3. Or as directed by your Physician.'
  ]
})
</script>
<style scoped>
/* Image Large styling */
.image-large {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  height: 340px;
}

.image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Image Small & Circle styling */
.image-small-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
}

.image-small {
  width: 100%;
  height: 220px;
  border-radius: 24px;
  overflow: hidden;
}

.image-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.center-img {
  border-radius: 50%;
}

/* Desktop layout overrides matching the mockup image.png */
@media (min-width: 768px) {
  .image-grid {
    display: flex;
    flex-direction: column !important; /* Stack top and bottom vertically */
    gap: 1.5rem;
    width: 100%;
  }

  .image-large {
    flex: none !important;
    width: 100% !important;
    height: 360px; /* Perfect height for the top visual card */
  }

  .image-small-container {
    flex-direction: row-reverse !important; /* Row layout: Circle on right, Rectangle on left */
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    margin-top: 0;
  }

  .image-small {
    flex: 1 !important;
    height: 240px; /* Equal height with circle container */
  }

  .image-circle {
    flex: 0 0 240px !important; /* Keep circle perfectly round */
    height: 240px;
    margin: 0 !important;
  }
}

/* Responsive How to Use Card to prevent overflowing screen */
.how-to-use-card {
  width: 100% !important;
  max-width: 500px !important;
}

@media (max-width: 480px) {
  .how-to-use-card {
    padding: 1rem !important;
    gap: 0.75rem !important;
  }
  .capsule-icon img {
    width: 60px !important;
    height: auto !important;
  }
}
</style>