<template>
  <ClientOnly>
    <section class="strains-info-main-section">
      <div class="container-fluid">
        <div class="row">
          <!-- Left Column: Image -->
          <div class="col-lg-6 col-md-12">
            <div class="strains-product-image-container">
              <img :src="heroImage" alt="Probiotic Capsule" class="w-100" />
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
              <div class="strains-custom-accordion">
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
                    <p style="padding: 10px; color: #333; background: #f8f9fa; border-radius: 4px;">{{ faq.answer }}</p>
                  </div>
                </div>
              </div>

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
const openFaqIndex = ref(null)

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const heroTitle = computed(() => productStore.selectedProductPage?.heroTitle || '11 Herbs that work harder to control your Blood Sugar.')
const heroDescription = computed(() => productStore.selectedProductPage?.heroDescription || 'Chosen for their Ayurvedic potency to regulate glucose metabolism and build complete diabetic wellness.')
const heroImage = computed(() => productStore.selectedProductPage?.heroImage || '/img/products/New-Project.png')
const faqs = computed(() => {
  const productPage = productStore.selectedProductPage
  if (!productPage) return []

  const apiFaqs = productPage.faqs || []
  console.log('API FAQs from store:', apiFaqs)

  if (apiFaqs.length > 0) {
    console.log('Using API FAQs, count:', apiFaqs.length)
    return apiFaqs
  }

  // Fallback defaults when API faqs is empty
  console.log('Using fallback FAQs')
  return [
    {
      question: 'Blood Sugar Control Blend',
      answer: 'Karela: Contains Charantin & Momordicin that influence glucose metabolism and reduce high blood glucose levels. Vijayasar: Reduces excess fat, removes toxins, lowers blood sugar and purifies blood naturally. Gurmar: Highly effective in Type 1 & Type 2 Diabetes. Enhances insulin levels and reduces bad cholesterol (LDL).'
    },
    {
      question: 'Immunity & Detox Blend',
      answer: 'Giloy: Lowers blood sugar and lipid levels, relieves excessive thirst and improves body strength. Neem: Improves insulin sensitivity and controls high blood glucose by stimulating insulin production in Beta cells. Amla: Helps proper absorption of insulin, reduces high sugar levels and relieves eye-related diabetic problems.'
    },
    {
      question: 'Metabolic & Pancreas Support Blend',
      answer: 'Methi: Lowers blood glucose, improves glucose tolerance and manages metabolic symptoms of Type 1 & Type 2 Diabetes. Chirata: Antioxidant & anti-inflammatory properties that prevent pancreatic cell damage and enhance insulin release. Jamun: Contains Jamboline to reduce starch-to-glucose conversion and controls frequent urination & thirst in diabetics.'
    },
    {
      question: 'Organ Health & Repair Blend',
      answer: 'Punarnava: Best natural diuretic to reduce sugar, blood pressure and cholesterol. Supports liver, kidneys and eye health. Aloe Vera: Reduces glucose and triglyceride levels, assists in wound healing and does not elevate blood sugar. Shudh Shilajit: Fulvic acid in Shilajit repairs damaged pancreas, enables insulin release and flushes out body toxins.'
    }
  ]
})

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