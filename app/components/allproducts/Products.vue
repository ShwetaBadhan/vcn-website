<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <!-- Error state -->
      <div v-if="error" class="alert alert-danger text-center py-5">
        {{ error }}
      </div>

      <!-- Loading state -->
      <div v-else-if="loading && products.length === 0" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2 text-muted">Loading products...</p>
      </div>

      <!-- Products grid -->
      <div v-else class="row g-3">
        <div v-for="product in products" :key="product.id || product.name" class="col-md-6 col-12">
          <div class="product-card">
            <div class="product-image-wrapper">
              <span class="product-badge">NEW</span>
              <NuxtLink :to="`/product-details/${product.slug}`">
                <img :src="getPrimaryImage(product)" :alt="product.name" class="product-image" loading="eager"
                  @error="handleImageError($event)" />
              </NuxtLink>
            </div>
            <div class="product-content">
              <span class="product-label">AGE 18+</span>
              <span v-if="product.label" class="product-label">{{ product.label }}</span>
              <NuxtLink :to="`/product-details/${product.slug}`" class="product-title-link">
                <h3 class="product-title">{{ product.name }}</h3>
              </NuxtLink>
              <p class="product-description" v-html="product.description || 'Premium product for your wellness needs'">
              </p>
              <div class="product-price">
                <template v-if="getProductPricing(product).oldPrice">
                  ₹{{ getProductPricing(product).price }}
                </template>
                <template v-else>
                  ₹{{ getProductPricing(product).price }}
                </template>
              </div>
              <div class="product-actions">
                <a :href="`/product-details/${product.slug}`" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <a href="#" v-if="!getCartItem(product.id)" @click.prevent="addToCart(product)"
                    class="btn-cart add-btn">
                    Add to Cart
                  </a>
                  <div v-else class="qty-box">
                    <button class="qty-btn minus" @click="cartStore.decrementQuantity(product.id)">
                      −
                    </button>
                    <span class="qty-value">{{ getCartItem(product.id)?.quantity || 1 }}</span>
                    <button class="qty-btn plus" @click="cartStore.incrementQuantity(product.id)">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { useProductStore } from '~/stores/product'

const props = defineProps({
  products: { type: Array, default: null },
  loading: { type: Boolean, default: false }
})

const cartStore = useCartStore()
const productStore = useProductStore()
const { initializeCart } = useAuthCart()

// Use props if provided, otherwise fallback to store
const products = computed(() => props.products ?? productStore.allProducts)
const categories = computed(() => productStore.categories)
const error = computed(() => productStore.error)
const loading = computed(() => props.loading || productStore.loading)

// Fetch products on client only if not provided via props
onMounted(() => {
  if (!props.products) {
    productStore.fetchProducts()
  }
  // Initialize cart separately
  if (process.client) {
    cartStore.loadCart()
  }
})


// Helper function to get product pricing - use store getter
const getProductPricing = (product) => {
  return productStore.getProductPricing(product)
}

// Get primary image - use store getter
const getPrimaryImage = (product) => {
  return productStore.getPrimaryImage(product)
}

// Handle image loading errors
const handleImageError = (event) => {
  event.target.src = '/img/products/img1.png'
}

// Fetch categories from store
const fetchCategories = async () => {
  await productStore.fetchCategories()
}

// Get cart item helper
const getCartItem = (productId) => {
  return cartStore.getItemById(productId)
}

const addToCart = async (product) => {
  const pricing = getProductPricing(product)
  // Get default variant ID for backend API
  const defaultVariant = product.variants?.find(v => v.isDefault) || product.variants?.[0]
  const variantId = defaultVariant?.id || product.id

  await cartStore.addToCart({
    id: product.id,
    name: product.name,
    price: parseFloat(pricing.price).toFixed(2),
    mrp: pricing.oldPrice ? parseFloat(pricing.oldPrice).toFixed(2) : null,
    image: getPrimaryImage(product),
    subscription: 'One-time purchase',
    variantId: variantId  // Pass variantId for backend API
  })
}
</script>

<style scoped>
.vcn-new-product {
  padding: 40px 0;
}

/* Premium smooth transitions for product cards and images */
.product-card {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
              background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-card:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;
}

.product-image-wrapper {
  aspect-ratio: 1 / 1 !important;
  height: 215px !important;
}

.product-image-wrapper a {
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  align-items: center !important;
  justify-content: center !important;
  max-width: 100% !important;
  max-height: 100% !important;
}

