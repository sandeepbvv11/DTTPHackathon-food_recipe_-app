const icon_array=['peanuts','seafood','sesame','honey','eggplant','milk','cheese','olive']
for(let i=0;i<icon_array.length;i++){
const icon = document.getElementsByClassName(icon_array[i]);

// Add click handler to first match
icon[0].addEventListener('click', function() {

// Toggle class
icon[0].classList.toggle('opaque');

});
}