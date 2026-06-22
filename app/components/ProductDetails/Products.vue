<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <div class="swiper vcn-product-detail-swiper">
        <div class="swiper-wrapper">
          <div v-for="product in products" :key="product.id" class="swiper-slide">
            <div class="product-card">
              <NuxtLink :to="`/product-details/${product.slug}`" class="product-image-wrapper">
                <img :src="getProductImage(product)" :alt="product.name" class="product-image" />
              </NuxtLink>
              <div class="product-content">
                <span class="product-label">{{ product.label || 'AGE 18+' }}</span>
                <h3 class="product-title">
                  <NuxtLink :to="`/product-details/${product.slug}`">{{ product.name }}</NuxtLink>
                </h3>
                <p class="product-description" v-html="product.description"></p>
                <div class="product-price">
                  ₹{{ getProductPrice(product).price }}
                  <span v-if="getProductPrice(product).oldPrice" class="old-price">₹{{
                    getProductPrice(product).oldPrice
                  }}</span>
                </div>
                <div class="product-actions">
                  <NuxtLink :to="`/product-details/${product.slug}`" class="btn-learn">Learn More</NuxtLink>
                  <ClientOnly>
                    <a v-if="!getCartItem(product.id)" href="#" @click.prevent="addToCart(product)"
                      class="btn-cart">Add to Cart</a>
                    <div v-else class="qty-box">
                      <button class="qty-btn minus" @click="cartStore.decrementQuantity(product.id)">−</button>
                      <span class="qty-value">{{ getCartItem(product.id)?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity(product.id)">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Swiper pagination dots -->
        <div class="swiper-pagination vcn-product-detail-swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const products = ref([])
const swiperInstance = ref(null)

const initSwiper = () => {
  if (typeof window === 'undefined' || !window.Swiper) {
    setTimeout(initSwiper, 100)
    return
  }

  const container = document.querySelector('.vcn-product-detail-swiper')
  if (!container) return

  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true)
    swiperInstance.value = null
  }

  const slideCount = container.querySelectorAll('.swiper-slide').length

  swiperInstance.value = new window.Swiper('.vcn-product-detail-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: slideCount >= 2,
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: {
      el: '.vcn-product-detail-swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    }
  })
}

onMounted(async () => {
  await productStore.fetchProducts()
  products.value = productStore.allProducts.slice(0, 4)
  if (process.client) {
    cartStore.loadCart()
    nextTick(() => {
      initSwiper()
    })
  }
})

onBeforeUnmount(() => {
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true)
    swiperInstance.value = null
  }
})

const getProductImage = (product) => {
  return productStore.getPrimaryImage(product)
}

const getProductPrice = (product) => {
  return productStore.getProductPricing(product)
}

const getCartItem = (productId) => {
  return cartStore.getItemById(productId)
}

const addToCart = async (product) => {
  const pricing = getProductPrice(product)
  const defaultVariant = product.variants?.find(v => v.isDefault) || product.variants?.[0]
  const variantId = defaultVariant?.id || product.id

  await cartStore.addToCart({
    id: product.id,
    name: product.name,
    price: parseFloat(pricing.price).toFixed(2),
    mrp: pricing.oldPrice ? parseFloat(pricing.oldPrice).toFixed(2) : null,
    image: getProductImage(product),
    subscription: 'One-time purchase',
    variantId: variantId
  })
}
</script>

<style scoped>
.swiper-slide {
  height: auto;
}

.product-card {
  height: 100%;
}

.product-title :deep(a) {
  color: inherit;
  text-decoration: none;
}

.product-title :deep(a:hover) {
  color: inherit;
}

.qty-box {
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;
  border: 2px solid var(--vcn-primary);
  border-radius: 25px;
  padding: 6px 12px;
}

.qty-btn {
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

.qty-btn:hover {
  background-color: var(--vcn-primary);
  color: white;
}

.qty-value {
  color: var(--vcn-primary);
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

/* Pagination styles */
.vcn-product-detail-swiper-pagination {
  position: relative !important;
  margin-top: 30px !important;
  display: flex !important;
  justify-content: center !important;
  gap: 6px !important;
  bottom: auto !important;
}

.vcn-product-detail-swiper-pagination :deep(.swiper-pagination-bullet) {
  width: 8px !important;
  height: 8px !important;
  background-color: #cccccc !important;
  opacity: 1 !important;
  border-radius: 50% !important;
  transition: all 0.3s ease !important;
}

.vcn-product-detail-swiper-pagination :deep(.swiper-pagination-bullet-active) {
  background-color: var(--vcn-primary) !important;
  width: 20px !important;
  border-radius: 4px !important;
}

/* Ensure consistent product image sizes and alignment */
.product-image-wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 280px !important; /* Increased height */
  width: 245px !important;  /* Increased width */
  flex-shrink: 0 !important;
  overflow: hidden !important;
  border-radius: 12px !important;
}

.product-image {
  max-width: 100% !important; /* Increased to fill container */
  max-height: 100% !important; /* Increased to fill container */
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  transition: transform 0.3s ease !important;
}

.product-card:hover .product-image {
  transform: scale(1.05) !important;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .product-image-wrapper {
    width: 100% !important;   /* Full width container on mobile */
    height: 220px !important;  /* Increased consistent height on mobile viewports */
    margin-bottom: 15px !important;
  }
}
</style>