// Esercizio 1 - palindromo
var scriptBtn1 = document.getElementById('esercizio-1');

scriptBtn1.addEventListener('click',
  function() {
    //Chiedo di inserire una parola
    var parolaUtente = prompt('Inserisci una parola')
    console.log(parolaUtente);

    // La mia funzione
    verificaPolindroma(parolaUtente);
  }
);

//Esercizio 2 - Pari e Dispari
var scriptBtn1 = document.getElementById('esercizio-2');

scriptBtn1.addEventListener('click',
  function() {
    //Utente sceglie pari o dispari
    var pariOdispari = parseInt(prompt("Secgli 1 per pari o 0 per dispari"));
    //Validazione della scelta
    while ( (pariOdispari != 1) && (pariOdispari != 0) ) {
      pariOdispari = parseInt(prompt("Errore: Digita 0 o 1"));
    }

    //Scelta dell'utente
    var sceltaUtente = 'dispari';
    var dispari = sceltaUtente;
     if(pariOdispari == 1) {
       sceltaUtente = 'pari';
    }
    console.log('utente ha scelto ' + sceltaUtente)

    //Chiedo un numero da 1 a 5 all'utente
    var numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'));
    //Validazione numeroUtente
    while ( !(numeroUtente <= 5) ) {
      numeroUtente = parseInt(prompt('Sai contare fino a 5? digita un numero da 1 a 5!'));
    }
    console.log('Numero digitato dall\'utente ' + numeroUtente);

    //Numero random al computer
    var numeroComputer = randomNumber();
    console.log('numero random dell\'computer ' + numeroComputer);

    var numeroPariDispari = pariDispari(numeroUtente, numeroComputer);
    console.log(numeroPariDispari);

    //Vediamo chi ha vinto
    if (sceltaUtente == 'pari' && numeroPariDispari == true) {
      alert('ha vinto l\'umano perche ha scelto pari');
    } else if (sceltaUtente == 'dispari' && numeroPariDispari == false) {
      alert('l\'umano ha vinto perche ha scelto dispari')
    }
    else {
      alert('ha vinto la macchina AHAHAHAAHAHAH');
    }
  }
);

// ======================= FUNCTIONS ==============================

//Function 1
//Funzione di verifica se una parola è Polindrome.
//Argomento deve essere una stringa !important
function verificaPolindroma(parola) {

  //Validazione parola
  while( (parola == '') || (parola == null) || !isNaN(parola) || (parola.length < 2) ) {
    parola = prompt('Errore: Non hai inserito una parola! Inserisci una parola');
  }
  //Variabile sulla qualle effettuare il controllo
  var controllo = false;
  var parolaInvertita = "";
  for(var i = parola.length - 1; i >= 0; i--) {
    parolaInvertita += parola[i];
    if (parola == parolaInvertita) {
      controllo = true;
    }
  }

  //Messaggio di output
  if(controllo == true) {
    alert('Parola polindroma')
  } else {
    alert('Non è una parola polindroma')
  }
};

//Function 2
// generiamo un numero random da 1 a 5
function randomNumber() {
  var numeroComputer = Math.floor(Math.random() * 6);
  return numeroComputer
}

//Function 3
//Somiamo due numeri e vediamo se è un numero pari o dispari
function pariDispari(num1, num2) {
  //Somma i due numeri
  var somma = num1 + num2;

  //Stabiliamo se è pari
  var pari = false;
  if(somma % 2 == 0) {
    pari = true;
  }
  return pari;
}
