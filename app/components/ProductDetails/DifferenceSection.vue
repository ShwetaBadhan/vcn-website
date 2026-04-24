<template>
  <section class="p-5 health-section-bg">
    <div class="container-fluid">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="vcn-section-title">DBT Care Plus — Your Natural Solution to Control Blood Sugar</h1>
          <p class="vcn-section-subtitle">
            Our Ayurvedic formulation combines 11 powerful herbs,<br />
            clinically trusted to manage blood sugar and diabetic wellness naturally.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <!-- Video wrapper (only for video + optional overlays/controls) -->
          <div class="vcn-video-wrapper">
            <div class="vcn-video-controls">
              <button class="vcn-control-btn">
                <i class="bi bi-pause-fill"></i>
              </button>
              <button class="vcn-control-btn">
                <i class="bi bi-volume-up-fill"></i>
              </button>
            </div>

            <video style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
              " muted autoplay playsinline>
              <source src="https://assets.embeddables.com/ZAIN_4Ds_06_0617_6754959037559694.mp4" type="video/mp4" />
            </video>
          </div>

          <!-- 👇 Doctor info now OUTSIDE the video container -->
          <div class="vcn-doctor-info">
            <div class="vcn-doctor-name">Dr. Zain Kassam, MD, MPH</div>
            <div class="vcn-doctor-title">
              Chief Ayurvedic Consultant, VCN Health
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
              <div class="vcn-feature-card">
                <img :src="cleanUrl('/img/productsdetails/Type1&Type2Diabetes.png')" alt="" />
                <div class="vcn-feature-divider"></div>
                <h3 class="vcn-feature-title">Type 1 & Type 2 Diabetes</h3>
                <p class="vcn-feature-description">
                  Herbs like Gurmar and Methi are highly effective in managing
                  both Type 1 and Type 2 Diabetes by enhancing insulin levels
                  and improving glucose tolerance.*
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="vcn-feature-card">
                <img :src="cleanUrl('/img/productsdetails/High Blood Sugar.png')" alt="" />
                <div class="vcn-feature-divider"></div>
                <h3 class="vcn-feature-title">High Blood Sugar</h3>
                <p class="vcn-feature-description">
                  Karela, Neem and Vijayasar actively reduce high blood glucose
                  levels, stimulate insulin production and purify the blood
                  naturally.*
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="vcn-feature-card">
                <img :src="cleanUrl('/img/productsdetails/Liver&KidneyDisorders.png')" alt="" />
                <div class="vcn-feature-divider"></div>
                <h3 class="vcn-feature-title">
                  Liver & Kidney Disorders
                </h3>
                <p class="vcn-feature-description">
                  Punarnava and Aloe Vera support liver and kidney health,
                  reduce toxins, and help manage jaundice and
                  kidney-related diseases.*
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="vcn-feature-card">
                <img :src="cleanUrl('/img/productsdetails/Diabetic Symptoms Relief.png')" alt="" />
                <div class="vcn-feature-divider"></div>
                <h3 class="vcn-feature-title">
                  Diabetic Symptoms Relief
                </h3>
                <p class="vcn-feature-description">
                  Effectively relieves symptoms like excessive thirst, frequent
                  urination, fatigue, weak eyesight, and slow
                  wound healing.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cleanUrl = (url) => {
  return url.replace(/^&/, '')
}
</script>

<style scoped>
/* Add any additional styles here if needed */
.vcn-feature-card img {
  width: 60px;
  height: 60px;
}
</style>