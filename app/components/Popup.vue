<template>
      <!-- Popup Modal -->
    <div class="promo-overlay-bg" id="promoModalOverlay">
      <div class="promo-modal-container">
        <button class="promo-close-btn" onclick="closePromoModal()">✕</button>

        <!-- Left Side - Image Section -->
        <div class="promo-image-section">
          <span class="promo-discount-badge">20% Off</span>
          <img
            src="https://forms.seed.com/s3awjbnctc/vendors/c8b36b3f-ffaa-49bf-b9a7-7ff510269cbe/uploads/f7919dd9-9eec-40ea-98fc-39015ef55c24/Lead_Capture_Site_Module_No_SMS_20_Off_General_Product_Desktop_3x.png"
            alt="Seed Products"
            class="promo-product-image"
          />
        </div>

        <!-- Right Side - Form Section -->
        <div class="promo-form-section">
          <h2 class="promo-heading-text">Claim Your 20% Off</h2>
          <p class="promo-subheading-text">
            Sign up to unlock your code, valid for any Seed product.<span
              class="promo-asterisk-symbol"
              >*</span
            >
          </p>

          <form id="promoEmailForm" onsubmit="handlePromoSubmit(event)">
            <input
              type="email"
              class="promo-input-field"
              placeholder="Email Address"
              required
              name="promoEmail"
            />

            <button type="submit" class="promo-submit-btn">Reveal Code</button>

            <p class="promo-consent-text">
              <span class="promo-asterisk-symbol">*</span>By submitting my
              email, I consent to receive marketing emails from Seed.
            </p>
          </form>
        </div>
      </div>
    </div>
</template>