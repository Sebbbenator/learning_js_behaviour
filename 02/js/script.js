"use strict"


const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const discoColorBtn = document.getElementById("discoColorBtn");
const body = document.body;


nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})

lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})

discoColorBtn.addEventListener("click", () => {
  body.style = "background: #30d81aff";
});
