<template>
    <!-- Whole Body Health Section -->
    <section class="vcn-whole-body-section">
        <div class="container-fluid">
            <!-- Header -->
            <div class="vcn-whole-body-header">
                <div class="vcn-whole-body-title-wrapper">
                    <h2 class="vcn-whole-body-main-title">
                        Whole body health starts in the gut.
                    </h2>
                </div>
                <div>
                    <p class="vcn-whole-body-subtitle">
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
                        <div v-for="product in products" :key="product.id || product.name"
                            class="col-lg-3 col-md-6 col-sm-6">
                            <div class="vcn-whole-body-product-card">
                                <div class="vcn-whole-body-product-badges">
                                    <span v-if="product.isNew"
                                        class="vcn-whole-body-badge vcn-whole-body-badge-new">New</span>
                                    <span v-if="product.isBestseller"
                                        class="vcn-whole-body-badge vcn-whole-body-badge-bestseller">Bestseller</span>
                                </div>
                                <span v-if="product.label" class="vcn-whole-body-product-label">{{ product.label
                                }}</span>
                                <h3 class="vcn-whole-body-product-title">{{ product.name }}</h3>
                                <div class="vcn-whole-body-product-image">
                                    <img class="product-img" :src="getPrimaryImage(product)" :alt="product.name"
                                        loading="lazy" @error="handleImageError($event, product)" />
                                    <video class="product-video" muted loop playsinline preload="auto">
                                        <source src="/video/pvide.mp4" type="video/webm" />
                                    </video>
                                </div>
                                <a :href="`/product-details?slug=${product.slug}`"
                                    class="vcn-whole-body-shop-btn">Shop Now
                                    {{ product.price }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useApi } from '~/config/api/useApi'

const { getFromEndpoint } = useApi()

// Client-side fetching with stale-while-revalidate pattern
const products = ref([])
const loading = ref(true)
const error = ref('')
const CACHE_KEY = 'home-products-cache-v2' // Bumped version to clear old cache
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

// Store for individual product details (to get variants when list doesn't have them)
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

// Get primary image for product - extracts from product.images array
const getPrimaryImage = (product) => {
    console.log('Getting image for product:', product.id, product.name)
    console.log('Product images:', product.images)
    console.log('Product variants:', product.variants)

    // Check product.images array from API (uses .image property)
    if (product.images && product.images.length > 0) {
        const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
        console.log('Found primary image in product.images:', primaryImage)
        if (primaryImage?.image) {
            console.log('Returning image URL:', primaryImage.image)
            return primaryImage.image
        }
    }

    // Check variant productImages (uses .image property)
    if (product.variants && product.variants.length > 0) {
        const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0]
        console.log('Default variant:', defaultVariant)
        if (defaultVariant?.productImages && defaultVariant.productImages.length > 0) {
            const primaryImage = defaultVariant.productImages.find(img => img.isPrimary) || defaultVariant.productImages[0]
            console.log('Found primary image in variant:', primaryImage)
            if (primaryImage?.image) {
                console.log('Returning variant image URL:', primaryImage.image)
                return primaryImage.image
            }
        }
    }

    // Fallback to product.image or default
    console.log('Falling back to product.image:', product.image)
    return product.image || '/img/products/img1.png'
}

// Handle image loading errors
const handleImageError = (event, product) => {
    console.error(`Failed to load image for product ${product.id}:`, event)
    event.target.src = '/img/products/img1.png' // Fallback to default image
}

// Load from localStorage immediately
const loadFromCache = () => {
    try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
            const { data, timestamp } = JSON.parse(cached)
            if (Date.now() - timestamp < CACHE_TTL) {
                products.value = data
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
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
        }))
    } catch (err) {
        console.error('Save cache error:', err)
    }
}

// Prefetch function for hover
const prefetchProducts = () => {
    const { prefetchEndpoint } = useApi()
    prefetchEndpoint('PRODUCTS')
}

// Fetch products with stale-while-revalidate
onMounted(async () => {
    // Try to load from cache first (stale-while-revalidate)
    const hasCache = loadFromCache()

    try {
        const { data, error: err } = await getFromEndpoint('PRODUCTS')
        if (err) {
            error.value = err
        } else {
            const newProducts = (data && data.data) ? data.data.slice(0, 4) : []
            products.value = newProducts
            saveToCache(newProducts)

            // Fetch product details for pricing
            newProducts.forEach((product) => {
                fetchProductDetailsForPricing(product.id)
            })
        }
    } catch (err) {
        if (!hasCache) {
            error.value = 'Failed to load products'
        }
    } finally {
        if (!hasCache) {
            loading.value = false
        }
    }
})
</script>