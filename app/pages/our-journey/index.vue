<template>
  <section class="product-detail-section  mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="journey-container">
            <!-- HERO SECTION -->
            <section class="journey-hero">
              <img src="https://via.placeholder.com/500x300" class="hero-img" />

              <h1>Major Milestones</h1>

              <p>
                A legacy is made of moments. Our company has a history as
                remarkable and unique as the people who created it.
              </p>
            </section>

            <!-- TIMELINE YEARS -->
            <section class="timeline-nav">
              <button
                v-for="year in years"
                :key="year"
                @click="activeYear = year"
                :class="{ active: activeYear === year }"
              >
                {{ year }}
              </button>
            </section>

            <!-- MILESTONE CONTENT -->

            <section class="timeline-content">
              <div class="milestone-card">
                <div class="milestone-image">
                  <img
                    v-if="activeYear === 1962"
                    src="https://via.placeholder.com/350x220"
                  />

                  <img
                    v-if="activeYear === 1959"
                    src="https://via.placeholder.com/350x220"
                  />
                </div>

                <div class="milestone-info">
                  <h2>{{ activeYear }}</h2>

                  <h3 v-if="activeYear === 1962">
                    VCN becomes international
                  </h3>

                  <h3 v-if="activeYear === 1959">Company Founded</h3>

                  <p v-if="activeYear === 1962">
                    VCN opens its first international office in Canada. This
                    milestone marked the beginning of global expansion.
                  </p>

                  <p v-if="activeYear === 1959">
                    VCN was founded with the vision of helping people achieve
                    success through entrepreneurship.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>
<script>
export default {
  data() {
    return {
      activeYear: 2015,

      years: [2015, 1990, 1980, 1972, 1968, 1962, 1959],
    };
  },
};
</script>

<style scoped>
.journey-container {
  padding: 40px;

  background: #f5f5f5;
}

/* HERO */

.journey-hero {
  background: #f2fde1;

  text-align: center;

  padding: 40px;

  border-radius: 10px;

  margin-bottom: 40px;
}

.hero-img {
  max-width: 500px;

  width: 100%;

  margin-bottom: 20px;

  border-radius: 8px;
}

.journey-hero h1 {
  font-size: 32px;

  margin-bottom: 10px;
}

.journey-hero p {
  color: #666;
}

/* TIMELINE NAV */

.timeline-nav {
  display: flex;

  justify-content: center;

  gap: 30px;

  border-bottom: 2px solid #ddd;

  padding-bottom: 10px;

  margin-bottom: 30px;

  flex-wrap: wrap;
}

.timeline-nav button {
  background: none;

  border: none;

  font-size: 16px;

  cursor: pointer;

  color: #666;

  padding-bottom: 6px;
}

.timeline-nav button.active {
  color: #45663c;

  border-bottom: 3px solid #45663c;
}

/* CARD */

.milestone-card {
  display: flex;

  gap: 40px;

  background: white;

  padding: 30px;

  border-radius: 10px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  align-items: center;
}

.milestone-image img {
  width: 350px;

  border-radius: 8px;
}

.milestone-info h2 {
  color: #45663c;

  font-size: 22px;
}

.milestone-info h3 {
  font-size: 24px;

  margin: 10px 0;
}

.milestone-info p {
  color: #555;

  line-height: 1.6;
}

/* MOBILE */

@media (max-width: 768px) {
  .milestone-card {
    flex-direction: column;

    text-align: center;
  }

  .milestone-image img {
    width: 100%;
  }
}
</style>
