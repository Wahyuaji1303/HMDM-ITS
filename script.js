// Scroll ke section
document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.goto);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Carousel otomatis
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let currentSlide = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * (slides[0].offsetWidth + 15)}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

setInterval(nextSlide, 3000); // otomatis setiap 3 detik

// Tombol manual
document.querySelector(".carousel-btn.left").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});
document.querySelector(".carousel-btn.right").addEventListener("click", nextSlide);
 