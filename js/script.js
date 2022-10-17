// Controllo che carica
console.log("Slider app Loaded")

// Definisco le mie variabili 
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const photoContainer = document.querySelector(".photo-container");
const aside = document.querySelector(".aside");
const imagesArray = [`01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`];
let imagesTags = ``;
let imagesCounter = 0;



// Itero l'array che contiene le desinenze delle immagini e scrivo un tag IMG con la desinenza consecutiva 
for(let i = 0; i < imagesArray.length; i++){
  imagesTags += `<img src="./consegna/img/${imagesArray[i]}" alt="" class="item">`;
}

// Stampo la serie di img dentro al foto container
photoContainer.innerHTML = imagesTags;

// Mi prendo la HTML collection di tutti gli elementi con la classe item che nasconde le foto 
const allImages = document.getElementsByClassName("item");

// Al primo elemento di quella collection aggiungo la classe necessaria per mostrare la prima foto quando carica la pagina. 
allImages[0].classList.add("active");


// Quando clicco la freccia in su
arrowUp.addEventListener("click", function(){

  // Prima rimuovo la classe active alla foto attualmente mostrata
  allImages[imagesCounter].classList.remove("active");

  // Poi controllo se sono arrivato alla fine della collezione di foto, allora ri-inizilizzo il contatore e mostro la 
  // foto corrispondente
  if(imagesCounter + 1 === imagesArray.length){
    imagesCounter = 0;
    allImages[imagesCounter].classList.add("active")
  }
  // Altrimenti aggiungo 1 al contatore e mostro quella foto
  else{
    allImages[++imagesCounter].classList.add("active");
  }
});


// Quando clicco la freccia in giù
arrowDown.addEventListener("click", function(){

  // Anche qui nascondo prima la foto attualmente mostrata
  allImages[imagesCounter].classList.remove("active");

  // Se sono arrivato alla fine, resetto il contatore al valore massimo dell'array -1 in quanto la posizione 
  // dell'immagine è a indice 0, ma il metodo length mi ritorna un valore a indice 1.
  if(imagesCounter === 0){
    imagesCounter = imagesArray.length - 1;
    allImages[imagesCounter].classList.add("active")
  }
  // Altrimenti sottraggo uno al contatore e mostro la foto corrispondente
  else{
    allImages[--imagesCounter].classList.add("active");
  }

})