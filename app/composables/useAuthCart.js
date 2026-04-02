// Composable to handle authentication and cart synchronization (client-only)
export const useAuthCart = () => {
  const cartStore = useCartStore()

  // Mock auth state - replace with actual auth implementation
  const authState = useState('auth', () => ({
    user: null,
    isLoggedIn: false,
    token: null
  }))

  // Login function
  const login = async (credentials) => {
    try {
      // Mock login - replace with actual auth implementation
      // For demo purposes, we'll create a mock user
      const mockUser = {
        id: 'user_' + Date.now(),
        mobile: credentials.mobile,
        name: 'Test User',
        email: 'test@example.com'
      }

      const mockToken = 'mock_token_' + Date.now()

      // Update auth state
      authState.value.user = mockUser
      authState.value.isLoggedIn = true
      authState.value.token = mockToken

      // Handle cart login (merge guest cart with user cart)
      await cartStore.handleUserLogin(mockUser.id)

      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      // Handle cart logout (save current cart as guest cart)
      cartStore.handleUserLogout()

      // Reset auth state
      authState.value.user = null
      authState.value.isLoggedIn = false
      authState.value.token = null

      // Clear auth token from localStorage
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('auth_token')
      }

      return { success: true }
    } catch (error) {
      console.error('Logout error:', error)
      return { success: false, error: error.message }
    }
  }

  // Initialize cart on app load
  const initializeCart = async () => {
    // Check if user is logged in (from localStorage token)
    const isLoggedIn = checkAuthStatus()

    if (isLoggedIn && authState.value.user) {
      // User is logged in
      cartStore.setUser(authState.value.user.id, false)
      await cartStore.loadCart()
    } else {
      // User is guest
      cartStore.setUser(null, true)
      await cartStore.loadCart()
    }
  }

  // Check if user is logged in (mock implementation)
  const checkAuthStatus = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token')
      const userData = localStorage.getItem('user_data')

      if (token && userData) {
        try {
          const user = JSON.parse(userData)
          authState.value.user = user
          authState.value.isLoggedIn = true
          authState.value.token = token
          return true
        } catch (error) {
          console.error('Error parsing user data:', error)
        }
      }
    }
    return false
  }

  // Save auth data to localStorage
  const saveAuthData = (user, token) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('auth_token', token)
      localStorage.setItem('user_data', JSON.stringify(user))
    }
  }

  // Enhanced login with localStorage persistence
  const loginWithPersistence = async (credentials) => {
    const result = await login(credentials)

    if (result.success && result.user) {
      // Save auth data to localStorage for persistence
      saveAuthData(result.user, authState.value.token)
    }

    return result
  }

  // Enhanced logout with localStorage cleanup
  const logoutWithCleanup = async () => {
    const result = await logout()

    if (result.success) {
      // Clear all auth-related localStorage items
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
      }
    }

    return result
  }

  // Get all user carts (for admin/debug purposes)
  const getAllUserCarts = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userCarts = {}
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('vcn-user-cart-')) {
          const userId = key.replace('vcn-user-cart-', '')
          try {
            userCarts[userId] = JSON.parse(localStorage.getItem(key))
          } catch (error) {
            console.error('Error parsing user cart:', error)
          }
        }
      }
      return userCarts
    }
    return {}
  }

  // Clear all cart data (for testing/reset)
  const clearAllCartData = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Clear all cart-related items
      const keysToRemove = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && (key.startsWith('vcn-') && key.includes('cart'))) {
          keysToRemove.push(key)
        }
      }

      keysToRemove.forEach(key => {
        localStorage.removeItem(key)
      })

      console.log('All cart data cleared')
    }
  }

  return {
    // State
    authState: readonly(authState),

    // Basic methods
    login,
    logout,
    initializeCart,
    checkAuthStatus,

    // Enhanced methods with localStorage
    loginWithPersistence,
    logoutWithCleanup,

    // Utility methods
    getAllUserCarts,
    clearAllCartData,
    saveAuthData
  }
}
