import { defineStore } from 'pinia';
import { f as useRuntimeConfig } from './server.mjs';

const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    categories: [],
    selectedProduct: null,
    loading: false,
    error: null
  }),
  getters: {
    // Get all products
    allProducts: (state) => state.products,
    // Get featured products (first 4)
    featuredProducts: (state) => state.products.slice(0, 4),
    // Get product by ID
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id) || null;
    },
    // Get product by slug
    getProductBySlug: (state) => (slug) => {
      return state.products.find((product) => product.slug === slug) || null;
    },
    // Get product pricing helper
    getProductPricing: () => (product) => {
      if (!product.variants || product.variants.length === 0) {
        return { price: "0.00", oldPrice: null };
      }
      const defaultVariant = product.variants.find((v) => v.isDefault) || product.variants[0];
      const sellingPrice = parseFloat(defaultVariant?.sellingPrice || "0");
      const mrp = parseFloat(defaultVariant?.mrp || "0");
      return {
        price: sellingPrice.toFixed(2),
        oldPrice: mrp > sellingPrice ? mrp.toFixed(2) : null
      };
    },
    // Get primary image for product
    getPrimaryImage: () => (product) => {
      if (product.images && product.images.length > 0) {
        const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
        if (primaryImage?.image) return primaryImage.image;
      }
      if (product.variants && product.variants.length > 0) {
        const defaultVariant = product.variants.find((v) => v.isDefault) || product.variants[0];
        if (defaultVariant?.productImages && defaultVariant.productImages.length > 0) {
          const primaryImage = defaultVariant.productImages.find((img) => img.isPrimary) || defaultVariant.productImages[0];
          if (primaryImage?.image) return primaryImage.image;
        }
      }
      return product.image || "/img/products/img1.png";
    }
  },
  actions: {
    // Fetch all products
    async fetchProducts() {
      if (this.products.length > 0) {
        return { success: true };
      }
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const baseURL = config.public.apiBaseUrl;
        const data = await $fetch(`${baseURL}common/product/read`);
        if (data && data.data) {
          this.products = data.data;
        }
        this.loading = false;
        return { success: true };
      } catch (err) {
        this.error = err.message || "Network error";
        this.loading = false;
        return { success: false, error: this.error };
      }
    },
    // Fetch single product by ID
    async fetchProductById(id) {
      const existing = this.getProductById(id);
      if (existing) {
        this.selectedProduct = existing;
        return { success: true };
      }
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const baseURL = config.public.apiBaseUrl;
        const data = await $fetch(`${baseURL}common/product/read/${id}`);
        if (data && data.data) {
          this.selectedProduct = data.data;
        }
        this.loading = false;
        return { success: true };
      } catch (err) {
        this.error = err.message || "Network error";
        this.loading = false;
        return { success: false, error: this.error };
      }
    },
    // Fetch single product by slug
    async fetchProductBySlug(slug) {
      const existing = this.getProductBySlug(slug);
      if (existing) {
        this.selectedProduct = existing;
        return { success: true };
      }
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const baseURL = config.public.apiBaseUrl;
        const data = await $fetch(`${baseURL}common/product/read/slug/${slug}`);
        if (data && data.data) {
          this.selectedProduct = data.data;
        }
        this.loading = false;
        return { success: true };
      } catch (err) {
        this.error = err.message || "Network error";
        this.loading = false;
        return { success: false, error: this.error };
      }
    },
    // Fetch product categories
    async fetchCategories() {
      if (this.categories.length > 0) {
        return { success: true };
      }
      try {
        const config = useRuntimeConfig();
        const baseURL = config.public.apiBaseUrl;
        const data = await $fetch(`${baseURL}common/product-category/read`);
        this.categories = data || [];
      } catch (err) {
        console.error("Categories fetch error:", err);
      }
    },
    // Refresh products (force re-fetch)
    async refreshProducts() {
      this.products = [];
      return this.fetchProducts();
    }
  }
});

export { useProductStore as u };
//# sourceMappingURL=product-CpHnPbNZ.mjs.map
