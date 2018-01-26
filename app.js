/*
// indice + 33 módulo de 26 = posición Nueva letra
(0+33)%26 //---> 7 (A = H)
(4+33)%26 //---> 11 (E = L) 

((índice - 33) módulo 26) + 26 = Posición antigua Letra
(0-33)%26 //---> -0 (H = A)
(11-33)%26 //--> -22 --> -22 + 26 = 4 (L = E)

(79+65-33)%26+65 //  72 --> inverso

' ' = 32

*/

// CIFRAR //

// número del cifrado, es una variable por si se me ocurre pedirlo en un prompt
function cipher() {
  var num = 33;
  do {
    // pide el mensaje
    var textInit = prompt('Ingresa Mensaje');
    // itera en el mensaje
    for (var i = 0; i < textInit.length; i++) {
      // si un pompt al índice indicado es != a NaN, píde
      // otro mensaje (no acepta numeros)
      if (!isNaN(parseInt(textInit[i]))) {
        textInit = prompt('Mensaje sin numeros por favor');
      }
    }
  } while ((!textInit));

  // Paso el msje a mayúsculas
  var textUpCase = textInit.toUpperCase();
  var textArr = [];
  // Itero en el msje en mayúsculas
  for (var i = 0; i < textUpCase.length; i++) {
    // si ese indice es un espacio vacío, mételo a textArr
    if (textUpCase[i] === ' ') {
      textArr.push([' ']);
    }
    // si no, itera entre números del 65 al 90
    for (var j = 65; j <= 90; j++) {
      // si el ASCII de la letra es igual al número J
      if (textUpCase[i] === String.fromCharCode([j])) {
        // Usa la fórmula del cifrado y ponlo en textArr
        textArr.push(([j] - 65 + num) % 26 + 65);
      }
    }
  }
  // variable contenedora de letras codificadas
  var textConvert = [];
  // itera en textArr
  for (var number = 0; number < textArr.length; number++) {
    // si el índice es = a espacio, mételo a textConvert
    if (textArr[number] === ' ') {
      textConvert.push(textArr[number]);
    // si no, cámbialo de letra a número.
    } else {
      textConvert.push(String.fromCharCode(textArr[number]));
    }
  }
  var textJoin = textConvert.join('');

  return textJoin;
}

//  CIFRAR // 

//  DESCIFRAR // 
// OVSH JVTV -- texto prueba

// número del descifrado, es una variable por si se me ocurre pedirlo en un prompt

function decipher() {
  var num = 33;

  do {
    // pide el mensaje
    var textEncrypted = prompt('Ingresa Mensaje Cifrado');
    // itera en el mensaje
    for (var i = 0; i < textEncrypted.length; i++) {
      // si un pompt al índice indicado es != a NaN, píde
      // otro mensaje (no acepta numeros)
      if (!isNaN(parseInt(textEncrypted[i]))) {
        textEncrypted = prompt('Mensaje sin numeros por favor');
      }
    }
  } while ((!textEncrypted));

  // Paso el msje a mayúsculas
  var textEncryptedUpCase = textEncrypted.toUpperCase();
  var textEncryptedArr = [];
  // Itero en el msje en mayúsculas
  for (var i = 0; i < textEncryptedUpCase.length; i++) {
    // si ese indice es un espacio vacío, mételo a textEncryptedArr
    if (textEncryptedUpCase[i] === ' ') {
      textEncryptedArr.push([' ']);
    }
    // si no, itera entre números del 65 al 90
    for (var j = 65; j <= 90; j++) {
      // si el ASCII de la letra es igual al número J
      if (textEncryptedUpCase[i] === String.fromCharCode([j])) {
        // Usa la fórmula de descifrado y ponlo en textEncryptedArr
        textEncryptedArr.push(((j) + 65 - num) % 26 + 65);
      }
    }
  }

  // variable contenedora de letras codifivadas
  var textDecoded = [];

  // itera en textEncryptedArr
  for (var number = 0; number < textEncryptedArr.length; number++) {
    // si el índice es = a espacio, mételo a textDecoded
    if (textEncryptedArr[number] === ' ') {
      textDecoded.push(textEncryptedArr[number]);
    // si no, cambialo de número a letra
    } else {
      textDecoded.push(String.fromCharCode(textEncryptedArr[number]));
    }
  } 
  var textDecodedJoin = textDecoded.join('');
  var textDecodedToSend = textDecodedJoin.charAt(0) + (textDecodedJoin.slice(1, textDecodedJoin.length)).toLowerCase();

  return textDecodedToSend;
}

//  DESCIFRAR // 