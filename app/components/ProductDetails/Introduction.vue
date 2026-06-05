<template>
  <section class="product-detail-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Column - Product Images -->
        <!-- MAIN PRODUCT IMAGE -->
        <div class="col-lg-7">
          <div class="product-img-wrapper">
            <div class="product-image-cards"
              style="max-height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <img id="mainImage" :src="displayImage" :alt="productName" @click="openProductPreview(displayImage)"
                style="max-width: 100%; max-height: 500px; width: auto; height: auto; object-fit: contain;" />
            </div>
          </div>

          <!-- THUMBNAILS - Dynamic product images -->
          <div class="row mt-3" v-if="allProductImages.length > 0">
            <div v-for="(img, index) in allProductImages" :key="index" class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item" :class="{ 'active': selectedImage === img }">
                  <img class="thumb" :src="img" :alt="productName" @click="selectImage(img)" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-1"></div> -->
        <!-- Right Column - Product Info -->
        <div class="col-lg-5">
          <div class="product-info">
            <!-- Error State -->
            <div v-if="error" class="alert alert-warning">
              {{ error }}
            </div>

            <!-- Product Data -->
            <template v-else-if="product">
              <h1 class="product-details-title">{{ productName }}</h1>

              <div class="rating-section">
                <div class="stars-display">
                  <span v-for="star in 5" :key="star" class="star"
                    :class="{ 'filled': star <= Math.round(averageRating) }">★</span>
                </div>
                <span class="rating-text">{{ averageRating.toFixed(1) }} • ({{ totalReviews }} Review{{ totalReviews !==
                  1 ? 's' : '' }})</span>
              </div>

              <p class="product-details-description" v-html="productDescription">
              </p>

              <!-- Variant Selector -->
              <div v-if="hasVariants" class="variant-section mt-3 mb-3">
                <label class="variant-label">Select Variant:</label>
                <div class="variant-options">
                  <button v-for="v in product.variants" :key="v.id" class="variant-btn"
                    :class="{ 'variant-btn--active': selectedVariant?.id === v.id }" @click="selectVariant(v)">
                    <span class="variant-sku">{{ v.sku }}</span>
                    <span v-if="v.weight" class="variant-weight">{{ v.weight }} {{ v.unit?.name || 'ml' }}</span>
                    <span class="variant-price">₹{{ v.sellingPrice }}</span>
                    <span v-if="v.mrp && v.mrp !== v.sellingPrice" class="variant-mrp">₹{{ v.mrp }}</span>
                  </button>
                </div>
                <div v-if="selectedVariant" class="variant-info mt-2">
                  <span class="variant-sku-display">SKU: {{ selectedVariant.sku }}</span>
                  <span v-if="selectedVariant.weight" class="variant-weight-display">Weight: {{ selectedVariant.weight
                    }} {{ selectedVariant.unit?.name || 'ml' }}</span>
                  <span v-if="product.discountValue > 0" class="variant-discount">{{ product.discountValue }}{{
                    product.discountType === 'PERCENTAGE' ? '%' : '₹' }} OFF</span>
                </div>
              </div>

              <span class="vcn-cobiotics-badge">Bundle + Save 25%</span>
              <div class="price-section">
                <span class="current-price">₹{{ productPrice }}</span>
                <span v-if="productMrp && productMrp !== productPrice" class="old-price">₹{{ productMrp }}</span>
              </div>
            </template>

            <div class="delivery-info">
              30-day supply delivered monthly. <br />
              Pause or cancel anytime.
            </div>

            <button type="button" class="btn-start-now" @click="handleStartNow">Start Now</button>

            <p class="subscribe-text">
              30-day risk-free guarantee. Free US shipping.
            </p>
            
            <div class="vcn-accordion">
              <div class="vcn-acc-item" v-for="(item, index) in accordionItems" :key="index">
                <button type="button" class="vcn-acc-header" @click="toggleAccordion(index)">
                  {{ item.title }}
                  <span class="vcn-acc-icon">
                    {{ activeIndex === index ? '−' : '+' }}
                  </span>
                </button>

                <div class="vcn-acc-body" v-if="activeIndex === index">
                  <ul class="vcn-benefits-list">
                    <li v-for="(point, i) in item.content" :key="i">
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bundle-card mt-5">
              <div class="bundle-image">
                <img src="/img/productsdetails/BOOSTER.png" alt="VCN-02 Daily Multivitamin" />
              </div>
              <div class="bundle-content">
                <h3>Bundle + Save 25%</h3>
                <p>
                  Add VCN-02 Daily Multivitamin to your routine and save on your
                  first order.
                </p>
                <div class="bundle-price">
                  <span class="current-price">₹67.48</span>
                  <span class="original-price">₹89.98</span>
                </div>
              </div>
              <div class="bundle-action">
                <ClientOnly>
                  <button v-if="!isBundleInCart" @click="addBundleToCart" class="add-button">
                    Add
                  </button>
                  <div v-else class="bundle-quantity-control">
                    <button class="bundle-qty-btn minus" @click="decrementBundle">−</button>
                    <span class="bundle-qty-value">{{ getBundleQuantity() }}</span>
                    <button class="bundle-qty-btn plus" @click="incrementBundle">+</button>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useProductStore } from '~/stores/product'
