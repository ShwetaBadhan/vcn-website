<template>
    <section class="terms-conditions">
      <div class="container">
        <div class="row">
          <h1>Microbiome 101</h1>
          <div class="col-lg-12">
            <img
              src="/img/image/microbiome.png"
              class="w-100"
              alt=""
            />
            <p class="mt-5">
              You are home to a community of trillions of microorganisms,
              including 38,000,000,000,000 (that’s 38 trillion) bacteria, living
              in and on your body. The bacteria alone represent 50% of you by
              cell count.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Contents Navigation -->
    <section class="contents-section">
      <div class="container">
        <div class="contents-label">CONTENTS</div>
        <nav class="microbiome-nav-links">
          <a href="#meet-microbiome">Meet Your Microbiome</a>
          <a href="#where-from">Where does my microbiome come from?</a>
          <a href="#what-bacteria-do">What do bacteria do in my body?</a>
          <a href="#gut-barrier">What is the gut barrier?</a>
          <a href="#healthy-microbiome">Is my microbiome healthy?</a>
          <a href="#citations">Citations</a>
        </nav>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="main-section">
      <div class="container">
        <!-- Meet Your Microbiome -->
        <div id="meet-microbiome" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">Meet Your Microbiome</h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                You are home to a community of trillions of microorganisms,
                including 38,000,000,000,000 (that's 38 trillion) bacteria,
                living in and on your body. The bacteria alone represent 50% of
                you by cell count.<sup>1</sup> Collectively, these
                microorganisms comprise your
                <span class="highlight">microbiota</span>, and these trillions
                of microbial cells and all of their components and surroundings
                constitute your <span class="highlight">microbiome</span>. The
                majority of these microbes reside in your gastrointestinal
                tract, but many others live in diverse places like your mouth,
                your skin, and your armpits, etc., each with their own unique
                microbiome.
              </p>
              <p class="question-highlight">
                Wait. 38,000,000,000,000 bacteria!?
              </p>
            </div>
          </div>
        </div>

        <!-- Where Does My Microbiome Come From -->
        <div id="where-from" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">
                Where does my microbiome come from?
              </h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                Your microbiome begins developing at birth. During vaginal
                delivery, you're exposed to your mother's vaginal and fecal
                microbiota. Throughout infancy and childhood, your microbiome
                continues to develop through diet, environment, and interactions
                with family members and pets. By age 3, your microbiome
                resembles an adult microbiome and remains relatively stable
                throughout life, though it can be influenced by diet,
                antibiotics, illness, and lifestyle factors.
              </p>
            </div>
          </div>
        </div>

        <!-- What Do Bacteria Do -->
        <div id="what-bacteria-do" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">
                What do bacteria do in my body?
              </h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                Gut bacteria perform numerous essential functions. They help
                digest food, particularly complex carbohydrates that your body
                can't break down on its own. They produce vitamins like vitamin
                K and B vitamins. They train your immune system to distinguish
                between harmful and harmless substances. They produce
                metabolites that influence your metabolism, mood, and overall
                health. They also compete with harmful bacteria, preventing them
                from colonizing your gut.
              </p>
            </div>
          </div>
        </div>

        <!-- What Is The Gut Barrier -->
        <div id="gut-barrier" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">What is the gut barrier?</h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                The gut barrier is a complex system that controls what passes
                from your intestines into your bloodstream. It consists of a
                single layer of intestinal epithelial cells held together by
                tight junctions, covered by a protective mucus layer. This
                barrier allows nutrients to pass through while keeping bacteria,
                toxins, and harmful substances out of your bloodstream. When
                this barrier becomes compromised (often called "leaky gut"), it
                can allow unwanted substances to enter your circulation,
                potentially triggering inflammation and immune responses.
              </p>
            </div>
          </div>
        </div>

        <!-- Is My Microbiome Healthy -->
        <div id="healthy-microbiome" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">
                Is my microbiome healthy?
              </h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                A healthy microbiome is characterized by high diversity (many
                different species) and balance (no single species dominating).
                Signs of a healthy microbiome include regular bowel movements,
                good digestion, strong immune function, and stable mood. Factors
                that support microbiome health include a diverse diet rich in
                fiber, fermented foods, regular exercise, adequate sleep, and
                stress management. Conversely, frequent antibiotic use, poor
                diet, chronic stress, and lack of sleep can negatively impact
                your microbiome.
              </p>
            </div>
          </div>
        </div>

        <!-- Citations -->
        <div id="citations" class="qa-item">
          <div class="row">
            <div class="col-md-4">
              <h2 class="microbiome-section-title">Citations</h2>
            </div>
            <div class="col-md-8">
              <p class="section-text">
                <sup>1</sup> Sender, R., Fuchs, S., & Milo, R. (2016). Revised
                estimates for the number of human and bacteria cells in the
                body. PLOS Biology, 14(8), e1002533.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>
