<template>
  <div class="checkout-container">
    <div class="row g-4">
      <!-- Left Side - Checkout Steps -->
      <div class="col-lg-7">
        <!-- Step 1: Account Creation -->
        <div class="checkout-step-card" id="accountStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">{{ checkout.accountStep.step }}</span>
            </div>
            <h2 class="step-title-text">{{ checkout.accountStep.title }}</h2>
          </div>

          <div class="checkout-step-body" id="accountStepContent">
            <button class="secondary-action-btn w-100" onclick="proceedWithGoogle()">
              <span class="google-icon-text me-2">{{ checkout.accountStep.i }}</span> {{checkout.accountStep.googleButton}}
            </button>

            <div class="divider-text">
              <span>{{ checkout.accountStep.divider }}</span>
            </div>

            <a class="primary-action-btn w-100 mb-3" onclick="displayEmailForm()">
              {{ checkout.accountStep.emailButton }}
            </a>

            <div id="emailSignupForm" class="hide-element">
              <div class="mb-3">
                <input type="email" class="form-control form-input-field" id="userEmailInput" :placeholder="checkout.accountStep.emailPlaceholder" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-input-field" id="userPasswordInput"
                  :placeholder="checkout.accountStep.passwordPlaceholder" />
              </div>
              <a class=" primary-action-btn w-100" onclick="submitAccountInfo()">
                {{ checkout.accountStep.continueButton }}
              </a>
            </div>

            <p class="mb-3">
              {{ checkout.accountStep.haveAccountText }} <a href="/login" class="link-text">{{ checkout.accountStep.signInButton }}</a>
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
                  {{checkout.learnSection.title}}
                </div>
                <p class="info-box-description">
                  {{ checkout.learnSection.description }}
                </p>
              </div>
              <div class="info-box-right">
                <input type="checkbox" id="newsletterCheckbox" checked />
                <div class="info-box-right-text">
                  {{ checkout.learnSection.checkboxText }}
                </div>
              </div>
            </div>
          </div>

          <div class="checkout-step-body hide-element" id="accountStepCompleted">
            <p class="completion-message">
              <span class="step-check-icon">✓</span>
              {{ checkout.accountStep.completedMessage }}
            </p>
          </div>
        </div>

        <!-- Step 2: Shipping Details -->
        <div class="checkout-step-card" id="shippingStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">{{ checkout.shippingStep.step }}</span>
            </div>
            <h2 class="step-title-text">{{ checkout.shippingStep.title }}</h2>
          </div>

          <div class="checkout-step-body" id="shippingStepContent">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="firstNameInput" :placeholder="checkout.shippingStep.firstNamePlaceholder" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="lastNameInput" :placeholder="checkout.shippingStep.lastNamePlaceholder" />
              </div>
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="addressInput" :placeholder="checkout.shippingStep.addressPlaceholder" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control form-input-field" id="cityInput" :placeholder="checkout.shippingStep.cityPlaceholder" />
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control form-input-field" id="stateInput" :placeholder="checkout.shippingStep.statePlaceholder" />
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control form-input-field" id="zipInput" :placeholder="checkout.shippingStep.zipPlaceholder" />
              </div>
              <div class="col-12">
                <a class="primary-action-btn w-100" onclick="submitShippingInfo()">
                  {{checkout.shippingStep.continueButton}}
                </a>
              </div>
            </div>
          </div>

          <div class="checkout-step-body hide-element" id="shippingStepCompleted">
            <p class="completion-message">
              <span class="step-check-icon">✓</span>
              {{ checkout.shippingStep.completedMessage }}
            </p>
          </div>
        </div>

        <!-- Step 3: Payment Details -->
        <div class="checkout-step-card" id="paymentStepCard">
          <div class="checkout-step-header">
            <div class="step-indicator">
              <span class="step-count-badge">{{ checkout.paymentStep.step }}</span>
            </div>
            <h2 class="step-title-text">{{ checkout.paymentStep.title }}</h2>
          </div>

          <div class="checkout-step-body" id="paymentStepContent">
            <div class="row g-3">
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="cardNumberInput"
                  :placeholder="checkout.paymentStep.cardNumberPlaceholder" />
              </div>
              <div class="col-6">
                <input type="text" class="form-control form-input-field" id="expiryInput" :placeholder="checkout.paymentStep.expiryPlaceholder" />
              </div>
              <div class="col-6">
                <input type="text" class="form-control form-input-field" id="cvvInput" :placeholder="checkout.paymentStep.cvvPlaceholder" />
              </div>
              <div class="col-12">
                <input type="text" class="form-control form-input-field" id="cardNameInput"
                  :placeholder="checkout.paymentStep.cardNamePlaceholder" />
              </div>
              <div class="col-12">
                <a class="primary-action-btn w-100 final-order-btn" onclick="submitPaymentInfo()">
                  {{checkout.paymentStep.placeOrderButton}} <span id="finalOrderTotal">₹{{ cartStore?.cartTotal?.toFixed(2) || '0.00' }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="checkout-step-body hide-element" id="paymentStepCompleted">
            <p class="completion-message">
              <span class="step-check-icon">✓</span>
              {{ checkout.paymentStep.completedMessage }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Side - Cart Summary -->
      <div class="col-lg-5">
        <div class="card cart-summary-card">
          <div class="card-body p-4">
            <h3 class="cart-summary-title">{{ checkout.cartSummary.title }}</h3>

            <!-- Dynamic Cart Items from Store -->
            <div v-for="item in (cartStore?.items || [])" :key="item.id" class="d-flex mb-4 product-wrapper">
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
            <div v-if="!cartStore?.items || cartStore.items.length === 0" class="text-center py-4">
              <p>{{ checkout.cartSummary.emptyCartMessage }}</p>
              <a href="/all-products" class="btn-learn">{{ checkout.cartSummary.continueShopping }}</a>
            </div>

            <!-- Promo Code Section -->
            <div class="mb-4">

              <div class="cart-promo-section">
                <div class="cart-promo-label">{{checkout.cartSummary.promo.title}}
                  <br>{{checkout.cartSummary.promo.description}}
                </div>
                <div class="cart-promo-input-group">
                  <input type="text" class="cart-promo-input" :placeholder="checkout.cartSummary.promo.placeholder">
                  <button class="cart-promo-apply-btn">{{checkout.cartSummary.promo.applyButton}}</button>
                </div>
              </div>
            </div>

            <hr class="summary-divider" />

            <!-- Order Summary -->
            <div class="summary-row">
              <span class="summary-label">{{checkout.cartSummary.subtotal}}</span>
              <span class="summary-value" id="orderSubtotal">₹{{ cartStore?.cartSubtotal?.toFixed(2) || '0.00' }}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">{{checkout.cartSummary.shipping}}</span>
              <span class="summary-free-text">{{checkout.cartSummary.free}}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">{{checkout.cartSummary.taxes}}</span>
              <span class="summary-value" id="orderTaxes">₹0.00</span>
            </div>

            <hr class="summary-divider" />

            <div class="total-row">
              <span>{{checkout.cartSummary.total}}</span>
              <span id="orderTotal">₹{{ cartStore?.cartTotal?.toFixed(2) || '0.00' }}</span>
            </div>

            <p class="summary-footer-note">
              {{checkout.cartSummary.recurringNote}} ₹{{ cartStore?.cartSubtotal?.toFixed(2) || '0.00' }} per month.
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
import { navigateTo } from '#app'
import { useHead } from '#app'
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('checkout-cms', () => cmsStore.fetchSectionsBySlug('checkout'))

const checkout = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find checkout section by name or sectionKey
  const section = sections.find(s => s.name === 'checkout' || s.sectionKey === 'checkout')
  
  const fallback = cmsStore.getPageSection('checkout', 'checkout') || {
    accountStep: { step: "1 of 3", title: "Create Your Account", i: "G", googleButton: "Continue with Google", divider: "or", emailButton: "Sign Up with Email", emailPlaceholder: "Email", passwordPlaceholder: "Password", continueButton: "Continue", haveAccountText: "Have an account?", signInButton: "Sign In", completedMessage: "Account created successfully" },
    learnSection: { title: "LEARN AS YOU VCN", description: "Your body is home to 38 trillion bacteria. 95% of these (36 Trillion) live in your gut.", checkboxText: "Guide me along the way with tips, information, and nerdy reads. Unsubscribe anytime." },
    shippingStep: { step: "2 of 3", title: "Shipping Information", firstNamePlaceholder: "First Name", lastNamePlaceholder: "Last Name", addressPlaceholder: "Address", cityPlaceholder: "City", statePlaceholder: "State", zipPlaceholder: "ZIP", continueButton: "Continue to Payment", completedMessage: "Shipping information saved" },
    paymentStep: { step: "3 of 3", title: "Payment", cardNumberPlaceholder: "Card Number", expiryPlaceholder: "MM/YY", cvvPlaceholder: "CVV", cardNamePlaceholder: "Name on Card", placeOrderButton: "Place Order -", completedMessage: "Payment information saved" },
    cartSummary: { title: "Cart Summary", emptyCartMessage: "Your cart is empty", continueShopping: "Continue Shopping", promo: { title: "Promo Code", description: "We found you a better deal! Applied holiday30 (30% off) for higher savings.", placeholder: "Enter Promo Code", applyButton: "Apply" }, subtotal: "Subtotal", shipping: "Shipping", taxes: "Taxes", free: "Free", total: "Total", recurringNote: "Final tax and shipping is calculated after shipping step is complete. Recurring subtotal is" },
    validation: { emailRequired: "Email is required", invalidEmail: "Please enter a valid email address", passwordRequired: "Password is required", passwordMinLength: "Password must be at least 8 characters", passwordFormat: "Password must contain at least one uppercase letter, one lowercase letter, and one number", firstNameRequired: "First name is required", firstNameMinLength: "First name must be at least 2 characters", lastNameRequired: "Last name is required", lastNameMinLength: "Last name must be at least 2 characters", addressRequired: "Address is required", addressInvalid: "Please enter a complete address", cityRequired: "City is required", stateRequired: "State is required", stateInvalid: "Please enter a valid state", zipRequired: "ZIP code is required", zipInvalid: "Please enter a valid 6-digit ZIP code", cardNumberRequired: "Card number is required", cardNumberInvalid: "Please enter a valid card number", expiryRequired: "Expiry date is required", expiryInvalid: "Please enter a valid expiry date (MM/YY)", cvvRequired: "CVV is required", cvvInvalid: "Please enter a valid CVV (3 or 4 digits)", cardNameRequired: "Name on card is required", cardNameInvalid: "Please enter the complete name as shown on card" },
    alerts: { googleSignin: "Google sign-in would open here", orderSuccess: "Order placed successfully!" }
  }

  if (!section) {
    return fallback
  }

  const items = section.items || []
  const accountItem = items.find(item => item.name === 'account-step')
  const learnItem = items.find(item => item.name === 'learn-section')
  const shippingItem = items.find(item => item.name === 'shipping-step')
  const paymentItem = items.find(item => item.name === 'payment-step')
  const cartSummaryItem = items.find(item => item.name === 'cart-summary')
  const validationItem = items.find(item => item.name === 'validation')
  const alertsItem = items.find(item => item.name === 'alerts')

  return {
    accountStep: {
      step: accountItem?.extraData?.step || fallback.accountStep.step,
      title: accountItem?.title || fallback.accountStep.title,
      i: accountItem?.extraData?.icon || fallback.accountStep.i,
      googleButton: accountItem?.extraData?.googleButtonText || fallback.accountStep.googleButton,
      divider: accountItem?.extraData?.dividerText || fallback.accountStep.divider,
      emailButton: accountItem?.extraData?.emailButtonText || fallback.accountStep.emailButton,
      emailPlaceholder: accountItem?.extraData?.emailPlaceholder || fallback.accountStep.emailPlaceholder,
      passwordPlaceholder: accountItem?.extraData?.passwordPlaceholder || fallback.accountStep.passwordPlaceholder,
      continueButton: accountItem?.extraData?.continueButtonText || fallback.accountStep.continueButton,
      haveAccountText: accountItem?.extraData?.haveAccountText || fallback.accountStep.haveAccountText,
      signInButton: accountItem?.extraData?.signInButtonText || fallback.accountStep.signInButton,
      completedMessage: accountItem?.extraData?.completedMessage || fallback.accountStep.completedMessage
    },
    learnSection: {
      title: learnItem?.title || fallback.learnSection.title,
      description: learnItem?.description || fallback.learnSection.description,
      checkboxText: learnItem?.extraData?.checkboxText || fallback.learnSection.checkboxText
    },
    shippingStep: {
      step: shippingItem?.extraData?.step || fallback.shippingStep.step,
      title: shippingItem?.title || fallback.shippingStep.title,
      firstNamePlaceholder: shippingItem?.extraData?.firstNamePlaceholder || fallback.shippingStep.firstNamePlaceholder,
      lastNamePlaceholder: shippingItem?.extraData?.lastNamePlaceholder || fallback.shippingStep.lastNamePlaceholder,
      addressPlaceholder: shippingItem?.extraData?.addressPlaceholder || fallback.shippingStep.addressPlaceholder,
      cityPlaceholder: shippingItem?.extraData?.cityPlaceholder || fallback.shippingStep.cityPlaceholder,
      statePlaceholder: shippingItem?.extraData?.statePlaceholder || fallback.shippingStep.statePlaceholder,
      zipPlaceholder: shippingItem?.extraData?.zipPlaceholder || fallback.shippingStep.zipPlaceholder,
      continueButton: shippingItem?.extraData?.continueButtonText || fallback.shippingStep.continueButton,
      completedMessage: shippingItem?.extraData?.completedMessage || fallback.shippingStep.completedMessage
    },
    paymentStep: {
      step: paymentItem?.extraData?.step || fallback.paymentStep.step,
      title: paymentItem?.title || fallback.paymentStep.title,
      cardNumberPlaceholder: paymentItem?.extraData?.cardNumberPlaceholder || fallback.paymentStep.cardNumberPlaceholder,
      expiryPlaceholder: paymentItem?.extraData?.expiryPlaceholder || fallback.paymentStep.expiryPlaceholder,
      cvvPlaceholder: paymentItem?.extraData?.cvvPlaceholder || fallback.paymentStep.cvvPlaceholder,
      cardNamePlaceholder: paymentItem?.extraData?.cardNamePlaceholder || fallback.paymentStep.cardNamePlaceholder,
      placeOrderButton: paymentItem?.extraData?.placeOrderButtonText || fallback.paymentStep.placeOrderButton,
      completedMessage: paymentItem?.extraData?.completedMessage || fallback.paymentStep.completedMessage
    },
    cartSummary: {
      title: cartSummaryItem?.title || fallback.cartSummary.title,
      emptyCartMessage: cartSummaryItem?.extraData?.emptyCartMessage || fallback.cartSummary.emptyCartMessage,
      continueShopping: cartSummaryItem?.extraData?.continueShoppingText || fallback.cartSummary.continueShopping,
      promo: {
        title: cartSummaryItem?.extraData?.promo?.title || fallback.cartSummary.promo.title,
        description: cartSummaryItem?.extraData?.promo?.description || fallback.cartSummary.promo.description,
        placeholder: cartSummaryItem?.extraData?.promo?.placeholder || fallback.cartSummary.promo.placeholder,
        applyButton: cartSummaryItem?.extraData?.promo?.applyButtonText || fallback.cartSummary.promo.applyButton
      },
      subtotal: cartSummaryItem?.extraData?.subtotalLabel || fallback.cartSummary.subtotal,
      shipping: cartSummaryItem?.extraData?.shippingLabel || fallback.cartSummary.shipping,
      taxes: cartSummaryItem?.extraData?.taxesLabel || fallback.cartSummary.taxes,
      free: cartSummaryItem?.extraData?.freeLabel || fallback.cartSummary.free,
      total: cartSummaryItem?.extraData?.totalLabel || fallback.cartSummary.total,
      recurringNote: cartSummaryItem?.extraData?.recurringNote || fallback.cartSummary.recurringNote
    },
    validation: {
      emailRequired: validationItem?.extraData?.emailRequired || fallback.validation.emailRequired,
      invalidEmail: validationItem?.extraData?.invalidEmail || fallback.validation.invalidEmail,
      passwordRequired: validationItem?.extraData?.passwordRequired || fallback.validation.passwordRequired,
      passwordMinLength: validationItem?.extraData?.passwordMinLength || fallback.validation.passwordMinLength,
      passwordFormat: validationItem?.extraData?.passwordFormat || fallback.validation.passwordFormat,
      firstNameRequired: validationItem?.extraData?.firstNameRequired || fallback.validation.firstNameRequired,
      firstNameMinLength: validationItem?.extraData?.firstNameMinLength || fallback.validation.firstNameMinLength,
      lastNameRequired: validationItem?.extraData?.lastNameRequired || fallback.validation.lastNameRequired,
      lastNameMinLength: validationItem?.extraData?.lastNameMinLength || fallback.validation.lastNameMinLength,
      addressRequired: validationItem?.extraData?.addressRequired || fallback.validation.addressRequired,
      addressInvalid: validationItem?.extraData?.addressInvalid || fallback.validation.addressInvalid,
      cityRequired: validationItem?.extraData?.cityRequired || fallback.validation.cityRequired,
      stateRequired: validationItem?.extraData?.stateRequired || fallback.validation.stateRequired,
      stateInvalid: validationItem?.extraData?.stateInvalid || fallback.validation.stateInvalid,
      zipRequired: validationItem?.extraData?.zipRequired || fallback.validation.zipRequired,
      zipInvalid: validationItem?.extraData?.zipInvalid || fallback.validation.zipInvalid,
      cardNumberRequired: validationItem?.extraData?.cardNumberRequired || fallback.validation.cardNumberRequired,
      cardNumberInvalid: validationItem?.extraData?.cardNumberInvalid || fallback.validation.cardNumberInvalid,
      expiryRequired: validationItem?.extraData?.expiryRequired || fallback.validation.expiryRequired,
      expiryInvalid: validationItem?.extraData?.expiryInvalid || fallback.validation.expiryInvalid,
      cvvRequired: validationItem?.extraData?.cvvRequired || fallback.validation.cvvRequired,
      cvvInvalid: validationItem?.extraData?.cvvInvalid || fallback.validation.cvvInvalid,
      cardNameRequired: validationItem?.extraData?.cardNameRequired || fallback.validation.cardNameRequired,
      cardNameInvalid: validationItem?.extraData?.cardNameInvalid || fallback.validation.cardNameInvalid
    },
    alerts: {
      googleSignin: alertsItem?.extraData?.googleSignin || fallback.alerts.googleSignin,
      orderSuccess: alertsItem?.extraData?.orderSuccess || fallback.alerts.orderSuccess
    }
  }
})

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()

