"use strict";


const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");



changeImgBtn.addEventListener("click", function() {

    if (this.textContent == "Before"){
        getImage.src= "img/before.jpg";
        this.textContent = "After";
    }
    else {
        getImage.src= "img/after.jpg";
        this.textContent = "Before";
     }
});