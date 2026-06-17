<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>
            {{ privacyPolicy.heading }}
          </h3>

          <template
            v-for="(section, index) in privacyPolicy.sections"
            :key="index"
          >
            <h6>
              {{ section.title }}
            </h6>

            <p>
              {{ section.content }}
            </p>
          </template>

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
await useAsyncData('privacy-policy-cms', () =>
  cmsStore.fetchSectionsBySlug('privacy-policy')
)

const privacyPolicy = computed(() => {
  const sections = cmsStore.currentPage?.sections || []

  // Find privacy policy section by name or sectionKey
  const section = sections.find(
    s =>
      s.name === 'privacyPolicy' ||
      s.sectionKey === 'privacy-policy'
  )

  // Use your existing fallback constant
  const fallback =
    cmsStore.getPageSection(
      'privacy',
      'privacyPolicy'
    ) || {}

  if (!section) {
    return fallback
  }

  return {
    heading:
      section.title ||
      fallback.heading,

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
