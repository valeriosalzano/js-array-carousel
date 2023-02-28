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
const sliderContent = document.querySelectorAll(".slider img");
// rendo visibile la prima immagine
let current = 0;
sliderContent[current].classList.add("showed");


const thumbnailsDom = document.querySelector(".thumbnails");
// scrivo dinamicamente tutte le thumbnails (sfrutto il ciclo alla riga 10)
thumbnailsDom.innerHTML = sliderPrint;

// creo un array che contenga i collegamenti ai tag img di thumbnails
const thumbnailsContent = document.querySelectorAll(".thumbnails img");
// rendo evidenziata la prima immagine
thumbnailsContent[current].classList.add("highlight");

// prev arrow
const prevArrow = document.getElementById("prev-arrow");
prevArrow.addEventListener('click',
    function(){
        sliderContent[current].classList.remove("showed");
        thumbnailsContent[current].classList.remove("highlight");
        // ciclo infinito
        if (current == 0){
            current = sliderContent.length - 1;
        } else {
            current--;
        }
        sliderContent[current].classList.add("showed");
        thumbnailsContent[current].classList.add("highlight");
    }
)

// next arrow
const nextArrow = document.getElementById("next-arrow");
nextArrow.addEventListener('click',
    function(){
        sliderContent[current].classList.remove("showed");
        thumbnailsContent[current].classList.remove("highlight");
        // ciclo infinito
        if (current == sliderContent.length - 1){
            current = 0;
        } else {
            current++;
        }
        sliderContent[current].classList.add("showed");
        thumbnailsContent[current].classList.add("highlight");
    }
)