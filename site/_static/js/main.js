(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.hamburgerButton = document.getElementById('hamburger-icon');
      this.navOverlay = document.getElementById('nav-overlay');
    },
    registerEventListeners () {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }

      if (this.hamburgerButton !== null) {
        this.hamburgerButton.addEventListener('click', (e) => {
          this.hamburgerButton.classList.toggle('open');
          this.navOverlay.classList.toggle('nav-overlay--open');
          document.body.classList.toggle('no-scroll');
        });
      }
    },
  };
  app.initialize();
})();
