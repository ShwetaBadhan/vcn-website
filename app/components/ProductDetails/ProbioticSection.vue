<template>
     <section class="probiotic-hero-section">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Side -->
        <div class="col-lg-7 left-section">
          <div style="position: relative; z-index: 2; padding-right: 40px">
            <h3 class="hero-headline">
              The complete probiotic that delivers results in just 7 days.<sup
                >†</sup
              >
            </h3>
            <a class="evidence-btn" data-target="clinical-evidence-content"
              >See Clinical Evidence</a
            >
          </div>

          <div class="hand-image">
            <img
              src="https://assets.embeddables.com/image2671_25620810216851686.png"
              alt="Hand holding probiotic"
            />
          </div>
        </div>

        <!-- Right Side - Accordion -->
        <div class="col-lg-5 right-section">
          <!-- Panel 1 -->
          <div class="benefits-panel">
            <button
              class="panel-header-btn"
              onclick="toggleBenefitPanel('panel1')"
            >
              <div>
                <span class="duration-badge">7 DAYS</span>
                <h3 class="panel-title">Reduces Bloating and Gas*</h3>
              </div>
              <span class="toggle-icon" id="icon1">+</span>
            </button>
            <div class="panel-content" id="panel1">
              <ul class="benefit-list">
                <li>Clinically proven to reduce bloating</li>
                <li>Alleviates excess gas</li>
                <li>Eases digestive discomfort</li>
              </ul>
            </div>
          </div>

          <!-- Panel 2 -->
          <div class="benefits-panel">
            <button
              class="panel-header-btn"
              onclick="toggleBenefitPanel('panel2')"
            >
              <div>
                <span class="duration-badge">2 WEEKS</span>
                <h3 class="panel-title">Supports Healthy Regularity*</h3>
              </div>
              <span class="toggle-icon" id="icon2">+</span>
            </button>
            <div class="panel-content" id="panel2">
              <ul class="benefit-list">
                <li>Promotes consistent bowel movements</li>
                <li>Balances digestive rhythm</li>
                <li>Supports gut motility</li>
              </ul>
            </div>
          </div>

          <!-- Panel 3 -->
          <div class="benefits-panel">
            <button
              class="panel-header-btn"
              onclick="toggleBenefitPanel('panel3')"
            >
              <div>
                <span class="duration-badge">4 WEEKS</span>
                <h3 class="panel-title">Smoothes + Clears Skin*</h3>
              </div>
              <span class="toggle-icon" id="icon3">+</span>
            </button>
            <div class="panel-content" id="panel3">
              <ul class="benefit-list">
                <li>Improves skin texture and clarity</li>
                <li>Reduces inflammation from within</li>
                <li>Supports natural skin barrier</li>
              </ul>
            </div>
          </div>

          <!-- Panel 4 -->
          <div class="benefits-panel">
            <button
              class="panel-header-btn"
              onclick="toggleBenefitPanel('panel4')"
            >
              <div>
                <span class="duration-badge">3 MONTHS</span>
                <h3 class="panel-title">Immune + Heart Support*</h3>
              </div>
              <span class="toggle-icon" id="icon4">+</span>
            </button>
            <div class="panel-content" id="panel4">
              <ul class="benefit-list">
                <li>Strengthens immune function</li>
                <li>Supports cardiovascular health</li>
                <li>Promotes overall wellness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>