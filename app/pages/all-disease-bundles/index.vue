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
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const bundles = computed(
  () => cmsStore.getPageSection('bundles', 'bundles')
)
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>