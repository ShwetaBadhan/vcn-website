<template>
  <section class="product-detail-section mt-3">
    <div class="refer-earn-page">

      <!-- ========== HERO SECTION ========== -->
      <section class="hero-sections py-5">
        <div class="container">
          <div class="row align-items-center">
            <h1 class="page-titles mb-3 text-center">Refer & Earn</h1>
            <p class=" text-center">
              Turn Referrals Into Earnings - Unlock Rewards Of Rs. 5,000, Rs. 15,000, Rs. 25,000,
            </p>
            <hr>
            <!-- Left Content -->
            <div class="col-lg-6 ">
              <div class="content-wrapper">


                <p class="intro-text mb-4">
                  The <strong>Refer & Earn</strong> feature in the MLM (Multi-Level Marketing) software from
                  <strong>CyrusTechnoEdge Solutions</strong> aims to increase user engagement and promote the
                  expansion of your network.
                </p>

                <div class="features-container">
                  <div class="feature-box">

                    <div class="feature-content">
                      <p><b>Referral Tracking</b>: Every referral made by a user is tracked within the system, allowing
                        users to monitor
                        their referral progress and potential earnings.</p>

                    </div>
                  </div>

                  <div class="feature-box">

                    <div class="feature-content">
                      <p><b>Automatic Commission Generation</b>: Users earn a commission or incentive for every
                        successful referral they make. The system
                        automatically calculates and updates the commissions.</p>

                    </div>
                  </div>

                  <div class="feature-box">

                    <div class="feature-content">
                      <p><b>Real-Time Updates</b>: Referrers can access real-time updates on the status of their
                        referrals, including
                        successful sign-ups and earnings.</p>

                    </div>
                  </div>

                  <div class="feature-box">

                    <div class="feature-content">
                      <p><b>Referral Link & Code</b>: The software provides unique referral links or codes to each user,
                        making it easy to
                        share and invite others to the platform.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Image -->
            <div class="col-lg-6  mb-4 mb-lg-0">
              <div class="image-container">
                <div class="image-wrapper">
                  <img src="/img/about/img-share.png" alt="Refer and Earn Illustration" class="hero-image img-fluid"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                  <div class="image-placeholder">
                    <div class="placeholder-content">
                      <i class="bi bi-phone display-1 text-primary"></i>
                      <h4 class="mt-3">Refer & Earn</h4>
                      <p class="text-muted">Illustration</p>
                    </div>
                  </div>
                </div>
                <!-- Decorative Elements -->
                <div class="decorative-circle circle-1"></div>
                <div class="decorative-circle circle-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== TARGET AUDIENCE SECTION ========== -->
      <section class="audience-section py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-titles mb-3">To Whom You Can Refer</h2>
            <p class="section-desc">
              CyrusTechnoEdge Solutions provides specialized MLM software designed specifically
              for network marketers, MLM companies, MLM consultants, and direct selling businesses.
            </p>
          </div>

          <div class="row g-4 align-items-center">
            <div class="col-lg-5">
              <div class="audience-list">
                <div class="audience-item" v-for="(item, index) in audiences" :key="index">
                  <div class="audience-number">{{ index + 1 }}</div>
                  <div class="audience-info">
                    <span class="audience-text">{{ item }}</span>
                  </div>
                  <div class="audience-arrow">
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="audience-visual">
                <img src="/img/about/img-share-1.png" alt="test" class="w-100">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== BENEFITS SECTION ========== -->
      <section class="benefits-section py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-titles mb-3">Benefits</h2>
            <p class="section-desc text-center">
              By enrolling in our Refer & Earn program, you'll gain access to a variety of
              exciting rewards and perks!
            </p>
          </div>

          <div class="row g-4">
            <div class="col-md-6 col-lg-4" v-for="(benefit, index) in benefits" :key="index">
              <div class="benefit-card h-100">
                <div class="benefit-icon-wrapper">
                  <div class="benefit-icon" v-html="benefit.icon"></div>
                </div>
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-desc">{{ benefit.description }}</p>
                <div class="benefit-footer">
                  <a href="#" class="benefit-link">Learn More <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== CTA SECTION ========== -->
      <section class="cta-section py-5">
        <div class="container">
          <div class="cta-wrapper">
            <div class="cta-content text-center">
              <span class="cta-tag">LET'S WORK TOGETHER</span>
              <h2 class="cta-title">
                Let Us Be Your Partner In Growing A Successful<br />
                <span class="text-highlight">MLM Business!</span>
              </h2>

              <div class="cta-actions">
                <button class="btn btn-cta-primary btn-lg" @click="requestCallback">
                  <i class="bi bi-telephone-fill me-2"></i>Request A Call Back
                </button>
              </div>

              <div class="cta-contact">
                <span>Or call us now</span>
                <a href="tel:+917014444749" class="contact-number">
                  <i class="bi bi-telephone-inbound"></i>
                  <span>+91 7014444749</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Background Shapes -->
        <div class="cta-shape shape-1"></div>
        <div class="cta-shape shape-2"></div>
      </section>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const audiences = ref([
  'MLM Network Marketer',
  'MLM Companies',
  'MLM Consultants',
  'Direct Selling Companies',
  'Entrepreneurs Looking To Start Their Own MLM Business'
])

const benefits = ref([
  {
    title: 'Lucrative Commissions',
    description: 'Earn rewarding commissions for every successful referral you make!',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    title: 'Rewards & Incentives',
    description: 'Unlock amazing rewards and exclusive incentives for your hard work!',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>'
  },
  {
    title: 'Easy Referral Process',
    description: 'With our simple and seamless referral program, referring clients is a breeze!',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>'
  },
  {
    title: 'Support & Assistance',
    description: 'Enjoy personalized support and assistance from our team every step of the way',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
  },
  {
    title: 'Grow Your Network',
    description: 'Enhance your network and foster new connections, plus earn rewards along the way!',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
  },
  {
    title: 'Increase Domain Knowledge',
    description: 'Expand your industry knowledge with our complete suite of marketing resources',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'
  }
])

const requestCallback = () => {
  alert('Callback request submitted! We will contact you soon.')
}
</script>
