<template>
  <ClientOnly>
    <section class="p-5 health-section-bg">
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-12">
            <h1 class="vcn-section-title">{{ featureHeading || 'DBT Care Plus — Natural Solution for Blood Sugar' }}
            </h1>
            <p class="vcn-section-subtitle"
              v-html="featureSubHeading || 'Our Ayurvedic formulation combines 11 powerful herbs, clinically trusted to manage blood sugar.'">
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-4">
            <!-- Video wrapper (only for video + optional overlays/controls) -->
            <div class="vcn-video-wrapper">
              <img :src="featureImage || cleanUrl('/img/dbt/389size.png')" alt="Doctor" class="vcn-showcase-img" />
            </div>
            <!-- <div class="vcn-video-wrapper">
            <div class="vcn-video-controls">
              <button class="vcn-control-btn">
                <i class="bi bi-pause-fill"></i>
              </button>
              <button class="vcn-control-btn">
                <i class="bi bi-volume-up-fill"></i>
              </button>
            </div>

            <video style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
              " muted autoplay playsinline>
              <source src="https://assets.embeddables.com/ZAIN_4Ds_06_0617_6754959037559694.mp4" type="video/mp4" />
            </video>
          </div> -->

            <!-- 👇 Doctor info now OUTSIDE the video container -->
            <!-- <div class="vcn-doctor-info">
            <div class="vcn-doctor-name">Dr. Zain Kassam, MD, MPH</div>
            <div class="vcn-doctor-title">
              Chief Ayurvedic Consultant, VCN Health
            </div>

          </div> -->
          </div>

          <div class="col-lg-6">
            <div class="row">
              <!-- Dynamic Feature Cards from API -->
              <div v-for="(point, index) in featureKeyPoints" :key="index" class="col-md-6">
                <div class="vcn-feature-card">
                  <img :src="point.icon || fallbackIcons[index]" :alt="point.title" />
                  <div class="vcn-feature-divider"></div>
                  <h3 class="vcn-feature-title">{{ point.title }}</h3>
                  <p class="vcn-feature-description">{{ point.description }}</p>
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

const featureHeading = computed(() => productStore.selectedProductPage?.featureHeading)
const featureSubHeading = computed(() => productStore.selectedProductPage?.featureSubHeading)
const featureImage = computed(() => productStore.selectedProductPage?.featureImage)
const featureKeyPoints = computed(() => {
  const apiPoints = productStore.selectedProductPage?.featureKeyPoints || []
  if (apiPoints.length > 0) return apiPoints
  // Fallback defaults
  return [
    {
      icon: '/img/productsdetails/Type1&Type2Diabetes.png',
      title: 'Type 1 & Type 2 Diabetes',
      description: 'Herbs like Gurmar and Methi are highly effective in managing both Type 1 and Type 2 Diabetes by enhancing insulin levels and improving glucose tolerance.*'
    },
    {
      icon: '/img/productsdetails/High Blood Sugar.png',
      title: 'High Blood Sugar',
      description: 'Karela, Neem and Vijayasar actively reduce high blood glucose levels, stimulate insulin production and purify the blood naturally.*'
    },
    {
      icon: '/img/productsdetails/Liver&KidneyDisorders.png',
      title: 'Liver & Kidney Disorders',
      description: 'Punarnava and Aloe Vera support liver and kidney health, reduce toxins, and help manage jaundice and kidney-related diseases.*'
    },
    {
      icon: '/img/productsdetails/Diabetic Symptoms Relief.png',
      title: 'Diabetic Symptoms Relief',
      description: 'Effectively relieves symptoms like excessive thirst, frequent urination, fatigue, weak eyesight, and slow wound healing.*'
    }
  ]
})

const fallbackIcons = [
  '/img/productsdetails/Type1&Type2Diabetes.png',
  '/img/productsdetails/High Blood Sugar.png',
  '/img/productsdetails/Liver&KidneyDisorders.png',
  '/img/productsdetails/Diabetic Symptoms Relief.png'
]

const cleanUrl = (url) => {
  return url.replace(/^&/, '')
}
</script>

<style scoped>
/* Add any additional styles here if needed */
.vcn-feature-card img {
  width: 60px;
  height: 60px;
}

.vcn-video-wrapper {
  aspect-ratio: auto !important;
  height: auto !important;
  background: transparent !important;
  overflow: visible !important;
}

.vcn-showcase-img {
  height: 480px !important;
  width: auto !important;
  max-width: 100% !important;
  object-fit: contain !important;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}

@media (max-width: 991px) {
  .vcn-showcase-img {
    height: auto !important;
    max-height: 480px !important;
    width: 100% !important;
  }
}
</style>