// Checkout form functions
const displayEmailForm = () => {
  const form = document.getElementById('emailSignupForm')
  if (form) {
    form.classList.remove('hide-element')
  }
}

// Validation helper functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  return password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
}

const validateCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s/g, '')
  return /^\d{13,19}$/.test(cleaned) && luhnCheck(cleaned)
}

const luhnCheck = (cardNumber) => {
  let sum = 0
  let isEven = false

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i])

    if (isEven) {
      digit *= 2
      if (digit > 9) digit -= 9
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

const validateExpiry = (expiry) => {
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
  if (!expiryRegex.test(expiry)) return false

  const [month, year] = expiry.split('/')
  const currentYear = new Date().getFullYear() % 100
  const currentMonth = new Date().getMonth() + 1

  const expYear = parseInt(year)
  const expMonth = parseInt(month)

  if (expYear < currentYear) return false
  if (expYear === currentYear && expMonth < currentMonth) return false

  return true
}

const validateCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv)
}

const validateZip = (zip) => {
  return /^\d{6}$/.test(zip)
}

const showError = (elementId, message) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')

    // Remove existing error message
    const existingError = element.parentNode.querySelector('.error-message')
    if (existingError) existingError.remove()

    // Add error message
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error-message text-danger small mt-1'
    errorDiv.textContent = message
    element.parentNode.appendChild(errorDiv)
  }
}

