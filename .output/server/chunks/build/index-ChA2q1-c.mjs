import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/img/leadership/ourleader.jpeg");
const __default__ = {
  data() {
    return {
      activeYear: 2015,
      years: [2015, 1990, 1980, 1972, 1968, 1962, 1959]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))} data-v-eef97642><div class="container-fluid" data-v-eef97642><div class="row" data-v-eef97642><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block" data-v-eef97642>`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9" data-v-eef97642><div class="journey-container" data-v-eef97642><section class="journey-hero" data-v-eef97642><img${ssrRenderAttr("src", _imports_0)} class="hero-img" data-v-eef97642><h1 data-v-eef97642>Major Milestones</h1><p data-v-eef97642> Since our inception in 2009, Vcare Network has grown from a vision-driven initiative into a trusted name in the wellness and direct selling industry. What began as a commitment to deliver high-quality, nature-inspired products has evolved into a strong nationwide presence backed by a dedicated network of distributors and loyal customers. Over the years, we have expanded our product range, strengthened our systems, and continuously adapted to changing market needs. Each milestone in our journey reflects our focus on quality, innovation, and empowering individuals, driving us forward with the same passion to create a healthier and more prosperous future for all. </p></section><section class="timeline-nav" data-v-eef97642><!--[-->`);
      ssrRenderList(_ctx.years, (year) => {
        _push(`<button class="${ssrRenderClass({ active: _ctx.activeYear === year })}" data-v-eef97642>${ssrInterpolate(year)}</button>`);
      });
      _push(`<!--]--></section><section class="timeline-content" data-v-eef97642><div class="milestone-card" data-v-eef97642><div class="milestone-image" data-v-eef97642>`);
      if (_ctx.activeYear === 1962) {
        _push(`<img src="https://via.placeholder.com/350x220" data-v-eef97642>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeYear === 1959) {
        _push(`<img src="https://via.placeholder.com/350x220" data-v-eef97642>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="milestone-info" data-v-eef97642><h2 data-v-eef97642>${ssrInterpolate(_ctx.activeYear)}</h2>`);
      if (_ctx.activeYear === 1962) {
        _push(`<h3 data-v-eef97642> VCN becomes international </h3>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeYear === 1959) {
        _push(`<h3 data-v-eef97642>Company Founded</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeYear === 1962) {
        _push(`<p data-v-eef97642> VCN opens its first international office in Canada. This milestone marked the beginning of global expansion. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.activeYear === 1959) {
        _push(`<p data-v-eef97642> VCN was founded with the vision of helping people achieve success through entrepreneurship. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-journey/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eef97642"]]);

export { index as default };
//# sourceMappingURL=index-ChA2q1-c.mjs.map
