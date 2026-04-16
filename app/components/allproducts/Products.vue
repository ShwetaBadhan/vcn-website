<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <!-- Error state -->
      <div v-if="error" class="alert alert-danger text-center py-5">
        {{ error }}
      </div>

      <!-- Products grid -->
      <div v-else class="row g-3">
        <div v-for="product in products" :key="product.id || product.name" class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img :src="getPrimaryImage(product)" :alt="product.name" class="product-image" loading="lazy"
                @error="handleImageError($event)" />
              <span v-if="product.isNew" class="product-badge">NEW</span>
              <span v-if="product.label" class="product-label">{{ product.label }}</span>
            </div>
            <div class="product-content">
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-description" v-html="product.description || 'Premium product for your wellness needs'">
              </p>
              <div class="product-price">
                <template v-if="getProductPricing(product).oldPrice">
                  <span class="new-price">₹{{ getProductPricing(product).price }}</span>
                  <span class="old-price">₹{{ getProductPricing(product).oldPrice }}</span>
                </template>
                <template v-else>
                  ₹{{ getProductPricing(product).price }}
                </template>
              </div>
              <div class="product-actions">
                <a :href="`/product-details?slug=${product.slug}`" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem(product.id)" @click="addToCart(product)" class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus" @click="cartStore.decrementQuantity(product.id)">
                        −
                      </button>
                      <span class="qty-value">{{ getCartItem(product.id)?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity(product.id)">
                        +
                      </button>
                    </div>
                  </ClientOnly>
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
import { ref, onMounted, reactive } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { useApi } from '~/config/api/useApi'

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()
const { getFromEndpoint } = useApi()

// Client-side only fetching for instant page load
const products = ref([])
const categories = ref([])
const error = ref('')

// Initialize cart and fetch data on client only
onMounted(async () => {
  await initializeCart()
  if (process.client) {
    await cartStore.loadCart()
  }
  await fetchProducts()
  await fetchCategories()
})

// Store for individual product details (to get variants when list doesn't have them)
const productDetailsCache = reactive({})
const cacheLoaded = ref({})

// Helper function to get product pricing
const getProductPricing = (product) => {
  const productId = product.id

  // Check if we have cached details with variants
  const cachedDetails = productDetailsCache[productId]
  if (cachedDetails?.variants?.length > 0) {
    const defaultVariant = cachedDetails.variants.find(v => v.isDefault) || cachedDetails.variants[0]
    const sellingPrice = defaultVariant?.sellingPrice ? parseFloat(defaultVariant.sellingPrice) : 0
    const mrp = defaultVariant?.mrp ? parseFloat(defaultVariant.mrp) : 0
    return {
      price: sellingPrice.toFixed(2),
      oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
    }
  }

  // If product has variants in the list data
  if (product.variants && product.variants.length > 0) {
    const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
    const sellingPrice = defaultVariant?.sellingPrice ? parseFloat(defaultVariant.sellingPrice) : 0
    const mrp = defaultVariant?.mrp ? parseFloat(defaultVariant.mrp) : 0
    return {
      price: sellingPrice.toFixed(2),
      oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
    }
  }

  return {
    price: '0.00',
    oldPrice: null
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

  // Fallback
  return product.image || '/img/products/img1.png'
}

// Handle image loading errors
const handleImageError = (event) => {
  event.target.src = '/img/products/img1.png'
}

// Fetch individual product details for pricing
const { get, endpoints } = useApi()

const fetchProductDetailsForPricing = async (productId) => {
  if (cacheLoaded.value[productId]) return
  cacheLoaded.value[productId] = true
  try {
    const { data } = await get(`${endpoints.PRODUCTS}/${productId}`)
    if (data?.data?.variants?.length > 0) {
      productDetailsCache[productId] = data.data
    }
  } catch (e) {
    console.error('Failed to fetch product details for pricing:', e)
  }
}

// Fetch products from API
const fetchProducts = async () => {
  try {
    const { data, error: err } = await getFromEndpoint('PRODUCTS')
    if (err) {
      error.value = err
    } else {
      products.value = (data && data.data) ? data.data : []
      // Fetch individual product details to get variants/pricing
      products.value.forEach(product => {
        if (!product.variants || product.variants.length === 0) {
          fetchProductDetailsForPricing(product.id)
        }
      })
    }
  } catch (err) {
    error.value = 'Failed to load products'
  }
}

// Fetch categories from API
const fetchCategories = async () => {
  try {
    const { data, error: err } = await getFromEndpoint('PRODUCTS_CATEGORY')
    if (err) {
      console.error('Failed to load categories:', err)
    } else {
      categories.value = data || []
    }
  } catch (err) {
    console.error('Categories error:', err)
  }
}

// Get cart item helper
const getCartItem = (productId) => {
  return cartStore.getItemById(productId)
}

const addToCart = (product) => {
  const pricing = getProductPricing(product)
  cartStore.addToCart({
    id: product.id,
    name: product.name,
    price: parseFloat(pricing.price).toFixed(2),
    mrp: pricing.oldPrice ? parseFloat(pricing.oldPrice).toFixed(2) : null,
    image: product.image || '/img/products/img1.png',
    subscription: 'One-time purchase'
  })
}
</script>