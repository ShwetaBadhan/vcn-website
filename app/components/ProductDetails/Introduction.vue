<template>
  <section class="product-detail-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Column - Product Images -->
        <div class="col-lg-7">
          <!-- Desktop Version: main image + thumbnails -->
          <div class="d-none d-md-block">
            <div class="product-img-wrapper">
              <div class="product-image-cards">
                <video 
                  v-if="!selectedImage"
                  id="mainImage" 
                  src="/img/single%20product/vcn-seed-vdo.mp4" 
                  autoplay 
                  loop 
                  muted 
                  playsinline 
                  style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px;"
                ></video>
                <img 
                  v-else
                  id="mainImage" 
                  :src="displayImage" 
                  :alt="productName" 
                  @click="openProductPreview(displayImage)" 
                />
              </div>
            </div>

            <!-- THUMBNAILS - Dynamic product images -->
            <div class="row g-2 mt-2" v-if="allProductImages.length > 0">
              <div v-for="(img, index) in allProductImages" :key="index" class="col-6 mb-2">
                <div class="product-gallery">
                  <div class="gallery-item" :class="{ 'active': selectedImage === img }">
                    <img class="thumb" :src="img" :alt="productName" @click="selectImage(img)" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Version: Swiper Carousel -->
          <div class="d-block d-md-none">
            <div class="swiper product-images-swiper">
              <div class="swiper-wrapper">
                <!-- Slide 1: Video -->
                <div class="swiper-slide">
                  <div class="mobile-swiper-image-card">
                    <video 
                      src="/img/single%20product/vcn-seed-vdo.mp4" 
                      autoplay 
                      loop 
                      muted 
                      playsinline 
                      style="width: 100%; height: 100%; object-fit: contain;"
                    ></video>
                  </div>
                </div>
                <!-- Other Slides: Images -->
                <div v-for="(img, index) in allProductImages" :key="index" class="swiper-slide">
                  <div class="mobile-swiper-image-card">
                    <img :src="img" :alt="productName" @click="openProductPreview(img)" class="mobile-swiper-image" />
                  </div>
                </div>
              </div>
              <!-- Swiper pagination dots -->
              <div class="swiper-pagination product-images-swiper-pagination"></div>
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
                <div class="bundle-bottom-row">
                  <div class="bundle-price">
                    <span class="current-price">₹67.48</span>
                    <span class="original-price">₹89.98</span>
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick, onBeforeUnmount } from 'vue'
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

// Swiper state
const productSwiperInstance = ref(null)

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

// Swiper initialization function
const initProductSwiper = () => {
  if (typeof window === 'undefined' || !window.Swiper) {
    setTimeout(initProductSwiper, 100)
    return
  }

  const container = document.querySelector('.product-images-swiper')
  if (!container) return

  if (productSwiperInstance.value) {
    productSwiperInstance.value.destroy(true, true)
    productSwiperInstance.value = null
  }

  productSwiperInstance.value = new window.Swiper('.product-images-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.product-images-swiper-pagination',
      clickable: true
    }
  })
}

// Initialize cart and swiper on client
onMounted(async () => {
  await initializeCart()
  await cartStore.loadCart()

  // Check if bundle is already in cart
  const existingBundle = cartStore.getItemById(bundleProduct.id)
  bundleInCart.value = !!existingBundle

  // Fetch reviews
  await fetchReviews()

  if (process.client) {
    initProductSwiper()
  }
})


onBeforeUnmount(() => {
  if (productSwiperInstance.value) {
    productSwiperInstance.value.destroy(true, true)
    productSwiperInstance.value = null
  }
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
  return '/img/single%20product/seed%201.webp'
})

// Track selected main image
const selectedImage = ref(null)

// Select image for main preview
const selectImage = (imageSrc) => {
  if (selectedImage.value === imageSrc) {
    selectedImage.value = null
  } else {
    selectedImage.value = imageSrc
  }
}

