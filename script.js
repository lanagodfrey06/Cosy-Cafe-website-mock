// Close navbar when a link is clicked (for mobile)
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});

// Optional: Add a scroll fade-in animation for elements
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
