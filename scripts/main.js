// Toggle modal
const orderServiceBtn = document.getElementById("orderServiceBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalMenu = document.getElementById("modalMenu");

orderServiceBtn.addEventListener("click", () => {
  modalMenu.classList.add("is-open");
});

closeModalBtn.addEventListener("click", () => {
  modalMenu.classList.remove("is-open");
});

// Toggle mobile menu
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
