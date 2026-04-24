// Cart Store Types

/**
 * Represents a single item in the shopping cart
 */
export interface CartItem {
  id: string | number
  name: string
  price: number
  mrp?: number | null
  image?: string
  quantity: number
  subscription?: string
  cartItemId?: string | number  // Backend cart item ID for API sync
  variantId?: string | number   // Product variant ID for API sync
}

/**
 * Cart state structure for Pinia store
 */
export interface CartState {
  items: CartItem[]
  promoCode: string
  discount: number
  userId: string | number | null
  isGuest: boolean
  sessionId?: string | number | null
}

/**
 * Cart data structure for localStorage persistence
 */
export interface CartData {
  items: CartItem[]
  promoCode: string
  discount: number
  userId: string | number | null
  isGuest: boolean
}

/**
 * API Request/Response types for Cart operations
 */

// Cart Create Request - matches actual API payload
export interface CartCreateRequest {
  variantId: string | number
  quantity: number
  sessionId: string | number
}

// Cart Create Response
export interface CartCreateResponse {
  success: boolean
  cartId: string
  sessionId: string
  items: CartItem[]
  message?: string
  cartItemId?: string | number  // Backend cart item ID
}

// Cart Read Response
export interface CartReadResponse {
  success: boolean
  cartId: string
  sessionId: string
  items: CartItem[]
  userId?: string | number
  total?: number
  message?: string
}

// Cart Update Request - matches actual API payload
export interface CartUpdateRequest {
  cartItemId: string | number
  quantity: number
}

// Cart Update Response
export interface CartUpdateResponse {
  success: boolean
  items: CartItem[]
  message?: string
}

// Cart Delete Item Response
export interface CartDeleteItemResponse {
  success: boolean
  message?: string
}

// Cart Clear Response
export interface CartClearResponse {
  success: boolean
  message?: string
}
