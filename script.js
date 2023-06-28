// sliding scroll
$(document).ready(function () {
  $(".menu a").click(function (event) {
    event.preventDefault();
    var targetId = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetId).offset().top,
      },
      800
    );
  });
});

// accordion menu
const boxItem = document.querySelectorAll(".main_box li");
const box = document.querySelectorAll(".box");
let getSlide = boxItem.length - 1;
let slideCalc = 0.001 / getSlide + "%";
box.forEach((e) => {
  e.addEventListener("click", function () {
    box.forEach((box) => {
      box.style.width = slideCalc;
      box.classList.remove("active");
    });
    e.classList.add("active");
  });
});

// text animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Student";
  }, 0);
  setTimeout(() => {
    text.textContent = "Athlete";
  }, 2000);
  setTimeout(() => {
    text.textContent = "Scientist";
  }, 2000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 12000);
