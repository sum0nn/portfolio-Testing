//menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x-circle');
  navbar.classList.toggle('active');
};


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('header nav a');
  const debounceScroll = _.debounce(handleScroll, 100); // Adjust the debounce delay if needed

  window.addEventListener('scroll', debounceScroll);

  function handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const top = targetSection.offsetTop - 150;
        const bottom = top + targetSection.offsetHeight;

        link.classList.toggle('active', scrollPosition >= top && scrollPosition < bottom);
      }
    });
  }

  // Add click event listeners to update the active tab and scroll smoothly
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 40,
          behavior: 'smooth'
        });

        // Remove 'active' class from all navigation links
        navLinks.forEach(otherLink => {
          otherLink.classList.remove('active');
        });

        // Add 'active' class to the clicked navigation link
        link.classList.add('active');
      }
    });
  });
});




//STICKY NAVBAR
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


//remove menu icon when click navbar linnk (scroll)
menuIcon.classList.remove('bx-x-circle');
navbar.classList.remove('active');
};



// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000, // Set the time delay in milliseconds (3 seconds)
    disableOnInteraction: false, // Allow manual interaction to stop autoplay
  },
});

//dark-light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};


//scroll reveal
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 1800,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.img, .services-container, .portfolio-box, .testimonial-wrapper, #footer contact', { origin: 'bottom' });

// Initialize ScrollReveal for services
ScrollReveal().reveal('.home-content h1, ..about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


