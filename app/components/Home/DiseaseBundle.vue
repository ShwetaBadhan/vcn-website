<template>
  <section class="vcn-human-section">
    <div class="vcn-human-container" id="mainContainer">
      <!-- Left Content -->
      <div class="vcn-human-left-content">
        <div class="vcn-human-logo">
          <div class="vcn-human-logo-icon">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232d4a25'%3E%3Cpath d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z'/%3E%3C/svg%3E"
              alt="" />
          </div>
          <span>VCN</span>
        </div>

        <h2 class="vcn-human-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Trusted
          Wellness. Growing Opportunities.</h2>

        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          We focus on trusted, research-backed products that support everyday wellness and customer satisfaction. With
          a growing presence across India, VCare Network also empowers individuals through meaningful direct selling
          opportunities.
        </p>

        <button class="vcn-human-cta-button" id="openBundles" data-aos="zoom-in" data-aos-duration="800"
          data-aos-delay="400">
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
            <!-- <video id="myVideo" muted loop autoplay playsinline preload="auto" class="vcn-human-main-image"></video> -->
            <img src="/img/image/skelton.png" class="vcn-human-main-image"/>
          </div>
        </div>
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
              <img :src="cleanUrl('/img/image/acidty.png')" alt="" />
            </div>
          </div>
          <div class="disease-card-body">
            <h3 class="disease-title">Acidity</h3>
            <a href="/bundle-details" class="learn-more-btn">LEARN MORE</a>
          </div>
        </div>

        <!-- Thyroid Card -->
        <div class="disease-card">
          <div class="disease-card-image">
            <div class="disease-icon">
              <img :src="cleanUrl('/img/image/thyroid.png')" alt="" />
            </div>
          </div>
          <div class="disease-card-body">
            <h3 class="disease-title">Thyroid</h3>
            <a href="/bundle-details" class="learn-more-btn">LEARN MORE</a>
          </div>
        </div>

        <!-- Diabetes Card -->
        <div class="disease-card">
          <div class="disease-card-image">
            <div class="disease-icon">
              <img :src="cleanUrl('/img/image/diabetes.png')" alt="" />
            </div>
          </div>
          <div class="disease-card-body">
            <h3 class="disease-title">Diabetes</h3>
            <a href="/bundle-details" class="learn-more-btn">LEARN MORE</a>
          </div>
        </div>

        <!-- Fatty Liver Card -->
        <div class="disease-card">
          <div class="disease-card-image">
            <div class="disease-icon">
              <img :src="cleanUrl('/img/image/liver.png')" alt="" />
            </div>
          </div>
          <div class="disease-card-body">
            <h3 class="disease-title">Fatty Liver</h3>
            <a href="/bundle-details" class="learn-more-btn">LEARN MORE</a>
          </div>
        </div>
      </div>

      <div class="view-more-section">
        <a href="/diseases-bundle" class="view-more-btn">VIEW MORE</a>
      </div>
    </div>
  </section>

</template>

<script>
import Hls from 'hls.js';

export default {
  methods: {
    cleanUrl(url) {
      return url.replace(/&/g, '');
    }
  },
  mounted() {
    const video = document.getElementById("myVideo");

    if (!video) return;

    const videoSrc =
      "https://stream.mux.com/87tnV011w6GkwNzl7dxntQSNhpcVSJNgSQaqlj3iLTK00.m3u8?redundant_streams=true";

    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true,
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari (iOS / macOS)
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => { });
      });
    }
  },
};

</script>
