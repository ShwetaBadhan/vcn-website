import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc, R as RegistrationForm } from './server.mjs';
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
  __name: "RegistrationPage",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const userType = ref(route.query.type || "preferred-customer");
    const handleRegistrationComplete = (data) => {
      console.log("✅ Registration completed:", data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "registration-page-wrapper" }, _attrs))} data-v-22f7cccc>`);
      _push(ssrRenderComponent(RegistrationForm, {
        userType: userType.value,
        isModal: false,
        onRegistrationComplete: handleRegistrationComplete
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/RegistrationPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RegistrationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22f7cccc"]]);

export { RegistrationPage as default };
//# sourceMappingURL=RegistrationPage-Dg8wiJmz.mjs.map
