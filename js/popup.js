var navMain = document.querySelector(".site-nav");
var navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("nojs");

  navToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    navToggle.classList.toggle("main-nav__toggle--opened");
    navMain.classList.toggle("site-nav--opened");
  });
