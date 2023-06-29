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
