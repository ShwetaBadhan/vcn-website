<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{ shipping.title }}</h3>

          <p
            v-for="(paragraph, index) in shipping.paragraphs"
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
await useAsyncData('shipping-delivery-cms', () =>
  cmsStore.fetchSectionsBySlug('shipping-delivery-policy')
)

const shipping = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find shipping section by name or sectionKey
  const section = sections.find(
    s =>
      s.name === 'shippingDelivery' ||
      s.sectionKey === 'shippingDelivery'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection(
      'shippingDelivery',
      'shippingDelivery'
    ) || {}

  if (!section) {
    return fallback
  }

  return {
    title:
      section.title ||
      fallback.title,

    paragraphs:
      section.items?.map(item => item.description) ||
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
