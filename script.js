// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// Toggle the mobile menu visibility
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.id = 'scrollToTop';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Highlight active link in the navigation
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

