// モバイルメニュー切り替え
function toggleMenu() {
  const nav = document.querySelector(".header__main_nav");
  nav.classList.toggle("active");
}

// カルーセル自動切り替え
let currentSlide = 0;
const slides = document.querySelectorAll(".header__hero__carousel-slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);
