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

  if (content === "Smoothie King") {
    bubbleContent.textContent = "Information about Smoothie King.";
  } else if (content === "BP Gas") {
    bubbleContent.textContent = "Information about BP Gas.";
  } else if (content === "OrangeTheory Fitness") {
    bubbleContent.textContent = "Information about OrangeTheory Fitness.";
  } else if (content === "Baylor College of Medicine") {
    bubbleContent.textContent = "Information about Baylor College of Medicine.";
  } else if (content === "UC San Diego") {
    bubbleContent.textContent = "Information about UC San Diego.";
  } else if (content === "MD Anderson") {
    bubbleContent.textContent = "Information about MD Anderson.";
  }

  bubble.classList.add("active");
  dropdownContent.classList.add("no-border");
}

function closeBubble() {
  var bubble = document.getElementById("bubble");
  var dropdownContent = document.getElementById("dropdown-content");

  bubble.classList.remove("active");
  dropdownContent.classList.remove("no-border");
}
