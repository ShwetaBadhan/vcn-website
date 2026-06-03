import { defineStore } from 'pinia'
import type { CartItem, CartState } from '~/types'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    promoCode: '',
    discount: 0,
    userId: null,
    isGuest: true,
    sessionId: null
  }),

  getters: {
    cartCount: (state) => {
      return state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
    },

    cartTotal: (state) => {
      const subtotal = state.items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0)
      return subtotal - state.discount
    },

    cartSubtotal: (state) => {
      return state.items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0)
    },

    getItemById: (state) => (id: string | number) => {
      return state.items.find((item: CartItem) => item.id === id)
    }
  },

  actions: {
    // Set user authentication state
    setUser(userId: string | number | null, isGuest = false) {
      this.userId = userId
      this.isGuest = isGuest
    },

    async addToCart(product: CartItem & { variantId?: string | number }) {
      
      // Check for existing item by ID (convert to string for comparison)
      const productId = String(product.id)
      const existingItem = this.items.find((item: CartItem) => String(item.id) === productId)

      if (existingItem) {
        existingItem.quantity += 1
        this.saveCart()

        // If we have cartItemId, update quantity on backend
        if (existingItem.cartItemId) {
          await this.updateCartItemBackend(existingItem.cartItemId, existingItem.quantity)
        } else if (product.variantId) {
          // Try to sync and get cartItemId
          await this.syncItemWithBackend(product.variantId, existingItem.quantity)
        }
      } else {
        // Add new item
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          mrp: product.mrp || null,
          image: product.image,
          quantity: 1,
          subscription: product.subscription || 'One-time purchase',
          variantId: product.variantId
        }
        this.items.push(newItem)
        this.saveCart()

        // Sync with backend if variantId is provided
        if (product.variantId) {
          
          const response = await this.syncItemWithBackend(product.variantId, 1)
          // Update item with cartItemId from backend if available
          if (response?.cartItemId) {
            newItem.cartItemId = response.cartItemId
            this.saveCart()
          } else {
            console.warn('No cartItemId in response, response structure:', JSON.stringify(response))
          }
        } else {
          console.warn('No variantId provided, skipping backend sync')
        }
      }
    },

    async removeFromCart(productId: string | number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
      const index = this.items.findIndex((item: CartItem) => item.id === productId)

      if (index > -1) {
        this.items.splice(index, 1)
        this.saveCart()

        // Delete from backend if we have cartItemId
        if (item?.cartItemId && import.meta.client) {
          try {
            const { useCartApi } = await import('~/composables/useCartApi')
            const { deleteCartItem } = useCartApi()

            const response = await deleteCartItem(item.cartItemId)
            if (response.success) {
            } else if (response.message?.includes('404') || response.message?.includes('400')) {
              console.log('Backend delete API error - item removed from localStorage only')
            } else {
              console.warn('Failed to delete cart item from backend:', response.message)
            }
          } catch (error: any) {
            if (error?.message?.includes('404') || error?.statusCode === 404 ||
              error?.message?.includes('400') || error?.statusCode === 400) {
              console.log('Backend delete API error - item removed from localStorage only')
            } else {
              console.error('Error deleting cart item from backend:', error)
            }
          }
        }
      }
    },

    updateQuantity(productId: string | number, quantity: number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
          this.saveCart()
        }
      }
    },

    async incrementQuantity(productId: string | number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
     
      if (item) {
        item.quantity += 1
        this.saveCart()

        // Sync with backend if we have cartItemId
        if (item.cartItemId) {
          
          await this.updateCartItemBackend(item.cartItemId, item.quantity)
        } else if (item.variantId) {
          // No cartItemId but we have variantId - sync with backend first to get cartItemId
          
          const response = await this.syncItemWithBackend(item.variantId, item.quantity)
          if (response?.cartItemId) {
            item.cartItemId = response.cartItemId
            this.saveCart()
            console.log('Synced with backend, cartItemId set to:', response.cartItemId)
          } else {
            console.warn('Failed to sync with backend for variantId:', item.variantId)
          }
        } else {
          console.warn('No cartItemId or variantId found for item, cannot sync quantity update. productId:', productId)
        }
      }
    },

    async decrementQuantity(productId: string | number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        this.saveCart()

        // Sync with backend if we have cartItemId
        if (item.cartItemId) {
          await this.updateCartItemBackend(item.cartItemId, item.quantity)
        } else if (item.variantId) {
          // No cartItemId but we have variantId - sync with backend first to get cartItemId
          console.log('No cartItemId found, syncing with backend using variantId:', item.variantId)
          const response = await this.syncItemWithBackend(item.variantId, item.quantity)
          if (response?.cartItemId) {
            item.cartItemId = response.cartItemId
            this.saveCart()
            console.log('Synced with backend, cartItemId set to:', response.cartItemId)
          } else {
            console.warn('Failed to sync with backend for variantId:', item.variantId)
          }
        } else {
          console.warn('No cartItemId or variantId found for item, cannot sync quantity update. productId:', productId)
        }
      } else if (item && item.quantity === 1) {
        await this.removeFromCart(productId)
      }
    },

    // Update cart item quantity on backend
    async updateCartItemBackend(cartItemId: string | number, quantity: number) {
      if (import.meta.client) {
        try {
          const { useCartApi } = await import('~/composables/useCartApi')
          const { updateCart } = useCartApi()

          const response = await updateCart(cartItemId, quantity)

          if (response.success) {
          } else {
            // Silently ignore 404 errors (API not deployed)
            if (response.message?.includes('404')) {
              console.log('Backend update API not available - changes saved to localStorage only')
            } else {
              console.warn('Failed to update cart item quantity on backend:', response.message)
            }
          }
        } catch (error: any) {
          // Silently ignore 404 errors
          if (error?.message?.includes('404') || error?.statusCode === 404) {
            console.log('Backend update API not available - changes saved to localStorage only')
          } else {
            console.error('Error updating cart item quantity:', error)
          }
        }
      }
    },

    clearCart() {
      this.items = []
      this.promoCode = ''
      this.discount = 0
      this.saveCart()
    },

    applyPromoCode(code: string) {
      // Simple promo logic - you can extend this
      if (code === 'SAVE10') {
        this.discount = this.cartSubtotal * 0.1
        this.promoCode = code
        this.saveCart()
        return true
      }
      return false
    },

    removePromoCode() {
      this.promoCode = ''
      this.discount = 0
      this.saveCart()
    },

    // Enhanced save method that handles both guest and user carts in localStorage
    saveCart() {
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          const cartData = {
            items: this.items,
            promoCode: this.promoCode,
            discount: this.discount,
            userId: this.userId,
            isGuest: this.isGuest,
            sessionId: this.sessionId
          }

          if (this.isGuest) {
            // Save guest cart
            localStorage.setItem('vcn-guest-cart', JSON.stringify(cartData))
          } else if (this.userId) {
            // Save user cart
            localStorage.setItem(`vcn-user-cart-${this.userId}`, JSON.stringify(cartData))
          }

          // Note: Backend sync is now handled per-item via syncItemWithBackend()
          // when cart items are added/updated with their variantId
        } catch (error) {
          console.error('Error saving cart to localStorage:', error)
        }
      }
    },

    // Enhanced load method that handles both guest and user carts from localStorage
    loadCart() {
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          let cartData = null

          if (this.isGuest) {
            // Load guest cart
            const savedCart = localStorage.getItem('vcn-guest-cart')
            if (savedCart) {
              cartData = JSON.parse(savedCart)
            }
          } else if (this.userId) {
            // Load user cart
            const savedCart = localStorage.getItem(`vcn-user-cart-${this.userId}`)
            if (savedCart) {
              cartData = JSON.parse(savedCart)
            }
          }

          if (cartData) {
            // Load items and repair any with missing/broken images
            const loadedItems = cartData.items || []
            this.items = loadedItems.map((item: CartItem) => ({
              ...item,
              image: item.image
            }))
            this.promoCode = cartData.promoCode || ''
            this.discount = cartData.discount || 0
            this.sessionId = cartData.sessionId || null
            // Save repaired cart back to localStorage
            this.saveCart()
          } else {
            // Initialize empty cart
            this.items = []
            this.promoCode = ''
            this.discount = 0
            this.sessionId = null
          }
        } catch (error) {
          console.error('Error loading cart from localStorage:', error)
          // Initialize empty cart on error
          this.items = []
          this.promoCode = ''
          this.discount = 0
          this.sessionId = null
        }
      }
    },

    // Load guest cart from localStorage
    loadGuestCart() {
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          const savedCart = localStorage.getItem('vcn-guest-cart')
          if (savedCart) {
            return JSON.parse(savedCart)
          }
        } catch (error) {
          console.error('Error loading guest cart:', error)
        }
      }
      return { items: [], promoCode: '', discount: 0 }
    },

    // Clear guest cart from localStorage
    clearGuestCart() {
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          localStorage.removeItem('vcn-guest-cart')
        } catch (error) {
          console.error('Error clearing guest cart:', error)
        }
      }
    },

    // Merge guest cart with current user cart
    mergeWithGuestCart(guestCartData: { items: CartItem[]; promoCode?: string; discount?: number }) {
      if (!guestCartData || guestCartData.items.length === 0) return

      const mergedItems = [...this.items]

      // Add guest items that aren't already in user cart
      guestCartData.items.forEach((guestItem: CartItem) => {
        const existingItem = mergedItems.find(item => item.id === guestItem.id)
        if (existingItem) {
          // If item exists, add quantities
          existingItem.quantity += guestItem.quantity
        } else {
          // Add new item
          mergedItems.push(guestItem)
        }
      })

      this.items = mergedItems
      this.promoCode = guestCartData.promoCode || this.promoCode
      this.discount = guestCartData.discount || this.discount

      // Save merged cart
      this.saveCart()

      // Clear guest cart
      this.clearGuestCart()

      console.log('Guest cart merged with user cart successfully')
    },

    // Handle user login - merge guest cart with user cart
    async handleUserLogin(userId: string | number) {
      if (!userId) return

      // Set user state
      this.setUser(userId, false)

      // Load existing user cart
      this.loadCart()

      // Get guest cart
      const guestCart = this.loadGuestCart()

      // Merge guest cart with user cart
      if (guestCart.items.length > 0) {
        this.mergeWithGuestCart(guestCart)
      }
    },

    // Handle user logout - save current cart as guest cart
    handleUserLogout() {
      // Save current cart as guest cart
      const currentCart = {
        items: this.items,
        promoCode: this.promoCode,
        discount: this.discount
      }

      // Save as guest cart
      localStorage.setItem('vcn-guest-cart', JSON.stringify(currentCart))

      // Reset to guest state
      this.setUser(null, true)

      // Load guest cart (which is the same as current cart)
      this.loadCart()
    },

    // ===== BACKEND API SYNC METHODS =====

    // Sync single cart item with backend
    async syncItemWithBackend(variantId: string | number, quantity: number = 1): Promise<{ cartItemId?: string | number; success: boolean } | null> {
      
      if (import.meta.client) {
        try {
          const { useCartApi } = await import('~/composables/useCartApi')
          const { addToCart, getSessionId } = useCartApi()

          this.sessionId = getSessionId()
          

          const response = await addToCart(variantId, quantity)

          if (response.success) {
            // Extract cartItemId from response if available
            const cartItemId = response.items?.[0]?.cartItemId || response.cartItemId
            return { cartItemId, success: true }
          } else {
            // Check if it's a 404 (API not deployed yet) - work in local-only mode
            if (response.message?.includes('404')) {
              return { success: true } // Return success to allow local cart to work
            }
            console.warn('Failed to sync cart item with backend:', response.message)
            return { success: false }
          }
        } catch (error: any) {
          // Handle 404 errors gracefully - cart will work without backend
          if (error?.message?.includes('404') || error?.statusCode === 404) {
            console.log('Backend cart API not available - working in localStorage mode')
            return { success: true }
          }
          console.error('Error syncing cart item with backend:', error)
          return { success: false }
        }
      } else {
        console.warn('Not on client side, skipping backend sync')
        return null
      }
    },

    // Load cart from backend API
    async loadFromBackend() {
      if (import.meta.client) {
        try {
          const { useCartApi } = await import('~/composables/useCartApi')
          const { readCart, getSessionId } = useCartApi()

          const sessionId = getSessionId()
          this.sessionId = sessionId
          const response = await readCart(sessionId)

          if (response.success && response.items) {
            // Map API items to CartItem format
            this.items = response.items.map((apiItem: any) => ({
              id: apiItem.product?.id || apiItem.variantId,
              name: apiItem.product?.productName || 'Unknown Product',
              price: parseFloat(apiItem.price) || 0,
              mrp: apiItem.mrp ? parseFloat(apiItem.mrp) : null,
              image: apiItem.product?.productImages?.[0] || '',
              quantity: apiItem.quantity || 1,
              cartItemId: apiItem.cartItemId,
              variantId: apiItem.variantId
            }))
            this.saveCart()
            console.log('Cart loaded from backend successfully')
          } else if (response.message?.includes('404')) {
            console.log('Backend cart API not available - using localStorage only')
          }
        } catch (error: any) {
          // Silently ignore 404 errors
          if (error?.message?.includes('404') || error?.statusCode === 404) {
            console.log('Backend cart API not available - using localStorage only')
          } else {
            console.error('Error loading cart from backend:', error)
          }
        }
      }
    }
  }
})