import { useAuthCart } from '~/composables/useAuthCart'
import { getProductReviewsUrl } from '~/config/api/endpoints'
import { useApi } from '~/config/api/useApi'

const cartStore = useCartStore()
const productStore = useProductStore()
const { initializeCart } = useAuthCart()
const route = useRoute()

// const activeIndex = ref(null)
const product = ref(null)
const loading = ref(true)
const error = ref('')
const activeIndex = ref(0)

// Reviews state
const reviews = ref([])
const averageRating = ref(0)
const totalReviews = ref(0)
const isLoadingReviews = ref(false)

// Get product slug from URL path
const productSlug = computed(() => route.params.slug)

// Fetch product data immediately (SSR)
if (productSlug.value) {
  const result = await productStore.fetchProductBySlug(productSlug.value)
  if (result.success && productStore.selectedProduct) {
    // Handle API response: data is an array, extract first product
    const productData = Array.isArray(productStore.selectedProduct)
      ? productStore.selectedProduct[0]
      : productStore.selectedProduct
    product.value = productData
  } else {
    error.value = result.error || 'Product not found'
  }
  loading.value = false
} else {
  error.value = 'No product slug provided'
  loading.value = false
}

// Initialize cart on client
onMounted(async () => {
  await initializeCart()
  await cartStore.loadCart()

  // Check if bundle is already in cart
  const existingBundle = cartStore.getItemById(bundleProduct.id)
  bundleInCart.value = !!existingBundle

  // Fetch reviews
  await fetchReviews()
})

// Fetch reviews from API
const fetchReviews = async () => {
  const productId = product.value?.id
  if (!productId) return

  isLoadingReviews.value = true
  try {
    const endpoint = getProductReviewsUrl(productId)
    const { data, error: reviewsError } = await useApi().get(endpoint)

    if (!reviewsError && data && data.success) {
      reviews.value = data.data?.reviews || []
      averageRating.value = data.data?.averageRating || 0
      totalReviews.value = data.data?.totalReviews || 0
    }
  } catch (err) {
    console.error('Error fetching reviews:', err)
  } finally {
    isLoadingReviews.value = false
  }
}

// Selected variant
const selectedVariant = ref(null)

// Check if product has variants
const hasVariants = computed(() => product.value?.variants?.length > 0)

// Select a variant
const selectVariant = (variant) => {
  selectedVariant.value = variant
}

// Computed product properties
const productName = computed(() => product.value?.name || 'Product')
const productDescription = computed(() => product.value?.description || '')
const productPrice = computed(() => {
  const variant = selectedVariant.value || product.value?.variants?.find(v => v.isDefault) || product.value?.variants?.[0]
  const price = variant?.sellingPrice
  return price ? parseFloat(price).toFixed(2) : '0.00'
})
const productMrp = computed(() => {
  const variant = selectedVariant.value || product.value?.variants?.find(v => v.isDefault) || product.value?.variants?.[0]
  const mrp = variant?.mrp
  return mrp ? parseFloat(mrp).toFixed(2) : null
})
const productImage = computed(() => {
  // Product Images
  if (product.value?.images?.length) {
    const primaryImage =
      product.value.images.find(img => img.isPrimary) ||
      product.value.images[0]

    if (primaryImage?.media) {
      return (
        primaryImage.media.variants?.webp ||
        primaryImage.media.webpUrl ||
        primaryImage.media.fileUrl
      )
    }
  }

  // Variant Images
  if (product.value?.variants?.length) {
    const defaultVariant =
      product.value.variants.find(v => v.isDefault) ||
      product.value.variants[0]

    if (defaultVariant?.productImages?.length) {
      const primaryImage =
        defaultVariant.productImages.find(img => img.isPrimary) ||
        defaultVariant.productImages[0]

      if (primaryImage?.media?.fileUrl) {
        return primaryImage.media.fileUrl
      }
    }
  }

  return '/img/products/New-Project.png'
})

