<template>
  <ClientOnly>
    <section class="health-section-bg">
      <div class="routine-bundle-wrapper">
        <div class="container routine-bundle-container">
          <div class="row align-items-center g-4 g-lg-5">
            <!-- Left Column: Product Images -->
            <div class="col-lg-6 routine-products-column">
              <div class="routine-wrapper">
                <img class="routine-main-image booster" :src="bundleImage || '/img/productsdetails/BOOSTER.png'"
                  alt="routine products" />

                <!-- Label 1 -->
                <div class="label-block label-1">
                  <div class="routine-product-label">
                    DELIVERS BENEFICIAL BACTERIA
                  </div>
                  <div class="routine-label-connector"></div>
                </div>

                <!-- Label 2 -->
                <div class="label-block label-2">
                  <div class="routine-product-label">NOURISHES THE BACTERIA</div>
                  <div class="routine-label-connector"></div>
                </div>
              </div>
            </div>

            <!-- Right Column: Content -->
            <div class="col-lg-6 routine-content-column">
              <h2 class="routine-main-heading">
                {{ bundleHeading || 'Natural Blood Sugar Control Bundle' }}
              </h2>

              <div v-for="(point, index) in bundleKeyPoints" :key="index" class="routine-product-description"
                :class="{ 'mb-4': index === bundleKeyPoints.length - 1 }">
                <h3 class="routine-product-name">{{ point.title }}</h3>
                <p class="routine-product-details" v-html="point.description"></p>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <ClientOnly>
                    <button v-if="!isBundleInCart()" @click="addBundleToCart" class="routine-cta-button">
                      {{ bundleButtonText || 'Add Bundle • Save 25%' }}
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
  </ClientOnly>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { onMounted } from 'vue'

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()
const productStore = useProductStore()

// API Data
const bundleImage = computed(() => productStore.selectedProductPage?.bundleImage)
const bundleHeading = computed(() => productStore.selectedProductPage?.bundleHeading)
const bundleButtonText = computed(() => productStore.selectedProductPage?.bundleButtonText)
const bundleKeyPoints = computed(() => {
  const apiPoints = productStore.selectedProductPage?.bundleKeyPoints || []
  if (apiPoints.length > 0) return apiPoints
  // Fallback defaults
  return [
    {
      title: 'DBT Care Plus — Blood Sugar Control Bundle:',
      description: '11 powerful Ayurvedic herbs to regulate blood sugar levels, improve glucose metabolism, and support overall diabetic wellness.*'
    },
    {
      title: 'VCN DBT Care Plus — Herbal Juice:',
      description: 'A unique blend of Karela, Jamun, Giloy & more to detoxify the body, purify blood, and naturally manage diabetes symptoms.*'
    }
  ]
})

// Bundle products data
const bundleProducts = [
  {
    id: 'dbt-care-plus-bundle',
    variantId: 3, // Numeric variantId for cart API sync
    name: 'DBT Care Plus — Blood Sugar Control Bundle',
    price: 149.99, // Original price would be higher, showing 25% discount
    image: '/img/productsdetails/BOOSTER.png',
    subscription: 'One-time purchase'
  }
]

// Initialize cart on mount
onMounted(async () => {
  await initializeCart()
  await cartStore.loadCart()
})

// Check if bundle is in cart
const isBundleInCart = () => {
  return bundleProducts.some(product => cartStore.getItemById(product.id))
}

// Get bundle quantity (returns quantity of first bundle product found)
const getBundleQuantity = () => {
  const bundleItem = cartStore.getItemById('dbt-care-plus-bundle')
  return bundleItem ? bundleItem.quantity : 1
}

// Add entire bundle to cart
const addBundleToCart = () => {
  bundleProducts.forEach(product => {
    cartStore.addToCart(product)
  })
}

// Increment bundle quantity
const incrementBundle = () => {
  bundleProducts.forEach(product => {
    cartStore.incrementQuantity(product.id)
  })
}

// Decrement bundle quantity
const decrementBundle = () => {
  bundleProducts.forEach(product => {
    cartStore.decrementQuantity(product.id)
  })
}
</script>

<style scoped>
.routine-cta-button {
  display: block;
  width: 100%;
  padding: 12px 24px;
  background: white;
  color: var(--vcn-primary);
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  text-align: center;
  text-decoration: none;
}

.bundle-quantity-control {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  border: 2px solid var(--vcn-primary);
  border-radius: 25px;
  padding: 10px 31px;
  width: 130px;
}

.bundle-qty-btn {
  background: none;
  border: none;
  color: var(--vcn-primary);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 20px;
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
  min-width: 10px;
  text-align: center;
}
</style>
