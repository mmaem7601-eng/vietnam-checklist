const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentPage = document.getElementById("currentPage");

let activeSlide = Number(localStorage.getItem("vietnam-active-slide")) || 0;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });

  currentPage.textContent = index + 1;

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === slides.length - 1 ? "처음으로" : "다음";

  localStorage.setItem("vietnam-active-slide", index);
}

prevBtn.addEventListener("click", () => {
  if (activeSlide > 0) {
    activeSlide -= 1;
    showSlide(activeSlide);
  }
});

nextBtn.addEventListener("click", () => {
  if (activeSlide < slides.length - 1) {
    activeSlide += 1;
  } else {
    activeSlide = 0;
  }

  showSlide(activeSlide);
});

const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');

checkboxes.forEach((checkbox) => {
  const savedValue = localStorage.getItem(`vietnam-check-${checkbox.dataset.id}`);

  if (savedValue === "true") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    localStorage.setItem(
      `vietnam-check-${checkbox.dataset.id}`,
      checkbox.checked
    );
  });
});

showSlide(activeSlide);
