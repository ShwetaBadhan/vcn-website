<template>
  <section class="product-detail-section mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="leadership-page">
            <!-- Hero Section -->
            <section class="hero-sectioning">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    <div class="hero-image">
                      <img src="/img/leadership/ourleadership.jpeg" alt="Leadership" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="hero-contents">
                      <h1 class="hero-title">Our leadership</h1>
                      <p class="hero-text">
                        Our leadership is driven by vision, integrity, and a commitment to excellence. With years of
                        industry experience, our leaders guide the organization with a clear focus on innovation,
                        quality, and sustainable growth. They inspire a culture of trust, empower our community, and
                        continuously strive to create opportunities that help individuals achieve both personal and
                        professional success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!--   Section -->
            <!-- <section class="management-section">
              <div class="container">
                <h2 class="section-title">Management</h2>
                <div class="row">
                  <div v-for="(member, index) in managementTeam" :key="index" class="col-lg-4 col-md-6 mb-4">
                    <div class="team-card">
                      <div class="team-image">
                        <img :src="member.image" :alt="member.name" />
                      </div>
                      <div class="team-info">
                        <h3 class="team-name">{{ member.name }}</h3>
                        <p class="team-titles">{{ member.title }}</p>
                        <button @click="openBio(member)" class="view-bio-btn">
                          View Bio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button class="view-all-btn">
                    <i class="bi bi-arrow-down"></i> View All
                  </button>
                </div>
              </div>
            </section> -->

            <!-- Board of Directors Section -->
            <section class="board-section">
              <div class="container">
                <h2 class="section-title">Board of directors</h2>
                <div class="row">
                  <div v-for="(member, index) in boardMembers" :key="index" class="col-lg-4 col-md-6 mb-4">
                    <div class="team-card">
                      <div class="team-image">
                        <img :src="member.image" :alt="member.name" />
                      </div>
                      <div class="team-info">
                        <h3 class="team-name">{{ member.name }}</h3>
                        <p class="team-titles">{{ member.title }}</p>
                        <button @click="openBio(member)" class="view-bio-btn">
                          View Bio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="text-center mt-4">
                  <button class="view-all-btn">
                    <i class="bi bi-arrow-down"></i> View All
                  </button>
                </div> -->
              </div>
            </section>

            <!-- Connect Section -->
            <section class="connect-section">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-4">
                    <h2 class="connect-title">Connect with our leadership</h2>
                  </div>
                  <div class="col-lg-5">
                    <p class="connect-text">
                      We give everyone the opportunity to communicate directly
                      with the chairman of the board, individual directors,
                      non-management directors as a group or the entire board of
                      directors.
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <button class="contact-btn">
                      <i class="bi bi-plus-circle"></i> Contact the Board
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- Bio Modal -->
            <div v-if="showModal" class="modal-overlay" @click.self="closeBio">
              <div class="modal-content">
                <button class="modal-close" @click="closeBio">
                  <i class="bi bi-x"></i>
                </button>
                <div class="modal-body">
                  <div class="modal-image">
                    <img :src="selectedMember.image" :alt="selectedMember.name" />
                  </div>
                  <div class="modal-info">
                    <h2 class="modal-name">{{ selectedMember.name }}</h2>
                    <p class="modal-title">{{ selectedMember.title }}</p>
                    <div class="modal-description">
                      <p>{{ selectedMember.bio }}</p>
                    </div>
                    <div class="modal-details" v-if="
                      selectedMember.education || selectedMember.experience
                    ">
                      <div v-if="selectedMember.education" class="detail-section">
                        <h4>Education</h4>
                        <p>{{ selectedMember.education }}</p>
                      </div>
                      <div v-if="selectedMember.experience" class="detail-section">
                        <h4>Experience</h4>
                        <p>{{ selectedMember.experience }}</p>
                      </div>
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
</template>

<script setup>
import { ref } from "vue";

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
const showModal = ref(false);
const selectedMember = ref({});

// const managementTeam = ref([
//   {
//     name: "Stephan Gratziani",
//     title: "Chief Executive Officer",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "Stephan Gratziani serves as Chief Executive Officer, bringing over 20 years of leadership experience in the health and wellness industry.",
//     education:
//       "MBA from Harvard Business School, BS in Business Administration",
//     experience: "Previously served as COO at Global Wellness Corp for 15 years",
//   },
//   {
//     name: "Rob Levy",
//     title: "President",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "Rob Levy leads our global operations as President, driving strategic initiatives and business growth across all markets.",
//     education: "MBA from Stanford University, BA in Economics",
//     experience: "20+ years in executive leadership roles",
//   },
//   {
//     name: "John DeSimone",
//     title: "Chief Financial Officer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "John DeSimone oversees all financial operations and strategy as CFO, ensuring sustainable growth and fiscal responsibility.",
//     education: "CPA, MBA in Finance",
//     experience: "Former VP of Finance at Fortune 500 companies",
//   },
//   {
//     name: "Frank Lamberti",
//     title: "Chief Commercial Officer",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "Frank Lamberti drives our commercial strategy and market expansion as Chief Commercial Officer.",
//     education: "MBA in Marketing, BS in Business",
//     experience: "15 years in sales and marketing leadership",
//   },
//   {
//     name: "Troy Hicks",
//     title: "Chief Operating Officer",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "Troy Hicks ensures operational excellence and efficiency across all business units as COO.",
//     education: "MS in Operations Management",
//     experience: "Extensive background in operations and supply chain",
//   },
//   {
//     name: "Henry Wang",
//     title: "Chief Legal Officer",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     bio: "Henry Wang provides legal guidance and ensures compliance across all global operations.",
//     education: "JD from Yale Law School",
//     experience: "25 years of corporate legal experience",
//   },
// ]);

