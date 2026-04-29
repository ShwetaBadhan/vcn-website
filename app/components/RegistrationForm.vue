<!-- components/RegistrationForm.vue -->
<template>
  <ClientOnly>
    <transition name="slide-right" appear>
      <div class="registration-container" v-if="mounted">
        <!-- Close Button -->
        <button class="close-btn" @click="$emit('close')">×</button>

        <!-- STEP 1: WELCOME SCREEN -->
        <div v-if="step === 'welcome'" class="step-content welcome-step">
          <h1 class="welcome-title">Welcome!</h1>
          <p class="welcome-text">
            Let's start your journey with Amway by getting you onboard.
          </p>
          <p class="requirements-text">
            You must be at least 18 years old and an Indian citizen to register with Amway India.
          </p>
          <button class="btn-register" @click="step = 'form'">
            REGISTER
          </button>
        </div>

        <!-- STEP 2: REGISTRATION FORM -->
        <div v-else-if="step === 'form'" class="step-content form-step">
          <h2 class="form-title">Let's get you started</h2>
          <p class="form-subtitle">
            Please complete all the mandatory steps below to finish your registration.
          </p>

          <form @submit.prevent="submitForm">
            <!-- First and Middle Name -->
            <div class="form-group">
              <label for="firstName">First and Middle Name <span class="required">*</span></label>
              <input type="text" id="firstName" v-model="form.firstName" placeholder="As per ID proof"
                class="form-input" />
              <span v-if="errors.firstName" class="error">{{ errors.firstName }}</span>
            </div>

            <!-- Email Address -->
            <div class="form-group">
              <label for="email">Email Address <span class="required">*</span></label>
              <input type="email" id="email" v-model="form.email" placeholder="example@mail.com" class="form-input" />
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>

            <!-- Mobile Number -->
            <div class="form-group">
              <label for="mobile">Mobile Number <span class="required">*</span></label>
              <div class="mobile-wrap">
                <span class="code">+91</span>
                <input type="tel" id="mobile" v-model="form.mobile" placeholder="XXXXXXXXXX" class="form-input"
                  maxlength="10" @blur="handleMobileBlur" />
              </div>
              <span class="hint">Mobile Number will be used as your login ID</span>
              <span v-if="errors.mobile" class="error">{{ errors.mobile }}</span>
            </div>

            <!-- Create Password -->
            <div class="form-group">
              <label for="password">Create password <span class="required">*</span></label>
              <div class="pwd-wrap">
                <input :type="showPwd ? 'text' : 'password'" id="password" v-model="form.password"
                  placeholder="Example - My@password1" class="form-input" />
                <button type="button" class="toggle-pwd" @click="showPwd = !showPwd">
                  {{ showPwd ? '🙈' : '👁️' }}
                </button>
              </div>
              <span class="hint">Example - My@password1</span>
              <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>

            <!-- Know an ABO? -->
            <div class="form-group">
              <label class="abo-label">
                Do you know an Amway Business Owner (ABO)? <span class="required">*</span>
                <span class="info-icon" title="Amway Business Owner">ⓘ</span>
              </label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" value="yes" v-model="form.knowABO" @change="handleABOChange" />
                  <span>Yes</span>
                </label>
                <label class="radio-label">
                  <input type="radio" value="no" v-model="form.knowABO" @change="handleABOChange" />
                  <span>No</span>
                </label>
              </div>
              <span v-if="errors.knowABO" class="error">{{ errors.knowABO }}</span>
            </div>

            <!-- ABO Number Field (Show if YES) -->
            <transition name="slide-down">
              <div v-if="form.knowABO === 'yes'" class="form-group conditional-field">
                <label for="aboNumber">ABO Number <span class="required">*</span></label>
                <input type="text" id="aboNumber" v-model="form.aboNumber" placeholder="Enter ABO Number"
                  class="form-input" />
                <span v-if="errors.aboNumber" class="error">{{ errors.aboNumber }}</span>
              </div>
            </transition>

            <!-- Pincode Field (Show if NO) -->
            <transition name="slide-down">
              <div v-if="form.knowABO === 'no'" class="form-group conditional-field">
                <label for="pincode">Please enter Pincode <span class="required">*</span></label>
                <div class="pincode-wrap">
                  <input type="text" id="pincode" v-model="form.pincode" placeholder="Enter Pincode" class="form-input"
                    maxlength="6" />
                  <button type="button" class="verify-btn" @click="verifyPincode">
                    Verify
                  </button>
                </div>
                <div v-if="pincodeVerified" class="location-success">
                  ✓ {{ locationText }}
                </div>
                <span v-if="errors.pincode" class="error">{{ errors.pincode }}</span>
              </div>
            </transition>

            <!-- OTP Section -->
            <div v-if="otpSent" class="form-group otp-section">
              <label class="otp-label">
                <strong>Mobile verification</strong>
              </label>
              <p class="otp-text">
                Amway verification number sent to +91 {{ form.mobile }}
              </p>

              <div class="otp-inputs">
                <input v-for="(digit, index) in 6" :key="index" type="text" maxlength="1" v-model="otp[index]"
                  @input="(e) => handleOtpInput(e, index)" @keydown.backspace="(e) => handleBackspace(e, index)"
                  @keydown="(e) => handleKeydown(e, index)" class="otp-box" :ref="(el) => setOtpRef(el, index)" />
              </div>

              <span v-if="otpError" class="error otp-error">{{ otpError }}</span>

              <div class="resend-section">
                <span v-if="!canResend" class="resend-timer">
                  Resend code in {{ countdown }}s
                </span>
                <button v-else type="button" class="resend-link" @click="resendOTP">
                  Resend Code
                </button>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'SUBMITTING...' : 'SUBMIT' }}
            </button>
          </form>
        </div>

        <!-- STEP 3: SUCCESS SCREEN -->
        <div v-else-if="step === 'success'" class="step-content success-step">
          <div class="success-icon">✓</div>
          <h2 class="success-title">Registration Successful! 🎉</h2>
          <p class="success-text">
            Welcome to Amway! Your registration has been completed successfully.
          </p>
          <button class="btn-continue" @click="$emit('complete', form)">
            CONTINUE TO SHOPPING
          </button>
        </div>
      </div>
    </transition>
  </ClientOnly>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close', 'complete'])

