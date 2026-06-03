// API Endpoints Configuration
export const API_ENDPOINTS = {
  // Product endpoints
  PRODUCTS: 'common/product/read',
  PRODUCTS_CATEGORY: 'common/product-category/read',

  // Form submission endpoints
  SUBSCRIBE: 'common/subscribe/create',
  CONTACT_US: 'common/contact-us/create',

  // Cart endpoints
  CART_CREATE: 'common/cart/create',
  CART_READ: 'common/cart/read',
  CART_UPDATE: 'common/cart/update',
  CART_DELETE_ITEM: 'common/cart/delete/item',
  CART_CLEAR: 'common/cart/delete/clear',

  // Review endpoints
  REVIEW_CREATE: 'users/product-reviews/create',

  // CMS endpoints
  CMS_PAGES_READ: 'common/cms-pages/read'
} as const

// Helper to get product by slug URL
export const getProductBySlugUrl = (slug: string): string => {
  return `common/product/read/slug/${slug}`
}

// Helper to get product page by slug URL
export const getProductPageBySlugUrl = (slug: string): string => {
  return `common/product-page/read/slug/${slug}`
}

// Helper to get cart read URL with sessionId
export const getCartReadUrl = (sessionId: string | number): string => {
  return `common/cart/read?sessionId=${sessionId}`
}

// Helper to get cart delete item URL
export const getCartDeleteItemUrl = (itemId: string | number, sessionId: string | number): string => {
  return `common/cart/delete/item/${itemId}?sessionId=${sessionId}`
}

// Helper to get cart clear URL
export const getCartClearUrl = (sessionId: string | number): string => {
  return `common/cart/delete/clear?sessionId=${sessionId}`
}

// Helper to get product reviews URL
export const getProductReviewsUrl = (productId: string | number): string => {
  return `common/product-reviews/product/${productId}`
}

// Export types for better TypeScript support
export type ApiEndpointKey = keyof typeof API_ENDPOINTS

// Composable for API endpoints with runtime config
export const useApiEndpoints = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  // Helper method to get full URL
  const getFullUrl = (endpoint: ApiEndpointKey): string => {
    return `${baseURL}${API_ENDPOINTS[endpoint]}`
  }

  // Helper method to get all endpoints
  const getAllEndpoints = () => API_ENDPOINTS

  return {
    endpoints: API_ENDPOINTS,
    getFullUrl,
    getAllEndpoints,
    baseURL
  }
}
