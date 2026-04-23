import { b as useCartStore, c as useAuthCart, e as __nuxt_component_0$3 } from './server.mjs';
import { computed, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useProductStore } from './product-CpHnPbNZ.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
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

const _sfc_main$1 = {
  __name: "AllproductsProducts",
  __ssrInlineRender: true,
  props: {
    products: { type: Array, default: null },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const cartStore = useCartStore();
    const productStore = useProductStore();
    useAuthCart();
    const products = computed(() => props.products ?? productStore.allProducts);
    computed(() => productStore.categories);
    const error = computed(() => productStore.error);
    const loading = computed(() => props.loading || productStore.loading);
    const getProductPricing = (product) => {
      return productStore.getProductPricing(product);
    };
    const getPrimaryImage = (product) => {
      return productStore.getPrimaryImage(product);
    };
    const handleImageError = (event) => {
      event.target.src = "/img/products/img1.png";
    };
    const getCartItem = (productId) => {
      return cartStore.getItemById(productId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "vcn-new-product" }, _attrs))}><div class="container-fluid">`);
      if (error.value) {
        _push(`<div class="alert alert-danger text-center py-5">${ssrInterpolate(error.value)}</div>`);
      } else if (loading.value && products.value.length === 0) {
        _push(`<div class="text-center py-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-2 text-muted">Loading products...</p></div>`);
      } else {
        _push(`<div class="row g-3"><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<div class="col-md-6"><div class="product-card"><div class="product-image-wrapper"><span class="product-badge">NEW</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product-details/${product.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", getPrimaryImage(product))}${ssrRenderAttr("alt", product.name)} class="product-image" loading="eager"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: getPrimaryImage(product),
                    alt: product.name,
                    class: "product-image",
                    loading: "eager",
                    onError: ($event) => handleImageError($event)
                  }, null, 40, ["src", "alt", "onError"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="product-content"><span class="product-label">AGE 18+</span>`);
          if (product.label) {
            _push(`<span class="product-label">${ssrInterpolate(product.label)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product-details/${product.slug}`,
            class: "product-title-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="product-title"${_scopeId}>${ssrInterpolate(product.name)}</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "product-title" }, toDisplayString(product.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="product-description">${(product.description || "Premium product for your wellness needs") ?? ""}</p><div class="product-price">`);
          if (getProductPricing(product).oldPrice) {
            _push(`<!--[--> ₹${ssrInterpolate(getProductPricing(product).price)}<!--]-->`);
          } else {
            _push(`<!--[--> ₹${ssrInterpolate(getProductPricing(product).price)}<!--]-->`);
          }
          _push(`</div><div class="product-actions"><a${ssrRenderAttr("href", `/product-details/${product.slug}`)} class="btn-learn">Learn More</a><div class="cart-box">`);
          if (!getCartItem(product.id)) {
            _push(`<a href="#" class="btn-cart add-btn"> Add to Cart </a>`);
          } else {
            _push(`<div class="qty-box"><button class="qty-btn minus"> − </button><span class="qty-value">${ssrInterpolate(getCartItem(product.id)?.quantity || 1)}</span><button class="qty-btn plus"> + </button></div>`);
          }
          _push(`</div></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/allproducts/Products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/about/about-3.webp");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const products = computed(() => productStore.allProducts);
    const error = computed(() => productStore.error);
    productStore.fetchProducts();
    const getProductPricing = (product) => {
      return productStore.getProductPricing(product);
    };
    const getPrimaryImage = (product) => {
      return productStore.getPrimaryImage(product);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_allproductsProducts = _sfc_main$1;
      _push(`<!--[--><div class="vcn-breadcrumb-container"><div class="vcn-breadcrumb-bg"></div><div class="vcn-breadcrumb-overlay"></div><div class="vcn-breadcrumb-content"><h1 class="vcn-breadcrumb-title"> Whole Body Health, Made Possible by Your Microbiome </h1></div></div><section class="vcn-product-section py-5"><div class="container-fluid">`);
      if (error.value) {
        _push(`<div class="alert alert-danger text-center py-5">${ssrInterpolate(error.value.message || error.value)}</div>`);
      } else {
        _push(`<div class="row g-4">`);
        if (products.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList([products.value[0]], (product) => {
            _push(`<div class="col-lg-9"><div class="vcn-product-card row align-items-center h-100"><div class="col-lg-4 position-relative"><div class="vcn-product-image text-center"><img${ssrRenderAttr("src", getPrimaryImage(product))}${ssrRenderAttr("alt", product.name)} class="vcn-product-bottle" loading="lazy"></div></div><div class="col-lg-8">`);
            if (product.isNew) {
              _push(`<span class="vcn-whole-body-product-label">NEW</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="vcn-whole-body-product-label">Bestseller</span>`);
            if (product.label) {
              _push(`<span class="vcn-whole-body-product-label">${ssrInterpolate(product.label)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<h2 class="vcn-product-title">${ssrInterpolate(product.name)}</h2><p class="vcn-product-description">${(product.description || "Premium product for your wellness needs") ?? ""}</p><div class="vcn-product-price">₹${ssrInterpolate(getProductPricing(product).price)}</div><div class="vcn-product-buttons"><a${ssrRenderAttr("href", `/product-details/${product.slug}`)} class="vcn-btn-secondary"> Learn More </a></div></div></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-lg-3"><div class="vcn-image-section h-100"><img${ssrRenderAttr("src", _imports_0)} alt="Fresh produce" class="vcn-bg-image"><div class="vcn-image-overlay"><p class="vcn-image-text"> Is VCN-01 the right probiotic for you? Take the Quiz </p></div></div></div></div>`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_allproductsProducts, {
        products: products.value,
        loading: unref(productStore).loading
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all-products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B7esmK1O.mjs.map
