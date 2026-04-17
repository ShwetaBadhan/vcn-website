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
