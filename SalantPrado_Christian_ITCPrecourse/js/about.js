const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cityMaps = document.querySelectorAll (".gallery-img");
let currentlySelected = 0;

prevButton.addEventListener('click', function() {
   cityMaps[currentlySelected].classList.remove("active");
   currentlySelected--;
   cityMaps[currentlySelected].classList.add("active");
   nextButton.disabled = false;

   if (currentlySelected === 0) {
    prevButton.disabled = true;
}   
})

nextButton.addEventListener('click', function() {
    cityMaps[currentlySelected].classList.remove("active");
    currentlySelected++;
    cityMaps[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if (cityMaps.length === currentlySelected + 1) {
        nextButton.disabled = true;
    }
})