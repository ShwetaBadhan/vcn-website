<template>
  <section class="product-detail-section  mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="news-content">
            <!-- HERO -->
            <section class="news-hero">
              <img src="/img/about/about-1.jpg" class="news-banner" />

              <div class="hero-title">
                <h1>VCN In News</h1>
              </div>
            </section>

            <!-- MEDIA TITLE -->

            <div class="media-heading">
              <h2>Media Coverage</h2>
            </div>

            <!-- YEAR FILTER -->

            <div class="year-tabs">
              <button
                v-for="year in years"
                :key="year"
                @click="activeYear = year"
                :class="{ active: activeYear === year }"
              >
                {{ year }}
              </button>
            </div>

            <!-- NEWS GRID -->

            <div class="news-grid">
              <div
                class="news-card"
                v-for="item in filteredNews"
                :key="item.title"
              >
                <div class="news-logo">A</div>

                <div class="news-info">
                  <span class="news-date">{{ item.date }}</span>

                  <h3 class="news-title">{{ item.title }}</h3>

                  <p class="news-source">{{ item.source }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";

const activeYear = ref(2026);

const years = [2026, 2025, 2024, 2023];

const news = [
  {
    year: 2026,
    date: "January 23, 2026",
    title:
      "Budget 2026 expectations: VCN India urges customs duty rationalisation",
    source: "The Times of India",
  },

  {
    year: 2026,
    date: "January 22, 2026",
    title: "Recognise supplements as part of overall wellness",
    source: "Press Trust of India",
  },

  {
    year: 2026,
    date: "January 8, 2026",
    title: "VCN India strengthens home delivery network",
    source: "Logistics Insider",
  },

  {
    year: 2026,
    date: "January 7, 2026",
    title: "VCN India redefines home delivery experience",
    source: "ET Edge Insights",
  },
];

const filteredNews = computed(() =>
  news.filter((item) => item.year === activeYear.value),
);
useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>
<style scoped>
.news-content {
  padding: 30px;
  background: #f6f6f6;
}

/* HERO */

.news-hero {
  position: relative;
  margin-bottom: 30px;
}

.news-banner {
  width: 100%;
  border-radius: 10px;
}

.hero-title {
  position: absolute;
  bottom: 20px;
  left: 30px;
  background: #c9e1b4;
  padding: 10px 25px;
  border-radius: 6px;
}

.hero-title h1 {
  margin: 0;
  font-size: 28px;
}

/* HEADING */

.media-heading {
  text-align: center;
  margin-bottom: 20px;
}

.media-heading h2 {
  font-size: 32px;
  font-weight: 600;
}

/* YEAR TABS */

.year-tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
}

.year-tabs button {
  background: none;
  border: none;
  padding-bottom: 8px;
  font-size: 16px;
  cursor: pointer;
}

.year-tabs .active {
  border-bottom: 3px solid #e30613;
  font-weight: 600;
}

/* NEWS GRID */

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* CARD */

.news-card {
  display: flex;
  gap: 15px;
  background: #fff;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  align-items: center;
}

.news-logo {
  width: 60px;
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.news-date {
  font-size: 13px;
  color: #777;
}

.news-title {
  font-size: 16px;
  margin: 6px 0;
}

.news-source {
  font-size: 14px;
  color: #666;
}

/* MOBILE */

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
