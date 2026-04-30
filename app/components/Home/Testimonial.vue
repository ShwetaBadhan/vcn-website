<template>
     <section class="vcn-testimonial-section">
      <div class="vcn-testimonial-container">
        <!-- Header -->
        <div class="vcn-testimonial-header">
          <h2 class="vcn-testimonial-title">
            Thousands Are Redefining <br> Their Health with VCN.
          </h2>
          <p class="vcn-testimonial-subtitle">
            Discover how VCN is helping people take control of their wellness journey.
          </p>
        </div>

        <!-- Swiper -->
        <div class="swiper vcn-swiper-container">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <div class="vcn-testimonial-card">
                <img
                  src="\img\testimonial\testimonial.png"
                  alt="Customer testimonial"
                  class="vcn-testimonial-image"
                />
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <div class="vcn-testimonial-card">
                <img
                  src="/img/image/testimonial.png"
                  alt="Customer testimonial"
                  class="vcn-testimonial-image"
                />
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <div class="vcn-testimonial-card">
                <img
                  src="\img\testimonial\testimonial.png"
                  alt="Customer testimonial"
                  class="vcn-testimonial-image"
                />
              </div>
            </div>

            <!-- Slide 4 -->
            <div class="swiper-slide">
              <div class="vcn-testimonial-card">
                <img
                  src="/img/image/testimonial.png"
                  alt="Customer testimonial"
                  class="vcn-testimonial-image"
                />
              </div>
            </div>
          </div>
          <!-- Audio Control (only once) -->
          <div class="vcn-audio-controls-global">
            <button class="vcn-audio-button" aria-label="Play audio">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
                />
              </svg>
            </button>
            <img
              src="\img\testimonial\testimonial.png"
              alt="User avatar"
              class="vcn-user-avatar"
              id="vcn-avatar"
            />
          </div>

          <!-- Pagination -->
          <div class="vcn-custom-pagination"></div>
        </div>
      </div>
    </section>
</template>