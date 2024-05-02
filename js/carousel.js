// ==== CAROUSEL ACCUEIL =====

const carouselItems = document.querySelectorAll(".carouselExo");
let currentSlide = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide =
        (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentSlide);
}

window.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
});

document.querySelector(".prev-btn").addEventListener("click", previousSlide);
document.querySelector(".next-btn").addEventListener("click", nextSlide);