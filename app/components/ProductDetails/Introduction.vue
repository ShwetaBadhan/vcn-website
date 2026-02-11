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
              <!-- Accordion Item 1 -->
              <div class="vcn-acc-item">
                <button class="vcn-acc-header">
                  Uses  *
                  <span class="vcn-acc-icon">−</span>
                </button>

                <div class="vcn-acc-body" style="display: block">
                  <ul class="vcn-benefits-list">
                    <li>Supports healthy blood sugar levels</li>
                    <li>
                      Improves glucose metabolism
                    </li>
                    <li>Boosts energy and detoxifies the body</li>
                   
                  </ul>
                </div>
              </div>

              <!-- Accordion Item 2 -->
              <div class="vcn-acc-item">
                <button class="vcn-acc-header">
                  Direction For Use
                  <span class="vcn-acc-icon">+</span>
                </button>

                <div class="vcn-acc-body">
                  <ul class="vcn-benefits-list">
                    <li>Take 20–30 ml diluted in a glass of lukewarm water, twice daily, 30 minutes before meals or as directed by a physician.</li>
                  
                  </ul>
                </div>
              </div>
              <!-- Accordion Item  3-->
              <div class="vcn-acc-item">
                <button class="vcn-acc-header">
                  Cautions 
                  <span class="vcn-acc-icon">+</span>
                </button>

                <div class="vcn-acc-body">
                  <ul class="vcn-benefits-list">
                    <li>For adults only. Consult your doctor if pregnant, nursing, or on diabetes medication. Do not exceed the recommended dose. Monitor blood sugar regularly.</li>
                  
                  </ul>
                </div>
              </div>
              <!-- Accordion Item  4-->
              <div class="vcn-acc-item">
                <button class="vcn-acc-header">
                  Primary Benefits  
                  <span class="vcn-acc-icon">+</span>
                </button>

                <div class="vcn-acc-body">
                  <ul class="vcn-benefits-list">
                    <li>Blood sugar control</li>
                    <li>Enhanced insulin function</li>
                    <li>Improved metabolism</li>
                    <li>Detoxification</li>
                    <li>Kidney & liver support</li>
                    <li>Natural energy booster</li>
                  
                  </ul>
                </div>
              </div>
              <!-- Accordion Item  5-->
              <div class="vcn-acc-item">
                <button class="vcn-acc-header">
                 Ingredients
                  <span class="vcn-acc-icon">+</span>
                </button>

                <div class="vcn-acc-body">
                  <ul class="vcn-benefits-list">
                    <li>Charantin, Momordicin, Gymnemic acids, Tannins, Alkaloids, Flavonoids, Antioxidants, Fulvic acid, and natural phytonutrients.</li>
                  
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