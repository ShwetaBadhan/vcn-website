import { a as __nuxt_component_0$4, _ as _export_sfc } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
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

const _imports_0$1 = publicAssetsURL("/video/video.mp4");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}><video autoplay muted loop playsinline class="video-bg" preload="metadata"><source${ssrRenderAttr("src", _imports_0$1)} type="video/mp4"></video><div class="overlay"></div><div class="hero-content"><h1>Transform Your Health. Transform Your Life.</h1><p> Discover products you trust and opportunities that grow with you. </p><a href="/all-products" class="hero-btn">Shop Now</a></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HomeHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]), { __name: "HomeHero" });
const _imports_0 = publicAssetsURL("/img/image/frst image.png");
const _imports_1 = publicAssetsURL("/img/image/4th image img.png");
const _imports_2 = publicAssetsURL("/img/image/secon img.png");
const _imports_3 = publicAssetsURL("/img/image/third  img.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vcn-cobiotics-section" }, _attrs))}><div class="vcn-cobiotics-container"><div class="vcn-cobiotics-content" data-aos="fade-up" data-aos-duration="400"><span class="vcn-cobiotics-badge" data-aos="fade-up" data-aos-duration="400">Bundle + Save 25%</span><h2 class="vcn-cobiotics-title" data-aos="fade-up" data-aos-duration="400"> Empowering Health. Enriching Lives. </h2><p class="vcn-cobiotics-description" data-aos="fade-up" data-aos-duration="400"> Step into a world of natural wellness, trusted personal care, and rewarding growth opportunities. VCare Network is committed to providing quality products that nurture your health, support your everyday needs, and inspire a better, healthier future. </p><a href="/product-details/essential-duo" class="vcn-cobiotics-cta-btn" data-aos="fade-up" data-aos-duration="400">Shop Daily Essentials Duo</a></div><div class="vcn-cobiotics-images-wrapper" data-aos="fade-up" data-aos-duration="400"><div class="vcn-cobiotics-main-image"><img${ssrRenderAttr("src", _imports_0)} alt="Co-Biotics Products" loading="eager"></div><div class="vcn-cobiotics-thumbnails-grid"><div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400"><img${ssrRenderAttr("src", _imports_1)} alt="Product 2" loading="eager"></div><div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400"><img${ssrRenderAttr("src", _imports_2)} alt="Product 3" loading="eager"></div><div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400"><img${ssrRenderAttr("src", _imports_3)} alt="Product 4" loading="eager"></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/EssentialDuo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HomeEssentialDuo = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HomeEssentialDuo" });
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "vcn-probiotic-info-section" }, _attrs))}><div class="vcn-probiotic-container"><div class="vcn-probiotic-content-wrapper"><div class="vcn-probiotic-left-content" data-aos="fade-up" data-aos-duration="400"><div class="vcn-probiotic-brand-tag" data-aos="fade-up" data-aos-duration="400"> ViaCapsi Technology</div><h2 class="vcn-probiotic-main-heading" data-aos="fade-up" data-aos-duration="400"> Natural Solutions for Better Living </h2><div class="vcn-probiotic-stat-box" data-aos="zoom-in" data-aos-duration="400"><div class="vcn-probiotic-stat-label-wrapper"><span class="vcn-probiotic-stat-badge">VCN-01</span><span class="vcn-probiotic-stat-text">Increases healthy bacteria by</span></div><div class="vcn-probiotic-stat-divider"></div><div class="vcn-probiotic-stat-number-wrapper"><div class="vcn-probiotic-stat-icon">↑</div><span class="vcn-probiotic-stat-number">4.6</span><span class="vcn-probiotic-stat-multiplier">x*</span></div></div><p class="vcn-probiotic-disclaimer"> *In a clinical trial of vs 103 individuals with occasional GI challenges </p></div><div class="vcn-probiotic-right-content" data-aos="fade-up" data-aos-duration="400"><div class="vcn-probiotic-product-display"><div class="vcn-probiotic-callout vcn-probiotic-callout-top" data-aos="fade-up" data-aos-duration="400"><div class="vcn-probiotic-callout-title">Outer Capsule</div><div class="vcn-probiotic-callout-text"> Prepared with natural ingredients to support overall wellness and body balance </div></div><img src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1756048619/library/viacap/viacap-fallback.gif" alt="V-Heldi Curcumin" class="vcn-probiotic-product-image" loading="eager"><div class="vcn-probiotic-callout vcn-probiotic-callout-bottom" data-aos="fade-up" data-aos-duration="400"><div class="vcn-probiotic-callout-title">Inner Capsule</div><div class="vcn-probiotic-callout-text"> Formulated using natural sources to promote everyday digestive comfort and internal balance </div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/SurviveDigestion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomeSurviveDigestion = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeSurviveDigestion" });
publicAssetsURL("/img/image/acidty.png");
publicAssetsURL("/img/image/thyroid.png");
publicAssetsURL("/img/image/diabetes.png");
publicAssetsURL("/img/image/liver.png");
const _sfc_main$1 = {
  mounted() {
    const video = (void 0).getElementById("myVideo");
    if (!video) return;
    const videoSrc = "https://stream.mux.com/87tnV011w6GkwNzl7dxntQSNhpcVSJNgSQaqlj3iLTK00.m3u8?redundant_streams=true";
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    if ((void 0).Hls && (void 0).Hls.isSupported()) {
      const hls = new (void 0).Hls({
        autoStartLoad: true
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on((void 0).Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {
        });
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$4;
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/DiseaseBundle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeDiseaseBundle = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "HomeDiseaseBundle" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(HomeHero, null, null, _parent));
      _push(ssrRenderComponent(HomeEssentialDuo, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(HomeSurviveDigestion, null, null, _parent));
      _push(ssrRenderComponent(HomeDiseaseBundle, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Da4pTWDu.mjs.map
