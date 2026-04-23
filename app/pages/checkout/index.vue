<template>
  <div class="checkout-container">
    <div class="row g-4">
      <!-- Left Side - Checkout Steps -->
      <div class="col-lg-7">
        <!-- Step 1: Account Creation -->
        <div class="checkout-step-card" id="accountStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">1 of 3</span>
            </div>
            <h2 class="step-title-text">Create Your Account</h2>
          </div>

          <div class="checkout-step-body" id="accountStepContent">
            <button class="secondary-action-btn w-100" onclick="proceedWithGoogle()">
              <span class="google-icon-text me-2">G</span> Continue with
              Google
            </button>

            <div class="divider-text">
              <span>or</span>
            </div>

            <a class="primary-action-btn w-100 mb-3" onclick="displayEmailForm()">
              Sign Up with Email
            </a>

            <div id="emailSignupForm" class="hide-element">
              <div class="mb-3">
                <input type="email" class="form-control form-input-field" id="userEmailInput" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-input-field" id="userPasswordInput"
                  placeholder="Password" />
              </div>
              <a class=" primary-action-btn w-100" onclick="submitAccountInfo()">
                Continue
              </a>
            </div>

            <p class="mb-3">
              Have an account? <a href="#" class="link-text">Sign In</a>
            </p>

            <div class="info-box">
              <div class="info-box-left">
                <div class="info-box-title">
                  <svg width="30px" height="30px" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16345 1 1 8.16344 1 17C1 25.8366 8.16345 33 17 33Z"
                      stroke="#1C3A13"></path>
                    <path
                      d="M10.5275 2.39896V5.85604C10.5275 8.9446 11.3742 11.4541 15.8535 10.6337C19.3018 10.0019 25.9001 7.36523 25.9001 12.1209C25.9001 20.1055 3.63965 9.88346 3.63965 17.7891C3.63965 27.3224 30.4672 12.3622 30.4672 21.3866C30.4672 29.924 13.6994 16.8152 13.6994 29.2528V32.7274"
                      stroke="#1C3A13"></path>
                  </svg>
                  LEARN AS YOU VCN
                </div>
                <p class="info-box-description">
                  Your body is home to 38 trillion bacteria. 95% of these (36
                  trillion) live in your gut.
                </p>
              </div>
              <div class="info-box-right">
                <input type="checkbox" id="newsletterCheckbox" checked />
                <div class="info-box-right-text">
                  Guide me along the way with tips, information, and nerdy
                  reads. Unsubscribe anytime.
                </div>
              </div>
            </div>
          </div>

          <div class="checkout-step-body hide-element" id="accountStepCompleted">
            <p class="completion-message">
              <span class="step-check-icon">✓</span>
              Account created successfully
            </p>
          </div>
        </div>

        <!-- Step 2: Shipping Details -->
        <div class="checkout-step-card step-disabled" id="shippingStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">2 of 3</span>
            </div>
            <h2 class="step-title-text">Shipping Information</h2>
          </div>

          <div class="checkout-step-body hide-element" id="shippingStepContent">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="firstNameInput" placeholder="First Name" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="lastNameInput" placeholder="Last Name" />
              </div>
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="addressInput" placeholder="Address" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="cityInput" placeholder="City" />
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control form-input-field" id="stateInput" placeholder="State" />
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control form-input-field" id="zipInput" placeholder="ZIP" />
              </div>
              <div class="col-12">
                <a class="primary-action-btn w-100" onclick="submitShippingInfo()">
                  Continue to Payment
                </a>
              </div>
            </div>
          </div>

          <div class="checkout-step-body hide-element" id="shippingStepCompleted">
            <p class="completion-message">
              <span class="step-check-icon">✓</span>
              Shipping information saved
            </p>
          </div>
        </div>

        <!-- Step 3: Payment Details -->
        <div class="checkout-step-card step-disabled" id="paymentStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">3 of 3</span>
            </div>
            <h2 class="step-title-text">Payment</h2>
          </div>

          <div class="checkout-step-body hide-element" id="paymentStepContent">
            <div class="row g-3">
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="cardNumberInput"
                  placeholder="Card Number" />
              </div>
              <div class="col-6">
                <input type="text" class="form-control form-input-field" id="expiryInput" placeholder="MM/YY" />
              </div>
              <div class="col-6">
                <input type="text" class="form-control form-input-field" id="cvvInput" placeholder="CVV" />
              </div>
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="cardNameInput"
                  placeholder="Name on Card" />
              </div>
              <div class="col-12">
                <a class=" primary-action-btn w-100 final-order-btn" onclick="submitPaymentInfo()">
                  Place Order - <span id="finalOrderTotal">₹{{ cartStore.cartTotal.toFixed(2) }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Cart Summary -->
      <div class="col-lg-5">
        <div class="card cart-summary-card">
          <div class="card-body p-4">
            <h3 class="cart-summary-title">Cart Summary</h3>

            <!-- Dynamic Cart Items from Store -->
            <div v-for="item in cartStore.items" :key="item.id" class="d-flex mb-4 product-wrapper">
              <div class="product-image-container me-3">
                <img :src="item.image || '/img/products/img1.png'" class="w-100" :alt="item.name"
                  @error="$event.target.src = '/img/products/img1.png'">
              </div>
              <div class="grow">
                <h6 class="product-name-text">{{ item.name }}</h6>
                <small class="product-delivery-info">{{ item.subscription || 'One-time purchase' }}</small>
                <div class="d-flex align-items-center mt-2">
                  <div class="cart-quantity-control">
                    <button class="cart-qty-button" @click="cartStore.decrementQuantity(item.id)">−</button>
                    <div class="cart-qty-display">{{ item.quantity }}</div>
                    <button class="cart-qty-button" @click="cartStore.incrementQuantity(item.id)">+</button>
                  </div>
                </div>
              </div>
              <div class="text-end">
                <div class="price-display-text">
                  ₹{{ (item.price * item.quantity).toFixed(2) }}
                </div>
              </div>
            </div>

            <!-- Empty Cart Message -->
            <div v-if="cartStore.items.length === 0" class="text-center py-4">
              <p>Your cart is empty</p>
              <a href="/all-products" class="btn-learn">Continue Shopping</a>
            </div>

            <!-- Promo Code Section -->
            <div class="mb-4">

              <div class="cart-promo-section">
                <div class="cart-promo-label">Promo Code
                  <br>We found you a better deal! Applied holiday30 (30% off) for higher savings.
                </div>
                <div class="cart-promo-input-group">
                  <input type="text" class="cart-promo-input" placeholder="Enter Promo Code">
                  <button class="cart-promo-apply-btn">Apply</button>
                </div>
              </div>
            </div>

            <hr class="summary-divider" />

            <!-- Order Summary -->
            <div class="summary-row">
              <span class="summary-label">Subtotal</span>
              <span class="summary-value" id="orderSubtotal">₹{{ cartStore.cartSubtotal.toFixed(2) }}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Shipping</span>
              <span class="summary-free-text">Free</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Taxes</span>
              <span class="summary-value" id="orderTaxes">₹0.00</span>
            </div>

            <hr class="summary-divider" />

            <div class="total-row">
              <span>Total</span>
              <span id="orderTotal">₹{{ cartStore.cartTotal.toFixed(2) }}</span>
            </div>

            <p class="summary-footer-note">
              Final tax and shipping is calculated after shipping step is
              complete. Recurring subtotal is ₹{{ cartStore.cartSubtotal.toFixed(2) }} per month.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { onMounted } from 'vue'

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()

onMounted(async () => {
  await initializeCart()
  if (process.client && window.localStorage) {
    await cartStore.loadCart()
  }
})
</script>