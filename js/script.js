// Esercizio 1


// Prendo gli elementi in pagina

const finalResult = document.getElementById('result')

// Chiedo all'utente di dirmi una parola
const word = prompt("Inserisci una parola");
console.log(word)


// Roversio la parola per leggerla al contrario

function reverseText(text) {
    let reverseWord = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverseWord += text[i];
    }

    return reverseWord;
}

// Stampo in console la parola ruotata e tutta minuscola
const result = reverseText(word).toLowerCase();
console.log(result);

// Creo una funzione che mi confronti la parola ruotata con quella originale

function isPalindrome(text) {
    let palText = text.toLowerCase()

    return palText === result
}

// Decido il messaggio per i vari cari e lo stampo in pagina

const palindromeResult = isPalindrome(word);

if (palindromeResult) {
    finalResult.innerHTML = (`"${word}" è palindroma`)
    console.log(`"${word}" è palindroma`)
} else {
    finalResult.innerHTML = (`"${word}" non è palindroma`)
    console.log(`"${word}" non è palindroma`)
}



// Esercizio 2

// Prendo gli elementi in pagina

const winnerResult = document.getElementById('result-win')

// Chiediamo all'utente di scegliere un numero da 1 a 5 

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"))

// Validazione
if (isNaN(userNumber)) {
    alert("Devi fornire un numero!")
}

function getRandomNumber(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min)) + min;

}

console.log(userNumber)
const cpuNumber = parseInt(getRandomNumber())
console.log(cpuNumber)

// Creo una funzione per fare la somma

function sum(num1, num2) {
    return num1 + num2;
}

const sumResult = sum(userNumber, cpuNumber)
console.log(sumResult)

// Creo una funzione per sapere se il numero è pari o dispari

function isEven(number) {
    let message = ''

    if (number % 2 === 0) {
        message = 'Il numero è Pari'
        console.log('Il numero è Pari')
    } else {
        message = 'Il numero è Dispari'
        console.log('Il numero è Dispari')
    }

    return message
}

const evenOrOdds = isEven(sumResult)
console.log(evenOrOdds)


//Sfido il computer e creo un messaggio in caso nessuna delle condizioni venga rispettata

let messagewin = 'Pareggio';

// Creo una funzione per calcolare se il numero più alto è quello dell'utente o della Cpu

function win(unum, cnum) {

    //Condizioni di vittoria

    if (unum > cnum) {
        messagewin = 'Hai vinto';
    } else if (unum < cnum) {
        messagewin = 'Hai perso';
    }

    return messagewin
}

messagewin = win(userNumber, cpuNumber)
console.log(messagewin)


//Scrivo in pagina

const resultwin = `
<p>Risultato Giocatore: ${userNumber}<p>
<p>Risultato Cpu: ${cpuNumber}<p>
<p><strong>${messagewin}<strong><p>
`

winnerResult.innerHTML = resultwin;