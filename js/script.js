// Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Slider---->

// Tabs

let tabsBtn = document.querySelectorAll(".tabs-item-btn");
let tabsContent = document.querySelectorAll(".tabs-content");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("tabs-item-btn-active");
    });
    e.currentTarget.classList.add("tabs-item-btn-active");

    tabsContent.forEach(function (element) {
      element.classList.remove("tabs-content-active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-content-active");
  });
});

// Tabs---->

// Accordion
new Accordion("#accordion", {
  elementClass: "questions__item",
  triggerClass: "questions__item-button",
  panelClass: "questions-panel",
  activeClass: "questions-item-active",
});

// Burger

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");

  menu.classList.toggle("header__nav-active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger-active");

    menu.classList.remove("header__nav-active");

    document.body.classList.remove("stop-scroll");
  });
});

// Search

let searchButton = document.querySelector(".header-search");
let activeSearch = document.querySelector(".form__search");
let closeButton = document.querySelector(".btn-close");

searchButton.addEventListener("click", function () {
  activeSearch.classList.toggle("form__search-active");
});

closeButton.addEventListener("click", function () {
  activeSearch.classList.remove("search__block-active");
});
