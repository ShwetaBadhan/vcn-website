<template>
  <section class="terms-conditions">
    <!-- Disease Bundles Container -->
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6">
          <h3>{{ bundles.heroSection.title }}</h3>
          <p class="mt-3">
            {{ bundles.heroSection.description }}
          </p>
          <br />
          <NuxtLink :to="bundles.heroSection.buttonLink" class="learn-more-btn mt-5">{{ bundles.heroSection.buttonText
          }}
          </NuxtLink>
        </div>
        <div class="col-lg-6">
          <img :src="bundles.heroSection.image" class="w-100" alt="" />
          <p class="mt-2">
            {{ bundles.heroSection.discountText }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="video-section">
    <div class="section-header">
      <h2 class="section-title">{{ bundles.videoSection.videos.title }}</h2>
    </div>

    <div class="video-grid">
      <div v-for="(video, index) in bundles.videoSection.videos" :key="index" class="video-card">
        <div class="video-thumbnail-container" :data-video-id="video.videoId">
          <img :src="`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`" :alt="video.title"
            class="video-thumbnail" />

          <div class="video-overlay"></div>

          <div class="play-button-overlay"></div>

          <div class="video-player">
            <iframe src=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-top-navigation" />
          </div>
        </div>

        <div class="video-content">
          <h3 class="video-title">
            {{ video.title }}
          </h3>

          <p class="video-description">
            {{ video.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="vcn-acidity-bundle-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="vcn-acidity-main-heading">
            {{ bundles.bundleBenefitsSection.heading }}
          </h2>
          <p class="vcn-acidity-intro-text">
            {{ bundles.bundleBenefitsSection.introText }}
            <button class="vcn-acidity-read-more-btn">{{ bundles.bundleBenefitsSection.readMoreText }}</button>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="vcn-acidity-bundle-container">
            <h3 class="vcn-acidity-bundle-title">{{ bundles.bundleBenefitsSection.bundleTitle }}</h3>

            <div class="row">
              <div v-for="benefit in bundles.bundleBenefitsSection.benefits" :key="benefit.number"
                class="col-lg-6 col-md-6 col-12">
                <div class="vcn-acidity-benefit-card">
                  <span class="vcn-acidity-benefit-number">
                    {{ benefit.number }}
                  </span>

                  <div class="vcn-acidity-benefit-icon">
                    <img :src="benefit.icon" :alt="benefit.text" />
                  </div>

                  <p class="vcn-acidity-benefit-text">
                    {{ benefit.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="vcn-new-product">
    <div class="container-fluid">
      <div class="row g-3">
        <h2 class="vcn-acidity-main-heading">{{ bundles.productsSection.heading }}</h2>
        <!-- Dynamic Products -->
        <div v-for="(product, index) in bundleProducts" :key="product.id" class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <span v-if="index === 2" class="product-badge">NEW</span>
              <img :src="getProductImage(product)" :alt="product.name" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">AGE 18+</span>
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-description" v-html="product.description || 'Premium product for your wellness needs.'">
              </p>
              <div class="product-price">
                ₹{{ getProductPrice(product).price }}
                <span v-if="getProductPrice(product).oldPrice" class="old-price">₹{{ getProductPrice(product).oldPrice
                  }}</span>
              </div>
              <div class="product-actions">
                <NuxtLink :to="`/product-details/${product.slug}`" class="btn-learn">Learn More</NuxtLink>
                <ClientOnly>
                  <a v-if="!getCartItem(product.id)" href="#" @click.prevent="addToCart(product)" class="btn-cart">Add
                    to Cart</a>
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
  </section>
  <section class="acidity-info-container">
    <h1 class="main-heading">{{ bundles.knowMoreSection.heading }}</h1>
    <div class="expand-section">
      <div v-for="section in bundles.knowMoreSection.accordions" :key="section.id" class="expandable-section"
        :class="{ active: activeSection === section.id }">
        <div class="accordion-trigger" @click="toggleSection(section.id)">
          <div class="trigger-left-area">
            <div class="circle-badge">
              <img :src="section.image" :alt="section.title" />
            </div>

            <h3 class="accordion-label">
              {{ section.title }}
            </h3>
          </div>

          <span class="arrow-indicator">›</span>
        </div>

        <div class="panel-body" v-show="activeSection === section.id">
          <div class="items-layout">
            <div v-for="(item, index) in section.items" :key="index" class="feature-block">
              <div class="feature-symbol">
                {{ item.icon }}
              </div>

              <div class="feature-details">
                <h3 class="detail-title">
                  {{ item.title }}
                </h3>

                <p class="detail-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="care-wrapper">
    <h1 class="primary-heading">{{ bundles.completeCareSection.heading }}</h1>
    <p class="intro-paragraph">
      {{bundles.completeCareSection.description}}
    </p>

    <div class="row g-4">
  <div
    v-for="(card, index) in bundles.completeCareSection.cards"
    :key="index"
    class="col-lg-6 col-md-12"
  >
    <div class="care-card">
      <div class="icon-circle">
        <img :src="card.image" :alt="card.title" />
      </div>

      <h2 class="card-heading">
        {{ card.title }}
      </h2>

      <p class="card-content">
        {{ card.description }}

        <div
          v-if="card.highlight"
          class="highlight-text"
        >
          {{ card.highlight }}
        </div>
      </p>
    </div>
  </div>
</div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const bundles = computed(
  () => cmsStore.getPageSection('bundleDetails', 'bundleDetails')
)

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const productStore = useProductStore()
const cartStore = useCartStore()
const activeSection = ref(null)

onMounted(() => {
  productStore.fetchProducts()
  if (process.client) {
    cartStore.loadCart()
  }
})

const toggleSection = (sectionId) => {
  activeSection.value = activeSection.value === sectionId ? null : sectionId
}

// Get products for bundle (first 3 products)
const bundleProducts = computed(() => {
  return productStore.allProducts.slice(0, 4)
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