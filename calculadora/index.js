import { addition, transformFormat } from './utils/addition.js';

alert('¡Bienvenido a la calculadora PRO!');

let calculadoraPro = () => {
    let userResponse;

    do {
        let operations = getNumbers();
        if (operations.length === 1) {
            console.log(
                'La raiz cuadrada de ' +
                    operations +
                    ' es: ' +
                    squareRoot(operations)
            );
        } else {
            console.log(
                'Los números insertados son ' +
                    operations +
                    '.\nA continuación le aparecerán las operaciones realizadas:'
            );
            console.log('El resultado de la suma es: ' + addition(operations));
            console.log(
                'El resultado de la resta es: ' + subtraction(operations)
            );
            console.log(
                'El resultado de la multiplicación es: ' +
                    multiplication(operations)
            );
            console.log(
                'El resultado de la división es: ' + division(operations)
            );
        }
        userResponse = prompt('¿Desea relizar otra operación? Escriba «si».');
    } while (userResponse.toLowerCase() === 'si');
    alert('¡Gracias por utilizar la calculadora PRO, hasta pronto!');
};

/*function transformFormat(value) {
    if (Number.isInteger(value)) {
        return Number(value).toFixed(0);
    } else {
        return value.toFixed(3);
    }
}*/

let getNumbers = () => {
    let numberOne = prompt(
        'Por favor introduce el primer número para realizar un cálculo.'
    );

    if (numberOne === '') {
        return getNumbers();
    } else if (isNaN(Number(numberOne))) {
        alert(
            'Lo que has introducido no es un número. Por favor introduce sólo números.'
        );
        return getNumbers();
    }
    const userNumbers = [];
    userNumbers.push(Number(numberOne));

    let number;
    do {
        number = prompt(
            'Por favor introduce otro número para realizar un cálculo. Para realizar los cálculos, presiona ENTER.'
        );
        if (isNaN(Number(number))) {
            alert(
                'Lo que has introducido no es un número. Por favor introduce sólo números.'
            );
        } else if (number !== '') {
            userNumbers.push(Number(number));
        }
    } while (number !== '');
    return userNumbers;
};

function squareRoot(firstNum) {
    return transformFormat(Math.sqrt(firstNum));
}

/*function addition(array) {
    let accumulate = 0;
    for (let i in array) {
        accumulate = accumulate + array[i];
    }
    return transformFormat(accumulate);
}*/

function subtraction(array) {
    let accumulate = 0;
    for (let i in array) {
        if (i === '0') {
            accumulate = accumulate + array[0];
        } else {
            accumulate = accumulate - array[i];
        }
    }
    return transformFormat(accumulate);
}

function multiplication(array) {
    let accumulate = 0;
    for (let i in array) {
        if (i === '0') {
            accumulate = accumulate + array[0];
        } else {
            accumulate = accumulate * array[i];
        }
    }
    return transformFormat(accumulate);
}

function division(array) {
    let accumulate = 0;
    for (let i in array) {
        if (i === '0') {
            accumulate = accumulate + array[0];
        } else {
            accumulate = accumulate / array[i];
        }
    }
    return transformFormat(accumulate);
}

calculadoraPro();
