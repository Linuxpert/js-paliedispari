
const userPariDisp = document.getElementById("userparidsp");
const userNumb = document.getElementById("usernum");
const pc = document.getElementById("pc");
const number = document.getElementById("result");

//variabili
let numRandom;
let numero;


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let pariDispari = prompt("pari o dispari?");
userPariDisp.innerHTML = "hai scelto: " + pariDispari;
let userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("il tuo numero è: ",userNum);
userNumb.innerHTML = "il tuo numero è: " + userNum;



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(numRandom){

    let pcNum = Math.floor(Math.random() *5) + 1;
    return pcNum;
}

const num = randomNumber(numRandom);
console.log("il numero del pc è: ",num);

pc.innerHTML = "il numero del pc è " + num


// Sommiamo i due numeri

const sum = num + userNum;
console.log("la somma è: ",sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function checkPariDispari(numero){
    

    if(sum % 2 === 0){
        result = "ha vinto il pari";
    } else {
        result = "ha vinto il dispari";
    }

    return result;
}


// Dichiariamo chi ha vinto.
const winner = checkPariDispari(numero);
console.log(winner);
number.innerHTML = winner + " con: " + sum;