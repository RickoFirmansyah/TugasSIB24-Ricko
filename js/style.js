const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const itemWidth = document.querySelector('.carousel-item').offsetWidth;

function showSlide(index) {
  const newPosition = -index * itemWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);