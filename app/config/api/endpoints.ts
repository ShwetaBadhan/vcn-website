// API Endpoints Configuration
export const API_ENDPOINTS = {
  // Product endpoints
  PRODUCTS: 'common/product/read',
  PRODUCTS_CATEGORY: 'common/product-category/read',

  // Form submission endpoints
  SUBSCRIBE: 'common/subscribe/create',
  CONTACT_US: 'common/contact-us/create'
} as const

// Helper to get product by slug URL
export const getProductBySlugUrl = (slug: string): string => {
  return `common/product/read/slug/${slug}`
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
