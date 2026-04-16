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
          <a :href="`/product-details/${product.slug}`" class="product-card-link">
            <div class="product-card">
              <div class="product-image-wrapper">
                <img :src="getPrimaryImage(product)" :alt="product.name" class="product-image" loading="eager"
                  @error="handleImageError($event)" />
                <span v-if="product.isNew" class="product-badge">NEW</span>
                <span v-if="product.label" class="product-label">{{ product.label }}</span>
              </div>
              <div class="product-content">
                <h3 class="product-title">{{ product.name }}</h3>
                <p class="product-description"
                  v-html="product.description || 'Premium product for your wellness needs'">
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
                <div class="product-actions" @click.prevent>
                  <span class="btn-learn">Learn More</span>
                  <div class="cart-box">
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
                  </div>
                </div>
              </div>
            </div>
          </a>
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

const products = ref([])
const categories = ref([])
const error = ref('')
const loading = ref(true)
const CACHE_KEY = 'all-products-cache-v2'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

// Load from cache for instant render
const loadFromCache = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      const { data, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < CACHE_TTL) {
        products.value = data
        loading.value = false
        return true
      }
    }
  } catch (err) {
    console.error('Cache error:', err)
  }
  return false
}

// Save to cache
const saveToCache = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
  } catch (err) {
    console.error('Save cache error:', err)
  }
}

// Initialize cart and fetch data - parallel for speed
onMounted(async () => {
  // Load cache instantly
  loadFromCache()

  // Parallel initialization
  const promises = [fetchProducts()]
  if (process.client) {
    promises.push(cartStore.loadCart())
  }
  await Promise.all(promises)
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

// Get primary image - checks all possible sources
const getPrimaryImage = (product) => {
  // Check product.images array from API
  if (product.images?.length > 0) {
    const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
    if (primaryImage?.image) return primaryImage.image
  }

  // Check variant productImages
  if (product.variants?.length > 0) {
    const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
    if (defaultVariant?.productImages?.length > 0) {
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

// Fetch products - single API call for speed
const fetchProducts = async () => {
  try {
    const { data, error: err } = await getFromEndpoint('PRODUCTS')
    if (!err && data?.data) {
      products.value = data.data
      saveToCache(data.data)
    }
  } catch (err) {
    error.value = 'Failed to load products'
  } finally {
    loading.value = false
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