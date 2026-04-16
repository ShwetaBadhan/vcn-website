<template>
    <!-- Whole Body Health Section -->
    <section class="vcn-whole-body-section">
        <div class="container-fluid">
            <!-- Header -->
            <div class="vcn-whole-body-header" data-aos="fade-up" data-aos-duration="1000">
                <div class="vcn-whole-body-title-wrapper">
                    <h2 class="vcn-whole-body-main-title" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-delay="100">
                        Whole body health starts in the gut.
                    </h2>
                </div>
                <div>
                    <p class="vcn-whole-body-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        Formulations that provide fast-acting and sustained support using
                        scientifically and clinically studied ingredients.
                    </p>
                </div>
            </div>

            <!-- Shop All button between header and products -->
            <div class="text-center mt-3 mb-4">
                <a href="/all-products" class="vcn-whole-body-view-link" @mouseenter="prefetchProducts">
                    Shop All <span class="vcn-arrow">→</span>
                </a>
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
                                <div class="vcn-whole-body-product-card">
                                    <div class="vcn-whole-body-product-badges">
                                        <span v-if="product.isNew"
                                            class="vcn-whole-body-badge vcn-whole-body-badge-new">New</span>
                                        <span v-if="product.isBestseller"
                                            class="vcn-whole-body-badge vcn-whole-body-badge-bestseller">Bestseller</span>
                                    </div>
                                    <span v-if="product.label" class="vcn-whole-body-product-label">{{ product.label }}
                                    </span>
                                    <h3 class="vcn-whole-body-product-title">{{ product.name }}</h3>
                                    <div class="vcn-whole-body-product-image">
                                        <img class="product-img" :src="getPrimaryImage(product)" :alt="product.name"
                                            loading="eager" @error="handleImageError($event)" />
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
import { reactive, ref, onMounted } from 'vue'
import { useApi } from '~/config/api/useApi'

const { getFromEndpoint } = useApi()

const products = ref([])
const loading = ref(true)
const error = ref(null)
const CACHE_KEY = 'home-products-cache-v2'
const CACHE_TTL = 5 * 60 * 1000

const productDetailsCache = reactive({})
const cacheLoaded = ref({})


// Helper function to get product pricing
const getProductPricing = (product) => {
    const productId = product.id

    // Check if we have cached details with variants
    const cachedDetails = productDetailsCache[productId]
    if (cachedDetails?.variants?.length > 0) {
        const defaultVariant = cachedDetails.variants.find(v => v.isDefault) || cachedDetails.variants[0]
        const sellingPrice = defaultVariant?.sellingPrice ? parseFloat(defaultVariant.sellingPrice) : 0
        const mrp = defaultVariant?.mrp ? parseFloat(defaultVariant.mrp) : 0
        return {
            price: sellingPrice.toFixed(2),
            oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
        }
    }

    // If product has variants in the list data
    if (product.variants && product.variants.length > 0) {
        const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
        const sellingPrice = defaultVariant?.sellingPrice ? parseFloat(defaultVariant.sellingPrice) : 0
        const mrp = defaultVariant?.mrp ? parseFloat(defaultVariant.mrp) : 0
        return {
            price: sellingPrice.toFixed(2),
            oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
        }
    }

    return {
        price: '0.00',
        oldPrice: null
    }
}

// Fetch individual product details for pricing
const { get, endpoints } = useApi()

const fetchProductDetailsForPricing = async (productId) => {
    if (cacheLoaded.value[productId]) return
    cacheLoaded.value[productId] = true
    try {
        const { data } = await get(`${endpoints.PRODUCTS}/${productId}`)
        if (data?.data?.variants?.length > 0) {
            productDetailsCache[productId] = data.data
        }
    } catch (e) {
        console.error('Failed to fetch product details for pricing:', e)
    }
}

// Get primary image - checks all possible sources
const getPrimaryImage = (product) => {
    // Check product.images array from API
    if (product.images?.length > 0) {
        const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
        if (primaryImage?.image) return primaryImage.image
    }

    // Check variant productImages
    if (product.variants?.length > 0) {
        const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
        if (defaultVariant?.productImages?.length > 0) {
            const primaryImage = defaultVariant.productImages.find(img => img.isPrimary) || defaultVariant.productImages[0]
            if (primaryImage?.image) return primaryImage.image
        }
    }

    // Fallback to product.image or default
    return product.image || '/img/products/img1.png'
}

// Handle image loading errors
const handleImageError = (event) => {
    event.target.src = '/img/products/img1.png'
}

// Load from localStorage
const loadFromCache = () => {
    try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
            const { data, timestamp } = JSON.parse(cached)
            if (Date.now() - timestamp < CACHE_TTL) {
                products.value = data.slice(0, 4)
                loading.value = false
                return true
            }
        }
    } catch (err) {
        console.error('Cache error:', err)
    }
    return false
}

// Save to localStorage
const saveToCache = (data) => {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
    } catch (err) {
        console.error('Save cache error:', err)
    }
}

// Prefetch function
const prefetchProducts = () => {
    const { prefetchEndpoint } = useApi()
    prefetchEndpoint('PRODUCTS')
}

// Fetch products on mount
onMounted(async () => {
    // Try cache first for instant render
    const hasCache = loadFromCache()

    try {
        const { data, error: err } = await getFromEndpoint('PRODUCTS')
        if (err) {
            error.value = err
        } else if (data?.data) {
            products.value = data.data.slice(0, 4)
            saveToCache(data.data)
        }
    } catch (err) {
        console.error('Products fetch failed:', err)
        if (!hasCache) {
            error.value = 'Failed to load products'
        }
    } finally {
        loading.value = false
    }
})
</script>