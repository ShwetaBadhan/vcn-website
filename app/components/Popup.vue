<template>
      <!-- Popup Modal -->
    <div class="promo-overlay-bg" id="promoModalOverlay">
      <div class="promo-modal-container">
        <button class="promo-close-btn" onclick="closePromoModal()">✕</button>

        <!-- Left Side - Image Section -->
        <div class="promo-image-section">
          <span class="promo-discount-badge">20% Off</span>
          <img
            src="/img/image/Stories from scientists  644.png"
            alt="VCN Products"
            class="promo-product-image"
          />
        </div>

        <!-- Right Side - Form Section -->
        <div class="promo-form-section">
          <h2 class="promo-heading-text">Claim Your 20% Off</h2>
          <p class="promo-subheading-text">
            Sign up to unlock your code, valid for any VCN product.<span
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
              email, I consent to receive marketing emails from VCN.
            </p>
          </form>
        </div>
      </div>
    </div>
</template>