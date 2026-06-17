<template>
  <section class="terms-conditions">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">

          <h3>
            {{ termsConditions.title }}
          </h3>

          <div
            v-for="(section, index) in termsConditions.sections"
            :key="index"
          >
            <h6>{{ section.title }}</h6>
            <p>{{ section.content }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

// Fetch page sections from API during SSR/routing
await useAsyncData('terms-conditions-cms', () =>
  cmsStore.fetchSectionsBySlug('terms-conditions')
)

const termsConditions = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find terms section by name or sectionKey
  const section = sections.find(
    s =>
      s.name === 'termsConditions' ||
      s.sectionKey === 'termsConditions'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection(
      'termsConditions',
      'termsConditions'
    ) || {}

  if (!section) {
    return fallback
  }

  return {
    title:
      section.title ||
      fallback.title,

    sections:
      section.items?.map(item => ({
        title: item.title,
        content: item.description
      })) ||
      fallback.sections ||
      []
  }
})

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>
