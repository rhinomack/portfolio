
// Form confirmation message (local-only)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents default submission locally
    alert('Thanks for your message! ✅');
    form.reset(); // Optional: clears form fields
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Console greeting
console.log("🦏 Portfolio Loaded. Let's build something great, Ryan!");