const clearError = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.classList.remove('is-invalid')
    element.classList.add('is-valid')

    const errorMessage = element.parentNode.querySelector('.error-message')
    if (errorMessage) errorMessage.remove()
  }
}

const clearAllErrors = () => {
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'))
  document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'))
  document.querySelectorAll('.error-message').forEach(el => el.remove())
}

const submitAccountInfo = () => {
  clearAllErrors()

  const email = document.getElementById('userEmailInput')?.value?.trim()
  const password = document.getElementById('userPasswordInput')?.value

  let isValid = true

  // Email validation
if (!email) {
  showError(
    'userEmailInput',
    checkout.value.validation.emailRequired
  )
  isValid = false
} else if(!validateEmail(email)) {
  showError(
    'userEmailInput',
    checkout.value.validation.invalidEmail
  )
  isValid = false
}

  // Password validation
  if (!password) {
    showError('userPasswordInput', checkout.value.validation.passwordRequired)
    isValid = false
  } else if (password.length < 8) {
    showError('userPasswordInput', checkout.value.validation.passwordMinLength)
    isValid = false
  } else if (!validatePassword(password)) {
    showError('userPasswordInput', checkout.value.validation.passwordFormat)
    isValid = false
  } else {
    clearError('userPasswordInput')
  }

  if (!isValid) return

  // Hide account step content and show completed state
  const accountContent = document.getElementById('accountStepContent')
  const accountCompleted = document.getElementById('accountStepCompleted')
  const shippingCard = document.getElementById('shippingStepCard')

  if (accountContent) accountContent.classList.add('hide-element')
  if (accountCompleted) accountCompleted.classList.remove('hide-element')

  // Enable shipping step
  if (shippingCard) {
    shippingCard.classList.remove('step-disabled')
    const shippingContent = document.getElementById('shippingStepContent')
    if (shippingContent) shippingContent.classList.remove('hide-element')
  }
}

