const navToggle = document.querySelector(".bars");
const show = document.querySelector(".show");

navToggle.addEventListener("click", () => {
  show.classList.toggle("active");
});
