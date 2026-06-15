<template>
  <section class="terms-conditions">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h3>{{ accessibility.title }}</h3>

          <p v-for="(paragraph, index) in accessibility.content" :key="index">
             {{ paragraph }}
          </p>
          <!-- <p>
            VCN is committed to ensuring that our website is accessible to all users, including individuals with
            disabilities. We strive to provide a seamless and user-friendly experience by following best practices for
            accessibility and usability. Our goal is to make our content easy to navigate, understand, and interact with
            across different devices and assistive technologies.
          </p>
          <p>
            We continuously work to improve accessibility features and welcome feedback to enhance user experience. If
            you encounter any difficulty while accessing our website or need assistance, please feel free to contact
            us—we are here to help.
          </p> -->
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

onMounted(async () => {
  await cmsStore.fetchSectionsBySlug('accessibility')
})

const accessibility = computed(() => {
  const section = cmsStore.getSectionByKey('accessibility')
  const fallback = cmsStore.getPageSection('accessibility', 'accessibility') || { title: '', content: [] }
  
  if (section) {
    let content = []
    if (section.items && section.items.length > 0) {
      content = section.items.map(item => item.description || item.title || '').filter(Boolean)
    } else if (section.description) {
      content = [section.description]
    }
    
    return {
      title: section.title || fallback.title,
      content: content.length > 0 ? content : fallback.content
    }
  }
  
  return fallback
})

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>