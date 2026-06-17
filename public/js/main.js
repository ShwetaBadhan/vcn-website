// Cache Bootstrap Dropdown instances for better performance
const dropdownCache = new Map();

const dropdowns = document.querySelectorAll('.nav-item.dropdown');
dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if (!toggle) return;

  // Create and cache Dropdown instance once
  if (!dropdownCache.has(dropdown)) {
    dropdownCache.set(dropdown, new bootstrap.Dropdown(toggle));
  }

  dropdown.addEventListener('mouseenter', () => {
    if (window.innerWidth > 992) {
      const bsDropdown = dropdownCache.get(dropdown);
      if (bsDropdown) bsDropdown.show();
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    if (window.innerWidth > 992) {
      const bsDropdown = dropdownCache.get(dropdown);
      if (bsDropdown) bsDropdown.hide();
    }
  });
});
const swiper = new Swiper('.vcn-whole-body-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.vcn-whole-body-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.vcn-whole-body-swiper-button-next',
    prevEl: '.vcn-whole-body-swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
  // ✅ Add this to prevent height jump
  autoHeight: true, // Optional: if you want dynamic height per slide
});

// Audio button functionality
document.querySelectorAll('.vcn-audio-button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    // Add your audio play functionality here
    console.log('Audio button clicked');
  });
});


// Intersection Observer to detect when section is in viewport
const awakenSection = document.getElementById('awakenSection');
const awakenGif = document.getElementById('awakenGif');
const awakenCopyright = document.getElementById('awakenCopyright');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // Trigger when 30% of section is visible
};

// Only setup observer if elements exist (client-side only)
if (awakenSection && awakenGif && awakenCopyright) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add loaded class to trigger animation
        awakenGif.classList.add('vcn-loaded');
        awakenCopyright.classList.add('vcn-show');

        // Optional: Stop observing after first load
        observer.unobserve(awakenSection);
      }
    });
  }, observerOptions);

  // Start observing the section
  observer.observe(awakenSection);
}

// Optional: Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const sectionTop = awakenSection.offsetTop;
  const sectionHeight = awakenSection.offsetHeight;

  if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
    const parallaxValue = (scrolled - sectionTop) * 0.5;
    awakenSection.style.backgroundPositionY = parallaxValue + 'px';
  }
});

// Note: Stories scroll animation is now handled in Stories.vue component for better performance
// Note: Scroll handling moved to Navbar.vue component for better performance

document.addEventListener('DOMContentLoaded', function () {
  const productCards = document.querySelectorAll('.vcn-whole-body-product-card');

  productCards.forEach(card => {
    const video = card.querySelector('.product-video');

    if (video) {
      // Important for smoothness  
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.playbackRate = 1;

      // Decode buffer before play
      video.addEventListener("loadeddata", () => {
        video.pause();
        video.currentTime = 0.01;
        video.playbackRate = 1.8; // 💨 Speed increased

      });

      card.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();

        setTimeout(() => {
          video.style.opacity = "1";
        }, 10);
      });

      card.addEventListener('mouseleave', () => {
        video.style.opacity = "0";
        video.pause();
        video.currentTime = 0;
      });
    }
  });
});


// Show popup after 10 seconds
setTimeout(function () {
  showPromoModal();
}, 10000);

function showPromoModal() {
  const modal = document.getElementById('promoModalOverlay');
  if (modal) {
    modal.classList.add('promo-active-modal');
  }
}

function closePromoModal() {
  const modal = document.getElementById('promoModalOverlay');
  if (modal) {
    modal.classList.remove('promo-active-modal');
  }
}



// Close popup when clicking outside
const modalOverlay = document.getElementById('promoModalOverlay');
if (modalOverlay) {
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) {
      closePromoModal();
    }
  });
}

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closePromoModal();
  }
});


function openProductPreview(src) {
  document.getElementById("productPreviewModal").style.display = "block";
  document.getElementById("productPreviewImage").src = src;
}

function closeProductPreview() {
  document.getElementById("productPreviewModal").style.display = "none";
}

function changePreviewImage(src) {
  document.getElementById("productPreviewImage").src = src;
}

function toggleBenefitPanel(panelId) {
  const panel = document.getElementById(panelId);
  const iconId = 'icon' + panelId.replace('panel', '');
  const icon = document.getElementById(iconId);

  // Close all other panels
  const allPanels = document.querySelectorAll('.panel-content');
  const allIcons = document.querySelectorAll('.toggle-icon');

  allPanels.forEach((p, index) => {
    if (p.id !== panelId) {
      p.classList.remove('show');
      allIcons[index].textContent = '+';
    }
  });

  // Toggle current panel
  if (panel.classList.contains('show')) {
    panel.classList.remove('show');
    icon.textContent = '+';
  } else {
    panel.classList.add('show');
    icon.textContent = '−';
  }
}


