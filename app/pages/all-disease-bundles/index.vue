<template>
  <section class="terms-conditions">
    <div class="container">
      <div class="disease-grid">
        <div
          v-for="(bundle, index) in bundles?.bundles"
          :key="index"
          class="disease-card"
        >
          <div class="disease-card-image">
            <div class="disease-icon">
              <img
                :src="bundle.image"
                :alt="bundle.title"
              />
            </div>
          </div>

          <div class="disease-card-body">
            <h3 class="disease-title">
              {{ bundle.title }}
            </h3>

            <NuxtLink
              :to="bundle.link"
              class="learn-more-btn"
            >
              LEARN MORE
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('disease-bundles-cms', () => cmsStore.fetchSectionsBySlug('disease-bundles'))

const bundles = computed(() => {
  const section = cmsStore.getSectionByKey('disease-bundles')
  const fallback = cmsStore.getPageSection('bundles', 'bundles') || { bundles: [] }
  
  if (section && section.items && section.items.length > 0) {
    const cmsBundles = section.items.map(item => {
      // Find matching fallback item by title to use its local image asset as a fallback
      const fallbackItem = fallback.bundles?.find(
        fb => fb.title.trim().toLowerCase() === item.title?.trim().toLowerCase()
      )
      
      return {
        title: item.title || 'Disease',
        image: getCmsImageUrl(item.image || item.extraData?.image, '') || fallbackItem?.image || '/img/image/acidty.png',
        link: item.buttonLink || item.extraData?.link || item.config?.link || fallbackItem?.link || '/bundle-details'
      }
    })
    
    return {
      bundles: cmsBundles
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
