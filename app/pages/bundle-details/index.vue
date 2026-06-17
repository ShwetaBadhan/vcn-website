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
      <h2 class="section-title">{{ bundles.videoSection.title }}</h2>
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
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('bundle-details-cms', () => cmsStore.fetchSectionsBySlug('bundle-details'))

const bundles = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections by name/key
  const heroSec = sections.find(s => s.name === 'heroSection' || s.sectionKey === 'bundle-details-hero')
  const videoSec = sections.find(s => s.name === 'videoSection' || s.sectionKey === 'bundle-details-videos')
  const benefitsSec = sections.find(s => s.name === 'bundleBenefitsSection' || s.sectionKey === 'bundle-benefits')
  const productsSec = sections.find(s => s.name === 'productsSection' || s.sectionKey === 'bundle-products')
  const knowMoreSec = sections.find(s => s.name === 'knowMoreSection' || s.sectionKey === 'know-more-acidity')
  const careSec = sections.find(s => s.name === 'completeCareSection' || s.sectionKey === 'complete-care')
  
  const fallback = cmsStore.getPageSection('bundleDetails', 'bundleDetails') || {
    heroSection: { title: '', description: '', buttonText: '', buttonLink: '', image: '', discountText: '' },
    videoSection: { title: '', videos: [] },
    bundleBenefitsSection: { heading: '', introText: '', readMoreText: '', bundleTitle: '', benefits: [] },
    productsSection: { heading: '' },
    knowMoreSection: { heading: '', accordions: [] },
    completeCareSection: { heading: '', description: '', cards: [] }
  }

  // Resolve heroSection
  let heroImage = fallback.heroSection.image
  const rawHeroImage = heroSec?.extraData?.image || heroSec?.image
  if (rawHeroImage) {
    if (typeof rawHeroImage === 'string') {
      heroImage = rawHeroImage
    } else {
      heroImage = getCmsImageUrl(rawHeroImage)
    }
  }

  const resolvedHero = {
    title: heroSec?.title || fallback.heroSection.title,
    description: heroSec?.description || fallback.heroSection.description,
    buttonText: heroSec?.buttonText || fallback.heroSection.buttonText,
    buttonLink: heroSec?.buttonLink || fallback.heroSection.buttonLink,
    image: heroImage,
    discountText: heroSec?.extraData?._extraData?.discountText || heroSec?.extraData?.discountText || fallback.heroSection.discountText
  }

  // Resolve videoSection
  const resolvedVideoTitle = videoSec?.title || fallback.videoSection.title
  let resolvedVideos = fallback.videoSection.videos
  if (videoSec?.items && videoSec.items.length > 0) {
    resolvedVideos = videoSec.items.map(item => ({
      videoId: item.extraData?.videoId || '',
      title: item.title || '',
      description: item.description || ''
    }))
  }

  const resolvedVideoSection = {
    title: resolvedVideoTitle,
    videos: resolvedVideos
  }

  // Resolve bundleBenefitsSection
  let resolvedBenefits = fallback.bundleBenefitsSection.benefits
  if (benefitsSec?.items && benefitsSec.items.length > 0) {
    resolvedBenefits = benefitsSec.items.map(item => {
      let iconSrc = item.extraData?.icon || item.image || ''
      if (iconSrc && typeof iconSrc !== 'string') {
        iconSrc = getCmsImageUrl(iconSrc)
      }
      return {
        number: item.extraData?.number || 1,
        icon: iconSrc,
        text: item.title || item.extraData?.text || ''
      }
    })
  }

  const resolvedBenefitsSection = {
    heading: benefitsSec?.title || fallback.bundleBenefitsSection.heading,
    introText: benefitsSec?.description || fallback.bundleBenefitsSection.introText,
    readMoreText: benefitsSec?.extraData?._extraData?.readMoreText || benefitsSec?.extraData?.readMoreText || fallback.bundleBenefitsSection.readMoreText,
    bundleTitle: benefitsSec?.extraData?._extraData?.bundleTitle || benefitsSec?.extraData?.bundleTitle || fallback.bundleBenefitsSection.bundleTitle,
    benefits: resolvedBenefits
  }

  // Resolve productsSection
  const resolvedProductsSection = {
    heading: productsSec?.title || fallback.productsSection.heading
  }

  // Resolve knowMoreSection
  let resolvedAccordions = fallback.knowMoreSection.accordions
  if (knowMoreSec?.items && knowMoreSec.items.length > 0) {
    resolvedAccordions = knowMoreSec.items.map(item => {
      const fallbackAcc = fallback.knowMoreSection.accordions.find(a => a.id === item.name)
      let accImage = item.extraData?.image || item.image || fallbackAcc?.image || ''
      if (accImage && typeof accImage !== 'string') {
        accImage = getCmsImageUrl(accImage)
      }
      return {
        id: item.name || '',
        title: item.title || '',
        image: accImage,
        items: item.extraData?.items || []
      }
    })
  }

  const resolvedKnowMoreSection = {
    heading: knowMoreSec?.title || fallback.knowMoreSection.heading,
    accordions: resolvedAccordions
  }

  // Resolve completeCareSection
  let resolvedCards = fallback.completeCareSection.cards
  if (careSec?.items && careSec.items.length > 0) {
    resolvedCards = careSec.items.map((item, idx) => {
      const fallbackCard = fallback.completeCareSection.cards[idx] || fallback.completeCareSection.cards.find(c => c.title === item.title)
      let cardImage = item.extraData?.image || item.image || fallbackCard?.image || ''
      if (cardImage && typeof cardImage !== 'string') {
        cardImage = getCmsImageUrl(cardImage)
      }
      return {
        title: item.title || '',
        image: cardImage,
        description: item.description || '',
        highlight: item.extraData?.highlight || null
      }
    })
  }

  const resolvedCompleteCareSection = {
    heading: careSec?.title || fallback.completeCareSection.heading,
    description: careSec?.description || fallback.completeCareSection.description,
    cards: resolvedCards
  }

  return {
    heroSection: resolvedHero,
    videoSection: resolvedVideoSection,
    bundleBenefitsSection: resolvedBenefitsSection,
    productsSection: resolvedProductsSection,
    knowMoreSection: resolvedKnowMoreSection,
    completeCareSection: resolvedCompleteCareSection
  }
})

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