// State
const mounted = ref(false)
const step = ref('welcome')
const showPwd = ref(false)
const isSubmitting = ref(false)
const otpSent = ref(false)
const otp = ref(['', '', '', '', '', ''])
const otpRefs = ref([])
const otpError = ref('')
const canResend = ref(false)
const countdown = ref(30)
const pincodeVerified = ref(false)
const locationText = ref('')
let countdownInterval = null

// Form Data
const form = reactive({
  firstName: '',
  email: '',
  mobile: '',
  password: '',
  knowABO: '',
  aboNumber: '',
  pincode: ''
})

const errors = reactive({})

// Nuxt: Ensure component mounts on client
onMounted(() => {
  mounted.value = true
})

// Set OTP ref helper (Nuxt compatible)
const setOtpRef = (el, index) => {
  if (el) {
    otpRefs.value[index] = el
  }
}

// Handle Mobile Blur
const handleMobileBlur = () => {
  const mobileRegex = /^[6-9]\d{9}$/
  if (mobileRegex.test(form.mobile) && !otpSent.value) {
    sendOTP()
  }
}

// Send OTP
const sendOTP = () => {
  console.log('📱 OTP sent to:', form.mobile)
  otpSent.value = true
  startCountdown()

  setTimeout(() => {
    if (otpRefs.value[0]) {
      otpRefs.value[0].focus()
    }
  }, 300)
}

// Handle ABO Change
const handleABOChange = () => {
  errors.knowABO = ''
  if (form.knowABO === 'yes') {
    form.pincode = ''
    pincodeVerified.value = false
  } else {
    form.aboNumber = ''
  }
}

