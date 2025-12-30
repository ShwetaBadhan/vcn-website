<template>
      <section class="terms-conditions">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <h1 class="contact-form-title">Contact us</h1>
        </div>

        <div class="contact-form-body">
          <form id="contactFormMain">
            <!-- Full Name Field -->
            <div class="contact-field-wrapper">
              <label class="contact-field-label" for="fullNameField">
                Full name <span class="contact-required-mark">*</span>
              </label>
              <input
                type="text"
                id="fullNameField"
                class="contact-text-input"
                required
              />
            </div>

            <!-- Email Field -->
            <div class="contact-field-wrapper">
              <label class="contact-field-label" for="emailField">
                Email <span class="contact-required-mark">*</span>
              </label>
              <input
                type="email"
                id="emailField"
                class="contact-text-input"
                placeholder="Your Seed account email, if applicable (please check for typos!)"
                required
              />
            </div>

            <!-- Subject Field -->
            <div class="contact-field-wrapper">
              <label class="contact-field-label" for="subjectField">
                Subject <span class="contact-required-mark">*</span>
              </label>
              <div class="contact-select-wrapper">
                <select id="subjectField" class="contact-select-input" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                <span class="contact-select-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    facing="down"
                    class="css-18gudqo er11us50"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                      fill="#AFAFAF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Message Field -->
            <div class="contact-field-wrapper">
              <label class="contact-field-label" for="messageField">
                Message <span class="contact-required-mark">*</span>
              </label>
              <textarea
                id="messageField"
                class="contact-textarea-input"
                placeholder="Please include the product name and order number you're inquiring about 🌱"
                required
              ></textarea>
            </div>

            <!-- File Upload -->
            <div class="contact-field-wrapper">
              <div class="attachment-wrapper">
                <label class="contact-file-upload-area" for="fileUploadInput">
                  <div class="contact-file-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#161616"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.75 5.62496V14.4416C13.75 16.1833 12.475 17.7333 10.7416 17.9C8.74998 18.0916 7.08331 16.5333 7.08331 14.5833V4.28329C7.08331 3.19163 7.86665 2.19996 8.94998 2.09163C10.2 1.96663 11.25 2.94163 11.25 4.16663V12.9166C11.25 13.375 10.875 13.75 10.4166 13.75C9.95831 13.75 9.58331 13.375 9.58331 12.9166V5.62496C9.58331 5.28329 9.29998 4.99996 8.95831 4.99996C8.61665 4.99996 8.33331 5.28329 8.33331 5.62496V12.8C8.33331 13.8916 9.11665 14.8833 10.2 14.9916C11.45 15.1166 12.5 14.1416 12.5 12.9166V4.30829C12.5 2.56663 11.225 1.01663 9.49165 0.849959C7.50831 0.658292 5.83331 2.21663 5.83331 4.16663V14.3916C5.83331 16.7833 7.58331 18.925 9.96665 19.15C12.7083 19.4 15 17.2666 15 14.5833V5.62496C15 5.28329 14.7166 4.99996 14.375 4.99996C14.0333 4.99996 13.75 5.28329 13.75 5.62496Z"
                      ></path>
                    </svg>
                    <span>Attach Files</span>
                  </div>
                </label>
                <input
                  type="file"
                  id="fileUploadInput"
                  class="contact-file-input-hidden"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
              </div>
              <div class="contact-file-info-text">
                Attach up to 10 files. The maximum allowed size per file is 10
                MB.
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="contact-submit-button">Send</button>

            <!-- Footer Text -->
            <p class="contact-footer-text">
              This site is protected by reCAPTCHA Enterprise and the Google
              <a href="#" class="contact-footer-link">Privacy Policy</a> and
              <a href="#" class="contact-footer-link">Terms of Service</a>
              apply.
            </p>
          </form>
        </div>
      </div>
    </section>

</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>