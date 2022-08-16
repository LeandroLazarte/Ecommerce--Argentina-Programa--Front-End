/*function bucle() {
   let resultado = "";
   let i = 0;

   do {
      i = i + 1;
      resultado = resultado + i;
   } while (i < 5);
   console.log(resultado)
}
bucle();
*/
/*
//Array
//Obtiene los elementos que cumplen con una condicion especifica
function arreglos(){
   let arreglo = [10,11,3,20,5];
   let mayorQueDiez = arreglo.filter(element=>element>=10);
   console.log(mayorQueDiez);
}
arreglos();

//Obtiene al menos un elemento que cumple con dicha condicion
function arreglosDos(){
   let arreglo = [10,11,3,20,5];
   let mayorQueDiez = arreglo.find(element=>element>10);
   console.log(mayorQueDiez);
}

arreglosDos();

//Obtiene un valor especifico que se encuentra dentro del arreglo

function arregloTres(){
   let arreglo = [10,11,3,20,5];
   let incluyeVeinte = arreglo.includes(20);
   console.log(incluyeVeinte);
}

arregloTres();

//Obtiene el indice de un valor especifico
function arregloCuatro(){
   let arreglo = [10,11,3,20,5];
   let indiceTres = arreglo.indexOf(3);
   console.log(indiceTres);
}

arregloCuatro();*/



//Busqueda secuencial de un arreglo
var arreglo = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
function sequentialSearch(element, arreglo) {
   for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == element) {
         return i;
      }
   }
   return -1;
}

sequentialSearch("a", arreglo);

//Ordenamiento
const equipos = ['Real Madrid', 'Juventus', 'Bayer Munich', 'Manchester Utd'];
equipos.sort()

var numeros = [3, 2, 5, 4, 1];
numeros.sort(function (a, b) {
   return a - b;
})

//DOM
const existDiv = document.getElementById('container');
const newDiv = document.createElement('div');
existDiv.appendChild(newDiv);

//JSON
/*
var JSONObj = {};
var JSONObj = new Object();
var JSONObj = {"NombreLibro":"El Hacedor","Precio": 500}
*/

//Obtener datos de un JSON
fetch('http://127.0.0.1:5500/pasajeros.json')
   .then((response) => response.json())
   .then((pasajeros) => {
      const nombreDePasajeros = pasajeros.map((pasajero) => pasajero.Nombre);
      console.log(nombreDePasajeros);
   })

   const navMenu = document.querySelector('#navMenu');
   navMenu.addEventListener("click", ()=> {
      navMenu.classList.toggle("active");
   })
