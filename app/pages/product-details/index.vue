<script setup>
// Redirect old query-based URLs to new path-based format
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const slug = route.query.slug
  if (slug) {
    router.replace(`/product-details/${slug}`)
  } else {
    // No slug provided, redirect to all products page
    router.replace('/all-products')
  }
})
</script>

<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
