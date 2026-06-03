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
                  <input type="text" class="form-control mid-form-input" id="mid-pincode" placeholder="Pincode"
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

const cmsStore = useCmsStore()

const consultation = computed(
  () => cmsStore.getPageSection('consultation', 'consultation')
)

// const healthIssues = computed(
//   () => leftContent.value.healthIssues?.options
// )

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});

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
