<template>
  <ClientOnly>
    <section class="testing-standards-wrapper">
      <div class="container-fluid">
        <div class="row align-items-center g-4">
          <!-- Left Column: Headline & Description -->
          <div class="col-lg-5">
            <h2 class="testing-main-title">{{ purityTitle || 'Ayurvedic purity that sets a higher standard.' }}</h2>
            <p class="testing-description-text">{{ purityDescription || 'DBT Care Plus is screened as a full formula for purity, potency and safety — because what goes into your herbal juice matters as much as what stays out.' }}</p>
          </div>

          <!-- Right Column: Feature Cards -->
          <div class="col-lg-7">
            <div class="row g-3 g-md-4">
              <!-- Dynamic Feature Cards from API -->
              <div v-for="(point, index) in purityKeyPoints" :key="index" class="col-12 col-sm-6 col-lg-4">
                <div class="testing-feature-card">
                  <div class="testing-icon-wrapper">
                    <img :src="point.icon || fallbackIcons[index]" :alt="point.title" />
                  </div>
                  <p class="testing-feature-description" v-html="point.description"></p>
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

const purityTitle = computed(() => productStore.selectedProductPage?.purityTitle)
const purityDescription = computed(() => productStore.selectedProductPage?.purityDescription)
const purityKeyPoints = computed(() => {
  const apiPoints = productStore.selectedProductPage?.purityKeyPoints || []
  if (apiPoints.length > 0) return apiPoints
  // Fallback defaults
  return [
    {
      icon: '/img/productsdetails/ayurvedic.png',
      description: 'Formulated with 100% natural Ayurvedic herbs — no synthetic chemicals or artificial additives'
    },
    {
      icon: '/img/productsdetails/no-preservatives.png',
      description: 'Free from preservatives, binders and harmful chemical substances'
    },
    {
      icon: '/img/productsdetails/GMP Certified.png',
      description: 'Manufactured in a GMP certified facility ensuring consistent quality and safety'
    }
  ]
})

const fallbackIcons = [
  '/img/productsdetails/ayurvedic.png',
  '/img/productsdetails/no-preservatives.png',
  '/img/productsdetails/GMP Certified.png'
]

const cleanUrl = (url) => {
  return url.replace(/^&/, '')
}
</script>