<template>
  <div class="auth-wrapper-main">
    <h1 class="auth-heading-primary">Hi, kindly sign in.</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="auth-card-container">
            <div class="auth-section-title">Your Account</div>

            <button class="auth-social-button">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"
                class="auth-social-icon" />
              Continue with Google
            </button>

            <button class="auth-social-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook" class="auth-social-icon" />
              Continue with Facebook
            </button>

            <div class="auth-separator-line">or</div>

            <form>
              <div class="auth-field-group">
                <label class="auth-field-label">Email</label>
                <input type="email" class="auth-input-field" required />
              </div>

              <div class="auth-field-group">
                <label class="auth-field-label">Password</label>
                <input type="password" class="auth-input-field" required />
              </div>

              <button type="submit" class="auth-submit-button">
                Sign In
              </button>

              <div class="auth-help-links">
                <a href="#" class="auth-link-item" onclick="alert('Password reset feature coming soon')">Forgot
                  password?</a>
                <a href="#" class="auth-link-item"
                  onclick="alert('Use social login or checkout to create account')">Don't have a password?</a>
                <a href="/checkout" class="auth-link-item">Want to create a new account?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'product-details-page'
  }
})
</script>
