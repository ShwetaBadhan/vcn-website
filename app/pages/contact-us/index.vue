<style>
/* ===== PILL TABS ===== */
.office-pills-wrapper {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.office-pill-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background: #f0f0f0;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.office-pill-btn:hover {
  background: #c8e6c9;
  color: #2e7d32;
}

.office-pill-btn.active {
  background: #2e7d32;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
}

.office-pill-btn .pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #aaa;
  transition: all 0.3s ease;
}

.office-pill-btn.active .pill-dot {
  background: #ffffff;
}

/* ✅ REMOVED .office-card-content { display: none } — was blocking v-show */

.office-img-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 220px;
  margin-bottom: 20px;
}

.office-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.office-type-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
}

.badge-head {
  background: #2e7d32;
}

.badge-regional {
  background: #1565c0;
}

.badge-warehouse {
  background: #6a1b9a;
}

.office-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
}

.office-detail-icon {
  width: 36px;
  height: 36px;
  background: #e8f5e9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.office-detail-icon svg {
  fill: #2e7d32;
}

.office-detail-label {
  font-size: 11px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.office-detail-value {
  font-size: 14px;
  color: #333;
  margin: 0;
  line-height: 1.5;
}

.office-maps-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 8px 18px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.office-maps-btn:hover {
  background: #2e7d32;
  color: #fff;
}

/* Form Validation Styles */
.contact-input-error {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25) !important;
}

.contact-error-message {
  display: block;
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
}

/* Alert Styles */
.contact-alert {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
}

.contact-alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.contact-alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* File Upload Styles */
.contact-files-list {
  margin-top: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 8px;
  background-color: #f9f9f9;
}

.contact-file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  margin-bottom: 4px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
}

.contact-file-item:last-child {
  margin-bottom: 0;
}

