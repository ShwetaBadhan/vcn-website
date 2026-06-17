<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useRoute } from 'vue-router'

const cmsStore = useCmsStore()
const route = useRoute()

const sidebar = computed(() => cmsStore.sidebar || [])

// Find the active item based on the current path
const activeItem = computed(() => {
  return sidebar.value.find(item => route.path === item.link) || { title: 'Menu', link: '#' }
})

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// Close dropdown on click outside
let clickOutsideHandler = null
onMounted(() => {
  clickOutsideHandler = (e) => {
    const el = document.querySelector('.mobile-sidebar-dropdown')
    if (el && !el.contains(e.target)) {
      closeDropdown()
    }
  }
  document.addEventListener('click', clickOutsideHandler)
})

onUnmounted(() => {
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler)
  }
})
</script>

<template>
  <div class="about-sidebar-wrapper">
    <!-- Desktop Sidebar (hidden on mobile) -->
    <div class="desktop-sidebar d-none d-md-block">
      <div class="sidebar-inner">
        <NuxtLink v-for="item in sidebar" :key="item.link" class="menu-item" :to="item.link" active-class="active">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Dropdown (visible on mobile only) -->
    <div class="mobile-sidebar-dropdown d-md-none">
      <div class="sidebar-dropdown-header" @click.stop="toggleDropdown">
        <span class="active-title-text">{{ activeItem.title }}</span>
        <svg class="chevron-icon" :class="{ open: isOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      <transition name="fade-slide">
        <div v-if="isOpen" class="sidebar-dropdown-list">
          <NuxtLink 
            v-for="item in sidebar" 
            :key="item.link" 
            class="sidebar-dropdown-item" 
            :to="item.link" 
            active-class="active"
            @click="closeDropdown"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.about-sidebar-wrapper {
  width: 100%;
}

.desktop-sidebar {
  width: 100%;
}

/* MOBILE DROPDOWN STYLES */
.mobile-sidebar-dropdown {
  position: relative;
  width: 100%;
  background: #ffffff;
  z-index: 100;
}

.sidebar-dropdown-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  cursor: pointer;
  user-select: none;
}

.active-title-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.chevron-icon {
  width: 16px;
  height: 16px;
  color: #4b5563;
  transition: transform 0.2s ease;
}

.chevron-icon.open {
  transform: rotate(180deg);
}

.sidebar-dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  border-top: none;
  display: flex;
  flex-direction: column;
}

.sidebar-dropdown-item {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563 !important;
  text-decoration: none;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s ease, color 0.2s ease;
  text-align: left;
}

.sidebar-dropdown-item:last-child {
  border-bottom: none;
}

.sidebar-dropdown-item:hover {
  background-color: #f9fafb;
  color: #111827 !important;
}

.sidebar-dropdown-item.active {
  background-color: #eff6ff !important;
  color: #1e40af !important;
  font-weight: 600;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