// All product images (primary + variants) excluding current display image
const allProductImages = computed(() => {
  return [
    '/img/single%20product/seed%201.webp',
    '/img/single%20product/seed%202.webp',
    '/img/single%20product/seed%203.webp',
    '/img/single%20product/vcnimage-fallback.webp'
  ]
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

// Watch images to re-initialize swiper if they load/change dynamically
watch(() => allProductImages.value, () => {
  if (process.client) {
    nextTick(() => {
      initProductSwiper()
    })
  }
}, { deep: true })

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
/* Custom premium style for bundle card to match the design */
.bundle-card {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  background-color: #f5f7f3 !important; /* Soft light green */
  border-radius: 20px !important; /* Premium rounded corners */
  padding: 16px 20px !important;
  gap: 20px !important;
  max-width: 600px !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
  text-align: left !important;
}

.bundle-image {
  flex-shrink: 0 !important;
}

.bundle-image img {
  width: 110px !important;
  height: auto !important;
  object-fit: contain !important;
}

.bundle-content {
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
}

.bundle-content h3 {
  font-size: 19px !important;
  font-weight: 700 !important;
  color: #1e331e !important; /* Dark green theme color */
  margin: 0 0 6px 0 !important;
  letter-spacing: -0.2px !important;
}

.bundle-content p {
  font-size: 14.5px !important;
  color: #1e331e !important; /* Match text color */
  opacity: 0.9 !important;
  margin: 0 0 12px 0 !important;
  line-height: 1.4 !important;
}

.bundle-bottom-row {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;
  gap: 15px !important;
  flex-wrap: wrap !important;
}

.bundle-price {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}

.bundle-price .current-price {
  font-size: 19px !important;
  font-weight: 700 !important;
  color: #1e331e !important;
}

.bundle-price .original-price {
  font-size: 15px !important;
  color: #889488 !important;
  text-decoration: line-through !important;
}

.bundle-action {
  display: inline-flex !important;
}

.bundle-action .add-button {
  border: 1px solid #1e331e !important; /* Thin border */
  color: #1e331e !important;
  background-color: transparent !important;
  font-weight: 600 !important;
  padding: 6px 28px !important;
  border-radius: 30px !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  font-size: 14.5px !important;
  text-decoration: underline !important; /* Underline text like the image */
  width: auto !important;
  display: inline-block !important;
}

.bundle-action .add-button:hover {
  background-color: #1e331e !important;
  color: white !important;
  text-decoration: none !important;
}

.bundle-quantity-control {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  background: white !important;
  border: 1px solid #1e331e !important;
  border-radius: 25px !important;
  padding: 6px 12px !important;
}

.bundle-qty-btn {
  background: none !important;
  border: none !important;
  color: #1e331e !important;
  font-size: 16px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  width: 20px !important;
  height: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 50% !important;
}

.bundle-qty-btn:hover {
  background-color: #1e331e !important;
  color: white !important;
}

.bundle-qty-value {
  color: #1e331e !important;
  font-weight: 600 !important;
  min-width: 15px !important;
  text-align: center !important;
}

/* Responsiveness adjustments for smaller mobile screens */
@media (max-width: 480px) {
  .bundle-card {
    padding: 12px 14px !important;
    gap: 12px !important;
  }

  .bundle-image img {
    width: 80px !important;
  }

  .bundle-content h3 {
    font-size: 16px !important;
  }

  .bundle-content p {
    font-size: 12.5px !important;
    margin-bottom: 8px !important;
  }

  .bundle-bottom-row {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }

  .bundle-price .current-price {
    font-size: 16px !important;
  }

  .bundle-price .original-price {
    font-size: 13px !important;
  }

  .bundle-action .add-button {
    padding: 4px 20px !important;
    font-size: 13px !important;
  }
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

/* Main Product Image wrapper classes */
.product-img-wrapper {
  height: auto !important;
  overflow: visible !important;
}

.product-image-cards {
  max-height: 800px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  padding: 0px;
  width: 100%;
  aspect-ratio: 1 / 1;
}

#mainImage {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain !important;
  cursor: pointer;
  transition: transform 0.3s ease;
}

#mainImage:hover {
  transform: scale(1.02);
}

/* Mobile Swiper for Product Images */
.product-images-swiper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.mobile-swiper-image-card {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
}

.mobile-swiper-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain !important;
  cursor: pointer;
}

.product-images-swiper-pagination {
  position: relative !important;
  margin-top: 15px !important;
  display: flex !important;
  justify-content: center !important;
  gap: 6px !important;
  bottom: auto !important;
}

.product-images-swiper-pagination :deep(.swiper-pagination-bullet) {
  width: 8px !important;
  height: 8px !important;
  background-color: #cccccc !important;
  opacity: 1 !important;
  border-radius: 50% !important;
  transition: all 0.3s ease !important;
}

.product-images-swiper-pagination :deep(.swiper-pagination-bullet-active) {
  background-color: var(--vcn-primary) !important;
  width: 20px !important;
  border-radius: 4px !important;
}

