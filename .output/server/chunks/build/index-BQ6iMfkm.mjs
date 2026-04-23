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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "terms-conditions mt-3" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><h3>Privacy Policy</h3><h6>1. Introduction</h6><p> Vcare Network is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information. </p><h6>2. Information We Collect</h6><p> We may collect personal details such as your name, contact information, address, and payment details when you register, place orders, or interact with our website. </p><h6>3. Use of Information</h6><p> Your information is used to process orders, provide services, improve user experience, and communicate important updates, offers, or support. </p><h6>4. Data Protection</h6><p> We implement appropriate security measures to protect your data from unauthorized access, misuse, or disclosure. </p><h6>5. Sharing of Information</h6><p> We do not sell or rent your personal data. Information may be shared with trusted partners (such as payment gateways or delivery services) only to complete your transactions. </p><h6>6. Cookies</h6><p> Our website may use cookies to enhance browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings. </p><h6>7. User Rights</h6><p> You have the right to access, update, or request deletion of your personal information by contacting us. </p><h6>8. Third-Party Links</h6><p> Our website may contain links to external websites. We are not responsible for their privacy practices. </p><h6>9. Policy Updates</h6><p> This Privacy Policy may be updated from time to time. Continued use of the website implies acceptance of any changes. </p><h6>10. Contact Us</h6><p> For any privacy-related concerns, please contact us through our official website. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BQ6iMfkm.mjs.map