function toggleMenu() {
  const navbarCollapse = document.getElementById('navbarContent');
  navbarCollapse.classList.toggle('show');
  document.body.style.overflow = navbarCollapse.classList.contains('show') ? 'hidden' : '';

  // Close all accordions when menu closes
  if (!navbarCollapse.classList.contains('show')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.classList.remove('show');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
  }
}

function toggleAccordion(event, accordionId) {
  event.preventDefault();

  const accordion = document.getElementById(accordionId);
  const allAccordions = document.querySelectorAll('.dropdown-content');
  const clickedLink = event.currentTarget;
  const allLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Close all other accordions and remove active state
  allAccordions.forEach(acc => {
    if (acc.id !== accordionId) {
      acc.classList.remove('show');
    }
  });

  allLinks.forEach(link => {
    if (link !== clickedLink) {
      link.classList.remove('active');
    }
  });

  // Toggle current accordion and active state
  accordion.classList.toggle('show');
  clickedLink.classList.toggle('active');
}

// Scroll effect
window.addEventListener('scroll', function () {
  // Removed navbar scroll handling - now handled in Navbar.vue component
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
  const navbarCollapse = document.getElementById('navbarContent');
  const toggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show') &&
    !navbarCollapse.contains(event.target) &&
    !toggler.contains(event.target)) {
    toggleMenu();
  }
});
// Initialize AOS when DOM is ready and AOS is loaded
function initAOS() {
  if (typeof AOS !== 'undefined') {
    requestAnimationFrame(() => {
      AOS.init({
        duration: 1000,
        once: false,
        easing: "ease-out",
        mirror: true,
      });
    });
  } else {
    setTimeout(initAOS, 100);
  }
}

window.addEventListener('load', initAOS);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAOS);
} else {
  initAOS();
}

document.addEventListener("aos:in:line-expand", ({ detail }) => {
  detail.classList.add("aos-animate");
});

document.addEventListener("aos:out:line-expand", ({ detail }) => {
  detail.classList.remove("aos-animate");
});

document.querySelectorAll('.faq-question-button').forEach(button => {
  button.addEventListener('click', function () {
    const faqItem = this.closest('.faq-item-wrapper');
    const isActive = faqItem.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item-wrapper').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.faq-question-button').setAttribute('aria-expanded', 'false');
    });

    // Toggle current item
    if (!isActive) {
      faqItem.classList.add('active');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// Toggle mobile menu
function toggleMenu() {
  const navbarContent = document.getElementById('navbarContent');
  const body = document.body;

  if (!navbarContent) return;

  // Toggle menu
  const isOpening = !navbarContent.classList.contains('show');
  navbarContent.classList.toggle('show');
  body.classList.toggle('menu-open'); // For hiding logo and transforming hamburger

  if (isOpening) {
    // Menu opening
    body.style.overflow = 'hidden';

    // Auto-open Shop dropdown
    setTimeout(() => {
      const shopAccordion = document.getElementById('shopAccordion');
      const shopLink = document.querySelector('.navbar-nav .nav-link[onclick*="shopAccordion"]');

      // Close all first
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
      document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));

      // Open Shop
      if (shopAccordion && shopLink) {
        shopAccordion.classList.add('show');
        shopLink.classList.add('active');
      }
    }, 100);

  } else {
    // Menu closing
    body.style.overflow = '';

    // Close all dropdowns
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
    document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
  }
}

// Toggle accordion dropdowns
function toggleAccordion(event, accordionId) {
  event.preventDefault();

  const accordion = document.getElementById(accordionId);
  const clickedLink = event.currentTarget;

  if (!accordion) return;

  const isActive = accordion.classList.contains('show');

  // Close all
  document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));

  // Open if wasn't active
  if (!isActive) {
    accordion.classList.add('show');
    clickedLink.classList.add('active');
  }
}

// Close on outside click
document.addEventListener('click', function (event) {
  const navbarContent = document.getElementById('navbarContent');
  const navbar = document.getElementById('navbar');

  if (navbarContent &&
    navbarContent.classList.contains('show') &&
    !navbar.contains(event.target)) {
    toggleMenu();
  }
});

// Close on Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const navbarContent = document.getElementById('navbarContent');
    if (navbarContent && navbarContent.classList.contains('show')) {
      toggleMenu();
    }
  }
});


const openBtn = document.getElementById("openBundles");
const closeBtn = document.getElementById("closeBtn");
const mainContainer = document.getElementById("mainContainer");
const videoContainer = document.getElementById("videoContainer");
const bundlesContainer = document.getElementById("bundlesContainer");

// Add null checks to prevent errors
if (openBtn) {
  openBtn.addEventListener("click", () => {
    if (mainContainer) mainContainer.classList.add("fullscreen");
    if (videoContainer) videoContainer.classList.add("hidden");
    if (bundlesContainer) bundlesContainer.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (bundlesContainer) bundlesContainer.classList.remove("active");
    if (videoContainer) videoContainer.classList.remove("hidden");
    if (mainContainer) mainContainer.classList.remove("fullscreen");
  });
}

