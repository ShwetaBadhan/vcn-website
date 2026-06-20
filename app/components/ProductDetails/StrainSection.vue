<template>
  <ClientOnly>
    <section class="strains-info-main-section">
      <div class="container-fluid">
        <div class="row">
          <!-- Left Column: Image -->
          <div class="col-lg-6 col-md-12">
            <div class="strains-product-image-container">
              <img :src="heroImage" alt="Probiotic Capsule" class="strains-product-image img-fluid" />
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="col-lg-6 col-md-12">
            <div class="strains-content-wrapper-right">
              <h2 class="strains-main-heading-text">
                {{ heroTitle }}
              </h2>

              <p class="strains-subheading-description">
                {{ heroDescription }}
              </p>

              <!-- <a
              href="#"
              class="strains-view-link-text"
              data-target="digestive-health-content"
            >
              View Strains + Ingredients →
            </a> -->

              <!-- Accordion -->
              <!-- <div class="strains-custom-accordion">
                <div v-for="(faq, index) in faqs" :key="index" class="strains-accordion-item-wrapper">
                  <button class="strains-accordion-header-btn" type="button" @click="toggleFaq(index)"
                    :aria-expanded="openFaqIndex === index">
                    <span>{{ faq.question }}</span>
                    <div style="display: flex; align-items: center">
                      <span class="strains-accordion-plus-icon"
                        :style="{ transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }">+</span>
                    </div>
                  </button>
                  <div v-show="openFaqIndex === index" class="strains-accordion-body-content"
                    style="display: block; padding: 0 25px 20px 25px;">
                    <ul
                      style="padding: 10px 10px 10px 25px; color: #333; background: #f8f9fa; border-radius: 4px; margin: 0;">
                      <li v-for="(line, i) in faq.answer.split(/\\n|\n/)" :key="i" style="margin-bottom: 6px;">
                        {{ line.trim() }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div> -->

              <!-- Badges Grid -->
              <div class="strains-badges-grid-container">
                <div v-for="(icon, index) in iconValues" :key="index" class="strains-badge-item-box">
                  <div class="strains-badge-icon-circle">
                    <img :src="icon.image || icon.icon || '/img/productsdetails/ayurvedic.png'"
                      :alt="icon.value || icon.label || icon.title" />
                  </div>
                  <span class="strains-badge-label-text">{{ icon.value || icon.label || icon.title || 'Badge' }}</span>
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

const heroTitle = computed(() => productStore.selectedProductPage?.heroTitle || '11 Herbs that work harder to control your Blood Sugar.')
const heroDescription = computed(() => productStore.selectedProductPage?.heroDescription || 'Chosen for their Ayurvedic potency to regulate glucose metabolism and build complete diabetic wellness.')
const heroImage = computed(() => productStore.selectedProductPage?.heroImage || '/img/products/New-Project.png')


const iconValues = computed(() => {
  const apiIcons = productStore.selectedProductPage?.iconValues || []
  if (apiIcons.length > 0) return apiIcons
  // Fallback defaults matching API structure
  return [
    { icon: '/img/productsdetails/ayurvedic.png', value: '100% Ayurvedic' },
    { icon: '/img/productsdetails/natural.png', value: '100% Natural' },
    { icon: '/img/productsdetails/No Added Sugar.png', value: 'No Added Sugar' },
    { icon: '/img/productsdetails/No Chemicals.png', value: 'No Chemicals' },
    { icon: '/img/productsdetails/no-preservatives.png', value: 'No Preservatives' },
    { icon: '/img/productsdetails/Vegetarian.png', value: 'Vegetarian' },
    { icon: '/img/productsdetails/GMP Certified.png', value: 'GMP Certified' },
    { icon: '/img/productsdetails/No Binders.png', value: 'No Binders' }
  ]
})

const cleanUrl = (url) => {
  return url.replace(/^&/, '')
}
</script>

<style scoped>
.strains-product-image {
  display: block;
  width: 85%;
  max-width: 500px !important;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .strains-badges-grid-container {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px 15px !important;
  }
}

@media (max-width: 767.98px) {
  .strains-product-image {
    width: 90%;
    max-width: 300px !important;
  }
}
</style>
