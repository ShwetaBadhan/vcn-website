<template>
  <section class="health-section-bg">
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-3 health-section-below d-flex align-items-center justify-content-center">
        <video src="" class="video-centered" autoplay muted loop playsinline ></video>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
        <div class="vcn-viacap-hero-area-below h-100">
          <div class="vcn-probiotic-container">
            <div class="vcn-probiotic-content-wrapper">
              <!-- Left Content -->
              <div class="vcn-probiotic-left-content">
                <h2 class="alternate-heading">
                  2-in-1 Ayurvedic Formula Optimized for Complete Diabetic Wellness
                </h2>
                <div class="vcn-probiotic-callout-text">
                  DBT Care Plus unique herbal blend is engineered for targeted
                  action — controlling blood sugar while healing the body from within.
                </div>
              </div>

              <div class="vcn-probiotic-right-content">
                <div class="vcn-probiotic-product-display">
                  <!-- Example with alternative styling -->
                  <div class="vcn-probiotic-callout alternative-callout-top">
                    <div class="vcn-probiotic-callout-title">
                      Blood Sugar Control Blend — For Immediate Relief
                    </div>
                    <div class="vcn-probiotic-callout-text">
                      Karela, Gurmar, Neem & Vijayasar actively reduce high blood
                      glucose levels, stimulate insulin production and purify
                      the blood from Day 1.*
                    </div>
                  </div>

                  <div class="alternate-image">

                    

                    <img src="/gif/Capsule-GIF-2.gif" class="w-100"/>
                  </div>

                  <div class="vcn-probiotic-callout alternative-callout-bottom">
                    <div class="vcn-probiotic-callout-title">
                      Organ Repair & Detox Blend — For Long Term Wellness
                    </div>
                    <div class="vcn-probiotic-callout-text">
                      Shudh Shilajit, Punarnava, Aloe Vera & Chirata repair
                      damaged pancreatic cells, detoxify the body and support
                      liver, kidney and eye health over time.*
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.health-section-bg {
  padding: 1.5rem 0;
}

.video-centered {
  max-width: 240px;
  width: 100%;
  height: auto;
  display: block;
}

/* Fix the buggy global margin-top from style.css */
.alternate-heading {
  margin-top: 0 !important;
}

/* Base desktop styles (min-width: 992px) */
@media (min-width: 992px) {
  .vcn-probiotic-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }

  .vcn-probiotic-left-content {
    max-width: 400px;
    position: relative;
    z-index: 2;
  }

  .vcn-probiotic-left-content .vcn-probiotic-callout-text {
    max-width: 290px;
    line-height: 1.65;
  }

  .vcn-probiotic-right-content {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .vcn-probiotic-callout {
    max-width: 210px !important;
  }

  .alternate-image {
    margin-left: -20px;
  }

  .alternate-image img {
    max-width: 180px;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  .alternative-callout-top {
    right: -10px !important;
    top: 17% !important;
  }

  .alternative-callout-bottom {
    left: -25px !important;
    bottom: 3% !important;
  }
}

/* Medium desktops (min-width: 1200px) */
@media (min-width: 1200px) {
  .vcn-probiotic-content-wrapper {
    gap: 50px;
  }

  .vcn-probiotic-left-content {
    max-width: 440px;
  }

  .vcn-probiotic-callout {
    max-width: 230px !important;
  }

  .alternate-image {
    margin-left: -35px;
  }

  .alternate-image img {
    max-width: 200px;
  }

  .alternative-callout-top {
    right: -25px !important;
  }

  .alternative-callout-bottom {
    left: -45px !important;
  }
}

/* Large desktops / 4K displays (min-width: 1400px) */
@media (min-width: 1400px) {
  .vcn-probiotic-content-wrapper {
    gap: 70px;
  }

  .vcn-probiotic-left-content {
    max-width: 480px;
  }

  .vcn-probiotic-callout {
    max-width: 240px !important;
  }

  .alternate-image {
    margin-left: -50px;
  }

  .alternate-image img {
    max-width: 220px;
  }

  .alternative-callout-top {
    right: -40px !important;
  }

  .alternative-callout-bottom {
    left: -65px !important;
  }
}

/* Responsive stack behavior for tablets/mobile */
@media (max-width: 991.98px) {
  .vcn-probiotic-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .vcn-probiotic-left-content {
    text-align: center;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    max-width: 100%;
  }

  .vcn-probiotic-left-content .vcn-probiotic-callout-text {
    max-width: 100%;
    margin: 0 auto;
  }

  .vcn-probiotic-right-content {
    margin-top: 0.75rem;
    padding: 0 1rem;
    width: 100%;
  }

  .vcn-probiotic-product-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: auto;
    gap: 1.5rem;
  }

  .alternate-image {
    width: 100%;
    max-width: 260px;
    padding: 0;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    order: 2; /* Put capsule image in the middle */
  }

  .alternate-image img {
    max-width: 220px;
  }

  .vcn-probiotic-callout {
    position: relative !important;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 12px;
    padding: 15px 20px;
    box-sizing: border-box;
    text-align: center;
  }

  .alternative-callout-top {
    order: 1; /* Above image */
  }

  .alternative-callout-bottom {
    order: 3; /* Below image */
  }

  /* Hide connection arrows on mobile stack */
  .alternative-callout-top::before,
  .alternative-callout-bottom::before {
    display: none !important;
  }
}

@media (max-width: 575.98px) {
  .health-section-bg {
    padding: 1rem 0;
  }

  .alternate-heading {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .vcn-probiotic-left-content .vcn-probiotic-callout-text {
    font-size: 0.95rem;
  }
}
</style>