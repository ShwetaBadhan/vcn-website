<template>

  <div class="reviews-section">
    <h2 class="section-title">Member<br />Reviews</h2>

    <div class="rating-overview">
      <div class="rating-score">
        <div class="rating-flex">
          <div class="rating-number">4.8</div>
          <div class="stars">
            ★★★★★
            <div class="rating-count">Based on 10023 reviews</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rating-bars">
        <div class="rating-bar-item">
          <span class="star-label">5 ★</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: 92%"></div>
          </div>
          <span class="bar-count">9214</span>
        </div>
        <div class="rating-bar-item">
          <span class="star-label">4 ★</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: 5%"></div>
          </div>
          <span class="bar-count">502</span>
        </div>
        <div class="rating-bar-item">
          <span class="star-label">3 ★</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: 2%"></div>
          </div>
          <span class="bar-count">197</span>
        </div>
        <div class="rating-bar-item">
          <span class="star-label">2 ★</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: 0.5%"></div>
          </div>
          <span class="bar-count">52</span>
        </div>
        <div class="rating-bar-item">
          <span class="star-label">1 ★</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: 0.6%"></div>
          </div>
          <span class="bar-count">58</span>
        </div>
      </div>
    </div>

    <!-- Search and Sort -->
    <div class="search-sort-bar">
      <div class="search-box">
        <span class="search-icon"><img src="/img/icons/search.png" alt="" /></span>
        <input type="text" placeholder="Search reviews" />
      </div>
      <div class="sort-dropdown">
        <select>
          <option>Sort by: Highest rating</option>
          <option>Sort by: Lowest rating</option>
          <option>Sort by: Most recent</option>
          <option>Sort by: Most helpful</option>
        </select>
      </div>
    </div>

    <!-- Results Info -->
    <div class="results-info">
      We found 24 matching reviews.
      <span class="clear-filters">Clear filters</span>
    </div>

    <!-- Reviews List -->
    <div class="reviews-list">
      <!-- Review 1 -->
      <div class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">Ritu Sharma <span class="loc">IN</span></span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="date-block">
            <span class="date">04/15/25</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">I've been using products for the past 8 months, and the difference is clearly visible. My
            energy levels have improved, and I feel more active throughout the day. What I like most is the consistency
            in quality.</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 12
            <i class="fa-regular fa-thumbs-down"></i> 0
          </div>
        </div>
      </div>

      <!-- Review 2 -->
      <div class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">Aman Verma <span class="loc">IN</span></span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="date-block">
            <span class="date">03/28/25</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">I can confidently say they are effective. The results are gradual but real. VCN has truly
            built my trust.</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 8
            <i class="fa-regular fa-thumbs-down"></i> 0
          </div>
        </div>
      </div>

      <!-- Review 3 -->
      <div class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">Neha Gupta <span class="loc">IN</span></span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="date-block">
            <span class="date">03/10/25</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">The best part about VCN products is that they focus on long-term health rather than quick
            fixes. I've seen positive changes in my overall wellness, and I highly recommend them to anyone looking for
            reliable health support.</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 15
            <i class="fa-regular fa-thumbs-down"></i> 1
          </div>
        </div>
      </div>

      <!-- Review 4 -->
      <div class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">Rohit Singh <span class="loc">IN</span></span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="date-block">
            <span class="date">02/22/25</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">I've tried many health products before, but VCN stands out because of its quality and
            authenticity. You can feel the difference with regular use. Definitely worth it.</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 10
            <i class="fa-regular fa-thumbs-down"></i> 0
          </div>
        </div>
      </div>

      <!-- Review 5 -->
      <div class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">Pooja Malhotra <span class="loc">IN</span></span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="date-block">
            <span class="date">02/05/25</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">VCN products have become a part of my daily routine now. They are easy to use and genuinely
            beneficial. I appreciate the brand's commitment to quality and customer satisfaction.</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 7
            <i class="fa-regular fa-thumbs-down"></i> 0
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="pagination">
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">4</button>
      <button class="page-btn">5</button>

      <button class="arrow-btn">›</button>
    </div> -->
  </div>
</template>