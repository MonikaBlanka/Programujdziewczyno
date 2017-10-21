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

});
