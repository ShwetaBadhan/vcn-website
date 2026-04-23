import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    const formData = ref({
      firstName: "",
      lastName: "",
      age: "",
      weight: "",
      phone: "",
      email: "",
      healthIssues: []
    });
    const healthIssues = [
      "Thyroid",
      "Weight gain",
      "Hormonal issues",
      "Hair Fall",
      "Pigmentation",
      "Other"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))}><section class="mid-consultation-section py-5"><div class="container"><div class="row g-5"><div class="col-lg-5"><h1 class="mid-page-title mb-4">Consultation Form</h1><form class="mid-consultation-form"><div class="row g-3 mb-3"><div class="col-md-6"><label for="mid-first-name" class="mid-form-label form-label"> First Name <span class="text-danger">*</span></label><input type="text" class="form-control mid-form-input" id="mid-first-name" placeholder="First Name"${ssrRenderAttr("value", formData.value.firstName)} required></div><div class="col-md-6"><label for="mid-last-name" class="mid-form-label form-label"> Last Name <span class="text-danger">*</span></label><input type="text" class="form-control mid-form-input" id="mid-last-name" placeholder="Last Name"${ssrRenderAttr("value", formData.value.lastName)} required></div></div><div class="mb-3"><label for="mid-age" class="mid-form-label form-label"> Age <span class="text-danger">*</span></label><input type="number" class="form-control mid-form-input" id="mid-age" placeholder="Ex. 22"${ssrRenderAttr("value", formData.value.age)} required></div><div class="mb-3"><label for="mid-weight" class="mid-form-label form-label"> Weight (in kg) <span class="text-danger">*</span></label><input type="number" class="form-control mid-form-input" id="mid-weight" placeholder="Ex. 45"${ssrRenderAttr("value", formData.value.weight)} required></div><div class="mb-3"><label for="mid-phone" class="mid-form-label form-label"> Phone/Mobile (With Country Code) <span class="text-danger">*</span></label><input type="tel" class="form-control mid-form-input" id="mid-phone" placeholder="917750824146"${ssrRenderAttr("value", formData.value.phone)} required></div><div class="mb-3"><label for="mid-email" class="mid-form-label form-label"> Email </label><input type="email" class="form-control mid-form-input" id="mid-email" placeholder="Email Address"${ssrRenderAttr("value", formData.value.email)}></div><div class="mb-4"><label class="mid-form-label form-label"> Health Issues (Select At Least One) <span class="text-danger">*</span></label><div class="mid-checkbox-group"><!--[-->`);
      ssrRenderList(healthIssues, (issue, index) => {
        _push(`<div class="form-check mb-2"><input class="form-check-input mid-checkbox" type="checkbox"${ssrRenderAttr("value", issue)}${ssrRenderAttr("id", "mid-issue-" + index)}${ssrIncludeBooleanAttr(Array.isArray(formData.value.healthIssues) ? ssrLooseContain(formData.value.healthIssues, issue) : formData.value.healthIssues) ? " checked" : ""}><label class="form-check-label mid-checkbox-label"${ssrRenderAttr("for", "mid-issue-" + index)}>${ssrInterpolate(issue)}</label></div>`);
      });
      _push(`<!--]--></div></div><button type="submit" class="btn mid-submit-btn px-4"> Submit Form </button></form></div><div class="col-lg-7"><div class="mid-stats-section text-center mb-4"><h2 class="mid-stats-subtitle mb-2">Your Health, Our Priority</h2><h1 class="mid-stats-title fw-bold mb-4">5 Lakh Happy Customers</h1><div class="row g-3 mb-4"><div class="col-md-4"><div class="mid-stat-item p-3"><div class="mid-stat-number fw-bold fs-4 mb-1">50+</div><div class="mid-stat-label">Experts</div></div></div><div class="col-md-4"><div class="mid-stat-item p-3"><div class="mid-stat-number fw-bold fs-4 mb-1">Free</div><div class="mid-stat-label">Consultation</div></div></div><div class="col-md-4"><div class="mid-stat-item p-3"><div class="mid-stat-number fw-bold fs-4 mb-1">Regular</div><div class="mid-stat-label">Follow-ups</div></div></div></div><div class="mid-stats-image-container"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Health Experts" class="img-fluid rounded"></div></div></div></div><div class="row g-4 mt-4"><div class="col-lg-6"><div class="mid-branch-card p-4 h-100"><div class="mb-4"><h3 class="mid-branch-title mb-2"> Visit our Team of Trained Health Experts at our Gurgaon Branch </h3><p class="mid-branch-address text-muted mb-0"> Unit No. 307 &amp; 308, Tower A, Pioneer Urban Square, Golf Course Ext Rd, Sector 62, Gurugram, Ghata, Haryana 122005 </p></div><div><h3 class="mid-branch-title mb-2"> Visit our Team of Trained Health Experts at our Jalandhar Branch – </h3><p class="mid-branch-address text-muted mb-0"> SCO 41, Chotti Baradari Part 2, Opposite PIMS Hospital, Jalandhar, Punjab 144001 </p></div></div></div><div class="col-lg-6"><div class="mid-contact-card p-4 h-100"><div class="mb-4"><h3 class="mid-contact-title mb-3">Contact our Global Support Team at –</h3><ul class="mid-contact-list list-unstyled mb-0"><li class="mb-2"><span class="mid-contact-label">UAE:</span> Call for a Free Health Consultation at +971 800 032 1372 </li><li class="mb-2"><span class="mid-contact-label">Whatsapp:</span> your queries at +91-7652922771 or +91 95019 80115 </li><li class="mb-2"><span class="mid-contact-label">or Email us at –</span> international@miduty.in </li></ul></div><div><h3 class="mid-contact-title mb-3">Contact our India (Domestic) Team</h3><ul class="mid-contact-list list-unstyled mb-0"><li class="mb-2"><span class="mid-contact-label">Call Our Team On:</span> 86990-86991 </li><li class="mb-2"><span class="mid-contact-label">WhatsApp Us On:</span> +91-9267994525 (Only WhatsApp) </li><li class="mb-2"><span class="mid-contact-label">or Email us at –</span> troublehunters@miduty.in </li><li class="mb-2"><span class="mid-contact-label">For Order Queries:</span> 08047953608 </li></ul></div></div></div></div></div></section></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book-consultancy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-j4Ouzt.mjs.map
