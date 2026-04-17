// This composable is no longer needed
// We're using direct store imports with proper Nuxt/Pinia setup
export const useCart = () => {
  console.warn('useCart composable is deprecated, use direct import instead')
  return {
    items: [],
    cartCount: 0,
    cartTotal: 0,
    cartSubtotal: 0,
    promoCode: '',
    discount: 0,
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
    incrementQuantity: () => { },
    decrementQuantity: () => { },
    clearCart: () => { },
    applyPromoCode: () => false,
    removePromoCode: () => { },
    loadFromLocalStorage: () => { },
    saveToLocalStorage: () => { },
    getItemById: () => null
  }
}