/* Active thumbnail highlight */
.gallery-item.active {
  border: 2px solid var(--vcn-primary) !important;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item.active .thumb {
  opacity: 1;
}

.gallery-item {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 500 / 294;
  height: auto !important;
  /* background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05); */
  padding: 2px;
}

.gallery-item .thumb,
.thumb {
  cursor: pointer;
  transition: opacity 0.2s;
  display: block;
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
  object-position: center;
}

/* Avoid cropping on the booster/bundle card image */
.bundle-image img {
  width: 130px !important;
  height: auto !important;
  object-fit: contain !important;
}

.gallery-item:hover .thumb {
  opacity: 0.8;
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

/* Responsiveness adjustments for small viewports */
@media (max-width: 991px) {
  .product-detail-section {
    padding-top: 60px !important;
    padding-bottom: 40px !important;
  }

  .product-info {
    margin-top: 30px;
    padding: 24px !important;
  }

  .product-details-title {
    font-size: 26px !important;
  }
}

@media (max-width: 768px) {
  .product-detail-section {
    padding-left: 15px !important;
    padding-right: 15px !important;
    padding-top: 40px !important;
  }

  .product-image-cards {
    max-height: 600px;
    padding: 0px;
  }

  .product-info {
    padding: 20px !important;
    border-radius: 12px !important;
  }

  .product-details-title {
    font-size: 22px !important;
    text-align: left !important;
  }

  .rating-section {
    justify-content: flex-start !important;
  }

  .price-section {
    text-align: left !important;
  }

  .vcn-cobiotics-badge {
    display: block;
    width: fit-content;
    margin: 10px 0 !important;
  }

  .delivery-info {
    text-align: left !important;
    font-size: 0.95rem;
  }

  .subscribe-text {
    text-align: left !important;
  }

  .vcn-acc-header {
    font-size: 16px !important;
    padding: 14px 0 !important;
  }

  .vcn-benefits-list li {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 576px) {
  .product-image-cards {
    max-height: 500px;
    padding: 0px;
    border-radius: 12px;
  }

  .variant-options {
    justify-content: flex-start !important;
  }

  .variant-btn {
    min-width: 80px;
    padding: 8px 10px;
  }

  .variant-sku {
    font-size: 11px;
  }

  .variant-price {
    font-size: 14px;
  }

  .btn-start-now {
    padding: 12px 24px !important;
    font-size: 14px !important;
  }

  .subscribe-text {
    font-size: 0.9rem !important;
    text-align: left !important;
  }
}

/* Video Thumbnail styling */
.video-thumb-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 100%;
  background: rgba(30, 51, 30, 0.05);
  color: #1e331e;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gallery-item.active .video-thumb-preview {
  background: rgba(30, 51, 30, 0.1);
  color: var(--vcn-primary);
}

.video-thumb-preview i {
  font-size: 24px;
}

@media (min-width: 992px) {
  .product-details-title {
    font-size: 25px !important;
  }

  .rating-text {
    font-size: 13px !important;
  }

  .product-details-description {
    font-size: 14px !important;
  }

  .variant-label {
    font-size: 12px !important;
  }

  .variant-sku {
    font-size: 11px !important;
  }

  .variant-weight {
    font-size: 10px !important;
  }

  .variant-price {
    font-size: 14px !important;
  }

  .variant-mrp {
    font-size: 11px !important;
  }

  .variant-sku-display,
  .variant-weight-display,
  .variant-discount {
    font-size: 11.5px !important;
  }

  .vcn-cobiotics-badge {
    font-size: 12.5px !important;
  }

  .price-section .current-price {
    font-size: 24px !important;
  }

  .price-section .old-price {
    font-size: 15px !important;
  }

  .delivery-info {
    font-size: 13.5px !important;
  }

  .btn-start-now {
    font-size: 14px !important;
  }

  .subscribe-text {
    font-size: 13.5px !important;
  }

  .vcn-acc-header {
    font-size: 17px !important;
    padding: 15px 0 !important;
  }

  .vcn-acc-icon {
    font-size: 18px !important;
  }

  .vcn-acc-body {
    padding: 5px 0 12px 0 !important;
  }

  .vcn-benefits-list li {
    font-size: 13.5px !important;
    padding: 5px 0 5px 18px !important;
  }

  .bundle-content h3 {
    font-size: 17px !important;
  }

  .bundle-content p {
    font-size: 13px !important;
  }

  .bundle-price .current-price {
    font-size: 17px !important;
  }

  .bundle-price .original-price {
    font-size: 13px !important;
  }

  .bundle-action .add-button {
    font-size: 13px !important;
  }
}
</style>
