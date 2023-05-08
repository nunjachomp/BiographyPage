const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const amoreGalleryImgs = document.querySelectorAll (".gallery-img");
let currentlySelected = 0;

prevButton.addEventListener('click', function() {
   amoreGalleryImgs[currentlySelected].classList.remove("active");
   currentlySelected--;
   amoreGalleryImgs[currentlySelected].classList.add("active");
   nextButton.disabled = false;

   if (currentlySelected === 0) {
    prevButton.disabled = true;
}   
})

nextButton.addEventListener('click', function() {
    amoreGalleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++; //currentlySelected = currentlySelected + 1
    amoreGalleryImgs[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if (amoreGalleryImgs.length === currentlySelected + 1) {
        nextButton.disabled = true;
    }
})