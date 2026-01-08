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
                  src="https://assets.embeddables.com/Hero1_360147181803535.png"
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
              <h1 class="product-details-title">Daily Symbiotic</h1>

              <div class="rating-section">
                <img src="/img/icons/stars.png" alt="" />
                <span class="rating-text">4.8 • (10069 Reviews)</span>
              </div>

              <p class="product-details-description">
                Clinically proven daily probiotic and new daily multivitamin
                that help cover nutrient gaps, reduce bloating, and promote
                healthy regularity.*
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
                    Benefits *
                    <span class="vcn-acc-icon">−</span>
                  </button>

                  <div class="vcn-acc-body" style="display: block">
                    <ul class="vcn-benefits-list">
                      <li>Reduces bloating and gas within 1 week</li>
                      <li>
                        Improves regularity and makes pooping easier within 2
                        weeks
                      </li>
                      <li>Supports immune, skin, and heart health</li>
                      <li>
                        Proven effective in 4 double-blind clinical trials
                      </li>
                    </ul>

                    <a
                      class="vcn-clinical-link"
                      data-target="clinical-trial-content"
                      >See Clinical Trials →</a
                    >
                  </div>
                </div>

                <!-- Accordion Item 2 -->
                <div class="vcn-acc-item">
                  <button class="vcn-acc-header">
                    Ingredients
                    <span class="vcn-acc-icon">+</span>
                  </button>

                  <div class="vcn-acc-body">
                    <ul class="vcn-benefits-list">
                      <li>24 strains, 53.6 billion AFU</li>
                      <li>
                        Third-party tested for quality, pesticides, and
                        allergens
                      </li>
                      <li>Vegan and low FODMAP diet compatible</li>
                      <li>No refrigeration required</li>
                    </ul>
                    <a
                      class="vcn-clinical-link"
                      data-target="digestive-health-content"
                    >
                      View Strains + Ingredients →
                    </a>
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
                    Add DM-02™ Daily Multivitamin to your routine and save on
                    your first order.
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
    <section class="health-section-bg">
      <div class="health-section">
      <div class="container">
        <h4>Your microbiome needs essential nutrients to function.</h4>
        <h1 class="mb-5">
          DM-02™ is the multivitamin <br> to fuel your body and gut.
        </h1>
        </div>
        <div class="container-fluid ">
          <div class="feature-top">
<div class="feature-bg">
          <div class="row g-4">
            <!-- Feature 1 -->
            <div class="col-lg-4 col-md-6">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <img src="/img/icons/icon-1.png" alt="" />
                </div>
                <h3 class="feature-title">Digestive Support + Relief</h3>
                <p class="feature-description">
                  Promotes Healthy and Gas in Just 7 days and bloating symptoms
                  in 4 weeks.*
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="col-lg-4 col-md-6">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <img src="/img/icons/icon-2.png" alt="" />
                </div>
                <h3 class="feature-title">Helps Cover Daily Gaps</h3>
                <p class="feature-description">
                  Helps cover daily nutrient gaps with essential vitamins and
                  minerals.*
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="col-lg-4 col-md-6">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <img src="/img/icons/icon-4.png" alt="" />
                </div>
                <h3 class="feature-title">Total Microbiome Support</h3>
                <p class="feature-description">
                  Prebiotics, probiotics, postbiotics, and more support key
                  functions of the gut microbiome*
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
        
      </div>
    </div>
    <div class="row mt-5">
     <div class="col-lg-3 health-section-below d-flex align-items-center justify-content-center">
  <video 
    src="https://assets.embeddables.com/Seed_DM02_Jar_RotateWeb_9530759748590603.webm"
    class="video-centered"
    autoplay muted loop playsinline
    poster="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1762362131/library/carousel/dm02-carousel-poster.png"
  ></video>
</div>
      <div class="col-lg-9">
  
         <div class="ds01-viacap-hero-area-below">
      <div class="vcn-probiotic-container">
        <div class="vcn-probiotic-content-wrapper">
          <!-- Left Content -->
          <div class="vcn-probiotic-left-content">
           
            <h2 class="alternate-heading">
              2-in-1 Formulation Optimized for Nutrient Delivery
            </h2>
