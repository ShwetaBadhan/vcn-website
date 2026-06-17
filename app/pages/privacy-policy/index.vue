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
import { computed} from 'vue'
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const privacyPolicy = computed(() =>
  cmsStore.getPageSection('privacy', 'privacyPolicy')
)

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>