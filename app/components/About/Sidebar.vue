<script setup>
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const sidebar = computed(() => cmsStore.sidebar)
</script>

<template>
    <div class="menu-list">
        <div class="sidebar-inner">
            <NuxtLink v-for="item in sidebar" :key="item.link" class="menu-item" :to="item.link" active-class="active">
                {{ item.title }}
            </NuxtLink>
        </div>
    </div>
</template>

