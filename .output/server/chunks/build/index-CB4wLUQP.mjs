import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, b as useCartStore, c as useAuthCart, u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    useAuthCart();
    const promoInput = ref("");
    useHead({
      bodyAttrs: {
        class: "cart-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-main-wrapper" }, _attrs))} data-v-265e0c1a><h1 class="cart-page-title" data-v-265e0c1a>Your Cart</h1><div class="row" data-v-265e0c1a>`);
      if (unref(cartStore).items.length === 0) {
        _push(`<div class="col-lg-12" data-v-265e0c1a><div class="empty-cart-message" data-v-265e0c1a><h3 data-v-265e0c1a>Your cart is empty</h3><p data-v-265e0c1a>Looks like you haven&#39;t added any products to your cart yet.</p><a href="/all-products" class="btn-learn" data-v-265e0c1a>Continue Shopping</a></div></div>`);
      } else {
        _push(`<div class="col-lg-12" data-v-265e0c1a><div class="cart-table-header row" data-v-265e0c1a><div class="col-6 cart-header-product" data-v-265e0c1a>Product</div><div class="col-3 cart-header-product text-center" data-v-265e0c1a>Quantity</div><div class="col-3 cart-header-product text-end" data-v-265e0c1a>Price</div></div><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<div class="cart-item-wrapper row align-items-center" data-v-265e0c1a><div class="col-lg-6 d-flex align-items-center gap-3" data-v-265e0c1a><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="cart-product-image" data-v-265e0c1a><div class="cart-product-details" data-v-265e0c1a><div class="cart-product-name" data-v-265e0c1a>${ssrInterpolate(item.name)}</div><div class="cart-product-subscription" data-v-265e0c1a>${ssrInterpolate(item.subscription)}</div></div></div><div class="col-lg-3 text-center mt-3 mt-lg-0" data-v-265e0c1a><div class="cart-quantity-control" data-v-265e0c1a><button class="cart-qty-button" data-v-265e0c1a>−</button><div class="cart-qty-display" data-v-265e0c1a>${ssrInterpolate(item.quantity)}</div><button class="cart-qty-button" data-v-265e0c1a>+</button></div></div><div class="col-lg-3 text-end mt-3 mt-lg-0" data-v-265e0c1a><div class="cart-item-price" data-v-265e0c1a>`);
          if (item.mrp) {
            _push(`<span class="cart-item-mrp" data-v-265e0c1a>₹${ssrInterpolate((item.mrp * item.quantity).toFixed(2))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ₹${ssrInterpolate((item.price * item.quantity).toFixed(2))}</div><button class="cart-remove-btn" data-v-265e0c1a> Remove </button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (unref(cartStore).items.length > 0) {
        _push(`<div class="col-lg-8" data-v-265e0c1a><h2 class="cart-recommendations-title" data-v-265e0c1a>You Might Also Like:</h2><div class="row g-4" data-v-265e0c1a><div class="col-md-4" data-v-265e0c1a><div class="cart-product-card" data-v-265e0c1a><img src="https://res.cloudinary.com/dljz0lko8/image/upload/v1693433672/cart/DS01_2x.png" alt="VCN-01" class="cart-suggested-image" data-v-265e0c1a><div class="cart-suggested-name" data-v-265e0c1a>VCN-01</div><div class="cart-suggested-description" data-v-265e0c1a>Daily Synbiotic</div><div class="cart-price-wrapper" data-v-265e0c1a><span class="cart-current-price" data-v-265e0c1a>$37.49</span><span class="cart-original-price" data-v-265e0c1a>$49.99</span><button class="cart-add-btn" data-v-265e0c1a> Add </button></div></div></div><div class="col-md-4" data-v-265e0c1a><div class="cart-product-card" data-v-265e0c1a><img src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802720/cross-sell-module/dm02-cross-sell.png" alt="DM-02™" class="cart-suggested-image" data-v-265e0c1a><div class="cart-suggested-name" data-v-265e0c1a>DM-02™</div><div class="cart-suggested-description" data-v-265e0c1a>Daily Multivitamin</div><div class="cart-price-wrapper" data-v-265e0c1a><span class="cart-current-price" data-v-265e0c1a>$29.99</span><span class="cart-original-price" data-v-265e0c1a>$39.99</span><button class="cart-add-btn" data-v-265e0c1a> Add </button></div></div></div><div class="col-md-4" data-v-265e0c1a><div class="cart-product-card" data-v-265e0c1a><img src="https://res.cloudinary.com/dljz0lko8/image/upload/v1755802719/cross-sell-module/pm02-cross-sell.png" alt="PM-02™" class="cart-suggested-image" data-v-265e0c1a><div class="cart-suggested-name" data-v-265e0c1a>PM-02™</div><div class="cart-suggested-description" data-v-265e0c1a>Sleep + Restore</div><div class="cart-price-wrapper" data-v-265e0c1a><span class="cart-current-price" data-v-265e0c1a>$26.24</span><span class="cart-original-price" data-v-265e0c1a>$34.99</span><button class="cart-add-btn" data-v-265e0c1a> Add </button></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cartStore).items.length > 0) {
        _push(`<div class="col-lg-4" data-v-265e0c1a><div class="cart-sidebar-wrapper" data-v-265e0c1a><div class="cart-promo-section" data-v-265e0c1a><div class="cart-promo-label" data-v-265e0c1a>Promo Code</div><div class="cart-promo-input-group" data-v-265e0c1a><input type="text"${ssrRenderAttr("value", promoInput.value)} class="cart-promo-input" placeholder="Enter Promo Code" data-v-265e0c1a><button class="cart-promo-apply-btn"${ssrIncludeBooleanAttr(!promoInput.value.trim()) ? " disabled" : ""} data-v-265e0c1a> Apply </button></div>`);
        if (unref(cartStore).promoCode) {
          _push(`<div class="promo-applied" data-v-265e0c1a><span class="promo-success" data-v-265e0c1a>Promo code applied: ${ssrInterpolate(unref(cartStore).promoCode)}</span><button class="promo-remove" data-v-265e0c1a>Remove</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><hr data-v-265e0c1a><div class="cart-total-section" data-v-265e0c1a>`);
        if (unref(cartStore).discount > 0) {
          _push(`<div class="cart-total-row" data-v-265e0c1a><span class="cart-total-label" data-v-265e0c1a>Subtotal</span><span class="cart-total-amount" data-v-265e0c1a>$${ssrInterpolate(unref(cartStore).cartSubtotal.toFixed(2))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(cartStore).discount > 0) {
          _push(`<div class="cart-total-row" data-v-265e0c1a><span class="cart-total-label" data-v-265e0c1a>Discount</span><span class="cart-total-amount discount" data-v-265e0c1a>-$${ssrInterpolate(unref(cartStore).discount.toFixed(2))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="cart-total-row" data-v-265e0c1a><span class="cart-total-label" data-v-265e0c1a>Total</span><span class="cart-total-amount" data-v-265e0c1a>$${ssrInterpolate(unref(cartStore).cartTotal.toFixed(2))}</span></div></div><div class="cart-checkout-btn" data-v-265e0c1a><a href="/checkout" class="btn" data-v-265e0c1a>Checkout</a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-265e0c1a"]]);

export { index as default };
//# sourceMappingURL=index-CB4wLUQP.mjs.map
