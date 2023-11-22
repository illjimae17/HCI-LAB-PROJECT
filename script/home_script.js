document.getElementById("registerBtn").addEventListener("click", function () {
  window.location.href = "registerPage.html";
});
document.getElementById("newsBtn").addEventListener("click", function () {
  window.location.href = "newsPage.html";
});
document.getElementById("tourneyBtn").addEventListener("click", function () {
  window.location.href = "tourneyPage.html";
});

const carousel = document.querySelector("[data-carousel]");
const slides = document.querySelectorAll("[data-slides] > .slides");
const prevButton = document.querySelector('[data-carousel-button="prev"]');
const nextButton = document.querySelector('[data-carousel-button="next"]');
let currentSlide = 0;

const hideAllSlides = () => {
  slides.forEach((slide) => slide.removeAttribute("data-active"));
};

const showSlide = (index) => {
  hideAllSlides();
  slides[index].setAttribute("data-active", "");
};

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
