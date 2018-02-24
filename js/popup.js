var navLink = document.querySelector(".main-nav__btn");
var navOpen = document.querySelector(".site-nav");

if (navLink && navOpen) {

  navLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    navOpen.classList.add("show");
    navLink.classList.add("main-nav__btn--close");
  });

var navClose = document.querySelector(".main-nav__btn--close");

  navClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    navOpen.classList.remove("show");
    navLink.classList.remove("main-nav__btn--close");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (navOpen.classList.contains("show")) {
        navOpen.classList.remove("show");
      }
      if (navLink.classList.contains("main-nav__btn--close")) {
        navLink.classList.remove("main-nav__btn--close");
      }
    }
  });
}
