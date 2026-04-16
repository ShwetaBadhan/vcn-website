import { API_ENDPOINTS, type ApiEndpointKey } from './endpoints'

// Request deduplication cache - stores in-flight promises
const pendingRequests = new Map<string, Promise<any>>()
// Response cache - stores completed responses
const responseCache = new Map<string, { data: any; timestamp: number }>()
const CACHE_TTL = 5000 // 5 seconds cache

// Rate limiting
interface QueuedRequest {
  resolve: (value: any) => void
  reject: (reason?: any) => void
  url: string
  options: any
}

const requestQueue: QueuedRequest[] = []
let isProcessingQueue = false
const RATE_LIMIT_DELAY = 200 // 200ms between requests
const MAX_CONCURRENT_REQUESTS = 2

export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl || ''

  const getCacheKey = (url: string, options: any) => {
    return `${options.method || 'GET'}-${url}-${JSON.stringify(options.body || '')}`
  }

  // Process request queue with rate limiting
  const processQueue = async () => {
    if (isProcessingQueue || requestQueue.length === 0) return

    isProcessingQueue = true
    const concurrentRequests = []

    // Process up to MAX_CONCURRENT_REQUESTS at once
    while (requestQueue.length > 0 && concurrentRequests.length < MAX_CONCURRENT_REQUESTS) {
      const queuedRequest = requestQueue.shift()
      if (queuedRequest) {
        const { resolve, reject, url, options } = queuedRequest
        concurrentRequests.push(executeRequest(url, options).then(resolve).catch(reject))
      }
    }

    // Wait for current batch to complete
    await Promise.allSettled(concurrentRequests)

    // Add delay before next batch
    if (requestQueue.length > 0) {
      setTimeout(() => {
        isProcessingQueue = false
        processQueue()
      }, RATE_LIMIT_DELAY)
    } else {
      isProcessingQueue = false
    }
  }

  const executeRequest = async (url: string, options: any) => {
    const cacheKey = getCacheKey(url, options)

    // Return cached response if valid
    const cached = responseCache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return { data: cached.data, error: null }
    }

    // Return existing promise if request is in flight (deduplication)
    if (pendingRequests.has(cacheKey)) {
      return pendingRequests.get(cacheKey)!
    }

    // Create new request promise
    const requestPromise = (async () => {
      try {
        const headers = options.body instanceof FormData
          ? { ...options.headers }
          : { 'Content-Type': 'application/json', ...options.headers }

        // Add authentication headers for admin endpoints only
        if (url.includes('/admin/')) {
          const token = getAuthToken()
          const apiKey = getApiKey()

          console.log('Admin endpoint detected, adding authentication:', {
            hasToken: !!token,
            hasApiKey: !!apiKey,
            token: token,
            apiKey: apiKey,
            url: url.substring(0, 50) + '...'
          })

          // Try multiple auth approaches for admin APIs
          headers['Authorization'] = 'Bearer ' + token
          headers['X-API-Key'] = apiKey
          headers['apikey'] = apiKey
          headers['token'] = token

          // Also try basic auth format
          const basicAuth = btoa(`${token}:${apiKey}`)
          headers['X-Auth-Token'] = basicAuth

          console.log('Using multiple auth headers for admin endpoint')
        } else {
          console.log('Public endpoint, no authentication needed')
        }

        // If URL already starts with http, use it as-is (for full URLs)
        const isFullUrl = url.startsWith('http://') || url.startsWith('https://')
        const cleanUrl = url.replace(/^\//, '')
        const fullUrl = isFullUrl ? cleanUrl : `${baseURL.replace(/\/$/, '')}/${cleanUrl}`

        const response = await $fetch(fullUrl, {
          ...options,
          headers,
          // Performance options
          keepalive: true,
          retry: 2,
          retryDelay: 300, // 300ms between retries
          timeout: 30000, // 30 second timeout for slow APIs
        })

        // Cache successful response
        responseCache.set(cacheKey, { data: response, timestamp: Date.now() })

        return { data: response, error: null }
      } catch (err: any) {
        return {
          data: null,
          error: err.message || 'An unexpected error occurred'
        }
      } finally {
        // Clean up pending request
        pendingRequests.delete(cacheKey)
      }
    })()

    // Store pending promise for deduplication
    pendingRequests.set(cacheKey, requestPromise)

    return requestPromise
  }

  // Helper functions for authentication
  const getAuthToken = () => {
    // Try to get token from multiple sources
    if (process.client) {
      return localStorage.getItem('authToken') ||
        sessionStorage.getItem('authToken') ||
        getCookie('authToken') ||
        process.env.AUTH_TOKEN ||
        'test-token' // Default fallback for testing
    }
    return process.env.AUTH_TOKEN || 'test-token'
  }

  const getApiKey = () => {
    if (process.client) {
      return localStorage.getItem('apiKey') ||
        process.env.API_KEY ||
        'test-key' // Default fallback for testing
    }
    return process.env.API_KEY || 'test-key'
  }

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
    return null
  }

  const request = async (url: string, options: any = {}) => {
    return new Promise((resolve, reject) => {
      requestQueue.push({ resolve, reject, url, options })
      processQueue()
    })
  }

  const get = (url: string, options?: any) =>
    request(url, { method: 'GET', ...options })

  const post = (url: string, body?: any, options?: any) =>
    request(url, { method: 'POST', body, ...options })

  const put = (url: string, body?: any, options?: any) =>
    request(url, { method: 'PUT', body, ...options })

  const del = (url: string, options?: any) =>
    request(url, { method: 'DELETE', ...options })

  // Helper methods using endpoints singleton
  const getFromEndpoint = (endpoint: ApiEndpointKey, options?: any) =>
    get(API_ENDPOINTS[endpoint], options)

  const postToEndpoint = (endpoint: ApiEndpointKey, body?: any, options?: any) =>
    post(API_ENDPOINTS[endpoint], body, options)

  const putToEndpoint = (endpoint: ApiEndpointKey, body?: any, options?: any) =>
    put(API_ENDPOINTS[endpoint], body, options)

  const deleteFromEndpoint = (endpoint: ApiEndpointKey, options?: any) =>
    del(API_ENDPOINTS[endpoint], options)

  // Prefetch data for faster navigation
  const prefetchEndpoint = (endpoint: ApiEndpointKey) => {
    if (process.client) {
      getFromEndpoint(endpoint)
    }
  }

  // Fetch from a custom URL (for slug-based endpoints)
  const getFromUrl = async (url: string, options?: any) => {
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`
    return get(fullUrl, options)
  }

  return {
    get,
    post,
    put,
    delete: del,
    baseURL,
    getFromEndpoint,
    postToEndpoint,
    putToEndpoint,
    deleteFromEndpoint,
    prefetchEndpoint,
    getFromUrl,
    endpoints: API_ENDPOINTS
  }
}
