$(document).ready(function () {
  // Handle menu item click event
  $(".menu a").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var targetId = $(this).attr("href"); // Get the target section's ID

    // Scroll smoothly to the target section
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
