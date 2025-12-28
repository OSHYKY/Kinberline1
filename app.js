// app.js - shared behavior for Kinberline
const THEME_KEY = 'kin-theme';

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (buttons with id="theme-toggle" on each page)
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') document.body.classList.add('dark');

  document.querySelectorAll('#theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem(
        THEME_KEY,
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
    });
  });

  // Fade-in stagger
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = (i * 80) + 'ms';
  });
});

// Mobile nav dropdown
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
});