<div class="vcn-probiotic-callout-text">Seed's ViaCap® delivery system is engineered for targeted release along the GI tract.</div>
         
          </div>

           <div class="vcn-probiotic-right-content">
                        <div class="vcn-probiotic-product-display">
                            <!-- Example with alternative styling -->
                            <div class="vcn-probiotic-callout alternative-callout-top">
                                <div class="vcn-probiotic-callout-title">Outer Capsule—For You</div>
                                <div class="vcn-probiotic-callout-text">
                                    Essential vitamins and minerals reach the upper GI tract and help fill nutrient gaps.*
                                </div>
                            </div>

                            <div class="alternate-image">
                                <img src="https://assets.embeddables.com/dm-viacap-static_5796638597731362.png" class="w-100" alt="">
                            </div>

                            <div class="vcn-probiotic-callout alternative-callout-bottom">
                                <div class="vcn-probiotic-callout-title">Inner Capsule—For Your Microbiome</div>
                                <div class="vcn-probiotic-callout-text">
                                    B vitamins, Japanese wasabi prebiotic, and Cellular Energy Complex to target microbiome function.*
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
 <div class="container-fluid py-5 health-section-bg">
  <!-- Section Header -->
  <div class="text-center mb-4">
    <h1 class="section-title-timeline">Benefits that build over time.</h1>
    <p class="section-subtitle">
      Designed for daily use, DM-02™ replenishes your body and microbiome with essential nutrients to build systemic health over time.*
    </p>
  </div>

  <div class="row g-4">
    <!-- Left Column: Timeline -->
    <div class="col-lg-5">
      <div class="timeline">
        <!-- Day 1 -->
        <div class="timeline-item">
          <span class="timeline-header">Day 1</span>
          <span class="timeline-title">Replenishes Nutrients*</span>
          <div class="timeline-body">
            <ul class="list-unstyled">
              <li>Helps fill daily nutrient gaps</li>
              <li>Supports cellular energy production</li>
              <li>Fuels microbial metabolism of nutrients</li>
            </ul>
          </div>
        </div>

        <!-- Week 4 -->
        <div class="timeline-item">
          <span class="timeline-header">Week 4</span>
          <span class="timeline-title">Maintains Immune Function*</span>
          <div class="timeline-body">
            <ul class="list-unstyled">
              <li>Bolsters daily immune defenses</li>
              <li>Shields against environmental stress</li>
              <li>Provides antioxidants for healthy barrier function</li>
            </ul>
          </div>
        </div>

        <!-- Week 8 -->
        <div class="timeline-item">
          <span class="timeline-header">Week 8</span>
          <span class="timeline-title">Enhanced Cognitive Support*</span>
          <div class="timeline-body">
            <ul class="list-unstyled">
              <li>Promotes healthy hair, skin, and nails</li>
              <li>Helps protect against free radical damage</li>
              <li>Delivers nutrients that decline with age like CoQ10 and PQQ</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- How to Use -->
      <div class="how-to-use-card">
        <div class="capsule-icon">
            <img src="https://assets.embeddables.com/Frame1739334303_8303615376202479.png" alt="">
        </div>
        <div>
          <h6 class="how-to-use-title">How to Use:</h6>
          <ul class="list-unstyled mb-0">
            <li>Take 1 capsule daily with food for best absorption.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Right Column: Images -->
    <div class="col-lg-7">
      <div class="image-grid">
        <!-- Large Image -->
        <div class="image-large">
          <img src="https://assets.embeddables.com/MainImage11_05536858695849567.png" alt="Person drinking water" class="img-fluid">
        </div>

        <!-- Small Images Container -->
        <div class="image-small-container">
          <!-- Top Small Image (Circular) -->
          <div class="image-circle">
            <img src="https://assets.embeddables.com/SecondaryImage11_6593898234776344.png" alt="Capsules in bottle" class="img-fluid">
          </div>

          <!-- Bottom Small Image -->
          <div class="image-small">
            <img src="https://assets.embeddables.com/SecondaryImage21_976478406714105.png" alt="Man holding product" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <section class="nutrients-section health-section-bg">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-lg-6">
                    <div class="bioavailable-section-header">
                        <h1>Bioavailable nutrients that work harder for you.</h1>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="bioavailable-section-header">
                        <p>DM-02™ is formulated with ingredients in forms your body can easily recognize and absorb, so you experience the full potential of their health benefits.*</p>
                    </div>
                </div>
            </div>
            
            <div class="swiper nutrient-swiper">
                <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide">
                        <div class="nutrient-card">
                            <span class="exclusive-badge">DM-02™ Exclusive</span>
                            <h3>Cellular Energy Complex</h3>
                            <p>Supports cellular and mitochondrial function with a blend of CoQ10, PQQ, MK-7, and spermidine.</p>
                            
                            <div class="media-container">
                                <img src="https://assets.embeddables.com/01_DM_Spermidine_Render_firstframe_8600583947759856.jpg" alt="Cellular Energy Complex">
                                <video muted loop>
                                    <source src="https://assets.embeddables.com/01_DM_Spermidine_Render_26899046581101105.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                            <div class="form-label">WHY IT'S ESSENTIAL</div>
                            <div class="form-content">Replenishes key nutrients that typically decline with <br> age.</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="nutrient-card">
                          
                            <h3>Vitamin A</h3>
                            <p>A fat-soluble vitamin that supports immune defense and bone health.</p>
                            <div class="media-container">
                                <img src="https://assets.embeddables.com/02_DM_VitaminA_Render_firstframe_19505463071704598.jpg" alt="Cellular Energy Complex">
                                <video muted loop>
                                    <source src="https://assets.embeddables.com/02_DM_VitaminA_Render_8176730088061925.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                             <div class="form-label">BIOAVAILABLE FORM</div>
                            <div class="form-content">Two forms of vitamin A—provitamin A and active vitamin A— the body can easily utilize.</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="nutrient-card">
                          
                            <h3>Vitamin C </h3>
                            <p>Promotes collagen production and supports immune health.</p>
                            
                            <div class="media-container">
                                <img src="https://assets.embeddables.com/03_DM_VitaminC_Render_firstframe_25623269954634087.jpg" alt="Cellular Energy Complex">
                                <video muted loop>
                                    <source src="https://assets.embeddables.com/03_DM_VitaminC_Render_12898703876005913.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                            <div class="form-label">BIOAVAILABLE FORM</div>
                            <div class="form-content">Ascorbic acid, an active form of vitamin C that’s easily absorbed.</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="nutrient-card">
                          
                            <h3>Vitamin D3 </h3>
                            <p>Supports calcium absorption, bone health, and muscular function.</p>
                            
                            <div class="media-container">
                                <img src="https://assets.embeddables.com/04_DM_VitaminD3_Render_firstframe_07766834816908619.jpg" alt="Cellular Energy Complex">
                                <video muted loop>
                                    <source src="https://assets.embeddables.com/04_DM_VitaminD3_Render_17119757890939935.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                            <div class="form-label">BIOAVAILABLE FORM</div>
                            <div class="form-content">Cholecalciferol, a natural and more effective form compared to synthetic D2.</div>
                        </div>
                    </div>
                  
                    
                   
                </div>
                
               
                
            </div>
        </div>
    </section>
      <section class="comparison-section">
    <div class="container-fluid comparison-container">
      <div class="row">
        <div class="col-lg-3">
          <h2 class="comparison-section-title">How DM-02™ Compares:</h2>

          </div>
