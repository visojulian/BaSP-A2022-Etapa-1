console.log('--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');
function suma(num1, num2) {
    return num1 + num2;
}
var result = suma(36, 12);
console.log(result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');
function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: parameter is not number');
        return NaN;
    }
    return num1 + num2;
}
var result = suma(1, 1);
console.log(result);

// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(num) {
    if (Math.round(num) === num) {
        return true;
    }
    return false;
}

// d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');
function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: parameter is not number');
        return NaN;
    }
    return validateAndRound(num1) + validateAndRound(num2);
}
var result = suma(23, 1);
console.log(result);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validateAndRound(num) {
    if (!validateInteger(num)) {
        alert('Number is not integer. Rounding...');
        return Math.round(num);
    }
    return num;
}

