<template>
  <!-- Navbar -->
  <header>
    <nav class="navbar" id="navbar">
      <div class="container-fluid">
        <!-- Mobile Layout -->
        <a class="navbar-brand d-lg-none" href="#">
          <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
        </a>

        <!-- HTML -->
        <div class="d-lg-none d-flex align-items-center">
          <a href="#" class="mobile-cart">Cart</a>
          <div class="nav-tog">
 <button
            class="custom-navbar-toggler"
            type="button"
            onclick="toggleMenu()"
            aria-label="Toggle menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          </div>
         
        </div>

        <!-- Desktop Layout -->
        <div class="nav-left-wrapper d-none d-lg-flex">
          <a class="navbar-brand" href="/">
            <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
          </a>

          <ul class="desktop-nav">
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">Shop</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-SPA FACE SCRUB
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-SPA FACE CLEANSER
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-SPA MASSAGE CREAM
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-SPA FACE PACK
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    KLESTRO PREMIUM
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    ALPHACARE(SHILAJIT RESIN)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    ALPHACARE BOOSTER
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-VEDA THICK & GROW HAIR <br />
                    TONIC
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-VEDA URICARE
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/product-details">
                    <img src="/img/products/img1.png" alt="Product" />
                    V-VEDA RELIEFAURA
                  </a>
                </li>
                <li class="dropdown-footer">
                  <a href="/all-products">Shop All Products →</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">Science</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/approach">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487791/library/nav/science/approach.png"
                      alt="Approach"
                    />
                    <strong>Approach<br />Micro</strong>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/vcn-labs">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487782/library/nav/science/seedlabs.png"
                      alt="Seed Labs"
                    />
                    <strong>Seed Labs</strong>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/approach#scientists">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487801/library/nav/science/scientists.png"
                      alt="Seed Labs"
                    />
                    <strong>Scientists</strong>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/sustainability">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487761/library/nav/science/sustainability.png"
                      alt="Seed Labs"
                    />
                    <strong>Sustainability</strong>
                  </a>
                </li>
                <li>
                  <a href="" class="dropdown-item"
                    ><strong>References</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>DS-01® Daily Synbiotic</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>DM-02™ Daily Multivitamin</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>AM-02™ Energy + Focus</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>PM-02™ Sleep + Restore</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>PDS-08® Pediatric Synbiotic</strong></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="dropdown-item"
                    ><strong>VS-01™ Vaginal Synbiotic</strong></a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">Learn</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/microbiome">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487912/library/nav/learn/microbiome.png"
                      alt="Research"
                    />
                    Microbiome
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img
                      src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487978/library/nav/learn/probiotics.png"
                      alt="Research"
                    />
                    Probiotics
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
          <div class="nav-right-wrapper d-none d-lg-flex align-items-center">
            <a href="#" class="login-link" @click.prevent="openForm">Login</a>
            <a href="/cart" class="navbar-btn">Cart</a>

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
                      <input
                        type="tel"
                        id="mobile"
                        v-model="formData.mobile"
                        placeholder="+91"
                        class="form-input"
                      />
                    </div>

                    <div class="form-group">
                      <label for="password">Password</label>
                      <div class="password-wrapper">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          id="password"
                          v-model="formData.password"
                          placeholder="Password"
                          class="form-input"
                        />
                        <button
                          type="button"
                          class="toggle-password"
                          @click="showPassword = !showPassword"
                        >
                          {{ showPassword ? "🙈" : "👁️" }}
                        </button>
                      </div>
                    </div>

                    <a href="#" class="forgot-password">Forgot Password</a>

                    <button type="submit" class="signin-btn">SIGN IN</button>

                    <div class="social-login">
                      <p>Sign in with</p>
                      <div class="social-icons">
                        <button type="button" class="social-btn google">
                          <img src="/img/icons/login_google.svg" alt="Google" />
                        </button>
                        <button type="button" class="social-btn facebook">
                          <img
                            src="/img/icons/login_facebook.svg"
                            alt="Facebook"
                          />
                        </button>
                      </div>
                    </div>

                    <div class="register-section">
                      <h3>Register <span class="info-icon">ⓘ</span></h3>
                      <!-- NEW CODE (paste karo): -->
                      <button
                        type="button"
                        class="register-btn"
                        @click="openRegistration('preferred-customer')"
                      >
                        PREFERRED CUSTOMER
                      </button>
                      <button
                        type="button"
                        class="register-btn"
                        @click="openRegistration('abo')"
                      >
                        VCN BUSINESS OWNER
                      </button>
                    </div>

                    <div class="footer-links">
                      <a href="#" @click="showRegistration = true"
                        >Terms & Conditions</a
                      >
                      <a href="#">Privacy</a>
                    </div>
                  </form>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Full Screen Menu -->
        <div class="navbar-collapse" id="navbarContent">
          <!-- <div class="mobile-menu-header">
              <img src="/img/logo/logo.png" alt="Logo" class="mobile-logo" />
              <button class="close-menu" onclick="toggleMenu()">×</button>
            </div> -->

          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onclick="toggleAccordion(event, 'shopAccordion')"
                >Shop</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onclick="toggleAccordion(event, 'scienceAccordion')"
                >Science</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onclick="toggleAccordion(event, 'learnAccordion')"
                >Learn</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login">Login</a>
            </li>
          </ul>

          <!-- Shop Accordion -->
          <div class="dropdown-content" id="shopAccordion" show>
            <div class="dropdown-menu-mobile">
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487644/library/nav/shop/DS01.png"
                  alt="Product"
                />
                DS-01® Daily Synbiotic
              </a>
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755803988/library/nav/shop/DM02.png"
                  alt="Product"
                />
                DM-02™ Daily Multivitamin
              </a>
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804034/library/nav/shop/DED.png"
                  alt="Product"
                />
                Daily Essentials Duo
              </a>

              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804048/library/nav/shop/AM02.png"
                  alt="Product"
                />
                AM-02™
              </a>
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804062/library/nav/shop/PM02.png"
                  alt="Product"
                />
                PM-02™
              </a>
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487661/library/nav/shop/PDS08.png"
                  alt="Product"
                />
                PDS-08™
              </a>
              <a class="dropdown-item" href="/product-details">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487654/library/nav/shop/VS01.png"
                  alt="Product"
                />
                VS-01™
              </a>
              <div class="dropdown-footer">
                <a href="/all-products">Shop All Products →</a>
              </div>
            </div>
          </div>

          <!-- Science Accordion -->
          <div class="dropdown-content" id="scienceAccordion">
            <div class="dropdown-menu-mobile">
              <a class="dropdown-item" href="/approach">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487791/library/nav/science/approach.png"
                  alt="Approach"
                />
                <strong>Approach<br />Micro</strong>
              </a>
              <a class="dropdown-item" href="/vcn-labs">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487782/library/nav/science/seedlabs.png"
                  alt="Seed Labs"
                />
                <strong>Seed Labs</strong>
              </a>
              <a class="dropdown-item" href="/approach#scientists">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487801/library/nav/science/scientists.png"
                  alt="Seed Labs"
                />
                <strong>Scientists</strong>
              </a>
              <a class="dropdown-item" href="sustainability">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487761/library/nav/science/sustainability.png"
                  alt="Seed Labs"
                />
                <strong>Sustainability</strong>
              </a>
            </div>
          </div>

          <!-- Learn Accordion -->
          <div class="dropdown-content" id="learnAccordion">
            <div class="dropdown-menu-mobile">
              <a class="dropdown-item" href="/microbiome">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487912/library/nav/learn/microbiome.png"
                  alt="Research"
                />
                Microbiome
              </a>
              <a class="dropdown-item" href="#">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487978/library/nav/learn/probiotics.png"
                  alt="Research"
                />
                Probiotics
              </a>
            </div>
          </div>
        </div>
    
    </nav>
  </header>
  <!-- Registration Modal (Teleport to body for proper stacking) -->
  <!-- Navbar template ke end mein -->
  <teleport to="body">
    <!-- Overlay -->
    <div
      v-if="showRegistration"
      class="registration-overlay"
      @click="showRegistration = false"
    ></div>

    <RegistrationForm
      v-if="showRegistration"
      :userType="selectedUserType"
      @close="showRegistration = false"
      @complete="handleRegistrationComplete"
    />
  </teleport>
