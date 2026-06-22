<template>
  <section class="health-section-bg">
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-3 health-section-below d-flex align-items-center justify-content-center order-2 order-md-1">
        <video src="" class="video-centered" autoplay muted loop playsinline ></video>
      </div>
      <div class="col-12 col-md-8 col-lg-9 order-1 order-md-2">
        <div class="vcn-viacap-hero-area-below h-100">
          <div class="vcn-probiotic-container">
            <div class="vcn-probiotic-content-wrapper">
              <!-- Left Content -->
              <div class="vcn-probiotic-left-content">
                <div class="vcn-probiotic-heading-group">
                  <h2 class="alternate-heading">
                    2-in-1 Ayurvedic Formula Optimized for Complete Diabetic Wellness
                  </h2>
                  <div class="vcn-probiotic-callout-text">
                    DBT Care Plus unique herbal blend is engineered for targeted
                    action — controlling blood sugar while healing the body from within.
                  </div>
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

.vcn-probiotic-heading-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
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

  .health-section-bg {
    padding: 1.5rem 1rem;
  }

  .health-section-below {
    padding: 0 24px;
    margin-top: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-centered {
    width: 100%;
    max-width: 260px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .vcn-viacap-hero-area-below {
    padding: 0 12px;
  }

  .vcn-probiotic-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .vcn-probiotic-left-content {
    display: contents !important;
  }

  .vcn-probiotic-right-content {
    display: contents !important;
  }

  .vcn-probiotic-heading-group {
    order: 1 !important;
    gap: 20px;
    width: 100% !important;
  }

  .alternate-heading {
    font-size: 2.5rem !important;
    line-height: 1.25;
    margin: 0;
    text-align: left;
  }

  .vcn-probiotic-heading-group .vcn-probiotic-callout-text {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
    text-align: left;
  }

  .vcn-probiotic-product-display {
    order: 2 !important;
    min-height: 500px !important;
    position: relative !important;
    display: block !important;
    width: 100% !important;
    margin: 10px 0 !important;
  }

  .alternate-image {
    position: absolute !important;
    left: auto !important;
    right: -80px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 115% !important;
    max-width: 650px !important;
    height: auto !important;
    z-index: 5 !important;
  }

  .alternate-image img {
    width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
    display: block !important;
  }

  .vcn-probiotic-callout {
    position: absolute !important;
    width: 45% !important;
    padding: 0 !important;
    padding-top: 15px !important;
    background: transparent !important;
    border: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    display: flex !important;
    flex-direction: column !important;
    z-index: 10 !important;
    text-align: left !important;
  }

  .alternative-callout-top {
    top: 10% !important;
    left: 0 !important;
    right: auto !important;
    bottom: auto !important;
  }

  .alternative-callout-bottom {
    top: auto !important;
    bottom: 0 !important;
    left: 0 !important;
    right: auto !important;
  }

  /* Connecting lines on mobile relative to the callouts themselves */
  .alternative-callout-top::before,
  .alternative-callout-bottom::before {
    content: "" !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important; /* extends to the end of the callout */
    height: 1px !important;
    background-color: rgba(255, 255, 255, 0.4) !important;
    background-image: none !important;
    rotate: 0deg !important;
    bottom: auto !important;
    right: auto !important;
    z-index: 10 !important;
    display: block !important;
  }

  /* White dots at the end of the lines relative to the callouts */
  .alternative-callout-top::after,
  .alternative-callout-bottom::after {
    content: "" !important;
    position: absolute !important;
    top: -2.5px !important;
    right: -2px !important; /* places dot exactly at the end of the line */
    left: auto !important;
    width: 6px !important;
    height: 6px !important;
    background-color: #fff !important;
    border-radius: 50% !important;
    z-index: 11 !important;
    display: block !important;
    box-sizing: border-box;
  }
}

@media (max-width: 575.98px) {

  .health-section-bg {
    padding: 1rem 0.75rem;
  }

  .health-section-below {
    padding: 0 32px;
  }

  .video-centered {
    max-width: 220px;
  }

  .vcn-probiotic-product-display {
    min-height: 580px !important;
  }

  .alternate-image {
    max-width: 420px !important;
    right: -90px !important;
  }

  .alternate-heading {
    font-size: 2.0rem !important;
  }
}
</style>