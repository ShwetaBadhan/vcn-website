<template>

  <div class="reviews-section">
    <h2 class="section-title">Member<br />Reviews</h2>

    <!-- Write Review Button -->
    <button class="btn-write-review" @click="showForm = !showForm">
      {{ showForm ? 'Cancel' : 'Write a Review' }}
    </button>

    <!-- Review Form -->
    <div v-if="showForm" class="review-form">
      <h3>Write Your Review</h3>

      <div class="form-group">
        <label>Rating</label>
        <div class="rating-selector">
          <span v-for="star in 5" :key="star" class="star" :class="{ active: star <= rating }" @click="rating = star">
            ★
          </span>
        </div>
        <small style="color: #666; margin-top: 4px; display: block;">
          Selected: {{ rating }} star{{ rating !== 1 ? 's' : '' }}
        </small>
      </div>

      <div class="form-group">
        <label for="review-comment">Your Review</label>
        <textarea id="review-comment" v-model="comment" placeholder="Share your experience with this product..."
          rows="4"></textarea>
      </div>

      <div class="form-actions">
        <button class="btn-primary" :disabled="isSubmitting" @click="submitReview">
          {{ isSubmitting ? 'Submitting...' : 'Submit Review' }}
        </button>
        <button class="btn-secondary" @click="resetForm">
          Reset
        </button>
      </div>

      <div v-if="submitMessage" class="submit-message" :class="{ success: !submitError, error: submitError }"
        style="margin-top: 16px;">
        {{ submitMessage }}
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      Loading reviews...
    </div>

    <!-- Error State -->
    <div v-else-if="fetchError" class="error-state">
      {{ fetchError }}
    </div>

    <div v-else class="rating-overview">
      <div class="rating-score">
        <div class="rating-flex">
          <div class="rating-number">{{ averageRating.toFixed(1) }}</div>
          <div class="stars">
            {{ getStars(Math.round(averageRating)) }}
            <div class="rating-count">Based on {{ totalReviews }} review{{ totalReviews !== 1 ? 's' : '' }}</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rating-bars">
        <div v-for="(count, index) in ratingDistribution" :key="5 - index" class="rating-bar-item">
          <span class="star-label">{{ 5 - index }} ★</span>
          <div class="bar-container">
            <div class="bar-fill" :style="{ width: getRatingPercentage(count) }"></div>
          </div>
          <span class="bar-count">{{ count }}</span>
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
    <div v-if="!isLoading && !fetchError" class="results-info">
      We found {{ totalReviews }} review{{ totalReviews !== 1 ? 's' : '' }}.
      <span v-if="totalReviews > 0" class="clear-filters">Clear filters</span>
    </div>

    <!-- Reviews List -->
    <div v-if="!isLoading && !fetchError" class="reviews-list">
      <!-- Empty State -->
      <div v-if="reviews.length === 0" class="empty-state">
        <p>No reviews yet. Be the first to review this product!</p>
      </div>

      <!-- Review Cards -->
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <div class="row-1">
          <div class="left-block">
            <span class="name">{{ review.user?.firstName || 'Anonymous' }} {{ review.user?.lastName || '' }} <span
                class="loc">IN</span></span>
            <span class="stars">{{ getStars(review.rating) }}</span>
          </div>
          <div class="date-block">
            <span class="date">{{ formatDate(review.createdAt) }}</span>
          </div>
        </div>
        <div class="row-2">
          <span class="verified"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
          <p class="text">{{ review.comment }}</p>
        </div>
        <div class="row-3">
          <span class="help">Was this helpful?</span>
          <div class="help-icons">
            <i class="fa-regular fa-thumbs-up"></i> 0
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

<script setup lang="ts">
import { API_ENDPOINTS, getProductReviewsUrl } from '~/config/api/endpoints'
import { useApi } from '~/config/api/useApi'

// Types
interface Review {
  id: number
  productId: number
  userId: number
  rating: number
  comment: string
  isActive: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  user: {
    firstName: string
    lastName: string
    userName: string
  }
}

interface ReviewsResponse {
  success: boolean
  data: {
    reviews: Review[]
    averageRating: number
    totalReviews: number
  }
}

// Props
const props = defineProps<{
  productId?: number
}>()

// Get product store for product ID
const productStore = useProductStore()
const config = useRuntimeConfig()
const baseURL = config.public.apiBaseUrl

// Form state
const rating = ref(0)
const comment = ref('')
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref(false)
const showForm = ref(false)

// Reviews state
const reviews = ref<Review[]>([])
const averageRating = ref(0)
const totalReviews = ref(0)
const isLoading = ref(false)
const fetchError = ref<string | null>(null)

// Get product ID from props or store
const actualProductId = computed(() => {
  return props.productId || productStore.selectedProduct?.id || productStore.selectedProductPage?.productId || null
})

// Star rating display
const starRating = computed(() => {
  return '★'.repeat(rating.value) + '☆'.repeat(5 - rating.value)
})

// Format date for display
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })
}

// Generate star display
const getStars = (rating: number): string => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}

// Calculate rating distribution
const ratingDistribution = computed(() => {
  const distribution: [number, number, number, number, number] = [0, 0, 0, 0, 0] // 5, 4, 3, 2, 1 stars
  reviews.value.forEach((review: Review) => {
    const r = review?.rating ?? 0
    if (r >= 1 && r <= 5) {
      const idx = 5 - r as 0 | 1 | 2 | 3 | 4
      distribution[idx]++
    }
  })
  return distribution
})

