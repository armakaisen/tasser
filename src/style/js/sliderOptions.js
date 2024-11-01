let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider-images img");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  document.querySelector(".slider-images").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);
