<style>
/* ===== PILL TABS ===== */
.office-pills-wrapper {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.office-pill-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background: #f0f0f0;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.office-pill-btn:hover {
  background: #c8e6c9;
  color: #2e7d32;
}

.office-pill-btn.active {
  background: #2e7d32;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
}

.office-pill-btn .pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #aaa;
  transition: all 0.3s ease;
}

.office-pill-btn.active .pill-dot {
  background: #ffffff;
}

/* ✅ REMOVED .office-card-content { display: none } — was blocking v-show */

.office-img-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 220px;
  margin-bottom: 20px;
}

.office-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.office-type-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
}

.badge-head {
  background: #2e7d32;
}

.badge-regional {
  background: #1565c0;
}

.badge-warehouse {
  background: #6a1b9a;
}

.office-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
}

.office-detail-icon {
  width: 36px;
  height: 36px;
  background: #e8f5e9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.office-detail-icon svg {
  fill: #2e7d32;
}

.office-detail-label {
  font-size: 11px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.office-detail-value {
  font-size: 14px;
  color: #333;
  margin: 0;
  line-height: 1.5;
}

.office-maps-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 8px 18px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.office-maps-btn:hover {
  background: #2e7d32;
  color: #fff;
}

/* Form Validation Styles */
.contact-input-error {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25) !important;
}

.contact-error-message {
  display: block;
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
}

/* Alert Styles */
.contact-alert {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
}

.contact-alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.contact-alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* File Upload Styles */
.contact-files-list {
  margin-top: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 8px;
  background-color: #f9f9f9;
}

.contact-file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  margin-bottom: 4px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
}

.contact-file-item:last-child {
  margin-bottom: 0;
}

