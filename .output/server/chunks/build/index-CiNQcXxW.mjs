import { _ as __nuxt_component_0 } from './Sidebar-CN2Cm6uV.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/img/leadership/ourleadership.jpeg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    const showModal = ref(false);
    const selectedMember = ref({});
    const boardMembers = ref([
      {
        name: "Harminder Singh ",
        title: "Director",
        image: "/img/leadership/our team 4.png",
        bio: "Harminder Singh serves as Director, providing strategic vision and leadership to the board.",
        education: "MBA from University of Chicago",
        experience: "Over 30 years in executive leadership"
      },
      {
        name: "Jasdeep Bawa",
        title: "Director",
        image: "/img/leadership/our team 2.png",
        bio: "Jasdeep Bawa brings extensive medical and public health expertise to the board.",
        education: "MD, Former U.S. Surgeon General",
        experience: "Distinguished career in medicine and public health"
      },
      {
        name: "Lynda Cloud",
        title: "Director",
        image: "/img/leadership/our team 3.png",
        bio: "Lynda Cloud provides strategic guidance on governance and compliance matters.",
        education: "MBA in Finance",
        experience: "20+ years in corporate governance"
      },
      {
        name: "Celine Del Genes",
        title: "Director",
        image: "/img/leadership/our team 5.png",
        bio: "Celine Del Genes contributes expertise in international business and market expansion.",
        education: "MBA from INSEAD",
        experience: "Global business leadership experience"
      },
      {
        name: "Sophie L'Hélias",
        title: "Director",
        image: "/img/leadership/our team.png",
        bio: "Sophie L'Hélias brings insights on digital transformation and innovation.",
        education: "MS in Technology Management",
        experience: "Leadership in tech and digital strategy"
      }
      // {
      //   name: "Michael Levitt",
      //   title: "Director",
      //   image:
      //     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      //   bio: "Michael Levitt offers strategic counsel on mergers, acquisitions, and corporate development.",
      //   education: "MBA from Wharton",
      //   experience: "30 years in corporate development",
      // },
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutSidebar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))} data-v-56e0eb88><div class="container-fluid" data-v-56e0eb88><div class="row" data-v-56e0eb88><div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block" data-v-56e0eb88>`);
      _push(ssrRenderComponent(_component_AboutSidebar, null, null, _parent));
      _push(`</div><div class="col-md-9 col-lg-9" data-v-56e0eb88><div class="leadership-page" data-v-56e0eb88><section class="hero-sectioning" data-v-56e0eb88><div class="container-fluid" data-v-56e0eb88><div class="row align-items-center" data-v-56e0eb88><div class="col-lg-6" data-v-56e0eb88><div class="hero-image" data-v-56e0eb88><img${ssrRenderAttr("src", _imports_0)} alt="Leadership" data-v-56e0eb88></div></div><div class="col-lg-6" data-v-56e0eb88><div class="hero-contents" data-v-56e0eb88><h1 class="hero-title" data-v-56e0eb88>Our leadership</h1><p class="hero-texts" data-v-56e0eb88> Our executive management and board of directors are passionate leaders who inspire us to live our best lives every day. With their diverse expertise and forward-thinking approach, they empower Herbalife Independent Distributors and employees to achieve our vision of becoming the world&#39;s premier health and wellness company, community and platform. </p><p class="hero-text" data-v-56e0eb88> Our leadership is driven by vision, integrity, and a commitment to excellence. With years of industry experience, our leaders guide the organization with a clear focus on innovation, quality, and sustainable growth. They inspire a culture of trust, empower our community, and continuously strive to create opportunities that help individuals achieve both personal and professional success. </p></div></div></div></div></section><section class="management-section" data-v-56e0eb88><div class="container" data-v-56e0eb88><h2 class="section-title" data-v-56e0eb88>Management</h2><div class="row" data-v-56e0eb88><!--[-->`);
      ssrRenderList(_ctx.managementTeam, (member, index2) => {
        _push(`<div class="col-lg-4 col-md-6 mb-4" data-v-56e0eb88><div class="team-card" data-v-56e0eb88><div class="team-image" data-v-56e0eb88><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-56e0eb88></div><div class="team-info" data-v-56e0eb88><h3 class="team-name" data-v-56e0eb88>${ssrInterpolate(member.name)}</h3><p class="team-titles" data-v-56e0eb88>${ssrInterpolate(member.title)}</p><button class="view-bio-btn" data-v-56e0eb88> View Bio </button></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-4" data-v-56e0eb88><button class="view-all-btn" data-v-56e0eb88><i class="bi bi-arrow-down" data-v-56e0eb88></i> View All </button></div></div></section><section class="board-section" data-v-56e0eb88><div class="container" data-v-56e0eb88><h2 class="section-title" data-v-56e0eb88>Board of directors</h2><div class="row" data-v-56e0eb88><!--[-->`);
      ssrRenderList(boardMembers.value, (member, index2) => {
        _push(`<div class="col-lg-4 col-md-6 mb-4" data-v-56e0eb88><div class="team-card" data-v-56e0eb88><div class="team-image" data-v-56e0eb88><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-56e0eb88></div><div class="team-info" data-v-56e0eb88><h3 class="team-name" data-v-56e0eb88>${ssrInterpolate(member.name)}</h3><p class="team-titles" data-v-56e0eb88>${ssrInterpolate(member.title)}</p><button class="view-bio-btn" data-v-56e0eb88> View Bio </button></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-4" data-v-56e0eb88><button class="view-all-btn" data-v-56e0eb88><i class="bi bi-arrow-down" data-v-56e0eb88></i> View All </button></div></div></section><section class="connect-section" data-v-56e0eb88><div class="container" data-v-56e0eb88><div class="row align-items-center" data-v-56e0eb88><div class="col-lg-4" data-v-56e0eb88><h2 class="connect-title" data-v-56e0eb88>Connect with our leadership</h2></div><div class="col-lg-5" data-v-56e0eb88><p class="connect-text" data-v-56e0eb88> We give everyone the opportunity to communicate directly with the chairman of the board, individual directors, non-management directors as a group or the entire board of directors. </p></div><div class="col-lg-3" data-v-56e0eb88><button class="contact-btn" data-v-56e0eb88><i class="bi bi-plus-circle" data-v-56e0eb88></i> Contact the Board </button></div></div></div></section>`);
      if (showModal.value) {
        _push(`<div class="modal-overlay" data-v-56e0eb88><div class="modal-content" data-v-56e0eb88><button class="modal-close" data-v-56e0eb88><i class="bi bi-x" data-v-56e0eb88></i></button><div class="modal-body" data-v-56e0eb88><div class="modal-image" data-v-56e0eb88><img${ssrRenderAttr("src", selectedMember.value.image)}${ssrRenderAttr("alt", selectedMember.value.name)} data-v-56e0eb88></div><div class="modal-info" data-v-56e0eb88><h2 class="modal-name" data-v-56e0eb88>${ssrInterpolate(selectedMember.value.name)}</h2><p class="modal-title" data-v-56e0eb88>${ssrInterpolate(selectedMember.value.title)}</p><div class="modal-description" data-v-56e0eb88><p data-v-56e0eb88>${ssrInterpolate(selectedMember.value.bio)}</p></div>`);
        if (selectedMember.value.education || selectedMember.value.experience) {
          _push(`<div class="modal-details" data-v-56e0eb88>`);
          if (selectedMember.value.education) {
            _push(`<div class="detail-section" data-v-56e0eb88><h4 data-v-56e0eb88>Education</h4><p data-v-56e0eb88>${ssrInterpolate(selectedMember.value.education)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedMember.value.experience) {
            _push(`<div class="detail-section" data-v-56e0eb88><h4 data-v-56e0eb88>Experience</h4><p data-v-56e0eb88>${ssrInterpolate(selectedMember.value.experience)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-leadership/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56e0eb88"]]);

export { index as default };
//# sourceMappingURL=index-CiNQcXxW.mjs.map