const boardMembers = ref([
  {
    name: "Harminder Singh ",
    title: "Director",
    image:
      "/img/leadership/our team 4.png",
    bio: "Harminder Singh serves as Director, providing strategic vision and leadership to the board.",
    education: "MBA from University of Chicago",
    experience: "Over 30 years in executive leadership",
  },
  {
    name: "Jasdeep Bawa",
    title: "Director",
    image:
      "/img/leadership/our team 2.png",
    bio: "Jasdeep Bawa brings extensive medical and public health expertise to the board.",
    education: "MD, Former U.S. Surgeon General",
    experience: "Distinguished career in medicine and public health",
  },
  {
    name: "Lynda Cloud",
    title: "Director",
    image:
      "/img/leadership/our team 3.png",
    bio: "Lynda Cloud provides strategic guidance on governance and compliance matters.",
    education: "MBA in Finance",
    experience: "20+ years in corporate governance",
  },
  {
    name: "Celine Del Genes",
    title: "Director",
    image:
      "/img/leadership/our team 5.png",
    bio: "Celine Del Genes contributes expertise in international business and market expansion.",
    education: "MBA from INSEAD",
    experience: "Global business leadership experience",
  },
  {
    name: "Sophie L'Hélias",
    title: "Director",
    image:
      "/img/leadership/our team.png",
    bio: "Sophie L'Hélias brings insights on digital transformation and innovation.",
    education: "MS in Technology Management",
    experience: "Leadership in tech and digital strategy",
  },
  // {
  //   name: "Michael Levitt",
  //   title: "Director",
  //   image:
  //     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //   bio: "Michael Levitt offers strategic counsel on mergers, acquisitions, and corporate development.",
  //   education: "MBA from Wharton",
  //   experience: "30 years in corporate development",
  // },
]);

const openBio = (member) => {
  selectedMember.value = member;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeBio = () => {
  showModal.value = false;
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
/* Hero Section */
.hero-sectioning {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 0;
  margin-bottom: 60px;
}

.hero-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.hero-contents {
  padding: 40px;
}

.hero-title {
  font-size: 56px;
  font-weight: 300;
  color: #1a4d2e;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero-texts {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

/* Section Titles */
.section-title {
  font-size: 40px;
  font-weight: 300;
  color: #1a4d2e;
  margin-bottom: 40px;
  text-align: left;
}

/* Team Cards */
.team-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.team-image {
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: #f5f5f5;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-info {
  padding: 24px;
  text-align: center;
}

.team-name {
  font-size: 20px;
  font-weight: 600;
  color: #1a4d2e;
  margin: 0 0 8px 0;
}

.team-titles {
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.4;
  text-align: center;
}

.view-bio-btn {
  background: none;
  border: none;
  color: #1a4d2e;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s ease;
  text-decoration: underline;
}

.view-bio-btn:hover {
  color: #2d7a4a;
}

/* View All Button */
.view-all-btn {
  background: white;
  border: 2px solid #1a4d2e;
  color: #1a4d2e;
  padding: 12px 40px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.view-all-btn:hover {
  background: #1a4d2e;
  color: white;
}

.view-all-btn i {
  font-size: 16px;
}

/* Board Section */
.board-section {
  padding: 80px 0;
  background: #f9f9f9;
}

/* Connect Section */
.connect-section {
  background: #4caf50;
  padding: 60px 40px;
  border-radius: 8px;
  margin: 80px auto;
  max-width: 1200px;
}

.connect-title {
  font-size: 32px;
  font-weight: 400;
  color: white;
  margin: 0;
}

.connect-text {
  font-size: 16px;
  line-height: 1.6;
  color: white;
  margin: 0;
}

.contact-btn {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 14px 32px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.contact-btn:hover {
  background: white;
  color: #4caf50;
}

.contact-btn i {
  font-size: 18px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-close:hover {
  background: #f5f5f5;
  transform: rotate(90deg);
}

.modal-body {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .modal-body {
    flex-direction: row;
  }
}

.modal-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .modal-image {
    width: 40%;
    height: auto;
  }
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 40px;
  flex: 1;
}

.modal-name {
  font-size: 32px;
  font-weight: 600;
  color: #1a4d2e;
  margin: 0 0 8px 0;
}

.modal-title {
  font-size: 18px;
  color: #666;
  margin: 0 0 24px 0;
  font-weight: 500;
}

.modal-description p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 24px;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-section h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a4d2e;
  margin: 0 0 8px 0;
}

.detail-section p {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .section-title {
    font-size: 32px;
  }

  .team-image {
    height: 280px;
  }

  .connect-section {
    padding: 40px 20px;
    margin: 40px 20px;
  }

  .connect-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .contact-btn {
    margin-top: 20px;
  }
}
</style>
