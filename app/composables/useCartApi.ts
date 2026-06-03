// Cart API Composable - Handles all backend cart API operations
import type {
  CartItem,
  CartCreateRequest,
  CartCreateResponse,
  CartReadResponse,
  CartUpdateRequest,
  CartUpdateResponse,
  CartDeleteItemResponse,
  CartClearResponse
} from '~/types'
import { API_ENDPOINTS, getCartReadUrl, getCartDeleteItemUrl, getCartClearUrl } from '~/config/api/endpoints'

export const useCartApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  // Generate or retrieve unique session ID
  const getSessionId = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let sessionId = localStorage.getItem('vcn-session-id')
      if (!sessionId) {
        // Use crypto.randomUUID for unique ID, fallback to timestamp + random
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
          sessionId = crypto.randomUUID()
        } else {
          sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
        }
        localStorage.setItem('vcn-session-id', sessionId)
      }
      return sessionId
    }
    // Fallback for SSR
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
  }

  // Helper to make API calls
  const apiCall = async <T = any>(
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    endpoint: string,
    body?: any
  ): Promise<{ data: T | null; error: string | null }> => {
    try {
      // Ensure proper URL construction: baseURL (without trailing /) + / + endpoint
      const cleanBaseURL = baseURL?.replace(/\/$/, '')
      const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
      const fullURL = `${cleanBaseURL}${cleanEndpoint}`

      

      // Build request options - only add body and content-type if needed
      const options: any = { method }
      if (body && method !== 'GET' && method !== 'DELETE') {
        options.body = body
        options.headers = { 'Content-Type': 'application/json' }
      } else if (method === 'DELETE' && body) {
        // DELETE with body needs content-type
        options.body = body
        options.headers = { 'Content-Type': 'application/json' }
      }
      // DELETE without body should not have content-type header

      const data = await $fetch<T>(fullURL, options)
      return { data, error: null }
    } catch (err: any) {
      console.error('❌ API ERROR:', err.message, err.statusCode, err.statusMessage)
      console.error('Error details:', err)
      return { data: null, error: err.message || 'Network error' }
    }
  }

  // Add item to cart on backend (creates cart if doesn't exist)
  const addToCart = async (variantId: string | number, quantity: number = 1, sessionId?: string | number): Promise<CartCreateResponse> => {
    try {
      const sid = String(sessionId || getSessionId())
      const requestBody: CartCreateRequest = {
        variantId,
        quantity,
        sessionId: sid
      }


      const { data, error } = await apiCall<CartCreateResponse>('POST', API_ENDPOINTS.CART_CREATE, requestBody)

      if (error) {
        console.error('Cart add item error:', error)
        return { success: false, cartId: '', sessionId: sid, items: [], message: error }
      }

      // Handle actual API response: { success, message, data: { id, cartId, variantId, quantity } }
      if (data && (data as any).success && (data as any).data) {
        const itemData = (data as any).data
        return {
          success: true,
          cartId: String(itemData.cartId || ''),
          sessionId: sid,
          items: [{
            cartItemId: itemData.id,
            variantId: itemData.variantId,
            quantity: itemData.quantity
          } as CartItem],
          message: (data as any).message
        }
      }

      return { success: false, cartId: '', sessionId: sid, items: [], message: 'Invalid response format' }
    } catch (error) {
      console.error('Cart add item error:', error)
      return {
        success: false,
        cartId: '',
        sessionId: String(getSessionId()),
        items: [],
        message: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Read cart from backend
  const readCart = async (sessionId?: string | number): Promise<CartReadResponse> => {
    try {
      const sid = String(sessionId || getSessionId())
      const endpoint = API_ENDPOINTS.CART_READ + '?sessionId=' + sid

      const { data, error } = await apiCall<CartReadResponse>('GET', endpoint)

      if (error) {
        console.error('Cart read error:', error)
        return {
          success: false,
          cartId: '',
          sessionId: sid,
          items: [],
          message: error
        }
      }

      // Handle actual API response: { cartId, sessionId, items: [...] }
      if (data && (data as any).cartId) {
        return {
          success: true,
          cartId: (data as any).cartId,
          sessionId: (data as any).sessionId || sid,
          items: (data as any).items || []
        }
      }

      return {
        success: false,
        cartId: '',
        sessionId: sid,
        items: [],
        message: 'Invalid response format'
      }
    } catch (error) {
      console.error('Cart read error:', error)
      const sid = String(sessionId || getSessionId())
      return {
        success: false,
        cartId: '',
        sessionId: sid,
        items: [],
        message: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Update cart item quantity on backend
  const updateCart = async (cartItemId: string | number, quantity: number): Promise<CartUpdateResponse> => {
    try {
      // API expects: { cartItemId, quantity } with sessionId as query parameter
      const sid = getSessionId()
      const requestBody = {
        cartItemId,
        quantity
      }

      const endpoint = `${API_ENDPOINTS.CART_UPDATE}?sessionId=${sid}`
      const cleanBase = baseURL.replace(/\/$/, '')
      const fullURL = `${cleanBase}/${endpoint}`

      const { data, error } = await apiCall<CartUpdateResponse>('PATCH', endpoint, requestBody)
      

      if (error) {
        console.error('Cart update error:', error)
        return { success: false, items: [], message: error }
      }

      // Handle actual API response: { success, message, data: { id, cartId, variantId, quantity } }
      if (data && (data as any).success && (data as any).data) {
        const itemData = (data as any).data
        return {
          success: true,
          items: [{
            cartItemId: itemData.id,
            variantId: itemData.variantId,
            quantity: itemData.quantity
          } as CartItem],
          message: (data as any).message
        }
      }

      return { success: false, items: [], message: 'Invalid response format' }
    } catch (error) {
      console.error('Cart update error:', error)
      return {
        success: false,
        items: [],
        message: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Delete specific item from cart on backend
  const deleteCartItem = async (itemId: string | number): Promise<CartDeleteItemResponse> => {
    try {
      const sessionId = getSessionId()
      const endpoint = getCartDeleteItemUrl(itemId, sessionId)

      const { data, error } = await apiCall<CartDeleteItemResponse>('DELETE', endpoint)

      if (error) {
        console.error('Cart delete item error:', error)
        return { success: false, message: error }
      }

      return data || { success: false, message: 'No data returned' }
    } catch (error) {
      console.error('Cart delete item error:', error)
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Clear entire cart on backend
  const clearCart = async (): Promise<CartClearResponse> => {
    try {
      const sessionId = getSessionId()
      const endpoint = getCartClearUrl(sessionId)

      const { data, error } = await apiCall<CartClearResponse>('DELETE', endpoint)

      if (error) {
        console.error('Cart clear error:', error)
        return { success: false, message: error }
      }

      return data || { success: false, message: 'No data returned' }
    } catch (error) {
      console.error('Cart clear error:', error)
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Sync single cart item with backend
  const syncCartItem = async (variantId: string | number, quantity: number = 1): Promise<boolean> => {
    console.log('syncCartItem called:', { variantId, quantity })
    try {
      const response = await addToCart(variantId, quantity)
      console.log('syncCartItem response:', response)
      return response.success
    } catch (error) {
      console.error('Cart sync error:', error)
      return false
    }
  }

  return {
    getSessionId,
    addToCart,
    readCart,
    updateCart,
    deleteCartItem,
    clearCart,
    syncCartItem
  }
}
