import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useHead } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/img/about/about-us.png");
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
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))}><div class="container-fluid"><div class="row g-0"><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9"><img${ssrRenderAttr("src", _imports_0)} alt="Happy family running in park" class="hero-banner"><div class="welcome-box"><h2>Welcome to the world of VCN!</h2><p>Helping people live better lives</p></div><h1 class="main-heading">This is VCN</h1><div class="content-section"><p> Vcare Network (VCN), is a fast-growing direct selling company established in 2009 with a strong presence across India. With its corporate office in Delhi and headquarters in Jalandhar, the company has built a reputation for delivering trusted, high-quality healthcare and personal care products. </p><p> Our mission is to enhance the quality of life for our customers and distributors by offering a wide range of organic, natural, and wellness-focused products. From health supplements to personal care solutions, every product is carefully researched and developed to ensure safety, effectiveness, and long-term benefits. </p><p> Backed by a skilled team and a wide network across multiple cities, VCN is committed to innovation, customer satisfaction, and social empowerment—creating opportunities and promoting positive change. Vcare Network continues to evolve as a trusted name in wellness and direct selling across India. </p><h2 class="section-title">Our Story</h2><p> What started as a vision to transform lives through wellness and opportunity has grown into a trusted name in the health and personal care industry. Founded in 2009 under the umbrella of Falcon Marketing Pvt., Vcare Network was built with a simple yet powerful belief — that nature holds the key to a healthier, more balanced life. </p><p> From humble beginnings, we set out to create products that combine the wisdom of traditional herbal practices with modern scientific research. Over the years, our commitment to quality, purity, and innovation has helped us develop a diverse portfolio of wellness, skincare, and personal care solutions designed to support everyday health and well-being. </p><p> But our journey has never been just about products. At the heart of Vcare Network lies a mission to empower people — not only to live healthier lives but also to achieve financial independence through a strong and supportive direct selling model. By creating opportunities for individuals to grow, earn, and succeed, we have built a community driven by trust, ambition, and shared success. </p><p> Today, Vcare Network stands as a fast-growing organization with a presence across India, backed by a dedicated network of distributors and a loyal customer base. As we continue to evolve, our focus remains unchanged — to enhance quality of life, inspire confidence, and create a future where wellness and prosperity go hand in hand. </p><h2 class="section-title">Helping Build a Healthier Future</h2><p> At Vcare Network, we are committed to building a healthier future by promoting holistic wellness through nature-inspired solutions. Our focus lies in developing high-quality products that support overall well-being, helping individuals lead more balanced and energetic lives. By combining traditional herbal knowledge with modern research, we strive to address everyday health concerns in a safe and effective way. </p><h2 class="section-title">Our Strength</h2><p> Our strength lies in our unwavering commitment to quality, trust, and people. With a strong foundation built on years of experience, we have created a reliable network of distributors and satisfied customers across the country. Our diverse product range, backed by careful research and stringent quality standards, reflects our dedication to excellence. What truly sets us apart is our people-centric approach—empowering individuals with opportunities for growth, financial independence, and personal success. </p><div class="more-about-section"><div class="container"><h2 class="section-title">More About Us</h2><div class="row g-3"><div class="col-md-3 col-sm-6"><div class="info-card"><div class="d-flex justify-content-between align-items-start"><div><div class="icon-wrapper icon-journey"><i class="bi bi-bullseye"></i></div><h3 class="card-title">Our Journey</h3></div><i class="bi bi-arrow-right arrow-icon"></i></div></div></div><div class="col-md-3 col-sm-6"><div class="info-card"><div class="d-flex justify-content-between align-items-start"><div><div class="icon-wrapper icon-news"><i class="bi bi-globe"></i></div><h3 class="card-title">Top News</h3></div><i class="bi bi-arrow-right arrow-icon"></i></div></div></div><div class="col-md-3 col-sm-6"><div class="info-card"><div class="d-flex justify-content-between align-items-start"><div><div class="icon-wrapper icon-brands"><i class="bi bi-bag"></i></div><h3 class="card-title">Our Brands</h3></div><i class="bi bi-arrow-right arrow-icon"></i></div></div></div><div class="col-md-3 col-sm-6"><div class="info-card"><div class="d-flex justify-content-between align-items-start"><div><div class="icon-wrapper icon-faqs"><i class="bi bi-chat-dots"></i></div><h3 class="card-title">FAQs</h3></div><i class="bi bi-arrow-right arrow-icon"></i></div></div></div></div></div></div><div class="bottom-section"><div class="container"><div class="row g-3 justify-content-center"><div class="col-md-5 col-sm-10"><div class="bottom-card"><div class="bottom-icon icon-shopping"><i class="bi bi-bullseye"></i></div><div class="bottom-content"><h3>Get personalised solutions</h3><a href="#">Start Shopping</a></div></div></div><div class="col-md-5 col-sm-10"><div class="bottom-card"><div class="bottom-icon icon-business"><i class="bi bi-heart"></i></div><div class="bottom-content"><h3>Be your own boss</h3><a href="#">Start Your Business</a></div></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dj5nmYky.mjs.map
