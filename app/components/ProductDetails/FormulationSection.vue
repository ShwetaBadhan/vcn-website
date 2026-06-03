<template>
  <section class="health-section-bg">
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-3 health-section-below d-flex align-items-center justify-content-center">
        <video src="" class="video-centered" autoplay muted loop playsinline ></video>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
        <div class="vcn-viacap-hero-area-below">
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
.health-section-bg { padding: 1.5rem 0; }
.video-centered { max-width: 240px; width: 100%; height: auto; display: block; }
.alternate-image img { max-width: 320px; height: auto; margin-left: auto; margin-right: auto; display: block; }

.vcn-probiotic-content-wrapper { display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap; }
.vcn-probiotic-left-content, .vcn-probiotic-right-content { flex: 1 1 320px; min-width: 0; position: relative; z-index: 2; }
.vcn-probiotic-product-display { display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; }
.alternate-image { flex: 0 0 160px; display: flex; align-items: center; justify-content: center; }
.alternate-heading { margin: 0 0 0.75rem 0; }
.vcn-probiotic-callout { width: 100%; box-sizing: border-box; }


@media (max-width: 767.98px) {
  .vcn-probiotic-content-wrapper { flex-direction: column; }
  .vcn-probiotic-left-content { text-align: center; margin-bottom: 1.5rem; padding: 0 1rem; box-sizing: border-box; }
  .vcn-probiotic-right-content { margin-top: 0.75rem; padding: 0 1rem; box-sizing: border-box; }
  .vcn-probiotic-container { padding-left: 0.5rem; padding-right: 0.5rem; }
  .vcn-probiotic-product-display { flex-direction: column; align-items: center; }
  .alternate-heading { font-size: 1.25rem; line-height: 1.3; }
  .vcn-probiotic-callout-text { font-size: 0.95rem; }
  .video-centered { max-width: 160px; }
  .alternate-image img { max-width: 220px; }
  .vcn-probiotic-callout { text-align: center; }
}

@media (max-width: 575.98px) {
  .health-section-bg { padding: 1rem 0; }
  .alternate-heading { font-size: 1.05rem; }
  .vcn-probiotic-callout-text { font-size: 0.9rem; }
  .video-centered { max-width: 140px; }
  .vcn-probiotic-product-display { gap: 0.75rem; flex-direction: column; align-items: center; }
  .vcn-probiotic-left-content { padding: 0 0.5rem; }
  .vcn-probiotic-right-content { padding: 0 0.5rem; }
  .vcn-probiotic-left-content, .vcn-probiotic-right-content { margin-bottom: 1rem; }
  .vcn-probiotic-callout { margin-bottom: 0.75rem; }
  .vcn-probiotic-callout-text, .vcn-probiotic-left-content { overflow-wrap: break-word; word-break: break-word; }
}
</style>