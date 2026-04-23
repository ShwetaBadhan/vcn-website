import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "terms-conditions" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 offset-lg-2"><h3> VCN Health Website <br><br> Terms and Conditions </h3><h6> 1. Introduction </h6><p>By using the Vcare Network website, you agree to follow these Terms &amp; Conditions. If you do not agree, please do not use the platform.</p><h6>2. Use of Website</h6><p>VCN provides an online platform for the purchase of healthcare and personal care products. All services are subject to availability and applicable policies.</p><h6>3. Eligibility</h6><p>You must be at least 18 years of age to use our services. If you are under 18, you may access the website only under the supervision of a parent or legal guardian.</p><h6>4. Account Responsibility</h6><p>You are responsible for maintaining your account details and all activities under your login.</p><h6>5. Products &amp; Orders</h6><p>All products are subject to availability and pricing at the time of purchase. The company may update or discontinue products without notice.</p><h6>6. Orders &amp; Delivery</h6><p>Orders placed on the website will be processed and delivered within India as per the confirmed order details. The company is not liable for delivery outside India or delays caused by unforeseen circumstances.</p><h6>7. Direct Selling &amp; Business Opportunity</h6><p>VCN operates under a direct selling model in compliance with applicable Indian laws. Earnings are based on product sales and not on recruitment. The company does not guarantee any fixed income, success, or profit levels.</p><h6>8. Intellectual Property</h6><p>All content on this website, including logos, text, images, and materials, is the property of Vcare Network and protected by applicable intellectual property laws.</p><h6>9. Payments &amp; Pricing</h6><p>All prices are listed in INR and are subject to change without prior notice. Applicable taxes and charges will be added at checkout. Payments must be made through approved methods available on the platform</p><h6>10. Termination</h6><p>The company reserves the right to suspend or terminate user access at any time due to violations of these terms, fraudulent activities, or misuse of the platform.</p><h6>11. Changes to Terms</h6><p>Terms may be updated at any time. Continued use of the website means you accept the changes.</p><h6>12. Governing Law</h6><p>These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in India.</p></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-conditions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-nG8Pedl1.mjs.map
