"use strict";
let index = 0;
let images = document.getElementsByClassName("image");
let dots = document.getElementsByClassName("dot");

show_image(index);
function show_image(n) {
  index += n;

  for (n = 0; n < images.length; n++) {
    images[n].style.display = "none";
  }
  for (n = 0; n < dots.length; n++) {
    dots[n].className = dots[n].className.replace(" active", "");
  }
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  dots[index].className += " active";
}
