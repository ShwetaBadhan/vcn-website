<template>

  <section class="product-detail-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Column - Product Images -->
        <!-- MAIN PRODUCT IMAGE -->
        <div class="col-lg-7">
          <div class="product-img-wrapper">
            <div class="product-image-cards">
              <img id="mainImage" src="/img/products/New-Project.png" alt="Daily Symbiotic"
                @click="openProductPreview(src)" />
            </div>
          </div>

          <!-- THUMBNAILS -->
          <div class="row mt-3">
            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img class="thumb" src="https://assets.embeddables.com/Rectangle122041_004213986439953521.png"
                    @click="openProductPreview(src)" />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img class="thumb" src="https://assets.embeddables.com/Rectangle122051_8551790234297849.png"
                    @click="openProductPreview(src)" />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img class="thumb" src="http://assets.embeddables.com/Rectangle122071_6289075903534314.png"
                    @click="openProductPreview(src)" />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img class="thumb" src="http://assets.embeddables.com/HeroSupplementFacts_9730338301782036.png"
                    @click="openProductPreview(src)" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-1"></div> -->
        <!-- Right Column - Product Info -->
        <div class="col-lg-5">
          <div class="product-info">
            <h1 class="product-details-title">DBT Care Plus</h1>

            <div class="rating-section">
              <img src="/img/icons/stars.png" alt="" />
              <span class="rating-text">4.8 • (10069 Reviews)</span>
            </div>

            <p class="product-details-description">
              DBT Care Plus is a natural Ayurvedic formulation crafted with a
              powerful blend of 12 herbs to help maintain healthy blood sugar
              levels. It supports balanced energy, reduces weakness, and
              promotes overall wellness, making it a safe and effective choice
              for managing diabetes naturally.
            </p>
            <span class="vcn-cobiotics-badge">Bundle + Save 25%</span>
            <div class="price-section">
              <span class="current-price">$39.99</span>
              <span class="old-price">$59.99</span>
            </div>

            <div class="delivery-info">
              30-day supply delivered monthly. <br />
              Pause or cancel anytime.
            </div>

            <a href="cart" class="btn-start-now">Start Now</a>

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
                <img src="https://assets.embeddables.com/Frame1739331849_5922073548695651.png"
                  alt="DM-02 Daily Multivitamin" />
              </div>
              <div class="bundle-content">
                <h3>Bundle + Save 25%</h3>
                <p>
                  Add DM-02™ Daily Multivitamin to your routine and save on your
                  first order.
                </p>
                <div class="bundle-price">
                  <span class="current-price">$67.48</span>
                  <span class="original-price">$89.98</span>
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
import { ref, onMounted, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()

const activeIndex = ref(null)

// Bundle product data
const bundleProduct = {
  id: 'dm-02-daily-multivitamin',
  name: 'DM-02™ Daily Multivitamin',
  price: 67.48,
  image: 'https://assets.embeddables.com/Frame1739331849_5922073548695651.png',
  subscription: 'One-time purchase'
}

// Initialize cart on mount
onMounted(async () => {
  await initializeCart()
  await cartStore.loadCart()

  // Clear any existing bundle to ensure clean state
  const existingBundle = cartStore.getItemById(bundleProduct.id)
  if (existingBundle) {
    cartStore.removeFromCart(bundleProduct.id)
  } else {
    bundleInCart.value = false // Set initial state to false
  }
})

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

const accordionItems = ref([
  {
    title: 'Uses *',
    content: [
      'Supports healthy blood sugar levels',
      'Improves glucose metabolism',
      'Boosts energy and detoxifies the body',
    ],
  },
  {
    title: 'Direction For Use',
    content: [
      'Take 20–30 ml diluted in lukewarm water, twice daily before meals.',
    ],
  },
  {
    title: 'Cautions',
    content: [
      'For adults only. Consult doctor if pregnant or on medication.',
    ],
  },
  {
    title: 'Primary Benefits',
    content: [
      'Blood sugar control',
      'Enhanced insulin function',
      'Improved metabolism',
      'Detoxification',
    ],
  },
  {
    title: 'Ingredients',
    content: [
      'Charantin, Momordicin, Gymnemic acids, antioxidants.',
    ],
  },
])

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
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
</style>
