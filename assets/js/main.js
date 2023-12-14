(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "./assets/images/brands/colotrd_bg.png";
    } else {
      logo.src = "./assets/images/brands/full_logo_white.png";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // ===== submenu
  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  // append <img> tags to a div based on assets/ folder.
  const firsttargetDivContainer = document.querySelector(".logo-slider-1");
  const secondtargetDivContainer = document.querySelector(".logo-slider-2");

  const imgPath = "./assets/images/frameworks/";

  let imagesList = {
    asp: "net.png",
    android: "android.png",
    angular: "angular.png",
    // arduino: "arduino.png",
    bash: "bash.png",
    "c#": "csharp.png",
    // django: "django.png",
    electron: "electron.png",
    ember: "ember.png",
    flutter: "flutter.png",
    ionic: "ionic.png",
    iOS: "iOS.png",
    javascript: "javascript.png",
    kotlin: "kotlin.png",
    laravel: "laravel.png",
    nextjs: "next.js.png",
    nodejs: "node.js.png",
    nuxtjs: "nuxt.png",
    php: "php.png",
    python: "python.png",
    qt: "qt.png",
    reactjs: "react.png",
    rust: "rust.png",
    rubyOnRails: "ruby-on-rails.png",
    spring: "spring-boot.png",
    svelte: "svelte.png",
    swift: "swift.png",
    tauri: "tauri.png",
    unity: "unity.png",
    unreal: "unreal.png",
    vuejs: "vue.png",


  };

  // shuffle the images ojbject to two other objects.
  const shuffled = Object.fromEntries(
    Object.entries(imagesList).sort(() => Math.random() - 0.5)
  );

  const imagesList1 = Object.fromEntries(
    Object.entries(shuffled).slice(0, 9)
  );
  const imagesList2 = Object.fromEntries(
    Object.entries(shuffled).slice(9, 18)
  );




  for (const [key, value] of Object.entries(imagesList1)) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgPath + value;
    img.alt = key;
    img.title = key;
    div.appendChild(img);
    firsttargetDivContainer.appendChild(div);
  }

  for (const [key, value] of Object.entries(imagesList2)) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgPath + value;
    img.alt = key;
    img.title = key;
    div.appendChild(img);
    secondtargetDivContainer.appendChild(div);
  }

});

$(document).ready(function () {
  $('.logo-slider-1').slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    cssEase: 'linear',
    pauseOnHover: false,
    accessibility: false,
    arrows: false,
    draggable: false,
    swipe: false,
    rtl: true

  });

  $('.logo-slider-2').slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    cssEase: 'linear',
    pauseOnHover: false,
    accessibility: false,
    arrows: false,
    draggable: false,
    swipe: false,
  });

});
