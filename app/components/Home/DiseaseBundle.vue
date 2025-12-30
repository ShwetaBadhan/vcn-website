<template>
      <section class="vcn-human-section">
      <div class="vcn-human-container" id="mainContainer">
        <!-- Left Content -->
        <div class="vcn-human-left-content">
          <div class="vcn-human-logo">
            <div class="vcn-human-logo-icon">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232d4a25'%3E%3Cpath d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <span>VCN</span>
          </div>

          <h2 class="vcn-human-heading">You are more than human.</h2>

          <p>
            Your body isn't yours alone—it's home to 38 trillion microbes that
            power your digestion, immunity and more. Take a few minutes to learn
            how their health impacts your health—and how to maximize both.
          </p>

          <button class="vcn-human-cta-button" id="openBundles">
            Disease Bundles
            <span class="vcn-human-border">
              <span class="vcn-human-play-icon">></span>
            </span>
          </button>
        </div>

        <!-- Right Content - Video/Bundles Area -->
        <div class="vcn-human-right-content">
          <!-- Video Container -->
          <div class="video-container" id="videoContainer">
            <div class="vcn-human-image-wrapper">
              <video
                id="myVideo"
                muted
                loop
                autoplay
                width="800"
                class="vcn-human-main-image"
              ></video>
              <!-- <img
              src="/img/about/about-2.jpg"
              class="vcn-human-main-image"
            /> -->
            </div>
          </div>

          <!-- Disease Bundles Container -->
          <div class="disease-bundles-container" id="bundlesContainer">
            <div class="bundles-header">
              <button class="close-button" id="closeBtn">✕</button>
              <h2 class="bundles-title">
                Proven Bundles For Your Health Needs!
              </h2>
              <p class="bundles-subtitle">
                Check out our custom bundles based on your current health
                conditions
              </p>
            </div>

            <div class="disease-grid">
              <!-- Acidity Card -->
              <div class="disease-card">
                <div class="disease-card-image">
                  <div class="disease-icon">
                    <img
                      src="https://vcarenetwork.in/login/public/uploads/section/category/acidity/img_6878efdd3a0b77.16525164.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="disease-card-body">
                  <h3 class="disease-title">Acidity</h3>
                  <a href="bundle-details.html" class="learn-more-btn"
                    >LEARN MORE</a
                  >
                </div>
              </div>

              <!-- Thyroid Card -->
              <div class="disease-card">
                <div class="disease-card-image">
                  <div class="disease-icon">
                    <img
                      src="https://vcarenetwork.in/login/public/uploads/section/category/thyroid/img_6878efe483e352.82786474.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="disease-card-body">
                  <h3 class="disease-title">Thyroid</h3>
                  <a href="bundle-details.html" class="learn-more-btn"
                    >LEARN MORE</a
                  >
                </div>
              </div>

              <!-- Diabetes Card -->
              <div class="disease-card">
                <div class="disease-card-image">
                  <div class="disease-icon">
                    <img
                      src="https://vcarenetwork.in/login/public/uploads/section/category/diabetes/img_6878efebd79712.26526712.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="disease-card-body">
                  <h3 class="disease-title">Diabetes</h3>
                  <a href="bundle-details.html" class="learn-more-btn"
                    >LEARN MORE</a
                  >
                </div>
              </div>

              <!-- Fatty Liver Card -->
              <div class="disease-card">
                <div class="disease-card-image">
                  <div class="disease-icon">
                    <img
                      src="https://vcarenetwork.in/login/public/uploads/section/category/fatty-liver/img_6878eff29458b6.66484526.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="disease-card-body">
                  <h3 class="disease-title">Fatty Liver</h3>
                  <a href="bundle-details.html" class="learn-more-btn"
                    >LEARN MORE</a
                  >
                </div>
              </div>
            </div>

            <div class="view-more-section">
              <a href="diseases-bundle.html" class="view-more-btn">VIEW MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>