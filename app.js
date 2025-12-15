// Initialize Home Swiper
const homeSwiper = new Swiper('.home-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// Initialize Review Swiper
const reviewSwiper = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Menu toggle (match HTML id `menu-bars`)
const menuBtn = document.querySelector('#menu-bars');
const navBar = document.querySelector('.navbar');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
  });
}

// Close mobile menu on scroll
window.addEventListener('scroll', () => {
  if (menuBtn) menuBtn.classList.remove('fa-times');
  if (navBar) navBar.classList.remove('active');
});

// Contact form: submit via Fetch and show confirmation message
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const statusDiv = document.getElementById('contact-status');

  if (!contactForm || !statusDiv) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusDiv.style.color = '#fff';
    statusDiv.textContent = 'Sending...';

    const formData = new FormData(contactForm);

    try {
      const res = await fetch(contactForm.action || 'handle_contact.php', {
        method: 'POST',
        body: formData,
      });

      const text = await res.text();
      // Show server response or a friendly message
      statusDiv.style.color = res.ok ? '#d4edda' : '#f8d7da';
      statusDiv.textContent = text || (res.ok ? 'Message sent.' : 'Failed to send message.');

      if (res.ok) {
        contactForm.reset();
      }
    } catch (err) {
      statusDiv.style.color = '#f8d7da';
      statusDiv.textContent = 'Error sending message. Please try again later.';
      console.error('Contact form error:', err);
    }

    // Hide status after 5 seconds
    setTimeout(() => { statusDiv.textContent = ''; }, 5000);
  });
});