// Verify Pincode
const verifyPincode = () => {
  if (!form.pincode || form.pincode.length !== 6) {
    errors.pincode = 'Please enter valid 6-digit pincode'
    pincodeVerified.value = false
    return
  }

  const demoLocations = {
    '144020': 'JALANDHAR, Punjab',
    '144001': 'JALANDHAR CITY, Punjab',
    '110001': 'NEW DELHI, Delhi',
    '400001': 'MUMBAI, Maharashtra',
    '560001': 'BANGALORE, Karnataka'
  }

  setTimeout(() => {
    const location = demoLocations[form.pincode] || 'Sample City, State'
    locationText.value = location
    pincodeVerified.value = true
    errors.pincode = ''
  }, 500)
}

// OTP Handlers
const handleOtpInput = (event, index) => {
  const value = event.target.value

  if (!/^\d*$/.test(value)) {
    otp.value[index] = ''
    return
  }

  otp.value[index] = value
  otpError.value = ''

  if (value && index < 5) {
    if (otpRefs.value[index + 1]) {
      otpRefs.value[index + 1].focus()
    }
  }
}

const handleBackspace = (event, index) => {
  if (!otp.value[index] && index > 0) {
    if (otpRefs.value[index - 1]) {
      otpRefs.value[index - 1].focus()
    }
  }
}

const handleKeydown = (event, index) => {
  if (event.key === 'ArrowLeft' && index > 0) {
    if (otpRefs.value[index - 1]) {
      otpRefs.value[index - 1].focus()
    }
  } else if (event.key === 'ArrowRight' && index < 5) {
    if (otpRefs.value[index + 1]) {
      otpRefs.value[index + 1].focus()
    }
  }
}

const resendOTP = () => {
  console.log('🔄 Resending OTP to:', form.mobile)
  otp.value = ['', '', '', '', '', '']
  otpError.value = ''
  startCountdown()

  setTimeout(() => {
    if (otpRefs.value[0]) {
      otpRefs.value[0].focus()
    }
  }, 100)
}

const startCountdown = () => {
  canResend.value = false
  countdown.value = 30

  if (countdownInterval) clearInterval(countdownInterval)

  countdownInterval = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      canResend.value = true
      clearInterval(countdownInterval)
    }
  }, 1000)
}

// Validation
const validateForm = () => {
  let isValid = true
  Object.keys(errors).forEach(key => errors[key] = '')

  if (!form.firstName.trim()) {
    errors.firstName = 'First and Middle Name is required'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim() || !emailRegex.test(form.email)) {
    errors.email = 'Please enter valid email address'
    isValid = false
  }

  const mobileRegex = /^[6-9]\d{9}$/
  if (!mobileRegex.test(form.mobile)) {
    errors.mobile = 'Please enter valid 10-digit mobile number'
    isValid = false
  }

  if (!form.password || form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
    isValid = false
  }

  if (!form.knowABO) {
    errors.knowABO = 'Please select an option'
    isValid = false
  }

  if (form.knowABO === 'yes' && !form.aboNumber.trim()) {
    errors.aboNumber = 'ABO Number is required'
    isValid = false
  }

  if (form.knowABO === 'no') {
    if (!form.pincode || form.pincode.length !== 6) {
      errors.pincode = 'Please enter valid 6-digit pincode'
      isValid = false
    } else if (!pincodeVerified.value) {
      errors.pincode = 'Please verify your pincode'
      isValid = false
    }
  }

  const otpValue = otp.value.join('')
  if (!otpSent.value) {
    errors.mobile = 'Please enter mobile number to receive OTP'
    isValid = false
  } else if (otpValue.length !== 6) {
    otpError.value = 'Please enter complete 6-digit OTP'
    isValid = false
  } else if (otpValue !== '123456') {
    otpError.value = 'Invalid OTP. Please use 123456 for demo.'
    isValid = false
  }

  return isValid
}

// Form Submit
const submitForm = () => {
  if (!validateForm()) {
    const firstError = document.querySelector('.error')
    firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return
  }

  isSubmitting.value = true

  setTimeout(() => {
    console.log('✅ Registration Complete:', { ...form, otp: otp.value.join('') })
    step.value = 'success'
    isSubmitting.value = false
  }, 1500)
}

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>

<style scoped>
.registration-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10000 !important;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vcn-primary);
  z-index: 10;
}

.close-btn:hover {
  color: var(--vcn-primary);
}

