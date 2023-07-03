// pop up menu
function toggleDropdown(type) {
  var dropdownStories = document.getElementById("dropdown-stories");
  var dropdownExperience = document.getElementById("dropdown-experience");

  if (type === "stories") {
    dropdownExperience.classList.remove("active");
    dropdownStories.classList.toggle("active");
  } else {
    dropdownStories.classList.remove("active");
    dropdownExperience.classList.remove("active");
  }
}

function showBubble(content) {
  var bubble = document.getElementById("bubble");
  var bubbleContent = document.getElementById("bubble-content");
  var dropdownContent = document.getElementById("dropdown-content");

  if (content === "xc") {
    bubbleContent.textContent = "xc stuff";
  } else if (content === "track") {
    bubbleContent.textContent = "track stuff";
  } else if (content === "lax") {
    bubbleContent.textContent = "lax stuff";
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

// open menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
}
