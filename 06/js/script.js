"use strict";


const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");



getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "gammel"){
        getWordElem.style.fontSize = "10rem";
        this.textContent = "kan ik se";
        getWordElem.style.color = "cyan";
        getWordElem.style.fontFamily = "Comic Sans MS";
    }
    else {
        getWordElem.style.fontSize = "4rem";
        this.textContent = "Nvm";
        getWordElem.style.color = "black";
        getWordElem.style.fontFamily = "Arial";

     }
});