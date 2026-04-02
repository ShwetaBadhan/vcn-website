<template>
  <div class="error-page">
    <TopHeader />
    <Navbar />

    <main class="error-main">
      <div class="error-container">
        <div class="content">
          <div class="error-number">404</div>
          <h1>Page Not Found</h1>

          <p class="sub">
            Are you lost? →
            <NuxtLink to="/" class="home-link">
              Return Home
            </NuxtLink>
          </p>
        </div>

        <div class="astronaut-container">
          <img src="/img/404-image.png" alt="Error illustration" class="astronaut" loading="lazy" />
        </div>
      </div>
    </main>

    <TopFooter />
    <BottomFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import TopHeader from '~/components/TopHeader.vue'
import Navbar from '~/components/Navbar.vue'
import TopFooter from '~/components/TopFooter.vue'
import BottomFooter from '~/components/BottomFooter.vue'

declare global {
  interface Window {
    AOS: any
  }
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
})

useHead({
  title: '404 - Are you lost? | VCN',
  meta: [
    { name: 'description', content: 'The page you\'re looking for doesn\'t exist or has been moved. Return to the VCN homepage to continue browsing.' }
  ]
})
</script>

<style scoped>
.error-main {
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.error-container {
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 150px;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.error-page {
  background: radial-gradient(ellipse at top, #1a2a3a 0%, #000 60%);
}

.error-number {
  font-size: 10rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  to {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(100, 150, 255, 0.5);
  }
}

h1 {
  font-size: 3rem;
  font-weight: 500;
}

.sub {
  font-size: 1rem;
  opacity: 0.8;
}

.home-link {
  margin-left: 8px;
  text-decoration: none;
  color: inherit;
}

.astronaut {
  position: relative;
  width: 420px;
  opacity: 0.9;
  flex-shrink: 0;
  animation: float-image 3s ease-in-out infinite;
}

@keyframes float-image {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-15px) scale(1.08);
  }
}

@media (max-width: 768px) {
  .error-main {
    padding: 20px 15px;
    min-height: 90vh;
  }

  .error-container {
    flex-direction: column;
    gap: 40px;
  }

  .error-number {
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .sub {
    font-size: 0.9rem;
  }

  .astronaut {
    width: 250px;
    animation: float-image 5s ease-in-out infinite;
  }

  @keyframes float-image {

    0%,
    100% {
      transform: translateY(0) scale(1);
    }

    50% {
      transform: translateY(-10px) scale(1.05);
    }
  }
}

@media (max-width: 480px) {
  .error-main {
    padding: 15px 10px;
  }

  .error-container {
    gap: 30px;
  }

  .error-number {
    font-size: 4.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .sub {
    font-size: 0.85rem;
  }

  .astronaut {
    width: 200px;
  }
}
</style>
