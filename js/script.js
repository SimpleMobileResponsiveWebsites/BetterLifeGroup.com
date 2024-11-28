// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// Toggle the mobile menu visibility
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
