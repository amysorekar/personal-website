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
