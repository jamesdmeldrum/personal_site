let lastScrollPosition = 0;
let windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition >= windowHeight/3) {
    // Scrolling up
    document.querySelector("header").classList.add("visible");
  } else {
    // Scrolling up
    document.querySelector("header").classList.remove("visible");
  }

  lastScrollPosition = currentScrollPosition;
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this link is pointing to an anchor on the same page
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

