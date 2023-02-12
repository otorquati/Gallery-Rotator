const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

/* variável d altera a rotação conforme o clique nos botões */
let d =-1;
prevEl.addEventListener("click", ()=> {
  x = x + 45;
  d=1;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", ()=> {
  x = x - 45;
  d=-1;
  clearTimeout(timer)
  updateGallery();
});

function updateGallery(){
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(()=>{
    x = x + (45*d);
    updateGallery()
  }, 3000)
}

updateGallery()

