// js/modeToggle.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mode-toggle');

  // Check stored theme preference
  const isDark = localStorage.getItem('darkMode') === 'true';
  document.documentElement.classList.toggle('dark-mode', isDark);
  toggleBtn.innerText = isDark ? '☀️' : '🌙';

  toggleBtn.addEventListener('click', () => {
    const currentlyDark = document.documentElement.classList.contains('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !currentlyDark);
    toggleBtn.innerText = !currentlyDark ? '☀️' : '🌙';
  });
});
