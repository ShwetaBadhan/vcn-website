<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{ cancellationRefund.heading }}</h3>

          <p
            v-for="(paragraph, index) in cancellationRefund.paragraphs"
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
await useAsyncData('cancellation-refund-cms', () => cmsStore.fetchSectionsBySlug('cancellation-refund'))

const cancellationRefund = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find cancellationRefund section by name or sectionKey
  const section = sections.find(s => s.name === 'cancellationRefund' || s.sectionKey === 'cancellation-refund')
  
  const fallback = cmsStore.getPageSection('cancellationRefund', 'cancellationRefund') || {
    heading: "Cancellation & Refund Policy",
    paragraphs: []
  }

  if (!section) {
    return fallback
  }

  // Find item by name 'content'
  const contentItem = section.items?.find(item => item.name === 'content')

  return {
    heading: contentItem?.title || fallback.heading,
    paragraphs: contentItem?.extraData?.paragraphs || fallback.paragraphs
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
</script>
