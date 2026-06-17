<template>
  <section class="product-detail-section mt-3">
    <div class="blog-details-page">

      <!-- Breadcrumb -->
      <nav class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li v-for="(item, index) in blogDetails.breadcrumb.items" :key="index">
              <a v-if="item.link" :href="item.link">
                {{ item.label }}
              </a>

              <span v-else>
                {{ item.label }}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="blog-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <h1 class="blog-title">{{ blogDetails.hero.title }}</h1>
              <div class="blog-meta">
                <span class="author">
                  <i class="bi bi-person"></i> {{ blogDetails.hero.author }}
                </span>
                <span class="date">
                  <i class="bi bi-calendar"></i> {{ blogDetails.hero.date }}
                </span>
                <span class="read-time">
                  <i class="bi bi-clock"></i> {{ blogDetails.hero.readTime }}
                </span>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hero-image">
                <img :src="blogDetails.hero.image" :alt="blogDetails.hero.title">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="blog-content-section">
        <div class="container">
          <div class="row">
            <!-- Main Article -->
            <div class="col-lg-8">
              <article class="article-content">

                <!-- Key Takeaways -->
                <div class="key-takeaways">
                  <h2 class="section-heading">{{ blogDetails.mainContent.keyTakeaways.title }}</h2>
                  <div class="takeaways-list">
                    <div v-for="(item, index) in blogDetails.mainContent.keyTakeaways.items" :key="index"
                      class="takeaway-item">
                      <span class="takeaway-number">
                        {{ index + 1 }}.
                      </span>

                      <div class="takeaway-content">
                        <strong>{{ item.title }}:</strong>
                        {{ item.description }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Article Body -->
                <div class="article-body">
                  <h2 class="article-heading">{{ blogDetails.mainContent.articleBody.whatIsFattyLiver.heading }}</h2>
                  <p v-for="(paragraph, index) in blogDetails.mainContent.articleBody.whatIsFattyLiver.paragraphs"
                    :key="index">
                    {{ paragraph }}
                  </p>

                  <h3 class="sub-heading">{{ blogDetails.mainContent.articleBody.typesOfFattyLiver.heading }}</h3>
                  <p>
                    {{ blogDetails.mainContent.articleBody.typesOfFattyLiver.description }}
                  </p>
                  <ul class="content-list">
                    <li v-for="(item, index) in blogDetails.mainContent.articleBody.typesOfFattyLiver.items"
                      :key="index">
                      <strong>{{ item.title }}</strong> {{ item.description }}
                    </li>
                  </ul>

                  <h3 class="sub-heading">{{ blogDetails.mainContent.articleBody.causes.heading }}</h3>
                  <p>
                    {{ blogDetails.mainContent.articleBody.causes.description }}
                  </p>
                  <div class="causes-grid">
                    <div v-for="(item, index) in blogDetails.mainContent.articleBody.causes.items" :key="index"
                      class="cause-item">
                      <i class="bi bi-circle-fill"></i>

                      <div>
                        <strong>{{ item.title }}:</strong>
                        {{ item.description }}
                      </div>
                    </div>
                  </div>

                  <h3 class="sub-heading">{{ blogDetails.mainContent.articleBody.symptoms.heading }}</h3>
                  <p>
                    {{ blogDetails.mainContent.articleBody.symptoms.description }}
                  </p>
                  <ul class="content-list">
                    <li v-for="(symptom, index) in blogDetails.mainContent.articleBody.symptoms.items" :key="index">
                      {{ symptom }}
                    </li>
                    <!-- <li>Fatigue and weakness</li>
                    <li>Discomfort or pain in the upper right abdomen</li>
                    <li>Unexplained weight loss</li>
                    <li>Loss of appetite</li>
                    <li>Nausea</li>
                    <li>Yellowing of the skin and eyes (jaundice) in advanced cases</li> -->
                  </ul>

                  <div class="info-box">
                    <i class="bi bi-exclamation-triangle"></i>
                    <div>
                      <strong>{{ blogDetails.mainContent.articleBody.warningBox.title }}</strong> {{ blogDetails.mainContent.articleBody.warningBox.description }}
                    </div>
                  </div>

                  <h3 class="sub-heading">{{ blogDetails.mainContent.articleBody.diagnosis.heading }}</h3>
                  <p>
                    {{ blogDetails.mainContent.articleBody.diagnosis.description }}
                  </p>
                  <ul class="content-list">
                    <li v-for="(method, index) in blogDetails.mainContent.articleBody.diagnosis.items" :key="index">
                      <strong>{{ method.title }}:</strong> {{ method.description }}
                    </li>
                    <!-- <li><strong>Blood Tests:</strong> Liver function tests (LFTs) can detect elevated liver enzymes.
                    </li>
                    <li><strong>Imaging Tests:</strong> Ultrasound, CT scan, or MRI can visualize fat in the liver.</li>
                    <li><strong>FibroScan:</strong> A specialized ultrasound that measures liver stiffness and fat
                      content.</li>
                    <li><strong>Liver Biopsy:</strong> In some cases, a small sample of liver tissue may be examined
                      under a microscope.</li> -->
                  </ul>
                </div>

                <!-- Share Section -->
                <div class="article-footer">
                  <div class="share-section">
                    <span class="share-label">{{ blogDetails.mainContent.shareSection.label }}</span>
                    <div class="share-buttons">
                      <a href="#" class="share-btn facebook"><i class="bi bi-facebook"></i></a>
                      <a href="#" class="share-btn twitter"><i class="bi bi-twitter"></i></a>
                      <a href="#" class="share-btn linkedin"><i class="bi bi-linkedin"></i></a>
                      <a href="#" class="share-btn whatsapp"><i class="bi bi-whatsapp"></i></a>
                    </div>
                  </div>
                </div>

              </article>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
              <aside class="blog-sidebar">

                <!-- Quick Actions -->
                <div class="sidebar-widget">
                  <button class="action-btn primary">
                    <i class="bi bi-list-ul"></i> {{ blogDetails.sidebar.quickActions.tocButton }}
                  </button>
                  <button class="action-btn secondary">
                    <i class="bi bi-bag"></i> {{ blogDetails.sidebar.quickActions.productsButton }}
                  </button>
                </div>

                <!-- Recent Posts -->
                <div class="sidebar-widget">
                  <h3 class="widget-title">{{ blogDetails.sidebar.heading }}</h3>
                  <div class="recent-posts">
                    <div v-for="(post, index) in blogDetails.sidebar.recentPosts" :key="index" class="recent-post-item">
                      <div class="post-thumbnail">
                        <img :src="post.image" :alt="post.title">
                      </div>
                      <div class="post-info">
                        <h4 class="post-title">{{ post.title }}</h4>
                        <span class="post-date">{{ post.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Newsletter Signup -->
                <div class="sidebar-widget newsletter-widget">
                  <h3 class="widget-title">{{ blogDetails.sidebar.newsletter.title }}</h3>
                  <p>{{ blogDetails.sidebar.newsletter.description }}</p>
                  <form class="newsletter-form">
                    <input type="email" :placeholder="blogDetails.sidebar.newsletter.placeholder" class="form-input">
                    <button type="submit" class="subscribe-btn">{{ blogDetails.sidebar.newsletter.buttonText }}</button>
                  </form>
                </div>

              </aside>
            </div>
          </div>
        </div>
      </section>

    </div>
  </section>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useCmsStore } from '~/stores/cms'
import { useCmsApi } from '~/composables/useCmsApi'

const cmsStore = useCmsStore()
const { getCmsImageUrl } = useCmsApi()

onMounted(async () => {
  await cmsStore.fetchSectionsBySlug('blog-details')
})

const blogDetails = computed(() => {
  const fallback = cmsStore.getPageSection('blogDetails', 'blogdetails') || {
    breadcrumb: { items: [] },
    hero: { title: '', author: '', date: '', readTime: '', image: '' },
    mainContent: {
      keyTakeaways: { title: '', items: [] },
      articleBody: {
        whatIsFattyLiver: { heading: '', paragraphs: [] },
        typesOfFattyLiver: { heading: '', description: '', items: [] },
        causes: { heading: '', description: '', items: [] },
        symptoms: { heading: '', description: '', items: [] },
        warningBox: { title: '', description: '' },
        diagnosis: { heading: '', description: '', items: [] }
      },
      shareSection: { label: '' }
    },
    sidebar: {
      quickActions: { tocButton: '', productsButton: '' },
      heading: '',
      recentPosts: [],
      newsletter: { title: '', description: '', placeholder: '', buttonText: '' }
    }
  }

  const heroSection = cmsStore.getSectionByKey('blog-details-hero') || cmsStore.getSectionByKey('hero')
  const contentSection = cmsStore.getSectionByKey('blog-details-content') || cmsStore.getSectionByKey('content')
  const sidebarSection = cmsStore.getSectionByKey('blog-details-sidebar') || cmsStore.getSectionByKey('sidebar')
  const generalSection = cmsStore.getSectionByKey('blog-details')

  if (!heroSection && !contentSection && !sidebarSection && !generalSection) {
    return fallback
  }

  const result = { ...fallback }

  if (heroSection) {
    result.hero = {
      title: heroSection.title || fallback.hero.title,
      author: heroSection.config?.author || heroSection.extraData?.author || fallback.hero.author,
      date: heroSection.config?.date || heroSection.extraData?.date || fallback.hero.date,
      readTime: heroSection.config?.readTime || heroSection.extraData?.readTime || fallback.hero.readTime,
      image: getCmsImageUrl(heroSection.image || heroSection.backgroundImage, fallback.hero.image)
    }
  }

  if (contentSection || generalSection) {
    const section = contentSection || generalSection
    if (section.title) {
      result.hero.title = section.title
    }
  }

  if (sidebarSection) {
    result.sidebar = {
      ...fallback.sidebar,
      heading: sidebarSection.title || fallback.sidebar.heading,
      recentPosts: sidebarSection.items && sidebarSection.items.length > 0
        ? sidebarSection.items.map(item => ({
            title: item.title || '',
            date: item.subtitle || item.extraData?.date || '',
            image: getCmsImageUrl(item.image, '')
          }))
        : fallback.sidebar.recentPosts
    }
  }

  return result
})

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
})
// const recentPosts = ref([
//   {
//     title: 'Is Grade 2 Fatty Liver Dangerous?',
//     date: '02 Feb, 2025',
//     image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
//   },
//   {
//     title: 'Can a Grade 2 Fatty Liver Disease Be Cured Completely?',
//     date: '02 Feb, 2025',
//     image: 'https://images.unsplash.com/photo-1530026405186-ed1f1398f70f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
//   },
//   {
//     title: '7 Top Foods High in Magnesium and Zinc for Better Health',
//     date: '02 Feb, 2025',
//     image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
//   },
//   {
//     title: 'Top 20 Probiotic Foods in India for a Healthy Gut & Immunity',
//     date: '01 Jan, 2025',
//     image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
//   },
//   {
//     title: '10 Lifestyle Changes to Control Cholesterol at Home Naturally',
//     date: '01 Jan, 2025',
//     image: 'https://images.unsplash.com/photo-1434494838584-02fb06a4a96d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
//   }
// ])
</script>

