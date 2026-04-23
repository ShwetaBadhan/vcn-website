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
        class: "/product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "terms-conditions" }, _attrs))}><div class="container"><div class="disease-grid"><div class="disease-card"><div class="disease-card-image"><div class="disease-icon"><img src="https://vcarenetwork.in/login/public/uploads/section/category/acidity/img_6878efdd3a0b77.16525164.jpg" alt=""></div></div><div class="disease-card-body"><h3 class="disease-title">Acidity</h3><a href="/bundle-details" class="learn-more-btn">LEARN MORE</a></div></div><div class="disease-card"><div class="disease-card-image"><div class="disease-icon"><img src="https://vcarenetwork.in/login/public/uploads/section/category/thyroid/img_6878efe483e352.82786474.jpg" alt=""></div></div><div class="disease-card-body"><h3 class="disease-title">Thyroid</h3><a href="/bundle-details" class="learn-more-btn">LEARN MORE</a></div></div><div class="disease-card"><div class="disease-card-image"><div class="disease-icon"><img src="https://vcarenetwork.in/login/public/uploads/section/category/diabetes/img_6878efebd79712.26526712.jpg" alt=""></div></div><div class="disease-card-body"><h3 class="disease-title">Diabetes</h3><a href="/bundle-details" class="learn-more-btn">LEARN MORE</a></div></div><div class="disease-card"><div class="disease-card-image"><div class="disease-icon"><img src="https://vcarenetwork.in/login/public/uploads/section/category/fatty-liver/img_6878eff29458b6.66484526.jpg" alt=""></div></div><div class="disease-card-body"><h3 class="disease-title">Fatty Liver</h3><a href="/bundle-details" class="learn-more-btn">LEARN MORE</a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all-disease-bundles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYmFGp1b.mjs.map
