<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <div class="swiper vcn-product-detail-swiper">
        <div class="swiper-wrapper">
          <div v-for="(pair, index) in productPairs" :key="index" class="swiper-slide">
            <div class="row g-3">
              <div v-for="product in pair" :key="product.id" class="col-md-6">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const products = ref([])

const productPairs = computed(() => {
  const pairs = []
  for (let i = 0; i < products.value.length; i += 2) {
    pairs.push(products.value.slice(i, i + 2))
  }
  return pairs
})

onMounted(async () => {
  await productStore.fetchProducts()
  products.value = productStore.allProducts.slice(0, 4)
  if (process.client) {
    cartStore.loadCart()
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

.swiper-slide>.row {
  align-items: stretch;
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
</style>