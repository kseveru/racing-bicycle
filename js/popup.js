var navMain = document.querySelector(".site-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navToggle.classList.toggle("main-nav__toggle--opened");
  navMain.classList.toggle("site-nav--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (navToggle.classList.contains("main-nav__toggle--opened")) {
      navToggle.classList.remove("main-nav__toggle--opened");
      navMain.classList.remove("site-nav--opened");
    }
  }
});
