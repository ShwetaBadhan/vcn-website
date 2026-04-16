<script setup>
const toast = useToast()

const showSuccess = () => {
  toast.success({
    title: 'Success!',
    message: 'Your action was completed successfully.'
  })
}

const showError = () => {
  toast.error({
    title: 'Error!',
    message: 'Something went wrong.'
  })
}

const showInfo = () => {
  toast.info({
    title: 'Info',
    message: 'Here is some information.'
  })
}

const showWarning = () => {
  toast.warning({
    title: 'Warning!',
    message: 'Be careful with this action.'
  })
}

const showQuestion = () => {
  toast.question({
    title: 'Confirmation',
    message: 'Are you sure you want to continue with this action?'
  })
}

const showCustom = () => {
  // Custom toast with options
  toast.show({
    title: 'Custom Toast',
    message: 'This is a custom toast with options',
    timeout: 5000,
    position: 'topCenter'
  })
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl mb-4">Test Page - iziToast</h1>
    <div class="space-y-2">
      <UButton @click="showSuccess" color="green">Success Toast</UButton>
      <UButton @click="showError" color="red">Error Toast</UButton>
      <UButton @click="showInfo" color="blue">Info Toast</UButton>
      <UButton @click="showWarning" color="yellow">Warning Toast</UButton>
      <UButton @click="showQuestion" color="purple">Question Toast</UButton>
      <UButton @click="showCustom" color="gray">Custom Toast</UButton>
    </div>
  </div>
</template>
