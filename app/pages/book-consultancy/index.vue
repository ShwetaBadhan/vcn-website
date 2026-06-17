<template>
  <section class="product-detail-section mt-3">
    <section class="mid-consultation-section py-5">
      <div class="container">
        <div class="row g-5">

          <!-- Left Column - Form -->
          <div class="col-lg-5">
            <h1 class="mid-page-title mb-4"> {{ consultation.leftContent.title }}</h1>

            <form class="mid-consultation-form" @submit.prevent="submitForm">

              <!-- First Name & Last Name -->
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label for="mid-first-name" class="mid-form-label form-label">
                    {{ consultation.leftContent.formFields.firstName.label }}<span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control mid-form-input" id="mid-first-name"
                    :placeholder="consultation.leftContent.formFields.firstName.placeholder"
                    v-model="formData.firstName" required>
                </div>
                <div class="col-md-6">
                  <label for="mid-last-name" class="mid-form-label form-label">
                    {{ consultation.leftContent.formFields.lastName.label }}<span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control mid-form-input" id="mid-last-name"
                    :placeholder="consultation.leftContent.formFields.lastName.placeholder" v-model="formData.lastName"
                    required>
                </div>
              </div>

              <!-- Age -->
              <div class="mb-3">
                <label for="mid-age" class="mid-form-label form-label">
                  {{ consultation.leftContent.formFields.age.label }} <span class="text-danger">*</span>
                </label>
                <input type="number" class="form-control mid-form-input" id="mid-age"
                  :placeholder="consultation.leftContent.formFields.age.placeholder" v-model="formData.age" required>
              </div>

              <!-- Weight -->
              <div class="mb-3">
                <label for="mid-weight" class="mid-form-label form-label">
                  {{ consultation.leftContent.formFields.weight.label }} <span class="text-danger">*</span>
                </label>
                <input type="number" class="form-control mid-form-input" id="mid-weight"
                  :placeholder="consultation.leftContent.formFields.weight.placeholder" v-model="formData.weight"
                  required>
              </div>

              <!-- Phone -->
              <div class="mb-3">
                <label for="mid-phone" class="mid-form-label form-label">
                  {{ consultation.leftContent.formFields.phone.label }} <span class="text-danger">*</span>
                </label>
                <input type="tel" class="form-control mid-form-input" id="mid-phone"
                  :placeholder="consultation.leftContent.formFields.phone.placeholder" v-model="formData.phone"
                  required>
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="mid-email" class="mid-form-label form-label">
                  {{ consultation.leftContent.formFields.email.label }}
                </label>
                <input type="email" class="form-control mid-form-input" id="mid-email"
                  :placeholder="consultation.leftContent.formFields.email.placeholder" v-model="formData.email">
              </div>

              <!-- Gender -->
              <div class="mb-3">
                <label for="mid-gender" class="mid-form-label form-label">
                  {{ consultation.leftContent.formFields.gender.label }}
                  <span class="text-danger">*</span>
                </label>

                <select class="form-select mid-form-input" id="mid-gender" v-model="formData.gender" required>
                  <option value="" disabled>
                    {{ consultation.leftContent.formFields.gender.placeholder }}
                  </option>

                  <option v-for="option in consultation.leftContent.formFields.gender.options" :key="option"
                    :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <!-- City & Pincode -->
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label for="mid-city" class="mid-form-label form-label">
                    {{ consultation.leftContent.formFields.city.label }} <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control mid-form-input" id="mid-city"
                    :placeholder="consultation.leftContent.formFields.city.placeholder" v-model="formData.city"
                    required>
                </div>
                <div class="col-md-6">
                  <label for="mid-pincode" class="mid-form-label form-label">
                    {{ consultation.leftContent.formFields.pincode.label }} <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control mid-form-input" id="mid-pincode"
                    :placeholder="consultation.leftContent.formFields.pincode.placeholder"
                    v-model="formData.pincode" required>
                </div>
              </div>

              <!-- Health Issues -->
              <div class="mb-4">
                <label class="mid-form-label form-label">
                  {{ consultation.leftContent.healthIssues.label }}
                  <span class="text-danger">*</span>
                </label>

                <div class="mid-checkbox-group">
                  <div v-for="(issue, index) in consultation.leftContent.healthIssues.options" :key="index"
                    class="form-check mb-2">
                    <input class="form-check-input mid-checkbox" type="checkbox" :value="issue"
                      :id="'mid-issue-' + index" v-model="formData.healthIssues">

                    <label class="form-check-label mid-checkbox-label" :for="'mid-issue-' + index">
                      {{ issue }}
                    </label>
                  </div>
                </div>
              </div>

              <!-- Health Issue Description -->
              <div class="mb-4" v-if="formData.healthIssues.length > 0">
                <label for="mid-health-description" class="mid-form-label form-label">
                  {{ consultation.leftContent.descriptionField.label }}<span class="text-danger">*</span>
                </label>
                <textarea class="form-control mid-form-input" id="mid-health-description" rows="4"
                  :placeholder="consultation.leftContent.descriptionField.placeholder"
                  v-model="formData.healthIssueDescription" required></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn mid-submit-btn px-4">
                {{ consultation.leftContent.submitButton }}
              </button>
            </form>
          </div>

          <!-- Right Column - Stats & Image -->
          <div class="col-lg-7">
            <div class="mid-stats-section text-center mb-4">
              <h2 class="mid-stats-subtitle mb-2">{{ consultation.rightContent.subtitle }}</h2>
              <h1 class="mid-stats-title fw-bold mb-4">{{ consultation.rightContent.title }}</h1>

              <div class="row g-3 mb-4">
                <div v-for="(stat, index) in consultation.rightContent.stats" :key="index" class="col-md-4">
                  <div class="mid-stat-item p-3">
                    <div class="mid-stat-number fw-bold fs-4 mb-1">
                      {{ stat.value }}
                    </div>

                    <div class="mid-stat-label">
                      {{ stat.label }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="mid-stats-image-container">
                <img :src="consultation.rightContent.image.src" :alt="consultation.rightContent.image.alt"
                  class="img-fluid rounded">
              </div>
            </div>

          </div>

          <!-- Branch Locations & Contact Info -->
          <div class="row g-4 mt-4">

            <!-- Branch Locations -->
            <div class="col-lg-6">
              <div class="mid-branch-card p-4 h-100">
                <div v-for="(branch, index) in consultation.branchLocations" :key="index"
                  :class="{ 'mb-4': index !== consultation.branchLocations.length - 1 }">
                  <h3 class="mid-branch-title mb-2">
                    {{ branch.title }}
                  </h3>

                  <p class="mid-branch-address text-muted mb-0">
                    {{ branch.address }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="col-lg-6">
              <div class="mid-contact-card p-4 h-100">

                <div v-for="(contact, index) in consultation.contactInformation" :key="index"
                  :class="{ 'mb-4': index !== consultation.contactInformation.length - 1 }">
                  <h3 class="mid-contact-title mb-3">
                    {{ contact.title }}
                  </h3>

                  <ul class="mid-contact-list list-unstyled mb-0">
                    <li class="mb-2">
                      <span class="mid-contact-label">Address:</span>
                      {{ contact.address }}
                    </li>

                    <li class="mb-2">
                      <span class="mid-contact-label">Phone:</span>
                      {{ contact.phone }}
                    </li>

                    <li class="mb-2">
                      <span class="mid-contact-label">Email:</span>
                      {{ contact.email }}
                    </li>

                    <li class="mb-2">
                      <span class="mid-contact-label">Working Hours:</span>
                      {{ contact.workingHours }}
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('consultation-cms', () => cmsStore.fetchSectionsBySlug('consultation'))

const consultation = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find consultation section by name or sectionKey
  const consultationSec = sections.find(s => s.name === 'consultation' || s.sectionKey === 'consultation')
  
  // Fallbacks from PAGE_DATA (consultation page fallback)
  const fallback = cmsStore.getPageSection('consultation', 'consultation') || {
    leftContent: {
      title: "Consultation Form",
      formFields: {
        firstName: { label: "First Name", placeholder: "First Name", required: true },
        lastName: { label: "Last Name", placeholder: "Last Name", required: true },
        age: { label: "Age", placeholder: "Ex. 22", required: true },
        weight: { label: "Weight (in kg)", placeholder: "Ex. 45", required: true },
        phone: { label: "Phone/Mobile (With Country Code)", placeholder: "917750824146", required: true },
        email: { label: "Email", placeholder: "Email Address", required: false },
        gender: { label: "Gender", placeholder: "Select Gender", required: true, options: ["Male", "Female", "Other"] },
        city: { label: "City", placeholder: "City", required: true },
        pincode: { label: "Pincode", placeholder: "Pincode", required: true }
      },
      healthIssues: {
        label: "Health Issues (Select At Least One)",
        options: ["Thyroid", "Weight gain", "Hormonal issues", "Hair Fall", "Pigmentation", "Other"]
      },
      descriptionField: {
        label: "Describe Your Problem",
        placeholder: "Please describe your health issue in detail..."
      },
      submitButton: "Submit Form"
    },
    rightContent: {
      subtitle: "Your Health, Our Priority",
      title: "5 Lakh Happy Customers",
      stats: [
        { value: "50+", label: "Experts" },
        { value: "Free", label: "Consultation" },
        { value: "Regular", label: "Follow-ups" }
      ],
      image: { src: "/img/image/Consultation.png", alt: "Health Experts" }
    },
    branchLocations: [
      { title: "Visit our Team of Trained Health Experts at our Gurgaon Branch", address: "Unit No. 307 & 308, Tower A, Pioneer Urban Square, Golf Course Ext Rd, Sector 62, Gurugram, Ghata, Haryana 122005" },
      { title: "Visit our Team of Trained Health Experts at our Jalandhar Branch –", address: "SCO 41, Chotti Baradari Part 2, Opposite PIMS Hospital, Jalandhar, Punjab 144001" }
    ],
    contactInformation: [
      { title: "Contact our Global Support Team at –", address: "VCN Tower, 37/2 Cool Road, Jalandhar, Punjab, INDIA-144001", phone: "+91-181-4010154, M:+919876453626", email: "info@vcnhealth.com", workingHours: "Mon – Sat: 9:00 AM – 6:00 PM" },
      { title: "Contact our India (Domestic) Team", address: "VCN Shop No.24/25, Block C. PPR Village, Chandigarh Express way", phone: "+91 22 3456 7890", email: "mumbai@vcnhealth.com", workingHours: "Mon – Sat: 9:00 AM – 6:00 PM" }
    ]
  }

  if (!consultationSec) {
    return fallback
  }

  // Find sub-items by name inside consultation items
  const items = consultationSec.items || []
  const formItem = items.find(item => item.name === 'consultation-form')
  const statsItem = items.find(item => item.name === 'stats-panel')
  const branchItem = items.find(item => item.name === 'branch-locations')
  const contactItem = items.find(item => item.name === 'contact-information')

  // Resolve leftContent (Form)
  const leftContent = {
    title: formItem?.title || fallback.leftContent.title,
    formFields: {
      firstName: {
        label: formItem?.extraData?.formFields?.firstName?.label || fallback.leftContent.formFields.firstName.label,
        placeholder: formItem?.extraData?.formFields?.firstName?.placeholder || fallback.leftContent.formFields.firstName.placeholder,
        required: formItem?.extraData?.formFields?.firstName?.required !== undefined ? formItem.extraData.formFields.firstName.required : fallback.leftContent.formFields.firstName.required
      },
      lastName: {
        label: formItem?.extraData?.formFields?.lastName?.label || fallback.leftContent.formFields.lastName.label,
        placeholder: formItem?.extraData?.formFields?.lastName?.placeholder || fallback.leftContent.formFields.lastName.placeholder,
        required: formItem?.extraData?.formFields?.lastName?.required !== undefined ? formItem.extraData.formFields.lastName.required : fallback.leftContent.formFields.lastName.required
      },
      age: {
        label: formItem?.extraData?.formFields?.age?.label || fallback.leftContent.formFields.age.label,
        placeholder: formItem?.extraData?.formFields?.age?.placeholder || fallback.leftContent.formFields.age.placeholder,
        required: formItem?.extraData?.formFields?.age?.required !== undefined ? formItem.extraData.formFields.age.required : fallback.leftContent.formFields.age.required
      },
      weight: {
        label: formItem?.extraData?.formFields?.weight?.label || fallback.leftContent.formFields.weight.label,
        placeholder: formItem?.extraData?.formFields?.weight?.placeholder || fallback.leftContent.formFields.weight.placeholder,
        required: formItem?.extraData?.formFields?.weight?.required !== undefined ? formItem.extraData.formFields.weight.required : fallback.leftContent.formFields.weight.required
      },
      phone: {
        label: formItem?.extraData?.formFields?.phone?.label || fallback.leftContent.formFields.phone.label,
        placeholder: formItem?.extraData?.formFields?.phone?.placeholder || fallback.leftContent.formFields.phone.placeholder,
        required: formItem?.extraData?.formFields?.phone?.required !== undefined ? formItem.extraData.formFields.phone.required : fallback.leftContent.formFields.phone.required
      },
      email: {
        label: formItem?.extraData?.formFields?.email?.label || fallback.leftContent.formFields.email.label,
        placeholder: formItem?.extraData?.formFields?.email?.placeholder || fallback.leftContent.formFields.email.placeholder,
        required: formItem?.extraData?.formFields?.email?.required !== undefined ? formItem.extraData.formFields.email.required : fallback.leftContent.formFields.email.required
      },
      gender: {
        label: formItem?.extraData?.formFields?.gender?.label || fallback.leftContent.formFields.gender.label,
        placeholder: formItem?.extraData?.formFields?.gender?.placeholder || fallback.leftContent.formFields.gender.placeholder,
        required: formItem?.extraData?.formFields?.gender?.required !== undefined ? formItem.extraData.formFields.gender.required : fallback.leftContent.formFields.gender.required,
        options: formItem?.extraData?.formFields?.gender?.options || fallback.leftContent.formFields.gender.options
      },
      city: {
        label: formItem?.extraData?.formFields?.city?.label || fallback.leftContent.formFields.city.label,
        placeholder: formItem?.extraData?.formFields?.city?.placeholder || fallback.leftContent.formFields.city.placeholder,
        required: formItem?.extraData?.formFields?.city?.required !== undefined ? formItem.extraData.formFields.city.required : fallback.leftContent.formFields.city.required
      },
      pincode: {
        label: formItem?.extraData?.formFields?.pincode?.label || fallback.leftContent.formFields.pincode.label,
        placeholder: formItem?.extraData?.formFields?.pincode?.placeholder || fallback.leftContent.formFields.pincode.placeholder,
        required: formItem?.extraData?.formFields?.pincode?.required !== undefined ? formItem.extraData.formFields.pincode.required : fallback.leftContent.formFields.pincode.required
      }
    },
    healthIssues: {
      label: formItem?.extraData?.healthIssues?.label || fallback.leftContent.healthIssues.label,
      options: formItem?.extraData?.healthIssues?.options || fallback.leftContent.healthIssues.options
    },
    descriptionField: {
      label: formItem?.extraData?.descriptionField?.label || fallback.leftContent.descriptionField.label,
      placeholder: formItem?.extraData?.descriptionField?.placeholder || fallback.leftContent.descriptionField.placeholder
    },
    submitButton: formItem?.extraData?.submitButton || fallback.leftContent.submitButton
  }

  // Resolve rightContent (Stats & Image)
  const rawImage = statsItem?.image || statsItem?.extraData?.image || consultationSec?.image
  let imageSrc = fallback.rightContent.image.src
  if (rawImage) {
    if (typeof rawImage === 'string') {
      imageSrc = rawImage
    } else {
      imageSrc = getCmsImageUrl(rawImage)
    }
  }

  const rightContent = {
    subtitle: statsItem?.subtitle || fallback.rightContent.subtitle,
    title: statsItem?.title || fallback.rightContent.title,
    stats: statsItem?.extraData?.stats || fallback.rightContent.stats,
    image: {
      src: imageSrc,
      alt: statsItem?.extraData?.image?.alt || fallback.rightContent.image.alt
    }
  }

  // Resolve branchLocations
  let branchLocations = fallback.branchLocations
  if (branchItem?.extraData?.locations && branchItem.extraData.locations.length > 0) {
    branchLocations = branchItem.extraData.locations
  }

  // Resolve contactInformation
  let contactInformation = fallback.contactInformation
  if (contactItem?.extraData?.contacts && contactItem.extraData.contacts.length > 0) {
    contactInformation = contactItem.extraData.contacts
  }

  return {
    leftContent,
    rightContent,
    branchLocations,
    contactInformation
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})

const formData = ref({
  firstName: '',
  lastName: '',
  age: '',
  weight: '',
  phone: '',
  email: '',
  gender: '',
  city: '',
  pincode: '',
  healthIssues: [],
  healthIssueDescription: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  alert('Form submitted successfully! We will contact you soon.')
  // Add your form submission logic here
}
</script>
