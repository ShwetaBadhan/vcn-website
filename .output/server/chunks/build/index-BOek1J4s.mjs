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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "terms-conditions mt-3" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><h3>Shipping &amp; Delivery Policy</h3><p> At Vcare Network, we ensure timely and reliable delivery of your orders across India. </p><p> Orders are processed within a short timeframe after confirmation and are typically delivered within 3–7 working days, depending on your location. Delivery timelines may vary due to factors such as remote locations, public holidays, or unforeseen circumstances. </p><p> Once your order is shipped, you will receive a tracking ID or link to monitor your shipment status. Shipping charges, if applicable, will be displayed at checkout. </p><p> We partner with trusted logistics providers to ensure safe delivery; however, Vcare Network is not responsible for delays caused by courier partners or external factors beyond our control. </p><p> For any shipping-related queries or assistance, please contact our customer support team. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shipping-policy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BOek1J4s.mjs.map