// Track selected main image
const selectedImage = ref(null)

// Select image for main preview
const selectImage = (imageSrc) => {
  selectedImage.value = imageSrc
}

// All product images (primary + variants) excluding current display image
const allProductImages = computed(() => {
  const images = []

  // Product images
  if (product.value?.images?.length) {
    product.value.images.forEach(img => {
      const imageUrl =
  img?.media?.variants?.webp ||
  img?.media?.webpUrl ||
  img?.media?.fileUrl

      if (imageUrl && !images.includes(imageUrl)) {
        images.push(imageUrl)
      }
    })
  }

  // Variant images
  if (product.value?.variants?.length) {
    product.value.variants.forEach(variant => {
      variant.productImages?.forEach(img => {
        const imageUrl =
  img?.media?.variants?.webp ||
  img?.media?.webpUrl ||
  img?.media?.fileUrl

        if (imageUrl && !images.includes(imageUrl)) {
          images.push(imageUrl)
        }
      })
    })
  }

  return images
})

// Main image to display
const displayImage = computed(() => {
  return selectedImage.value || productImage.value
})

// Set default variant and selected image when product loads
watch(() => product.value, (newProduct) => {
  if (newProduct?.variants?.length) {
    const defaultVariant = newProduct.variants.find(v => v.isDefault) || newProduct.variants[0]
    selectedVariant.value = defaultVariant
  }
  // Reset selected image when product changes
  selectedImage.value = null
}, { immediate: true })

// Bundle product data (can be updated based on API later)
const bundleProduct = {
  id: 'VCN-02',
  variantId: 2, // Numeric variantId for cart API sync
  name: 'VCN-02',
  price: 67.48,
  image: '/img/productsdetails/BOOSTER.png',
  subscription: 'One-time purchase'
}

// Add bundle to cart
const addBundleToCart = () => {
  cartStore.addToCart(bundleProduct)
  bundleInCart.value = true // Set bundle as in cart
}

// Track if bundle is in cart
const bundleInCart = ref(false)

// Check if bundle is in cart
const isBundleInCart = computed(() => {
  return bundleInCart.value
})

// Get bundle quantity
const getBundleQuantity = () => {
  const item = cartStore.getItemById(bundleProduct.id)
  return item ? item.quantity : 1
}

// Increment bundle
const incrementBundle = () => {
  cartStore.incrementQuantity(bundleProduct.id)
}

// Decrement bundle
const decrementBundle = () => {
  cartStore.decrementQuantity(bundleProduct.id)
}

// Dynamic accordion items based on API data
const accordionItems = computed(() => {
  if (!product.value) return []

  const items = []

  if (product.value.uses) {
    items.push({
      title: 'Uses *',
      content: product.value.uses.split(/[,.]\s*/).filter(item => item.trim())
    })
  }

  if (product.value.directionsForUse) {
    items.push({
      title: 'Direction For Use',
      content: [product.value.directionsForUse]
    })
  }

  if (product.value.cautions) {
    items.push({
      title: 'Cautions',
      content: [product.value.cautions]
    })
  }

  if (product.value.primaryBenefits) {
    items.push({
      title: 'Primary Benefits',
      content: product.value.primaryBenefits.split(/[,.]\s*/).filter(item => item.trim())
    })
  }

  if (product.value.ingredients) {
    items.push({
      title: 'Ingredients',
      content: [product.value.ingredients]
    })
  }

  return items
})

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Fetch individual product details with variants
const fetchProductDetails = async (id) => {
  try {
    const { data, error: err } = await get(`${endpoints.PRODUCTS}/${id}`)
    if (!err && data && data.data) {
      // Handle API response: data is an array, extract first product
      product.value = Array.isArray(data.data) ? data.data[0] : data.data
    } else if (!product.value) {
      error.value = 'Product not found'
    }
  } catch (err) {
    console.error('Error fetching product details:', err)
    if (!product.value) {
      error.value = 'Failed to load product details'
    }
  }
}

// Helper function to resolve product image (same logic as productImage computed)
const resolveProductImage = () => {
  // Prefer store helper which handles media.variant/fileUrl/webp consistently
  if (product.value) {
    const img = productStore.getPrimaryImage(product.value)
    if (img) return img
  }

  // Fallbacks for older response shapes
  if (product.value?.images && product.value.images.length > 0) {
    const primaryImage = product.value.images.find(img => img.isPrimary) || product.value.images[0]
    return primaryImage?.image || product.value?.image || '/img/products/New-Project.png'
  }

  return product.value?.image || '/img/products/New-Project.png'
}

