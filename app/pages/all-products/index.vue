<template>
  <div class="vcn-breadcrumb-container">
    <div class="vcn-breadcrumb-bg"></div>
    <div class="vcn-breadcrumb-overlay"></div>

    <div class="vcn-breadcrumb-content">
      <h1 class="vcn-breadcrumb-title">
        Whole Body Health, Made Possible by Your Microbiome
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
              <span v-if="product.isNew" class="vcn-whole-body-product-label">NEW</span>
              <span v-if="product.isBestseller" class="vcn-whole-body-product-label">Bestseller</span>
              <span v-if="product.label" class="vcn-whole-body-product-label">{{ product.label }}</span>
              <h2 class="vcn-product-title">{{ product.name }}</h2>
              <p class="vcn-product-description"
                v-html="product.description || 'Premium product for your wellness needs'">
              </p>
              <div class="vcn-product-price">₹{{ getProductPricing(product).price }}</div>
              <div class="vcn-product-buttons">
                <a :href="`/product-details?slug=${product.slug}`" class="vcn-btn-secondary">
                  Learn More
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Image Section -->
        <div class="col-lg-3">
          <div class="vcn-image-section h-100">
            <img src="/img/about/about-3.webp" alt="Fresh produce" class="vcn-bg-image" />

            <div class="vcn-image-overlay">
              <p class="vcn-image-text">
                Is DS-01® the right probiotic for you? Take the Quiz
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <ClientOnly>
    <allproductsProducts />
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useApi } from '~/config/api/useApi'

const { getFromEndpoint } = useApi()

// Client-side fetching with caching
const products = ref([])
const error = ref('')
const CACHE_KEY = 'all-products-cache-v2' // Bumped version to clear old cache
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes


// Fetch products on client only
onMounted(async () => {
  try {
    const { data, error: err } = await getFromEndpoint('PRODUCTS')
    if (err) {
      error.value = err
    } else {
      products.value = (data && data.data) ? data.data : []
    }
  } catch (err) {
    error.value = 'Failed to load products'
  }
})

// Helper function to get product pricing
const getProductPricing = (product) => {
  if (!product.variants || !product.variants.length) {
    return {
      price: '0.00',
      oldPrice: null
    }
  }

  const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
  return {
    price: defaultVariant.sellingPrice || '0.00',
    oldPrice: defaultVariant.mrp !== defaultVariant.sellingPrice ? defaultVariant.mrp : null
  }
}

// Get primary image for product - extracts from product.images array
const getPrimaryImage = (product) => {
  // Check product.images array from API (uses .image property)
  if (product.images && product.images.length > 0) {
    const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
    if (primaryImage?.image) return primaryImage.image
  }

  // Check variant productImages (uses .image property)
  if (product.variants && product.variants.length > 0) {
    const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
    if (defaultVariant?.productImages && defaultVariant.productImages.length > 0) {
      const primaryImage = defaultVariant.productImages.find(img => img.isPrimary) || defaultVariant.productImages[0]
      if (primaryImage?.image) return primaryImage.image
    }
  }

  // Fallback to product.image or default
  return product.image || '/img/products/img1.png'
}

// Handle image loading errors
const handleImageError = (event, product) => {
  console.error(`Failed to load image for product ${product.id}:`, event)
  event.target.src = '/img/products/img1.png'
}
</script>
