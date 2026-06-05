import { defineStore } from 'pinia'
import type { Product, ProductState, Category, ProductPricing, ProductPage } from '~/types'

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    categories: [],
    selectedProduct: null,
    selectedProductPage: null,
    loading: false,
    error: null
  }),

  getters: {
    // Get all products
    allProducts: (state) => state.products,

    // Get featured products (first 4)
    featuredProducts: (state) => state.products.slice(0, 4),

    // Get product by ID
    getProductById: (state) => (id: string | number) => {
      return state.products.find((product: Product) => product.id === id) || null
    },

    // Get product by slug
    getProductBySlug: (state) => (slug: string) => {
      return state.products.find((product: Product) => product.slug === slug) || null
    },

    // Get product pricing helper
    getProductPricing: () => (product: Product): ProductPricing => {
      if (!product.variants || product.variants.length === 0) {
        return { price: '0.00', oldPrice: null }
      }

      const defaultVariant = product.variants.find((v: { isDefault: boolean }) => v.isDefault) || product.variants[0]
      const sellingPrice = parseFloat(defaultVariant?.sellingPrice || '0')
      const mrp = parseFloat(defaultVariant?.mrp || '0')

      return {
        price: sellingPrice.toFixed(2),
        oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
      }
    },

    // Get primary image for product
    getPrimaryImage: () => (product: Product) => {
      // Product Images
      if (product.images?.length) {
        const primaryImage =
          product.images.find(img => img?.isPrimary && img?.media) ||
          product.images.find(img => img?.media)

        if (primaryImage?.media) {
          return (
            primaryImage.media.variants?.webp ||
            primaryImage.media.webpUrl ||
            primaryImage.media.fileUrl
          )
        }
      }

      // Variant Images
      if (product.variants?.length) {
        const defaultVariant =
          product.variants.find(v => v.isDefault) ||
          product.variants[0]

        const primaryImage =
          defaultVariant?.productImages?.find(img => img?.isPrimary && img?.media) ||
          defaultVariant?.productImages?.find(img => img?.media)

        if (primaryImage?.media) {
          return (
            primaryImage.media.variants?.webp ||
            primaryImage.media.webpUrl ||
            primaryImage.media.fileUrl
          )
        }
      }

      return '/img/products/img1.png'
    }
  },

  actions: {
    // Fetch all products
    async fetchProducts() {
      // Return early if already loaded
      if (this.products.length > 0) {
        return { success: true }
      }

      this.loading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const data = await $fetch(`${baseURL}common/product/read`)

        if (data && (data as any).data) {
          this.products = (data as any).data
        }

        this.loading = false
        return { success: true }
      } catch (err: any) {
        this.error = err.message || 'Network error'
        this.loading = false
        return { success: false, error: this.error }
      }
    },

    // Fetch single product by ID
    async fetchProductById(id: string | number) {
      // Check if already in store
      const existing = this.getProductById(id)
      if (existing) {
        this.selectedProduct = existing
        return { success: true }
      }

      this.loading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const data = await $fetch(`${baseURL}common/product/read/${id}`)

        if (data && (data as any).data) {
          this.selectedProduct = (data as any).data
        }

        this.loading = false
        return { success: true }
      } catch (err: any) {
        this.error = err.message || 'Network error'
        this.loading = false
        return { success: false, error: this.error }
      }
    },

    // Fetch single product by slug
    async fetchProductBySlug(slug: string) {
      // Check if already in store
      const existing = this.getProductBySlug(slug)
      if (existing) {
        this.selectedProduct = existing
        return { success: true }
      }

      this.loading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const data = await $fetch(`${baseURL}common/product/read/slug/${slug}`)

        if (data && (data as any).data) {
          this.selectedProduct = (data as any).data
        }

        this.loading = false
        return { success: true }
      } catch (err: any) {
        this.error = err.message || 'Network error'
        this.loading = false
        return { success: false, error: this.error }
      }
    },

    // Fetch product page by slug
    async fetchProductPageBySlug(slug: string) {
      this.loading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const data = await $fetch(`${baseURL}common/product-page/read/slug/${slug}`)

        if (data && (data as any).data) {
          this.selectedProductPage = (data as any).data as ProductPage
        }

        this.loading = false
        return { success: true }
      } catch (err: any) {
        this.error = err.message || 'Network error'
        this.loading = false
        return { success: false, error: this.error }
      }
    },

    // Fetch product categories
    async fetchCategories() {
      // Return early if already loaded
      if (this.categories.length > 0) {
        return { success: true }
      }

      try {
        const config = useRuntimeConfig()
        const baseURL = config.public.apiBaseUrl

        const data = await $fetch(`${baseURL}common/product-category/read`)
        this.categories = (data as Category[]) || []
      } catch (err) {
        console.error('Categories fetch error:', err)
      }
    },

    // Refresh products (force re-fetch)
    async refreshProducts() {
      this.products = []
      return this.fetchProducts()
    }
  }
})
