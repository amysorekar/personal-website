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
