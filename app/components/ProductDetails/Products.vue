<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <div class="swiper vcn-product-detail-swiper">
        <div class="swiper-wrapper">
          <div v-for="(pair, index) in productPairs" :key="index" class="swiper-slide">
            <div class="row g-3">
              <div v-for="product in pair" :key="product.id" class="col-md-6">
                <div class="product-card">
                  <div class="product-image-wrapper">
                    <img :src="getProductImage(product)" :alt="product.name" class="product-image" />
                  </div>
                  <div class="product-content">
                    <span class="product-label">{{ product.label || 'AGE 18+' }}</span>
                    <h3 class="product-title">{{ product.name }}</h3>
                    <p class="product-description" v-html="product.description"></p>
                    <div class="product-price">
                      ${{ getProductPrice(product).price }}
                      <span v-if="getProductPrice(product).oldPrice" class="old-price">${{
                        getProductPrice(product).oldPrice
                      }}</span>
                    </div>
                    <div class="product-actions">
                      <a :href="`/product-details/${product.slug}`" class="btn-learn">Learn More</a>
                      <a href="/cart" class="btn-cart">Add to Cart</a>
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

const productStore = useProductStore()
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
  products.value = productStore.allProducts.slice(0, 6)
})

const getProductImage = (product) => {
  return productStore.getPrimaryImage(product)
}

const getProductPrice = (product) => {
  return productStore.getProductPricing(product)
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
</style>