document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.scroll-fade');
  function checkPosition() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkPosition);
  checkPosition();
});