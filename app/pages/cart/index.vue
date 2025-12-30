<template>
      <div class="cart-main-wrapper">
      <h1 class="cart-page-title">Your Cart</h1>

      <div class="row">
        <div class="col-lg-12">
          <!-- Cart Header -->
          <div class="cart-table-header row">
            <div class="col-6 cart-header-product">Product</div>
            <div class="col-3 cart-header-product text-center">Quantity</div>
            <div class="col-3 cart-header-product text-end">Price</div>
          </div>

          <!-- Cart Item -->
          <div class="cart-item-wrapper row align-items-center">
            <div class="col-lg-6 d-flex align-items-center gap-3">
              <img
                src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755882070/cart/AM-02_80x80.png"
                alt="AM-02™ Energy + Focus"
                class="cart-product-image"
              />
              <div class="cart-product-details">
                <div class="cart-product-name">AM-02™ Energy + Focus</div>
                <div class="cart-product-subscription">Delivered monthly</div>
              </div>
            </div>
            <div class="col-lg-3 text-center mt-3 mt-lg-0">
               <div class="cart-quantity-control">
    <button class="cart-qty-button" onclick="decrementQuantity(this)">−</button>
    <div class="cart-qty-display" data-qty>1</div>
    <button class="cart-qty-button" onclick="incrementQuantity(this)">+</button>
</div>
            </div>
            <div class="col-lg-3 text-end mt-3 mt-lg-0">
              <div class="cart-item-price">
                $<span id="cartItemPrice">34.99</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <!-- Recommendations -->
          <h2 class="cart-recommendations-title">You Might Also Like:</h2>

          <div class="row g-4">
            <div class="col-md-4">
              <div class="cart-product-card">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/v1693433672/cart/DS01_2x.png"
                  alt="DS-01®"
                  class="cart-suggested-image"
                />
                <div class="cart-suggested-name">DS-01®</div>
                <div class="cart-suggested-description">Daily Synbiotic</div>
                <div class="cart-price-wrapper">
                  <span class="cart-current-price">$37.49</span>
                  <span class="cart-original-price">$49.99</span>
                  <a href="/cart" class="cart-add-btn">Add</a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="cart-product-card">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802720/cross-sell-module/dm02-cross-sell.png"
                  alt="DM-02™"
                  class="cart-suggested-image"
                />
                <div class="cart-suggested-name">DM-02™</div>
                <div class="cart-suggested-description">Daily Multivitamin</div>
                <div class="cart-price-wrapper">
                  <span class="cart-current-price">$29.99</span>
                  <span class="cart-original-price">$39.99</span>
                  <a href="/cart" class="cart-add-btn">Add</a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="cart-product-card">
                <img
                  src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802719/cross-sell-module/pm02-cross-sell.png"
                  alt="PM-02™"
                  class="cart-suggested-image"
                />
                <div class="cart-suggested-name">PM-02™</div>
                <div class="cart-suggested-description">Sleep + Restore</div>
                <div class="cart-price-wrapper">
                  <span class="cart-current-price">$26.24</span>
                  <span class="cart-original-price">$34.99</span>
                  <a href="/cart" class="cart-add-btn">Add</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="cart-sidebar-wrapper">
            <!-- Promo Code -->
            <div class="cart-promo-section">
              <div class="cart-promo-label">Promo Code</div>
              <div class="cart-promo-input-group">
                <input
                  type="text"
                  class="cart-promo-input"
                  placeholder="Enter Promo Code"
                />
                <button class="cart-promo-apply-btn">Apply</button>
              </div>
            </div>
            <hr />
            <!-- Total -->
            <div class="cart-total-section">
              <div class="cart-total-row">
                <span class="cart-total-label">Total</span>
                <span class="cart-total-amount"
                  >$<span id="cartTotalAmount">34.99</span></span
                >
              </div>
            </div>

            <!-- Checkout Button -->
            <div class="cart-checkout-btn">
              <a href="/checkout" class="btn">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>