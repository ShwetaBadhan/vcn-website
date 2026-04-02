import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    promoCode: '',
    discount: 0,
    userId: null, // Track current user ID
    isGuest: true // Track if user is guest or logged in
  }),

  getters: {
    cartCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    cartTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      return subtotal - state.discount
    },

    cartSubtotal: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    }
  },

  actions: {
    // Set user authentication state
    setUser(userId, isGuest = false) {
      this.userId = userId
      this.isGuest = isGuest
    },

    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          subscription: product.subscription || 'One-time purchase'
        })
      }

      this.saveCart()
    },

    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.saveCart()
      }
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
          this.saveCart()
        }
      }
    },

    incrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity += 1
        this.saveCart()
      }
    },

    decrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        this.saveCart()
      } else if (item && item.quantity === 1) {
        this.removeFromCart(productId)
      }
    },

    clearCart() {
      this.items = []
      this.promoCode = ''
      this.discount = 0
      this.saveCart()
    },

    applyPromoCode(code) {
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
            isGuest: this.isGuest
          }

          if (this.isGuest) {
            // Save guest cart
            localStorage.setItem('vcn-guest-cart', JSON.stringify(cartData))
          } else if (this.userId) {
            // Save user cart
            localStorage.setItem(`vcn-user-cart-${this.userId}`, JSON.stringify(cartData))
          }
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
            this.items = cartData.items || []
            this.promoCode = cartData.promoCode || ''
            this.discount = cartData.discount || 0
          } else {
            // Initialize empty cart
            this.items = []
            this.promoCode = ''
            this.discount = 0
          }
        } catch (error) {
          console.error('Error loading cart from localStorage:', error)
          // Initialize empty cart on error
          this.items = []
          this.promoCode = ''
          this.discount = 0
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
    mergeWithGuestCart(guestCartData) {
      if (!guestCartData || guestCartData.items.length === 0) return

      const mergedItems = [...this.items]

      // Add guest items that aren't already in user cart
      guestCartData.items.forEach(guestItem => {
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
    async handleUserLogin(userId) {
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
    }
  }
})
