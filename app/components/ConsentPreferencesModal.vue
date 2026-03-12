<template>
  <!-- Consent Preferences Modal -->
  <div v-if="showConsentModal" class="vcn-consent-modal-overlay" @click.self="closeConsentModal">
    <div class="vcn-consent-modal">
      
      <!-- Modal Header -->
      <div class="vcn-consent-modal-header">
        <h3 class="vcn-consent-modal-title">
          <i class="bi bi-shield-lock me-2"></i>
          Your Privacy Choices as a Consumer
        </h3>
        <button class="vcn-modal-close" @click="closeConsentModal">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="vcn-consent-modal-body">
        
        <!-- Information Text -->
        <div class="vcn-consent-info mb-4">
          <p class="mb-3">
            This website uses cookies and other similar technologies (referred to as "cookies" below), including some with tracking functionality, to enhance user experience and to analyze performance and traffic on our website. Certain cookies and similar technologies may also share information about your use of our website with social media, advertising and/or analytics partners. Further information is available in our 
            <a href="#" class="vcn-link">Privacy Policy</a> and <a href="#" class="vcn-link">Cookie Policy</a>.
          </p>
          <p class="mb-3">
            This website honors Global Privacy Controls (GPCs), or opt-out preference signals. If your browser GPC is "on," we interpret it as a request for that browser to opt-out of sharing for third-party targeted advertising and to opt-out of "selling" of personal information. To opt-out of sharing for third-party targeted advertising and to opt-out of "selling" of personal information, you can adjust the toggles below.
          </p>
          <p class="mb-3">
            Note: If you opt-out of certain cookies, you may continue to see online (non-targeted) advertising from us on other websites and online services. In addition, because certain opt-outs rely on cookies, if you delete cookies from your browser, you may need to opt-out again.
          </p>
          <a href="#" class="vcn-link">More information</a>
        </div>

        <!-- Consent Preferences List -->
        <div class="vcn-consent-preferences">
          <h5 class="vcn-consent-section-title mb-3">Manage Consent Preferences</h5>
          
          <!-- Essential Cookies -->
          <div class="vcn-consent-item">
            <div class="vcn-consent-item-header" @click="toggleExpand('essential')">
              <div class="vcn-consent-item-title">
                <i class="bi bi-plus-lg vcn-expand-icon" :class="{ 'vcn-expanded': expandedItems.essential }"></i>
                Essential Cookies
              </div>
              <span class="vcn-always-active">Always Active</span>
            </div>
            <div v-if="expandedItems.essential" class="vcn-consent-item-description">
              These cookies are necessary for the website to function and cannot be switched off in our systems.
            </div>
          </div>

          <!-- Functional/Preference Cookies -->
          <div class="vcn-consent-item">
            <div class="vcn-consent-item-header" @click="toggleExpand('functional')">
              <div class="vcn-consent-item-title">
                <i class="bi bi-plus-lg vcn-expand-icon" :class="{ 'vcn-expanded': expandedItems.functional }"></i>
                Functional/Preference Cookies
              </div>
              <div class="form-check form-switch vcn-toggle-switch">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="vcn-functional-toggle"
                  v-model="consentPreferences.functional"
                >
              </div>
            </div>
            <div v-if="expandedItems.functional" class="vcn-consent-item-description">
              These cookies enable the website to provide enhanced functionality and personalization.
            </div>
          </div>

          <!-- Analytics/Performance Cookies -->
          <div class="vcn-consent-item">
            <div class="vcn-consent-item-header" @click="toggleExpand('analytics')">
              <div class="vcn-consent-item-title">
                <i class="bi bi-plus-lg vcn-expand-icon" :class="{ 'vcn-expanded': expandedItems.analytics }"></i>
                Analytics/Performance Cookies
              </div>
              <div class="form-check form-switch vcn-toggle-switch">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="vcn-analytics-toggle"
                  v-model="consentPreferences.analytics"
                >
              </div>
            </div>
            <div v-if="expandedItems.analytics" class="vcn-consent-item-description">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </div>
          </div>

          <!-- Social Media Cookies -->
          <div class="vcn-consent-item">
            <div class="vcn-consent-item-header" @click="toggleExpand('social')">
              <div class="vcn-consent-item-title">
                <i class="bi bi-plus-lg vcn-expand-icon" :class="{ 'vcn-expanded': expandedItems.social }"></i>
                Social Media Cookies
              </div>
              <div class="form-check form-switch vcn-toggle-switch">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="vcn-social-toggle"
                  v-model="consentPreferences.social"
                >
              </div>
            </div>
            <div v-if="expandedItems.social" class="vcn-consent-item-description">
              These cookies are set by social media services that we have added to the site to enable you to share our content with your friends and networks.
            </div>
          </div>

          <!-- Marketing Cookies -->
          <div class="vcn-consent-item">
            <div class="vcn-consent-item-header" @click="toggleExpand('marketing')">
              <div class="vcn-consent-item-title">
                <i class="bi bi-plus-lg vcn-expand-icon" :class="{ 'vcn-expanded': expandedItems.marketing }"></i>
                Marketing Cookies
              </div>
              <div class="form-check form-switch vcn-toggle-switch">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="vcn-marketing-toggle"
                  v-model="consentPreferences.marketing"
                >
              </div>
            </div>
            <div v-if="expandedItems.marketing" class="vcn-consent-item-description">
              These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="vcn-consent-modal-footer">
        <button class="vcn-stories-card-btn" @click="rejectAll">
          Reject All
        </button>
        <button class="view-more-btn" @click="confirmChoices">
          Confirm My Choices
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showConsentModal = ref(false)
const expandedItems = reactive({
  essential: false,
  functional: false,
  analytics: false,
  social: false,
  marketing: false
})

const consentPreferences = reactive({
  functional: true,
  analytics: true,
  social: true,
  marketing: true
})

const openConsentModal = () => {
  showConsentModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeConsentModal = () => {
  showConsentModal.value = false
  document.body.style.overflow = 'auto'
}

const toggleExpand = (item) => {
  expandedItems[item] = !expandedItems[item]
}

const rejectAll = () => {
  consentPreferences.functional = false
  consentPreferences.analytics = false
  consentPreferences.social = false
  consentPreferences.marketing = false
  confirmChoices()
}

const confirmChoices = () => {
  // Save preferences to localStorage or send to backend
  localStorage.setItem('vcn-consent-preferences', JSON.stringify(consentPreferences))
  closeConsentModal()
  // You can also emit an event or call a function here
  console.log('Consent preferences saved:', consentPreferences)
}

// Define the function to be called from parent
defineExpose({
  openConsentModal
})
</script>

