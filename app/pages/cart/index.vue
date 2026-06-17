<template>
  <div class="cart-main-wrapper">
    <h1 class="cart-page-title">{{ cart.title }}</h1>

    <div class="row">
      <div class="col-lg-12" v-if="cartStore.items.length === 0">
        <div class="empty-cart-message">
          <h3>{{ cart.emptyCart.heading }}</h3>
          <p class="text-center">{{ cart.emptyCart.description }}</p>
          <a href="/all-products" class="btn-learn">{{ cart.emptyCart.buttonText }}</a>
        </div>
      </div>

      <div class="col-lg-12" v-else>
        <!-- Cart Header -->
        <div class="cart-table-header row">
          <div class="col-6 cart-header-product">{{ cart.tableHeader.product }}</div>
          <div class="col-3 cart-header-product text-center">{{ cart.tableHeader.quantity }}</div>
          <div class="col-3 cart-header-product text-end">{{ cart.tableHeader.price }}</div>
        </div>

        <!-- Cart Items -->
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item-wrapper row align-items-center">
          <div class="col-lg-6 d-flex align-items-center gap-3">
            <img :src="item.image" :alt="item.name" class="cart-product-image"
              @error="$event.target.src = '/img/products/img1.png'" />
            <div class="cart-product-details">
              <div class="cart-product-name">{{ item.name }}</div>
              <div class="cart-product-subscription">{{ item.subscription }}</div>
            </div>
          </div>
          <div class="col-lg-3 text-center mt-3 mt-lg-0">
            <div class="cart-quantity-control">
              <button class="cart-qty-button" @click="handleDecrement(item.id)">−</button>
              <div class="cart-qty-display">{{ item.quantity }}</div>
              <button class="cart-qty-button" @click="handleIncrement(item.id)">+</button>
            </div>
          </div>
          <div class="col-lg-3 text-end mt-3 mt-lg-0">
            <div class="cart-item-price">
              <span v-if="item.mrp" class="cart-item-mrp">₹{{ (item.mrp * item.quantity).toFixed(2) }}</span>
              ₹{{ (item.price * item.quantity).toFixed(2) }}
            </div>
            <button class="cart-remove-btn" @click="cartStore.removeFromCart(item.id)">
              {{ cart.cartItem.removeButton }}
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-8" v-if="cartStore.items.length > 0">
        <!-- Recommendations -->
        <h2 class="cart-recommendations-title">{{ cart.recommendations.heading }}</h2>

        <div class="row g-4">
          <div v-for="product in recommendedProducts" :key="product.id" class="col-md-4">
            <div class="cart-product-card">
              <img :src="product.image" :alt="product.name" class="cart-suggested-image" />
              <div class="cart-suggested-name">{{ product.name }}</div>
              <div class="cart-suggested-description">{{ product.description }}</div>
              <div class="cart-price-wrapper">
                <span class="cart-current-price">₹{{ product.currentPrice }}</span>
                <span class="cart-original-price">₹{{ product.originalPrice }}</span>
                <button @click="addRecommendedProduct(product)" class="cart-add-btn">
                  {{cart.recommendations.addButton}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-lg-4" v-if="cartStore.items.length > 0">
        <div class="cart-sidebar-wrapper">
          <!-- Promo Code -->
          <div class="cart-promo-section">
            <div class="cart-promo-label">{{ cart.promo.label }}</div>
            <div class="cart-promo-input-group">
              <input type="text" v-model="promoInput" class="cart-promo-input" :placeholder="cart.promo.placeholder"
                @keyup.enter="applyPromo" />
              <button class="cart-promo-apply-btn" @click="applyPromo" :disabled="!promoInput.trim()">
                {{ cart.promo.applyButton }}
              </button>
            </div>
            <div v-if="cartStore.promoCode" class="promo-applied">
              <span class="promo-success">{{cart.promoMessages.applied}} {{ cartStore.promoCode }}</span>
              <button @click="removePromo" class="promo-remove">{{ cart.cartActions.remove }}</button>
            </div>
          </div>
          <hr />

          <!-- Total -->
          <div class="cart-total-section">
            <div class="cart-total-row" v-if="cartStore.discount > 0">
              <span class="cart-total-label">{{ cart.total.subtotal }}</span>
              <span class="cart-total-amount">₹{{ cartStore.cartSubtotal.toFixed(2) }}</span>
            </div>
            <div class="cart-total-row" v-if="cartStore.discount > 0">
              <span class="cart-total-label">{{ cart.total.discount }}</span>
              <span class="cart-total-amount discount">-₹{{ cartStore.discount.toFixed(2) }}</span>
            </div>
            <div class="cart-total-row">
              <span class="cart-total-label">{{ cart.total.total }}</span>
              <span class="cart-total-amount">₹{{ cartStore.cartTotal.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Checkout Button -->
          <div class="cart-checkout-btn">
            <a :href="cart.checkoutButton.link" class="btn">{{ cart.checkoutButton.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useProductStore } from '~/stores/product'
import { useAuthCart } from '~/composables/useAuthCart'
import { ref, onMounted, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('cart-cms', () => cmsStore.fetchSectionsBySlug('cart'))

const cart = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find cart section by name or sectionKey
  const section = sections.find(s => s.name === 'cart' || s.sectionKey === 'cart')
  
  const fallback = cmsStore.getPageSection('cart', 'cart') || {
    title: "Your Cart",
    emptyCart: { heading: "Your cart is empty", description: "Looks like you haven't added any products to your cart yet.", buttonText: "Continue Shopping", buttonLink: "/all-products" },
    tableHeader: { product: "Product", quantity: "Quantity", price: "Price" },
    cartItem: { removeButton: "Remove" },
    recommendations: { heading: "You Might Also Like:", addButton: "Add" },
    promo: { label: "Promo Code", placeholder: "Enter Promo Code", applyButton: "Apply" },
    total: { subtotal: "Subtotal", discount: "Discount", total: "Total" },
    checkoutButton: { text: "Checkout", link: "/checkout" },
    cartActions: { remove: "Remove" },
    subscriptionText: "One-time purchase",
    promoMessages: { invalid: "Invalid promo code. Try SAVE10 for 10% off!", applied: "Promo code applied:" }
  }

  if (!section) {
    return fallback
  }

  const items = section.items || []
  const emptyCartItem = items.find(item => item.name === 'empty-cart')
  const headersItem = items.find(item => item.name === 'table-headers')
  const cartItemItem = items.find(item => item.name === 'cart-item')
  const recommendationsItem = items.find(item => item.name === 'recommendations')
  const promoCodeItem = items.find(item => item.name === 'promo-code')
  const totalsItem = items.find(item => item.name === 'totals')
  const checkoutButtonItem = items.find(item => item.name === 'checkout-button')
  const subscriptionItem = items.find(item => item.name === 'subscription')
  const actionsItem = items.find(item => item.name === 'actions')

  return {
    title: section.title || fallback.title,
    emptyCart: {
      heading: emptyCartItem?.title || fallback.emptyCart.heading,
      description: emptyCartItem?.description || fallback.emptyCart.description,
      buttonText: emptyCartItem?.buttonText || fallback.emptyCart.buttonText,
      buttonLink: emptyCartItem?.buttonLink || fallback.emptyCart.buttonLink
    },
    tableHeader: {
      product: headersItem?.extraData?.product || fallback.tableHeader.product,
      quantity: headersItem?.extraData?.quantity || fallback.tableHeader.quantity,
      price: headersItem?.extraData?.price || fallback.tableHeader.price
    },
    cartItem: {
      removeButton: cartItemItem?.buttonText || fallback.cartItem.removeButton
    },
    recommendations: {
      heading: recommendationsItem?.title || fallback.recommendations.heading,
      addButton: recommendationsItem?.extraData?.addButtonText || fallback.recommendations.addButton
    },
    promo: {
      label: promoCodeItem?.title || fallback.promo.label,
      placeholder: promoCodeItem?.extraData?.placeholder || fallback.promo.placeholder,
      applyButton: promoCodeItem?.extraData?.applyButtonText || fallback.promo.applyButton
    },
    total: {
      subtotal: totalsItem?.extraData?.subtotalLabel || fallback.total.subtotal,
      discount: totalsItem?.extraData?.discountLabel || fallback.total.discount,
      total: totalsItem?.extraData?.totalLabel || fallback.total.total
    },
    checkoutButton: {
      text: checkoutButtonItem?.buttonText || checkoutButtonItem?.title || fallback.checkoutButton.text,
      link: checkoutButtonItem?.buttonLink || fallback.checkoutButton.link
    },
    cartActions: {
      remove: actionsItem?.extraData?.remove || fallback.cartActions.remove
    },
    subscriptionText: subscriptionItem?.description || fallback.subscriptionText,
    promoMessages: {
      invalid: promoCodeItem?.extraData?.messages?.invalid || fallback.promoMessages.invalid,
      applied: promoCodeItem?.extraData?.messages?.applied || fallback.promoMessages.applied
    }
  }
})

const cartStore = useCartStore()
const productStore = useProductStore()
const { authState, initializeCart } = useAuthCart()
const promoInput = ref('')

// Fetch products from store
productStore.fetchProducts()

// Recommended products - dynamically from store (first 3 products)
const recommendedProducts = computed(() => {
  return productStore.allProducts.slice(0, 3).map(product => {
    const pricing = productStore.getProductPricing(product)
    return {
      id: product.id,
      name: product.name,
      description: product.description?.substring(0, 50) + '...' || 'Daily Wellness Product',
      currentPrice: pricing.price,
      originalPrice: pricing.oldPrice,
      image: productStore.getPrimaryImage(product)
    }
  })
})

// Initialize cart data on mount
onMounted(async () => {
  // Initialize cart based on auth state
  await initializeCart()

  // Load cart data from localStorage first
  if (process.client && window.localStorage) {
    await cartStore.loadCart()
  }

  // Sync with backend API (load server cart and merge with local)
  await cartStore.loadFromBackend()
})

const addRecommendedProduct = async (product) => {
  await cartStore.addToCart({
    id: product.id,
    name: product.name,
    price: product.currentPrice,
    mrp: product.originalPrice,
    image: product.image,
    subscription: 'One-time purchase',
    variantId: product.variantId || product.id
  })
}

const handleIncrement = async (itemId) => {
  await cartStore.incrementQuantity(itemId)
}

const handleDecrement = async (itemId) => {
  await cartStore.decrementQuantity(itemId)
}

const applyPromo = () => {
  if (promoInput.value.trim()) {
    const success = cartStore.applyPromoCode(promoInput.value.trim())
    if (!success) {
      alert(cart.value.promoMessages.invalid) // Show error message from CMS
    }
    promoInput.value = ''
  }
}

const removePromo = () => {
  cartStore.removePromoCode()
}

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>

<style scoped>
.empty-cart-message {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px 0;
}

.empty-cart-message h3 {
  color: var(--vcn-primary);
  margin-bottom: 15px;
}

.empty-cart-message p {
  color: #666;
  margin-bottom: 25px;
}

.cart-remove-btn {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 5px;
  text-decoration: underline;
}

.cart-remove-btn:hover {
  color: #c82333;
}

.promo-applied {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.promo-success {
  color: #28a745;
  font-size: 0.9rem;
}

.promo-remove {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
}

.discount {
  color: #28a745 !important;
}

.cart-promo-apply-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cart-item-mrp {
  text-decoration: line-through;
  color: #999;
  font-size: 0.9em;
  margin-right: 8px;
}
</style>
