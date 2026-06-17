
<script setup>
import { useCmsStore } from '~/stores/cms'



const cmsStore = useCmsStore()

const footer = computed(() => cmsStore.bottomFooterData)


</script>
<template>
  <!-- Awaken Within Section -->
  <div class="bottom-footer-wrapper">
    <section class="vcn-awaken-section" id="awakenSection">
      <div class="vcn-awaken-gif-container vcn-loaded" id="awakenGif">
        <img :src="footer.image" alt="Awaken Within" class="vcn-awaken-gif" />
      </div>
      <ClientOnly>
        <div class="vcn-awaken-copyright vcn-loaded" id="awakenCopyright">{{ footer.copyrightText }}</div>
      </ClientOnly>
    </section>
  </div>
</template>

<style scoped>
/* Bottom Footer Wrapper - Base Styles */
.bottom-footer-wrapper {
  position: relative !important;
  width: 100% !important;
  height: 85vh !important;
  min-height: 650px !important;
  max-height: 90vh !important;
  overflow: hidden !important;
  background-image: url("/img/bg/footer-bg.png") !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Awaken Section - Override Global Styles */
.bottom-footer-wrapper .vcn-awaken-section {
  position: relative !important;
  height: 100% !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 30px 20px 15px 20px !important;
  margin: 0 !important;
  overflow: hidden !important;
  background: transparent !important;
}

/* GIF Container - Override Global Styles */
.bottom-footer-wrapper .vcn-awaken-gif-container {
  position: relative !important;
  flex: 1 !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: scale(1) !important;
  z-index: 10 !important;
  margin: 0 !important;
  padding: 0 !important;
  min-height: 0 !important;
}

/* GIF Image - Override Global Styles */
.bottom-footer-wrapper .vcn-awaken-gif {
  height: 100% !important;
  width: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
  display: block !important;
  margin: 0 auto !important;
  border: none !important;
  border-radius: 0 !important;
}

/* Copyright Text - Override Global Styles */
.bottom-footer-wrapper .vcn-awaken-copyright {
  position: relative !important;
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 0.9rem !important;
  font-weight: 400 !important;
  text-align: center !important;
  margin-top: 15px !important;
  margin-bottom: 0 !important;
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 20 !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important;
}

/* Desktop Large Screens (1920px and above) */
@media (min-width: 1920px) {
  .bottom-footer-wrapper {
    height: 90vh !important;
    min-height: 850px !important;
    max-height: 90vh !important;
  }
}

/* Desktop Medium Screens (1400px - 1919px) */
@media (max-width: 1919px) and (min-width: 1400px) {
  .bottom-footer-wrapper {
    height: 85vh !important;
    min-height: 750px !important;
    max-height: 85vh !important;
  }
}

/* Laptop Screens (1200px - 1399px) */
@media (max-width: 1399px) and (min-width: 1200px) {
  .bottom-footer-wrapper {
    height: 80vh !important;
    min-height: 700px !important;
    max-height: 80vh !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.85rem !important;
    margin-top: 12px !important;
  }
}

/* Tablet Landscape (992px - 1199px) */
@media (max-width: 1199px) and (min-width: 992px) {
  .bottom-footer-wrapper {
    height: 75vh !important;
    min-height: 600px !important;
    max-height: 75vh !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.8rem !important;
    margin-top: 10px !important;
  }
}

/* Tablet Portrait (768px - 991px) */
@media (max-width: 991px) and (min-width: 768px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 30px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 15px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 80% !important;
    max-width: 550px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.8rem !important;
    margin-top: 15px !important;
  }
}

/* Mobile Large (600px - 767px) */
@media (max-width: 767px) and (min-width: 600px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 25px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 15px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 85% !important;
    max-width: 480px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.75rem !important;
    margin-top: 12px !important;
  }
}

/* Mobile Medium (480px - 599px) */
@media (max-width: 599px) and (min-width: 480px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 20px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 10px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 90% !important;
    max-width: 400px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.7rem !important;
    margin-top: 10px !important;
  }
}

/* Mobile Small (400px - 479px) */
@media (max-width: 479px) and (min-width: 400px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 15px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 10px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 95% !important;
    max-width: 360px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.65rem !important;
    margin-top: 8px !important;
  }
}

/* Mobile Extra Small (320px - 399px) */
@media (max-width: 399px) and (min-width: 320px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 15px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 8px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 95% !important;
    max-width: 330px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.6rem !important;
    margin-top: 8px !important;
  }
}

/* Mobile Ultra Small (below 320px) */
@media (max-width: 319px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 10px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 5px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: 95% !important;
    max-width: 280px !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.55rem !important;
    margin-top: 6px !important;
  }
}

/* Landscape Orientation for Mobile Devices */
@media (max-height: 600px) and (orientation: landscape) and (max-width: 1024px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 20px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 10px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: auto !important;
    max-width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.65rem !important;
    margin-top: 10px !important;
  }
}

/* Very Short Screens */
@media (max-height: 400px) {
  .bottom-footer-wrapper {
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    padding: 15px 0 !important;
  }

  .bottom-footer-wrapper .vcn-awaken-section {
    height: auto !important;
    padding: 0 10px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif-container {
    height: auto !important;
    width: 100% !important;
    flex: none !important;
  }

  .bottom-footer-wrapper .vcn-awaken-gif {
    width: auto !important;
    max-width: 100% !important;
    height: auto !important;
    max-height: 180px !important;
  }

  .bottom-footer-wrapper .vcn-awaken-copyright {
    font-size: 0.6rem !important;
    margin-top: 8px !important;
  }
}

/* Ensure visibility on all devices */
.bottom-footer-wrapper * {
  visibility: visible !important;
  opacity: 1 !important;
}

/* Force display for debugging */
.bottom-footer-wrapper {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 1 !important;
}

/* Animation states */
.bottom-footer-wrapper .vcn-awaken-gif-container.vcn-loaded {
  opacity: 1 !important;
  visibility: visible !important;
  transform: scale(1) !important;
}

.bottom-footer-wrapper .vcn-awaken-copyright.vcn-loaded {
  opacity: 1 !important;
  visibility: visible !important;
}
</style>