.product-image {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-card:hover .product-image {
  transform: scale(1.06) !important;
}

/* Make cards vertical and adjust padding for 2-column layout under 768px */
@media (max-width: 768px) {
  .product-card {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    text-align: left !important;
    background-color: #f5f7f3 !important;
    border-radius: 16px !important;
    padding: 20px !important;
    gap: 20px !important;
    height: auto !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
    position: relative !important;
  }

  .product-image-wrapper {
    width: 170px !important;
    min-width: 170px !important;
    height: 170px !important;
    aspect-ratio: 1 / 1 !important;
    margin-bottom: 0px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: transparent !important;
    border-radius: 0px !important;
    padding: 12px 0px 0px 0px !important; /* Push image slightly down inside wrapper */
    flex-shrink: 0 !important;
    position: static !important; /* Disables relative positioning context so badge uses product-card instead */
  }

  .product-image {
    max-height: 100% !important;
    width: 100% !important;
    max-width: 100% !important;
    object-fit: contain !important;
  }

  .product-badge {
    position: absolute !important;
    left: 12px !important;
    top: 12px !important; /* Positioned near top left corner of the card */
    background-color: #606f59 !important;
    color: #ffffff !important;
    border-radius: 30px !important;
    padding: 4px 10px !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    box-shadow: none !important;
    transform: none !important;
    z-index: 10 !important;
  }

  .product-content {
    flex: 1 !important;
    align-items: flex-start !important;
    width: auto !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 0px !important;
  }

  .product-label {
    display: inline-block !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-size: 10px !important;
    font-weight: 600 !important;
    padding: 3px 10px !important;
    border-radius: 30px !important;
    margin-bottom: 8px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }

  /* Style for first label (AGE 18+) */
  .product-content > .product-label:first-of-type {
    background-color: transparent !important;
    color: #333333 !important;
    border: 1px solid #777777 !important;
  }

  /* Style for second label (Bundle + Save 25% etc.) */
  .product-content > .product-label:nth-of-type(2) {
    background-color: #d2e4cb !important;
    border: none !important;
    color: #274027 !important;
  }

  .product-title-link {
    width: 100% !important;
  }

  .product-title {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: #1e331e !important;
    line-height: 1.25 !important;
    min-height: auto !important;
    margin-bottom: 6px !important;
    text-align: left !important;
    display: block !important;
  }

  .product-description {
    display: block !important;
    font-size: 12.5px !important;
    line-height: 1.45 !important;
    color: #5d675b !important;
    margin-bottom: 8px !important;
    text-align: left !important;
  }

  .product-price {
    font-size: 1.2rem !important;
    margin-bottom: 12px !important;
    font-weight: 700 !important;
    color: #1e331e !important;
    text-align: left !important;
  }

  .product-actions {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    width: 100% !important;
    gap: 15px !important;
    justify-content: flex-start !important;
    margin-top: 4px !important;
  }

  .btn-learn {
    background-color: #1e331e !important;
    color: #ffffff !important;
    border-radius: 30px !important;
    padding: 9px 24px !important; /* Increased padding */
    font-size: 13px !important; /* Increased font size */
    font-weight: 600 !important;
    width: auto !important;
    text-align: center !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: none !important;
    text-decoration: none !important;
    transition: background-color 0.2s ease !important;
  }

  .btn-cart {
    background: transparent !important;
    color: #1e331e !important;
    font-size: 13px !important; /* Increased font size */
    font-weight: 600 !important;
    width: auto !important;
    padding: 0 !important;
    text-align: left !important;
    text-decoration: underline !important;
    border: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .cart-box {
    width: auto !important;
    display: inline-flex !important;
  }

  .qty-box {
    width: auto !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 10px !important;
    background: #ffffff !important;
    border: 1px solid #1e331e !important;
    border-radius: 30px !important;
    padding: 6px 15px !important; /* Increased padding */
  }

  .qty-btn {
    font-size: 16px !important; /* Increased font size */
    font-weight: bold !important;
    background: none !important;
    border: none !important;
    color: #1e331e !important;
    width: 20px !important;
    height: 20px !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .qty-value {
    font-size: 13px !important; /* Increased font size */
    font-weight: 600 !important;
    color: #1e331e !important;
    min-width: 15px !important;
    text-align: center !important;
  }
}

@media (max-width: 576px) {
  .product-card {
    padding: 16px !important;
    gap: 15px !important;
    border-radius: 16px !important;
  }

  .product-image-wrapper {
    width: 150px !important;
    min-width: 150px !important;
    height: 150px !important;
    padding: 12px 0px 0px 0px !important;
    position: static !important;
  }

  .product-badge {
    top: 8px !important;
    left: 8px !important;
  }

  .product-title {
    font-size: 1.1rem !important;
  }

  .product-description {
    font-size: 11.5px !important;
    margin-bottom: 6px !important;
  }

  .product-price {
    font-size: 1.1rem !important;
    margin-bottom: 8px !important;
  }

  .product-actions {
    gap: 12px !important;
  }

  .btn-learn {
    padding: 8px 20px !important; /* Increased padding */
    font-size: 12px !important; /* Increased font size */
  }

  .btn-cart {
    font-size: 12px !important; /* Increased font size */
  }
}

@media (max-width: 480px) {
  .product-card {
    padding: 12px !important;
    gap: 12px !important;
  }

  .product-image-wrapper {
    width: 135px !important;
    min-width: 135px !important;
    height: 135px !important;
    padding: 10px 0px 0px 0px !important;
  }

  .product-title {
    font-size: 1.05rem !important;
  }

  .product-description {
    font-size: 11px !important;
    margin-bottom: 4px !important;
  }

  .product-price {
    font-size: 1.05rem !important;
  }

  .btn-learn {
    padding: 8px 16px !important;
  }
}

@media (max-width: 380px) {
  .product-card {
    padding: 10px !important;
    gap: 10px !important;
  }

  .product-image-wrapper {
    width: 115px !important;
    min-width: 115px !important;
    height: 115px !important;
    padding: 8px 0px 0px 0px !important;
  }

  .product-title {
    font-size: 0.95rem !important;
  }

  .product-description {
    font-size: 10.5px !important;
  }

  .product-price {
    font-size: 0.95rem !important;
  }

  .btn-learn {
    padding: 6px 12px !important;
    font-size: 11px !important;
  }

  .btn-cart {
    font-size: 11px !important;
  }

  .qty-box {
    padding: 4px 10px !important;
    gap: 8px !important;
  }

  .qty-btn {
    font-size: 14px !important;
    width: 16px !important;
    height: 16px !important;
  }

  .qty-value {
    font-size: 11px !important;
  }
}
</style>