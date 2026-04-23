import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
    const activeTab = ref("overview");
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))} data-v-44680acd><div class="container-fluid" data-v-44680acd><div class="row" data-v-44680acd><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block" data-v-44680acd>`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9" data-v-44680acd><div class="careers-content" data-v-44680acd><div class="tabs" data-v-44680acd><button class="${ssrRenderClass({ active: activeTab.value === "overview" })}" data-v-44680acd> Overview </button><button class="${ssrRenderClass({ active: activeTab.value === "culture" })}" data-v-44680acd> Culture at VCN </button></div>`);
      if (activeTab.value === "overview") {
        _push(`<div data-v-44680acd><section class="hero-sectioning" data-v-44680acd><img${ssrRenderAttr("src", "")} class="hero-img" data-v-44680acd><div class="hero-card" data-v-44680acd><h2 data-v-44680acd>Be a part of the VCN Family</h2><p data-v-44680acd> At Vcare Network, our people drive our success. We welcome passionate, dedicated individuals who want to grow and make an impact in the wellness industry. </p><p data-v-44680acd> Being part of VCN means working in a supportive, dynamic environment where your ideas matter and your growth is encouraged. Whether you’re starting out or aiming higher, we offer opportunities to learn, lead, and succeed. </p><p data-v-44680acd> Join us and be part of a team committed to innovation, excellence, and empowering lives every day. </p><button class="primary-btn" data-v-44680acd> FIND OPEN POSITIONS </button></div></section><section class="culture-section" data-v-44680acd><h2 data-v-44680acd>#IVCN</h2><div class="culture-card" data-v-44680acd><img${ssrRenderAttr("src", "")} data-v-44680acd><div data-v-44680acd><h3 data-v-44680acd>Celebrating Milestones Together</h3><p data-v-44680acd> At VCN India, we believe in nurturing talent and celebrating growth while building a strong culture of collaboration and achievement. </p></div></div></section><section class="vp-section" data-v-44680acd><h2 data-v-44680acd>Words from our Vice President (HR)</h2><div class="vp-card" data-v-44680acd><div class="vp-profile" data-v-44680acd><img${ssrRenderAttr("src", "")} data-v-44680acd><h4 data-v-44680acd>Ritika Malik</h4><span data-v-44680acd>Vice President - Human Resources</span></div><div class="vp-message" data-v-44680acd><p data-v-44680acd> At VCN, we believe in the power of people. Our vision of helping people live better lives starts with our team. We nurture passion, encourage innovation and provide opportunities for employees to grow and succeed. </p><p data-v-44680acd> Being a part of VCN means working with talented people from across the globe while making a meaningful impact in communities and markets. </p></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "culture") {
        _push(`<div data-v-44680acd><section class="articles" data-v-44680acd><h2 data-v-44680acd>Related Articles</h2><div class="article-card" data-v-44680acd><div class="article-icon" data-v-44680acd> A </div><div data-v-44680acd><span data-v-44680acd>October 3, 2021</span><h4 data-v-44680acd>Team building and collaboration in the corporate world</h4></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-44680acd"]]);

export { index as default };
//# sourceMappingURL=index-CpPUH9c5.mjs.map
