<template>
  <section class="product-detail-section mt-3">
    <section class="vcn-blogs-page py-5">
      <div class="container">

        <!-- Category Filters -->
        <div class="vcn-category-filters d-flex gap-2 mb-5 flex-wrap justify-content-center">
          <button v-for="(category, index) in blogs.categories" :key="index"
            :class="['vcn-filter-btn', 'btn', 'btn-outline-secondary', 'rounded-1', { 'active': activeCategory === category }]"
            @click="activeCategory = category">
            {{ category }}
          </button>
        </div>

        <!-- Section Title -->
        <h2 class="vcn-section-title text-center fw-semibold mb-5">{{ blogs.sectionTitle }}</h2>

        <!-- Blog Posts Grid -->
        <div class="vcn-blog-grid row g-4 mb-5">
          <div v-for="(blog, index) in filteredBlogs" :key="index" class="col-lg-4 col-md-6">
            <div class="vcn-blog-card card h-100 border-0 shadow-sm">
              <div class="vcn-blog-image-wrapper position-relative overflow-hidden">
                <img :src="blog.image" :alt="blog.title" class="vcn-blog-image card-img-top">
                <span
                  class="vcn-blog-category position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded small fw-bold text-success">
                  {{ blog.category }}
                </span>
              </div>
              <div class="vcn-blog-content card-body d-flex justify-content-between align-items-start gap-3">
                <h3 class="vcn-blog-title card-title fs-6 fw-semibold mb-0 text-dark">{{ blog.title }}</h3>
                <NuxtLink :to="blog.link" class="vcn-read-more-btn btn btn-success rounded-circle p-2 flex-shrink-0">
                  <i class="bi bi-arrow-right"></i>
                </NuxtLink>
              </div>
              <div class="blog-metas">
                <span class="authors">
                  <i class="bi bi-person"></i>
                  {{ blog.author }}
                </span>

                <span class="dates">
                  <i class="bi bi-calendar"></i>
                  {{ blog.date }}
                </span>

              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-5">
          <button class="vcn-load-more-btn btn btn-outline-success rounded-pill px-5 py-2 fw-semibold">
            {{ blogs.buttons.loadMore }}
          </button>
        </div>

      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const blogs = computed(
  () => cmsStore.getPageSection('blogs', 'blogs')
)

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});

const activeCategory = ref('View All')

// const categories = [
//   'View All',
//   'Health',
//   'Recipes',
//   'Weight Loss',
//   'Supplements',
//   'Lifestyle',
//   'Kids',
//   'Skincare'
// ]

// const blogs = ref([
//   {
//     title: 'Fatty Liver Disease Guide: Causes, Symptoms & Risks',
//     category: 'Health',
//     image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Is Grade 2 Fatty Liver Dangerous?',
//     category: 'Health',
//     image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Can a Grade 2 Fatty Liver Disease Be Cured...',
//     category: 'Health',
//     image: 'https://images.unsplash.com/photo-1530026405186-ed1f1398f70f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: '10 Superfoods for a Healthy Liver',
//     category: 'Nutrition',
//     image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Morning Yoga Routine for Better Digestion',
//     category: 'Lifestyle',
//     image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Understanding Vitamin D Deficiency',
//     category: 'Supplements',
//     image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Healthy Meal Prep Ideas for Busy Professionals',
//     category: 'Recipes',
//     image: 'https://images.unsplash.com/photo-1498837163234-a26982f955cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'The Ultimate Weight Loss Guide for Beginners',
//     category: 'Weight Loss',
//     image: 'https://images.unsplash.com/photo-1434494838584-02fb06a4a96d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     title: 'Natural Skincare Routines for Glowing Skin',
//     category: 'Skincare',
//     image: 'https://images.unsplash.com/photo-1570172619644-dfd286652c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
//   }
// ])

const filteredBlogs = computed(() => {
  const blogList = blogs.value?.blogs || []

  if (activeCategory.value === 'View All') {
    return blogList
  }

  return blogList.filter(
    blog => blog.category === activeCategory.value
  )
})
</script>
