<template>
  <section class="vcn-new-product">
    <div class="container-fluid">
      <div class="row g-3">
        <!-- Product 1: Daily Multivitamin -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img src="/img/products/img1.png" alt="Daily Multivitamin" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">AGE 18+</span>
              <h3 class="product-title">V-SPA FACE SCRUB</h3>
              <p class="product-description">
                Help cover daily nutrient gaps for your whole body with 25
                essential nutrients plus value of 20 assorted vitamins and 10.
              </p>
              <div class="product-price">$39.99</div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('vspa-face-scrub')"
                      @click="addToCart('vspa-face-scrub', 'V-SPA FACE SCRUB', 39.99, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus" @click="cartStore.decrementQuantity('vspa-face-scrub')">−</button>
                      <span class="qty-value">{{ getCartItem('vspa-face-scrub')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('vspa-face-scrub')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 2: Daily Essentials Duo -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img src="/img/products/img1.png" alt="Daily Essentials Duo" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">AGE 18+</span>
              <h3 class="product-title"> V-SPA FACE CLEANSER</h3>
              <p class="product-description">
                Clinically proven probiotic and advanced multivitamin duo for
                daily health.*
              </p>
              <div class="product-price">
                $39.99
                <span class="old-price">$49.98</span>
              </div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('vspa-face-cleanser')"
                      @click="addToCart('vspa-face-cleanser', 'V-SPA FACE CLEANSER', 39.99, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus"
                        @click="cartStore.decrementQuantity('vspa-face-cleanser')">−</button>
                      <span class="qty-value">{{ getCartItem('vspa-face-cleanser')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('vspa-face-cleanser')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 3: Focus + Energy -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <span class="product-badge">NEW</span>
              <img src="/img/products/img1.png" alt="Focus + Energy" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">AGE 18+</span>
              <h3 class="product-title"> V-SPA MASSAGE CREAM</h3>
              <p class="product-description">
                Delivers steady, caffeine-free energy to enhance focus, sharpen
                attention, and help manage stress and fatigue.*
              </p>
              <div class="product-price">$34.99</div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('vspa-massage-cream')"
                      @click="addToCart('vspa-massage-cream', 'V-SPA MASSAGE CREAM', 34.99, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus"
                        @click="cartStore.decrementQuantity('vspa-massage-cream')">−</button>
                      <span class="qty-value">{{ getCartItem('vspa-massage-cream')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('vspa-massage-cream')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 4: Sleep + Restore -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <span class="product-badge">NEW</span>
              <img src="/img/products/img1.png" alt="Sleep + Restore" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">FDA-OTC</span>
              <h3 class="product-title">V-SPA FACE PACK</h3>
              <p class="product-description">
                Provides non-habit forming support for deep, restorative sleep
                and refreshed mornings.*
              </p>
              <div class="product-price">$34.99</div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('vspa-face-pack')"
                      @click="addToCart('vspa-face-pack', 'V-SPA FACE PACK', 34.99, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus" @click="cartStore.decrementQuantity('vspa-face-pack')">−</button>
                      <span class="qty-value">{{ getCartItem('vspa-face-pack')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('vspa-face-pack')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 5: Pediatric Synbiotic -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img src="/img/products/img1.png" alt="Pediatric Synbiotic" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">PBS-08®</span>
              <h3 class="product-title">KLESTRO PREMIUM</h3>
              <p class="product-description">
                Specially formulated for infants, kids, and teens (ages 6-17)
                with 9 probiotic strains + a prebiotic.*
              </p>
              <div class="product-price">$39.99</div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('klestro-premium')"
                      @click="addToCart('klestro-premium', 'KLESTRO PREMIUM', 39.99, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus" @click="cartStore.decrementQuantity('klestro-premium')">−</button>
                      <span class="qty-value">{{ getCartItem('klestro-premium')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('klestro-premium')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 6: Vaginal Synbiotic -->
        <div class="col-md-6">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img src="/img/products/img1.png" alt="Vaginal Synbiotic" class="product-image" />
            </div>
            <div class="product-content">
              <span class="product-label">VB-331™</span>
              <h3 class="product-title">ALPHACARE(SHILAJIT RESIN)</h3>
              <p class="product-description">
                Rapidly establishes a healthy vaginal microbiome to support
                odor, itch, and the vagina's most protective bacteria.*
              </p>
              <div class="product-price">$99.00</div>
              <div class="product-actions">
                <a href="/product-details" class="btn-learn">Learn More</a>
                <div class="cart-box">
                  <ClientOnly>
                    <button v-if="!getCartItem('alphacare-shilajit')"
                      @click="addToCart('alphacare-shilajit', 'ALPHACARE(SHILAJIT RESIN)', 99.00, '/img/products/img1.png')"
                      class="btn-cart add-btn">
                      Add to Cart
                    </button>

                    <div v-else class="qty-box">
                      <button class="qty-btn minus"
                        @click="cartStore.decrementQuantity('alphacare-shilajit')">−</button>
                      <span class="qty-value">{{ getCartItem('alphacare-shilajit')?.quantity || 1 }}</span>
                      <button class="qty-btn plus" @click="cartStore.incrementQuantity('alphacare-shilajit')">+</button>
                    </div>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useAuthCart } from '~/composables/useAuthCart'
import { onMounted } from 'vue'

const cartStore = useCartStore()
const { initializeCart } = useAuthCart()

// Initialize cart data on mount
onMounted(async () => {
  // Initialize cart based on auth state
  await initializeCart()

  // Load cart data from appropriate source
  if (process.client) {
    await cartStore.loadCart()
  }
})

const getCartItem = (productId) => {
  return cartStore.getItemById(productId)
}

const addToCart = (id, name, price, image) => {
  cartStore.addToCart({
    id,
    name,
    price,
    image,
    subscription: 'One-time purchase'
  })
}
</script>