<template>
  <!-- Top Header -->
  <div class="top-header" :class="{ 'hide': isHydrated && isHidden }" id="topHeader">
    <p>
      Because Your Health <span class="text-nowrap">Deserves Better <span class="arrow">→</span></span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
const isHydrated = ref(false)

const updateHeaderHeight = () => {
  const headerEl = document.getElementById('topHeader')
  if (headerEl) {
    const height = headerEl.offsetHeight
    document.documentElement.style.setProperty('--top-header-height', `${height}px`)
  }
}

onMounted(() => {
  isHydrated.value = true

  const handleScroll = () => {
    isHidden.value = window.scrollY > 50
  }

  // Initial checks
  handleScroll()
  updateHeaderHeight()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateHeaderHeight, { passive: true })

  // Use ResizeObserver to dynamically track layout shifts/text wrapping
  let resizeObserver = null
  const headerEl = document.getElementById('topHeader')
  if (headerEl && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight()
    })
    resizeObserver.observe(headerEl)
  }

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', updateHeaderHeight)
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })
})
</script>

<!-- Global CSS Custom Variables for TopHeader heights -->
<style>
:root {
  --top-header-height: 45px;
}

@media (max-width: 1200px) {
  :root {
    --top-header-height: 36px;
  }
}

@media (max-width: 991px) {
  :root {
    --top-header-height: 33px;
  }
}

@media (max-width: 768px) {
  :root {
    --top-header-height: 31px;
  }
}

@media (max-width: 576px) {
  :root {
    --top-header-height: 35px;
  }
}

@media (max-width: 380px) {
  :root {
    --top-header-height: 35px;
  }
}
</style>

<style scoped>
.top-header {
  width: 100%;
  background-color: var(--vcn-light);
  padding: 8.5px 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9998;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-header.hide {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.top-header p {
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--vcn-primary);
  font-weight: 500;
  line-height: 1.3;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  box-sizing: border-box;
}

.top-header .arrow {
  margin-left: 6px;
  font-weight: 600;
  color: var(--vcn-footer);
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.top-header:hover .arrow {
  transform: translateX(4px);
}

.text-nowrap {
  white-space: nowrap;
}

/* Responsive Overrides */
@media (max-width: 1200px) {
  .top-header p {
    font-size: 0.95rem;
  }
}

@media (max-width: 991px) {
  .top-header {
    padding: 7.5px 10px;
  }
  .top-header p {
    font-size: 0.9rem;
    letter-spacing: 0.4px;
  }
}

@media (max-width: 768px) {
  .top-header {
    padding: 6.5px 8px;
  }
  .top-header p {
    font-size: 0.85rem;
    letter-spacing: 0.3px;
  }
}

@media (max-width: 576px) {
  .top-header {
    padding: 6.5px 6px;
  }
  .top-header p {
    font-size: 0.78rem;
    letter-spacing: 0.2px;
  }
}

@media (max-width: 380px) {
  .top-header {
    padding: 5.5px 4px;
  }
  .top-header p {
    font-size: 0.72rem;
    letter-spacing: 0.1px;
  }
  .top-header .arrow {
    margin-left: 4px;
  }
}
</style>