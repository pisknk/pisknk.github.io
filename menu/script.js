const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const blurBackground = document.getElementById('blur-background');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  blurBackground.style.display = 'block';
});

blurBackground.addEventListener('click', () => {
  navLinks.classList.remove('active');
  blurBackground.style.display = 'none';
});
