<template>
      <!-- Navbar -->
    <header>
      <nav class="navbar" id="navbar">
        <div class="container-fluid">
          <!-- Mobile Layout -->
          <a class="navbar-brand d-lg-none" href="#">
            <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
          </a>

          <!-- HTML -->
          <div class="d-lg-none d-flex align-items-center">
            <a href="#" class="mobile-cart">Cart</a>
            <button
              class="custom-navbar-toggler"
              type="button"
              onclick="toggleMenu()"
              aria-label="Toggle menu"
            >
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>

          <!-- Desktop Layout -->
          <div class="nav-left-wrapper d-none d-lg-flex">
            <a class="navbar-brand" href="/">
              <img src="/img/logo/logo.png" alt="Logo" class="nav-img" />
            </a>

            <ul class="desktop-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">Shop</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487644/library/nav/shop/DS01.png"
                        alt="Product"
                      />
                      DS-01® Daily Synbiotic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755803988/library/nav/shop/DM02.png"
                        alt="Product"
                      />
                      DM-02™ Daily Multivitamin
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804034/library/nav/shop/DED.png"
                        alt="Product"
                      />
                      Daily Essentials Duo
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804048/library/nav/shop/AM02.png"
                        alt="Product"
                      />
                      AM-02™
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804062/library/nav/shop/PM02.png"
                        alt="Product"
                      />
                      PM-02™
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487661/library/nav/shop/PDS08.png"
                        alt="Product"
                      />
                      PDS-08™
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487654/library/nav/shop/VS01.png"
                        alt="Product"
                      />
                      VS-01™
                    </a>
                  </li>
                  <li class="dropdown-footer">
                    <a href="/all-products">Shop All Products →</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">Science</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/approach">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487791/library/nav/science/approach.png"
                        alt="Approach"
                      />
                      <strong>Approach<br />Micro</strong>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/vcn-labs">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487782/library/nav/science/seedlabs.png"
                        alt="Seed Labs"
                      />
                      <strong>Seed Labs</strong>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/approach#scientists">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487801/library/nav/science/scientists.png"
                        alt="Seed Labs"
                      />
                      <strong>Scientists</strong>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/sustainability">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487761/library/nav/science/sustainability.png"
                        alt="Seed Labs"
                      />
                      <strong>Sustainability</strong>
                    </a>
                  </li>
                  <li>
                    <a href="" class="dropdown-item"
                      ><strong>References</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>DS-01® Daily Synbiotic</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>DM-02™ Daily Multivitamin</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>AM-02™ Energy + Focus</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>PM-02™ Sleep + Restore</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>PDS-08® Pediatric Synbiotic</strong></a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="dropdown-item"
                      ><strong>VS-01™ Vaginal Synbiotic</strong></a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">Learn</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/microbiome">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487912/library/nav/learn/microbiome.png"
                        alt="Research"
                      />
                      Microbiome
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487978/library/nav/learn/probiotics.png"
                        alt="Research"
                      />
                      Probiotics
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

   <div class="nav-right-wrapper d-flex align-items-center">
  <a href="/login" class="login-link">Login</a>
  <a href="/cart" class="navbar-btn">Cart</a>
</div>



          <!-- Mobile Full Screen Menu -->
          <div class="navbar-collapse" id="navbarContent">
            <!-- <div class="mobile-menu-header">
              <img src="/img/logo/logo.png" alt="Logo" class="mobile-logo" />
              <button class="close-menu" onclick="toggleMenu()">×</button>
            </div> -->

            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onclick="toggleAccordion(event, 'shopAccordion')"
                  >Shop</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onclick="toggleAccordion(event, 'scienceAccordion')"
                  >Science</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onclick="toggleAccordion(event, 'learnAccordion')"
                  >Learn</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login">Login</a>
              </li>
            </ul>

            <!-- Shop Accordion -->
            <div class="dropdown-content" id="shopAccordion" show>
              <div class="dropdown-menu-mobile">
                <a class="dropdown-item" href="/product-details">
                  <img src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487644/library/nav/shop/DS01.png" alt="Product" />
                  DS-01® Daily Synbiotic
                </a>
                <a class="dropdown-item" href="/product-details">
                  <img src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755803988/library/nav/shop/DM02.png"
 alt="Product" />
                  DM-02™ Daily Multivitamin
                </a>
                <a class="dropdown-item" href="/product-details">
                  <img src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804034/library/nav/shop/DED.png" alt="Product" />
                  Daily Essentials Duo
                </a>

                 <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804048/library/nav/shop/AM02.png"
                        alt="Product"
                      />
                      AM-02™
                    </a>
                    <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755804062/library/nav/shop/PM02.png"
                        alt="Product"
                      />
                      PM-02™
                    </a>
                     <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487661/library/nav/shop/PDS08.png"
                        alt="Product"
                      />
                      PDS-08™
                    </a>
                     <a class="dropdown-item" href="/product-details">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487654/library/nav/shop/VS01.png"
                        alt="Product"
                      />
                      VS-01™
                    </a>
                <div class="dropdown-footer">
                  <a href="/all-products">Shop All Products →</a>
                </div>
              </div>
            </div>

            <!-- Science Accordion -->
            <div class="dropdown-content" id="scienceAccordion">
              <div class="dropdown-menu-mobile">
                <a class="dropdown-item" href="/approach">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487791/library/nav/science/approach.png"
                        alt="Approach"
                      />
                      <strong>Approach<br />Micro</strong>
                    </a>
                  <a class="dropdown-item" href="/vcn-labs">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487782/library/nav/science/seedlabs.png"
                        alt="Seed Labs"
                      />
                      <strong>Seed Labs</strong>
                    </a>
                <a class="dropdown-item" href="/approach#scientists">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487801/library/nav/science/scientists.png"
                        alt="Seed Labs"
                      />
                      <strong>Scientists</strong>
                    </a>
                      <a class="dropdown-item" href="sustainability">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487761/library/nav/science/sustainability.png"
                        alt="Seed Labs"
                      />
                      <strong>Sustainability</strong>
                    </a>
              </div>
            </div>

            <!-- Learn Accordion -->
            <div class="dropdown-content" id="learnAccordion">
              <div class="dropdown-menu-mobile">
                 <a class="dropdown-item" href="/microbiome">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487912/library/nav/learn/microbiome.png"
                        alt="Research"
                      />
                      Microbiome
                    </a>
                     <a class="dropdown-item" href="#">
                      <img
                        src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755487978/library/nav/learn/probiotics.png"
                        alt="Research"
                      />
                      Probiotics
                    </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>