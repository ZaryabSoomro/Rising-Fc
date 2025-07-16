document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Default behavior ko prevent karo
      const targetSection = document.querySelector(this.getAttribute('href'));

      // Smooth scroll using JavaScript
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll effect
        block: 'start' // Section ke top se start kare
      });
    });
  });
  
  let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }

    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

// Select the button
const backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to top when clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
