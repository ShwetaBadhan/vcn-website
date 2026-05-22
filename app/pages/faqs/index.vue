<template>
  <section class="product-detail-section  mt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9 content-section">
          <section class="vcn-faq-section">
            <div class="vcn-faq-container">
              <h2 class="vcn-faq-title">Frequently Asked Questions</h2>

              <div class="vcn-faq-list">
                <div v-for="(category, index) in faqCategories" :key="index" class="vcn-faq-item">
                  <button class="vcn-faq-question-btn" @click="toggleAccordion(index)" type="button">
                    <span>{{ category.title }}</span>
                    <i class="bi" :class="activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
                  </button>

                  <div v-if="activeIndex === index" class="vcn-faq-answer-wrapper">
                    <div v-for="(qa, qIndex) in category.questions" :key="qIndex" class="vcn-qa-card">
                      <h4 class="vcn-qa-question-text">{{ qa.question }}</h4>
                      <p class="vcn-qa-answer-text">{{ qa.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});

const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqCategories = ref([
  {
    title: 'About VCN Business',
    questions: [
      {
        question: 'What is VCN?',
        answer: "VCN is a direct selling company offering a wide range of wellness, healthcare, and personal care products inspired by natural ingredients and modern research."
      },
      {
        question: 'How does the VCN business model work?',
        answer: 'VCN operates on a direct selling model where individuals can become distributors, promote products, and earn income through sales and network growth.'
      },
    ]
  },
  {
    title: 'Orders & Returns',
    questions: [
      {
        question: 'How can I place an order?',
        answer: 'Orders can be placed directly through the VCN website or via an authorized distributor.'
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'Yes, orders can be modified or cancelled before they are processed or shipped. Please contact customer support promptly.'
      },
    ]
  },
  {
    title: 'Shipping & Delivery',
    questions: [
      {
        question: 'Do you offer nationwide delivery?',
        answer: 'Yes, VCN delivers products across India through reliable logistics partners.'
      },
      {
        question: 'Are there any shipping charges?',
        answer: 'Shipping charges may vary based on order value and location. Offers may include free shipping on selected orders.'
      }
    ]
  },
  {
    title: 'Loyalty Points (AmPoints)',
    questions: [
      {
        question: 'What are AmPoints?',
        answer: 'AmPoints are loyalty points earned on every purchase. 1 AmPoint is earned for every ₹100 spent, which can be redeemed for discounts on future purchases.'
      },
      {
        question: 'How do I redeem AmPoints?',
        answer: 'You can redeem AmPoints during checkout. 100 AmPoints = ₹100 discount. Points are valid for 12 months.'
      }
    ]
  }
])
</script>

<style scoped>
.vcn-faq-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.vcn-faq-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.vcn-faq-title {
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 60px;
  color: #222;
}

.vcn-faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.vcn-faq-item {
  border-bottom: 1px solid #e0e0e0;
}

.vcn-faq-question-btn {
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  border-top: 1px solid #e0e0e0;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
}

.vcn-faq-question-btn:hover {
  color: #45663c;
}

.vcn-faq-question-btn i {
  font-size: 18px;
  color: #999;
  transition: all 0.3s ease;
}

.vcn-faq-question-btn:hover i {
  color: #45663c;
}

/* Answer section - visible when active */
.vcn-faq-answer-wrapper {
  padding: 0 0 30px 0;
  background-color: #fff;
}

.vcn-qa-card {
  padding: 20px;
  margin-bottom: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #45663c;
}

.vcn-qa-card:last-child {
  margin-bottom: 0;
}

.vcn-qa-question-text {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.vcn-qa-answer-text {
  font-size: 15px;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .vcn-faq-section {
    padding: 60px 0;
  }

  .vcn-faq-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .vcn-faq-question-btn {
    font-size: 15px;
    padding: 20px 0;
  }

  .vcn-qa-question-text,
  .vcn-qa-answer-text {
    font-size: 14px;
  }

  .vcn-faq-container {
    padding: 0 20px;
  }
}
</style>