<div class="col-lg-9">
          <div class="comparison-card">
            <div class="comparison-row">
              <!-- Feature Column -->
              <div class="feature-column">
                <div class="feature-item"><span class="feature-label">Nutrients for your body</span></div>
                <div class="feature-item"><span class="feature-label">Nutrients for your microbiome</span></div>
                <div class="feature-item"><span class="feature-label">Precisely 100% daily value of essential </span></div>
                <div class="feature-item"><span class="feature-label">Prebiotics + postbiotics</span></div>
                <div class="feature-item"><span class="feature-label">Bioavailable ingredients</span></div>
                <div class="feature-item"><span class="feature-label">1 capsule per day</span></div>
              </div>

              <!-- DM-02™ -->
              <div class="product-col">
                <div class="dm02-label">DM-02™</div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
              </div>

              <!-- Leading Multivitamins -->
              <div class="product-cols">
                <div class="product-header">Leading<br>Multivitamins</div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
              </div>

              <!-- All-In-One Greens Powders -->
              <div class="product-cols">
                <div class="product-header">All-In-One<br>Greens Powders</div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="checkmark"></span></div>
                <div class="product-item"><span class="empty-circle"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section class="testing-standards-wrapper">
    <div class="container-fluid">
      <div class="row align-items-center g-4">
        <!-- Left Column: Headline & Description -->
        <div class="col-lg-5">
          
            <h2 class="testing-main-title">Rigorous testing that sets a higher standard.</h2>
            <p class="testing-description-text">
              DM-02™ is screened as a full formula for allergens, contaminants, 
              and pesticides—because what's not in your supplement matters, too.
            </p>
       
        </div>

        <!-- Right Column: Feature Cards -->
        <div class="col-lg-7">
          <div class="row g-3 g-md-4">
            <!-- Feature 1: Gluten Free -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                 <img src="https://assets.embeddables.com/ClinicallyTested_9127921444987761.png" alt="">
                </div>
                <p class="testing-feature-description">
                  Formulated without gluten, soy, dairy, and corn
                </p>
              </div>
            </div>

            <!-- Feature 2: Heavy Metals Free -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                <img src="https://assets.embeddables.com/ScienceBacked_5257260533781933.png" alt="">
                </div>
                <p class="testing-feature-description">
                  Tested for heavy metals and free of glyphosate and AMPA
                </p>
              </div>
            </div>

            <!-- Feature 3: Prop 65 Compliant -->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="testing-feature-card">
                <div class="testing-icon-wrapper">
                  <img src="https://assets.embeddables.com/Well-Tolerated_07587342185462598.png" alt="">
                </div>
                <div class="testing-feature-description">
                  Formulated to comply with Prop. 65
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section class="health-section-bg">
     <div class="routine-bundle-wrapper">
    <div class="container routine-bundle-container">
      <div class="row align-items-center g-4 g-lg-5">
        <!-- Left Column: Product Images -->
        <div class="col-lg-6 routine-products-column">
       <div class="routine-wrapper">
  <img class="routine-main-image" 
       src="https://assets.embeddables.com/original_62998291cdb5edc86ad19cdfdf54281621_28613920912340585.png"
       alt="routine products">

  <!-- Label 1 -->
  <div class="label-block label-1">
    <div class="routine-product-label">DELIVERS BENEFICIAL BACTERIA</div>
    <div class="routine-label-connector"></div>
  </div>

  <!-- Label 2 -->
  <div class="label-block label-2">
    <div class="routine-product-label">NOURISHES THE BACTERIA</div>
    <div class="routine-label-connector"></div>
  </div>
