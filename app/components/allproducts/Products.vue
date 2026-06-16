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
        <div v-for="product in products" :key="product.id || product.name" class="col-md-6 col-6">
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

.product-image {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.product-card:hover .product-image {
  transform: scale(1.06) !important;
}

/* Make cards vertical and adjust padding for 2-column layout under 768px */
@media (max-width: 768px) {
  .product-card {
    flex-direction: column !important;
    text-align: center !important;
    padding: 16px 12px !important;
    gap: 12px !important;
    border-radius: 16px !important;
    height: 100% !important;
    display: flex !important;
  }

  .product-image-wrapper {
    width: 100% !important;
    aspect-ratio: 1 / 1 !important;
    margin-bottom: 10px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: rgba(0, 0, 0, 0.02) !important;
    border-radius: 12px !important;
    padding: 0px !important;
  }

  .product-image {
    max-height: 100% !important;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;
  }

  .product-badge {
    left: 50% !important;
    transform: translateX(-50%) !important;
    top: 5px !important;
  }

  .product-content {
    align-items: center !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .product-label {
    margin-left: auto !important;
    margin-right: auto !important;
    font-size: 9px !important;
    padding: 2px 8px !important;
    margin-bottom: 6px !important;
  }

  .product-title {
    font-size: 1.1rem !important;
    line-height: 1.3 !important;
    min-height: 48px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 8px !important;
  }

  /* Hide description on 2-column mobile layout to keep it clean */
  .product-description {
    display: none !important;
  }

  .product-price {
    font-size: 1.1rem !important;
    margin-bottom: 10px !important;
    font-weight: 700 !important;
  }

  .product-actions {
    flex-direction: column !important;
    width: 100% !important;
    gap: 8px !important;
  }

  .btn-learn,
  .btn-cart {
    width: 100% !important;
    padding: 8px 12px !important;
    font-size: 0.8rem !important;
    text-align: center !important;
    justify-content: center !important;
    display: flex !important;
    align-items: center !important;
  }

  .cart-box {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  .qty-box {
    width: 100% !important;
    justify-content: space-between !important;
    padding: 6px 12px !important;
  }

  .qty-btn {
    font-size: 16px !important;
  }
}

@media (max-width: 576px) {
  .product-card {
    padding: 12px 8px !important;
    border-radius: 12px !important;
  }

  .product-image-wrapper {
    padding: 0px !important;
    margin-bottom: 8px !important;
  }

  .product-title {
    font-size: 0.95rem !important;
    min-height: 38px !important;
  }

  .product-price {
    font-size: 0.95rem !important;
  }

  .btn-learn,
  .btn-cart {
    padding: 6px 10px !important;
    font-size: 0.75rem !important;
  }
}
</style>