.contact-file-remove {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.contact-file-remove:hover {
  background-color: #dc3545;
  color: white;
}

.contact-submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .terms-conditions {
    padding: 40px 15px;
  }

  .office-pills-wrapper {
    gap: 8px;
    margin-bottom: 20px;
  }

  .office-pill-btn {
    padding: 8px 16px;
    font-size: 13px;
  }

  .office-img-wrapper {
    height: 180px;
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .terms-conditions {
    padding: 30px 15px;
  }

  .office-pills-wrapper {
    gap: 6px;
    margin-bottom: 16px;
  }

  .office-pill-btn {
    padding: 6px 12px;
    font-size: 12px;
  }

  .office-img-wrapper {
    height: 160px;
    margin-bottom: 12px;
  }

  .office-detail-row {
    margin-bottom: 12px;
  }

  .office-detail-icon {
    width: 32px;
    height: 32px;
  }

  .office-detail-label {
    font-size: 10px;
  }

  .office-detail-value {
    font-size: 13px;
  }

  .office-maps-btn {
    padding: 6px 14px;
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .terms-conditions {
    padding: 20px 10px;
  }

  .office-pills-wrapper {
    gap: 4px;
    margin-bottom: 12px;
  }

  .office-pill-btn {
    padding: 4px 8px;
    font-size: 11px;
  }

  .office-img-wrapper {
    height: 140px;
    margin-bottom: 10px;
  }

  .office-detail-row {
    gap: 8px;
    margin-bottom: 10px;
  }

  .office-detail-icon {
    width: 28px;
    height: 28px;
  }

  .office-detail-value {
    font-size: 12px;
  }

  .office-maps-btn {
    padding: 4px 10px;
    font-size: 11px;
  }

  /* Contact Form Mobile Styles */
  .contact-form-container {
    margin-top: 30px;
  }

  .contact-form-title {
    font-size: 24px !important;
  }

  .contact-field-wrapper {
    margin-bottom: 16px;
  }

  .contact-field-label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .contact-text-input,
  .contact-select-input,
  .contact-textarea-input {
    font-size: 14px;
    padding: 10px 12px;
  }

  .contact-textarea-input {
    min-height: 100px;
  }

  .contact-submit-button {
    padding: 12px 20px;
    font-size: 14px;
  }

  .contact-footer-text {
    font-size: 11px;
    line-height: 1.4;
  }
}
</style>

<template>
  <section class="terms-conditions">
    <div class="row">

      <!-- Left Side -->
      <div class="col-lg-6 col-12">
        <div class="contact-form-body">
          <div class="office-image-wrapper">

            <!-- Company Branding -->
            <div class="mb-4">

              <h2 style="font-size: 20px; font-weight: 700; margin-top: 10px; color: #1a1a1a;">
                Falcon Marketing Pvt.Ltd
              </h2>
              <p style="color: #777; font-size: 13px;">VCN is the Brand Name of Falcon Marketing Pvt. Limited
                established in 2009 is a fast-growing direct selling company. </p>
            </div>

            <!-- Pill Buttons -->
            <div class="office-pills-wrapper">
              <button class="office-pill-btn" :class="{ active: activeTab === 'jalandhar' }"
                @click="activeTab = 'jalandhar'">
                <span class="pill-dot"></span> Jalandhar
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'phagwara' }"
                @click="activeTab = 'phagwara'">
                <span class="pill-dot"></span> Phagwara
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'ludhiana' }"
                @click="activeTab = 'ludhiana'">
                <span class="pill-dot"></span> Ludhiana
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'khanna' }" @click="activeTab = 'khanna'">
                <span class="pill-dot"></span> Khanna
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'moga' }" @click="activeTab = 'moga'">
                <span class="pill-dot"></span> Moga
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'hoshiarpur' }"
                @click="activeTab = 'hoshiarpur'">
                <span class="pill-dot"></span> Hoshiarpur
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'batala' }" @click="activeTab = 'batala'">
                <span class="pill-dot"></span> Batala
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'dasuya' }" @click="activeTab = 'dasuya'">
                <span class="pill-dot"></span> Dasuya
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'delhi' }" @click="activeTab = 'delhi'">
                <span class="pill-dot"></span> New Delhi
              </button>
              <button class="office-pill-btn" :class="{ active: activeTab === 'palampur' }"
                @click="activeTab = 'palampur'">
                <span class="pill-dot"></span> Palampur
              </button>
            </div>

            <!-- ✅ jalandhar — v-show only, no extra class -->
            <div v-show="activeTab === 'jalandhar'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-head">🏢 Head Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">VCN Tower, 37/2 Cool Road , Jalandhar,Punjab,INDIA-144001</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91-181-4010154 M:+919876453626</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">info@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/vmrjPjwU42DTeKn56" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

            <!-- ✅ phagwara -->
            <div v-show="activeTab === 'phagwara'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-regional">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">VCN Shop No.24/25, Block C. PPR Village, Chandigarh Express way</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 22 3456 7890</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">mumbai@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/NW8HrZd9rnr7NNmE9" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

            <!-- ✅ ludhiana -->
            <div v-show="activeTab === 'ludhiana'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">SCO No. 107, Lower Ground Floor, Phase-1, Urban Estate Dugri,
                    Ludhiana-141002,Punjab</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/RdNP2Bs3yrySrywQ7" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ khanna -->
            <div v-show="activeTab === 'khanna'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Office No. 03, 2nd Floor, Suryaa Tower , Near Main Bus Stand, G.T.
                    Road, Khanna-141401 (Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ moga -->
            <div v-show="activeTab === 'moga'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">26 SCF, Above Axis Bank, G.T. Road, Moga (Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ HOSHIARPUR -->
            <div v-show="activeTab === 'hoshiarpur'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Universal Tower, Opp. I.T.I. Poly Tech. College, Above Coffee Cafe Day,
                    Jalandhar Road, Hoshiarpur (Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ Batala -->
            <div v-show="activeTab === 'batala'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Ground Floor, Jalandhar road, Near Guru Nanak Dev Academy, Batala</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ Batala -->
            <div v-show="activeTab === 'dasuya'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Chopra Complex, Hoshiarpur Road, Dasuya(Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ delhi -->
            <div v-show="activeTab === 'delhi'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">C - 364 Basement, Zensity Salon Building, Oxford School Line, Near
                    Amritsari Kulcha ( Budhella ) Vikas Puri, New Delhi110059</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ delhi -->
            <div v-show="activeTab === 'palampur'">
              <div class="office-img-wrapper">
                <img src="/img/bg/contact-us.png" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Ward No.2 , Near ICICI Bank , Baijnath Road , Palampur , Kangra (HP)
                  </p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Phone</div>
                  <p class="office-detail-value">+91 80 4567 8901</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Email</div>
                  <p class="office-detail-value">bangalore@vcnhealth.com</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/VPj6nXCdQq9AN2GEA" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="col-lg-6 col-12">
        <div class="contact-form-container">
          <div class="contact-form-header">
            <h1 class="contact-form-title">Contact us</h1>
          </div>
          <div class="contact-form-body">
            <form @submit.prevent="submitForm" novalidate>
              <!-- Success/Error Message -->
              <div v-if="submitMessage" class="contact-field-wrapper">
                <div
                  :class="['contact-alert', submitMessageType === 'success' ? 'contact-alert-success' : 'contact-alert-error']">
                  {{ submitMessage }}
                </div>
              </div>

              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="fullNameField">
                  Full name <span class="contact-required-mark">*</span>
                </label>
                <input type="text" id="fullNameField" class="contact-text-input"
                  :class="{ 'contact-input-error': errors.fullName }" v-model="formData.fullName"
                  placeholder="Enter your full name" required />
                <span v-if="errors.fullName" class="contact-error-message">{{ errors.fullName }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="emailField">
                  Email <span class="contact-required-mark">*</span>
                </label>
                <input type="email" id="emailField" class="contact-text-input"
                  :class="{ 'contact-input-error': errors.email }" v-model="formData.email"
                  placeholder="Enter your email address" required />
                <span v-if="errors.email" class="contact-error-message">{{ errors.email }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="phoneField">
                  Phone Number <span class="text-danger">*</span>
                </label>
                <input type="tel" id="phoneField" class="contact-text-input" v-model="formData.phone"
                  placeholder="Enter your phone number" :class="{ 'contact-input-error': errors.phone }" />
                <span v-if="errors.phone" class="contact-error-message">{{ errors.phone }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="officeField">
                  Select Office <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="officeField" class="contact-select-input"
                    :class="{ 'contact-input-error': errors.office }" v-model="formData.office" required>
                    <option value="">Select an office</option>
                    <option value="Jalandhar Office">Jalandhar</option>
                    <option value="Phagwara Office">Phagwara</option>
                    <option value="Ludhiana Office">Ludhiana</option>
                    <option value="Khanna Office">Khanna</option>
                    <option value="Moga Office">Moga</option>
                    <option value="Hoshiarpur Office">Hoshiarpur</option>
                    <option value="Batala Office">Batala</option>
                    <option value="Dasuya Office">Dasuya</option>
                    <option value="Delhi Office">New Delhi</option>
                    <option value="Palampur Office">Palampur</option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                        fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
                <span v-if="errors.office" class="contact-error-message">{{ errors.office }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="subjectField">
                  Subject <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="subjectField" class="contact-select-input"
                    :class="{ 'contact-input-error': errors.subject }" v-model="formData.subject" required>
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order & Delivery">Order & Delivery</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                        fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
                <span v-if="errors.subject" class="contact-error-message">{{ errors.subject }}</span>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="messageField">
                  Message <span class="contact-required-mark">*</span>
                </label>
                <textarea id="messageField" class="contact-textarea-input"
                  :class="{ 'contact-input-error': errors.message }" v-model="formData.message"
                  placeholder="Please include the product name and order number you're inquiring about"
                  required></textarea>
                <span v-if="errors.message" class="contact-error-message">{{ errors.message }}</span>
              </div>
              <div class="contact-field-wrapper">
                <div class="attachment-wrapper">
                  <label class="contact-file-upload-area" for="fileUploadInput">
                    <div class="contact-file-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#161616" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.75 5.62496V14.4416C13.75 16.1833 12.475 17.7333 10.7416 17.9C8.74998 18.0916 7.08331 16.5333 7.08331 14.5833V4.28329C7.08331 3.19163 7.86665 2.19996 8.94998 2.09163C10.2 1.96663 11.25 2.94163 11.25 4.16663V12.9166C11.25 13.375 10.875 13.75 10.4166 13.75C9.95831 13.75 9.58331 13.375 9.58331 12.9166V5.62496C9.58331 5.28329 9.29998 4.99996 8.95831 4.99996C8.61665 4.99996 8.33331 5.28329 8.33331 5.62496V12.8C8.33331 13.8916 9.11665 14.8833 10.2 14.9916C11.45 15.1166 12.5 14.1416 12.5 12.9166V4.30829C12.5 2.56663 11.225 1.01663 9.49165 0.849959C7.50831 0.658292 5.83331 2.21663 5.83331 4.16663V14.3916C5.83331 16.7833 7.58331 18.925 9.96665 19.15C12.7083 19.4 15 17.2666 15 14.5833V5.62496C15 5.28329 14.7166 4.99996 14.375 4.99996C14.0333 4.99996 13.75 5.28329 13.75 5.62496Z">
                        </path>
                      </svg>
                      <span>Attach Files</span>
                    </div>
                  </label>
                  <input type="file" id="fileUploadInput" class="contact-file-input-hidden" @change="handleFileUpload"
                    multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" />
                </div>
                <div class="contact-file-info-text">
                  Attach up to 10 files. Maximum size per file is 10 MB.
                </div>
                <div v-if="formData.files.length > 0" class="contact-files-list">
                  <div v-for="(file, index) in formData.files" :key="index" class="contact-file-item">
                    {{ file.name }}
                    <button type="button" @click="formData.files.splice(index, 1)"
                      class="contact-file-remove">×</button>
                  </div>
                </div>
              </div>
              <button type="submit" class="contact-submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              <p class="contact-footer-text">
                This site is protected by reCAPTCHA Enterprise and the Google
                <a href="#" class="contact-footer-link">Privacy Policy</a> and
                <a href="#" class="contact-footer-link">Terms of Service</a> apply.
              </p>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useApi } from '~/config/api/useApi'
import { API_ENDPOINTS } from '~/config/api/endpoints'

const toast = useToast()

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const activeTab = ref('jalandhar')

// Form state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('') // 'success' or 'error'

// Form data
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  office: '',
  subject: '',
  message: '',
  files: []
})

// Form validation
const errors = ref({})

const validateForm = () => {
  errors.value = {}

  if (!formData.value.fullName.trim()) {
    errors.value.fullName = 'Full name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = 'Phone number is required'
  } else if (!/^[\d\s\-\+\(\)]{10,15}$/.test(formData.value.phone.trim())) {
    errors.value.phone = 'Please enter a valid phone number (10-15 digits)'
  }

  if (!formData.value.office) {
    errors.value.office = 'Please select an office'
  }

  if (!formData.value.subject) {
    errors.value.subject = 'Please select a subject'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (formData.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
  }

  return Object.keys(errors.value).length === 0
}

const handleFileUpload = (event) => {
  const target = event.target
  if (target.files) {
    formData.value.files = Array.from(target.files)
  }
}

const resetForm = () => {
  formData.value = {
    fullName: '',
    email: '',
    phone: '',
    office: '',
    subject: '',
    message: '',
    files: []
  }
  errors.value = {}
  submitMessage.value = ''
  submitMessageType.value = ''

  // Reset file input
  const fileInput = document.getElementById('fileUploadInput')
  if (fileInput) {
    fileInput.value = ''
  }
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const { post } = useApi()

    // Create JSON payload matching the backend API format
    const submitData = {
      name: formData.value.fullName,
      email: formData.value.email,
      phone: formData.value.phone,
      office: formData.value.office,
      subject: formData.value.subject,
      message: formData.value.message
    }

    // Make API call to the backend endpoint using the config endpoint
    const { data, error } = await post(API_ENDPOINTS.CONTACT_US, submitData)

    if (error) {
      toast.error({
        message: error
      })
      submitMessage.value = error
      submitMessageType.value = 'error'
    } else {
      toast.success({
        message: 'Your message has been sent successfully! We will get back to you soon.'
      })
      submitMessage.value = 'Your message has been sent successfully! We will get back to you soon.'
      submitMessageType.value = 'success'
      resetForm()
    }
  } catch (err) {
    toast.error({
      message: err.message || 'Failed to send message. Please try again later.'
    })
    submitMessage.value = 'Failed to send message. Please try again later.'
    submitMessageType.value = 'error'
    console.error('Form submission error:', err)
  } finally {
    isSubmitting.value = false
  }
}
</script>