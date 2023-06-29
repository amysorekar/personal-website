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

// text animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a student";
  }, 0);
  setTimeout(() => {
    text.textContent = "an athlete";
  }, 2000);
  setTimeout(() => {
    text.textContent = "a scientist";
  }, 4000);
  setTimeout(() => {
    text.textContent = "a chef";
  }, 6000);
  setTimeout(() => {
    text.textContent = "a musician";
  }, 8000);
  setTimeout(() => {
    text.textContent = "a son";
  }, 10000);
};

textLoad();
setInterval(textLoad, 12000);

// toggle menu
function toggle() {
  var sec = document.getElementById("sec");
  var nav = document.getElementById("navigation");
  sec.classList.toggle("active");
  nav.classList.toggle("active");
}