const submitShippingInfo = () => {
  clearAllErrors()

  const firstName = document.getElementById('firstNameInput')?.value?.trim()
  const lastName = document.getElementById('lastNameInput')?.value?.trim()
  const address = document.getElementById('addressInput')?.value?.trim()
  const city = document.getElementById('cityInput')?.value?.trim()
  const state = document.getElementById('stateInput')?.value?.trim()
  const zip = document.getElementById('zipInput')?.value?.trim()

  let isValid = true

  // First Name validation
  if (!firstName) {
    showError('firstNameInput',checkout.value.validation.firstNameRequired)
    isValid = false
  } else if (firstName.length < 2) {
    showError('firstNameInput', checkout.value.validation.firstNameMinLength)
    isValid = false
  } else {
    clearError('firstNameInput')
  }

  // Last Name validation
  if (!lastName) {
    showError('lastNameInput', checkout.value.validation.lastNameRequired)
    isValid = false
  } else if (lastName.length < 2) {
    showError('lastNameInput', checkout.value.validation.lastNameMinLength)
    isValid = false
  } else {
    clearError('lastNameInput')
  }

  // Address validation
  if (!address) {
    showError('addressInput', checkout.value.validation.addressRequired)
    isValid = false
  } else if (address.length < 10) {
    showError('addressInput', checkout.value.validation.addressInvalid)
    isValid = false
  } else {
    clearError('addressInput')
  }

  // City validation
  if (!city) {
    showError('cityInput', checkout.value.validation.cityRequired)
    isValid = false
  } else {
    clearError('cityInput')
  }

  // State validation
  if (!state) {
    showError('stateInput', checkout.value.validation.stateRequired)
    isValid = false
  } else if (state.length < 2) {
    showError('stateInput', checkout.value.validation.stateInvalid)
    isValid = false
  } else {
    clearError('stateInput')
  }

  // ZIP validation
  if (!zip) {
    showError('zipInput', checkout.value.validation.zipRequired)
    isValid = false
  } else if (!validateZip(zip)) {
    showError('zipInput', checkout.value.validation.zipInvalid)
    isValid = false
  } else {
    clearError('zipInput')
  }

  if (!isValid) return

  // Hide shipping content and show completed state
  const shippingContent = document.getElementById('shippingStepContent')
  const shippingCompleted = document.getElementById('shippingStepCompleted')
  const paymentCard = document.getElementById('paymentStepCard')

  if (shippingContent) shippingContent.classList.add('hide-element')
  if (shippingCompleted) shippingCompleted.classList.remove('hide-element')

  // Enable payment step
  if (paymentCard) {
    paymentCard.classList.remove('step-disabled')
    const paymentContent = document.getElementById('paymentStepContent')
    if (paymentContent) paymentContent.classList.remove('hide-element')
  }
}

