<script setup>
import HomeHero from '~/components/Home/Hero.vue'
import HomeEssentialDuo from '~/components/Home/EssentialDuo.vue'
import HomeProducts from '~/components/Home/Products.vue'
import HomeSurviveDigestion from '~/components/Home/SurviveDigestion.vue'
import HomeDiseaseBundle from '~/components/Home/DiseaseBundle.vue'
import HomeTestimonial from '~/components/Home/Testimonial.vue'
import HomeConsultancyCTA from '~/components/Home/ConsultancyCTA.vue'
import HomeStories from '~/components/Home/Stories.vue'
</script>

<template>
   <HomeHero />
   <HomeEssentialDuo />
   <HomeProducts key="products-1" />
   <HomeSurviveDigestion />
   <HomeDiseaseBundle />
   <HomeTestimonial />
   <HomeConsultancyCTA />
   <HomeStories />
</template>
