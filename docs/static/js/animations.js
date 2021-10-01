document.addEventListener('DOMContentLoaded', function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }

    });
  });
  document.querySelectorAll('.fade-in-up').forEach((element) => {
    observer.observe(element);
  });
});