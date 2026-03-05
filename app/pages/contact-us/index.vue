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

.badge-head      { background: #2e7d32; }
.badge-regional  { background: #1565c0; }
.badge-warehouse { background: #6a1b9a; }

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

.office-detail-icon svg { fill: #2e7d32; }

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
</style>

<template>
  <section class="terms-conditions">
    <div class="row">

      <!-- Left Side -->
      <div class="col-6">
        <div class="contact-form-body">
          <div class="office-image-wrapper">

            <!-- Company Branding -->
            <div class="mb-4">
              
              <h2 style="font-size: 20px; font-weight: 700; margin-top: 10px; color: #1a1a1a;">
                Falcon Marketing Pvt.Ltd
              </h2>
              <p style="color: #777; font-size: 13px;">VCN is the Brand Name of Falcon Marketing Pvt. Limited established in 2009 is a fast-growing direct selling company. </p>
            </div>

            <!-- Pill Buttons -->
            <div class="office-pills-wrapper">
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'jalandhar' }"
                @click="activeTab = 'jalandhar'"
              >
                <span class="pill-dot"></span> Jalandhar
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'phagwara' }"
                @click="activeTab = 'phagwara'"
              >
                <span class="pill-dot"></span> Phagwara
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'ludhiana' }"
                @click="activeTab = 'ludhiana'"
              >
                <span class="pill-dot"></span> Ludhiana
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'khanna' }"
                @click="activeTab = 'khanna'"
              >
                <span class="pill-dot"></span> Khanna
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'moga' }"
                @click="activeTab = 'moga'"
              >
                <span class="pill-dot"></span> Moga
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'hoshiarpur' }"
                @click="activeTab = 'hoshiarpur'"
              >
                <span class="pill-dot"></span> Hoshiarpur
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'batala' }"
                @click="activeTab = 'batala'"
              >
                <span class="pill-dot"></span> Batala
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'dasuya' }"
                @click="activeTab = 'dasuya'"
              >
                <span class="pill-dot"></span> Dasuya
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'delhi' }"
                @click="activeTab = 'delhi'"
              >
                <span class="pill-dot"></span> New Delhi
              </button>
              <button
                class="office-pill-btn"
                :class="{ active: activeTab === 'palampur' }"
                @click="activeTab = 'palampur'"
              >
                <span class="pill-dot"></span> Palampur
              </button>
            </div>

            <!-- ✅ jalandhar — v-show only, no extra class -->
            <div v-show="activeTab === 'jalandhar'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-head">🏢 Head Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_DELHI_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

            <!-- ✅ phagwara -->
            <div v-show="activeTab === 'phagwara'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-regional">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_MUMBAI_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

            <!-- ✅ ludhiana -->
            <div v-show="activeTab === 'ludhiana'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">SCO No. 107, Lower Ground Floor, Phase-1, Urban Estate Dugri, Ludhiana-141002,Punjab</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ khanna -->
            <div v-show="activeTab === 'khanna'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Office No. 03, 2nd Floor, Suryaa Tower , Near Main Bus Stand, G.T. Road,  Khanna-141401 (Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ moga -->
            <div v-show="activeTab === 'moga'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ HOSHIARPUR -->
            <div v-show="activeTab === 'hoshiarpur'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Universal Tower, Opp. I.T.I. Poly Tech. College, Above Coffee Cafe Day, Jalandhar Road, Hoshiarpur (Punjab)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ Batala -->
            <div v-show="activeTab === 'batala'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ Batala -->
            <div v-show="activeTab === 'dasuya'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ delhi -->
            <div v-show="activeTab === 'delhi'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">C - 364 Basement, Zensity Salon Building, Oxford School Line, Near Amritsari Kulcha ( Budhella ) Vikas Puri, New Delhi110059</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>
            <!-- ✅ delhi -->
            <div v-show="activeTab === 'palampur'">
              <div class="office-img-wrapper">
                <img src="/img/about/office.jpg" alt="New Delhi Office" />
                <span class="office-type-badge badge-warehouse">🏢 Regional Office</span>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Address</div>
                  <p class="office-detail-value">Ward No.2 , Near ICICI Bank , Baijnath Road , Palampur , Kangra (HP)</p>
                </div>
              </div>
              <div class="office-detail-row">
                <div class="office-detail-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.333 9.192a1.745 1.745 0 0 1-.459-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
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
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
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
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="office-detail-label">Working Hours</div>
                  <p class="office-detail-value">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href="YOUR_BANGALORE_MAPS_URL" target="_blank" class="office-maps-btn">
                📍 View on Google Maps →
              </a>
            </div>

          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form (unchanged) -->
      <div class="col-6">
       <div class="contact-form-container">
          <div class="contact-form-header">
            <h1 class="contact-form-title">Contact us</h1>
          </div>
          <div class="contact-form-body">
            <form id="contactFormMain">
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="fullNameField">
                  Full name <span class="contact-required-mark">*</span>
                </label>
                <input type="text" id="fullNameField" class="contact-text-input" required />
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="emailField">
                  Email <span class="contact-required-mark">*</span>
                </label>
                <input type="email" id="emailField" class="contact-text-input"
                  placeholder="Enter your email address" required />
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="officeField">
                  Select Office <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="officeField" class="contact-select-input" required>
                    <option value="">Select an office</option>
                    <option value="delhi">🏢 New Delhi — Head Office</option>
                    <option value="mumbai">🏢 Mumbai — Regional Office</option>
                    <option value="bangalore">🏢 Bangalore — Regional Office</option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="subjectField">
                  Subject <span class="contact-required-mark">*</span>
                </label>
                <div class="contact-select-wrapper">
                  <select id="subjectField" class="contact-select-input" required>
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry — DBT Care Plus</option>
                    <option value="order">Order & Delivery</option>
                    <option value="support">Medical / Usage Support</option>
                    <option value="wholesale">Wholesale & Distribution</option>
                    <option value="feedback">Feedback & Reviews</option>
                    <option value="other">Other</option>
                  </select>
                  <span class="contact-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" fill="#AFAFAF"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="contact-field-wrapper">
                <label class="contact-field-label" for="messageField">
                  Message <span class="contact-required-mark">*</span>
                </label>
                <textarea id="messageField" class="contact-textarea-input"
                  placeholder="Please include the product name and order number you're inquiring about 🌿"
                  required></textarea>
              </div>
              <div class="contact-field-wrapper">
                <div class="attachment-wrapper">
                  <label class="contact-file-upload-area" for="fileUploadInput">
                    <div class="contact-file-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#161616" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 5.62496V14.4416C13.75 16.1833 12.475 17.7333 10.7416 17.9C8.74998 18.0916 7.08331 16.5333 7.08331 14.5833V4.28329C7.08331 3.19163 7.86665 2.19996 8.94998 2.09163C10.2 1.96663 11.25 2.94163 11.25 4.16663V12.9166C11.25 13.375 10.875 13.75 10.4166 13.75C9.95831 13.75 9.58331 13.375 9.58331 12.9166V5.62496C9.58331 5.28329 9.29998 4.99996 8.95831 4.99996C8.61665 4.99996 8.33331 5.28329 8.33331 5.62496V12.8C8.33331 13.8916 9.11665 14.8833 10.2 14.9916C11.45 15.1166 12.5 14.1416 12.5 12.9166V4.30829C12.5 2.56663 11.225 1.01663 9.49165 0.849959C7.50831 0.658292 5.83331 2.21663 5.83331 4.16663V14.3916C5.83331 16.7833 7.58331 18.925 9.96665 19.15C12.7083 19.4 15 17.2666 15 14.5833V5.62496C15 5.28329 14.7166 4.99996 14.375 4.99996C14.0333 4.99996 13.75 5.28329 13.75 5.62496Z"></path>
                      </svg>
                      <span>Attach Files</span>
                    </div>
                  </label>
                  <input type="file" id="fileUploadInput" class="contact-file-input-hidden"
                    multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" />
                </div>
                <div class="contact-file-info-text">
                  Attach up to 10 files. Maximum size per file is 10 MB.
                </div>
              </div>
              <button type="submit" class="contact-submit-button">Send Message</button>
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

useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})

const activeTab = ref('jalandhar')
</script>