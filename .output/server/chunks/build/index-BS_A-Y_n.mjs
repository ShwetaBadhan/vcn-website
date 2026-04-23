import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    const activeCategory = ref("View All");
    const categories = [
      "View All",
      "Health",
      "Recipes",
      "Weight Loss",
      "Supplements",
      "Lifestyle",
      "Kids",
      "Skincare"
    ];
    const blogs = ref([
      {
        title: "Fatty Liver Disease Guide: Causes, Symptoms & Risks",
        category: "Health",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Is Grade 2 Fatty Liver Dangerous?",
        category: "Health",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Can a Grade 2 Fatty Liver Disease Be Cured...",
        category: "Health",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f1398f70f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "10 Superfoods for a Healthy Liver",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Morning Yoga Routine for Better Digestion",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Understanding Vitamin D Deficiency",
        category: "Supplements",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Healthy Meal Prep Ideas for Busy Professionals",
        category: "Recipes",
        image: "https://images.unsplash.com/photo-1498837163234-a26982f955cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Ultimate Weight Loss Guide for Beginners",
        category: "Weight Loss",
        image: "https://images.unsplash.com/photo-1434494838584-02fb06a4a96d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Natural Skincare Routines for Glowing Skin",
        category: "Skincare",
        image: "https://images.unsplash.com/photo-1570172619644-dfd286652c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]);
    const filteredBlogs = computed(() => {
      if (activeCategory.value === "View All") {
        return blogs.value;
      }
      return blogs.value.filter((blog) => blog.category === activeCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-detail-section mt-3" }, _attrs))}><section class="vcn-blogs-page py-5"><div class="container"><div class="vcn-category-filters d-flex gap-2 mb-5 flex-wrap justify-content-center"><!--[-->`);
      ssrRenderList(categories, (category, index) => {
        _push(`<button class="${ssrRenderClass(["vcn-filter-btn", "btn", "btn-outline-secondary", "rounded-1", { "active": activeCategory.value === category }])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div><h2 class="vcn-section-title text-center fw-semibold mb-5">All blog posts</h2><div class="vcn-blog-grid row g-4 mb-5"><!--[-->`);
      ssrRenderList(filteredBlogs.value, (blog, index) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="vcn-blog-card card h-100 border-0 shadow-sm"><div class="vcn-blog-image-wrapper position-relative overflow-hidden"><img${ssrRenderAttr("src", blog.image)}${ssrRenderAttr("alt", blog.title)} class="vcn-blog-image card-img-top"><span class="vcn-blog-category position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded small fw-bold text-success">${ssrInterpolate(blog.category)}</span></div><div class="vcn-blog-content card-body d-flex justify-content-between align-items-start gap-3"><h3 class="vcn-blog-title card-title fs-6 fw-semibold mb-0 text-dark">${ssrInterpolate(blog.title)}</h3><a href="/blog-details" class="vcn-read-more-btn btn btn-success rounded-circle p-2 flex-shrink-0"><i class="bi bi-arrow-right"></i></a></div><div class="blog-metas"><span class="authors"><i class="bi bi-person"></i> Content VCN </span><span class="dates"><i class="bi bi-calendar"></i> 21 Feb, 2025 </span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-5"><button class="vcn-load-more-btn btn btn-outline-success rounded-pill px-5 py-2 fw-semibold"> Load More </button></div></div></section></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BS_A-Y_n.mjs.map
