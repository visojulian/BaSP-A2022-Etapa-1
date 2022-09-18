console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');
var upperCase = 'Lionel Messi from Rosario'.toUpperCase();
console.log(upperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');
var sayHi = 'My name is John Doe';
var shortString = sayHi.substring(0, 5);
console.log(shortString);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');
var lorem = 'Aliquam vitae tellus posuere';
var finalChars = lorem.substring(lorem.length - 3);
console.log(finalChars);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');
var ipsum = 'sagittis non. Nam sagittis, justo ut condimentum conseq';
var upperAndLower = ipsum.substring(0, 1).toUpperCase() + ipsum.substring(1).toLowerCase();
console.log(upperAndLower);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');
var regularString = 'justo ut condimentum conseq';
var whiteSpacePos = regularString.indexOf(' ');
console.log(whiteSpacePos);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');
var str = 'sagittiSJUsto utcondIMENTUM';
var newStr = str.substring(0, 1).toUpperCase() +
    str.substring(1, str.indexOf(' ')).toLowerCase() + ' ' +
    str.substring(str.indexOf(' ') + 1, str.indexOf(' ') + 2).toUpperCase() +
    str.substring(str.indexOf(' ') + 2).toLowerCase();
console.log(newStr);