.step-content {
  padding: 60px 25px 30px;
}

/* WELCOME STEP */
.welcome-step {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
}

.welcome-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--vcn-primary);
  margin-bottom: 20px;
}

.welcome-text {
  font-size: 18px;
  color: var(--vcn-primary);
  margin-bottom: 30px;
  line-height: 1.6;
}

.requirements-text {
  font-size: 15px;
  color: var(--vcn-primary);
  margin-bottom: 50px;
  line-height: 1.6;
  max-width: 400px;
}

.btn-register {
  padding: 16px 80px;
  border: 2px solid var(--vcn-primary);
  background: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--vcn-primary);
}

.btn-register:hover {
  background: var(--vcn-primary);
  color: white;
}

/* FORM STEP */
.form-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vcn-primary);
  margin-bottom: 10px;
}

.form-subtitle {
  font-size: 14px;
  color: var(--vcn-primary);
  margin-bottom: 30px;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 24px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--vcn-primary);
  font-size: 14px;
  font-weight: 500;
}

.required {
  color: #e74c3c;
}

.info-icon {
  color: #999;
  cursor: help;
  margin-left: 4px;
  font-size: 13px;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: var(--vcn-primary);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.hint {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}

.error {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #e74c3c;
}

/* Mobile Input */
.mobile-wrap {
  display: flex;
}

.mobile-wrap .code {
  padding: 14px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-right: none;
  border-radius: 8px 0 0 8px;
  font-size: 15px;
  color: var(--vcn-primary);
}

.mobile-wrap .form-input {
  border-radius: 0 8px 8px 0;
  flex: 1;
}

/* Password */
.pwd-wrap {
  position: relative;
}

.toggle-pwd {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

/* Radio Group */
.radio-group {
  display: flex;
  gap: 24px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 15px;
  color: var(--vcn-primary);
}

.radio-label input[type="radio"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* Conditional Fields */
.conditional-field {
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Pincode */
.pincode-wrap {
  display: flex;
  gap: 10px;
}

.pincode-wrap .form-input {
  flex: 1;
}

.verify-btn {
  padding: 14px 20px;
  background: #45663c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.verify-btn:hover {
  background: #45663c;
}

.location-success {
  margin-top: 8px;
  color: #27ae60;
  font-size: 13px;
  font-weight: 500;
}

/* OTP Section */
.otp-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #eee;
}

.otp-label {
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
}

.otp-text {
  font-size: 13px;
  color: var(--vcn-primary);
  margin-bottom: 15px;
}

.otp-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.otp-box {
  width: 45px;
  height: 55px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
}

.otp-box:focus {
  outline: none;
  border-color: var(--vcn-primary);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.otp-error {
  text-align: center;
  display: block;
  margin-bottom: 10px;
}

.resend-section {
  text-align: center;
}

.resend-timer {
  font-size: 13px;
  color: var(--vcn-primary);
}

.resend-link {
  background: none;
  border: none;
  color: var(--vcn-primary);
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;
}

.resend-link:hover {
  color: #0056b3;
}

/* Submit Button */
.btn-submit {
  width: 100%;
  padding: 16px;
  background: var(--vcn-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.btn-submit:hover:not(:disabled) {
  background: var(--vcn-primary);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* SUCCESS STEP */
.success-step {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #27ae60;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
}

.success-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vcn-primary);
  margin-bottom: 15px;
}

.success-text {
  font-size: 16px;
  color: var(--vcn-primary);
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 350px;
}

.btn-continue {
  padding: 16px 60px;
  background: var(--vcn-primary);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-continue:hover {
  background: var(--vcn-primary);
}

/* Slide Animation */
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
  .registration-container {
    max-width: 100%;
  }

  .welcome-title {
    font-size: 28px;
  }

  .welcome-text {
    font-size: 16px;
  }

  .btn-register {
    padding: 14px 60px;
    font-size: 15px;
  }

  .otp-box {
    width: 40px;
    height: 50px;
    font-size: 18px;
  }

  .pincode-wrap {
    flex-direction: column;
  }

  .verify-btn {
    width: 100%;
  }
}
</style>