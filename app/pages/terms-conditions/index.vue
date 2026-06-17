<template>
  <section class="terms-conditions">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">

          <h3>
            {{ termsConditions.title }}
          </h3>

          <div v-for="(section, index) in termsConditions.sections" :key="index">
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

const termsConditions = computed(() =>
  cmsStore.getPageSection('termsConditions', 'termsConditions')
)

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>