</div>

        </div>

        <!-- Right Column: Content -->
        <div class="col-lg-6 routine-content-column">
          <h2 class="routine-main-heading">Complete Your Routine With DS-01®</h2>

          <div class="routine-product-description">
            <h3 class="routine-product-name">DS-01® Daily Synbiotic :</h3>
            <p class="routine-product-details">
              24 probiotic strains to ease bloating, improve regularity, and support digestive health.*
            </p>
          </div>

          <div class="routine-product-description mb-4">
            <h3 class="routine-product-name">DM-02™ Daily Multivitamin:</h3>
            <p class="routine-product-details">
              Essential vitamins and minerals to help cover nutrient gaps and support your microbiome.*
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
          <a href="product-details" class="routine-cta-button">Add Bundle • Save 25%</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   </section>
  

    <section class="probiotic-hero-section">
      <div class="container-fluid">
        <div class="row">
          <!-- Left Side -->
          <div class="col-lg-7 left-section">
            <div style="position: relative; z-index: 2; padding-right: 40px">
              <h3 class="hero-headline">
                The complete probiotic that delivers results in just 7 days.<sup
                  >†</sup
                >
              </h3>
              <a class="evidence-btn" data-target="clinical-evidence-content"
                >See Clinical Evidence</a
              >
            </div>

            <div class="hand-image">
              <img
                src="https://assets.embeddables.com/image2671_25620810216851686.png"
                alt="Hand holding probiotic"
              />
            </div>
          </div>

          <!-- Right Side - Accordion -->
          <div class="col-lg-5 right-section">
            <!-- Panel 1 -->
            <div class="benefits-panel">
              <button
                class="panel-header-btn"
                onclick="toggleBenefitPanel('panel1')"
              >
                <div>
                  <span class="duration-badge">7 DAYS</span>
                  <h3 class="panel-title">Reduces Bloating and Gas*</h3>
                </div>
                <span class="toggle-icon" id="icon1">+</span>
              </button>
              <div class="panel-content" id="panel1">
                <ul class="benefit-list">
                  <li>Clinically proven to reduce bloating</li>
                  <li>Alleviates excess gas</li>
                  <li>Eases digestive discomfort</li>
                </ul>
              </div>
            </div>

            <!-- Panel 2 -->
            <div class="benefits-panel">
              <button
                class="panel-header-btn"
                onclick="toggleBenefitPanel('panel2')"
              >
                <div>
                  <span class="duration-badge">2 WEEKS</span>
                  <h3 class="panel-title">Supports Healthy Regularity*</h3>
                </div>
                <span class="toggle-icon" id="icon2">+</span>
              </button>
              <div class="panel-content" id="panel2">
                <ul class="benefit-list">
                  <li>Promotes consistent bowel movements</li>
                  <li>Balances digestive rhythm</li>
                  <li>Supports gut motility</li>
                </ul>
              </div>
            </div>

            <!-- Panel 3 -->
            <div class="benefits-panel">
              <button
                class="panel-header-btn"
                onclick="toggleBenefitPanel('panel3')"
              >
                <div>
                  <span class="duration-badge">4 WEEKS</span>
                  <h3 class="panel-title">Smoothes + Clears Skin*</h3>
                </div>
                <span class="toggle-icon" id="icon3">+</span>
              </button>
              <div class="panel-content" id="panel3">
                <ul class="benefit-list">
                  <li>Improves skin texture and clarity</li>
                  <li>Reduces inflammation from within</li>
                  <li>Supports natural skin barrier</li>
                </ul>
              </div>
            </div>

            <!-- Panel 4 -->
            <div class="benefits-panel">
              <button
                class="panel-header-btn"
                onclick="toggleBenefitPanel('panel4')"
              >
                <div>
                  <span class="duration-badge">3 MONTHS</span>
                  <h3 class="panel-title">Immune + Heart Support*</h3>
                </div>
                <span class="toggle-icon" id="icon4">+</span>
              </button>
              <div class="panel-content" id="panel4">
                <ul class="benefit-list">
                  <li>Strengthens immune function</li>
                  <li>Supports cardiovascular health</li>
                  <li>Promotes overall wellness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section class="ds01-difference-section">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-12">
                    <h1 class="ds01-section-title">The DS-01® Difference</h1>
                    <p class="ds01-section-subtitle">
                        Our formulation prioritizes strain diversity and survivability,<br>
                        so you get clinically proven results, not empty promises.
                    </p>
                </div>
            </div>

            <div class="row">
               <div class="col-lg-6 mb-4">
  <!-- Video wrapper (only for video + optional overlays/controls) -->
  <div class="ds01-video-wrapper">
    <div class="ds01-video-controls">
      <button class="ds01-control-btn">
        <i class="bi bi-pause-fill"></i>
      </button>
      <button class="ds01-control-btn">
        <i class="bi bi-volume-up-fill"></i>
      </button>
    </div>

    <video 
      style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;" 
      muted 
      autoplay 
      playsinline
    >
      <source src="https://assets.embeddables.com/ZAIN_4Ds_06_0617_6754959037559694.mp4" type="video/mp4">
    </video>
  </div>

  <!-- 👇 Doctor info now OUTSIDE the video container -->
  <div class="ds01-doctor-info">
    <div class="ds01-doctor-name">Dr. Zain Kassam, MD, MPH</div>
    <div class="ds01-doctor-title">Chief Medical Officer, Seed Health</div>
  </div>