// Get percentage for rating bar
const getRatingPercentage = (count: number): string => {
  if (totalReviews.value === 0) return '0%'
  return `${(count / totalReviews.value) * 100}%`
}

// Fetch reviews from API
const fetchReviews = async () => {
  if (!actualProductId.value) return

  isLoading.value = true
  fetchError.value = null

  try {
    const endpoint = getProductReviewsUrl(actualProductId.value)
    const { data, error } = await useApi().get<ReviewsResponse>(endpoint)

    if (error) {
      fetchError.value = error
    } else if (data && (data as ReviewsResponse).success) {
      const responseData = (data as ReviewsResponse).data
      reviews.value = responseData.reviews || []
      averageRating.value = responseData.averageRating || 0
      totalReviews.value = responseData.totalReviews || 0
    }
  } catch (err: any) {
    fetchError.value = err.message || 'Failed to load reviews'
  } finally {
    isLoading.value = false
  }
}

// Fetch reviews on client side only
onMounted(() => {
  if (actualProductId.value) {
    fetchReviews()
  }
})

// Watch for productId changes on client side
watch(() => actualProductId.value, (newId, oldId) => {
  if (newId && newId !== oldId && process.client) {
    fetchReviews()
  }
})

// Submit review function
const submitReview = async () => {
  if (!actualProductId.value) {
    submitError.value = true
    submitMessage.value = 'Product ID not available'
    return
  }

  if (rating.value === 0) {
    submitError.value = true
    submitMessage.value = 'Please select a rating'
    return
  }

  if (!comment.value.trim()) {
    submitError.value = true
    submitMessage.value = 'Please enter a review comment'
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = false

  try {
    const payload = {
      productId: actualProductId.value,
      rating: rating.value,
      comment: comment.value.trim()
    }

    const { data, error } = await useApi().post(API_ENDPOINTS.REVIEW_CREATE, payload)

    if (error) {
      submitError.value = true
      submitMessage.value = error
    } else if (data && (data as any).success) {
      submitError.value = false
      submitMessage.value = (data as any).message || 'Review submitted successfully'
      // Reset form
      comment.value = ''
      rating.value = 0
      // Refresh reviews list
      await fetchReviews()
      // Hide form after success
      setTimeout(() => {
        showForm.value = false
        submitMessage.value = ''
      }, 2000)
    } else {
      submitError.value = true
      submitMessage.value = 'Failed to submit review'
    }
  } catch (err: any) {
    submitError.value = true
    submitMessage.value = err.message || 'An error occurred'
  } finally {
    isSubmitting.value = false
  }
}

// Reset form
const resetForm = () => {
  rating.value = 0
  comment.value = ''
  submitMessage.value = ''
  submitError.value = false
}
</script>

<style scoped>
.review-form {
  background: var(--vcn-base-bg, #F6F7EE);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  font-family: var(--vcn-font, "Outfit", sans-serif);
}

.review-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--vcn-primary, #5E6C1F);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--vcn-footer, #1D4503);
  font-size: 1rem;
}

.rating-selector {
  display: flex;
  gap: 8px;
  font-size: 1.75rem;
  color: #d3d3d3;
  cursor: pointer;
}

.rating-selector .star {
  transition: color 0.2s ease;
}

.rating-selector .star.active {
  color: var(--vcn-primary, #5E6C1F);
}

.rating-selector .star:hover {
  color: var(--vcn-primary, #5E6C1F);
}

.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #c5d5b8;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: var(--vcn-font, "Outfit", sans-serif);
  background: #ffffff;
  transition: border-color 0.2s;
}

.form-group textarea:focus {
  outline: none;
  border-color: var(--vcn-primary, #5E6C1F);
  box-shadow: 0 0 0 3px rgba(94, 108, 31, 0.1);
}

.form-group textarea::placeholder {
  color: #999;
}

.form-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn-primary {
  background: var(--vcn-primary, #5E6C1F);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1rem;
}

.btn-primary:hover:not(:disabled) {
  background: var(--vcn-footer, #1D4503);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(94, 108, 31, 0.3);
}

.btn-primary:disabled {
  background: #a8b88a;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-secondary {
  background: transparent;
  color: var(--vcn-footer, #1D4503);
  border: 2px solid var(--vcn-primary, #5E6C1F);
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1rem;
}

.btn-secondary:hover {
  background: var(--vcn-primary, #5E6C1F);
  color: white;
}

.btn-write-review {
  background: var(--vcn-primary, #5E6C1F);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 24px;
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1rem;
}

.btn-write-review:hover {
  background: var(--vcn-footer, #1D4503);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(94, 108, 31, 0.3);
}

.submit-message {
  padding: 14px 18px;
  border-radius: 8px;
  font-weight: 500;
  font-family: var(--vcn-font, "Outfit", sans-serif);
}

.submit-message.success {
  background: var(--vcn-light, #F2FEEA);
  color: var(--vcn-footer, #1D4503);
  border: 1px solid #c5d5b8;
}

.submit-message.error {
  background: #fff3f3;
  color: #c0392b;
  border: 1px solid #e0b4b4;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 40px 20px;
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1.1rem;
}

.loading-state {
  color: var(--vcn-primary, #5E6C1F);
}

.error-state {
  color: #c0392b;
  background: #fff3f3;
  border-radius: 8px;
  margin: 20px 0;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--vcn-footer, #1D4503);
  font-family: var(--vcn-font, "Outfit", sans-serif);
  font-size: 1.1rem;
  background: var(--vcn-light, #F2FEEA);
  border-radius: 8px;
  margin: 20px 0;
}

.empty-state p {
  margin: 0;
}
</style>