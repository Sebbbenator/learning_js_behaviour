"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });


const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {

    if (this.textContent == "Ej jeg er godt nok sulten") {
      this.innerHTML = "<strong>Så det nok tid til kebab igen.</strong>";
    } else {
      this.innerHTML = "Ej jeg er godt nok sulten";
    }
});

const getWordElem2 = document.querySelectorAll("#word")[1];

getWordElem2.addEventListener("click", function() {

    if (this.textContent == "Fleggaard") {
      this.innerHTML = "<strong>Det er der jeg handler!</strong>";
    } else {
      this.innerHTML = "Fleggaard";
    }
});