</div>

                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="ds01-feature-card">
                               <img src="https://assets.embeddables.com/MicronutrientSynthesis_5775246620796877.png" alt="">
                                <div class="ds01-feature-divider"></div>
                                <h3 class="ds01-feature-title">24 Diverse Probiotic Strains</h3>
                                <p class="ds01-feature-description">Research-derived doses for microbial diversity, the foundation of a healthy gut.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="ds01-feature-card">
                               <img src="https://assets.embeddables.com/40px_5070508167357767.png" alt="">
                                <div class="ds01-feature-divider"></div>
                                <h3 class="ds01-feature-title">Engineered to Survive</h3>
                                <p class="ds01-feature-description">Proprietary ViaCap® technology safeguards probiotics during the journey to the colon.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="ds01-feature-card">
                               <img src="https://assets.embeddables.com/40px_5070508167357767.png" alt="">
                                <div class="ds01-feature-divider"></div>
                                <h3 class="ds01-feature-title">Antioxidant-Promoting Prebiotic</h3>
                                <p class="ds01-feature-description">Non-fiber based prebiotic (unlike many found in food or drinks) that feeds beneficial gut microbes.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="ds01-feature-card">
                               <img src="https://assets.embeddables.com/40px1_07112062106958539.png" alt="">
                                <div class="ds01-feature-divider"></div>
                                <h3 class="ds01-feature-title">4 Gold-Standard Clinical Trials</h3>
                                <p class="ds01-feature-description">Scientifically validated by experts as a complete formulation, four different times.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="gut-stats-main-section">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Left Column: Heading -->
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <h2 class="gut-stats-heading-text">
                        Strengthens your gut at the source for lasting relief.
                    </h2>
                </div>

                <!-- Right Column: Statistics Cards -->
                <div class="col-lg-8 col-md-12">
                    <div class="row">

                        <!-- Card 1: Beneficial Gut Bacteria -->
                        <div class="col-md-4 offset-md-3 mb-4">
                           <img src="https://assets.embeddables.com/Chart_31812473945034925.png" class="w-100" alt=""> 
                        </div>

                        <!-- Card 2: Gut Barrier -->
                        <div class="col-md-4 mb-4">
                           <img src="https://assets.embeddables.com/HowitWorksChart_01172013599530386.png" class="w-100" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="comparison-table-main-section">
        <div class="container-fluid">
            <h2 class="comparison-table-heading-title">
                DS-01® outperforms<br>other probiotics.
            </h2>

            <div class="comparison-table-wrapper">
                <!-- Header Row -->
                <div class="comparison-table-row-item comparison-table-header-row">
                    <div class="comparison-table-feature-col"></div>
                    <div class="comparison-table-ds01-col">
                        <span class="comparison-table-header-text">DS-01©</span>
                    </div>
                    <div class="comparison-table-others-col">
                        <span class="comparison-table-header-text" style="color: #999;">Others</span>
                    </div>
                </div>

                <!-- Row 1 -->
                <div class="comparison-table-row-item">
                    <div class="comparison-table-feature-col">
                        24 clinically studied probiotic strains
                    </div>
                    <div class="comparison-table-ds01-col">
                        <span class="comparison-table-checkmark-icon"></span>
                    </div>
                    <div class="comparison-table-others-col">
                        5 or less strains, rarely tested clinically
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="comparison-table-row-item">
                    <div class="comparison-table-feature-col">
                        Engineered for precision delivery to the colon
                    </div>
                    <div class="comparison-table-ds01-col">
                        <span class="comparison-table-checkmark-icon"></span>
                    </div>
                    <div class="comparison-table-others-col">
                        Rarely reaches the colon
                    </div>
                </div>

                <!-- Row 3 -->
                <div class="comparison-table-row-item">
                    <div class="comparison-table-feature-col">
                        Third-party tested for pesticides, allergens, and heavy metals
                    </div>
                    <div class="comparison-table-ds01-col">
                        <span class="comparison-table-checkmark-icon"></span>
                    </div>
                    <div class="comparison-table-others-col">
                        Rare
                    </div>
                </div>

                <!-- Row 4 -->
                <div class="comparison-table-row-item">
                    <div class="comparison-table-feature-col">
                        Vegan, gluten- and nut-tested, low FODMAP
                    </div>
                    <div class="comparison-table-ds01-col">
                        <span class="comparison-table-checkmark-icon"></span>
                    </div>
                    <div class="comparison-table-others-col">
                        Rare
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section class="strains-info-main-section">
        <div class="container-fluid">
            <div class="row">
                <!-- Left Column: Image -->
                <div class="col-lg-6 col-md-12">
                    <div class="strains-product-image-container">
                        <img src="https://assets.embeddables.com/Frame17393323731_3356911832620697.png" 
                             alt="Probiotic Capsule" 
                             class="w-100">
                    </div>
                </div>

                <!-- Right Column: Content -->
                <div class="col-lg-6 col-md-12">
                    <div class="strains-content-wrapper-right">
                        <h2 class="strains-main-heading-text">
                            Strains that work harder for your whole body.
                        </h2>
                        
                        <p class="strains-subheading-description">
                            Chosen for their ability to improve gut function and build whole body health.
                        </p>

                        <a href="#" class="strains-view-link-text"  data-target="digestive-health-content">
                            View Strains + Ingredients →
                        </a>

                        <!-- Accordion -->
                        <div class="strains-custom-accordion">
                            <!-- Accordion Item 1 -->
                            <div class="strains-accordion-item-wrapper">
                                <button class="strains-accordion-header-btn" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#strainsCollapse1" 
                                        aria-expanded="false" 
                                        aria-controls="strainsCollapse1">
                                    <span>Gut + Immune Health Blend</span>
                                    <div style="display: flex; align-items: center;">
                                        <span class="strains-accordion-afu-count">38.7 BILLION AFU</span>
                                        <span class="strains-accordion-plus-icon">+</span>
                                    </div>
                                </button>
                                <div class="collapse strains-accordion-body-content" id="strainsCollapse1">
                                    <p>Content for Gut + Immune Health Blend goes here. Details about the strains and their benefits.</p>
                                </div>
                            </div>

                            <!-- Accordion Item 2 -->
                            <div class="strains-accordion-item-wrapper">
                                <button class="strains-accordion-header-btn" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#strainsCollapse2" 
                                        aria-expanded="false" 
                                        aria-controls="strainsCollapse2">
                                    <span>Skin Health Blend</span>
                                    <div style="display: flex; align-items: center;">
                                        <span class="strains-accordion-afu-count">3.34 BILLION AFU</span>
                                        <span class="strains-accordion-plus-icon">+</span>
                                    </div>
                                </button>
                                <div class="collapse strains-accordion-body-content" id="strainsCollapse2">
                                    <p>Content for Skin Health Blend goes here. Details about the strains and their benefits.</p>
                                </div>
                            </div>

                            <!-- Accordion Item 3 -->
                            <div class="strains-accordion-item-wrapper">
                                <button class="strains-accordion-header-btn" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#strainsCollapse3" 
                                        aria-expanded="false" 
                                        aria-controls="strainsCollapse3">
                                    <span>Heart Health Blend</span>
                                    <div style="display: flex; align-items: center;">
                                        <span class="strains-accordion-afu-count">4.21 BILLION AFU</span>
                                        <span class="strains-accordion-plus-icon">+</span>
                                    </div>
                                </button>
                                <div class="collapse strains-accordion-body-content" id="strainsCollapse3">
                                    <p>Content for Heart Health Blend goes here. Details about the strains and their benefits.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Badges Grid -->
                        <div class="strains-badges-grid-container">
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331795_6583801130592067.png" alt="Vegan">
                                </div>
                                <span class="strains-badge-label-text">Vegan</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331796_856830911405595.png" alt="Gluten">
                                </div>
                                <span class="strains-badge-label-text">Gluten-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331797_02884256895587911.png" alt="Dairy">
                                </div>
                                <span class="strains-badge-label-text">Dairy-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331798_2492152183858577.png" alt="Soy">
                                </div>
                                <span class="strains-badge-label-text">Soy-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331799_5358582136160982.png" alt="Nut">
                                </div>
                                <span class="strains-badge-label-text">Nut-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331800_2309776777388718.png" alt="Shellfish">
                                </div>
                                <span class="strains-badge-label-text">Shellfish-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331801_22536482045935935.png" alt="Sesame">
                                </div>
                                <span class="strains-badge-label-text">Sesame-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331803_44566740226866386.png" alt="Corn">
                                </div>
                                <span class="strains-badge-label-text">Corn-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331802_24001446662742731.png" alt="Glyphosate">
                                </div>
                                <span class="strains-badge-label-text">Glyphosate / AMPA-Tested</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331804_7506952967287188.png" alt="No Binders">
                                </div>
                                <span class="strains-badge-label-text">No Binders</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331809_9421286347427003.png" alt="No Preservatives">
                                </div>
                                <span class="strains-badge-label-text">No Preservatives</span>
                            </div>
                            <div class="strains-badge-item-box">
                                <div class="strains-badge-icon-circle">
                                    <img src="https://assets.embeddables.com/Group1739331808_21752182411919663.png" alt="Prop 65">
                                </div>
                                <span class="strains-badge-label-text">Prop 65 Compliant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section class="gut-stats-main-section">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Left Column: Heading -->
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <h2 class="gut-stats-heading-text">
                       Sustainably delivered, monthly.
                    </h2>
                    <p>Our refill pouches protect your DS-01® through transit while being gentler on our Earth.</p>
                </div>

                <!-- Right Column: Statistics Cards -->
                <div class="col-lg-8 col-md-12">
                    <div class="row">

                        <!-- Card 1: Beneficial Gut Bacteria -->
                        <div class="col-md-4 offset-md-3 mb-4">
                           <img src="https://assets.embeddables.com/Frame17393319061_8869900190838461.png" class="w-100" alt=""> 
                        </div>

                        <!-- Card 2: Gut Barrier -->
                        <div class="col-md-4 mb-4">
                           <img src="https://assets.embeddables.com/Frame173933190711_09804183827806268.png" class="w-100" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   
    <section class="vcn-new-product">
      <div class="container-fluid">
        <div class="row g-3">
          <!-- Product 1: Daily Multivitamin -->
          <div class="col-md-6">
            <div class="product-card">
              <div class="product-image-wrapper">
                <img
                  src="/img/products/product-9.png"
                  alt="Daily Multivitamin"
                  class="product-image"
                />
              </div>
              <div class="product-content">
                <span class="product-label">AGE 18+</span>
                <h3 class="product-title">Daily Multivitamin</h3>
                <p class="product-description">
                  Help cover daily nutrient gaps for your whole body with 25
                  essential nutrients plus value of 20 assorted vitamins and 10.
                </p>
                <div class="product-price">$39.99</div>
                <div class="product-actions">
                  <a href="/product-details" class="btn-learn">Learn More</a>
                  <a href="/cart" class="btn-cart">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Product 2: Daily Essentials Duo -->
          <div class="col-md-6">
            <div class="product-card">
              <div class="product-image-wrapper">
                <img
                  src="/img/products/product-11.png"
                  alt="Daily Essentials Duo"
                  class="product-image"
                />
              </div>
              <div class="product-content">
                <h3 class="product-title">Daily Essentials Duo</h3>
                <p class="product-description">
                  Clinically proven probiotic and advanced multivitamin duo for
                  daily health.*
                </p>
                <div class="product-price">
                  $39.99
                  <span class="old-price">$49.98</span>
                </div>
                <div class="product-actions">
                  <a href="/product-details" class="btn-learn">Learn More</a>
                  <a href="/cart" class="btn-cart">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="reviews-section">
      <h2 class="section-title">Member<br />Reviews</h2>

      <div class="rating-overview">
        <div class="rating-score">
          <div class="rating-flex">
            <div class="rating-number">4.8</div>
            <div class="stars">
              ★★★★★
              <div class="rating-count">Based on 10023 reviews</div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="rating-bars">
          <div class="rating-bar-item">
            <span class="star-label">5 ★</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: 92%"></div>
            </div>
            <span class="bar-count">9214</span>
          </div>
          <div class="rating-bar-item">
            <span class="star-label">4 ★</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: 5%"></div>
            </div>
            <span class="bar-count">502</span>
          </div>
          <div class="rating-bar-item">
            <span class="star-label">3 ★</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: 2%"></div>
            </div>
            <span class="bar-count">197</span>
          </div>
          <div class="rating-bar-item">
            <span class="star-label">2 ★</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: 0.5%"></div>
            </div>
            <span class="bar-count">52</span>
          </div>
          <div class="rating-bar-item">
            <span class="star-label">1 ★</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: 0.6%"></div>
            </div>
            <span class="bar-count">58</span>
          </div>
        </div>
      </div>

      <!-- Search and Sort -->
      <div class="search-sort-bar">
        <div class="search-box">
          <span class="search-icon"
            ><img src="/img/icons/search.png" alt=""
          /></span>
          <input type="text" placeholder="Search reviews" />
        </div>
        <div class="sort-dropdown">
          <select>
            <option>Sort by: Highest rating</option>
            <option>Sort by: Lowest rating</option>
            <option>Sort by: Most recent</option>
            <option>Sort by: Most helpful</option>
          </select>
        </div>
      </div>

      <!-- Results Info -->
      <div class="results-info">
        We found 24 matching reviews.
        <span class="clear-filters">Clear filters</span>
      </div>

      <!-- Reviews List -->
      <div class="reviews-list">
        <div class="review-card">
          <!-- ROW 1 -->
          <div class="row-1">
            <div class="left-block">
              <span class="name">Sonya H. <span class="loc">US</span></span>
              <span class="stars">★★★★★</span>
            </div>

            <div class="date-block">
              <span class="date">11/04/25</span>
            </div>
          </div>

          <!-- ROW 2 -->
          <div class="row-2">
            <span class="verified"
              ><i class="fa-solid fa-circle-check"></i> Verified Buyer</span
            >

            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>

          <!-- ROW 3 (HELPFUL) -->
          <div class="row-3">
            <span class="help">Was this helpful?</span>

            <div class="help-icons">
              <i class="fa-regular fa-thumbs-up"></i> 0
              <i class="fa-regular fa-thumbs-down"></i> 0
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <button class="page-btn">3</button>
        <button class="page-btn">4</button>
        <button class="page-btn">5</button>

        <button class="arrow-btn">›</button>
      </div>
    </div>
    <!-- POPUP MODAL -->
    <div id="productPreviewModal" class="productPreviewModal">
      <span class="productPreviewModal-close" onclick="closeProductPreview()"
        >&times;</span
      >

      <img id="productPreviewImage" class="productPreviewModal-content" />
      <!-- MODAL THUMBNAILS -->
      <div class="productPreviewModal-thumbs">
        <img
          class="thumb"
          src="https://assets.embeddables.com/Hero1_360147181803535.png"
          onclick="changePreviewImage(this.src)"
        />

        <img
          class="thumb"
          src="https://assets.embeddables.com/Rectangle122041_004213986439953521.png"
          onclick="changePreviewImage(this.src)"
        />

        <img
          class="thumb"
          src="https://assets.embeddables.com/Rectangle122051_8551790234297849.png"
          onclick="changePreviewImage(this.src)"
        />

        <img
          class="thumb"
          src="http://assets.embeddables.com/Rectangle122071_6289075903534314.png"
          onclick="changePreviewImage(this.src)"
        />

        <img
          class="thumb"
          src="http://assets.embeddables.com/HeroSupplementFacts_9730338301782036.png"
          onclick="changePreviewImage(this.src)"
        />
      </div>
    </div>

    <!-- SIDEBAR -->
    <div class="clinical-sidebar" id="clinicalSidebar">
      <div class="clinical-sidebar-header">
        <h5>DS-01® Daily Synbiotic</h5>
        <span class="clinical-close" id="closeClinicalSidebar">&times;</span>
      </div>

      <hr />

      <div class="clinical-sidebar-content">
        <div
          class="clinical-content clinical-trial-content"
          style="display: block"
        >
          <h5>Clinical Trials</h5>

          <p>Only about 16% of supplements are clinically tested.</p>
          <p>
            DS-01® has been clinically proven in 4 gold-standard, double-blind
            placebo controlled clinical trials.
          </p>
          <p>
            In addition, DS-01®’s probiotic strains have been validated in 10,
            dose-matched gold-standard clinical trials.
          </p>

          <h4>The Impact of Clinical Proof</h4>
          <p>
            Double-blind, randomized, placebo-controlled trials (DBRCTs) are the
            gold standard in scientific research for various reasons, including:
          </p>

          <ul>
            <li>Bias elimination</li>
            <li>Control for placebo-effect</li>
            <li>Validated efficacy</li>
            <li>Regulatory compliance</li>
          </ul>

          <p>
            By testing DS-01® as a full formulation, the entire product is
            meticulously inspected and validated for safety, tolerability, and
            efficacy.
          </p>
        </div>
        <div class="clinical-content digestive-health-content">
          <h5>Strains + Ingredients</h5>

          <p>
            DS-01® is formulated with 24 scientifically and clinically studied
            probiotic strains and a patented, non-fermenting prebiotic.
          </p>
          <p>53.6 billion AFU. No refrigeration required.</p>
          <div class="clinical-content-start">
            <h5>Strains</h5>
            <img
              src="https://assets.embeddables.com/Rectangle814_042863324874999886.png"
              alt=""
              class="w-100 mt-3"
            />
            <h5>Probiotic Inner Capsule</h5>
            <p>
              Proprietary formulation consisting of 24 probiotic strains (53.6
              billion AFU) validated through strain-specific research and free
              of all 14 classes of allergens identified by the European Food
              Safety Authority (EFSA).
            </p>

            <h5>
              Digestive Health / Gastrointestinal Immunity / Gut Barrier
              Integrity Probiotic Blend
            </h5>
            <ul class="vcn-benefits-list">
              <li>Bifidobacterium longum SD-BB536-JP</li>
              <li>Bifidobacterium breve SD-LP1-IT</li>
              <li>Lactiplantibacillus plantarum SD-LP1-IT</li>
            </ul>
          </div>
          <div class="clinical-content-start">
            <h5>Strains</h5>
            <img
              src="https://assets.embeddables.com/Rectangle8141_9758295608963026.png"
              alt=""
              class="w-100 mt-3"
            />
            <h5>Prebiotic Outer Capsule</h5>
            <p>
              Our prebiotic formulation consists of punicalagins concentrated
              from Indian pomegranate—biotransformed by gut microbes into
              powerful metabolites for human health.
            </p>

            <h5>Other Ingredients</h5>
            <ul class="vcn-benefits-list">
              <li>
                Vegan outer [hypromellose, chlorophyllin] and inner
                [hypromellose, water] capsulesOrganic rice fiber
              </li>
              <li>Organic rice fiber</li>
              <li>Organic rice extract blend</li>
            </ul>
          </div>
          <div class="clinical-content-start">
            <h5>Safety + Testing</h5>
            <p>
              DS-01® is held to a superior standard of quality and safety,
              undergoing 50+ checkpoints throughout the production process
              testing for purity, potency, and contaminants.
            </p>
            <img src="/img/about/vegan.png" alt="" class="w-100 mt-3" />
          </div>
          <div class="clinical-content-start">
            <h5>Supplement Facts</h5>

            <img
              src="https://assets.embeddables.com/supplement-facts1_08832635772309982.png"
              alt=""
              class="w-100 mt-3"
            />
          </div>
        </div>
        <!-- New: Clinical Evidence Content -->
        <div class="clinical-content clinical-evidence-content">
          <h5>Clinical Trials</h5>
          <p>Only about 16% of supplements are clinically tested.</p>
          <p>
            DS-01® has been clinically proven in 4 gold-standard, double-blind
            placebo controlled clinical trials.
          </p>
          <p>
            In addition, DS-01®’s probiotic strains have been validated in 10,
            dose-matched gold-standard clinical trials.
          </p>
          <h5><strong>The Impact of Clinical Proof</strong></h5>
          <p>
            Double-blind, randomized, placebo-controlled trials (DBRCTs) are the
            gold standard in scientific research for various reasons, including:
          </p>
          <ul class="vcn-benefits-list">
            <li>Bias elimination</li>
            <li>Control for placebo-effect</li>
            <li>Validated efficacy</li>
            <li>Regulatory compliance</li>
          </ul>
          <p>
            By testing DS-01® as a full formulation, the entire product is
            meticulously inspected and validated for safety, tolerability, and
            efficacy.
          </p>
          <div class="clinical-content-start">
            <h5>Digestive Health</h5>
            <p>
              DS-01® is formulated to improve the frequency of your bowel
              movements, as well as increase stool consistency and comfort
              during evacuation.
            </p>
          </div>
        </div>
        <div class="clinical-content viacap-delivery-tech">
          <div class="clinical-content-start">
 <h5>Survivability</h5>
          <p>Many probiotics—like gummies, powders, and drinks—dissolve during digestion. DS-01®’s proprietary ViaCap® system is engineered to protect probiotic strains from stomach acid, digestive enzymes, and bile.</p>
          <p>
            DS-01® has been clinically proven in 4 gold-standard, double-blind
            placebo controlled clinical trials.
          </p>
          </div>
         
         <div class="clinical-content-start">
