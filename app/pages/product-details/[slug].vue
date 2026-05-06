<template>
  <ProductDetailsIntroduction :product-page="productStore.selectedProductPage" />
  <ProductDetailsStrainSection />
  <ProductDetailsHealthSection />
  <ProductDetailsFormulationSection />
  <ProductDetailsBundleSection />
  <ProductDetailsBenefitsSection />
  <!-- <ProductDetailsCellularEnergySection /> -->
  <!-- <ProductDetailsCompareSection /> -->
  <ProductDetailsRigorousSection />
  <!-- <ProductDetailsProbioticSection /> -->
  <ProductDetailsDifferenceSection />
  <!-- <ProductDetailsStrengthenSection /> -->
  <ProductDetailsProducts />
  <ProductDetailsReviewSection
    :product-id="productStore.selectedProduct?.id || productStore.selectedProductPage?.productId" />
</template>

<script setup>
const route = useRoute()
const productStore = useProductStore()

const slug = computed(() => route.params.slug)

// Fetch product page data when slug changes
watchEffect(() => {
  if (slug.value) {
    productStore.fetchProductPageBySlug(slug.value)
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>
