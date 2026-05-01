<template>
  <!-- Co-Biotics Section -->
  <ClientOnly>
    <section class="vcn-cobiotics-section">
      <div class="vcn-cobiotics-container">
        <!-- Left Content -->
        <div class="vcn-cobiotics-content" data-aos="fade-up" data-aos-duration="400">
          <span class="vcn-cobiotics-badge" data-aos="fade-up" data-aos-duration="400">Bundle + Save 25%</span>
          <h2 class="vcn-cobiotics-title" data-aos="fade-up" data-aos-duration="400">
            Empowering Health. Enriching Lives.
          </h2>
          <p class="vcn-cobiotics-description" data-aos="fade-up" data-aos-duration="400">
            Step into a world of natural wellness, trusted personal care, and rewarding growth opportunities. VCare
            Network is committed to providing quality products that nurture your health, support your everyday needs,
            and
            inspire a better, healthier future.
          </p>
          <NuxtLink to="/all-products" class="vcn-cobiotics-cta-btn" data-aos="fade-up" data-aos-duration="400">Shop
            Daily Essentials Duo</NuxtLink>
        </div>

        <!-- Right Images -->
        <div class="vcn-cobiotics-images-wrapper" data-aos="fade-up" data-aos-duration="400">
          <!-- Main Products Display -->
          <div class="vcn-cobiotics-main-image">
            <img src="/img/image/frst image.png" alt="Co-Biotics Products" loading="eager" />
          </div>

          <!-- Bottom Thumbnails -->
          <div class="vcn-cobiotics-thumbnails-grid">
            <div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400">
              <img src="/img/image/4th image img.png" alt="Product 2" loading="eager" />
            </div>
            <div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400">
              <img src="\img\image\secon img.png" alt="Product 3" loading="eager" />
            </div>
            <div class="vcn-cobiotics-thumbnail-box" data-aos="zoom-in" data-aos-duration="400">
              <img src="\img\image\third  img.png" alt="Product 4" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>