<style scoped>
/* Breadcrumb */
.breadcrumb-nav {
  background: #f8f9fa;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}

.breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb li:not(:last-child)::after {
  content: '›';
  margin-left: 12px;
  color: #999;
  font-size: 16px;
}

.breadcrumb a {
  color: #1a4d2e;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #2d7a4a;
  text-decoration: underline;
}

.breadcrumb .active {
  color: #666;
}

/* Hero Section */
.blog-hero {
  padding: 60px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f4f8 100%);
}

.blog-title {
  font-size: 42px;
  font-weight: 700;
  color: #222;
  margin-bottom: 24px;
  line-height: 1.3;
}

.blog-meta {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.blog-meta span {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.blog-meta i {
  font-size: 16px;
  color: #1a4d2e;
}

.hero-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Content Section */
.blog-content-section {
  padding: 60px 0 80px;
  background: #fff;
}

.article-content {
  padding-right: 40px;
}

/* Key Takeaways */
.key-takeaways {
  background: #f8f9fa;
  border-left: 4px solid #1a4d2e;
  padding: 32px;
  margin-bottom: 48px;
  border-radius: 0 8px 8px 0;
}

.section-heading {
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin: 0 0 24px 0;
}

.takeaways-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.takeaway-item {
  display: flex;
  gap: 16px;
  font-size: 15px;
  line-height: 1.7;
  color: #555;
}

.takeaway-number {
  font-weight: 700;
  color: #1a4d2e;
  flex-shrink: 0;
}

.takeaway-content strong {
  color: #222;
  display: block;
  margin-bottom: 4px;
}

/* Article Body */
.article-body {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

.article-body p {
  margin-bottom: 20px;
}

.article-heading {
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin: 48px 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
}

.article-heading:first-child {
  margin-top: 0;
}

.sub-heading {
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 40px 0 20px 0;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.content-list li {
  padding: 12px 0 12px 32px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
  font-size: 16px;
  line-height: 1.6;
}

.content-list li:last-child {
  border-bottom: none;
}

.content-list li::before {
  content: '•';
  position: absolute;
  left: 16px;
  color: #1a4d2e;
  font-size: 24px;
  line-height: 1;
}

.content-list strong {
  color: #222;
}

/* Causes Grid */
.causes-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 24px;
}

.cause-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
}

.cause-item i {
  color: #1a4d2e;
  font-size: 12px;
  margin-top: 6px;
  flex-shrink: 0;
}

.cause-item strong {
  color: #222;
  display: block;
  margin-bottom: 4px;
}

/* Info Box */
.info-box {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 24px;
  border-radius: 0 8px 8px 0;
  margin: 32px 0;
  display: flex;
  gap: 16px;
  font-size: 15px;
  line-height: 1.7;
  color: #856404;
}

.info-box i {
  font-size: 24px;
  flex-shrink: 0;
}

.info-box strong {
  display: block;
  margin-bottom: 8px;
}

/* Article Footer */
.article-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 2px solid #e0e0e0;
}

.share-section {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.share-label {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.share-buttons {
  display: flex;
  gap: 12px;
}

.share-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
}

.share-btn.facebook {
  background: #3b5998;
}

.share-btn.twitter {
  background: #1da1f2;
}

.share-btn.linkedin {
  background: #0077b5;
}

.share-btn.whatsapp {
  background: #25d366;
}

.share-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Sidebar */
.blog-sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-widget {
  margin-bottom: 40px;
}

.action-btn {
  width: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.action-btn.primary {
  background: #1a4d2e;
  color: white;
}

.action-btn.primary:hover {
  background: #2d7a4a;
}

.action-btn.secondary {
  background: white;
  color: #1a4d2e;
  border: 2px solid #1a4d2e;
}

.action-btn.secondary:hover {
  background: #f0f7f0;
}

.widget-title {
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #1a4d2e;
}

/* Recent Posts */
.recent-posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recent-post-item {
  display: flex;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.recent-post-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.recent-post-item:hover {
  transform: translateX(4px);
}

.post-thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-info {
  flex: 1;
}

.post-title {
  font-size: 14px;
  font-weight: 600;
  color: #222;
  margin: 0 0 6px 0;
  line-height: 1.4;
}

.post-date {
  font-size: 13px;
  color: #999;
}

/* Newsletter Widget */
.newsletter-widget {
  background: #f8f9fa;
  padding: 28px;
  border-radius: 8px;
}

.newsletter-widget p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-input {
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #1a4d2e;
}

.subscribe-btn {
  padding: 12px 24px;
  background: #1a4d2e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background: #2d7a4a;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 991px) {
  .blog-title {
    font-size: 32px;
  }

  .article-content {
    padding-right: 0;
    margin-bottom: 60px;
  }

  .blog-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .blog-hero {
    padding: 40px 0;
  }

  .blog-title {
    font-size: 28px;
  }

  .blog-meta {
    gap: 20px;
  }

  .section-heading {
    font-size: 24px;
  }

  .article-heading {
    font-size: 26px;
  }

  .sub-heading {
    font-size: 20px;
  }

  .key-takeaways {
    padding: 24px;
  }

  .takeaway-item {
    flex-direction: column;
    gap: 8px;
  }

  .cause-item {
    flex-direction: column;
    gap: 8px;
  }

  .info-box {
    flex-direction: column;
    gap: 12px;
  }

  .share-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
