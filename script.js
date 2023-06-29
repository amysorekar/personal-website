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
let listElements = document.querySelectorAll(".link");

listElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    if (listElement.classList.contains("active")) {
      listElement.classList.remove("active");
    } else {
      listElements.forEach((listE) => {
        listE.classList.remove("active");
      });
      listElement.classList.toggle("active");
    }
  });
});
// text animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a Student";
  }, 0);
  setTimeout(() => {
    text.textContent = "an Athlete";
  }, 2000);
  setTimeout(() => {
    text.textContent = "a Scientist";
  }, 4000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 6000);

// toggle menu
function toggle() {
  var sec = document.getElementById("sec");
  var nav = document.getElementById("navigation");
  sec.classList.toggle("active");
  nav.classList.toggle("active");
}
