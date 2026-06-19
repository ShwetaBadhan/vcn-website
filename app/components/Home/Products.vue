<template>
    <!-- Whole Body Health Section -->
    <section class="vcn-whole-body-section">
        <div class="container-fluid">
            <!-- Header -->
            <div class="vcn-whole-body-header">
                <div class="vcn-whole-body-title-wrapper">
                    <h2 class="vcn-whole-body-main-title">
                        {{ productsSection.header.title }}
                    </h2>
                </div>
                <div>
                    <p class="vcn-whole-body-subtitle">
                        {{ productsSection.header.subtitle }}
                    </p>
                </div>
                <div class="vcn-whole-body-btn-wrapper d-none d-md-block">
                    <NuxtLink :to="productsSection.header.buttonLink" class="vcn-whole-body-view-link">
                        {{ productsSection.header.buttonText }} <span class="vcn-arrow">→</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Error state -->
            <div v-if="error" class="alert alert-danger text-center py-5">
                {{ error }}
            </div>

            <!-- Products grid -->
            <div v-else class="vcn-whole-body-swiper-container">
                <div class="container-fluid">
                    <div class="row">
                        <div v-for="(product, index) in products" :key="product.id"
                            class="col-lg-3 col-md-6 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="600">
                            <NuxtLink :to="`/product-details/${product.slug}`" class="vcn-whole-body-product-card-link">
                                <div class="vcn-whole-body-product-card" @mouseenter="handleMouseEnter(index)"
                                    @mouseleave="handleMouseLeave(index)">
                                    <div class="vcn-whole-body-product-badges">
                                        <span v-if="index === 0"
                                            class="vcn-whole-body-badge vcn-whole-body-badge-bestseller">{{ productsSection.productCard.badges.bestseller }}</span>
                                        <span v-else
                                            class="vcn-whole-body-badge vcn-whole-body-badge-new">{{ productsSection.productCard.badges.new }}</span>
                                    </div>
                                    <span
                                        class="vcn-whole-body-product-label">{{ productsSection.productCard.productLabel }}</span>
                                    <h3 class="vcn-whole-body-product-title">{{ product.name }}</h3>
                                    <div class="vcn-whole-body-product-image">
                                        <img class="product-img" :src="getPrimaryImage(product)" :alt="product.name"
                                            loading="lazy" @error="handleImageError($event)" />
                                        <video :ref="el => { if (el) videoRefs[index] = el }" class="product-video"
                                            muted loop playsinline preload="auto">
                                            <source :src="productsSection.productCard.video" type="video/mp4" />
                                        </video>
                                    </div>
                                    <NuxtLink :to="`/product-details/${product.slug}`"
                                        class="vcn-whole-body-shop-btn">{{ productsSection.productCard.shopButtonText }}</NuxtLink>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Shop All Link (visible on small screens only) -->
            <div class="vcn-whole-body-mobile-btn-wrapper d-flex d-md-none">
                <NuxtLink :to="productsSection.header.buttonLink" class="vcn-whole-body-view-link">
                    {{ productsSection.header.buttonText }} <span class="vcn-arrow">→</span>
                </NuxtLink>
            </div>
        </div>
    </section>

</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'
import { useProductStore } from '~/stores/product'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const productsSection = computed(() =>
    cmsStore.getPageSection('home', 'featuredProducts')
)
const productStore = useProductStore()

const products = computed(() => productStore.featuredProducts)
const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)

// Video refs store
const videoRefs = ref([])