</template>

<script setup>
import { ref, reactive } from "vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
const isOpen = ref(false);
const showPassword = ref(false);
const formData = reactive({
  mobile: "",
  password: "",
});

const openForm = () => {
  isOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeForm = () => {
  isOpen.value = false;
  document.body.style.overflow = "auto";
  // Reset form
  formData.mobile = "";
  formData.password = "";
};

const handleLogin = () => {
  console.log("Login:", formData);
  // Add your login logic here
};

const showRegistration = ref(false);
const selectedUserType = ref("preferred-customer");

const openRegistration = (type) => {
  selectedUserType.value = type;
  showRegistration.value = true;
};

const handleRegistrationComplete = (data) => {
  console.log("✅ Registered:", data);
  showRegistration.value = false;
  // Optional: Redirect ya toast show karo
};
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Slide Form Container */
.slide-form-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  overflow-y: auto;
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
  color: #45663c;
  z-index: 1000;
}

.close-btn:hover {
  color: #45663c;
}

/* Form Content */
.form-content {
  padding: 80px 30px 30px;
}

.form-content h2 {
  margin-bottom: 30px;
  color: #45663c;
  font-size: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #45663c;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #45663c;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #45663c;
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
  color: #45663c;
  text-decoration: none;
  font-size: 14px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.signin-btn {
  width: 100%;
  padding: 14px;
  background-color: #45663c;
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
  background-color: #45663c;
}

.social-login {
  text-align: center;
  margin-bottom: 25px;
}

.social-login p {
  margin-bottom: 10px;
  color: #45663c;
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
  border: 1px solid #45663c;
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
  color: #45663c;
  font-size: 20px;
}

.info-icon {
  font-size: 14px;
  color: #45663c;
}

.register-btn {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid #45663c;
  background: white;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  color: #45663c;
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

/* Responsive */
@media (max-width: 480px) {
  .slide-form-container {
    max-width: 100%;
  }
}
</style>
