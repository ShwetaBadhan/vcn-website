import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
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

const _imports_0 = publicAssetsURL("/img/news/news.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const activeYear = ref(2026);
    const years = [2026, 2025, 2024, 2023];
    const news = [
      {
        year: 2026,
        date: "February 18, 2026",
        title: "VCN expands wellness portfolio with new herbal range.",
        source: "Business Standard"
      },
      {
        year: 2026,
        date: "February 10, 2026",
        title: "VCN focuses on empowering women entrepreneurs nationwide.",
        source: "The Hindu BusinessLine"
      },
      {
        year: 2026,
        date: "January 28, 2026",
        title: "VCN promotes natural health solutions in urban markets.",
        source: "Financial Express"
      },
      {
        year: 2026,
        date: "January 20, 2026",
        title: "Rising demand for organic products boosts VCN’s growth.",
        source: "Mint"
      },
      {
        year: 2026,
        date: "January 12, 2026",
        title: "Wellness industry trends: VCN highlights importance of preventive healthcare.",
        source: "India Today"
      }
    ];
    const filteredNews = computed(
      () => news.filter((item) => item.year === activeYear.value)
    );
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))} data-v-e266b4fd><div class="container-fluid" data-v-e266b4fd><div class="row" data-v-e266b4fd><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block" data-v-e266b4fd>`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9" data-v-e266b4fd><div class="news-content" data-v-e266b4fd><section class="news-hero" data-v-e266b4fd><img${ssrRenderAttr("src", _imports_0)} class="news-banner" data-v-e266b4fd><div class="hero-title" data-v-e266b4fd><h1 data-v-e266b4fd>VCN In News</h1></div></section><div class="media-heading" data-v-e266b4fd><h2 data-v-e266b4fd>Media Coverage</h2></div><div class="year-tabs" data-v-e266b4fd><!--[-->`);
      ssrRenderList(years, (year) => {
        _push(`<button class="${ssrRenderClass({ active: activeYear.value === year })}" data-v-e266b4fd>${ssrInterpolate(year)}</button>`);
      });
      _push(`<!--]--></div><div class="news-grid" data-v-e266b4fd><!--[-->`);
      ssrRenderList(filteredNews.value, (item) => {
        _push(`<div class="news-card" data-v-e266b4fd><div class="news-logo" data-v-e266b4fd>A</div><div class="news-info" data-v-e266b4fd><span class="news-date" data-v-e266b4fd>${ssrInterpolate(item.date)}</span><h3 class="news-title" data-v-e266b4fd>${ssrInterpolate(item.title)}</h3><p class="news-source" data-v-e266b4fd>${ssrInterpolate(item.source)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e266b4fd"]]);

export { index as default };
//# sourceMappingURL=index-Cf_W-VFu.mjs.map
