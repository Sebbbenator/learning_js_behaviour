"use strict";

const body = document.body;

function updateBackground() {
  const width = window.innerWidth;
  if (width < 640) {
    body.style.background = "lightblue";
  }
  if (width < 640) {
    body.style.background = "purple";
  } else if (width < 760) {
    body.style.background = "yellow";
  } else if (width < 900) {
    body.style.background = "blue";
  } else if (width < 960) {
    body.style.background = "orange";
  } else if (width < 1100) {
    body.style.background = "red";
    } else if (width < 1200) {
    body.style.background = "pink";
  } else if (width < 1300) {
    body.style.background = "green";
  } else {
    body.style.background = "lightgray";
  }
}

// 480, 760, 960, 1200

// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);
