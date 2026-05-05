<template>
  <ClientOnly>
    <section class="health-section-bg">
      <div class="health-section" style="position: relative; min-height: 600px;">
        <img v-if="supportBgImage" :src="supportBgImage"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
        <div style="position: relative; z-index: 1;">
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