<template>
  <!-- Navbar -->
  <header>
    <nav class="navbar" :class="{ 'scrolled': isHydrated && isScrolled }" id="navbar">
      <div class="container-fluid">
        <!-- Mobile Layout -->
        <NuxtLink class="navbar-brand d-lg-none" to="/">
          <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
        </NuxtLink>

        <!-- HTML -->
        <div class="d-lg-none d-flex align-items-center">
          <NuxtLink to="/cart" class="mobile-cart">
            Cart
            <ClientOnly>
              <span v-if="cartStore.cartCount > 0" class="cart-count-badge">{{ cartStore.cartCount }}</span>
            </ClientOnly>
          </NuxtLink>
          <button class="custom-navbar-toggler" type="button" onclick="toggleMenu()" aria-label="Toggle menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>

        <!-- Desktop Layout -->
        <div class="nav-left-wrapper d-none d-lg-flex">
          <NuxtLink class="navbar-brand" to="/">
            <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
          </NuxtLink>

          <ul class="desktop-nav">
            <li class="nav-item dropdown">
              <NuxtLink class="nav-link" to="/all-products">Shop</NuxtLink>
              <ul class="dropdown-menu">
                <!-- Scrollable product list -->
                <li class="dropdown-products-scroll">
                  <ul class="dropdown-products-list">
                    <li v-for="product in shopProducts" :key="product.id">
                      <NuxtLink class="dropdown-item" :to="`/product-details/${product.slug}`">
                        <img :src="productStore.getPrimaryImage(product)" :alt="product.name" />
                        {{ product.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <!-- Fixed footer pinned at bottom -->
                <li class="dropdown-footer">
                  <NuxtLink to="/all-products">Shop All Products →</NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <NuxtLink class="nav-link" to="#">Science</NuxtLink>
              <ul class="dropdown-menu">
                <li>
                  <NuxtLink class="dropdown-item" to="/all-products">
                    <img src="/img/drop-down/abput us.png" alt="Approach" />
                    <strong>V-GANO</strong>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/all-products">
                    <img src="/img/image/vcnlabs.png" alt="VCN Labs" />
                    <strong>V-VEDA</strong>
                  </NuxtLink>
                </li>
                <!-- <li>
                  <a class="dropdown-item" href="/approach#scientists">
                    <img
                      src=""
                      alt="VCN Labs" />
                    <strong>Scientists</strong>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/sustainability">
                    <img
                      src=""
                      alt="VCN Labs" />
                    <strong>Sustainability</strong>
                  </a>
                </li> -->
                <!-- <li>
                  <a href="" class="dropdown-item"><strong>References</strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"><strong></strong></a>
                </li> -->
              </ul>
            </li>
            <li class="nav-item dropdown">
              <NuxtLink class="nav-link" to="/about-us">About Us</NuxtLink>
              <ul class="dropdown-menu">
                <li>
                  <NuxtLink class="dropdown-item" to="/vcn-R-D">
                    <img src="/img/drop-down/blog.png" alt="Research" />
                    R & D
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/contact-us">
                    <img src="/img/drop-down/sustainability.png" alt="Research" />
                    Contact Us
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="nav-right-wrapper d-none d-lg-flex align-items-center">
          <NuxtLink to="#" class="login-link" @click.prevent="openForm">Login</NuxtLink>
          <NuxtLink to="/cart" class="navbar-btn">
            Cart
            <ClientOnly>
              <span v-if="cartStore.cartCount > 0" class="cart-count-badge">{{ cartStore.cartCount }}</span>
            </ClientOnly>
          </NuxtLink>

        </div>

        <!-- Sign In Modal (Teleport to body for proper stacking) -->
        <teleport to="body">
          <!-- Overlay -->
          <transition name="fade">
            <div v-if="isOpen" class="overlay" @click="closeForm"></div>
          </transition>

          <!-- Slide In Form -->
          <transition name="slide-right">
            <div v-if="isOpen" class="slide-form-container">
              <button class="close-btn" @click="closeForm">&times;</button>

              <div class="form-content">
                <h2>Sign In</h2>

                <form @submit.prevent="handleLogin">
                  <div class="form-group">
                    <label for="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" v-model="formData.mobile" placeholder="+91" class="form-input">
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <div class="password-wrapper">
                      <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                        placeholder="Password" class="form-input">
                      <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                        {{ showPassword ? '🙈' : '👁️' }}
                      </button>
                    </div>
                  </div>

                  <NuxtLink to="#" class="forgot-password">Forgot Password</NuxtLink>

                  <button type="submit" class="signin-btn">SIGN IN</button>

                  <div class="social-login">
                    <p>Sign in with</p>
                    <div class="social-icons">
                      <button type="button" class="social-btn google">
                        <img src="/img/icons/login_google.svg" alt="Google">
                      </button>
                      <button type="button" class="social-btn facebook">
                        <img src="/img/icons/login_facebook.svg" alt="Facebook">
                      </button>
                    </div>
                  </div>

                  <div class="register-section">
                    <h3>Register <span class="info-icon">ⓘ</span></h3>
                    <button type="button" class="register-btn" @click="openRegistration('preferred-customer')">
                      PREFERRED CUSTOMER
                    </button>
                    <button type="button" class="register-btn" @click="openRegistration('abo')">
                      VCN BUSINESS OWNER
                    </button>
                  </div>

                  <div class="footer-links">
                    <NuxtLink to="/terms-conditions" @click="showRegistration = true">Terms & Conditions</NuxtLink>
                    <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
                  </div>
                </form>
              </div>
            </div>
          </transition>
        </teleport>



        <!-- Mobile Full Screen Menu -->
        <div class="navbar-collapse" id="navbarContent">
          <!-- <div class="mobile-menu-header">
              <img src="/img/logo/logo.png" alt="Logo" class="mobile-logo" />
              <button class="close-menu" onclick="toggleMenu()">×</button>
            </div> -->

          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#" onclick="toggleAccordion(event, 'shopAccordion')">Shop</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#" onclick="toggleAccordion(event, 'scienceAccordion')">Science</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#" onclick="toggleAccordion(event, 'learnAccordion')">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="login">Login</NuxtLink>
            </li>
          </ul>

          <!-- Shop Accordion -->
          <div class="dropdown-content" id="shopAccordion" show>
            <div class="dropdown-menu-mobile">
              <!-- Scrollable product list -->
              <div class="mobile-products-scroll">
                <NuxtLink v-for="product in shopProducts" :key="product.id" class="dropdown-item"
                  :to="`/product-details/${product.slug}`">
                  <img :src="productStore.getPrimaryImage(product)" :alt="product.name" />
                  {{ product.name }}
                </NuxtLink>
              </div>
              <!-- Fixed footer pinned at bottom -->
              <div class="dropdown-footer">
                <NuxtLink to="/all-products">Shop All Products →</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Science Accordion -->
          <div class="dropdown-content" id="scienceAccordion">
            <div class="dropdown-menu-mobile">

              <NuxtLink class="dropdown-item" to="/our-leadership">
                <img src="/img/drop-down/abput us.png" alt="VCN Labs" />
                <strong>V-Gano</strong>
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/book-consultancy">
                <img src="/img/image/vcnlabs.png" alt="VCN Labs" />
                <strong>V-Veda</strong>
              </NuxtLink>

            </div>
          </div>

          <!-- Learn Accordion -->
          <div class="dropdown-content" id="learnAccordion">
            <div class="dropdown-menu-mobile">
              <NuxtLink class="dropdown-item" to="/blog">
                <img src="/img/drop-down/blog.png" alt="Research" />
                Blogs
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/contact-us">
                <img src="/img/drop-down/sustainability.png" alt="Research" />
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- Registration Modal (Teleport to body for proper stacking) -->
  <!-- Navbar template ke end mein -->
  <teleport to="body">
    <!-- Overlay -->
    <div v-if="showRegistration" class="registration-overlay" @click="showRegistration = false"></div>

    <RegistrationForm v-if="showRegistration" :userType="selectedUserType" @close="showRegistration = false"
      @complete="handleRegistrationComplete" />
  </teleport>
</template>


<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { useApi } from '~/config/api/useApi'
import { useProductStore } from '~/stores/product'


//product store
const productStore = useProductStore()

// Cart store - proper Nuxt/Pinia pattern
const cartStore = useCartStore()
const { getFromEndpoint } = useApi()

// Auth cart composable
const { authState, initializeCart } = useAuthCart()

// Initialize cart data on mount
onMounted(() => {
  // Initialize cart based on auth state (non-blocking)
  initializeCart()

  // Load cart data from appropriate source
  if (process.client && window.localStorage) {
    cartStore.loadCart()
  }

  // Fetch products for shop dropdown (non-blocking)
  fetchShopProducts()
})

// Registration form state
const isOpen = ref(false)
const showPassword = ref(false)
const formData = reactive({
  mobile: '',
  password: ''
})

const openForm = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeForm = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  // Reset form
  formData.mobile = ''
  formData.password = ''
}

const handleLogin = () => {
  console.log('Login:', formData)
  // Add your login logic here
}

const showRegistration = ref(false)
const selectedUserType = ref('preferred-customer')

const openRegistration = (type) => {
  selectedUserType.value = type
  showRegistration.value = true
}

const handleRegistrationComplete = (data) => {
  console.log('✅ Registered:', data)
  showRegistration.value = false
  // Optional: Redirect ya toast show karo
}

// Shop dropdown products
const shopProducts = ref([])


// Fetch products for shop dropdown
const fetchShopProducts = async () => {
  try {
    const { data, error } = await getFromEndpoint('PRODUCTS')
    if (!error && data?.data) {
      // Get first 5 products
      shopProducts.value = data.data.slice(0, 5)
    }
  } catch (err) {
    console.error('Failed to fetch shop products:', err)
  }
}

// Initialize scrolled state to false for consistent SSR
const isScrolled = ref(false)
const isHydrated = ref(false)
let scrollHandler = null

// Handle scroll events only on client side
onMounted(() => {
  isHydrated.value = true

  // Single scroll handler for navbar only (TopHeader handles itself)
  scrollHandler = () => {
    isScrolled.value = window.scrollY > 50
  }

  scrollHandler() // Initial check
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

// Cleanup on unmount
onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
/* Registration form overlay fix */
:deep(.registration-container) {
  z-index: 10000 !important;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
}

/* Slide Form Container */
.slide-form-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  max-height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vcn-primary);
  z-index: 10000;
}

.close-btn:hover {
  color: var(--vcn-primary);
}

/* Form Content */
.form-content {
  padding: 80px 30px 30px;
}

.form-content h2 {
  margin-bottom: 30px;
  color: var(--vcn-primary);
  font-size: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--vcn-primary);
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--vcn-primary);
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: var(--vcn-primary);
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-bottom: 20px;
  color: var(--vcn-primary);
  text-decoration: none;
  font-size: 14px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.signin-btn {
  width: 100%;
  padding: 14px;
  background-color: var(--vcn-primary);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin-bottom: 25px;
}

