<template>
  <section class="terms-conditions mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <h3>{{ disclaimer.heading }}</h3>
          <p v-for="(paragraph, index) in disclaimer.paragraphs" :key="index">{{ paragraph }}</p>
          <!-- <p>
            The information provided on the VCN website is for general informational purposes only. While we
            strive to ensure accuracy, we do not guarantee the completeness or reliability of any content, product
            descriptions, or results mentioned.
          </p>
          <p>Our products are not intended to diagnose, treat, cure, or prevent any disease, and individual results may
            vary. Users are advised to consult a qualified professional before using any healthcare or wellness product.
          </p>
          <p>VCN shall not be held responsible for any direct or indirect damages arising from the use of the
            website, products, or reliance on the information provided.</p> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const disclaimer = computed(
  () => cmsStore.getPageSection('disclaimer', 'disclaimer')
)

useHead({
  bodyAttrs: {
    class: "disclaimer-page",
  },
});
</script>