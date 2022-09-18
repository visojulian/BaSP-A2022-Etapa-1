console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

console.log('-Exercise 1.a:');
var firstNum = 10;
var secondNum = 36;
var result = firstNum + secondNum;
console.log(result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b:');
var firstName = 'Julian';
var lastName = 'Freeman';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('-Exercise 1.c:');
var city = 'Rosario';
var playerName = 'Messi';
var length = (city + playerName).length;
console.log(length);