import { API_ENDPOINTS, type ApiEndpointKey } from './endpoints'

interface ApiResponse<T = any> {
  data: T | null
  error: string | null
}

export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  // Generic GET request using $fetch
  const get = async <T = any>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
      const data = await $fetch<T>(`${baseURL}${endpoint}`, {
        method: 'GET'
      })
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Fetch from a full URL or path (alias for get, used for slug-based URLs)
  const getFromUrl = async <T = any>(url: string): Promise<ApiResponse<T>> => {
    // If URL starts with http, use it directly; otherwise prepend baseURL
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`
    try {
      const data = await $fetch<T>(fullUrl, {
        method: 'GET'
      })
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Generic POST request using $fetch
  const post = async <T = any>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    try {
      const data = await $fetch<T>(`${baseURL}${endpoint}`, {
        method: 'POST',
        body
      })
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Generic PATCH request using $fetch
  const patch = async <T = any>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    try {
      const data = await $fetch<T>(`${baseURL}${endpoint}`, {
        method: 'PATCH',
        body
      })
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Generic DELETE request using $fetch
  const del = async <T = any>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
      const data = await $fetch<T>(`${baseURL}${endpoint}`, {
        method: 'DELETE'
      })
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Fetch from predefined endpoint
  const getFromEndpoint = async <T = any>(endpointKey: ApiEndpointKey): Promise<ApiResponse<T>> => {
    const endpoint = API_ENDPOINTS[endpointKey]
    return get<T>(endpoint)
  }

  // Post to predefined endpoint
  const postToEndpoint = async <T = any>(endpointKey: ApiEndpointKey, body: any): Promise<ApiResponse<T>> => {
    const endpoint = API_ENDPOINTS[endpointKey]
    return post<T>(endpoint, body)
  }

  // Prefetch endpoint for NuxtLink prefetching
  const prefetchEndpoint = (endpointKey: ApiEndpointKey) => {
    const endpoint = API_ENDPOINTS[endpointKey]
    prefetchComponents(`${baseURL}${endpoint}`)
  }

  return {
    get,
    getFromUrl,
    post,
    patch,
    del,
    getFromEndpoint,
    postToEndpoint,
    prefetchEndpoint,
    endpoints: API_ENDPOINTS,
    baseURL
  }
}
