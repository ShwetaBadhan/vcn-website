<template>
  <div class="cart-main-wrapper">
    <h1 class="cart-page-title">Your Cart</h1>

    <div class="row">
      <div class="col-lg-12" v-if="cartStore.items.length === 0">
        <div class="empty-cart-message">
          <h3>Your cart is empty</h3>
          <p class="text-center">Looks like you haven't added any products to your cart yet.</p>
          <a href="/all-products" class="btn-learn">Continue Shopping</a>
        </div>
      </div>

      <div class="col-lg-12" v-else>
        <!-- Cart Header -->
        <div class="cart-table-header row">
          <div class="col-6 cart-header-product">Product</div>
          <div class="col-3 cart-header-product text-center">Quantity</div>
          <div class="col-3 cart-header-product text-end">Price</div>
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
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-8" v-if="cartStore.items.length > 0">
        <!-- Recommendations -->
        <h2 class="cart-recommendations-title">You Might Also Like:</h2>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="cart-product-card">
              <img src="https://res.cloudinary.com/dljz0lko8/image/upload/v1693433672/cart/vcn_2x.png" alt="VCN-01"
                class="cart-suggested-image" />
              <div class="cart-suggested-name">VCN-01</div>
              <div class="cart-suggested-description">Daily Synbiotic</div>
              <div class="cart-price-wrapper">
                <span class="cart-current-price">$37.49</span>
                <span class="cart-original-price">$49.99</span>
                <button
                  @click="addRecommendedProduct('vcn', 'VCN-01', 37.49, 'https://res.cloudinary.com/dljz0lko8/image/upload/v1693433672/cart/vcn_2x.png')"
                  class="cart-add-btn">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="cart-product-card">
              <img
                src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802720/cross-sell-module/dm02-cross-sell.png"
                alt="DM-02™" class="cart-suggested-image" />
              <div class="cart-suggested-name">DM-02™</div>
              <div class="cart-suggested-description">Daily Multivitamin</div>
              <div class="cart-price-wrapper">
                <span class="cart-current-price">$29.99</span>
                <span class="cart-original-price">$39.99</span>
                <button
                  @click="addRecommendedProduct('dm02', 'DM-02™', 29.99, 'https://res.cloudinary.com/dljz0lko8/image/upload/v1755802720/cross-sell-module/dm02-cross-sell.png')"
                  class="cart-add-btn">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="cart-product-card">
              <img
                src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802719/cross-sell-module/pm02-cross-sell.png"
                alt="PM-02™" class="cart-suggested-image" />
              <div class="cart-suggested-name">PM-02™</div>
              <div class="cart-suggested-description">Sleep + Restore</div>
              <div class="cart-price-wrapper">
                <span class="cart-current-price">$26.24</span>
                <span class="cart-original-price">$34.99</span>
                <button
                  @click="addRecommendedProduct('pm02', 'PM-02™', 26.24, 'https://res.cloudinary.com/dljz0lko8/image/upload/v1755802719/cross-sell-module/pm02-cross-sell.png')"
                  class="cart-add-btn">
                  Add
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
            <div class="cart-promo-label">Promo Code</div>
            <div class="cart-promo-input-group">
              <input type="text" v-model="promoInput" class="cart-promo-input" placeholder="Enter Promo Code"
                @keyup.enter="applyPromo" />
              <button class="cart-promo-apply-btn" @click="applyPromo" :disabled="!promoInput.trim()">
                Apply
              </button>
            </div>
            <div v-if="cartStore.promoCode" class="promo-applied">
              <span class="promo-success">Promo code applied: {{ cartStore.promoCode }}</span>
              <button @click="removePromo" class="promo-remove">Remove</button>
            </div>
          </div>
          <hr />

          <!-- Total -->
          <div class="cart-total-section">
            <div class="cart-total-row" v-if="cartStore.discount > 0">
              <span class="cart-total-label">Subtotal</span>
              <span class="cart-total-amount">${{ cartStore.cartSubtotal.toFixed(2) }}</span>
            </div>
            <div class="cart-total-row" v-if="cartStore.discount > 0">
              <span class="cart-total-label">Discount</span>
              <span class="cart-total-amount discount">-${{ cartStore.discount.toFixed(2) }}</span>
            </div>
            <div class="cart-total-row">
              <span class="cart-total-label">Total</span>
              <span class="cart-total-amount">${{ cartStore.cartTotal.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Checkout Button -->
          <div class="cart-checkout-btn">
            <a href="/checkout" class="btn">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { ref, onMounted } from 'vue'

const cartStore = useCartStore()
const { authState, initializeCart } = useAuthCart()
const promoInput = ref('')

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

const addRecommendedProduct = async (id, name, price, image) => {
  await cartStore.addToCart({
    id,
    name,
    price,
    image,
    subscription: 'One-time purchase'
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
      alert('Invalid promo code. Try SAVE10 for 10% off!')
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