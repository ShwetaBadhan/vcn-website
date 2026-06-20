<template>
  <section class="product-detail-section mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="leadership-page">
            
            <!-- Hero Section -->
            <section class="hero-sectioning" data-aos="fade-up" data-aos-duration="600">
              <div class="hero-glow-blob"></div>
              <div class="container-fluid">
                <div class="row align-items-center position-relative">
                  <div class="col-lg-6 order-2 order-lg-1">
                    <div class="hero-contents">
                      <div class="hero-tag">OUR VISIONARIES</div>
                      <h1 class="hero-title">{{ leadership.hero.title }}</h1>
                      <div class="hero-divider"></div>
                      <p class="hero-text">
                        {{ leadership.hero.description }}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2">
                    <div class="hero-image-wrapper">
                      <div class="hero-image-backdrop"></div>
                      <img :src="leadership.hero.image" :alt="leadership.hero.title" class="hero-img" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Board of Directors Section -->
            <section class="board-section" data-aos="fade-up" data-aos-duration="600">
              <div class="container">
                <div class="section-header">
                  <h2 class="section-title">
                    {{ leadership.boardSection.title }}
                  </h2>
                  <div class="section-title-line"></div>
                </div>

                <div class="team-grid">
                  <div
                    v-for="(member, index) in leadership.boardSection.members"
                    :key="index"
                    class="team-member-wrapper"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                    data-aos-duration="500"
                  >
                    <div class="team-card">
                      <div class="team-image-container">
                        <img
                          :src="member.image"
                          :alt="member.name"
                          class="team-img"
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
                          class="view-bio-link"
                        >
                          <span>{{ leadership.boardSection.btntext }}</span>
                          <svg class="bio-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Connect Section -->
            <section class="connect-section" data-aos="zoom-in" data-aos-duration="600">
              <div class="connect-bg-mesh"></div>
              <div class="container position-relative">
                <div class="row align-items-center">
                  <div class="col-lg-5">
                    <h2 class="connect-title">{{ leadership.connectSection.title }}</h2>
                  </div>
                  <div class="col-lg-4">
                    <p class="connect-text">
                      {{ leadership.connectSection.description }}
                    </p>
                  </div>
                  <div class="col-lg-3 text-lg-end mt-4 mt-lg-0">
                    <button class="contact-btn">
                      <i class="bi" :class="leadership.connectSection.icon || 'bi-plus-circle'"></i>
                      <span>{{ leadership.connectSection.buttonText }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- Bio Modal -->
            <Transition name="fade">
              <div v-if="showModal" class="modal-overlay" @click.self="closeBio">
                <div class="modal-card">
                  <button class="modal-close-btn" @click="closeBio" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div class="modal-grid">
                    <div class="modal-sidebar-img">
                      <img :src="selectedMember.image" :alt="selectedMember.name" />
                    </div>
                    <div class="modal-bio-content">
                      <div class="modal-header-info">
                        <h2 class="modal-name">{{ selectedMember.name }}</h2>
                        <p class="modal-title">{{ selectedMember.title }}</p>
                      </div>
                      <div class="modal-divider"></div>
                      <div class="modal-bio-text">
                        <p>{{ selectedMember.bio }}</p>
                      </div>
                      
                      <!-- Professional Details Timeline/Grid -->
                      <div class="modal-credentials" v-if="selectedMember.education || selectedMember.experience">
                        <div v-if="selectedMember.education" class="credential-item">
                          <div class="credential-header">
                            <svg class="cred-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                            </svg>
                            <h4>Education</h4>
                          </div>
                          <p>{{ selectedMember.education }}</p>
                        </div>
                        <div v-if="selectedMember.experience" class="credential-item">
                          <div class="credential-header">
                            <svg class="cred-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <h4>Experience</h4>
                          </div>
                          <p>{{ selectedMember.experience }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

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
/* Page Layout */
.leadership-page {
  font-family: 'Outfit', 'Inter', -apple-system, sans-serif;
  color: #2c3e50;
  overflow: hidden;
}

/* Hero Section */
.hero-sectioning {
  background: linear-gradient(135deg, #f0f4f1 0%, #e1ebe5 100%);
  padding: 50px 30px;
  margin-bottom: 30px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.hero-glow-blob {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
  z-index: 1;
  pointer-events: none;
}

.hero-tag {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2e7d32;
  margin-bottom: 16px;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a4d2e;
  margin-bottom: 20px;
  line-height: 1.15;
}

.hero-divider {
  width: 60px;
  height: 4px;
  background: #2e7d32;
  border-radius: 2px;
  margin-bottom: 24px;
}

.hero-text {
  font-size: 16px;
  line-height: 1.8;
  color: #4a5d4e;
  max-width: 520px;
}

.hero-image-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.hero-image-backdrop {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  background: rgba(46, 125, 50, 0.08);
  border-radius: 20px;
  z-index: 1;
}

.hero-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: transform 0.5s ease;
  object-fit: cover;
}

.hero-sectioning:hover .hero-img {
  transform: translateY(-5px);
}

/* Section Header */
.section-header {
  margin-bottom: 50px;
  position: relative;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a4d2e;
  margin-bottom: 12px;
}

.section-title-line {
  width: 50px;
  height: 3px;
  background: #b89047;
  border-radius: 2px;
}

/* Board Section */
.board-section {
  padding: 40px 0;
  background: #fcfdfd;
}

.team-grid {
  row-gap: 30px;
}

.team-member-wrapper {
  height: 100%;
}

/* Team Cards */
.team-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(26, 77, 46, 0.08);
}

.team-image-container {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  background: #eef2ef;
}

.team-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.team-card:hover .team-img {
  filter: grayscale(0%);
  transform: scale(1.04);
}

.team-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 77, 46, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.team-card:hover .team-card-overlay {
  opacity: 1;
}

.overlay-bio-btn {
  background: white;
  color: #1a4d2e;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(15px);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.3s ease;
}

.overlay-bio-btn:hover {
  background: #f5f5f5;
}

.team-card:hover .overlay-bio-btn {
  transform: translateY(0);
}

.team-info {
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
}

.team-name {
  font-size: 22px;
  font-weight: 700;
  color: #1a4d2e;
  margin: 0 0 6px 0;
  text-align: center;
}

.team-titles {
  font-size: 14px;
  font-weight: 500;
  color: #889e90;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

.view-bio-link {
  background: none;
  border: none;
  color: #1a4d2e;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  position: relative;
}

.view-bio-link span::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #b89047;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.view-bio-link:hover {
  color: #b89047;
}

.view-bio-link:hover span::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.bio-arrow {
  transition: transform 0.3s ease;
}

.view-bio-link:hover .bio-arrow {
  transform: translateX(4px);
}

/* Connect Section */
.connect-section {
  background: linear-gradient(135deg, #113c22 0%, #1a4d2e 100%);
  padding: 45px 40px;
  border-radius: 24px;
  margin: 40px auto;
  max-width: 1200px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(26, 77, 46, 0.25);
}

.connect-bg-mesh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.connect-title {
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.connect-text {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.contact-btn {
  background: #ffffff;
  border: none;
  color: #1a4d2e;
  padding: 15px 36px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  background-color: #f8faf9;
}

.contact-btn:active {
  transform: translateY(-1px);
}

.contact-btn i {
  font-size: 18px;
}

/* Modal Styling with Transition fade */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 31, 18, 0.7);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 20px;
}

.modal-card {
  background: white;
  border-radius: 24px;
  max-width: 950px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a4d2e;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.modal-close-btn:hover {
  background: #1a4d2e;
  color: white;
  transform: rotate(90deg);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .modal-grid {
    grid-template-columns: 42% 58%;
  }
}

.modal-sidebar-img {
  width: 100%;
  height: 420px;
  overflow: hidden;
  background: #eef2ef;
}

@media (min-width: 768px) {
  .modal-sidebar-img {
    height: 100%;
    min-height: 520px;
  }
}

.modal-sidebar-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-bio-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-header-info {
  margin-bottom: 20px;
}

.modal-name {
  font-size: 32px;
  font-weight: 700;
  color: #1a4d2e;
  margin: 0 0 6px 0;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: #889e90;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}

.modal-divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
}

.modal-bio-text p {
  font-size: 16px;
  line-height: 1.85;
  color: #4a5568;
  margin-bottom: 28px;
}

/* Professional Credentials */
.modal-credentials {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 24px;
}

@media (min-width: 576px) {
  .modal-credentials {
    grid-template-columns: 1fr 1fr;
  }
}

.credential-item {
  display: flex;
  flex-direction: column;
}

.credential-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.cred-icon {
  color: #b89047;
}

.credential-item h4 {
  font-size: 15px;
  font-weight: 700;
  color: #1a4d2e;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.credential-item p {
  font-size: 14px;
  line-height: 1.6;
  color: #718096;
  margin: 0;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 991px) {
  .hero-sectioning {
    padding: 35px 20px;
  }

  .hero-title {
    font-size: 38px;
  }

  .connect-section {
    padding: 35px 24px;
    margin: 30px 15px;
  }

  .connect-title {
    font-size: 28px;
  }
}

@media (max-width: 767px) {
  .hero-contents {
    padding: 30px 0 0 0;
  }

  .hero-image-backdrop {
    display: none;
  }

  .modal-bio-content {
    padding: 32px;
  }
}
</style>
