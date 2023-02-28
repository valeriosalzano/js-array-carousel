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
let current = 0;
sliderContent[current].classList.add("showed");

// prev arrow
const prevArrow = document.getElementById("prev-arrow");
prevArrow.addEventListener('click',
    function(){
        sliderContent[current].classList.remove("showed");
        // ciclo infinito
        if (current == 0){
            current = sliderContent.length - 1;
        } else {
            current--;
        }
        sliderContent[current].classList.add("showed");
    }
)

// next arrow
const nextArrow = document.getElementById("next-arrow");
nextArrow.addEventListener('click',
    function(){
        sliderContent[current].classList.remove("showed");
        // ciclo infinito
        if (current == sliderContent.length - 1){
            current = 0;
        } else {
            current++;
        }
        sliderContent[current].classList.add("showed");
    }
)
