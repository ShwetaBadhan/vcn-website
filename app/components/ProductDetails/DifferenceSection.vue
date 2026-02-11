<template>
     <section class="ds01-difference-section">
    <div class="container-fluid">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="ds01-section-title">The DS-01® Difference</h1>
          <p class="ds01-section-subtitle">
            Our formulation prioritizes strain diversity and survivability,<br />
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
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
              "
              muted
              autoplay
              playsinline
            >
              <source
                src="https://assets.embeddables.com/ZAIN_4Ds_06_0617_6754959037559694.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <!-- 👇 Doctor info now OUTSIDE the video container -->
          <div class="ds01-doctor-info">
            <div class="ds01-doctor-name">Dr. Zain Kassam, MD, MPH</div>
            <div class="ds01-doctor-title">
              Chief Medical Officer, Seed Health
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
              <div class="ds01-feature-card">
                <img
                  src="https://assets.embeddables.com/MicronutrientSynthesis_5775246620796877.png"
                  alt=""
                />
                <div class="ds01-feature-divider"></div>
                <h3 class="ds01-feature-title">24 Diverse Probiotic Strains</h3>
                <p class="ds01-feature-description">
                  Research-derived doses for microbial diversity, the foundation
                  of a healthy gut.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="ds01-feature-card">
                <img
                  src="https://assets.embeddables.com/40px_5070508167357767.png"
                  alt=""
                />
                <div class="ds01-feature-divider"></div>
                <h3 class="ds01-feature-title">Engineered to Survive</h3>
                <p class="ds01-feature-description">
                  Proprietary ViaCap® technology safeguards probiotics during
                  the journey to the colon.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="ds01-feature-card">
                <img
                  src="https://assets.embeddables.com/40px_5070508167357767.png"
                  alt=""
                />
                <div class="ds01-feature-divider"></div>
                <h3 class="ds01-feature-title">
                  Antioxidant-Promoting Prebiotic
                </h3>
                <p class="ds01-feature-description">
                  Non-fiber based prebiotic (unlike many found in food or
                  drinks) that feeds beneficial gut microbes.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="ds01-feature-card">
                <img
                  src="https://assets.embeddables.com/40px1_07112062106958539.png"
                  alt=""
                />
                <div class="ds01-feature-divider"></div>
                <h3 class="ds01-feature-title">
                  4 Gold-Standard Clinical Trials
                </h3>
                <p class="ds01-feature-description">
                  Scientifically validated by experts as a complete formulation,
                  four different times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>