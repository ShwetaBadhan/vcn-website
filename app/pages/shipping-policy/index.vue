<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{shipping.title}}</h3>

          <p v-for="(paragraph, index) in shipping.paragraphs" :key="index">
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

const shipping = computed(() =>
  cmsStore.getPageSection('shippingDelivery', 'shippingDelivery')
)

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>