import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-list" }, _attrs))}><div class="sidebar-inner"><a class="menu-item active" href="/our-leadership">Our Leadership</a><a class="menu-item" href="/about-us">VCN India</a><a class="menu-item" href="/our-journey">Our Journey</a><a class="menu-item" href="/news">News</a><a class="menu-item" href="/careers">Careers at VCN</a><a class="menu-item" href="/faqs">FAQs</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "AboutSidebar" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Sidebar-CN2Cm6uV.mjs.map
