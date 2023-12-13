/**
 * Template Name: Mentor
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */

  let backtotopfacebook = select(".back-to-top-facebook");
  if (backtotopfacebook) {
    const toggleBacktotopfacebook = () => {
      if (window.scrollY >= 0) {
        backtotopfacebook.classList.add("active");
      }
    };
    window.addEventListener("load", toggleBacktotopfacebook);
    onscroll(document, toggleBacktotopfacebook);
  }

  let backtotopinstagram = select(".back-to-top-instagram");
  if (backtotopinstagram) {
    const toggleBacktotopinstagram = () => {
      if (window.scrollY >= 0) {
        backtotopinstagram.classList.add("active");
      }
    };
    window.addEventListener("load", toggleBacktotopinstagram);
    onscroll(document, toggleBacktotopinstagram);
  }

  let backtotopTwitter = select(".back-to-top-twitter");
  if (backtotopTwitter) {
    const toggleBacktotopTwitter = () => {
      if (window.scrollY >= 0) {
        backtotopTwitter.classList.add("active");
      }
    };
    window.addEventListener("load", toggleBacktotopTwitter);
    onscroll(document, toggleBacktotopTwitter);
  }

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY >= 0) {
        backtotop.classList.add("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();
