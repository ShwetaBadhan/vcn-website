<template>
  <ClientOnly>
    <!-- Top Header -->
    <div class="top-header" :class="{ 'hide': isHidden }" id="topHeader">
      <p>
        Is DS-01® Daily Synbiotic Right For You? <span class="arrow">→</span>
      </p>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isHidden.value = window.scrollY > 50
  }

  // Initial check
  handleScroll()

  window.addEventListener('scroll', handleScroll)

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>