// Add variant to cart
const addVariantToCart = () => {
  if (!selectedVariant.value || !product.value) return
  const sellingPrice = selectedVariant.value.sellingPrice ? parseFloat(selectedVariant.value.sellingPrice) : 0
  const mrp = selectedVariant.value.mrp ? parseFloat(selectedVariant.value.mrp) : 0
  const cartItem = {
    id: product.value.id,
    productId: product.value.id,
    variantId: selectedVariant.value.id,
    name: product.value.name,
    variantName: selectedVariant.value.sku,
    price: sellingPrice.toFixed(2),
    mrp: mrp > sellingPrice ? mrp.toFixed(2) : null,
    image: resolveProductImage(),
    quantity: 1
  }
  cartStore.addToCart(cartItem)
}

// Handle Start Now button - add to cart and navigate
const handleStartNow = async () => {
  // If no variant selected, select the default one first
  if (!selectedVariant.value && product.value?.variants?.length > 0) {
    const defaultVariant = product.value.variants.find(v => v.isDefault) || product.value.variants[0]
    selectedVariant.value = defaultVariant
  }

  // Add to cart
  if (selectedVariant.value) {
    addVariantToCart()
  } else if (product.value) {
    // Add product without variant
    const cartItem = {
      id: product.value.id,
      productId: product.value.id,
      name: product.value.name,
      price: productPrice.value,
      mrp: productMrp.value,
      image: resolveProductImage(),
      quantity: 1
    }
    await cartStore.addToCart(cartItem)
  }

  // Navigate to cart
  await navigateTo('/cart')
}

// SSR-safe product preview function
const openProductPreview = (imageSrc) => {
  if (process.client) {
    // Only open preview on client side
    window.open(imageSrc, '_blank')
  }
}
</script>

<style scoped>
/* Fix bundle button visibility and styling */
.bundle-action .add-button {
  border: 2px solid var(--vcn-primary) !important;
  color: white !important;
  background-color: var(--vcn-primary) !important;
  font-weight: 600;
  padding: 5px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 15px;
  text-decoration: none;
  width: 100%;
}

.bundle-action .add-button:hover {
  background-color: var(--vcn-primary) !important;
  border: 2px solid var(--vcn-primary) !important;
  color: white !important;
}

.bundle-quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 2px solid var(--vcn-primary);
  border-radius: 25px;
  padding: 8px 16px;
}

.bundle-qty-btn {
  background: none;
  border: none;
  color: var(--vcn-primary);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.bundle-qty-btn:hover {
  background-color: var(--vcn-primary);
  color: white;
}

.bundle-qty-value {
  color: var(--vcn-primary);
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

/* Variant Selector Styles */
.variant-section {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.variant-label {
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.variant-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.variant-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
}

.variant-btn:hover {
  border-color: var(--vcn-primary);
}

.variant-btn--active {
  border-color: var(--vcn-primary);
  background: #e8f5e9;
}

.variant-sku {
  font-weight: 600;
  font-size: 13px;
  color: #333;
}

.variant-weight {
  font-size: 12px;
  color: #666;
}

.variant-name {
  font-weight: 500;
  font-size: 14px;
  color: #333;
}

.variant-price {
  font-weight: 700;
  font-size: 16px;
  color: var(--vcn-primary);
}

.variant-mrp {
  font-size: 12px;
  text-decoration: line-through;
  color: #999;
}

.variant-info {
  display: flex;
  gap: 15px;
  font-size: 13px;
}

.variant-qty {
  color: #666;
}

.variant-sku-display,
.variant-weight-display {
  color: #666;
  font-size: 13px;
}

.variant-discount {
  color: var(--vcn-primary);
  font-weight: 600;
}

/* Active thumbnail highlight */
.gallery-item.active {
  border: 2px solid var(--vcn-primary);
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item.active .thumb {
  opacity: 1;
}

.gallery-item {
  display: block;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item .thumb {
  cursor: pointer;
  transition: opacity 0.2s;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

@media (max-width: 768px) {
  .gallery-item {
    height: 150px;
  }
}

.gallery-item:hover .thumb {
  opacity: 0.8;
}

.gallery-item {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
}

/* Dynamic Stars Display */
.stars-display {
  display: inline-flex;
  gap: 2px;
  margin-right: 8px;
}

.stars-display .star {
  font-size: 22px;
  color: #ddd;
  transition: color 0.2s ease;
}

.stars-display .star.filled {
  color: #ffc107;
}
</style>
