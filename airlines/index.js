import { getName } from './utils/fairlines';

const flights = [
    { id: 0, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 1, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 2, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 3, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 4, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 5, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 6, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 7, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 8, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 9, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

/* let getName = () => {
    const name = prompt('Por favor, introduzca su nombre.');
    if (name === '') {
        return getName();
    }
    alert('¡' + name + ', le damos la bienvenida!');
}; */

let showFlights = () => {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === false) {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y no realiza ninguna escala.'
            );
        } else {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y realiza escala.'
            );
        }
    }
};

let averageCost = () => {
    let totalCost = 0;
    for (let i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
    }
    let result = totalCost / flights.length;
    console.log('El coste medio de los vuelos es de: ' + result + '€.');
};

let showFlightsScale = () => {
    let flightsScale = 0;
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            flightsScale = flightsScale + flights[i].scale;
        }
    }
    console.log('Hay ' + flightsScale + ' vuelos que efectúan escalas:');

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            console.log(
                'El vuelo con origen: ' +
                    flights[i].from +
                    ' y destino: ' +
                    flights[i].to +
                    ', tiene un coste de ' +
                    flights[i].cost +
                    '€ y efectúa escala.'
            );
        }
    }
};

let showLastFive = () => {
    console.log('Los últimos 5 vuelos del día son:');
    for (let i = 0; i < flights.length; i++) {
        if (i > flights.length - 6) {
            if (flights[i].scale === false) {
                console.log(
                    'El vuelo con origen: ' +
                        flights[i].from +
                        ' y destino: ' +
                        flights[i].to +
                        ', tiene un coste de ' +
                        flights[i].cost +
                        '€ y no realiza ninguna escala.'
                );
            } else {
                console.log(
                    'El vuelo con origen: ' +
                        flights[i].from +
                        ' y destino: ' +
                        flights[i].to +
                        ', tiene un coste de ' +
                        flights[i].cost +
                        '€ y realiza escala.'
                );
            }
        }
    }
};

getName();
showFlights();
alert('A continuación, verá el coste medio de los vuelos.');
averageCost();
alert('También podrá ver los vuelos que efectúan escalas.');
showFlightsScale();
alert('Por último, verá los últimos 5 vuelos del día.');
showLastFive();
