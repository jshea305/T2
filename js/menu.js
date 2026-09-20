document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Audio Playlist Track Selector (samples.html)
  const tracklists = document.querySelectorAll('.tracklist');
  tracklists.forEach((list) => {
    const playerId = list.getAttribute('data-player');
    const player = document.getElementById(playerId);
    const items = list.querySelectorAll('.track-item');

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        if (player && src) {
          items.forEach((i) => i.classList.remove('active'));
          item.classList.add('active');
          player.src = src;
          player.play();
        }
      });
    });
  });
});

// 3. Lightbox Functions (gallery.html)
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  }
}

function closeLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  if (event.target !== document.getElementById('lightbox-img')) {
    lightbox.classList.remove('active');
  }
}
