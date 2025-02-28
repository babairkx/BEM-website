
document.addEventListener("DOMContentLoaded", () => {
  // mobile menu toggle
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-dropdown");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // video modal
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');
  // open modal when clicked
  videoButton.addEventListener('click', () => {
    // show modal
    modal.style.display = 'block';
    // replace the src attr with video url
    videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw'
    // close modal on close button click
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      videoPlayer.src = '';
    })
    // close modal on outer click
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        videoPlayer.src = '';
      }
    })
  })
});

// navbar scroll background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
})

