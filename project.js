//Define the slideshow elements
const slideshowSlide = document.querySelector(".slideshow-slide");
const slideshowImages = document.querySelectorAll(".slideshow-slide img");

//Define buttons using JS
const prevButt = document.querySelector("#prevButt");
const nextButt = document.querySelector("#nextButt");

//Make a variable to keep track of place in slideshow
let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";

//Add event listeners for buttons
nextButt.addEventListener("click", function(e) {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevButt.addEventListener("click", function(e) {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
});

//Test the transition of the slideshow
slideshowSlide.addEventListener("transitionend", function(e) {
  console.log("working");
});
