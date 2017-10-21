'use strict';

console.log("warsztaty");

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      // mam 100% pewnosci ze caly html sie wczytal
var menuList = document.querySelectorAll(".nav-list > li"); //wyszukaj bezposrdnie dzieci
console.log(menuList);

for(var i=0 ; i < menuList.length; i++) {
	menuList[i].addEventListener("mouseover", function() {
		// console.log("hura");
//this to taka zmienna ktora jest tym na co nastawione jest czuwanie
	this.style.fontSize = "7px";
	var dropdown =	this.querySelector(".dropdown");
	// console.log(dropdown);
	if( dropdown != null ) {
	dropdown.style.display = "block";
		}		
	})
}


for(var i=0 ; i < menuList.length; i++) {
	menuList[i].addEventListener("mouseout", function() {
//this to taka zmienna ktora jest tym na co nastawione jest czuwanie
	var dropdown =	this.querySelector(".dropdown");
	// console.log(dropdown);
	if( dropdown != null ) {
	dropdown.style.display = "none";
		}		
	})
}


/// zadanie 2
	var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    console.log(buttons[0].previousElementSibling);
	for(var i=0 ; i <buttons.length; i++) {
	     buttons[i].addEventListener('click', function() {
		      console.log(this); // To powinnaś zobaczyć w konsoli po kliknięciu w pierwszy przycisk 


			var textArea = this.previousElementSibling;
		 //     textArea.style.display = 'block';
		 //     this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';


	  		// Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
	      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
	      // warunek po jednej albo po drugiej stronie kresek musi być spełniony

	      if (textArea.style.display === 'none' || textArea.style.display === '') {

	        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
	        textArea.style.display = 'block';
	        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
	      } else {

	        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
	        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
	        textArea.style.display = 'none';
	        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
	      }
		 });
	}










 
});