// Clean video URL - removes any & from path
const getCleanVideoUrl = (url) => {
    if (!url) return '/video/pvide.mp4'
    // Remove any & at the start or in the middle of path
    return url.replace(/&/g, '').replace(/^\//, '/')
}

// Handle hover to play/pause video
const handleMouseEnter = (index) => {
    const video = videoRefs.value[index]
    if (video) {
        video.currentTime = 0
        video.play().catch(() => { })
    }
}

const handleMouseLeave = (index) => {
    const video = videoRefs.value[index]
    if (video) {
        video.pause()
        video.currentTime = 0
    }
}


// Helper function to get product pricing - use store getter
const getProductPricing = (product) => {
    return productStore.getProductPricing(product)
}


// Get primary image - use store getter
const getPrimaryImage = (product) => {
    return productStore.getPrimaryImage(product)
}

// Handle image loading errors
const handleImageError = (event) => {
    event.target.src = '/img/products/img1.png'
}

// Fetch products: await on server-side (SSR) for pre-rendering, non-blocking on client-side
if (productStore.products.length === 0) {
    if (import.meta.server) {
        await productStore.fetchProducts()
    } else {
        productStore.fetchProducts()
    }
}
</script>

<style scoped>
/* Big Screen Styles (Defaults) */
.vcn-whole-body-subtitle {
    font-size: 1.1rem !important;
    /* reduce subtitle font size a little bit */
}

.vcn-whole-body-view-link {
    text-decoration: none !important;
}

.vcn-whole-body-product-label {
    padding: 4px 10px !important;
    font-size: 0.75rem !important;
}

.vcn-whole-body-product-image {
    max-width: 290px !important;
    /* increased size of images */
    aspect-ratio: 1 / 1 !important;
    /* same aspect ratio */
    width: 100% !important;
}

.product-img,
.product-video {
    object-fit: contain !important;
    /* not cropped */
    width: 100% !important;
    height: 100% !important;
}

/* Small Screen Styles (max-width: 768px) */
@media (max-width: 768px) {
    .vcn-whole-body-main-title {
        font-size: 2.3rem !important;
        /* increase heading size */
        margin: 0 25px;
    }

    .vcn-whole-body-subtitle {
        font-size: 20px !important;
        /* increased by 5px to 20px */
        margin: 0 25px;
        padding: 25px 0;
    }

    .vcn-whole-body-section {
        padding: 40px 0 !important;
        /* side padding is now 0 */
    }

    .vcn-whole-body-section>.container-fluid {
        margin-left: 2px !important;
        margin-right: 2px !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: calc(100% - 4px) !important;
        /* 2px margin from right and left */
    }

    .vcn-whole-body-swiper-container .row {
        --bs-gutter-x: 8px !important;
        /* smaller horizontal gap to widen cards further */
        --bs-gutter-y: 10px !important;
        /* add gap between vertical card rows */
    }

    .vcn-whole-body-product-card {
        padding: 15px 12px !important; /* increased padding to make card taller */
        margin-bottom: 0 !important;
        /* let row gutters handle vertical gaps */
    }

    .vcn-whole-body-product-badges {
        margin-bottom: 10px !important; /* increased margin to make card taller */
    }

    .vcn-whole-body-product-image {
        max-width: 165px !important; /* increased size of images on mobile */
        aspect-ratio: 1 / 1 !important;
        margin: 12px auto !important; /* increased margin to make card taller */
    }

    .vcn-whole-body-badge {
        font-size: 0.55rem !important;
        /* badges size decrease little bit */
        padding: 2px 5px !important;
    }

    .vcn-whole-body-product-label {
        padding: 3px 6px !important;
        font-size: 0.65rem !important;
    }

    .vcn-whole-body-product-title {
        font-size: 1.15rem !important;
        /* increased product name size */
        margin: 10px 0 !important; /* increased margin to make card taller */
        min-height: auto !important;
    }

    /* shop all button underline in bottom right corner (header link wrapper) */
    .vcn-whole-body-mobile-btn-wrapper {
        display: flex !important;
        justify-content: flex-end !important;
        width: 100% !important;
        margin-top: 25px !important;
        padding-right: 15px !important;
    }

    .vcn-whole-body-view-link {
        text-decoration: none !important;
        font-size: 17px !important;
        /* increased by 3px to approx 17px */
    }
}
</style>