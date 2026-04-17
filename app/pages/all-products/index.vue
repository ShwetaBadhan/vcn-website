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
              <span class="vcn-whole-body-product-label">Bestseller</span>
              <span v-if="product.label" class="vcn-whole-body-product-label">{{ product.label }}</span>
              <h2 class="vcn-product-title">{{ product.name }}</h2>
              <p class="vcn-product-description"
                v-html="product.description || 'Premium product for your wellness needs'">
              </p>
              <div class="vcn-product-price">₹{{ getProductPricing(product).price }}</div>
              <div class="vcn-product-buttons">
                <a :href="`/product-details/${product.slug}`" class="vcn-btn-secondary">
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

  <allproductsProducts :products="products" :loading="productStore.loading" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProductStore } from '~/stores/product'

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
