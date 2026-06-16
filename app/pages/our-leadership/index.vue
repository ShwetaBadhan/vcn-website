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
                      <img :src="leadership.hero.image" :alt="leadership.hero.title" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="hero-contents">
                      <h1 class="hero-title">{{ leadership.hero.title }}</h1>


                      <p class="hero-text">
                              {{ leadership.hero.description }}
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
    <h2 class="section-title">
      {{ leadership.boardSection.title }}
    </h2>

    <div class="row">
      <div
        v-for="(member, index) in leadership.boardSection.members"
        :key="index"
        class="col-lg-4 col-md-6 mb-4"
      >
        <div class="team-card">
          <div class="team-image">
            <img
              :src="member.image"
              :alt="member.name"
            />
          </div>

          <div class="team-info">
            <h3 class="team-name">
              {{ member.name }}
            </h3>

            <p class="team-titles">
              {{ member.title }}
            </p>

            <button
              @click="openBio(member)"
              class="view-bio-btn"
            >
              {{ leadership.boardSection.btntext }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            <!-- Connect Section -->
            <section class="connect-section">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-4">
                    <h2 class="connect-title">{{ leadership.connectSection.title }}</h2>
                  </div>
                  <div class="col-lg-5">
                    <p class="connect-text">
                     {{leadership.connectSection.description }}
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <button class="contact-btn">
                      <i class="bi bi-plus-circle"></i> {{ leadership.connectSection.buttonText }}
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
import { ref, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

// Fetch page sections from API during SSR/routing
await useAsyncData('leadership-cms', () => cmsStore.fetchSectionsBySlug('leadership'))

const leadership = computed(() => {
  const sections = cmsStore.currentPage?.sections || []
  
  // Find sections by name/key
  const heroSec = sections.find(s => s.name === 'hero' || s.sectionKey === 'leadership-hero')
  const boardSec = sections.find(s => s.name === 'boardSection' || s.sectionKey === 'leadership-board')
  const connectSec = sections.find(s => s.name === 'connectSection' || s.sectionKey === 'leadership-connect')
  
  // Fallbacks
  const fallback = cmsStore.getPageSection('about', 'leadership')
  
  // Resolve hero image
  const rawHeroImage = heroSec?.image || heroSec?.extraData?.image
  let heroImage = ''
  if (rawHeroImage) {
    if (typeof rawHeroImage === 'string') {
      heroImage = rawHeroImage
    } else {
      heroImage = getCmsImageUrl(rawHeroImage)
    }
  }

  // Parse board members
  const fallbackMembers = fallback?.boardSection?.members || []
  let parsedMembers = fallbackMembers
  
  if (boardSec?.items && boardSec.items.length > 0) {
    parsedMembers = boardSec.items.map((m, idx) => {
      const rawImg = m.image || m.extraData?.image
      let memberImage = ''
      if (rawImg) {
        if (typeof rawImg === 'string') {
          memberImage = rawImg
        } else {
          memberImage = getCmsImageUrl(rawImg)
        }
      }
      
      const mName = m.extraData?.name || m.title || ''
      const fallbackM = fallbackMembers.find(fm => fm.name.trim().toLowerCase() === mName.trim().toLowerCase())
      
      return {
        name: mName,
        title: m.extraData?.title || m.subtitle || '',
        image: memberImage || fallbackM?.image || `/img/leadership/our team.png`,
        bio: m.extraData?.bio || m.description || ''
      }
    })
  }

  return {
    hero: {
      title: heroSec?.title || fallback?.hero?.title || 'Our leadership',
      description: heroSec?.description || fallback?.hero?.description || '',
      image: heroImage || fallback?.hero?.image || '/img/leadership/ourleadership.jpeg'
    },
    boardSection: {
      title: boardSec?.title || fallback?.boardSection?.title || 'Board of directors',
      btntext: boardSec?.items?.[0]?.extraData?.btntext || fallback?.boardSection?.btntext || 'View Bio',
      members: parsedMembers
    },
    connectSection: {
      title: connectSec?.title || fallback?.connectSection?.title || 'Connect with our leadership',
      description: connectSec?.description || fallback?.connectSection?.description || '',
      buttonText: connectSec?.buttonText || fallback?.connectSection?.buttonText || 'Contact the Board',
      icon: connectSec?.extraData?._extraData?.icon || fallback?.connectSection?.icon || 'bi-plus-circle'
    }
  }
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})

const showModal = ref(false)
const selectedMember = ref({})

const openBio = (member) => {
  selectedMember.value = member
  showModal.value = true
  document.body.style.overflow = "hidden"
}

const closeBio = () => {
  showModal.value = false
  document.body.style.overflow = "auto"
}
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
  height: auto;
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
