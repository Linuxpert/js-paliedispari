// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.


//div per stampare i le frasi in html
const parola = document.getElementById("parola");
const result = document.getElementById("result");

//chiedere all'utente la parola
var parolaInserita = prompt("inserisci una parola");
parola.innerHTML = "la parola inserita è: " + parolaInserita;

var parolaInversa = invertiParola(parolaInserita);

//comparare la parola inserita con quella inversa
if(comparaParola(parolaInserita, parolaInversa)){
    result.innerHTML = "si la parola " + parolaInserita +  " è palindroma "
    console.log("si la parola è palindroma");
}else {
    result.innerHTML = "no la parola " + parolaInserita +  " non è palindroma "
    console.log("no la parola non è palindroma");
}

const pali = comparaParola(parolaInserita, parolaInversa);




//funzioni
function invertiParola(stringa){
    var stringaInversa = stringa.split('').reverse().join('');
    return stringaInversa;
}

function comparaParola(stringa1, stringa2){
    var controllo = stringa1 === stringa2;
    return controllo;
}