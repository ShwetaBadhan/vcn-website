<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{ grievance.heading }}</h3>

          <p v-for="(paragraph, index) in grievance.paragraphs" :key="index">{{ paragraph }}</p>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const grievance = computed(
  () => cmsStore.getPageSection('grievanceRedressal', 'grievanceRedressal')
)

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>