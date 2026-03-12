<!-- src/views/RegistrationPage.vue -->
<template>
  <div class="registration-page-wrapper">
    <RegistrationForm 
      :userType="userType"
      :isModal="false"
      @registrationComplete="handleRegistrationComplete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RegistrationForm from '@/components/RegistrationForm.vue'

const route = useRoute()
const router = useRouter()

const userType = ref(route.query.type || 'preferred-customer')

onMounted(() => {
  if (!['preferred-customer', 'abo'].includes(userType.value)) {
    router.replace('/register?type=preferred-customer')
  }
})

const handleRegistrationComplete = (data) => {
  console.log('✅ Registration completed:', data)
}
</script>

<style scoped>
.registration-page-wrapper {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>