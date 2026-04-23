<template>
  <section class="testing-standards-wrapper">
    <div class="container-fluid">
      <div class="row align-items-center g-4">
        <!-- Left Column: Headline & Description -->
        <div class="col-lg-5">
          <h2 class="testing-main-title">
            Ayurvedic purity that sets a higher standard.
          </h2>
          <p class="testing-description-text">
            DBT Care Plus is screened as a full formula for purity, potency
            and safety — because what goes into your herbal juice matters
            as much as what stays out.*
          </p>
        </div>

        <!-- Right Column: Feature Cards -->
        <div class="col-lg-7">
          <div class="row g-3 g-md-4">
            <!-- Feature 1: Gluten Free -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                  <img :src="cleanUrl('/img/productsdetails/ayurvedic.png')" alt="" />
                </div>
                <p class="testing-feature-description">
                  Formulated with 100% natural Ayurvedic herbs — no synthetic
                  chemicals or artificial additives
                </p>
              </div>
            </div>

            <!-- Feature 2: Heavy Metals Free -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                  <img :src="cleanUrl('/img/productsdetails/no-preservatives.png')" alt="" />
                </div>
                <p class="testing-feature-description">
                  Free from preservatives, binders <br> and harmful
                  chemical substances
                </p>

              </div>
            </div>

            <!-- Feature 3: Prop 65 Compliant -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                  <img :src="cleanUrl('/img/productsdetails/GMP Certified.png')" alt="" />
                </div>
                <p class="testing-feature-description">
                  Manufactured in a GMP certified facility
                  ensuring consistent quality and safety
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