let usedNumbers = [];
let usedDrumNumbers = [];
let randomNumber = 0;
let isPlaying = true;
let line = false;
let won = false;
let rounds = 0;
let userName;

const bingoCard = [
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
];

const scoreRanking = [
    { name: 'Carlos', points: 65 },
    { name: 'María', points: 55 },
    { name: 'Fran', points: 45 },
    { name: 'Lucía', points: 35 },
    { name: 'Ana', points: 25 },
];

alert('¡BIENVENIDO/A AL BINGO!');

const getName = () => {
    const name = prompt('Por favor, introduce tu nombre.');
    if (name === null || name.trim().length === 0) {
        return getName();
    } else {
        confirm('Gracias ' + name + '. ¡Que comience el juego!');
        userName = name;
    }
};

systemOfPoints = () => {
    alert('A continuación, te mostraremos el sistema de puntuación.');
    console.log('SISTEMA DE PUNTUACIÓN:');
    console.log('• Cada jugador comenzará con 115 puntos.');
    console.log(
        '• A más turnos, menos puntos (se irá perdiendo 1 punto por cada turno jugado).'
    );
    console.log('• ¡Ganará el que consiga la mayor puntuación!');
};

const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 99 + 1);
    if (usedNumbers.includes(randomNumber)) {
        return getRandomNumber();
    }
    usedNumbers.push(randomNumber);
    return randomNumber;
};

const generateBingoCard = () => {
    alert('Estamos repartiendo los cartones... Aquí tienes el tuyo :)');
    for (let i = 0; i < bingoCard.length; i++) {
        bingoCard[i].number = getRandomNumber();
        bingoCard[i].matched = false;
    }
    bingoCard.sort(function (a, b) {
        return a.number - b.number;
    });
    usedNumbers = [];
    usedDrumNumbers = [];
    rounds = 0;
    line = false;
    won = false;
    showBingoCard();
};

const lotteryDrum = () => {
    let drumNumber = Math.floor(Math.random() * 99 + 1);
    if (usedDrumNumbers.includes(drumNumber)) {
        return lotteryDrum();
    }
    usedDrumNumbers.push(drumNumber);
    return drumNumber;
};

const distributeBingoCards = () => {
    let userResponse = prompt(
        '¿Te quedas con este cartón? Responde «si», en caso contrario se generará otro.'
    );
    if (userResponse === null) {
        isPlaying = false;
        alert('¡Vuelve pronto!');
    } else if (userResponse.toLowerCase() !== 'si' && userResponse !== null) {
        generateBingoCard();
        distributeBingoCards();
    } else {
        alert('¡Buena elección, mucha suerte!');
    }
};

const playGame = () => {
    do {
        if (confirm('¿Quieres sacar un número?')) {
            newTurn();
            checkIfLine();
            checkIfWin();
            showBingoCard();
        } else {
            isPlaying = false;
        }
    } while (!won && isPlaying);
    if (won) {
        alert(`¡Felicidades! Has ganado la partida en ${rounds} turnos.`);
        const userScore = getScore();
        addScore(userScore);
        console.table(scoreRanking);
        if (confirm('¿Deseas volver a jugar?')) {
            generateBingoCard();
            distributeBingoCards();
            playGame();
        } else {
            alert('¡Hasta pronto!');
        }
    } else {
        console.table(scoreRanking);
        alert('¡Vuelve pronto!');
    }
};

const newTurn = () => {
    const drumNumber = lotteryDrum();
    alert(`El número que ha salido es... ¡${drumNumber}!`);
    bingoCard.forEach((character) => {
        if (character.number === drumNumber) {
            character.matched = true;
        }
    });
    rounds++;
};

const checkIfWin = () => {
    for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i].matched === false) {
            return;
        }
    }
    won = true;
    return;
};

const checkIfLine = () => {
    if (line === false) {
        let counter = 0;
        for (let i = 0; i < 5; i++) {
            if (bingoCard[i].matched === true) {
                counter++;
                if (counter === 5) {
                    alert('¡Línea! Estás más cerca de ganar.');
                    line = true;
                }
            }
        }
        counter = 0;
        for (let i = 5; i < 10; i++) {
            if (bingoCard[i].matched === true) {
                counter++;
                if (counter === 5) {
                    alert('¡Línea! Estás más cerca de ganar.');
                    line = true;
                }
            }
        }
        counter = 0;
        for (let i = 10; i < 15; i++) {
            if (bingoCard[i].matched === true) {
                counter++;
                if (counter === 5) {
                    alert('¡Línea! Estás más cerca de ganar.');
                    line = true;
                }
            }
        }
    }
};

const getScore = () => {
    return 115 - rounds;
};

const addScore = (score) => {
    for (let i = 0; i < scoreRanking.length; i++) {
        if (scoreRanking[i].points < score) {
            scoreRanking.splice(i, 0, { name: userName, points: score });
            return;
        }
    }
    scoreRanking.push({ name: userName, points: score });
};

const showBingoCard = () => {
    let userBingoCard = [];
    for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i].matched === true) {
            userBingoCard.push({ number: bingoCard[i].number, matched: 'X' });
        } else {
            userBingoCard.push({ number: bingoCard[i].number, matched: '' });
        }
    }
    console.table(userBingoCard);
};

const bingo = () => {
    getName();
    systemOfPoints();
    generateBingoCard();
    distributeBingoCards();
    if (isPlaying === true) {
        playGame();
    }
};

bingo();
