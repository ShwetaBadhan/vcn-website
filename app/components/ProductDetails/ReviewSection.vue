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
        <span class="search-icon"
          ><img src="/img/icons/search.png" alt=""
        /></span>
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
      <div class="review-card">
        <!-- ROW 1 -->
        <div class="row-1">
          <div class="left-block">
            <span class="name">Sonya H. <span class="loc">US</span></span>
            <span class="stars">★★★★★</span>
          </div>

          <div class="date-block">
            <span class="date">11/04/25</span>
          </div>
        </div>

        <!-- ROW 2 -->
        <div class="row-2">
          <span class="verified"
            ><i class="fa-solid fa-circle-check"></i> Verified Buyer</span
          >

          <p class="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, <br />
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>

        <!-- ROW 3 (HELPFUL) -->
        <div class="row-3">
          <span class="help">Was this helpful?</span>

          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 0
            <i class="fa-regular fa-thumbs-down"></i> 0
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">4</button>
      <button class="page-btn">5</button>

      <button class="arrow-btn">›</button>
    </div>
  </div>
</template>