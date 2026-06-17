<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>{{ disclaimer.heading }}</h3>

          <p
            v-for="(paragraph, index) in disclaimer.paragraphs"
            :key="index"
          >
            {{ paragraph }}
          </p>
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
await useAsyncData('disclaimer-cms', () =>
  cmsStore.fetchSectionsBySlug('disclaimer')
)

const disclaimer = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find disclaimer section by name or sectionKey
  const section = sections.find(
    s => s.name === 'disclaimer' || s.sectionKey === 'disclaimer'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection('disclaimer', 'disclaimer') || {}

  if (!section) {
    return fallback
  }

  const contentItem = section.items?.find(
    item => item.name === 'content'
  )

  return {
    heading: section.title || fallback.heading,
    paragraphs:
      contentItem?.extraData?.paragraphs ||
      fallback.paragraphs ||
      []
  }
})

useHead({
  bodyAttrs: {
    class: 'disclaimer-page',
  },
})
</script>
