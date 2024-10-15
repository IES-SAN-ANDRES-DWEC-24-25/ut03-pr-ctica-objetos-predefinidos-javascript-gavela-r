// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let ano = fecha.getFullYear();

  if(dia < 10){
    dia = dia + '0';
  }else{
    dia;
  }

  if(mes < 10){
    mes = mes + '0';
  }else{
    mes;
  }

  return `${dia}/${mes}/${ano}`;
  
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
  let area = 0;
  area = Math.PI * Math.pow(radio, 2);
  if(isNaN(radio)){
    return null;
  }
  if(radio == 0){
    area = 0;
  }
  if(radio < 0){
    return null;
  }
  return Number(area.toFixed(2));
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  let count = 0;
  let vocales = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í', 'ó', 'ú'];
  
  if(typeof cadena !== 'string'){
    count = -1;
  }
  for(let k = 0; k < cadena.length; k++){
      if(vocales.includes(cadena[k])){
        count++;
      }else if(!isNaN(cadena[k]) && cadena[k] !== ' '){
        count = -1;
      }
  }
  return count;
}
  
  
// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  let fahrenheit = 0;

  fahrenheit = (celsius * 9/5) + 32;

  if(isNaN(celsius)){
    return null;
  }

  return Number(fahrenheit.toFixed(2));
}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {
  
  let numeroString = numero.toString();
  let contador = 0;
  let numeroNuevo  ='';
  for(let k = numeroString.length-1; k >= 0; --k){
    numeroNuevo = numeroString[k] + numeroNuevo;
    contador++;
    if(contador % 3 === 0 && k !== 0){
      numeroNuevo = '.' + numeroNuevo;
    }
    
  }
  if(isNaN(numero)){
    return null;
  }
  return numeroNuevo;
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
 
}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
