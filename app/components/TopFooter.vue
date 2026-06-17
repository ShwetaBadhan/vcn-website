<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import ConsentPreferencesModal from './ConsentPreferencesModal.vue'
import { useApi } from '~/config/api/useApi'
import { useCmsStore } from '~/stores/cms'

const toast = useToast()
const consentModal = ref(null)
const email = ref('')
const isLoading = ref(false)


const cmsStore = useCmsStore()

const footer = computed(() => cmsStore.topFooterData)

const openConsentModal = () => {
  consentModal.value?.openConsentModal()
}

const handleSubscribe = async (event) => {
  event.preventDefault()

  // Basic email validation
  if (!email.value || !email.value.includes('@')) {
    toast.error({
      message: 'Please enter a valid email address'
    })
    return
  }

  isLoading.value = true

  try {
    const { postToEndpoint, endpoints } = useApi()
    console.log('Available endpoints:', endpoints)

    const response = await postToEndpoint('SUBSCRIBE', {
      email: email.value
    })

    console.log('Subscribe response:', response)

    if (response.data && response.data.success !== false) {
      // Success - show toast
      email.value = '' // Clear input
      toast.success({
        message: 'Successfully subscribed to newsletter!'
      })
    } else {
      // Error
      const errorMsg = response.data?.message || response.error || 'Subscription failed. Please try again.'
      toast.error({
        message: errorMsg
      })
    }
  } catch (error) {
    console.error('Subscription error:', error)
    toast.error({
      message: error.message || 'An error occurred. Please try again.'
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <!-- Footer Section -->
  <footer class="vcn-footer-section">
    <div class="container-fluid vcn-container-footer">
      <!-- Top Section: Brand & Newsletter -->
      <div class="row">
        <div class="col-md-5">
          <div class="vcn-footer-brand">
            <div class="vcn-footer-logo">
              <img src="/img/logo/logo.png" alt="" />
            </div>
            <p class="vcn-footer-tagline">
              {{ footer.tagline.title }}
              <!-- <span class="vcn-footer-tagline-icon"><svg width="31" height="33" viewBox="0 0 31 33" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0785 22.1018L6.86646 16.8897L8.95126 14.8049L14.1633 20.017L12.0785 22.1018Z"
                    stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M1.65428 16.8905L12.0783 27.2098" stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path
                    d="M5.82434 21.0594C5.82434 26.8164 10.4913 31.4834 16.2484 31.4834C22.0054 31.4834 26.6724 26.8164 26.6724 21.0594C26.6724 18.7123 25.8967 16.5463 24.5876 14.804"
                    stroke="#FFFFFF" stroke-width="1.7"></path>
                  <circle cx="22.5029" cy="13.2413" r="2.60601" stroke="#FFFFFF" stroke-width="1.7"></circle>
                  <circle cx="22.5029" cy="13.2413" r="2.60601" stroke="#FFFFFF" stroke-width="1.7"
                    stroke-linecap="round" stroke-linejoin="round"></circle>
                  <path
                    d="M24.5875 11.6779L25.6299 10.6355L18.3331 3.33862L7.90906 13.7627L15.2059 21.0595L20.9391 15.3263"
                    stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M23.0241 1.7749L19.8969 4.90212L24.0665 9.07173L27.1937 5.94452L23.0241 1.7749Z"
                    stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></span>
               science
              <span style="
                    display: inline-block;
                    padding: 4px 10px;
                    border: 1px solid #fff;
                    font-size: 0.8rem;
                  ">R+D</span> -->
              <br />
              <!-- <span class="vcn-footer-tagline-icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="33"
                  viewBox="0 0 35 33" fill="none">
                  <mask id="path-1-inside-1_8140_3689" fill="#FFFFFF">
                    <path
                      d="M17.498 0.0214844C21.5396 0.021607 24.8164 3.29823 24.8164 7.33984C24.8164 8.86583 24.3468 10.2811 23.5473 11.4533C23.3551 11.735 23.3039 12.095 23.4414 12.4071C23.6651 12.9151 24.2851 13.1044 24.7951 12.8852C25.6807 12.5047 26.6566 12.2939 27.6816 12.2939C31.7232 12.2941 35 15.5707 35 19.6123C34.9999 23.6538 31.7232 26.9305 27.6816 26.9307C24.7514 26.9307 22.2238 25.2076 21.055 22.7201C21.0522 22.714 21.0448 22.7114 21.0387 22.7143C21.0325 22.7173 21.025 22.7145 21.0223 22.7082L20.054 20.5078C19.3329 18.8692 17.1143 18.6131 16.0388 20.0444L15.2125 21.144C14.5689 22.0006 14.4556 23.1218 14.5839 24.1856C14.6187 24.4747 14.6367 24.7689 14.6367 25.0674C14.6366 29.1089 11.3599 32.3856 7.31836 32.3857C3.27674 32.3857 0.000122666 29.109 0 25.0674C0 21.0257 3.27667 17.749 7.31836 17.749C8.26379 17.7491 9.22097 17.4284 9.78897 16.6726L10.4141 15.8408C11.6874 14.1465 11.2915 11.7598 10.5899 9.75986C10.3242 9.00248 10.1797 8.18812 10.1797 7.33984C10.1797 3.29815 13.4564 0.0214844 17.498 0.0214844Z">
                    </path>
                  </mask>
                  <path
                    d="M17.498 0.0214844L17.4981 -1.75119H17.498V0.0214844ZM24.8164 7.33984L26.5891 7.3399V7.33984H24.8164ZM27.6816 12.2939L27.6817 10.5213H27.6816V12.2939ZM35 19.6123L36.7727 19.6124V19.6123H35ZM27.6816 26.9307V28.7033H27.6817L27.6816 26.9307ZM14.6367 25.0674L16.4094 25.0674V25.0674H14.6367ZM7.31836 32.3857V34.1584H7.31841L7.31836 32.3857ZM0 25.0674H-1.77268V25.0674L0 25.0674ZM10.1797 7.33984H8.40701L8.40701 7.3399L10.1797 7.33984ZM10.4141 15.8408L8.99702 14.7758L10.4141 15.8408ZM10.5899 9.75986L8.91718 10.3466L10.5899 9.75986ZM9.78897 16.6726L8.37188 15.6076L9.78897 16.6726ZM20.054 20.5078L21.6765 19.7938L20.054 20.5078ZM16.0388 20.0444L17.456 21.1093L16.0388 20.0444ZM21.0223 22.7082L19.3998 23.4222L21.0223 22.7082ZM24.7951 12.8852L25.4949 14.5139L24.7951 12.8852ZM21.055 22.7201L19.4506 23.474L21.055 22.7201ZM23.5473 11.4533L25.0117 12.4522L23.5473 11.4533ZM17.498 0.0214844L17.498 1.79416C20.5607 1.79426 23.0437 4.2773 23.0437 7.33984H24.8164H26.5891C26.5891 2.31915 22.5186 -1.75104 17.4981 -1.75119L17.498 0.0214844ZM24.8164 7.33984L23.0437 7.33979C23.0437 8.49624 22.6891 9.5655 22.0828 10.4544L23.5473 11.4533L25.0117 12.4522C26.0045 10.9966 26.589 9.23541 26.5891 7.3399L24.8164 7.33984ZM24.7951 12.8852L25.4949 14.5139C26.1636 14.2266 26.9017 14.0666 27.6816 14.0666V12.2939V10.5213C26.4116 10.5213 25.1979 10.7828 24.0953 11.2565L24.7951 12.8852ZM27.6816 12.2939L27.6816 14.0666C30.7442 14.0667 33.2273 16.5498 33.2273 19.6123H35H36.7727C36.7727 14.5916 32.7022 10.5214 27.6817 10.5213L27.6816 12.2939ZM35 19.6123L33.2273 19.6123C33.2272 22.6748 30.7441 25.1579 27.6816 25.158L27.6816 26.9307L27.6817 28.7033C32.7022 28.7032 36.7725 24.6329 36.7727 19.6124L35 19.6123ZM27.6816 26.9307V25.158C25.4643 25.158 23.5472 23.8557 22.6594 21.9663L21.055 22.7201L19.4506 23.474C20.9004 26.5595 24.0384 28.7033 27.6816 28.7033V26.9307ZM21.0223 22.7082L22.6448 21.9942L21.6765 19.7938L20.054 20.5078L18.4315 21.2219L19.3998 23.4222L21.0223 22.7082ZM16.0388 20.0444L14.6217 18.9795L13.7954 20.0791L15.2125 21.144L16.6297 22.2089L17.456 21.1093L16.0388 20.0444ZM14.5839 24.1856L12.824 24.3978C12.8504 24.6168 12.864 24.8402 12.864 25.0674H14.6367H16.4094C16.4094 24.6977 16.3871 24.3326 16.3438 23.9734L14.5839 24.1856ZM14.6367 25.0674L12.864 25.0673C12.8639 28.1299 10.3808 30.613 7.31831 30.6131L7.31836 32.3857L7.31841 34.1584C12.3389 34.1583 16.4092 30.0879 16.4094 25.0674L14.6367 25.0674ZM7.31836 32.3857V30.6131C4.25582 30.6131 1.77277 28.13 1.77268 25.0673L0 25.0674L-1.77268 25.0674C-1.77253 30.088 2.29767 34.1584 7.31836 34.1584V32.3857ZM0 25.0674H1.77268C1.77268 22.0047 4.25569 19.5217 7.31836 19.5217V17.749V15.9763C2.29764 15.9763 -1.77268 20.0467 -1.77268 25.0674H0ZM9.78897 16.6726L11.2061 17.7376L11.8312 16.9058L10.4141 15.8408L8.99702 14.7758L8.37188 15.6076L9.78897 16.6726ZM10.5899 9.75986L12.2627 9.17309C12.0622 8.6016 11.9524 7.98547 11.9524 7.33979L10.1797 7.33984L8.40701 7.3399C8.40704 8.39077 8.58629 9.40336 8.91718 10.3466L10.5899 9.75986ZM10.1797 7.33984H11.9524C11.9524 4.27717 14.4354 1.79416 17.498 1.79416V0.0214844V-1.75119C12.4773 -1.75119 8.40701 2.31913 8.40701 7.33984H10.1797ZM10.4141 15.8408L11.8312 16.9058C13.6994 14.42 12.9751 11.2041 12.2627 9.17309L10.5899 9.75986L8.91718 10.3466C9.60784 12.3155 9.67546 13.873 8.99702 14.7758L10.4141 15.8408ZM7.31836 17.749L7.31831 19.5217C8.6049 19.5217 10.1917 19.0873 11.2061 17.7376L9.78897 16.6726L8.37188 15.6076C8.25023 15.7695 7.92268 15.9764 7.31841 15.9763L7.31836 17.749ZM15.2125 21.144L13.7954 20.0791C12.7598 21.4572 12.6699 23.12 12.824 24.3978L14.5839 24.1856L16.3438 23.9734C16.2414 23.1236 16.3779 22.544 16.6297 22.2089L15.2125 21.144ZM20.054 20.5078L21.6765 19.7938C20.4095 16.9147 16.5113 16.4647 14.6217 18.9795L16.0388 20.0444L17.456 21.1093C17.7173 20.7616 18.2563 20.8238 18.4315 21.2219L20.054 20.5078ZM21.0387 22.7143L20.2739 21.1151C21.1706 20.6862 22.2444 21.0843 22.6448 21.9942L21.0223 22.7082L19.3998 23.4222C19.8057 24.3447 20.8943 24.7483 21.8035 24.3135L21.0387 22.7143ZM23.4414 12.4071L21.8191 13.1216C22.499 14.6652 24.2444 15.0512 25.4949 14.5139L24.7951 12.8852L24.0953 11.2565C24.2453 11.1921 24.4144 11.184 24.5787 11.2396C24.7536 11.2987 24.9548 11.4454 25.0637 11.6925L23.4414 12.4071ZM21.055 22.7201L22.6594 21.9663C22.2402 21.0741 21.1718 20.6857 20.2739 21.1151L21.0387 22.7143L21.8035 24.3135C20.9178 24.7371 19.8641 24.3539 19.4506 23.474L21.055 22.7201ZM23.5473 11.4533L22.0828 10.4544C21.5881 11.1797 21.4061 12.1839 21.8191 13.1216L23.4414 12.4071L25.0637 11.6925C25.2017 12.006 25.1221 12.2904 25.0117 12.4522L23.5473 11.4533Z"
                    fill="#FCFCF7" mask="url(#path-1-inside-1_8140_3689)"></path>
                </svg></span> -->
              {{ footer.tagline.description }}
              <!-- <span class="vcn-footer-tagline-icon"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="18"
                  fill="none" style="scale: 1.3">
                  <path fill="#FFFFFF"
                    d="M22.248 16.003v1.5H8.75195v-1.5H22.248ZM29.5 8.75201c0-4.00493-3.247-7.252-7.252-7.252H8.75195c-4.0049 0-7.25195 3.24707-7.25195 7.252.00023 4.00469 3.24719 7.25099 7.25195 7.25099v1.5l-.45117-.0117C3.82619 17.2643.238684 13.6768.011719 9.20221L0 8.75201C0 4.06983 3.67693.246317 8.30078.011719L8.75195 0H22.248l.4512.011719C27.3231.246318 31 4.06983 31 8.75201l-.0117.4502c-.227 4.47459-3.8145 8.06209-8.2891 8.28909l-.4512.0117v-1.5c4.0048 0 7.2518-3.2463 7.252-7.25099Z">
                  </path>
                  <path fill="#FFFFFF" d="M30.7207 8.00127v1.5H0v-1.5h30.7207Z"></path>
                  <path fill="#FFFFFF"
                    d="M19.082 12.5468V5.04574c0-1.93348-1.5675-3.50097-3.501-3.50101-1.9334 0-3.5009 1.5675-3.5009 3.50101v7.50106c0 1.9335 1.5675 3.501 3.5009 3.501v1.5l-.2578-.0058c-2.5568-.1298-4.6065-2.1805-4.7362-4.7374l-.0069-.2578V5.04574c0-2.76195 2.2391-5.00103 5.0009-5.00103l.2569.006835c2.6424.133737 4.744 2.318425 4.744 4.994195v7.50106l-.0068.2578c-.134 2.6422-2.3186 4.7432-4.9941 4.7432v-1.5c1.9335 0 3.501-1.5675 3.501-3.501Z">
                  </path>
                  <path fill="#FFFFFF"
                    d="M17.7799 16.0029v1.5h-4.5595v-1.5h4.5595Zm7.252-7.25095c0-4.0049-3.2471-7.25195-7.252-7.25195h-4.5595c-4.00494 0-7.25198 3.24705-7.25198 7.25195.00023 4.00475 3.24718 7.25095 7.25198 7.25095v1.5l-.4512-.0117c-4.47459-.227-8.0621-3.8144-8.28907-8.28905l-.01171-.4502c0-4.68215 3.67693-8.505634 8.30078-8.740231L13.2204 0h4.5595l.4502.011719c4.6241.234318 8.3018 4.057891 8.3018 8.740231l-.0117.4502c-.227 4.47485-3.8152 8.06235-8.2901 8.28905l-.4502.0117v-1.5c4.0048 0 7.2518-3.2462 7.252-7.25095Z">
                  </path>
                  <path fill="#FFFFFF" d="M14.4192.000723h1.5V17.5037h-1.5V.000723Z"></path>
                </svg></span>
              <br />
              since 2015. -->
            </p>
          </div>

          <!-- Newsletter Section -->
          <div class="vcn-footer-newsletter">
            <h3 class="vcn-footer-newsletter-title">
              {{footer.newsletter.title}}
            </h3>
            <p class="vcn-footer-newsletter-subtitle">
              {{footer.newsletter.subtitle}}
            </p>

            <form class="vcn-footer-newsletter-form" @submit="handleSubscribe">
              <div class="vcn-footer-input-wrapper">
                <input type="email" class="vcn-footer-newsletter-input" :placeholder="footer.newsletter.placeholder" v-model="email"
                  :disabled="isLoading" required />
              </div>
              <button type="submit" class="vcn-footer-newsletter-btn" @click.prevent="handleSubscribe">→</button>
            </form>


            <div class="vcn-footer-disclaimer">
              {{footer.newsletter.disclaimer}}
            </div>
          </div>
        </div>

        <div class="col-md-1"></div>

        <div class="col-md-6">
          <!-- Links Section -->
          <div class="vcn-footer-links-section">
            <div class="row">
              <!-- Products Column -->
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <h4 class="vcn-footer-column-title">{{footer.columns[0].title}}</h4>
                <ul class="vcn-footer-links-list">
                  <li v-for="link in footer.columns[0].links" :key="link.text">
                    <a :href="link.link" class="vcn-footer-link">{{link.text}}</a>
                  </li>
                </ul>
              </div>

              <!-- About Column -->
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <h4 class="vcn-footer-column-title">{{footer.columns[1].title}}</h4>
                <ul class="vcn-footer-links-list">
                  <li v-for="link in footer.columns[1].links" :key="link.text">
                    <a :href="link.link" class="vcn-footer-link">{{link.text}}</a>
                  </li>
                </ul>
              </div>

              <!-- Inquire Column -->
              <!-- <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
                <h4 class="vcn-footer-column-title">Inquire</h4>
                <ul class="vcn-footer-links-list">
                  <li>
                    <a href="/vcn-university" class="vcn-footer-link">Partner</a>
                  </li>
                  <li>
                    <a href="/practitioners" class="vcn-footer-link">Practitioners</a>
                  </li>
                  <li><a href="#" class="vcn-footer-link">Press</a></li>
                    <li><a href="#" class="vcn-footer-link">Join</a></li>
                </ul>
              </div> -->

              <!-- Help Column -->
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <h4 class="vcn-footer-column-title">{{ footer.columns[2].title }}</h4>
                <ul class="vcn-footer-links-list">
                  <li v-for="link in footer.columns[2].links" :key="link.text">
                    <a :href="link.link" class="vcn-footer-link">{{link.text}}</a>
                  </li>
                  
                  <!-- <li>
                    <a href="/entire-world" class="vcn-footer-link">International</a>
                  </li> -->
                </ul>
              </div>

              <!-- Social Column -->
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <h4 class="vcn-footer-column-title">{{ footer.columns[3].title }}</h4>
                <ul class="vcn-footer-links-list">
                  <li v-for="link in footer.columns[3].links" :key="link.text">
                    <a :href="link.link" target="_blank" class="vcn-footer-link">{{link.text}}</a>
                  </li>
                  <!-- <li><a href="https://www.instagram.com/vcnorganic/" target="_blank"
                      class="vcn-footer-link">Instagram</a></li>
                  <li><a href="https://www.facebook.com/VCNorganic" target="_blank" class="vcn-footer-link">Facebook</a>
                  </li>
                  <li><a href="https://in.pinterest.com/vcn_organic/" target="_blank"
                      class="vcn-footer-link">Pinterest</a></li>
                 <li><a href="#" class="vcn-footer-link">Refer</a></li> -->
                </ul>
              </div>

              <!-- Legal Column -->
              <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <h4 class="vcn-footer-column-title">{{ footer.columns[4].title }}</h4>
                <ul class="vcn-footer-links-list">
                  <li v-for="link in footer.columns[4].links" :key="link.text">
                    <a :href="link.link" class="vcn-footer-link">{{link.text}}</a>
                  </li>
                  <!-- <li>
                    <a href="/terms-conditions" class="vcn-footer-link">Terms + Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" class="vcn-footer-link">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/accessibility" class="vcn-footer-link">Accessibility</a>
                  </li>
                  <li>
                    <a href="#" class="vcn-footer-link" @click.prevent="openConsentModal">
                      Consent Preferences
                    </a>
                  </li>
                  <li>
                    <a href="/cancellation-and-refund-process" class="vcn-footer-link">Cancellation & Refund Process</a>
                  </li>
                  <li>
                    <a href="/disclaimer" class="vcn-footer-link">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/shipping-policy" class="vcn-footer-link">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="/grievance-redressal" class="vcn-footer-link">Grievance Redressal</a>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add the modal component -->
    <ConsentPreferencesModal ref="consentModal" />
  </footer>
</template>