.signin-btn:hover {
  background-color: var(--vcn-primary);
}

.social-login {
  text-align: center;
  margin-bottom: 25px;
}

.social-login p {
  margin-bottom: 10px;
  color: var(--vcn-primary);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid var(--vcn-primary);
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.social-btn:hover {
  transform: scale(1.1);
}

.register-section {
  margin-bottom: 25px;
}

.register-section h3 {
  margin-bottom: 15px;
  color: var(--vcn-primary);
  font-size: 20px;
}

.info-icon {
  font-size: 14px;
  color: var(--vcn-primary);
}

.register-btn {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid var(--vcn-primary);
  background: white;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--vcn-primary);
}

.register-btn:hover {
  background-color: #f5f5f5;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 12px;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* Cart Count Badge */
.cart-count-badge {
  background: var(--vcn-badge);
  color: var(--vcn-primary);
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: bold;
  margin-left: 5px;
  min-width: 18px;
  text-align: center;
  display: inline-block;
}

.mobile-cart {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
}

.navbar-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Responsive Styles for all devices */

/* Small laptops and landscape tablets (992px to 1200px) */
@media (max-width: 1200px) {
  .navbar {
    padding: 6px 20px !important;
  }
  .desktop-nav .nav-link {
    padding: 4px 12px !important;
    font-size: 15px;
  }
  .nav-left-wrapper {
    gap: 8px;
    padding: 4px 16px;
  }
  .nav-right-wrapper {
    gap: 10px;
    padding: 4px 8px;
  }
}

/* Mobile & Tablets (max-width: 991px) */
@media (max-width: 991px) {
  .navbar {
    padding: 15px 30px !important;
  }
  
  .navbar-collapse {
    max-height: calc(100vh - var(--top-header-height, 28px) - 80px) !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
  }
}

/* Portrait Tablets / Large Phones (max-width: 768px) */
@media (max-width: 768px) {
  .navbar {
    padding: 12px 20px !important;
  }
}

/* Phones (max-width: 576px) */
@media (max-width: 576px) {
  .navbar {
    padding: 10px 15px !important;
  }
  
  .slide-form-container {
    max-width: 100%;
  }
  
  .form-content {
    padding: 60px 20px 20px;
  }
}

/* Small Phones (max-width: 380px) */
@media (max-width: 380px) {
  .navbar {
    padding: 8px 10px !important;
  }
  
  .mobile-cart {
    font-size: 13px;
    gap: 3px;
  }
}
</style>