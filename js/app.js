//stringi i liczby
console.log("dziala!")
var myCos = 5;
console.log(myCos)
console.log("10ngrn");

// zmienne sa po to by przechowywac
var xx = "34";
console.log(xx+1);

//wartosci logiczne
var prawda = true;
var falsz = false;

console.log(prawda);  // pokazuje w konsoli w chromie

//sredniki nie sa obowiazkowe ale sa WAZNE bo urzadzenia zmiejszajace!!!!

//Tablice
var tablica = [1,2,3];
console.log(tablica);

//indeksy indeksujemy od zera. ile jest elementow? 3
// na jakiej pozycji jest liczba 2? na pierwszej (bo liczymy od zera, tak jak pietra w budynku)

console.log(tablica[1]);

//pobieranie dlugosci tablicy
console.log (tablica.length);
var tablica2 = ["jablko", "gruszka", 5, true, [1, 3, 5] ];
console.log(tablica2);
console.log(tablica2[1]);

//funkcje sa po to, by cos robic. SOKOWIROWKA.
function wypisywanie( owoc ) {  //owoc to w tym przypadku zmienna var owoc = "marchewka"
	console.log("moja funkcja " + owoc)  //plus to dodanie stringu
	var sok = "miksowanie" + owoc;
	return sok;
}

var otrzymanySok = wypisywanie("marchewka");
console.log(otrzymanySok)

wypisywanie( "marchewka" ); //uruchamianie funkcji / sokowirowki
wypisywanie( "gruszka" );
wypisywanie( "jabłko" );


//instrukcje warunkowe. dwa znaki == to znaczy rowna sie

function isRain(){
	console.log("sprawdzam pogode");
// algorytm tu sie znjduje
	return true;
}

var czyPada = true;
if ( czyPada ){
console.log("wez parasol")
} else {
	console.log("wez okulary")
}

//petle
for(var i = 0; i < 100; i++ ) {
	console.log("czesc", i )
	isRain();
}

var imie = "Monika";
console.log(imie);
var tablica = [ "Marta", "Marysia", "Agnieszka", "Monika", "njfse" ];
console.log(tablica[1]);

var l1 = 4;
var l2 = 100;

if ( l1 > l2 ){
	console.log("Hurra")
} else {
	console.log("nie")
}

for (var i = 0; i< tablica.length; i++) {
	console.log("imię", tablica[i]);
}
//DOM Api  Document Object Model

var ppp = document.querySelector