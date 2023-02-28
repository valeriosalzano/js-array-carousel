// genero l'array con le immagini
const imgArray = [];
for (i=0; i<5; i++){
    imgArray[i]=`<img src="img/0${i+1}.webp" alt="immagine ${i+1}">`;
};

const sliderDom = document.querySelector(".slider");

// scrivo dinamicamente tutte le img nello slider
let sliderPrint = "";
for ( i=0; i<imgArray.length; i++) {
    sliderPrint += imgArray[i];
}
sliderDom.innerHTML = sliderPrint;

// creo un array che contenga i collegamenti ai tag img di slider 
const sliderContent = document.querySelectorAll("img");
// rendo visibile la prima immagine
sliderContent[0].classList.add("current");

