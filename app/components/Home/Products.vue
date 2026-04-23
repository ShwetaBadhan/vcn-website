<template>
    <!-- Whole Body Health Section -->
    <section class="vcn-whole-body-section">
        <div class="container-fluid">
            <!-- Header -->
            <div class="vcn-whole-body-header">
                <div class="vcn-whole-body-title-wrapper">
                    <h2 class="vcn-whole-body-main-title">
                        Natural Wellness You Can Trust
                    </h2>
                </div>
                <div>
                    <p class="vcn-whole-body-subtitle">
                        Explore our wide range of health, wellness, and personal care products designed to support your
                        everyday needs.
                    </p>
                </div>
                <div>
                    <a href="/all-products" class="vcn-whole-body-view-link">
                        Shop All <span class="vcn-arrow">→</span>
                    </a>
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
                        <div v-for="(product, index) in products" :key="product.id" class="col-lg-3 col-md-6 col-sm-6"
                            data-aos="fade-up" data-aos-duration="600">
                            <NuxtLink :to="`/product-details/${product.slug}`" class="vcn-whole-body-product-card-link">
                                <div class="vcn-whole-body-product-card" @mouseenter="handleMouseEnter(index)"
                                    @mouseleave="handleMouseLeave(index)">
                                    <div class="vcn-whole-body-product-badges">
                                        <span v-if="index === 0"
                                            class="vcn-whole-body-badge vcn-whole-body-badge-bestseller">Bestseller</span>
                                        <span v-else class="vcn-whole-body-badge vcn-whole-body-badge-new">New</span>
                                    </div>
                                    <span class="vcn-whole-body-product-label">VCN-02</span>
                                    <h3 class="vcn-whole-body-product-title">{{ product.name }}</h3>
                                    <div class="vcn-whole-body-product-image">
                                        <img class="product-img" :src="getPrimaryImage(product)" :alt="product.name"
                                            loading="eager" @error="handleImageError($event)" />
                                        <video :ref="el => { if (el) videoRefs[index] = el }" class="product-video"
                                            muted loop playsinline preload="auto">
                                            <source :src="getCleanVideoUrl('/video/pvide.mp4')" type="video/mp4" />
                                        </video>
                                    </div>
                                    <a :href="`/product-details/${product.slug}`" class="vcn-whole-body-shop-btn">Shop
                                        Now</a>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'
import { useProductStore } from '~/stores/product'

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

// Fetch products on mount
onMounted(async () => {
    await productStore.fetchProducts()
})
</script>