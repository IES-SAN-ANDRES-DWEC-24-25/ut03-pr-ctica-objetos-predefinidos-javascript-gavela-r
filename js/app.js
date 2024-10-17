// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let ano = fecha.getFullYear();
  console.log(mes);
  if(dia <= 10){
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
  
  let numeroArray = numero.toString().split('.');
  let numeroString = numeroArray[0];
  let contador = 0;
  let numeroNuevo  = '';
  let parteDecimal = numeroArray[1];
  

  for(let k = numeroString.length-1; k >= 0; --k){
    numeroNuevo = numeroString[k] + numeroNuevo;
    contador++;
    if(contador % 3 === 0 && k !== 0){
      numeroNuevo = '.' + numeroNuevo;
    } 
  }

  if(parteDecimal !== undefined){
    numeroNuevo = numeroNuevo + ',' + parteDecimal; 
  }
  
  if(isNaN(numero)){
    return null;
  }

  return numeroNuevo;
} 


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
  let fechaCadena = fecha.split('/');

  let dia = parseInt(fechaCadena[0]);
  let mes = parseInt(fechaCadena[1])-1;
  let año = parseInt(fechaCadena[2]);

  let fechaUsuario = new Date(año, mes, dia);
  let fechaReyes = new Date(año, 0, 6);
  
  if(fechaUsuario.getDay() === 6 && fechaUsuario.getMonth() === 0){
    return 0;
  }

  if(fechaUsuario > fechaReyes){
    fechaReyes = new Date(año + 1, 0 ,6);
  }

  let milisegundos = fechaReyes.getTime() - fechaUsuario.getTime();
  let dias = Math.ceil(milisegundos / (1000 * 60 * 60 * 24));
  
  
  if(isNaN(fechaUsuario)){
    return null;
  }

  return dias;

}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {

  if(typeof(cadena) != 'string'){
    return null;
  }

  let  acentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
  let  sinAcento = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  for(let k = 0; k < acentos.length; k++){
    if(cadena.includes(acentos[k])){
      cadena = cadena.replace(acentos[k], sinAcento[k])
    }
  }
 

  let cadenaArray = cadena.split(' ');
  let nuevaCadena = '';

  for(let k = 0; k < cadenaArray.length; k++){
    let letras = cadenaArray[k].charAt(0).toUpperCase();
    nuevaCadena += cadenaArray[k].replace(cadenaArray[k].charAt(0), letras);
    
  }
  let primeraLetra = nuevaCadena.charAt(0).toLocaleLowerCase();
  nuevaCadena = nuevaCadena.replace(nuevaCadena[0], primeraLetra)

  if(cadenaArray == ''){
    return '';
  }


  return nuevaCadena;
}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

  if(isNaN(comienzo)){
    return null;
  }

  if(comienzo < 0){
    return null;
  }

  if(comienzo > fin){
    return null;
  }

  return Math.floor(Math.random() * (comienzo - fin +1) + fin);
}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){
  if(!isNaN(cadena)){
    return false;
  }

  let cadenaReverse = '';
  let cadenaArray = cadena.split(' ').join('').toLowerCase();
  console.log(cadenaArray);
  for(let k = 0; k < cadenaArray.length; k++){
    cadenaReverse = cadenaArray.split('').reverse().join('').toLowerCase();
    console.log(cadenaReverse);
    if(cadenaReverse === cadenaArray){
      return true;
    }else{
      return false;
    }
  }

  if(cadenaArray === ''){
    return false;
  }

 
  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