const submitPaymentInfo = () => {
  clearAllErrors()

  const cardNumber = document.getElementById('cardNumberInput')?.value?.trim()
  const expiry = document.getElementById('expiryInput')?.value?.trim()
  const cvv = document.getElementById('cvvInput')?.value?.trim()
  const cardName = document.getElementById('cardNameInput')?.value?.trim()

  let isValid = true

  // Card Number validation
  if (!cardNumber) {
    showError('cardNumberInput',checkout.value.validation.cardNumberRequired)
    isValid = false
  } else if (!validateCardNumber(cardNumber)) {
    showError('cardNumberInput', checkout.value.validation.cardNumberInvalid)
    isValid = false
  } else {
    clearError('cardNumberInput')
  }

  // Expiry validation
  if (!expiry) {
    showError('expiryInput', checkout.value.validation.expiryRequired)
    isValid = false
  } else if (!validateExpiry(expiry)) {
    showError('expiryInput', checkout.value.validation.expiryInvalid)
    isValid = false
  } else {
    clearError('expiryInput')
  }

  // CVV validation
  if (!cvv) {
    showError('cvvInput', checkout.value.validation.cvvRequired)
    isValid = false
  } else if (!validateCVV(cvv)) {
    showError('cvvInput', checkout.value.validation.cvvInvalid)
    isValid = false
  } else {
    clearError('cvvInput')
  }

  // Card Name validation
  if (!cardName) {
    showError('cardNameInput', checkout.value.validation.cardNameRequired)
    isValid = false
  } else if (cardName.length < 3) {
    showError('cardNameInput', checkout.value.validation.cardNameInvalid)
    isValid = false
  } else {
    clearError('cardNameInput')
  }

  if (!isValid) return

  // Simulate order placement
  alert('Order placed successfully!')
  // Redirect to order confirmation or home
  navigateTo('/order-confirmation')
}