.contact-file-remove {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.contact-file-remove:hover {
  background-color: #dc3545;
  color: white;
}

.contact-submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .terms-conditions {
    padding: 40px 15px;
  }

  .office-pills-wrapper {
    gap: 8px;
    margin-bottom: 20px;
  }

  .office-pill-btn {
    padding: 8px 16px;
    font-size: 13px;
  }

  .office-img-wrapper {
    height: 180px;
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .terms-conditions {
    padding: 30px 15px;
  }

  .office-pills-wrapper {
    gap: 6px;
    margin-bottom: 16px;
  }

  .office-pill-btn {
    padding: 6px 12px;
    font-size: 12px;
  }

  .office-img-wrapper {
    height: 160px;
    margin-bottom: 12px;
  }

  .office-detail-row {
    margin-bottom: 12px;
  }

  .office-detail-icon {
    width: 32px;
    height: 32px;
  }

  .office-detail-label {
    font-size: 10px;
  }

  .office-detail-value {
    font-size: 13px;
  }

  .office-maps-btn {
    padding: 6px 14px;
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .terms-conditions {
    padding: 20px 10px;
  }

  .office-pills-wrapper {
    gap: 4px;
    margin-bottom: 12px;
  }

  .office-pill-btn {
    padding: 4px 8px;
    font-size: 11px;
  }

  .office-img-wrapper {
    height: 140px;
    margin-bottom: 10px;
  }

  .office-detail-row {
    gap: 8px;
    margin-bottom: 10px;
  }

  .office-detail-icon {
    width: 28px;
    height: 28px;
  }

  .office-detail-value {
    font-size: 12px;
  }

  .office-maps-btn {
    padding: 4px 10px;
    font-size: 11px;
  }

  /* Contact Form Mobile Styles */
  .contact-form-container {
    margin-top: 30px;
  }

  .contact-form-title {
    font-size: 24px !important;
  }

  .contact-field-wrapper {
    margin-bottom: 16px;
  }

  .contact-field-label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .contact-text-input,
  .contact-select-input,
  .contact-textarea-input {
    font-size: 14px;
    padding: 10px 12px;
  }

  .contact-textarea-input {
    min-height: 100px;
  }

  .contact-submit-button {
    padding: 12px 20px;
    font-size: 14px;
  }

  .contact-footer-text {
    font-size: 11px;
    line-height: 1.4;
  }
}
</style>

<template>
  <section class="terms-conditions">
    <div class="row">

      <!-- Left Side -->
      <div class="col-lg-6 col-12">
        <div class="contact-form-body">
          <div class="office-image-wrapper">

            <!-- Company Branding -->
            <div class="mb-4">

              <h2 style="font-size: 20px; font-weight: 700; margin-top: 10px; color: #1a1a1a;">
                {{ contact.company.name }}
              </h2>
              <p style="color: #777; font-size: 13px;">{{ contact.company.description }} </p>
            </div>

            <!-- Pill Buttons -->
            <div class="office-pills-wrapper">
              <button v-for="office in contact.offices" :key="office.id" class="office-pill-btn"
                :class="{ active: activeTab === office.id }" @click="activeTab = office.id">
                <span class="pill-dot"></span>
                {{ office.city }}
              </button>
            </div>

            <!-- ✅ jalandhar — v-show only, no extra class -->

            <div v-if="activeOffice">
              <div class="office-img-wrapper">
                <img :src="activeOffice.image" :alt="activeOffice.city" />

                <span class="office-type-badge" :class="activeOffice.badgeClass">
                  🏢 {{ activeOffice.type }}
                </span>
              </div>

              <div class="office-detail-row">
                <div>
                  <div class="office-detail-label">{{ activeOffice.addressLabel }}</div>
                  <p class="office-detail-value">
                    {{ activeOffice.address }}
                  </p>
                </div>
              </div>

              <div class="office-detail-row">
                <div>
                  <div class="office-detail-label">{{ activeOffice.phoneLabel }}</div>
                  <p class="office-detail-value">
                    {{ activeOffice.phone }}
                    <span v-if="activeOffice.mobile">
                      M: {{ activeOffice.mobile }}
                    </span>
                  </p>
                </div>
              </div>

              <div class="office-detail-row">
                <div>
                  <div class="office-detail-label">{{ activeOffice.emailLabel }}</div>
                  <p class="office-detail-value">
                    {{ activeOffice.email }}
                  </p>
                </div>
              </div>

              <div class="office-detail-row">
                <div>
                  <div class="office-detail-label">{{ activeOffice.workingHoursLabel }}</div>
                  <p class="office-detail-value">
                    {{ activeOffice.workingHours }}
                  </p>
                </div>
              </div>

              <a :href="activeOffice.mapLink" target="_blank" class="office-maps-btn">
                {{ activeOffice.mapLabel }}
              </a>
            </div>

          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="col-lg-6 col-12">
        <div class="contact-form-container">
          <div class="contact-form-header">
            <h1 class="contact-form-title">{{ contact.contactForm.title }}</h1>
          </div>
          <div class="contact-form-body">
            <form @submit.prevent="submitForm" novalidate>
              <!-- Success/Error Message -->
              <div v-if="submitMessage" class="contact-field-wrapper">
                <div
                  :class="['contact-alert', submitMessageType === 'success' ? 'contact-alert-success' : 'contact-alert-error']">
                  {{ submitMessage }}
                </div>
              </div>

              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="fullNameField">
                  {{ contact.contactForm.fields.fullName.label }} <span class="contact-required-mark">*</span>
                </label>
                <input type="text" id="fullNameField" class="contact-text-input"
                  :class="{ 'contact-input-error': errors.fullName }" v-model="formData.fullName"
                  :placeholder="contact.contactForm.fields.fullName.placeholder" required />
                <span v-if="errors.fullName" class="contact-error-message">{{ errors.fullName }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="emailField">
                  {{ contact.contactForm.fields.email.label }} <span class="contact-required-mark">*</span>
                </label>
                <input type="email" id="emailField" class="contact-text-input"
                  :class="{ 'contact-input-error': errors.email }" v-model="formData.email"
                  :placeholder="contact.contactForm.fields.email.placeholder" required />
                <span v-if="errors.email" class="contact-error-message">{{ errors.email }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="phoneField">
                  {{ contact.contactForm.fields.phone.label }} <span class="contact-required-mark">*</span>
                </label>
                <input type="tel" id="phoneField" class="contact-text-input" v-model="formData.phone"
                  :placeholder="contact.contactForm.fields.phone.placeholder"
                  :class="{ 'contact-input-error': errors.phone }" />
                <span v-if="errors.phone" class="contact-error-message">{{ errors.phone }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="officeField">
                  {{ contact.contactForm.fields.office.label }} <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="officeField" class="contact-select-input"
                    :class="{ 'contact-input-error': errors.office }" v-model="formData.office" required>
                    <option value="">
                      {{ contact.contactForm.fields.office.placeholder }}
                    </option>
                    <option v-for="office in contact.contactForm.fields.office.officeOptions" :key="office.value"
                      :value="office.value">
                      {{ office.label }}
                    </option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                        fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
                <span v-if="errors.office" class="contact-error-message">{{ errors.office }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="subjectField">
                  {{ contact.contactForm.fields.subject.label }} <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="subjectField" class="contact-select-input"
                    :class="{ 'contact-input-error': errors.subject }" v-model="formData.subject" required>
                    <option value="">{{ contact.contactForm.fields.subject.placeholder }}</option>
                    <option v-for="subject in contact.contactForm.fields.subject.subjectOptions" :key="subject.value"
                      :value="subject.value">
                      {{ subject.label }}
                    </option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                        fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
                <span v-if="errors.subject" class="contact-error-message">{{ errors.subject }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="messageField">
                  {{ contact.contactForm.fields.message.label }} <span class="contact-required-mark">*</span>
                </label>
                <textarea id="messageField" class="contact-textarea-input"
                  :class="{ 'contact-input-error': errors.message }" v-model="formData.message"
                  :placeholder="contact.contactForm.fields.message.placeholder"
                  required></textarea>
                <span v-if="errors.message" class="contact-error-message">{{ errors.message }}</span>
              </div>
              <div class="contact-field-wrapper">
                <div class="attachment-wrapper">
                  <label class="contact-file-upload-area" for="fileUploadInput">
                    <div class="contact-file-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#161616" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.75 5.62496V14.4416C13.75 16.1833 12.475 17.7333 10.7416 17.9C8.74998 18.0916 7.08331 16.5333 7.08331 14.5833V4.28329C7.08331 3.19163 7.86665 2.19996 8.94998 2.09163C10.2 1.96663 11.25 2.94163 11.25 4.16663V12.9166C11.25 13.375 10.875 13.75 10.4166 13.75C9.95831 13.75 9.58331 13.375 9.58331 12.9166V5.62496C9.58331 5.28329 9.29998 4.99996 8.95831 4.99996C8.61665 4.99996 8.33331 5.28329 8.33331 5.62496V12.8C8.33331 13.8916 9.11665 14.8833 10.2 14.9916C11.45 15.1166 12.5 14.1416 12.5 12.9166V4.30829C12.5 2.56663 11.225 1.01663 9.49165 0.849959C7.50831 0.658292 5.83331 2.21663 5.83331 4.16663V14.3916C5.83331 16.7833 7.58331 18.925 9.96665 19.15C12.7083 19.4 15 17.2666 15 14.5833V5.62496C15 5.28329 14.7166 4.99996 14.375 4.99996C14.0333 4.99996 13.75 5.28329 13.75 5.62496Z">
                        </path>
                      </svg>
                      <span>{{ contact.contactForm.fields.files.label }}</span>
                    </div>
                  </label>
                  <input type="file" id="fileUploadInput" class="contact-file-input-hidden" @change="handleFileUpload"
                    multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" />
                </div>
                <div class="contact-file-info-text">
                  {{ contact.contactForm.fields.files.uploadLabelLimit }}
                </div>
                <div v-if="formData.files.length > 0" class="contact-files-list">
                  <div v-for="(file, index) in formData.files" :key="index" class="contact-file-item">
                    {{ file.name }}
                    <button type="button" @click="formData.files.splice(index, 1)"
                      class="contact-file-remove">×</button>
                  </div>
                </div>
              </div>
              <button type="submit" class="contact-submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              <p class="contact-footer-text">
                {{ contact.contactForm.fields.formFooter.text }} <br />
                <a :href="contact.contactForm.fields.formFooter.privacyPolicyLink" class="contact-footer-link">{{ contact.contactForm.fields.formFooter.privacyPolicyLabel }}</a> and
                <a :href="contact.contactForm.fields.formFooter.termsOfServiceLink" class="contact-footer-link">{{ contact.contactForm.fields.formFooter.termsOfServiceLabel }}</a> apply.
              </p>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useApi } from '~/config/api/useApi'
import { API_ENDPOINTS } from '~/config/api/endpoints'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('contact-cms', () => cmsStore.fetchSectionsBySlug('contact'))

const contact = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find contact section by name or sectionKey
  const section = sections.find(s => s.name === 'contact' || s.sectionKey === 'contact')
  
  const fallback = cmsStore.getPageSection('contact', 'contact') || {
    company: { name: "Falcon Marketing Pvt.Ltd", description: "VCN is the Brand Name of Falcon Marketing Pvt. Limited established in 2009 is a fast-growing direct selling company." },
    offices: [],
    contactForm: {
      title: "Contact us",
      fields: {
        fullName: { label: "Full Name", placeholder: "Enter your full name" },
        email: { label: "Email", placeholder: "Enter your email address" },
        phone: { label: "Phone Number", placeholder: "Enter your phone number" },
        office: { label: "Select Office", placeholder: "Select an office.", officeOptions: [] },
        subject: { label: "Subject", placeholder: "Enter subject", subjectOptions: [] },
        message: { label: "Message", placeholder: "Please include the product name and order number you're inquiring about" },
        files: { label: "Attach Files", uploadLabelLimit: "Attach up to 10 files. Maximum size per file is 10 MB." },
        formFooter: { text: "This site is protected by reCAPTCHA Enterprise and the Google", privacyPolicyLabel: "Privacy Policy", privacyPolicyLink: "/privacy-policy", termsOfServiceLabel: "Terms of Service", termsOfServiceLink: "/terms-conditions" }
      },
      submitButton: "Submit",
      validation: { fullNameRequired: "Full name is required", fullNameMinLength: "Full name must be at least 2 characters", emailRequired: "Email is required", emailInvalid: "Please enter a valid email address", phoneRequired: "Phone number is required", phoneInvalid: "Please enter a valid phone number", officeRequired: "Please select an office", subjectRequired: "Subject is required", subjectMinLength: "Subject must be at least 3 characters", messageRequired: "Message is required", messageMinLength: "Message must be at least 10 characters", filesTooLarge: "File size exceeds allowed limit", invalidFileType: "Unsupported file format" },
      alerts: { success: "Thank you! Your message has been submitted successfully.", error: "Something went wrong. Please try again later." }
    }
  }

  if (!section) {
    return fallback
  }

  const items = section.items || []
  const companyItem = items.find(item => item.name === 'company')
  const formItem = items.find(item => item.name === 'contact-form')
  const validationItem = items.find(item => item.name === 'validation')
  const alertsItem = items.find(item => item.name === 'alerts')
  
  // Resolve offices
  const officeItems = items.filter(item => item.name?.startsWith('office-'))
  let resolvedOffices = fallback.offices
  if (officeItems.length > 0) {
    resolvedOffices = officeItems.map(item => {
      const fallbackOffice = fallback.offices.find(o => o.city?.toLowerCase() === item.title?.toLowerCase())
      let badgeClass = 'badge-regional'
      if (item.subtitle === 'Head Office') badgeClass = 'badge-head'
      else if (item.subtitle === 'Warehouse') badgeClass = 'badge-warehouse'
      else if (fallbackOffice?.badgeClass) badgeClass = fallbackOffice.badgeClass

      return {
        id: item.title?.toLowerCase() || '',
        city: item.title || '',
        type: item.subtitle || '',
        badgeClass,
        image: fallbackOffice?.image || '/img/bg/contact-us.png',
        addressLabel: 'Address',
        address: item.extraData?.address || '',
        phoneLabel: 'Phone',
        phone: item.extraData?.phone || '',
        mobile: item.extraData?.mobile || null,
        emailLabel: 'Email',
        email: item.extraData?.email || '',
        workingHoursLabel: 'Working Hours',
        workingHours: item.extraData?.workingHours || '',
        mapLabel: '📍 View on Google Maps →',
        mapLink: item.extraData?.mapLink || ''
      }
    })
  }

  return {
    company: {
      name: companyItem?.title || fallback.company.name,
      description: companyItem?.description || fallback.company.description
    },
    offices: resolvedOffices,
    contactForm: {
      title: formItem?.title || fallback.contactForm.title,
      fields: {
        fullName: {
          label: formItem?.extraData?.fields?.fullName?.label || fallback.contactForm.fields.fullName.label,
          placeholder: formItem?.extraData?.fields?.fullName?.placeholder || fallback.contactForm.fields.fullName.placeholder
        },
        email: {
          label: formItem?.extraData?.fields?.email?.label || fallback.contactForm.fields.email.label,
          placeholder: formItem?.extraData?.fields?.email?.placeholder || fallback.contactForm.fields.email.placeholder
        },
        phone: {
          label: formItem?.extraData?.fields?.phone?.label || fallback.contactForm.fields.phone.label,
          placeholder: formItem?.extraData?.fields?.phone?.placeholder || fallback.contactForm.fields.phone.placeholder
        },
        office: {
          label: formItem?.extraData?.fields?.office?.label || fallback.contactForm.fields.office.label,
          placeholder: formItem?.extraData?.fields?.office?.placeholder || fallback.contactForm.fields.office.placeholder,
          officeOptions: formItem?.extraData?.fields?.office?.options?.map(opt => ({ label: opt, value: opt + ' Office' })) || fallback.contactForm.fields.office.officeOptions
        },
        subject: {
          label: formItem?.extraData?.fields?.subject?.label || fallback.contactForm.fields.subject.label,
          placeholder: formItem?.extraData?.fields?.subject?.placeholder || fallback.contactForm.fields.subject.placeholder,
          subjectOptions: formItem?.extraData?.fields?.subject?.options?.map(opt => ({ label: opt, value: opt })) || fallback.contactForm.fields.subject.subjectOptions
        },
        message: {
          label: formItem?.extraData?.fields?.message?.label || fallback.contactForm.fields.message.label,
          placeholder: formItem?.extraData?.fields?.message?.placeholder || fallback.contactForm.fields.message.placeholder
        },
        files: {
          label: formItem?.extraData?.fields?.files?.label || fallback.contactForm.fields.files.label,
          uploadLabelLimit: formItem?.extraData?.fields?.files?.uploadLimitText || fallback.contactForm.fields.files.uploadLabelLimit
        },
        formFooter: {
          text: formItem?.extraData?.footer?.text || fallback.contactForm.fields.formFooter.text,
          privacyPolicyLabel: formItem?.extraData?.footer?.privacyPolicyLabel || fallback.contactForm.fields.formFooter.privacyPolicyLabel,
          privacyPolicyLink: formItem?.extraData?.footer?.privacyPolicyLink || fallback.contactForm.fields.formFooter.privacyPolicyLink,
          termsOfServiceLabel: formItem?.extraData?.footer?.termsOfServiceLabel || fallback.contactForm.fields.formFooter.termsOfServiceLabel,
          termsOfServiceLink: formItem?.extraData?.footer?.termsOfServiceLink || fallback.contactForm.fields.formFooter.termsOfServiceLink
        }
      },
      submitButton: formItem?.buttonText || fallback.contactForm.submitButton,
      validation: {
        fullNameRequired: validationItem?.extraData?.fullNameRequired || fallback.contactForm.validation.fullNameRequired,
        fullNameMinLength: validationItem?.extraData?.fullNameMinLength || fallback.contactForm.validation.fullNameMinLength,
        emailRequired: validationItem?.extraData?.emailRequired || fallback.contactForm.validation.emailRequired,
        emailInvalid: validationItem?.extraData?.emailInvalid || fallback.contactForm.validation.emailInvalid,
        phoneRequired: validationItem?.extraData?.phoneRequired || fallback.contactForm.validation.phoneRequired,
        phoneInvalid: validationItem?.extraData?.phoneInvalid || fallback.contactForm.validation.phoneInvalid,
        officeRequired: validationItem?.extraData?.officeRequired || fallback.contactForm.validation.officeRequired,
        subjectRequired: validationItem?.extraData?.subjectRequired || fallback.contactForm.validation.subjectRequired,
        subjectMinLength: validationItem?.extraData?.subjectMinLength || fallback.contactForm.validation.subjectMinLength,
        messageRequired: validationItem?.extraData?.messageRequired || fallback.contactForm.validation.messageRequired,
        messageMinLength: validationItem?.extraData?.messageMinLength || fallback.contactForm.validation.messageMinLength,
        filesTooLarge: validationItem?.extraData?.filesTooLarge || fallback.contactForm.validation.filesTooLarge,
        invalidFileType: validationItem?.extraData?.invalidFileType || fallback.contactForm.validation.invalidFileType
      },
      alerts: {
        success: alertsItem?.extraData?.success || fallback.contactForm.alerts.success,
        error: alertsItem?.extraData?.error || fallback.contactForm.alerts.error
      }
    }
  }
})

const activeOffice = computed(() => {
  return contact.value?.offices?.find(
    office => office.id === activeTab.value
  )
})

const toast = useToast()

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const activeTab = ref('jalandhar')

// Form state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('') // 'success' or 'error'

// Form data
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  office: '',
  subject: '',
  message: '',
  files: []
})

// Form validation
const errors = ref({})

const validateForm = () => {
  errors.value = {}
  const v = contact.value?.contactForm?.validation

  if (!formData.value.fullName.trim()) {
    errors.value.fullName = v?.fullNameRequired || 'Full name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = v?.emailRequired || 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = v?.emailInvalid || 'Please enter a valid email address'
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = v?.phoneRequired || 'Phone number is required'
  } else if (!/^[\d\s\-\+\(\)]{10,15}$/.test(formData.value.phone.trim())) {
    errors.value.phone = v?.phoneInvalid || 'Please enter a valid phone number (10-15 digits)'
  }

  if (!formData.value.office) {
    errors.value.office = v?.officeRequired || 'Please select an office'
  }

  if (!formData.value.subject) {
    errors.value.subject = v?.subjectRequired || 'Please select a subject'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = v?.messageRequired || 'Message is required'
  } else if (formData.value.message.trim().length < 10) {
    errors.value.message = v?.messageMinLength || 'Message must be at least 10 characters long'
  }

  return Object.keys(errors.value).length === 0
}

const handleFileUpload = (event) => {
  const target = event.target
  if (target.files) {
    formData.value.files = Array.from(target.files)
  }
}

const resetForm = () => {
  formData.value = {
    fullName: '',
    email: '',
    phone: '',
    office: '',
    subject: '',
    message: '',
    files: []
  }
  errors.value = {}
  submitMessage.value = ''
  submitMessageType.value = ''

  // Reset file input
  const fileInput = document.getElementById('fileUploadInput')
  if (fileInput) {
    fileInput.value = ''
  }
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const { post } = useApi()

    // Create JSON payload matching the backend API format
    const submitData = {
      name: formData.value.fullName,
      email: formData.value.email,
      phone: formData.value.phone,
      office: formData.value.office,
      subject: formData.value.subject,
      message: formData.value.message
    }

    // Make API call to the backend endpoint using the config endpoint
    const { data, error } = await post(API_ENDPOINTS.CONTACT_US, submitData)

    if (error) {
      toast.error({
        message: error
      })
      submitMessage.value = error
      submitMessageType.value = 'error'
    } else {
      toast.success({
        message: 'Your message has been sent successfully! We will get back to you soon.'
      })
      submitMessage.value = 'Your message has been sent successfully! We will get back to you soon.'
      submitMessageType.value = 'success'
      resetForm()
    }
  } catch (err) {
    toast.error({
      message: err.message || 'Failed to send message. Please try again later.'
    })
    submitMessage.value = 'Failed to send message. Please try again later.'
    submitMessageType.value = 'error'
    console.error('Form submission error:', err)
  } finally {
    isSubmitting.value = false
  }
}
</script>
