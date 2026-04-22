<template>
  <section class="strains-info-main-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Column: Image -->
        <div class="col-lg-6 col-md-12">
          <div class="strains-product-image-container">
            <img :src="cleanUrl('/img/products/New-Project.png')" alt="Probiotic Capsule" class="w-100" />
          </div>
        </div>

        <!-- Right Column: Content -->
        <div class="col-lg-6 col-md-12">
          <div class="strains-content-wrapper-right">
            <h2 class="strains-main-heading-text">
              11 Herbs that work harder to control your Blood Sugar.
            </h2>

            <p class="strains-subheading-description">
              Chosen for their Ayurvedic potency to regulate glucose metabolism
              and build complete diabetic wellness.
            </p>

            <!-- <a
              href="#"
              class="strains-view-link-text"
              data-target="digestive-health-content"
            >
              View Strains + Ingredients →
            </a> -->

            <!-- Accordion -->
            <div class="strains-custom-accordion">
              <!-- Accordion Item 1 -->
              <div class="strains-accordion-item-wrapper">
                <button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse"
                  data-bs-target="#strainsCollapse1" aria-expanded="false" aria-controls="strainsCollapse1">
                  <span>Blood Sugar Control Blend</span>
                  <div style="display: flex; align-items: center">
                    <span class="strains-accordion-afu-count">KARELA · VIJAYASAR · GURMAR</span>
                    <span class="strains-accordion-plus-icon">+</span>
                  </div>


                </button>
                <div class="collapse strains-accordion-body-content" id="strainsCollapse1">
                  <p><strong>Karela:</strong> Contains Charantin & Momordicin that influence glucose metabolism and
                    reduce high blood glucose levels.</p>
                  <p><strong>Vijayasar:</strong> Reduces excess fat, removes toxins, lowers blood sugar and purifies
                    blood naturally.</p>
                  <p><strong>Gurmar:</strong> Highly effective in Type 1 & Type 2 Diabetes. Enhances insulin levels and
                    reduces bad cholesterol (LDL).</p>
                </div>
              </div>

              <!-- Accordion Item 2 -->
              <div class="strains-accordion-item-wrapper">
                <button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse"
                  data-bs-target="#strainsCollapse2" aria-expanded="false" aria-controls="strainsCollapse2">
                  <span>Immunity & Detox Blend</span>
                  <div style="display: flex; align-items: center">
                    <span class="strains-accordion-afu-count">GILOY · NEEM · AMLA</span>
                    <span class="strains-accordion-plus-icon">+</span>
                  </div>
                </button>
                <div class="collapse strains-accordion-body-content" id="strainsCollapse2">
                  <p><strong>Giloy:</strong> Lowers blood sugar and lipid levels, relieves excessive thirst and improves
                    body strength.</p>
                  <p><strong>Neem:</strong> Improves insulin sensitivity and controls high blood glucose by stimulating
                    insulin production in Beta cells.</p>
                  <p><strong>Amla:</strong> Helps proper absorption of insulin, reduces high sugar levels and relieves
                    eye-related diabetic problems.</p>
                </div>
              </div>

              <!-- Accordion Item 3 -->
              <div class="strains-accordion-item-wrapper">
                <button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse"
                  data-bs-target="#strainsCollapse3" aria-expanded="false" aria-controls="strainsCollapse3">
                  <span>Metabolic & Pancreas Support Blend</span>
                  <div style="display: flex; align-items: center">
                    <span class="strains-accordion-afu-count">METHI · CHIRATA · JAMUN</span>
                    <span class="strains-accordion-plus-icon">+</span>
                  </div>
                </button>
                <div class="collapse strains-accordion-body-content" id="strainsCollapse3">
                  <p><strong>Methi:</strong> Lowers blood glucose, improves glucose tolerance and manages metabolic
                    symptoms of Type 1 & Type 2 Diabetes.</p>
                  <p><strong>Chirata:</strong> Antioxidant & anti-inflammatory properties that prevent pancreatic cell
                    damage and enhance insulin release.</p>
                  <p><strong>Jamun:</strong> Contains Jamboline to reduce starch-to-glucose conversion and controls
                    frequent urination & thirst in diabetics.</p>
                </div>
              </div>
              <!-- Accordion Item 4 -->
              <div class="strains-accordion-item-wrapper">
                <button class="strains-accordion-header-btn" type="button" data-bs-toggle="collapse"
                  data-bs-target="#strainsCollapse4" aria-expanded="false" aria-controls="strainsCollapse4">
                  <span>Organ Health & Repair Blend</span>
                  <div style="display: flex; align-items: center">
                    <span class="strains-accordion-afu-count">PUNARNAVA · ALOE VERA · SHILAJIT</span>
                    <span class="strains-accordion-plus-icon">+</span>
                  </div>
                </button>
                <div class="collapse strains-accordion-body-content" id="strainsCollapse4">
                  <p><strong>Punarnava:</strong> Best natural diuretic to reduce sugar, blood pressure and cholesterol.
                    Supports liver, kidneys and eye health.</p>
                  <p><strong>Aloe Vera:</strong> Reduces glucose and triglyceride levels, assists in wound healing and
                    does not elevate blood sugar.</p>
                  <p><strong>Shudh Shilajit:</strong> Fulvic acid in Shilajit repairs damaged pancreas, enables insulin
                    release and flushes out body toxins.</p>
                </div>
              </div>
            </div>

            <!-- Badges Grid -->
            <div class="strains-badges-grid-container">
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/ayurvedic.png')" alt="Vegan" />
                </div>
                <span class="strains-badge-label-text">100% Ayurvedic</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/natural.png')" alt="Gluten" />
                </div>
                <span class="strains-badge-label-text">100% Natural</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/No Added Sugar.png')" alt="Dairy" />
                </div>
                <span class="strains-badge-label-text">No Added Sugar</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/No Chemicals.png')" alt="Soy" />
                </div>
                <span class="strains-badge-label-text">No Chemicals</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/no-preservatives.png')" alt="Nut" />
                </div>
                <span class="strains-badge-label-text">No Preservatives</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/Vegetarian.png')" alt="Shellfish" />
                </div>
                <span class="strains-badge-label-text">Vegetarian</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/GMP Certified.png')" alt="Sesame" />
                </div>
                <span class="strains-badge-label-text">GMP Certified</span>
              </div>
              <div class="strains-badge-item-box">
                <div class="strains-badge-icon-circle">
                  <img :src="cleanUrl('/img/productsdetails/No Binders.png')" alt="Corn" />
                </div>
                <span class="strains-badge-label-text">No Binders</span>
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