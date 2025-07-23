document.addEventListener('DOMContentLoaded', function() {
  const modeBtn = document.getElementById('mode-toggle');
  modeBtn.onclick = function() {
    document.documentElement.classList.toggle('dark-mode');
    // Optional: save user preference
  }
});