const proceedWithGoogle = () => {
  alert('Google sign-in would open here')
}

// Real-time validation event listeners
const addValidationListeners = () => {
  // Email field validation
  const emailInput = document.getElementById('userEmailInput')
  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      const email = emailInput.value?.trim()
      if (email && !validateEmail(email)) {
        showError('userEmailInput', 'Please enter a valid email address')
      } else if (email) {
        clearError('userEmailInput')
      }
    })
  }

  // Password field validation
  const passwordInput = document.getElementById('userPasswordInput')
  if (passwordInput) {
    passwordInput.addEventListener('blur', () => {
      const password = passwordInput.value
      if (password && password.length < 8) {
        showError('userPasswordInput', 'Password must be at least 8 characters')
      } else if (password && !validatePassword(password)) {
        showError('userPasswordInput', 'Password must contain uppercase, lowercase, and number')
      } else if (password) {
        clearError('userPasswordInput')
      }
    })
  }

  // Card number formatting and validation
  const cardNumberInput = document.getElementById('cardNumberInput')
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\s/g, '')
      let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value
      e.target.value = formattedValue
    })

    cardNumberInput.addEventListener('blur', () => {
      const cardNumber = cardNumberInput.value?.trim()
      if (cardNumber && !validateCardNumber(cardNumber)) {
        showError('cardNumberInput', 'Please enter a valid card number')
      } else if (cardNumber) {
        clearError('cardNumberInput')
      }
    })
  }

  // Expiry date formatting and validation
  const expiryInput = document.getElementById('expiryInput')
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '')
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4)
      }
      e.target.value = value
    })

    expiryInput.addEventListener('blur', () => {
      const expiry = expiryInput.value?.trim()
      if (expiry && !validateExpiry(expiry)) {
        showError('expiryInput', 'Please enter a valid expiry date (MM/YY)')
      } else if (expiry) {
        clearError('expiryInput')
      }
    })
  }

  // CVV validation
  const cvvInput = document.getElementById('cvvInput')
  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4)
    })

    cvvInput.addEventListener('blur', () => {
      const cvv = cvvInput.value?.trim()
      if (cvv && !validateCVV(cvv)) {
        showError('cvvInput', 'Please enter a valid CVV')
      } else if (cvv) {
        clearError('cvvInput')
      }
    })
  }

  // ZIP code validation
  const zipInput = document.getElementById('zipInput')
  if (zipInput) {
    zipInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6)
    })

    zipInput.addEventListener('blur', () => {
      const zip = zipInput.value?.trim()
      if (zip && !validateZip(zip)) {
        showError('zipInput', 'Please enter a valid 6-digit ZIP code')
      } else if (zip) {
        clearError('zipInput')
      }
    })
  }
}

onMounted(async () => {
  await initializeCart()
  if (import.meta.client && window.localStorage) {
    await cartStore.loadCart()
  }

  // Expose functions to window for onclick handlers
  if (import.meta.client) {
    window.displayEmailForm = displayEmailForm
    window.submitAccountInfo = submitAccountInfo
    window.submitShippingInfo = submitShippingInfo
    window.submitPaymentInfo = submitPaymentInfo
    window.proceedWithGoogle = proceedWithGoogle

    // Add validation listeners after DOM is ready
    setTimeout(() => {
      addValidationListeners()
    }, 100)
  }
})

useHead({
  bodyAttrs: {
    class: 'checkout-page'
  }
})
</script>
