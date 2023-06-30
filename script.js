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

// pop up menu
function toggleDropdown(type) {
  var dropdown = document.getElementById("dropdown");

  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
  } else {
    dropdown.classList.add("active");
  }
}

function showBubble(content) {
  var bubble = document.getElementById("bubble");
  var bubbleContent = document.getElementById("bubble-content");
  var dropdownContent = document.getElementById("dropdown-content");

  bubbleContent.textContent = content;
  bubble.classList.add("active");
  dropdownContent.classList.add("no-border");
}

function closeBubble() {
  var bubble = document.getElementById("bubble");
  var dropdownContent = document.getElementById("dropdown-content");

  bubble.classList.remove("active");
  dropdownContent.classList.remove("no-border");
}
