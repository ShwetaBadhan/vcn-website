<template>

    <section class="product-detail-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Column - Product Images -->
        <!-- MAIN PRODUCT IMAGE -->
        <div class="col-lg-7">
          <div class="product-img-wrapper">
            <div class="product-image-cards">
              <img
                id="mainImage"
                src="/img/products/New-Project.png"
                alt="Daily Symbiotic"
                onclick="openProductPreview(this.src)"
              />
            </div>
          </div>

          <!-- THUMBNAILS -->
          <div class="row mt-3">
            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img
                    class="thumb"
                    src="https://assets.embeddables.com/Rectangle122041_004213986439953521.png"
                    onclick="openProductPreview(this.src)"
                  />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img
                    class="thumb"
                    src="https://assets.embeddables.com/Rectangle122051_8551790234297849.png"
                    onclick="openProductPreview(this.src)"
                  />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img
                    class="thumb"
                    src="http://assets.embeddables.com/Rectangle122071_6289075903534314.png"
                    onclick="openProductPreview(this.src)"
                  />
                </div>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="product-gallery">
                <div class="gallery-item">
                  <img
                    class="thumb"
                    src="http://assets.embeddables.com/HeroSupplementFacts_9730338301782036.png"
                    onclick="openProductPreview(this.src)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-1"></div> -->
        <!-- Right Column - Product Info -->
        <div class="col-lg-5">
          <div class="product-info">
            <h1 class="product-details-title">DBT Care Plus</h1>

            <div class="rating-section">
              <img src="/img/icons/stars.png" alt="" />
              <span class="rating-text">4.8 • (10069 Reviews)</span>
            </div>

            <p class="product-details-description">
              DBT Care Plus is a natural Ayurvedic formulation crafted with a
              powerful blend of 12 herbs to help maintain healthy blood sugar
              levels. It supports balanced energy, reduces weakness, and
              promotes overall wellness, making it a safe and effective choice
              for managing diabetes naturally.
            </p>
            <span class="vcn-cobiotics-badge">Bundle + Save 25%</span>
            <div class="price-section">
              <span class="current-price">$39.99</span>
              <span class="old-price">$59.99</span>
            </div>

            <div class="delivery-info">
              30-day supply delivered monthly. <br />
              Pause or cancel anytime.
            </div>

            <a href="cart" class="btn-start-now">Start Now</a>

            <p class="subscribe-text">
              30-day risk-free guarantee. Free US shipping.
            </p>
<div class="vcn-accordion">
  <div
    class="vcn-acc-item"
    v-for="(item, index) in accordionItems"
    :key="index"
  >
    <button
      type="button"
      class="vcn-acc-header"
      @click="toggleAccordion(index)"
    >
      {{ item.title }}
      <span class="vcn-acc-icon">
        {{ activeIndex === index ? '−' : '+' }}
      </span>
    </button>

    <div class="vcn-acc-body" v-if="activeIndex === index">
      <ul class="vcn-benefits-list">
        <li v-for="(point, i) in item.content" :key="i">
          {{ point }}
        </li>
      </ul>
    </div>
  </div>
</div>



            <div class="bundle-card mt-5">
              <div class="bundle-image">
                <img
                  src="https://assets.embeddables.com/Frame1739331849_5922073548695651.png"
                  alt="DM-02 Daily Multivitamin"
                />
              </div>
              <div class="bundle-content">
                <h3>Bundle + Save 25%</h3>
                <p>
                  Add DM-02™ Daily Multivitamin to your routine and save on your
                  first order.
                </p>
                <div class="bundle-price">
                  <span class="current-price">$67.48</span>
                  <span class="original-price">$89.98</span>
                </div>
              </div>
              <div class="bundle-action">
                <a href="cart" class="add-button">Add</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const accordionItems = ref([
  {
    title: 'Uses *',
    content: [
      'Supports healthy blood sugar levels',
      'Improves glucose metabolism',
      'Boosts energy and detoxifies the body',
    ],
  },
  {
    title: 'Direction For Use',
    content: [
      'Take 20–30 ml diluted in lukewarm water, twice daily before meals.',
    ],
  },
  {
    title: 'Cautions',
    content: [
      'For adults only. Consult doctor if pregnant or on medication.',
    ],
  },
  {
    title: 'Primary Benefits',
    content: [
      'Blood sugar control',
      'Enhanced insulin function',
      'Improved metabolism',
      'Detoxification',
    ],
  },
  {
    title: 'Ingredients',
    content: [
      'Charantin, Momordicin, Gymnemic acids, antioxidants.',
    ],
  },
])

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

