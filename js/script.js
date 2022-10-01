const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

//Scales
const levels = document.querySelectorAll('.skills__achievements-level'),
      scales = document.querySelectorAll('.skills__achievements-scale span');

levels.forEach((item,i) => {
  scales[i].style.width = item.innerHTML;
});
