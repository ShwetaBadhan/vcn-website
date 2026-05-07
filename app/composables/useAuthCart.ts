// Composable to handle authentication and cart synchronization (client-only)

interface User {
  id: string
  mobile: string
  name: string
  email: string
}

interface Credentials {
  mobile: string
}

interface AuthState {
  user: User | null
  isLoggedIn: boolean
  token: string | null
}

interface LoginResult {
  success: boolean
  user?: User
  error?: string
}

export const useAuthCart = () => {
  // Get cart store dynamically to avoid circular dependency
  const getCartStore = () => useCartStore()

  // Mock auth state - replace with actual auth implementation
  const authState = useState<AuthState>('auth', () => ({
    user: null,
    isLoggedIn: false,
    token: null
  }))

  // Login function
  const login = async (credentials: Credentials): Promise<LoginResult> => {
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
      await getCartStore().handleUserLogin(mockUser.id)

      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      // Handle cart logout (save current cart as guest cart)
      getCartStore().handleUserLogout()

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
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  // Initialize cart on app load
  const initializeCart = async () => {
    // Check if user is logged in (from localStorage token)
    const isLoggedIn = checkAuthStatus()

    const user = authState.value.user
    if (isLoggedIn && user) {
      // User is logged in
      getCartStore().setUser(user.id, false)
      await getCartStore().loadCart()
    } else {
      // User is guest
      getCartStore().setUser(null, true)
      await getCartStore().loadCart()
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
  const saveAuthData = (user: User, token: string | null) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (token) {
        localStorage.setItem('auth_token', token)
      }
      localStorage.setItem('user_data', JSON.stringify(user))
    }
  }

  // Enhanced login with localStorage persistence
  const loginWithPersistence = async (credentials: Credentials) => {
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
  const getAllUserCarts = (): Record<string, unknown> => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userCarts: Record<string, unknown> = {}
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('vcn-user-cart-')) {
          const userId = key.replace('vcn-user-cart-', '')
          try {
            const item = localStorage.getItem(key)
            if (item) {
              userCarts[userId] = JSON.parse(item)
            }
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
