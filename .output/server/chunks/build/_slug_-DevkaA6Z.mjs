import { u as useHead, _ as _export_sfc, b as useCartStore, c as useAuthCart, g as useRoute, a as __nuxt_component_0$4 } from './server.mjs';
import { mergeProps, ref, computed, withAsyncContext, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useProductStore } from './product-CpHnPbNZ.mjs';
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

const _imports_0$5 = publicAssetsURL("/img/productsdetails/comonimages2.png");
const _imports_1$3 = publicAssetsURL("/img/productsdetails/ds-01.png");
const _imports_2$2 = publicAssetsURL("/img/productsdetails/comonimages4.png");
const _imports_0$4 = publicAssetsURL("/img/productsdetails/dbtpageimage( 424by24 ).png");
const _imports_4 = publicAssetsURL("/img/icons/stars.png");
const _sfc_main$b = {
  __name: "ProductDetailsIntroduction",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCartStore();
    const productStore = useProductStore();
    useAuthCart();
    const route = useRoute();
    const activeIndex = ref(null);
    const product = ref(null);
    const loading = ref(true);
    const error = ref("");
    const productSlug = computed(() => route.params.slug);
    if (productSlug.value) {
      const result = ([__temp, __restore] = withAsyncContext(() => productStore.fetchProductBySlug(productSlug.value)), __temp = await __temp, __restore(), __temp);
      if (result.success && productStore.selectedProduct) {
        const productData = Array.isArray(productStore.selectedProduct) ? productStore.selectedProduct[0] : productStore.selectedProduct;
        product.value = productData;
      } else {
        error.value = result.error || "Product not found";
      }
      loading.value = false;
    } else {
      error.value = "No product slug provided";
      loading.value = false;
    }
    const selectedVariant = ref(null);
    const hasVariants = computed(() => product.value?.variants?.length > 0);
    const productName = computed(() => product.value?.name || "Product");
    const productDescription = computed(() => product.value?.description || "");
    const productPrice = computed(() => {
      const variant = selectedVariant.value || product.value?.variants?.find((v) => v.isDefault) || product.value?.variants?.[0];
      const price = variant?.sellingPrice;
      return price ? parseFloat(price).toFixed(2) : "0.00";
    });
    const productMrp = computed(() => {
      const variant = selectedVariant.value || product.value?.variants?.find((v) => v.isDefault) || product.value?.variants?.[0];
      const mrp = variant?.mrp;
      return mrp ? parseFloat(mrp).toFixed(2) : null;
    });
    const productImage = computed(() => {
      if (product.value?.images && product.value.images.length > 0) {
        const primaryImage = product.value.images.find((img) => img.isPrimary) || product.value.images[0];
        if (primaryImage?.image) return primaryImage.image;
      }
      if (product.value?.variants && product.value.variants.length > 0) {
        const defaultVariant = product.value.variants.find((v) => v.isDefault) || product.value.variants[0];
        if (defaultVariant?.productImages && defaultVariant.productImages.length > 0) {
          const primaryImage = defaultVariant.productImages.find((img) => img.isPrimary) || defaultVariant.productImages[0];
          if (primaryImage?.image) return primaryImage.image;
        }
      }
      return product.value?.image || "/img/products/New-Project.png";
    });
    watch(() => product.value, (newProduct) => {
      if (newProduct?.variants?.length) {
        const defaultVariant = newProduct.variants.find((v) => v.isDefault) || newProduct.variants[0];
        selectedVariant.value = defaultVariant;
      }
    }, { immediate: true });
    const bundleInCart = ref(false);
    computed(() => {
      return bundleInCart.value;
    });
    const accordionItems = computed(() => {
      if (!product.value) return [];
      const items = [];
      if (product.value.uses) {
        items.push({
          title: "Uses *",
          content: product.value.uses.split(/[,.]\s*/).filter((item) => item.trim())
        });
      }
      if (product.value.directionsForUse) {
        items.push({
          title: "Direction For Use",
          content: [product.value.directionsForUse]
        });
      }
      if (product.value.cautions) {
        items.push({
          title: "Cautions",
          content: [product.value.cautions]
        });
      }
      if (product.value.primaryBenefits) {
        items.push({
          title: "Primary Benefits",
          content: product.value.primaryBenefits.split(/[,.]\s*/).filter((item) => item.trim())
        });
      }
      if (product.value.ingredients) {
        items.push({
          title: "Ingredients",
          content: [product.value.ingredients]
        });
      }
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section" }, _attrs))} data-v-d2e8c78e><div class="container-fluid" data-v-d2e8c78e><div class="row" data-v-d2e8c78e><div class="col-lg-7" data-v-d2e8c78e><div class="product-img-wrapper" data-v-d2e8c78e><div class="product-image-cards" style="${ssrRenderStyle({ "max-height": "500px", "overflow": "hidden", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-d2e8c78e><img id="mainImage"${ssrRenderAttr("src", productImage.value)}${ssrRenderAttr("alt", productName.value)} style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "width": "auto", "height": "auto", "object-fit": "contain" })}" data-v-d2e8c78e></div></div><div class="row mt-3" data-v-d2e8c78e><div class="col-6 mb-3" data-v-d2e8c78e><div class="product-gallery" data-v-d2e8c78e><div class="gallery-item" data-v-d2e8c78e><img class="thumb"${ssrRenderAttr("src", _imports_0$5)} data-v-d2e8c78e></div></div></div><div class="col-6 mb-3" data-v-d2e8c78e><div class="product-gallery" data-v-d2e8c78e><div class="gallery-item" data-v-d2e8c78e><img class="thumb"${ssrRenderAttr("src", _imports_1$3)} data-v-d2e8c78e></div></div></div><div class="col-6 mb-3" data-v-d2e8c78e><div class="product-gallery" data-v-d2e8c78e><div class="gallery-item" data-v-d2e8c78e><img class="thumb"${ssrRenderAttr("src", _imports_2$2)} data-v-d2e8c78e></div></div></div><div class="col-6 mb-3" data-v-d2e8c78e><div class="product-gallery" data-v-d2e8c78e><div class="gallery-item" data-v-d2e8c78e><img class="thumb"${ssrRenderAttr("src", _imports_0$4)} data-v-d2e8c78e></div></div></div></div></div><div class="col-lg-5" data-v-d2e8c78e><div class="product-info" data-v-d2e8c78e>`);
      if (error.value) {
        _push(`<div class="alert alert-warning" data-v-d2e8c78e>${ssrInterpolate(error.value)}</div>`);
      } else if (product.value) {
        _push(`<!--[--><h1 class="product-details-title" data-v-d2e8c78e>${ssrInterpolate(productName.value)}</h1><div class="rating-section" data-v-d2e8c78e><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-d2e8c78e><span class="rating-text" data-v-d2e8c78e>4.8 • (10069 Reviews)</span></div><p class="product-details-description" data-v-d2e8c78e>${productDescription.value ?? ""}</p>`);
        if (hasVariants.value) {
          _push(`<div class="variant-section mt-3 mb-3" data-v-d2e8c78e><label class="variant-label" data-v-d2e8c78e>Select Variant:</label><div class="variant-options" data-v-d2e8c78e><!--[-->`);
          ssrRenderList(product.value.variants, (v) => {
            _push(`<button class="${ssrRenderClass([{ "variant-btn--active": selectedVariant.value?.id === v.id }, "variant-btn"])}" data-v-d2e8c78e><span class="variant-sku" data-v-d2e8c78e>${ssrInterpolate(v.sku)}</span>`);
            if (v.weight) {
              _push(`<span class="variant-weight" data-v-d2e8c78e>${ssrInterpolate(v.weight)} ${ssrInterpolate(v.unit?.name || "ml")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="variant-price" data-v-d2e8c78e>₹${ssrInterpolate(v.sellingPrice)}</span>`);
            if (v.mrp && v.mrp !== v.sellingPrice) {
              _push(`<span class="variant-mrp" data-v-d2e8c78e>₹${ssrInterpolate(v.mrp)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</button>`);
          });
          _push(`<!--]--></div>`);
          if (selectedVariant.value) {
            _push(`<div class="variant-info mt-2" data-v-d2e8c78e><span class="variant-sku-display" data-v-d2e8c78e>SKU: ${ssrInterpolate(selectedVariant.value.sku)}</span>`);
            if (selectedVariant.value.weight) {
              _push(`<span class="variant-weight-display" data-v-d2e8c78e>Weight: ${ssrInterpolate(selectedVariant.value.weight)} ${ssrInterpolate(selectedVariant.value.unit?.name || "ml")}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.value.discountValue > 0) {
              _push(`<span class="variant-discount" data-v-d2e8c78e>${ssrInterpolate(product.value.discountValue)}${ssrInterpolate(product.value.discountType === "PERCENTAGE" ? "%" : "₹")} OFF</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vcn-cobiotics-badge" data-v-d2e8c78e>Bundle + Save 25%</span><div class="price-section" data-v-d2e8c78e><span class="current-price" data-v-d2e8c78e>₹${ssrInterpolate(productPrice.value)}</span>`);
        if (productMrp.value && productMrp.value !== productPrice.value) {
          _push(`<span class="old-price" data-v-d2e8c78e>₹${ssrInterpolate(productMrp.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="delivery-info" data-v-d2e8c78e> 30-day supply delivered monthly. <br data-v-d2e8c78e> Pause or cancel anytime. </div><a href="cart" class="btn-start-now" data-v-d2e8c78e>Start Now</a><p class="subscribe-text" data-v-d2e8c78e> 30-day risk-free guarantee. Free US shipping. </p><div class="vcn-accordion" data-v-d2e8c78e><!--[-->`);
      ssrRenderList(accordionItems.value, (item, index) => {
        _push(`<div class="vcn-acc-item" data-v-d2e8c78e><button type="button" class="vcn-acc-header" data-v-d2e8c78e>${ssrInterpolate(item.title)} <span class="vcn-acc-icon" data-v-d2e8c78e>${ssrInterpolate(activeIndex.value === index ? "−" : "+")}</span></button>`);
        if (activeIndex.value === index) {
          _push(`<div class="vcn-acc-body" data-v-d2e8c78e><ul class="vcn-benefits-list" data-v-d2e8c78e><!--[-->`);
          ssrRenderList(item.content, (point, i) => {
            _push(`<li data-v-d2e8c78e>${ssrInterpolate(point)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="bundle-card mt-5" data-v-d2e8c78e><div class="bundle-image" data-v-d2e8c78e><img src="https://assets.embeddables.com/Frame1739331849_5922073548695651.png" alt="DM-02 Daily Multivitamin" data-v-d2e8c78e></div><div class="bundle-content" data-v-d2e8c78e><h3 data-v-d2e8c78e>Bundle + Save 25%</h3><p data-v-d2e8c78e> Add DM-02™ Daily Multivitamin to your routine and save on your first order. </p><div class="bundle-price" data-v-d2e8c78e><span class="current-price" data-v-d2e8c78e>$67.48</span><span class="original-price" data-v-d2e8c78e>$89.98</span></div></div><div class="bundle-action" data-v-d2e8c78e>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/Introduction.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d2e8c78e"]]);
const _imports_0$3 = publicAssetsURL("/img/icons/icon-1.png");
const _imports_1$2 = publicAssetsURL("/img/icons/icon-2.png");
const _imports_2$1 = publicAssetsURL("/img/icons/icon-4.png");
const _sfc_main$a = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "health-section-bg" }, _attrs))}><div class="health-section"><div class="container"><h4>Your body needs natural Ayurvedic support to fight diabetes.</h4><h1 class="mb-5"> DBT Care Plus is the herbal juice <br> to fuel your body and control blood sugar. </h1></div><div class="container-fluid"><div class="feature-top"><div class="feature-bg"><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="feature-card"><div class="icon-wrapper"><img${ssrRenderAttr("src", _imports_0$3)} alt="Blood Sugar Control"></div><h3 class="feature-title">Blood Sugar Control</h3><p class="feature-description"> Karela, Gurmar &amp; Neem actively reduce high blood glucose levels and improve insulin sensitivity from Day 1.* </p></div></div><div class="col-lg-4 col-md-6"><div class="feature-card"><div class="icon-wrapper"><img${ssrRenderAttr("src", _imports_1$2)} alt="Detox &amp; Purification"></div><h3 class="feature-title">Detox &amp; Blood Purification</h3><p class="feature-description"> Vijayasar &amp; Punarnava remove toxins from the body, purify the blood and support liver and kidney health.* </p></div></div><div class="col-lg-4 col-md-6"><div class="feature-card"><div class="icon-wrapper"><img${ssrRenderAttr("src", _imports_2$1)} alt="Symptom Relief"></div><h3 class="feature-title">Diabetic Symptom Relief</h3><p class="feature-description"> Giloy &amp; Jamun relieve excessive thirst, frequent urination, tiredness and weak eyesight caused by diabetes.* </p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/HealthSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$5]]), { __name: "ProductDetailsHealthSection" });
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "health-section-bg" }, _attrs))}><div class="row mt-5"><div class="col-lg-3 health-section-below d-flex align-items-center justify-content-center"><video${ssrRenderAttr("src", "")} class="video-centered" autoplay muted loop playsinline></video></div><div class="col-lg-9"><div class="ds01-viacap-hero-area-below"><div class="vcn-probiotic-container"><div class="vcn-probiotic-content-wrapper"><div class="vcn-probiotic-left-content"><h2 class="alternate-heading"> 2-in-1 Ayurvedic Formula Optimized for Complete Diabetic Wellness </h2><div class="vcn-probiotic-callout-text"> DBT Care Plus unique herbal blend is engineered for targeted action — controlling blood sugar while healing the body from within. </div></div><div class="vcn-probiotic-right-content"><div class="vcn-probiotic-product-display"><div class="vcn-probiotic-callout alternative-callout-top"><div class="vcn-probiotic-callout-title"> Blood Sugar Control Blend — For Immediate Relief </div><div class="vcn-probiotic-callout-text"> Karela, Gurmar, Neem &amp; Vijayasar actively reduce high blood glucose levels, stimulate insulin production and purify the blood from Day 1.* </div></div><div class="alternate-image"><img src="https://assets.embeddables.com/dm-viacap-static_5796638597731362.png" class="w-100" alt=""></div><div class="vcn-probiotic-callout alternative-callout-bottom"><div class="vcn-probiotic-callout-title"> Organ Repair &amp; Detox Blend — For Long Term Wellness </div><div class="vcn-probiotic-callout-text"> Shudh Shilajit, Punarnava, Aloe Vera &amp; Chirata repair damaged pancreatic cells, detoxify the body and support liver, kidney and eye health over time.* </div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/FormulationSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]), { __name: "ProductDetailsFormulationSection" });
const _imports_0$2 = publicAssetsURL("/img/productsdetails/BOOSTER.png");
const _sfc_main$8 = {
  __name: "ProductDetailsBundleSection",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    useAuthCart();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "health-section-bg" }, _attrs))} data-v-3633a033><div class="routine-bundle-wrapper" data-v-3633a033><div class="container routine-bundle-container" data-v-3633a033><div class="row align-items-center g-4 g-lg-5" data-v-3633a033><div class="col-lg-6 routine-products-column" data-v-3633a033><div class="routine-wrapper" data-v-3633a033><img class="routine-main-image booster"${ssrRenderAttr("src", _imports_0$2)} alt="routine products" data-v-3633a033><div class="label-block label-1" data-v-3633a033><div class="routine-product-label" data-v-3633a033> DELIVERS BENEFICIAL BACTERIA </div><div class="routine-label-connector" data-v-3633a033></div></div><div class="label-block label-2" data-v-3633a033><div class="routine-product-label" data-v-3633a033>NOURISHES THE BACTERIA</div><div class="routine-label-connector" data-v-3633a033></div></div></div></div><div class="col-lg-6 routine-content-column" data-v-3633a033><h2 class="routine-main-heading" data-v-3633a033> Natural Blood Sugar Control Bundle </h2><div class="routine-product-description" data-v-3633a033><h3 class="routine-product-name" data-v-3633a033> DBT Care Plus — Blood Sugar Control Bundle: </h3><p class="routine-product-details" data-v-3633a033>${`11 powerful Ayurvedic herbs to regulate blood sugar levels,
                improve glucose metabolism, and support overall diabetic
                wellness.*`}</p></div><div class="routine-product-description mb-4" data-v-3633a033><h3 class="routine-product-name" data-v-3633a033> VCN DBT Care Plus — Herbal Juice: </h3><p class="routine-product-details" data-v-3633a033>${`A unique blend of Karela, Jamun, Giloy & more to detoxify the
                body, purify blood, and naturally manage diabetes symptoms.*`}</p></div><div class="row" data-v-3633a033><div class="col-lg-6" data-v-3633a033><a href="product-details" class="routine-cta-button" data-v-3633a033>Add Bundle • Save 25%</a></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/BundleSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3633a033"]]);
const _imports_1$1 = publicAssetsURL("/img/productsdetails/dbtpage.png");
const _imports_2 = publicAssetsURL("/img/productsdetails/DBTFRST.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid py-5 health-section-bg" }, _attrs))} data-v-8c40b958><div class="text-center mb-4" data-v-8c40b958><h1 class="section-title-timeline" data-v-8c40b958>11 Herbs. One Journey. Complete Diabetic Wellness.</h1><p class="section-subtitle" data-v-8c40b958> Designed for daily use, DBT Care Plus replenishes your body with 11 powerful Ayurvedic herbs to build complete diabetic wellness over time.* </p></div><div class="row g-4" data-v-8c40b958><div class="col-lg-5" data-v-8c40b958><div class="timeline" data-v-8c40b958><div class="timeline-item" data-v-8c40b958><span class="timeline-header" data-v-8c40b958>Day 1</span><span class="timeline-title" data-v-8c40b958>Begins Blood Sugar Regulation*</span><div class="timeline-body" data-v-8c40b958><ul class="list-unstyled" data-v-8c40b958><li data-v-8c40b958>Karela &amp; Neem start reducing high blood glucose levels</li><li data-v-8c40b958>Helps improve insulin sensitivity from day one</li><li data-v-8c40b958>Supports glucose metabolism throughout the body</li></ul></div></div><div class="timeline-item" data-v-8c40b958><span class="timeline-header" data-v-8c40b958>Week 2</span><span class="timeline-title" data-v-8c40b958>Reduces Diabetic Symptoms*</span><div class="timeline-body" data-v-8c40b958><ul class="list-unstyled" data-v-8c40b958><li data-v-8c40b958>Reduces excessive thirst and frequent urination</li><li data-v-8c40b958>Giloy &amp; Jamun help improve body strength and energy</li><li data-v-8c40b958>Begins relieving tiredness and fatigue</li></ul></div></div><div class="timeline-item" data-v-8c40b958><span class="timeline-header" data-v-8c40b958>Week 4</span><span class="timeline-title" data-v-8c40b958>Detox &amp; Blood Purification*</span><div class="timeline-body" data-v-8c40b958><ul class="list-unstyled" data-v-8c40b958><li data-v-8c40b958>Vijayasar &amp; Punarnava remove toxins from the body</li><li data-v-8c40b958>Kidney and liver function visibly improves</li><li data-v-8c40b958>Blood purification supports overall diabetic health</li></ul></div></div></div><div class="how-to-use-card" data-v-8c40b958><div class="capsule-icon" data-v-8c40b958><img src="https://assets.embeddables.com/Frame1739334303_8303615376202479.png" alt="" data-v-8c40b958></div><div data-v-8c40b958><h6 class="how-to-use-title" data-v-8c40b958>How to Use:</h6><ul class="mb-0" data-v-8c40b958><li data-v-8c40b958>1. Take 20ml to 30ml diluted in a glass of lukewarm water.</li><li data-v-8c40b958>2. Consume in the morning and evening, 30 minutes before meals.</li><li data-v-8c40b958>3. Or as directed by your Physician.</li></ul></div></div></div><div class="col-lg-7" data-v-8c40b958><div class="image-grid" data-v-8c40b958><div class="image-large" data-v-8c40b958><img${ssrRenderAttr("src", _imports_0$4)} alt="Person drinking water" class="img-fluid" data-v-8c40b958></div><div class="image-small-container" data-v-8c40b958><div class="image-circle" data-v-8c40b958><img${ssrRenderAttr("src", _imports_1$1)} alt="Capsules in bottle" class="img-fluid center-img" data-v-8c40b958></div><div class="image-small" data-v-8c40b958><img${ssrRenderAttr("src", _imports_2)} alt="Man holding product" class="img-fluid" data-v-8c40b958></div></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/BenefitsSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8c40b958"]]), { __name: "ProductDetailsBenefitsSection" });
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "nutrients-section health-section-bg" }, _attrs))}><div class="container-fluid"><div class="row mb-5"><div class="col-lg-6"><div class="bioavailable-section-header"><h1>Potent Ayurvedic herbs that work harder for your blood sugar.</h1></div></div><div class="col-lg-6 d-flex align-items-center"><div class="bioavailable-section-header"><p> DBT Care Plus is formulated with 11 powerful herbs your body can naturally absorb, so you experience the full potential of Ayurvedic diabetic wellness.* </p></div></div></div><div class="swiper nutrient-swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="nutrient-card"><h3>Karela (Bitter Melon)</h3><p> A powerhouse herb that directly influences glucose metabolism and reduces high blood glucose levels throughout the body. </p><div class="media-container"><img src="https://assets.embeddables.com/01_DM_Spermidine_Render_firstframe_8600583947759856.jpg" alt="Cellular Energy Complex"><video muted loop><source src="https://assets.embeddables.com/01_DM_Spermidine_Render_26899046581101105.mp4" type="video/mp4"></video></div><div class="form-label">WHY IT&#39;S ESSENTIAL</div><div class="form-content"> Contains Charantin &amp; Momordicin — natural compounds proven to lower blood sugar levels effectively. </div></div></div><div class="swiper-slide"><div class="nutrient-card"><h3>Vijayasar (Indian Kino)</h3><p> A large medicinal tree whose bark is highly effective in treating diabetes and purifying the blood. </p><div class="media-container"><img src="https://assets.embeddables.com/02_DM_VitaminA_Render_firstframe_19505463071704598.jpg" alt="Cellular Energy Complex"><video muted loop><source src="https://assets.embeddables.com/02_DM_VitaminA_Render_8176730088061925.mp4" type="video/mp4"></video></div><div class="form-label">WHY IT&#39;S ESSENTIAL</div><div class="form-content"> Reduces excess fat, removes toxins from the body and naturally lowers blood sugar levels. </div></div></div><div class="swiper-slide"><div class="nutrient-card"><h3>Gurmar</h3><p> Highly effective in both Type 1 &amp; Type 2 Diabetes mellitus, targeting insulin levels and cholesterol simultaneously. </p><div class="media-container"><img src="https://assets.embeddables.com/03_DM_VitaminC_Render_firstframe_25623269954634087.jpg" alt="Cellular Energy Complex"><video muted loop><source src="https://assets.embeddables.com/03_DM_VitaminC_Render_12898703876005913.mp4" type="video/mp4"></video></div><div class="form-label">WHY IT&#39;S ESSENTIAL</div><div class="form-content"> Enhances insulin levels in the body and reduces bad cholesterol (LDL) for complete metabolic support. </div></div></div><div class="swiper-slide"><div class="nutrient-card"><h3>Giloy</h3><p> A powerful wild herb that lowers blood sugar and lipid levels while improving overall body strength. </p><div class="media-container"><img src="https://assets.embeddables.com/04_DM_VitaminD3_Render_firstframe_07766834816908619.jpg" alt="Cellular Energy Complex"><video muted loop><source src="https://assets.embeddables.com/04_DM_VitaminD3_Render_17119757890939935.mp4" type="video/mp4"></video></div><div class="form-label">WHY IT&#39;S ESSENTIAL</div><div class="form-content"> Relieves excessive thirst in diabetics and helps improve energy and body strength naturally. </div></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/CellularEnergySection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]), { __name: "ProductDetailsCellularEnergySection" });
const _sfc_main$5 = {
  __name: "ProductDetailsRigorousSection",
  __ssrInlineRender: true,
  setup(__props) {
    const cleanUrl = (url) => {
      return url.replace(/^&/, "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testing-standards-wrapper" }, _attrs))}><div class="container-fluid"><div class="row align-items-center g-4"><div class="col-lg-5"><h2 class="testing-main-title"> Ayurvedic purity that sets a higher standard. </h2><p class="testing-description-text"> DBT Care Plus is screened as a full formula for purity, potency and safety — because what goes into your herbal juice matters as much as what stays out.* </p></div><div class="col-lg-7"><div class="row g-3 g-md-4"><div class="col-12 col-sm-6 col-lg-4"><div class="testing-feature-card"><div class="testing-icon-wrapper"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/ayurvedic.png"))} alt=""></div><p class="testing-feature-description"> Formulated with 100% natural Ayurvedic herbs — no synthetic chemicals or artificial additives </p></div></div><div class="col-12 col-sm-6 col-lg-4"><div class="testing-feature-card"><div class="testing-icon-wrapper"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/no-preservatives.png"))} alt=""></div><p class="testing-feature-description"> Free from preservatives, binders <br> and harmful chemical substances </p></div></div><div class="col-12 col-sm-6 col-lg-4"><div class="testing-feature-card"><div class="testing-icon-wrapper"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/GMP Certified.png"))} alt=""></div><p class="testing-feature-description"> Manufactured in a GMP certified facility ensuring consistent quality and safety </p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/RigorousSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProductDetailsDifferenceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const cleanUrl = (url) => {
      return url.replace(/^&/, "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-5 health-section-bg" }, _attrs))} data-v-579602ef><div class="container-fluid" data-v-579602ef><div class="row mb-5" data-v-579602ef><div class="col-12" data-v-579602ef><h1 class="ds01-section-title" data-v-579602ef>DBT Care Plus — Your Natural Solution to Control Blood Sugar</h1><p class="ds01-section-subtitle" data-v-579602ef> Our Ayurvedic formulation combines 11 powerful herbs,<br data-v-579602ef> clinically trusted to manage blood sugar and diabetic wellness naturally. </p></div></div><div class="row" data-v-579602ef><div class="col-lg-6 mb-4" data-v-579602ef><div class="ds01-video-wrapper" data-v-579602ef><div class="ds01-video-controls" data-v-579602ef><button class="ds01-control-btn" data-v-579602ef><i class="bi bi-pause-fill" data-v-579602ef></i></button><button class="ds01-control-btn" data-v-579602ef><i class="bi bi-volume-up-fill" data-v-579602ef></i></button></div><video style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "20px" })}" muted autoplay playsinline data-v-579602ef><source src="https://assets.embeddables.com/ZAIN_4Ds_06_0617_6754959037559694.mp4" type="video/mp4" data-v-579602ef></video></div><div class="ds01-doctor-info" data-v-579602ef><div class="ds01-doctor-name" data-v-579602ef>Dr. Zain Kassam, MD, MPH</div><div class="ds01-doctor-title" data-v-579602ef> Chief Ayurvedic Consultant, VCN Health </div></div></div><div class="col-lg-6" data-v-579602ef><div class="row" data-v-579602ef><div class="col-md-6" data-v-579602ef><div class="ds01-feature-card" data-v-579602ef><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/Type1&Type2Diabetes.png"))} alt="" data-v-579602ef><div class="ds01-feature-divider" data-v-579602ef></div><h3 class="ds01-feature-title" data-v-579602ef>Type 1 &amp; Type 2 Diabetes</h3><p class="ds01-feature-description" data-v-579602ef> Herbs like Gurmar and Methi are highly effective in managing both Type 1 and Type 2 Diabetes by enhancing insulin levels and improving glucose tolerance.* </p></div></div><div class="col-md-6" data-v-579602ef><div class="ds01-feature-card" data-v-579602ef><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/High Blood Sugar.png"))} alt="" data-v-579602ef><div class="ds01-feature-divider" data-v-579602ef></div><h3 class="ds01-feature-title" data-v-579602ef>High Blood Sugar</h3><p class="ds01-feature-description" data-v-579602ef> Karela, Neem and Vijayasar actively reduce high blood glucose levels, stimulate insulin production and purify the blood naturally.* </p></div></div><div class="col-md-6" data-v-579602ef><div class="ds01-feature-card" data-v-579602ef><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/Liver&KidneyDisorders.png"))} alt="" data-v-579602ef><div class="ds01-feature-divider" data-v-579602ef></div><h3 class="ds01-feature-title" data-v-579602ef> Liver &amp; Kidney Disorders </h3><p class="ds01-feature-description" data-v-579602ef> Punarnava and Aloe Vera support liver and kidney health, reduce toxins, and help manage jaundice and kidney-related diseases.* </p></div></div><div class="col-md-6" data-v-579602ef><div class="ds01-feature-card" data-v-579602ef><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/Diabetic Symptoms Relief.png"))} alt="" data-v-579602ef><div class="ds01-feature-divider" data-v-579602ef></div><h3 class="ds01-feature-title" data-v-579602ef> Diabetic Symptoms Relief </h3><p class="ds01-feature-description" data-v-579602ef> Effectively relieves symptoms like excessive thirst, frequent urination, fatigue, weak eyesight, and slow wound healing.* </p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/DifferenceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-579602ef"]]);
const _sfc_main$3 = {
  __name: "ProductDetailsStrainSection",
  __ssrInlineRender: true,
  setup(__props) {
    const cleanUrl = (url) => {
      return url.replace(/^&/, "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "strains-info-main-section" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-lg-6 col-md-12"><div class="strains-product-image-container"><img${ssrRenderAttr("src", cleanUrl("/img/products/New-Project.png"))} alt="Probiotic Capsule" class="w-100"></div></div><div class="col-lg-6 col-md-12"><div class="strains-content-wrapper-right"><h2 class="strains-main-heading-text"> 11 Herbs that work harder to control your Blood Sugar. </h2><p class="strains-subheading-description"> Chosen for their Ayurvedic potency to regulate glucose metabolism and build complete diabetic wellness. </p><div class="strains-custom-accordion"><div class="strains-accordion-item-wrapper"><button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse" data-bs-target="#strainsCollapse1" aria-expanded="false" aria-controls="strainsCollapse1"><span>Blood Sugar Control Blend</span><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}"><span class="strains-accordion-afu-count">KARELA · VIJAYASAR · GURMAR</span><span class="strains-accordion-plus-icon">+</span></div></button><div class="collapse strains-accordion-body-content" id="strainsCollapse1"><p><strong>Karela:</strong> Contains Charantin &amp; Momordicin that influence glucose metabolism and reduce high blood glucose levels.</p><p><strong>Vijayasar:</strong> Reduces excess fat, removes toxins, lowers blood sugar and purifies blood naturally.</p><p><strong>Gurmar:</strong> Highly effective in Type 1 &amp; Type 2 Diabetes. Enhances insulin levels and reduces bad cholesterol (LDL).</p></div></div><div class="strains-accordion-item-wrapper"><button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse" data-bs-target="#strainsCollapse2" aria-expanded="false" aria-controls="strainsCollapse2"><span>Immunity &amp; Detox Blend</span><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}"><span class="strains-accordion-afu-count">GILOY · NEEM · AMLA</span><span class="strains-accordion-plus-icon">+</span></div></button><div class="collapse strains-accordion-body-content" id="strainsCollapse2"><p><strong>Giloy:</strong> Lowers blood sugar and lipid levels, relieves excessive thirst and improves body strength.</p><p><strong>Neem:</strong> Improves insulin sensitivity and controls high blood glucose by stimulating insulin production in Beta cells.</p><p><strong>Amla:</strong> Helps proper absorption of insulin, reduces high sugar levels and relieves eye-related diabetic problems.</p></div></div><div class="strains-accordion-item-wrapper"><button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse" data-bs-target="#strainsCollapse3" aria-expanded="false" aria-controls="strainsCollapse3"><span>Metabolic &amp; Pancreas Support Blend</span><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}"><span class="strains-accordion-afu-count">METHI · CHIRATA · JAMUN</span><span class="strains-accordion-plus-icon">+</span></div></button><div class="collapse strains-accordion-body-content" id="strainsCollapse3"><p><strong>Methi:</strong> Lowers blood glucose, improves glucose tolerance and manages metabolic symptoms of Type 1 &amp; Type 2 Diabetes.</p><p><strong>Chirata:</strong> Antioxidant &amp; anti-inflammatory properties that prevent pancreatic cell damage and enhance insulin release.</p><p><strong>Jamun:</strong> Contains Jamboline to reduce starch-to-glucose conversion and controls frequent urination &amp; thirst in diabetics.</p></div></div><div class="strains-accordion-item-wrapper"><button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse" data-bs-target="#strainsCollapse4" aria-expanded="false" aria-controls="strainsCollapse4"><span>Organ Health &amp; Repair Blend</span><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}"><span class="strains-accordion-afu-count">PUNARNAVA · ALOE VERA · SHILAJIT</span><span class="strains-accordion-plus-icon">+</span></div></button><div class="collapse strains-accordion-body-content" id="strainsCollapse4"><p><strong>Punarnava:</strong> Best natural diuretic to reduce sugar, blood pressure and cholesterol. Supports liver, kidneys and eye health.</p><p><strong>Aloe Vera:</strong> Reduces glucose and triglyceride levels, assists in wound healing and does not elevate blood sugar.</p><p><strong>Shudh Shilajit:</strong> Fulvic acid in Shilajit repairs damaged pancreas, enables insulin release and flushes out body toxins.</p></div></div></div><div class="strains-badges-grid-container"><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/ayurvedic.png"))} alt="Vegan"></div><span class="strains-badge-label-text">100% Ayurvedic</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/natural.png"))} alt="Gluten"></div><span class="strains-badge-label-text">100% Natural</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/No Added Sugar.png"))} alt="Dairy"></div><span class="strains-badge-label-text">No Added Sugar</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/No Chemicals.png"))} alt="Soy"></div><span class="strains-badge-label-text">No Chemicals</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/no-preservatives.png"))} alt="Nut"></div><span class="strains-badge-label-text">No Preservatives</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/Vegetarian.png"))} alt="Shellfish"></div><span class="strains-badge-label-text">Vegetarian</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/GMP Certified.png"))} alt="Sesame"></div><span class="strains-badge-label-text">GMP Certified</span></div><div class="strains-badge-item-box"><div class="strains-badge-icon-circle"><img${ssrRenderAttr("src", cleanUrl("/img/productsdetails/No Binders.png"))} alt="Corn"></div><span class="strains-badge-label-text">No Binders</span></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/StrainSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/img/products/product-9.png");
const _imports_1 = publicAssetsURL("/img/products/product-11.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vcn-new-product" }, _attrs))}><div class="container-fluid"><div class="row g-3"><div class="col-md-6"><div class="product-card"><div class="product-image-wrapper"><img${ssrRenderAttr("src", _imports_0$1)} alt="Daily Multivitamin" class="product-image"></div><div class="product-content"><span class="product-label">AGE 18+</span><h3 class="product-title">Daily Multivitamin</h3><p class="product-description">${`Help cover daily nutrient gaps for your whole body with 25
                essential nutrients plus value of 20 assorted vitamins and 10.`}</p><div class="product-price">$39.99</div><div class="product-actions"><a href="/product-details" class="btn-learn">Learn More</a><a href="/cart" class="btn-cart">Add to Cart</a></div></div></div></div><div class="col-md-6"><div class="product-card"><div class="product-image-wrapper"><img${ssrRenderAttr("src", _imports_1)} alt="Daily Essentials Duo" class="product-image"></div><div class="product-content"><span class="product-label">AGE 18+</span><h3 class="product-title">Daily Essentials Duo</h3><p class="product-description">${`Clinically proven probiotic and advanced multivitamin duo for
                daily health.*`}</p><div class="product-price"> $39.99 <span class="old-price">$49.98</span></div><div class="product-actions"><a href="/product-details" class="btn-learn">Learn More</a><a href="/cart" class="btn-cart">Add to Cart</a></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/Products.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "ProductDetailsProducts" });
const _imports_0 = publicAssetsURL("/img/icons/search.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews-section" }, _attrs))}><h2 class="section-title">Member<br>Reviews</h2><div class="rating-overview"><div class="rating-score"><div class="rating-flex"><div class="rating-number">4.8</div><div class="stars"> ★★★★★ <div class="rating-count">Based on 10023 reviews</div></div></div></div><div class="divider"></div><div class="rating-bars"><div class="rating-bar-item"><span class="star-label">5 ★</span><div class="bar-container"><div class="bar-fill" style="${ssrRenderStyle({ "width": "92%" })}"></div></div><span class="bar-count">9214</span></div><div class="rating-bar-item"><span class="star-label">4 ★</span><div class="bar-container"><div class="bar-fill" style="${ssrRenderStyle({ "width": "5%" })}"></div></div><span class="bar-count">502</span></div><div class="rating-bar-item"><span class="star-label">3 ★</span><div class="bar-container"><div class="bar-fill" style="${ssrRenderStyle({ "width": "2%" })}"></div></div><span class="bar-count">197</span></div><div class="rating-bar-item"><span class="star-label">2 ★</span><div class="bar-container"><div class="bar-fill" style="${ssrRenderStyle({ "width": "0.5%" })}"></div></div><span class="bar-count">52</span></div><div class="rating-bar-item"><span class="star-label">1 ★</span><div class="bar-container"><div class="bar-fill" style="${ssrRenderStyle({ "width": "0.6%" })}"></div></div><span class="bar-count">58</span></div></div></div><div class="search-sort-bar"><div class="search-box"><span class="search-icon"><img${ssrRenderAttr("src", _imports_0)} alt=""></span><input type="text" placeholder="Search reviews"></div><div class="sort-dropdown"><select><option>Sort by: Highest rating</option><option>Sort by: Lowest rating</option><option>Sort by: Most recent</option><option>Sort by: Most helpful</option></select></div></div><div class="results-info"> We found 24 matching reviews. <span class="clear-filters">Clear filters</span></div><div class="reviews-list"><div class="review-card"><div class="row-1"><div class="left-block"><span class="name">Sonya H. <span class="loc">US</span></span><span class="stars">★★★★★</span></div><div class="date-block"><span class="date">11/04/25</span></div></div><div class="row-2"><span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span><p class="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div><div class="row-3"><span class="help">Was this helpful?</span><div class="help-icons"><i class="fa-regular fa-thumbs-up"></i> 0 <i class="fa-regular fa-thumbs-down"></i> 0 </div></div></div></div><div class="pagination"><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><button class="page-btn">4</button><button class="page-btn">5</button><button class="arrow-btn">›</button></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/ReviewSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "ProductDetailsReviewSection" });
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductDetailsIntroduction = __nuxt_component_0;
      const _component_ProductDetailsHealthSection = __nuxt_component_1;
      const _component_ProductDetailsFormulationSection = __nuxt_component_2;
      const _component_ProductDetailsBundleSection = __nuxt_component_3;
      const _component_ProductDetailsBenefitsSection = __nuxt_component_4;
      const _component_ProductDetailsCellularEnergySection = __nuxt_component_5;
      const _component_ProductDetailsRigorousSection = _sfc_main$5;
      const _component_ProductDetailsDifferenceSection = __nuxt_component_7;
      const _component_ProductDetailsStrainSection = _sfc_main$3;
      const _component_ProductDetailsProducts = __nuxt_component_9;
      const _component_ProductDetailsReviewSection = __nuxt_component_10;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ProductDetailsIntroduction, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsHealthSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsFormulationSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsBundleSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsBenefitsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsCellularEnergySection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsRigorousSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsDifferenceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsStrainSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsProducts, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductDetailsReviewSection, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-details/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DevkaA6Z.mjs.map