<h5><strong>ViaCap® Technology</strong></h5>
<p>Our proprietary dual-capsule system is built for a timed release to the colon: the prebiotic outer capsule releases in the upper GI tract and the probiotic inner capsule continues to the large intestine.</p>
<img src="https://assets.embeddables.com/Frame1739331904_5832234601737014.png" class="w-100" alt="">
<ul class="vcn-benefits-list">
            <li>Outer capsule made from cellulose protects probiotics and prebiotics as they travel through the GI tract.</li>
            <li>Plant-based formula—no synthetic coatings like similar cap-in-cap systems.</li>
            <li>Engineered for precision delivery to the colon, where bacteria is needed to work effectively.</li>
       
          </ul>
         </div>
         <div class="clinical-content-start">
<h5><strong>Digestive Survivability Testing (SHIME®)</strong></h5>
<p>To evaluate the survival of our probiotics, we use a Simulator of the Human Intestinal Microbial Ecosystem (SHIME®)—the closest simulation of the human gastrointestinal system. It recreates the physiological conditions of digestion (food uptake, peristalsis, digestive enzymes, pancreatic and bile acids) and time spent in each step to represent the dynamic microbial conditions of the human gastrointestinal tract.</p>

         </div>
          
        
          </div>
        </div>
      </div>

    <!-- DARK OVERLAY -->
    <div class="clinical-overlay" id="clinicalOverlay"></div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>