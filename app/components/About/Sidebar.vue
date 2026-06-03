<script setup>
import { useCmsStore } from '~/stores/cms'

const cmsStore = useCmsStore()

const sidebar = computed(() => cmsStore.sidebar)
</script>

<template>
    <div class="menu-list">

       <!-- <div class="sidebar-inner">
            <a class="menu-item active" href="/our-leadership">Our Leadership</a> 
           <a class="menu-item " href="/about-us">VCN India</a>
            <a class="menu-item" href="/how-vcn-works">How VCN Business Works</a>
            <a class="menu-item" href="/our-journey">Our Journey</a>
            <a class="menu-item" href="/news">News</a>
            <a class="menu-item" href="/careers">Careers at VCN</a>
            <a class="menu-item" href="/faqs">FAQs</a>
       </div> -->
        <div class="sidebar-inner">
            <NuxtLink v-for="item in sidebar" :key="item.link" class="menu-item" :to="item.link" active-class="active">
                {{ item.title }}
            </NuxtLink>
        </div>
    </div>
</template>

