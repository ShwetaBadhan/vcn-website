<template>
  <!-- Top Header -->
  <div class="top-header" :class="{ 'hide': isHydrated && isHidden }" id="topHeader">
    <p>
      Because Your Health Deserves Better <span class="arrow">→</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true

  const handleScroll = () => {
    isHidden.value = window.scrollY > 50
  }

  // Initial check after hydration
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>