import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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
    const activeIndex = ref(null);
    const faqCategories = ref([
      {
        title: "About VCN Business",
        questions: [
          {
            question: "What is Vcare Network (VCN)?",
            answer: "VCN is a direct selling company offering a wide range of wellness, healthcare, and personal care products inspired by natural ingredients and modern research."
          },
          {
            question: "How does the VCN business model work?",
            answer: "VCN operates on a direct selling model where individuals can become distributors, promote products, and earn income through sales and network growth."
          }
        ]
      },
      {
        title: "Orders & Returns",
        questions: [
          {
            question: "How can I place an order?",
            answer: "Orders can be placed directly through the VCN website or via an authorized distributor."
          },
          {
            question: "Can I modify or cancel my order?",
            answer: "Yes, orders can be modified or cancelled before they are processed or shipped. Please contact customer support promptly."
          }
        ]
      },
      {
        title: "Shipping & Delivery",
        questions: [
          {
            question: "Do you offer nationwide delivery?",
            answer: "Yes, VCN delivers products across India through reliable logistics partners."
          },
          {
            question: "Are there any shipping charges?",
            answer: "Shipping charges may vary based on order value and location. Offers may include free shipping on selected orders."
          }
        ]
      },
      {
        title: "Loyalty Points (AmPoints)",
        questions: [
          {
            question: "What are AmPoints?",
            answer: "AmPoints are loyalty points earned on every purchase. 1 AmPoint is earned for every ₹100 spent, which can be redeemed for discounts on future purchases."
          },
          {
            question: "How do I redeem AmPoints?",
            answer: "You can redeem AmPoints during checkout. 100 AmPoints = ₹100 discount. Points are valid for 12 months."
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))} data-v-0b6dcc40><div class="container-fluid" data-v-0b6dcc40><div class="row" data-v-0b6dcc40><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block" data-v-0b6dcc40>`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9 content-section" data-v-0b6dcc40><section class="vcn-faq-section" data-v-0b6dcc40><div class="vcn-faq-container" data-v-0b6dcc40><h2 class="vcn-faq-title" data-v-0b6dcc40>Frequently Asked Questions</h2><div class="vcn-faq-list" data-v-0b6dcc40><!--[-->`);
      ssrRenderList(faqCategories.value, (category, index2) => {
        _push(`<div class="vcn-faq-item" data-v-0b6dcc40><button class="vcn-faq-question-btn" type="button" data-v-0b6dcc40><span data-v-0b6dcc40>${ssrInterpolate(category.title)}</span><i class="${ssrRenderClass([activeIndex.value === index2 ? "bi-chevron-up" : "bi-chevron-down", "bi"])}" data-v-0b6dcc40></i></button>`);
        if (activeIndex.value === index2) {
          _push(`<div class="vcn-faq-answer-wrapper" data-v-0b6dcc40><!--[-->`);
          ssrRenderList(category.questions, (qa, qIndex) => {
            _push(`<div class="vcn-qa-card" data-v-0b6dcc40><h4 class="vcn-qa-question-text" data-v-0b6dcc40>${ssrInterpolate(qa.question)}</h4><p class="vcn-qa-answer-text" data-v-0b6dcc40>${ssrInterpolate(qa.answer)}</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faqs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b6dcc40"]]);

export { index as default };
//# sourceMappingURL=index-BttOtN1z.mjs.map
