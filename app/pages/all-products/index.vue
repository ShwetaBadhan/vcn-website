<template>
  <div class="vcn-breadcrumb-container">
    <div class="vcn-breadcrumb-bg"></div>
    <div class="vcn-breadcrumb-overlay"></div>

    <div class="vcn-breadcrumb-content">
      <h1 class="vcn-breadcrumb-title">
        {{ allProducts.hero.title }}
      </h1>
    </div>
  </div>
  <section class="vcn-product-section py-5">
    <div class="container-fluid">
      <!-- Error state -->
      <div v-if="error" class="alert alert-danger text-center py-5">
        {{ error.message || error }}
      </div>

      <!-- Products grid -->
      <div v-else class="row g-4">
        <div v-for="product in [products[0]]" :key="product.id || product.name" class="col-lg-9"
          v-if="products.length > 0">
          <div class="vcn-product-card row align-items-center h-100">

            <!-- Image -->
            <div class="col-lg-4 position-relative">

              <div class="vcn-product-image text-center">
                <img :src="getPrimaryImage(product)" :alt="product.name" class="vcn-product-bottle" loading="lazy"
                  @error="handleImageError($event, product)" />
              </div>
            </div>

            <!-- Content -->
            <div class="col-lg-8">
              <div class="vcn-whole-body-product-badges">
                <span v-if="product.isNew" class="vcn-whole-body-badge vcn-whole-body-badge-new">NEW</span>
                <span v-if="allProducts.labels.bestseller" class="vcn-whole-body-badge vcn-whole-body-badge-bestseller">{{ allProducts.labels.bestseller }}</span>
                <span v-if="product.label" class="vcn-whole-body-badge vcn-whole-body-badge-new">{{ product.label }}</span>
              </div>
              <h2 class="vcn-product-title">{{ product.name }}</h2>
              <p class="vcn-product-description"
                v-html="product.description || 'Premium product for your wellness needs'">
              </p>
              <div class="vcn-product-price">₹{{ getProductPricing(product).price }}</div>
              <div class="vcn-product-buttons">
                <a :href="`/product-details/${product.slug}`" class="vcn-btn-secondary">
                  {{ allProducts.btn.learnMore }}
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Image Section -->
        <div class="col-lg-3">
          <div class="vcn-image-section h-100">
            <img :src="allProducts.sidebarCard.image" :alt="allProducts.sidebarCard.text" class="vcn-bg-image" />

            <div class="vcn-image-overlay">
              <p class="vcn-image-text">
                {{ allProducts.sidebarCard.text }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <allproductsProducts :products="products" :loading="productStore.loading" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'
import { useProductStore } from '~/stores/product'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('products-cms', () => cmsStore.fetchSectionsBySlug('products'))

const allProducts = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'products-hero')
  const sidebarSec = sections.find(s => s.name === 'sidebarCard' || s.sectionKey === 'products-sidebar-card')
  const uiLabelsSec = sections.find(s => s.name === 'uiLabels' || s.sectionKey === 'products-ui-labels')
  
  const fallback = cmsStore.getPageSection('products', 'products') || {
    hero: { title: '' },
    sidebarCard: { image: '', text: '' },
    labels: { bestseller: '' },
    btn: { learnMore: '' }
  }
  
  // Resolve sidebar image
  const rawSidebarImage = sidebarSec?.image || sidebarSec?.extraData?.image
  let sidebarImage = ''
  if (rawSidebarImage) {
    if (typeof rawSidebarImage === 'string') {
      sidebarImage = rawSidebarImage
    } else {
      sidebarImage = getCmsImageUrl(rawSidebarImage)
    }
  }

  // Parse extraData labels
  const apiExtra = uiLabelsSec?.extraData?.extraData || uiLabelsSec?.extraData || {}

  return {
    hero: {
      title: heroSec?.title || fallback.hero.title
    },
    sidebarCard: {
      image: sidebarImage || fallback.sidebarCard.image,
      text: sidebarSec?.description || fallback.sidebarCard.text
    },
    labels: {
      bestseller: apiExtra.bestseller || fallback.labels.bestseller
    },
    btn: {
      learnMore: apiExtra.learnMore || fallback.btn.learnMore
    }
  }
})

const productStore = useProductStore()

// Computed properties from store
const products = computed(() => productStore.allProducts)
const error = computed(() => productStore.error)

// Fetch products immediately (non-blocking)
productStore.fetchProducts()

// Helper function to get product pricing - use store getter
const getProductPricing = (product) => {
  return productStore.getProductPricing(product)
}

// Get primary image for product - use store getter
const getPrimaryImage = (product) => {
  return productStore.getPrimaryImage(product)
}

// Handle image loading errors
const handleImageError = (event, product) => {
  console.error(`Failed to load image for product ${product.id}:`, event)
  event.target.src = '/img/products/img1.png'
}
</script>

<style scoped>
.vcn-breadcrumb-container {
  margin-top: -120px !important;
  padding-top: 85px !important;
}

@media (max-width: 991px) {
  .vcn-breadcrumb-container {
    margin-top: -140px !important;
  }
}

.vcn-whole-body-product-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
}

.vcn-whole-body-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.vcn-whole-body-badge-bestseller {
  background-color: #c9f5a6;
  color: #1e331e;
}

.vcn-whole-body-badge-new {
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--vcn-white, #ffffff);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .vcn-whole-body-badge {
    padding: 4px 8px;
    font-size: 0.6rem;
    letter-spacing: 0.3px;
  }

  .vcn-whole-body-product-badges {
    margin-bottom: 10px;
    gap: 4px;
  }
}
</style>
