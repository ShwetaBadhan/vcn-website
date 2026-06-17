<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{ grievance.heading }}</h3>

          <p
            v-for="(paragraph, index) in grievance.paragraphs"
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
await useAsyncData('grievance-cms', () =>
  cmsStore.fetchSectionsBySlug('grievance-redressal')
)

const grievance = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find grievance section by name or sectionKey
  const section = sections.find(
    s =>
      s.name === 'grievanceRedressal' ||
      s.sectionKey === 'grievance-redressal'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection(
      'grievanceRedressal',
      'grievanceRedressal'
    ) || {}

  if (!section) {
    return fallback
  }

  const contentItem = section.items?.find(
    item => item.name === 'content'
  )

  return {
    heading:
      section.title ||
      fallback.heading,

    paragraphs:
      contentItem?.extraData?.paragraphs ||
      fallback.paragraphs ||
      []
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>
